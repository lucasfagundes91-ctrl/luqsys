import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Sistemas com path de webhook diferente do padrão `/webhook/asaas`.
const PATH_OVERRIDE: Record<string, string> = {
  pontopro: "/api/webhooks/asaas",
  horapro: "/api/webhooks/asaas",
};

// Sistemas que NÃO estão em `<slug>.luqsys.com.br` (ex.: marca própria).
const DOMAIN_OVERRIDE: Record<string, string> = {
  luquishop: "www.luquibrinquedos.com.br",
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
];

function detectSistema(payment: any): string | null {
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

  const slug = detectSistema(body?.payment);
  if (!slug) {
    console.error("router: sistema não identificado", {
      desc: body?.payment?.description,
    });
    return NextResponse.json(
      {
        error: "sistema não identificado pela description",
        description: body?.payment?.description,
      },
      { status: 422 }
    );
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

  const systemToken = tokens[slug];
  if (!systemToken) {
    return NextResponse.json(
      { error: `token do sistema ${slug} não configurado` },
      { status: 500 }
    );
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
