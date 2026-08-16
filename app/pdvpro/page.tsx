import type { Metadata } from "next";
import Link from "next/link";
import { ContactInfo } from "../_components/ContactInfo";

export const metadata: Metadata = {
  title: "PDV Pro — o sistema inteiro da sua loja",
  description:
    "Frente de caixa, NFC-e, estoque, compras, financeiro com conciliação bancária, etiquetas, comissão e atendimento no WhatsApp por IA. Um sistema só, com implantação assistida.",
};

/* ─────────────────────────────────────────────────────────────────────────
   Página dedicada — piloto do padrão "cada sistema com a sua cara".

   Por que ela não usa o ProductLayout: as 21 páginas do site eram o mesmo
   molde dourado, então o PDV Pro (o sistema mais completo da casa, R$ 149 a
   R$ 499) chegava ao visitante com exatamente a mesma cara do AgendaPro. Aqui
   ele ganha o azul que já é a cor dele dentro do app (#1652C7 → #3b82f6 na
   tela escura) e seções que só fazem sentido pra ele: o bloco fiscal, as
   integrações, e a conversa honesta sobre implantação.

   E honestidade nas CTAs: o PDV Pro roda UMA LOJA POR DEPLOY. Não existe
   sandbox nem trial self-service — o /demo dele é uma demonstração ao vivo e
   o /cadastro é liberação assistida. O site prometia "Ver demo" e "Testar 3
   dias" como nos outros, e quem clicava caía numa página de agendamento sem
   entender por quê. Agora a página promete o que existe.
   ───────────────────────────────────────────────────────────────────────── */

const ZAP = (texto: string) =>
  "https://wa.me/5545991077788?text=" + encodeURIComponent(texto);

const DEMO = ZAP("Oi Lucas, quero ver o PDV Pro funcionando");

type Bloco = { icone: string; titulo: string; texto: string; itens: string[] };

const blocos: Bloco[] = [
  {
    icone: "🛒",
    titulo: "Frente de caixa",
    texto:
      "O caixa é onde o sistema não pode travar nem pensar. Busca rápida, troco calculado, várias formas de pagamento na mesma venda.",
    itens: [
      "Crediário, dinheiro, cartão e Pix na mesma venda",
      "Caixa por usuário — cada vendedor abre e fecha o seu",
      "Sangria e suprimento com histórico",
      "Conferência de caixa cego no fechamento",
      "Trocas, devoluções e vale-compras",
      "TEF Pay&Go integrado — a maquininha conversa com o PDV",
    ],
  },
  {
    icone: "🧾",
    titulo: "Fiscal sem susto",
    texto:
      "NFC-e no balcão, NF-e pro atacado, e as notas que chegam de fornecedor manifestadas sozinhas. O contador recebe o pacote pronto.",
    itens: [
      "NFC-e e NF-e pela Focus NFe",
      "Manifestação automática das NF-e recebidas",
      "Devolução a fornecedor com a chave da nota de compra",
      "CFOP e CST por produto e por operação",
      "Pacote mensal de XMLs pro contador, com resumo por CFOP",
      "Conhecimento de frete (CT-e) no mesmo pacote",
    ],
  },
  {
    icone: "📦",
    titulo: "Estoque e compras",
    texto:
      "A entrada da nota do fornecedor já move o estoque e já vira conta a pagar. Ninguém digita a mesma coisa duas vezes.",
    itens: [
      "Compra atualiza estoque e gera contas a pagar",
      "Inventário com modo substituir ou somar por item",
      "Uso e consumo e mercadoria em condicional",
      "Importação de produtos em massa por CSV",
      "Etiquetas com código de barras (Argox e afins)",
      "Aviso de estoque baixo no painel",
    ],
  },
  {
    icone: "💰",
    titulo: "Financeiro de verdade",
    texto:
      "Contas a pagar e a receber, recorrentes e conciliação com o extrato do banco — pra fechar o mês sem planilha paralela.",
    itens: [
      "Contas a pagar e a receber com baixa parcial",
      "Lançamentos recorrentes (aluguel, luz, folha)",
      "Conciliação bancária por OFX e CSV",
      "Comissão por vendedor",
      "DRE e relatórios de venda por período",
      "Painel com vendas do dia, vencidos e estoque baixo",
    ],
  },
  {
    icone: "🤖",
    titulo: "Vende no WhatsApp sozinho",
    texto:
      "A Luquizinha atende o cliente no WhatsApp, responde sobre os produtos do seu catálogo e monta o pedido. Você só confirma.",
    itens: [
      "Atende com o catálogo real da sua loja",
      "Monta o rascunho do pedido pra você conferir",
      "Vira venda no PDV com um clique",
      "Catálogo em Excel e por WhatsApp pra divulgar",
    ],
  },
  {
    icone: "🔗",
    titulo: "Conectado no resto",
    texto:
      "A loja física não vive sozinha. O PDV Pro é o centro e o resto pendura nele sem digitação dobrada.",
    itens: [
      "ShopPro — seu site de e-commerce com o mesmo estoque",
      "Mercado Livre — anúncios e pedidos no mesmo lugar",
      "ContabilidadePro e HoraPro pro resto da operação",
      "Multi-loja com painel consolidado no plano Empresarial",
    ],
  },
];

const passos = [
  {
    n: "1",
    titulo: "A gente conversa",
    texto:
      "15 a 20 minutos no WhatsApp ou numa chamada, com o sistema rodando na tela. Você vê a venda sair, a nota emitir e o relatório fechar — não é vídeo gravado.",
  },
  {
    n: "2",
    titulo: "Seu ambiente sobe",
    texto:
      "O PDV Pro roda uma loja por instalação — o seu banco é só seu. A gente sobe o ambiente com os seus dados fiscais e o seu certificado A1.",
  },
  {
    n: "3",
    titulo: "Seus produtos entram",
    texto:
      "Traz o cadastro do sistema antigo em planilha e a gente importa. Já fizemos migração de sistema legado, inclusive de base Firebird.",
  },
];

const planos = [
  {
    nome: "Essencial",
    publico: "Loja pequena começando",
    preco: "R$ 149",
    itens: [
      "1 loja · até 500 NFC-e/mês",
      "PDV + NFC-e/NF-e",
      "Estoque e inventário",
      "Contas a pagar e a receber",
      "Cadastros e importação por CSV",
      "Etiquetas com código de barras",
      "Suporte por e-mail",
    ],
  },
  {
    nome: "Profissional",
    publico: "A loja completa do dia a dia",
    preco: "R$ 299",
    destaque: true,
    itens: [
      "1 loja · 2.000 NFC-e/mês",
      "Tudo do Essencial",
      "Manifestação de NF-e recebida",
      "Conciliação bancária (OFX/CSV)",
      "Lançamentos recorrentes",
      "Luquizinha — WhatsApp com IA",
      "Suporte no WhatsApp em horário comercial",
    ],
  },
  {
    nome: "Empresarial",
    publico: "Multi-loja e atacado",
    preco: "R$ 499",
    itens: [
      "Até 3 lojas",
      "NFC-e ilimitada, sem excedente",
      "Tudo do Profissional",
      "Painel consolidado das lojas",
      "Suporte prioritário",
      "Implantação dedicada",
    ],
  },
];

const faq = [
  {
    p: "Preciso trocar minha maquininha?",
    r: "Não. O PDV Pro fala com a Pay&Go, que atende as principais adquirentes. Se a sua não for compatível, dá pra seguir digitando o valor na maquininha como você já faz hoje.",
  },
  {
    p: "E os meus produtos do sistema antigo?",
    r: "Vêm junto. Exporta em planilha e a gente importa. Já migramos loja que vinha de sistema desktop antigo, lendo direto a base do sistema anterior.",
  },
  {
    p: "Emite nota mesmo? Com o meu certificado?",
    r: "Sim — NFC-e no balcão e NF-e pro atacado, com o seu certificado A1. A manifestação das notas que os fornecedores te mandam é automática.",
  },
  {
    p: "Por que não tem teste grátis igual aos outros sistemas?",
    r: "Porque o PDV Pro não é multi-inquilino: cada loja roda no seu próprio ambiente, com o seu banco e o seu certificado. Não dá pra abrir sozinho num clique. Em compensação a demonstração é ao vivo e a liberação é acompanhada — você não fica sozinho com um sistema fiscal na mão.",
  },
];

export default function PDVProPage() {
  return (
    <main className="tema-produto tema-pdvpro acc-radial">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 py-5 sm:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/luqsys-logo.png" alt="Luqsys" className="h-9 w-9 rounded-lg" />
          <span className="text-sm font-semibold tracking-[0.2em] text-neutral-400">
            LUQSYS
          </span>
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:gap-5 sm:text-sm">
          <Link href="/" className="text-neutral-400 transition hover:text-white">
            ← Todos os sistemas
          </Link>
          <a
            href="https://pdvpro.luqsys.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 transition hover:text-white"
          >
            Entrar
          </a>
          <a
            href={DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="acc-bg rounded-full px-4 py-2 text-xs font-semibold text-bg transition hover:brightness-110 sm:text-sm"
          >
            Ver funcionando
          </a>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 pb-14 pt-10 text-center sm:pt-16">
        <span className="acc-borda acc-text inline-block rounded-full border px-3 py-1 text-xs font-medium tracking-wider">
          UM SISTEMA LUQSYS
        </span>
        <div className="mt-6 text-5xl">🛒</div>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
          <span className="acc-gradient-text">PDV Pro</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-neutral-200 sm:text-lg">
          O sistema inteiro da sua loja — não só o caixa
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300 sm:text-xl">
          Frente de caixa, nota fiscal, estoque, compras, financeiro e comissão
          no mesmo lugar. Quem vende no balcão, quem confere a nota do
          fornecedor e quem fecha o mês olham{" "}
          <strong className="text-white">o mesmo dado</strong>.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="acc-bg rounded-full px-7 py-3 text-sm font-semibold text-bg transition hover:brightness-110"
          >
            Ver o sistema funcionando →
          </a>
          <a
            href="#planos"
            className="acc-borda acc-text rounded-full border px-7 py-3 text-sm font-semibold transition hover:brightness-125"
          >
            Ver planos
          </a>
        </div>
        <p className="mt-4 text-xs text-neutral-500">
          ✦ Demonstração ao vivo, 15 a 20 minutos · sem compromisso · sem
          cartão de crédito
        </p>
      </section>

      {/* ── O problema ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 pb-8">
        <div className="acc-borda rounded-2xl border bg-bg-card/60 p-7 sm:p-9">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Loja não quebra por falta de venda. Quebra por falta de controle.
          </h2>
          <p className="mt-4 text-neutral-300">
            O caixa num programa, o estoque numa planilha, a nota do fornecedor
            num e-mail e a comissão num caderno. No fim do mês ninguém sabe o
            que sobrou — e o contador cobra os XMLs que ninguém guardou.
          </p>
          <p className="mt-3 text-neutral-300">
            O PDV Pro junta isso num sistema só. A venda no balcão baixa o
            estoque, a nota do fornecedor vira conta a pagar, e o pacote do
            contador sai pronto no fim do mês —{" "}
            <strong className="text-white">com o resumo por CFOP junto</strong>.
          </p>
        </div>
      </section>

      {/* ── Blocos do sistema ────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-center text-3xl font-black sm:text-4xl">
          O que tem dentro
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {blocos.map((b) => (
            <div
              key={b.titulo}
              className="rounded-2xl border border-neutral-900 bg-bg-card p-6 transition hover:border-neutral-700"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{b.icone}</span>
                <h3 className="acc-text text-lg font-bold">{b.titulo}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-400">{b.texto}</p>
              <ul className="mt-4 space-y-2">
                {b.itens.map((i) => (
                  <li key={i} className="flex gap-2 text-sm text-neutral-300">
                    <span className="acc-text mt-0.5">✓</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Como começa ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-center text-3xl font-black sm:text-4xl">
          Como começa
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-neutral-400">
          Sistema fiscal não se entrega por link e boa sorte. A implantação é
          acompanhada — é isso que faz a loja virar a chave sem parar de vender.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {passos.map((p) => (
            <div
              key={p.n}
              className="rounded-2xl border border-neutral-900 bg-bg-card p-6"
            >
              <span className="acc-bg inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-black text-bg">
                {p.n}
              </span>
              <h3 className="mt-4 font-bold text-white">{p.titulo}</h3>
              <p className="mt-2 text-sm text-neutral-400">{p.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Planos ───────────────────────────────────────────────────── */}
      <section id="planos" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-center text-3xl font-black sm:text-4xl">Planos</h2>
        <p className="mt-3 text-center text-neutral-400">
          Sem fidelidade. Muda de plano quando a loja mudar de tamanho.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {planos.map((p) => (
            <div
              key={p.nome}
              className={
                p.destaque
                  ? "acc-borda acc-sombra relative rounded-2xl border-2 bg-bg-card p-7"
                  : "relative rounded-2xl border border-neutral-900 bg-bg-card p-7"
              }
            >
              {p.destaque && (
                <span className="acc-bg absolute -top-3 left-7 rounded-full px-3 py-1 text-xs font-bold text-bg">
                  mais escolhido
                </span>
              )}
              <h3 className="acc-text text-xl font-bold">{p.nome}</h3>
              <p className="mt-1 text-sm text-neutral-400">{p.publico}</p>
              <p className="mt-6 text-4xl font-black text-white">
                {p.preco}
                <span className="text-base font-medium text-neutral-500">
                  /mês
                </span>
              </p>
              <ul className="mt-6 space-y-2">
                {p.itens.map((i) => (
                  <li key={i} className="flex gap-2 text-sm text-neutral-300">
                    <span className="acc-text mt-0.5">✓</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <a
                href={ZAP(`Quero assinar o PDV Pro ${p.nome} (${p.preco}/mês)`)}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  p.destaque
                    ? "acc-bg mt-7 block rounded-full px-5 py-3 text-center text-sm font-semibold text-bg transition hover:brightness-110"
                    : "acc-borda acc-text mt-7 block rounded-full border px-5 py-3 text-center text-sm font-semibold transition hover:brightness-125"
                }
              >
                Assinar {p.nome}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-neutral-500">
          Quer o site de e-commerce junto? O{" "}
          <Link href="/shoppro" className="acc-text hover:underline">
            ShopPro
          </Link>{" "}
          usa o mesmo estoque por +R$ 199/mês.
        </p>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 py-14">
        <h2 className="text-center text-3xl font-black sm:text-4xl">
          Perguntas que sempre fazem
        </h2>
        <div className="mt-10 space-y-4">
          {faq.map((f) => (
            <div
              key={f.p}
              className="rounded-2xl border border-neutral-900 bg-bg-card p-6"
            >
              <h3 className="font-bold text-white">{f.p}</h3>
              <p className="mt-2 text-sm text-neutral-400">{f.r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA final ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="acc-borda acc-sombra rounded-3xl border bg-bg-card p-10 text-center">
          <h2 className="text-2xl font-black sm:text-3xl">
            Veja rodando antes de decidir
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-neutral-300">
            Chame no WhatsApp e a gente abre o sistema na sua frente: venda no
            caixa, nota emitindo, relatório fechando. Se não servir pra sua
            loja, a gente fala isso também.
          </p>
          <a
            href={DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="acc-bg mt-8 inline-block rounded-full px-8 py-3 text-sm font-semibold text-bg transition hover:brightness-110"
          >
            Falar com o Lucas →
          </a>
        </div>
      </section>

      <ContactInfo />
    </main>
  );
}
