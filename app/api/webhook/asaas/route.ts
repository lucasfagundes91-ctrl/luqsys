import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Sistemas com path de webhook diferente do padrão `/webhook/asaas`.
const PATH_OVERRIDE: Record<string, string> = {
  pontopro: "/api/webhooks/asaas",
  horapro: "/api/webhooks/asaas",
  euseivotar: "/api/webhook/asaas",
};

// Sistemas que NÃO estão em `<slug>.luqsys.com.br` (ex.: marca própria).
const DOMAIN_OVERRIDE: Record<string, string> = {
  luquishop: "www.luquibrinquedos.com.br",
  euseivotar: "euseivotar.com.br",
};

// Mapeia keyword na description do pagamento → slug do sistema.
// Ordem importa: keywords mais específicas primeiro.
const SISTEMA_MAP: Array<[string, string]> = [
  ["contabilidadepro", "contabilidadepro"],
  ["bankpro", "bankpro"],
  ["frotapro", "frotapro"],
  ["farmpro", "farmpro"],
  ["silopro", "silopro"],
  ["silo pro", "silopro"],
  ["pdv pro", "pdvpro"],
  ["pdvpro", "pdvpro"],
  ["milhaspro", "milhaspro"],
  ["viagempro", "viagempro"],
  ["horapro", "horapro"],
  ["hora pro", "horapro"],
  ["pontopro", "pontopro"],
  ["solarpro", "solarpro"],
  ["aluguelpro", "aluguelpro"],
  ["obraspro", "obraspro"],
  ["obras pro", "obraspro"],
  ["obrapro", "obraspro"],
  ["adspro", "adspro"],
  ["ads pro", "adspro"],
  ["agendapro", "agendapro"],
  ["agenda pro", "agendapro"],
  ["comandapro", "comandapro"],
  ["comanda pro", "comandapro"],
  // Uma das telas do caixa cria a cobrança como "Comanda #62", sem o "Pro".
  ["comanda #", "comandapro"],
  // Recarga de saldo do motorista: a marca do eletroposto é Lume.
  ["recarga saldo lume", "carregapro"],
  ["rotinapro", "rotinapro"],
  ["rotina pro", "rotinapro"],
  ["carregapro", "carregapro"],
  ["carrega pro", "carregapro"],
  ["sorripro", "sorripro"],
  ["sorri pro", "sorripro"],
  // Nome antigo do SorriPro (trocado em 20/07/2026 por conflito de marca).
  // Cobrança criada antes da troca ainda chega com "odontopro" na description.
  ["odontopro", "sorripro"],
  ["odonto pro", "sorripro"],
  // LuquiShop (loja online da Luqui Brinquedos) — descriptions:
  //   "Luqui Brinquedos — Pedido #N" e "Clube Luqui — Plano X"
  ["luqui brinquedos", "luquishop"],
  ["clube luqui", "luquishop"],
  // EuSeiVotar — produto B2C sazonal, acesso único (não assinatura)
  ["euseivotar", "euseivotar"],
  ["eu sei votar", "euseivotar"],
  // LivroPro — livro em episódio de podcast, assinatura mensal
  ["livropro", "livropro"],
  ["livro pro", "livropro"],
  // Virada — teste de transição de carreira, compra única (relatório)
  // description: "Virada — Relatório completo de transição de carreira"
  ["virada", "virada"],
];

// Prefixo do externalReference → sistema. Vem ANTES da description porque é
// o sinal forte: quem gera a cobrança carimba a própria referência, enquanto
// a description é texto livre. Foi o que faltava até 16/08/2026 — cobrança de
// comanda ("Comanda #62") e recarga do Lume ("Recarga saldo Lume R$ 5,00")
// não tinham o nome do sistema no texto e o router não sabia pra onde mandar.
const REF_PREFIXO: Array<[string, string]> = [
  ["cp-", "comandapro"], // comanda paga no PIX do caixa
  ["recarga:", "carregapro"], // saldo do motorista no Lume
  ["link-pag-", "pdvpro"], // link de pagamento/crediário da loja
  ["pedido-", "luquishop"],
  ["clube-", "luquishop"],
];

function detectSistema(payment: any): string | null {
  const ref = String(payment?.externalReference || "").toLowerCase();
  if (ref) {
    for (const [prefixo, slug] of REF_PREFIXO) {
      if (ref.startsWith(prefixo)) return slug;
    }
  }
  const desc = String(payment?.description || "").toLowerCase();
  for (const [keyword, slug] of SISTEMA_MAP) {
    if (desc.includes(keyword)) return slug;
  }
  return null;
}

export async function POST(req: NextRequest) {
  const masterToken = process.env.ASAAS_MASTER_WEBHOOK_TOKEN;
  const received =
    req.headers.get("asaas-access-token") ||
    req.headers.get("Asaas-Access-Token") ||
    "";

  if (!masterToken) {
    return NextResponse.json(
      { error: "ASAAS_MASTER_WEBHOOK_TOKEN não configurado no Vercel" },
      { status: 500 }
    );
  }
  if (received !== masterToken) {
    return NextResponse.json({ error: "token inválido" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const event = body?.event || "";

  const EVENTOS_REPASSAR = [
    "PAYMENT_CONFIRMED",
    "PAYMENT_RECEIVED",
    "PAYMENT_OVERDUE",
    "PAYMENT_DELETED",
    "SUBSCRIPTION_DELETED",
    "PAYMENT_REFUNDED",
    "PAYMENT_CHARGEBACK_REQUESTED",
  ];
  if (!EVENTOS_REPASSAR.includes(event)) {
    return NextResponse.json({ ok: true, ignored: event });
  }

  // Daqui pra baixo, erro permanente responde 200. O Asaas entrega em
  // sendType=SEQUENTIALLY: qualquer resposta fora de 2xx fica sendo retentada
  // pra sempre e, depois de algumas falhas, ele marca o webhook como
  // `interrupted` — e aí PARA A FILA INTEIRA, de todos os sistemas. Foi o que
  // aconteceu até 16/08/2026. Cobrança que não dá pra atribuir não vai virar
  // atribuível numa retentativa; melhor tirar da fila e registrar no log.
  const slug = detectSistema(body?.payment);
  if (!slug) {
    console.error("router: sistema não identificado", {
      desc: body?.payment?.description,
      payment: body?.payment?.id,
    });
    return NextResponse.json({
      ok: true,
      ignored: "sistema não identificado pela description",
      description: body?.payment?.description,
    });
  }

  let tokens: Record<string, string> = {};
  try {
    tokens = JSON.parse(process.env.ASAAS_SYSTEM_TOKENS || "{}");
  } catch {
    return NextResponse.json(
      { error: "ASAAS_SYSTEM_TOKENS inválido (não é JSON)" },
      { status: 500 }
    );
  }
  // Tokens podem vir em vars dedicadas por sistema (sem mexer no JSON).
  if (process.env.ASAAS_TOKEN_SILOPRO) {
    tokens.silopro = process.env.ASAAS_TOKEN_SILOPRO;
  }
  if (process.env.ASAAS_TOKEN_COMANDAPRO) {
    tokens.comandapro = process.env.ASAAS_TOKEN_COMANDAPRO;
  }
  if (process.env.ASAAS_TOKEN_LUQUISHOP) {
    tokens.luquishop = process.env.ASAAS_TOKEN_LUQUISHOP;
  }
  if (process.env.ASAAS_TOKEN_LIVROPRO) {
    tokens.livropro = process.env.ASAAS_TOKEN_LIVROPRO;
  }

  const systemToken = tokens[slug];
  if (!systemToken) {
    // 200 pelo mesmo motivo de cima: 500 aqui paralisava a fila de todos os
    // sistemas por causa de um só que faltou configurar.
    console.error(`router: token do sistema ${slug} não configurado`, {
      payment: body?.payment?.id,
    });
    return NextResponse.json({
      ok: true,
      ignored: `token do sistema ${slug} não configurado`,
    });
  }

  const path = PATH_OVERRIDE[slug] || "/webhook/asaas";
  const host = DOMAIN_OVERRIDE[slug] || `${slug}.luqsys.com.br`;
  const upstreamUrl = `https://${host}${path}`;
  let upstreamStatus = 0;
  let upstreamBody: any = null;
  try {
    const r = await fetch(upstreamUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "asaas-access-token": systemToken,
      },
      body: JSON.stringify(body),
    });
    upstreamStatus = r.status;
    upstreamBody = await r.json().catch(() => null);
  } catch (e) {
    return NextResponse.json(
      {
        error: "upstream fetch falhou",
        slug,
        upstream: upstreamUrl,
        details: String(e),
      },
      { status: 502 }
    );
  }

  console.log(
    `router: ${event} → ${slug} (HTTP ${upstreamStatus})`,
    upstreamBody
  );

  return NextResponse.json({
    ok: upstreamStatus >= 200 && upstreamStatus < 300,
    routed_to: slug,
    upstream_status: upstreamStatus,
    upstream: upstreamBody,
  });
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    endpoint: "asaas webhook router",
    note: "POST only with asaas-access-token header",
  });
}
