import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instalar os apps no celular",
  description:
    "Todos os sistemas Luqsys na tela de início do iPhone ou do Android — inclusive os atalhos de Resumo e Conferir.",
};

type App = {
  slug: "icon" | "resumo" | "conferir" | "admin";
  nome: string;
  desc: string;
  caminho: string;
};

type Sistema = {
  host: string;
  nome: string;
  emoji: string;
  o_que: string;
  /** Sem PNG na pasta /public/apps: o card usa o emoji. */
  semIcone?: boolean;
  /** URL completa quando o app não vive em <host>.luqsys.com.br. */
  url?: string;
  /** Sistemas com manifest por app + perfil de atalhos do iPhone. */
  apps?: App[];
  /** App fora do ar hoje — listado, mas sem convidar a instalar. */
  indisponivel?: string;
};

type Grupo = { titulo: string; sistemas: Sistema[] };

// Ícones ficam em /public/apps deste site, não no host de cada sistema: os
// subdomínios luqsys são DNS-only (só IPv4) e a imagem some no celular em
// rede 5G IPv6-only, mesmo com a página carregando normal.
const grupos: Grupo[] = [
  {
    titulo: "Para seu negócio",
    sistemas: [
      {
        host: "pdvpro", nome: "PDV Pro", emoji: "🛒",
        o_que: "PDV + ERP da loja",
      },
      {
        host: "farmpro", nome: "FarmPro", emoji: "🌾",
        o_que: "Gestão da fazenda",
        apps: [
          { slug: "icon", nome: "FarmPro", caminho: "/", desc: "Notas, lançamentos, folha e caderno de campo." },
          { slug: "resumo", nome: "Resumo", caminho: "/resumo", desc: "Pendências, mural e agenda do dia." },
          { slug: "conferir", nome: "Conferir", caminho: "/conferir", desc: "Fila das despesas do BankPro." },
        ],
      },
      {
        host: "obraspro", nome: "ObrasPro", emoji: "🏗️",
        o_que: "Controle financeiro de obra",
        apps: [
          { slug: "icon", nome: "ObrasPro", caminho: "/", desc: "Obras, gastos, etapas e investidores." },
          { slug: "resumo", nome: "Resumo", caminho: "/resumo", desc: "Custo por obra, vencimentos e últimos gastos." },
          { slug: "conferir", nome: "Conferir", caminho: "/conferir", desc: "Fila das despesas do BankPro." },
        ],
      },
      {
        host: "aluguelpro", nome: "AluguelPro", emoji: "🔑",
        o_que: "Imóveis e aluguéis",
        apps: [
          { slug: "icon", nome: "AluguelPro", caminho: "/", desc: "Imóveis, contratos, vistorias e repasses." },
          { slug: "resumo", nome: "Resumo", caminho: "/resumo", desc: "Recebido no mês, atrasos e vencimentos." },
          { slug: "conferir", nome: "Conferir", caminho: "/conferir", desc: "Baixa dos aluguéis em aberto." },
        ],
      },
      {
        host: "frotapro", nome: "FrotaPro", emoji: "🚚",
        o_que: "Frota e veículos",
        apps: [
          { slug: "icon", nome: "FrotaPro", caminho: "/", desc: "Veículos, gastos, lembretes e anúncios." },
          { slug: "resumo", nome: "Resumo", caminho: "/resumo", desc: "Gasto do mês, lembretes e KM." },
          { slug: "conferir", nome: "Conferir", caminho: "/conferir", desc: "Fila das despesas do BankPro." },
        ],
      },
      { host: "silopro", nome: "SiloPro", emoji: "🌾", o_que: "Pesagem de silo" },
      { host: "solarpro", nome: "SolarPro", emoji: "☀️", o_que: "Energia solar" },
      { host: "carregapro", nome: "CarregaPro", emoji: "⚡", o_que: "Eletroposto" },
      { host: "botapro", nome: "BotaPro", emoji: "🥾", o_que: "Indústria de calçado" },
      { host: "adspro", nome: "AdsPro", emoji: "📣", o_que: "Anúncios no Meta" },
      { host: "agendapro", nome: "AgendaPro", emoji: "📅", o_que: "Agendamento online" },
      { host: "sorripro", nome: "SorriPro", emoji: "🦷", o_que: "Clínica odontológica", semIcone: true },
      { host: "comandapro", nome: "ComandaPro", emoji: "🍽️", o_que: "Restaurante e bar" },
      { host: "rotinapro", nome: "RotinaPro", emoji: "📋", o_que: "Checklists e rotinas" },
      { host: "vigiapro", nome: "VigiaPro", emoji: "📹", o_que: "Câmeras e alertas" },
    ],
  },
  {
    titulo: "RH e conformidade",
    sistemas: [
      { host: "horapro", nome: "HoraPro", emoji: "⏰", o_que: "Ponto eletrônico" },
      {
        host: "contabilidadepro", nome: "ContabilidadePro", emoji: "📊",
        o_que: "Livro caixa e contabilidade", semIcone: true,
      },
    ],
  },
  {
    titulo: "Finanças",
    sistemas: [
      {
        host: "bankpro", nome: "BankPro", emoji: "💰",
        o_que: "Contas, cartões e lançamentos",
        apps: [
          { slug: "icon", nome: "BankPro", caminho: "/", desc: "Contas, cartões, lançamentos e relatórios." },
          { slug: "resumo", nome: "Resumo", caminho: "/resumo", desc: "Saldo, alertas e últimos lançamentos." },
          { slug: "conferir", nome: "Conferir", caminho: "/conferir", desc: "Comprovantes que chegam pelo WhatsApp." },
        ],
      },
      {
        host: "assinaturaspro", nome: "AssinaturasPro", emoji: "🧾",
        o_que: "Assinaturas dos clientes",
        indisponivel: "app fora do ar",
      },
    ],
  },
  {
    titulo: "Loja online",
    sistemas: [
      {
        host: "luqui", nome: "Luqui Brinquedos", emoji: "🧸",
        o_que: "Loja e gestão dos pedidos",
        url: "https://www.luquibrinquedos.com.br",
        apps: [
          { slug: "icon", nome: "Loja", caminho: "/", desc: "Catálogo, carrinho e acompanhamento do pedido." },
          { slug: "admin", nome: "Gestão", caminho: "/admin", desc: "Pedidos, produtos, clientes e campanhas." },
        ],
      },
    ],
  },
  {
    titulo: "Viagens",
    sistemas: [
      {
        host: "viagempro", nome: "ViagemPro", emoji: "🧳",
        // A busca em milhas virou parte do ViagemPro na fusão: milhaspro.luqsys
        // e viagempro.luqsys servem o MESMO app. Dois cards instalariam o mesmo
        // atalho duas vezes.
        o_que: "Roteiro, passagem em milhas e hospedagem",
      },
    ],
  },
  {
    titulo: "Produtos ao público",
    sistemas: [
      {
        host: "virada", nome: "Virada", emoji: "🔄",
        o_que: "Teste de transição de carreira",
      },
      {
        host: "euseivotar", nome: "EuSeiVotar?", emoji: "🗳️",
        o_que: "Votações do Congresso", semIcone: true,
        url: "https://euseivotar.com.br",
      },
    ],
  },
];

const base = (s: Sistema) => s.url ?? `https://${s.host}.luqsys.com.br`;

function Icone({ s, tam }: { s: Sistema; tam: number }) {
  if (s.semIcone) {
    return (
      <span
        className="flex flex-none items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]"
        style={{ width: tam, height: tam, fontSize: tam * 0.5 }}
        aria-hidden
      >
        {s.emoji}
      </span>
    );
  }
  return (
    <img
      src={`/apps/${s.host}-icon.png`}
      alt=""
      width={tam}
      height={tam}
      className="flex-none rounded-xl"
    />
  );
}

export default function InstalarPage() {
  return (
    <main className="radial-bg min-h-screen">
      <div className="mx-auto max-w-3xl px-5 pb-24 pt-14">
        <Link href="/" className="text-sm text-white/45 transition-colors hover:text-gold">
          ← Luqsys
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="gold-gradient-text">Instalar no celular</span>
        </h1>
        <p className="mt-3 max-w-xl text-white/60">
          Todos os sistemas, prontos pra virar ícone na tela de início. Abra
          esta página <strong className="text-white/90">no celular</strong> e
          toque no que você usa.
        </p>

        <div className="mt-6 rounded-xl border border-gold-dark/60 bg-gold/[0.06] p-4 text-sm text-white/70">
          <strong className="text-gold">Um toque, no iPhone.</strong>{" "}
          O botão <strong className="text-white/90">Instalar</strong> abre a
          página do sistema, de onde sai um perfil que põe o atalho na tela de
          início — sem precisar do menu Compartilhar. No{" "}
          <strong className="text-white/90">Android</strong>, o Chrome oferece
          instalar assim que o app abre.
        </div>

        {grupos.map((g) => (
          <section key={g.titulo} className="mt-10">
            <h2 className="mb-3 px-1 text-xs font-bold uppercase tracking-wider text-white/40">
              {g.titulo}
            </h2>
            <div className="space-y-3">
              {g.sistemas.map((s) => (
                <div
                  key={s.host}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-bg-card"
                >
                  <div className="flex items-center gap-4 p-4">
                    <Icone s={s} tam={46} />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold">{s.nome}</h3>
                      <p className="truncate text-sm text-white/45">
                        {s.o_que}
                        {s.indisponivel ? ` · ${s.indisponivel}` : ""}
                      </p>
                    </div>
                    {s.indisponivel ? (
                      <span className="flex-none rounded-lg border border-white/10 px-3 py-2 text-xs text-white/35">
                        indisponível
                      </span>
                    ) : (
                      <a
                        href={`${base(s)}/instalar`}
                        className="flex-none rounded-lg bg-gold px-4 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90"
                      >
                        Instalar
                      </a>
                    )}
                  </div>

                  {s.apps && (
                    <ul className="divide-y divide-white/[0.06] border-t border-white/10">
                      {s.apps.map((a) => (
                        <li key={a.slug}>
                          <a
                            href={`${base(s)}${a.caminho}?instalar=1`}
                            className="flex items-center gap-4 px-4 py-3 transition-colors hover:bg-white/[0.03]"
                          >
                            <img
                              src={`/apps/${s.host}-${a.slug}.png`}
                              alt=""
                              width={34}
                              height={34}
                              className="flex-none rounded-lg"
                            />
                            <div className="min-w-0 flex-1">
                              <div className="text-sm font-semibold">
                                {a.nome === s.nome ? a.nome : `${s.nome} ${a.nome}`}
                              </div>
                              <div className="truncate text-xs text-white/40">
                                {a.desc}
                              </div>
                            </div>
                            <span className="flex-none text-white/25">›</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

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
