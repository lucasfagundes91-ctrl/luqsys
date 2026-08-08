import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instalar os apps no celular",
  description:
    "Coloque cada sistema Luqsys na tela de início do iPhone ou do Android: o sistema completo, o painel Resumo e a fila Conferir.",
};

type App = {
  slug: "icon" | "resumo" | "conferir";
  nome: string;
  desc: string;
  caminho: string;
};

type Sistema = {
  host: string;
  nome: string;
  cor: string;
  o_que: string;
  apps: App[];
};

// Ícones ficam em /public/apps deste site, não no host de cada sistema: os
// subdomínios luqsys são DNS-only (só IPv4) e a imagem some no celular em
// rede 5G IPv6-only, mesmo com a página carregando normal.
const sistemas: Sistema[] = [
  {
    host: "farmpro",
    nome: "FarmPro",
    cor: "#1A5C38",
    o_que: "Gestão da fazenda",
    apps: [
      { slug: "icon", nome: "FarmPro", caminho: "/", desc: "Notas, lançamentos, folha e caderno de campo." },
      { slug: "resumo", nome: "Resumo", caminho: "/resumo", desc: "Pendências, mural e agenda do dia." },
      { slug: "conferir", nome: "Conferir", caminho: "/conferir", desc: "Fila das despesas do BankPro." },
    ],
  },
  {
    host: "bankpro",
    nome: "BankPro",
    cor: "#0b1220",
    o_que: "Contas, cartões e lançamentos",
    apps: [
      { slug: "icon", nome: "BankPro", caminho: "/", desc: "Contas, cartões, lançamentos e relatórios." },
      { slug: "resumo", nome: "Resumo", caminho: "/resumo", desc: "Saldo, alertas e últimos lançamentos." },
      { slug: "conferir", nome: "Conferir", caminho: "/conferir", desc: "Comprovantes que chegam pelo WhatsApp." },
    ],
  },
  {
    host: "obraspro",
    nome: "ObrasPro",
    cor: "#e65100",
    o_que: "Controle financeiro de obra",
    apps: [
      { slug: "icon", nome: "ObrasPro", caminho: "/", desc: "Obras, gastos, etapas e investidores." },
      { slug: "resumo", nome: "Resumo", caminho: "/resumo", desc: "Custo por obra, vencimentos e últimos gastos." },
      { slug: "conferir", nome: "Conferir", caminho: "/conferir", desc: "Fila das despesas do BankPro." },
    ],
  },
  {
    host: "frotapro",
    nome: "FrotaPro",
    cor: "#0d1117",
    o_que: "Frota e veículos",
    apps: [
      { slug: "icon", nome: "FrotaPro", caminho: "/", desc: "Veículos, gastos, lembretes e anúncios." },
      { slug: "resumo", nome: "Resumo", caminho: "/resumo", desc: "Gasto do mês, lembretes e KM." },
      { slug: "conferir", nome: "Conferir", caminho: "/conferir", desc: "Fila das despesas do BankPro." },
    ],
  },
  {
    host: "aluguelpro",
    nome: "AluguelPro",
    cor: "#1e3a8a",
    o_que: "Imóveis e aluguéis",
    apps: [
      { slug: "icon", nome: "AluguelPro", caminho: "/", desc: "Imóveis, contratos, vistorias e repasses." },
      { slug: "resumo", nome: "Resumo", caminho: "/resumo", desc: "Recebido no mês, atrasos e vencimentos." },
      { slug: "conferir", nome: "Conferir", caminho: "/conferir", desc: "Baixa dos aluguéis em aberto." },
    ],
  },
];

export default function InstalarPage() {
  return (
    <main className="radial-bg min-h-screen">
      <div className="mx-auto max-w-3xl px-5 pb-24 pt-14">
        <Link
          href="/"
          className="text-sm text-white/45 transition-colors hover:text-gold"
        >
          ← Luqsys
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="gold-gradient-text">Instalar no celular</span>
        </h1>
        <p className="mt-3 max-w-xl text-white/60">
          Cada sistema vira mais de um app na tela de início: o sistema
          completo, o <strong className="text-white/90">Resumo</strong> (o dia
          numa tela) e o <strong className="text-white/90">Conferir</strong> (a
          fila de aprovação, uma por vez).
        </p>

        <div className="mt-6 rounded-xl border border-gold-dark/60 bg-gold/[0.06] p-4 text-sm text-white/70">
          <strong className="text-gold">No iPhone é um toque só.</strong>{" "}
          Abra a página do sistema abaixo e baixe o perfil de atalhos — ele
          instala os três de uma vez. No Android, o próprio Chrome oferece
          instalar cada um.
        </div>

        <div className="mt-10 space-y-6">
          {sistemas.map((s) => (
            <section
              key={s.host}
              className="overflow-hidden rounded-2xl border border-white/10 bg-bg-card"
            >
              <div className="flex items-center gap-4 border-b border-white/10 p-5">
                <img
                  src={`/apps/${s.host}-icon.png`}
                  alt=""
                  width={52}
                  height={52}
                  className="flex-none rounded-xl"
                />
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-bold">{s.nome}</h2>
                  <p className="text-sm text-white/50">{s.o_que}</p>
                </div>
                <a
                  href={`https://${s.host}.luqsys.com.br/instalar`}
                  className="flex-none rounded-lg bg-gold px-4 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90"
                >
                  Instalar
                </a>
              </div>

              <ul className="divide-y divide-white/[0.06]">
                {s.apps.map((a) => (
                  <li key={a.slug}>
                    <a
                      href={`https://${s.host}.luqsys.com.br${a.caminho}?instalar=1`}
                      className="flex items-center gap-4 p-4 transition-colors hover:bg-white/[0.03]"
                    >
                      <img
                        src={`/apps/${s.host}-${a.slug}.png`}
                        alt=""
                        width={40}
                        height={40}
                        className="flex-none rounded-lg"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-semibold">
                          {a.nome === s.nome ? a.nome : `${s.nome} ${a.nome}`}
                        </div>
                        <div className="truncate text-xs text-white/45">
                          {a.desc}
                        </div>
                      </div>
                      <span className="flex-none text-white/25">›</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-white/40">
          Não tem conta ainda?{" "}
          <Link href="/" className="text-gold hover:underline">
            veja os sistemas
          </Link>
        </p>
      </div>
    </main>
  );
}
