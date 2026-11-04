import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "PedraPro — Gestão de marmoraria",
  description:
    "Sistema pra marmoraria: caixa da empresa e particular separados, vendas com margem e comissão, vales e acerto da equipe, fiado de fornecedor e estoque de chapas e abrasivos.",
};

const ASSINAR = "https://www.asaas.com/c/p9xpeq9w244zy0ns";
const WHATS = "https://wa.me/5545991077788?text=Quero%20o%20PedraPro";

export default function PedraProPage() {
  return (
    <ProductLayout
      tema="pedrapro"
      icone="🪨"
      nome="PedraPro"
      tagline="A marmoraria inteira num lugar só — sem planilha"
      descricao={
        <>
          Feito junto com uma <strong className="text-white">marmoraria de
          verdade</strong> em Balneário Camboriú: caixa da empresa e o
          particular separados, cada venda com a sua{" "}
          <strong className="text-white">margem real</strong>, vale e acerto da
          equipe, fiado do fornecedor e o estoque de chapas.
        </>
      }
      ctaPrimaria={{ label: "Falar com a gente", href: WHATS }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      passos={[
        {
          n: "1",
          titulo: "Coloca o saldo de hoje",
          texto:
            "Cada conta (banco, PagSeguro, dinheiro) com o saldo do extrato, marcada como empresa ou particular. A gente importa da sua planilha.",
        },
        {
          n: "2",
          titulo: "Lança uma vez só",
          texto:
            "O vale sai do banco e já cai na ficha do marmorista. O recebimento abate a venda. O pagamento ao fornecedor abate o fiado.",
        },
        {
          n: "3",
          titulo: "Vê o que sobrou",
          texto:
            "No fim do mês: quanto entrou, quanto custou a pedra, a mão de obra e o fixo do ateliê — e quanto foi pro particular.",
        },
      ]}
      problema={{
        titulo: "A planilha mistura tudo — e o saldo é copiado à mão em cada linha.",
        texto: (
          <>
            <p>
              Conta da empresa e conta pessoal na mesma coluna, a venda lançada
              duas vezes, o vale do marmorista anotado num caderno e o acerto
              refeito no fim do mês. Ninguém sabe a margem de cada serviço.
            </p>
            <p>
              No PedraPro cada coisa é lançada uma vez e aparece em todo lugar
              que precisa: caixa, ficha do colaborador, venda e fornecedor.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "💵",
          titulo: "Dinheiro e vendas",
          texto:
            "Empresa (PJ) e particular (PF) separados, e cada venda com o que já entrou e o que falta.",
          itens: [
            "Saldo de cada conta, PJ e PF",
            "Venda com m², pedra, entrada e saldo a receber",
            "Margem real: venda − pedra − extras − comissão",
            "Cliente pagou direto ao fornecedor? Abate o fiado",
          ],
        },
        {
          icone: "👷",
          titulo: "Equipe, fornecedor e estoque",
          texto:
            "A conta corrente de cada colaborador e do fornecedor no fiado, sem caderno.",
          itens: [
            "Vale, falta e salário com recibo em 2 vias",
            "Acerto do mês impresso pra assinar",
            "Comissão do vendedor lançada sozinha",
            "Ficha de EPI (NR-6) e estoque de chapas e abrasivos",
          ],
        },
      ]}
      prints={[
        { arquivo: "/prints/pedrapro-0.jpg", legenda: "Resumo do mês" },
        { arquivo: "/prints/pedrapro-1.jpg", legenda: "Equipe com vale e acerto" },
      ]}
      praQuem={[
        { icone: "🪨", titulo: "Marmoraria e marmoaria", texto: "Bancada, pia, soleira, escada — vende por m² e produz no ateliê." },
        { icone: "🏭", titulo: "Granito e quartzo sob medida", texto: "Quem compra chapa no fiado e precisa saber a margem de cada obra." },
        { icone: "👨‍👩‍👧", titulo: "Empresa familiar", texto: "Onde o dinheiro da empresa e o da casa saem das mesmas contas." },
      ]}
      naoServe={[
        "Você precisa emitir nota fiscal pelo sistema — o PedraPro é a gestão, a nota segue com seu contador",
        "Indústria de beneficiamento com serraria e centenas de chapas por dia",
      ]}
      faq={[
        {
          p: "Vocês importam minha planilha?",
          r: "Sim. Manda a planilha que a gente traz os saldos das contas, o que cada colaborador está devendo, o fiado do fornecedor e o estoque de chapas.",
        },
        {
          p: "O vendedor vê o caixa?",
          r: "Não. Dá pra criar um login \"só vendas\": ele lança e acompanha as vendas e vê o estoque, mas não vê custo, margem, saldo de banco nem a equipe.",
        },
        {
          p: "E o orçamento?",
          r: "O módulo de orçamento está sendo feito junto com a marmoraria piloto e entra no plano completo.",
        },
      ]}
      features={[
        "Caixa da empresa (PJ) e particular (PF) separados",
        "Vendas com entrada, saldo a receber e margem",
        "Vale, salário, falta e acerto com recibo",
        "Comissão do vendedor automática",
        "Fornecedor no fiado com pagamentos",
        "Estoque de chapas (m²) e abrasivos com mínimo",
        "Ficha de entrega de EPI (NR-6)",
        "Login separado pra quem só vende",
      ]}
      planos={[
        {
          nome: "Administrativo",
          publico: "Caixa, vendas, equipe e estoque",
          precoLabel: "R$ 199",
          features: [
            "Usuários ilimitados",
            "Importação da sua planilha",
            "Recibos, acerto e ficha de EPI",
            "Ponto da equipe pelo HoraPro",
            "Suporte por WhatsApp",
          ],
          ctaLabel: "Assinar",
          ctaHref: ASSINAR,
          destaque: true,
        },
        {
          nome: "Completo",
          publico: "Tudo do Administrativo + orçamento",
          precoLabel: "R$ 299",
          features: [
            "Orçamento por peça e m²",
            "Orçamento vira venda com um toque",
            "Tudo do Administrativo",
          ],
          ctaLabel: "Falar com a gente",
          ctaHref: WHATS,
        },
      ]}
      ctaFinalTitulo="Quanto sobrou da última bancada que você entregou?"
      ctaFinalTexto="Se a resposta está numa planilha que só você entende, o PedraPro resolve."
      appUrl="https://pedrapro.luqsys.com.br"
      trialUrl="https://pedrapro.luqsys.com.br/cadastro?trial=1"
      assinarUrl={ASSINAR}
    />
  );
}
