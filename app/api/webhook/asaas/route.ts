import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Mapeia keyword na description do pagamento → slug do sistema.
// Ordem importa: keywords mais específicas primeiro.
const SISTEMA_MAP: Array<[string, string]> = [
  ["contabilidadepro", "contabilidadepro"],
  ["bankpro", "bankpro"],
  ["frotapro", "frotapro"],
  ["farmpro", "farmpro"],
  ["pdv pro", "pdvpro"],
  ["pdvpro", "pdvpro"],
  ["milhaspro", "milhaspro"],
  ["viagempro", "viagempro"],
  ["pontopro", "pontopro"],
  ["solarpro", "solarpro"],
  ["aluguelpro", "aluguelpro"],
  ["obrapro", "obrapro"],
  ["obras pro", "obrapro"],
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

  if (!["PAYMENT_CONFIRMED", "PAYMENT_RECEIVED"].includes(event)) {
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

  const systemToken = tokens[slug];
  if (!systemToken) {
    return NextResponse.json(
      { error: `token do sistema ${slug} não configurado` },
      { status: 500 }
    );
  }

  const upstreamUrl = `https://${slug}.luqsys.com.br/webhook/asaas`;
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
