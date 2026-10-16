import Link from "next/link";
import { MontadorCombo } from "./_components/MontadorCombo";
import { ContactInfo } from "./_components/ContactInfo";

type Produto = {
  slug: string;
  nome: string;
  icone: string;
  tagline: string;
  preco: string;
  precoDe?: string;
  badge?: string;
  appUrl?: string;
  semTrial?: boolean;
  semDemo?: boolean; // sem sandbox publico: mostra so o trial, sem "Ver demo"
  demoUrl?: string;  // demo em outro endereco (deploy separado)
  emBreve?: boolean;
  externo?: string; // projeto aberto: card leva direto pro app, sem página interna
  gratis?: boolean; // some o "/mês" e troca trial/demo por "Acessar grátis"
  aPartirDe?: boolean; // sistema com vários planos: o card mostra o de entrada
};


type Trilha = {
  id: string;
  emoji: string;
  titulo: string;
  subtitulo: string;
  produtos: Produto[];
};

const trilhas: Trilha[] = [
  {
    id: "negocio",
    emoji: "🏪",
    titulo: "Para seu negócio",
    subtitulo: "Operação do dia a dia — vender, comprar, construir, controlar",
    produtos: [
      {
        slug: "pdvpro",
        nome: "PDV Pro",
        icone: "🛒",
        tagline: "PDV + ERP completo pra loja física",
        preco: "R$ 249",
        aPartirDe: true,
        // a demo dele mora em outro deploy: o endereco principal e a producao
        // de uma loja real, e o sistema roda uma loja por instalacao
        demoUrl: "https://demo.pdvpro.luqsys.com.br/",
      },
      {
        slug: "shoppro",
        nome: "ShopPro",
        icone: "🛍️",
        tagline: "Site de e-commerce próprio integrado ao PDV — add-on do PDV Pro",
        preco: "+R$ 199",
        badge: "add-on PDV",
        semTrial: true,
      },
      {
        slug: "farmpro",
        nome: "FarmPro",
        icone: "🌾",
        tagline: "Gestão da fazenda: notas, livro caixa, folha, LCDPR",
        preco: "R$ 119",
        aPartirDe: true,
      },
      {
        slug: "silopro",
        nome: "SiloPro",
        icone: "⚖️",
        tagline: "Pesagem de silo: cada caminhão de milho e soja em tempo real",
        preco: "R$ 99",
        badge: "novo",
        appUrl: "https://silopro.luqsys.com.br",
      },
      {
        slug: "obraspro",
        nome: "ObrasPro",
        icone: "🏗️",
        tagline: "Controle financeiro de obras por etapa",
        preco: "R$ 119",
        aPartirDe: true,
        precoDe: "R$ 149",
      },
      {
        slug: "solarpro",
        nome: "SolarPro",
        icone: "☀️",
        tagline: "Gestão pra integrador de energia solar",
        preco: "R$ 89",
        aPartirDe: true,
        precoDe: "R$ 119",
      },
      {
        slug: "carregapro",
        nome: "CarregaPro",
        icone: "⚡",
        tagline: "Gestão de eletroposto OCPP 1.6 J + 2.0.1 — sem comissão de plataforma",
        preco: "R$ 49",
        aPartirDe: true,
        badge: "novo",
      },
      {
        slug: "botapro",
        nome: "BotaPro",
        icone: "🥾",
        tagline: "ERP pra indústria de calçado: custo do par, grade e produção",
        preco: "R$ 149",
        aPartirDe: true,
        badge: "novo",
        appUrl: "https://botapro.luqsys.com.br",
      },
      {
        slug: "comparabot",
        nome: "ComparaBot",
        icone: "🧾",
        tagline:
          "Manda foto de 2 a 5 orçamentos no WhatsApp e ele diz qual fornecedor é mais barato, item a item",
        preco: "R$ 9",
        badge: "3 grátis por mês",
        semTrial: true,
      },
      {
        slug: "aluguelpro",
        nome: "AluguelPro",
        icone: "🏠",
        tagline: "Administração de imóveis e aluguéis",
        preco: "R$ 99",
        aPartirDe: true,
      },
      {
        slug: "frotapro",
        nome: "FrotaPro",
        icone: "🚚",
        tagline: "Gestão de frota PME com IPVA, seguro e manutenção",
        preco: "R$ 129",
        aPartirDe: true,
        badge: "novo",
      },
      {
        slug: "vigiapro",
        nome: "VigiaPro",
        icone: "📹",
        tagline:
          "Suas câmeras avisam no WhatsApp quando aparece gente, carro ou animal — com a foto do momento",
        preco: "R$ 99",
        aPartirDe: true,
        badge: "com instalação",
        // sem trial: a venda passa por mini PC no local e instalação. Mas a
        // demo mora num deploy próprio — o endereço principal é a produção
        // com as câmeras da fazenda, da empresa e da casa.
        semTrial: true,
        demoUrl: "https://demo.vigiapro.luqsys.com.br/",
      },
      {
        slug: "adspro",
        nome: "AdsPro",
        icone: "📣",
        tagline: "Crie anúncios no Meta (Facebook + Instagram) com IA — ou deixa que a gente faz",
        preco: "R$ 199",
        aPartirDe: true,
        badge: "ou gestão R$ 499",
        appUrl: "https://adspro.luqsys.com.br",
        semTrial: true,
        demoUrl: "https://demo.adspro.luqsys.com.br/",
      },
      {
        slug: "agendapro",
        nome: "AgendaPro",
        icone: "📅",
        tagline: "Auto-agendamento online pro seu negócio (arena, barbearia, lavagem, salão...)",
        preco: "R$ 99",
        badge: "novo",
        appUrl: "https://agendapro.luqsys.com.br",
      },
      {
        slug: "sorripro",
        nome: "SorriPro",
        icone: "🦷",
        tagline: "Clínica odontológica inteira: agenda, prontuário, odontograma e portal do paciente",
        preco: "R$ 49",
        badge: "novo",
        appUrl: "https://sorripro.luqsys.com.br",
      },
      {
        slug: "bapflow",
        nome: "BAP Flow",
        icone: "💈",
        tagline: "Barbearia completa: agenda online, comanda, comissão, metas por barbeiro e clube",
        preco: "R$ 99,99",
        badge: "novo",
        appUrl: "https://bapflow.luqsys.com.br",
      },
      {
        slug: "comandapro",
        nome: "ComandaPro",
        icone: "🍽️",
        tagline: "Gestão pra restaurante e bar: comandas, cardápio, cozinha e NFC-e",
        preco: "R$ 99",
        badge: "novo",
        appUrl: "https://comandapro.luqsys.com.br",
        // a demo dele mora em outro deploy: o endereco principal e a producao
        // de um cliente real, e o sistema roda uma casa por instalacao
        demoUrl: "https://demo.comandapro.luqsys.com.br/",
      },
      {
        slug: "rotinapro",
        nome: "RotinaPro",
        icone: "📋",
        tagline: "Checklists e rotinas operacionais multi-unidade com IA que compara foto-padrão",
        preco: "R$ 49",
        aPartirDe: true,
        badge: "novo",
        appUrl: "https://rotinapro.luqsys.com.br",
      },
    ],
  },
  {
    id: "conformidade",
    emoji: "🧾",
    titulo: "RH & Conformidade",
    subtitulo: "Funcionários, ponto e contabilidade — sem dor de cabeça com a lei",
    produtos: [
      {
        slug: "horapro",
        nome: "HoraPro",
        icone: "⏱️",
        tagline: "Ponto eletrônico REP-P (Portaria 671/2021)",
        preco: "R$ 39",
        aPartirDe: true,
      },
      {
        slug: "contabilidadepro",
        nome: "ContabilidadePro",
        icone: "📊",
        tagline: "Software + acompanhamento contábil humano",
        preco: "R$ 199",
        aPartirDe: true,
      },
    ],
  },
  {
    id: "financas",
    emoji: "💰",
    titulo: "Suas finanças",
    subtitulo: "Controle pessoal e da família, no app e no WhatsApp",
    produtos: [
      {
        slug: "bankpro",
        nome: "BankPro",
        icone: "🏦",
        tagline: "Gestão financeira pessoal com IA e WhatsApp",
        preco: "R$ 49",
        aPartirDe: true,
        badge: "app + WhatsApp",
      },
    ],
  },
  {
    id: "viagens",
    emoji: "✈️",
    titulo: "Suas viagens",
    subtitulo: "Planejar com IA e voar mais barato com milhas",
    produtos: [
      {
        // MilhasPro virou parte daqui na fusão: os dois domínios servem o mesmo
        // app. Dois cards vendiam duas assinaturas do mesmo produto.
        slug: "viagempro",
        nome: "ViagemPro",
        icone: "🧳",
        tagline:
          "Viagem inteira num lugar: roteiro com IA, comparador de transporte e busca de passagem em milhas (Smiles, TudoAzul)",
        preco: "R$ 99",
      },
    ],
  },
  {
    id: "carreira",
    emoji: "🔄",
    titulo: "Sua carreira",
    subtitulo: "Pra quem já trabalha e está pensando em mudar de rumo",
    produtos: [
      {
        slug: "falapro",
        nome: "FalaPro",
        icone: "🗣️",
        tagline:
          "Inglês do zero, falando desde a primeira aula — você fala e é corrigido palavra por palavra, com dica em português",
        preco: "R$ 49",
        badge: "novo",
        appUrl: "https://falapro.luqsys.com.br",
      },
      {
        slug: "livropro",
        nome: "LivroPro",
        icone: "🎧",
        tagline:
          "Seu livro vira episódio de podcast pra ouvir dirigindo — sobe o PDF, o episódio cai no seu app de podcast",
        preco: "R$ 49",
        badge: "novo",
        appUrl: "https://livropro.luqsys.com.br",
      },
      {
        slug: "virada",
        nome: "Virada",
        icone: "🔄",
        tagline:
          "Teste de transição de carreira: o questionário é grátis, e o relatório completo — escrito por IA em cima das suas respostas — é pago uma vez só",
        preco: "R$ 47 / relatório",
        badge: "teste grátis",
        externo: "https://virada.luqsys.com.br",
      },
    ],
  },
];

// Sistemas com landing própria em /p/<slug> — o "site do produto", sem menu
// da Luqsys. O card da home leva pra lá; quem ainda não tem cai na página
// curta em /<slug>.
const LANDING_PROPRIA = new Set([
  "agendapro", "aluguelpro", "bankpro", "botapro", "carregapro", "comandapro",
  "comparabot", "contabilidadepro", "farmpro", "frotapro", "horapro",
  "livropro", "obraspro", "pdvpro", "rotinapro", "shoppro", "silopro",
  "solarpro", "sorripro", "viagempro", "vigiapro",
]);

function siteDoSistema(p: Produto) {
  if (p.externo) return p.externo;
  return LANDING_PROPRIA.has(p.slug) ? `/p/${p.slug}` : `/${p.slug}`;
}

const WHATS = "https://wa.me/5545991077788";
const whatsSobMedida = `${WHATS}?text=${encodeURIComponent(
  "Oi Lucas, quero um sistema pra minha empresa. Hoje eu preciso de:",
)}`;

// Dois jeitos de pagar o sob medida (decisão do Lucas, 15/10/2026): o preço
// cheio entrega o código pro cliente; com o código ficando na Luqsys sai pela
// metade, porque a base pode ser reaproveitada pra outros clientes. A
// Adaptação não entra nisso: ela já parte de um sistema que é da Luqsys.
type Faixa = {
  nome: string;
  preco: string;
  precoLuqsys?: string;
  prazo: string;
  texto: string;
  itens: string[];
  destaque: boolean;
};

// O que já roda de verdade — a prova de que sabemos fazer. Só fato conferido:
// os números da Luvan são os da página do AluguelPro (contados por
// proprietário do tenant real, sem dados de teste).
const provas = [
  {
    icone: "🛒",
    titulo: "Varejo",
    texto: "Lojas físicas vendendo, emitindo NFC-e e passando cartão no caixa todo dia.",
  },
  {
    icone: "🏠",
    titulo: "Imobiliária",
    texto: "38 imóveis e 31 contratos ativos — cobrança, repasse e recibo saindo sozinhos.",
  },
  {
    icone: "🌾",
    titulo: "Fazenda e silo",
    texto: "Notas, livro caixa, folha e cada caminhão de grão pesado em tempo real.",
  },
  {
    icone: "☀️",
    titulo: "Energia solar",
    texto: "A fatura da distribuidora vira cobrança com a economia de cada cliente.",
  },
];

const passos = [
  {
    n: "1",
    titulo: "Você conta como trabalha",
    texto:
      "Uma conversa no WhatsApp ou presencial. Planilha, caderno, foto do papel que circula hoje — tudo serve. Não custa nada.",
  },
  {
    n: "2",
    titulo: "Proposta com preço fechado",
    texto:
      "Em até 3 dias úteis você recebe o que o sistema vai fazer, o prazo e o valor. Sem hora técnica correndo.",
  },
  {
    n: "3",
    titulo: "Entrega por etapas",
    texto:
      "A cada 1 ou 2 semanas tem uma parte nova funcionando pra você usar e dizer o que mudar. Nada de sumir 3 meses.",
  },
  {
    n: "4",
    titulo: "No ar e com suporte",
    texto:
      "Hospedagem, backup, segurança e ajustes ficam com a gente. Funciona no computador e no celular, como app.",
  },
];

const precos: Faixa[] = [
  {
    nome: "Adaptação",
    preco: "R$ 1.500",
    prazo: "1 a 2 semanas",
    texto:
      "Um dos nossos sistemas prontos, ajustado ao seu jeito: campos, relatórios, regras e a sua marca.",
    itens: [
      "Parte de um sistema que já roda",
      "Importação da sua planilha",
      "Mais a mensalidade do sistema",
    ],
    destaque: false,
  },
  {
    nome: "Sob medida",
    preco: "R$ 6.000",
    precoLuqsys: "R$ 3.000",
    prazo: "3 a 6 semanas",
    texto:
      "Sistema feito do zero pro processo da sua empresa, com o que você precisa e nada do que não usa.",
    itens: [
      "Cadastros, telas e relatórios próprios",
      "Login por usuário e permissões",
      "Avisos e envio pelo WhatsApp",
      "Funciona no celular como app",
    ],
    destaque: true,
  },
  {
    nome: "Projeto completo",
    preco: "R$ 15.000",
    precoLuqsys: "R$ 7.500",
    prazo: "a combinar",
    texto:
      "Vários setores conversando e integrações com o que você já usa.",
    itens: [
      "Nota fiscal (NF-e, NFC-e)",
      "Banco, Pix e boleto",
      "Balança, maquininha, câmeras",
      "Leitura de documentos com IA",
    ],
    destaque: false,
  },
];

const perguntas = [
  {
    p: "Por que é mais barato que uma software house?",
    r: "Porque quase nada começa do zero. Login, permissões, nota fiscal, cobrança, WhatsApp e leitura de documento por IA já existem e rodam nos nossos sistemas. O seu projeto paga só o que é dele.",
  },
  {
    p: "E depois de pronto, quanto custa por mês?",
    r: "A partir de R$ 199/mês, com hospedagem, backup, suporte e pequenos ajustes. Funcionalidade nova entra com orçamento à parte, sempre antes de fazer.",
  },
  {
    p: "Como é o pagamento?",
    r: "Metade pra começar e metade na entrega. Na Adaptação, o valor pode ser dividido junto com as primeiras mensalidades.",
  },
  {
    p: "O sistema fica meu?",
    r: "Você escolhe. No preço cheio o código é seu: se um dia quiser levar pra outro lugar, a gente entrega o código e o banco de dados. Se o código ficar com a Luqsys, o projeto sai pela metade, e os seus dados continuam sendo só seus — o que a gente reaproveita é o programa, nunca a informação da sua empresa.",
  },
  {
    p: "Vocês usam o que fazem?",
    r: "Sim. As nossas lojas, a imobiliária, a fazenda e as usinas solares da família rodam nos sistemas Luqsys. Quem fez usa todo dia.",
  },
];

export default function Home() {
  const nSistemas = trilhas.flatMap((t) => t.produtos).length;
  return (
    <main className="radial-bg">
      {/* flex-wrap + justify-center: em 390px os dois grupos nao cabem lado a
          lado. Sem isso o "LUQSYS" ficava por cima de "Sistemas" e o "Contato"
          passava da borda, criando rolagem lateral na home inteira. */}
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 py-5 sm:justify-between sm:py-6">
        <div className="flex items-center gap-3">
          <img src="/luqsys-logo.png" alt="Luqsys" className="h-10 w-10 rounded-lg" />
          <span className="text-sm font-semibold tracking-[0.2em] text-gold">
            LUQSYS
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:gap-6 sm:text-sm">
          <a href="#como-funciona" className="text-neutral-400 transition hover:text-gold">
            Como funciona
          </a>
          <a href="#quanto-custa" className="text-neutral-400 transition hover:text-gold">
            Quanto custa
          </a>
          <a href="#trilhas" className="text-neutral-400 transition hover:text-gold">
            Sistemas prontos
          </a>
          <a
            href={whatsSobMedida}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold-dim px-4 py-1.5 font-semibold text-gold transition hover:border-gold"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      <section
        id="sob-medida"
        className="mx-auto max-w-4xl px-6 pb-20 pt-14 text-center sm:pt-20"
      >
        <span className="inline-block rounded-full border border-gold-dim/60 bg-gold-dark/30 px-3 py-1 text-xs font-bold tracking-wider text-gold">
          ✦ SISTEMAS SOB MEDIDA
        </span>
        <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
          O sistema da sua empresa,{" "}
          <span className="gold-gradient-text">do jeito que ela trabalha</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300 sm:text-xl">
          A gente cria o sistema pra você — do zero ou partindo de um dos{" "}
          {nSistemas} que já rodam todo dia em loja, fazenda, imobiliária e
          obra. Preço fechado antes de começar e entrega por etapas.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={whatsSobMedida}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-bg transition hover:bg-gold-bright"
          >
            Contar o que eu preciso
          </a>
          <a
            href="#quanto-custa"
            className="rounded-full border border-gold-dim px-7 py-3.5 text-sm font-semibold text-gold transition hover:border-gold"
          >
            Ver quanto custa
          </a>
        </div>

        <p className="mt-6 text-xs text-neutral-500">
          ✦ Conversa e orçamento <span className="text-gold">sem custo</span> ·
          resposta em até 24h
        </p>
      </section>

      <section className="mx-auto max-w-6xl border-t border-neutral-900 px-6 py-16">
        <p className="text-center text-xs font-bold tracking-[0.25em] text-gold-dim">
          NÃO É PROMESSA — JÁ ESTÁ RODANDO
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {provas.map((c) => (
            <div
              key={c.titulo}
              className="rounded-2xl border border-neutral-900 bg-bg-card p-5"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{c.icone}</span>
                <h3 className="font-bold text-gold">{c.titulo}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                {c.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="como-funciona"
        className="mx-auto max-w-6xl border-t border-neutral-900 px-6 py-20"
      >
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Como funciona
        </h2>
        <p className="mt-3 text-center text-neutral-400">
          Você não precisa saber nada de tecnologia. Precisa saber como a sua
          empresa funciona — o resto é com a gente.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {passos.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-neutral-900 bg-bg-card p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-sm font-black text-bg">
                {s.n}
              </span>
              <h3 className="mt-4 text-lg font-bold">{s.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {s.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="quanto-custa"
        className="mx-auto max-w-6xl border-t border-neutral-900 px-6 py-20"
      >
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Quanto custa
        </h2>
        <p className="mt-3 text-center text-neutral-400">
          Valor fechado na proposta. Estes são os pontos de partida.
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {precos.map((pl) => (
            <div
              key={pl.nome}
              className={
                pl.destaque
                  ? "flex flex-col rounded-2xl border border-gold-dim bg-gradient-to-br from-gold-dark/30 via-bg-card to-bg-card p-7 shadow-gold"
                  : "flex flex-col rounded-2xl border border-neutral-900 bg-bg-card p-7"
              }
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-gold">{pl.nome}</h3>
                {pl.destaque && (
                  <span className="rounded-full border border-gold-dim/60 bg-gold-dark/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">
                    mais pedido
                  </span>
                )}
              </div>
              <p className="mt-4">
                <span className="block text-[11px] text-neutral-500">a partir de</span>
                <span className="text-3xl font-black text-white">{pl.preco}</span>
                {pl.precoLuqsys && (
                  <span className="ml-2 text-xs text-neutral-500">código seu</span>
                )}
              </p>
              {pl.precoLuqsys && (
                <p className="mt-1 text-sm text-neutral-300">
                  ou <strong className="text-gold">{pl.precoLuqsys}</strong> com o
                  código na Luqsys
                </p>
              )}
              <p className="mt-1 text-xs text-neutral-500">Prazo: {pl.prazo}</p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">{pl.texto}</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-neutral-300">
                {pl.itens.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gold">✓</span> {i}
                  </li>
                ))}
              </ul>
              <a
                href={`${WHATS}?text=${encodeURIComponent(
                  `Oi Lucas, quero um orçamento (${pl.nome}). Hoje eu preciso de:`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  pl.destaque
                    ? "mt-6 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-bg transition hover:bg-gold-bright"
                    : "mt-6 rounded-full border border-gold-dim px-5 py-3 text-center text-sm font-semibold text-gold transition hover:border-gold"
                }
              >
                Pedir orçamento
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-neutral-400">
          Depois de pronto: <strong className="text-white">a partir de R$ 199/mês</strong>{" "}
          com hospedagem, backup, suporte e pequenos ajustes.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-xs leading-relaxed text-neutral-500">
          <span className="text-neutral-300">Código seu:</span> o sistema é
          seu e pode ir pra onde quiser.{" "}
          <span className="text-neutral-300">Código na Luqsys:</span> você usa
          do mesmo jeito, mas a gente pode reaproveitar a base em outros
          projetos — por isso custa a metade.
        </p>

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {perguntas.map((q) => (
            <details
              key={q.p}
              className="group rounded-xl border border-neutral-900 bg-bg-card px-5 py-4"
            >
              <summary className="cursor-pointer list-none font-semibold text-neutral-200 marker:hidden">
                <span className="mr-2 text-gold transition group-open:rotate-90 inline-block">›</span>
                {q.p}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{q.r}</p>
            </details>
          ))}
        </div>
      </section>

      <section
        id="trilhas"
        className="mx-auto max-w-6xl border-t border-neutral-900 px-6 py-20"
      >
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Ou comece por um sistema pronto
        </h2>
        <p className="mt-3 text-center text-sm text-neutral-400">
          {nSistemas} sistemas prontos pra usar hoje. Cada um
          tem o seu próprio site, com planos e como funciona.
        </p>

        <div className="mt-12 space-y-10">
          {trilhas.map((trilha) => (
            <div key={trilha.id}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-neutral-500">
                {trilha.emoji} {trilha.titulo}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {trilha.produtos.map((p) => {
                  const href = siteDoSistema(p);
                  const fora = href.startsWith("http");
                  const inner = (
                    <>
                      <span className="text-xl">{p.icone}</span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-baseline justify-between gap-2">
                          <span className="font-bold text-gold">{p.nome}</span>
                          <span className="shrink-0 text-xs text-neutral-500">
                            {p.gratis
                              ? "grátis"
                              : `${p.aPartirDe ? "desde " : ""}${p.preco}${
                                  p.preco.includes("/") ? "" : "/mês"
                                }`}
                          </span>
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-neutral-400 line-clamp-2">
                          {p.tagline}
                        </span>
                      </span>
                    </>
                  );
                  const cls =
                    "flex items-start gap-3 rounded-xl border border-neutral-900 bg-bg-card p-4 transition hover:border-gold-dim";
                  return fora ? (
                    <a
                      key={p.slug}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cls}
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link key={p.slug} href={href} className={cls}>
                      {inner}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <details className="mt-14 rounded-2xl border border-neutral-900 bg-bg-card p-6">
          <summary className="cursor-pointer list-none text-center font-semibold text-gold marker:hidden">
            Vai usar mais de um? Monte seu pacote com até 50% off →
          </summary>
          <div className="mt-8">
            <MontadorCombo />
          </div>
        </details>
      </section>

      <section className="mx-auto max-w-3xl border-t border-neutral-900 px-6 py-20 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Conta pra gente o que <span className="gold-gradient-text">trava</span> a sua empresa
        </h2>
        <p className="mt-4 text-neutral-400">
          Planilha que ninguém atualiza, papel que se perde, conta feita na mão.
          Em uma conversa a gente diz se dá pra resolver, em quanto tempo e por
          quanto.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={whatsSobMedida}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-bg transition hover:bg-gold-bright"
          >
            Falar no WhatsApp
          </a>
          <a
            href="mailto:contato@luqsys.com.br?subject=Quero%20um%20sistema%20sob%20medida&body=Oi%20Lucas%2C%20preciso%20de%20um%20sistema%20pra%3A%20"
            className="rounded-full border border-gold-dim px-7 py-3 text-sm font-semibold text-gold transition hover:border-gold"
          >
            Enviar e-mail
          </a>
        </div>
      </section>

      <ContactInfo />

      <footer className="border-t border-neutral-900 px-6 py-10 text-center text-sm text-neutral-500">
        <p>
          Já é cliente?{" "}
          <Link href="/instalar" className="text-gold transition hover:underline">
            instale os apps no celular
          </Link>
        </p>
        <p className="mt-4">© {new Date().getFullYear()} Luqsys. Todos os direitos reservados.</p>
        <p className="mt-1">luqsys.com.br</p>
      </footer>
    </main>
  );
}
