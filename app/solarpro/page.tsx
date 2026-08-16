import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "SolarPro — Gestão pra integrador de energia solar",
  description:
    "Orçamentos, projetos, OCR de faturas Copel, acompanhamento de obras e financeiro pra empresa de energia solar fotovoltaica.",
};

export default function SolarProPage() {
  return (
    <ProductLayout
      tema="solarpro"
      icone="☀️"
      nome="SolarPro"
      tagline="Gestão completa pro integrador solar"
      descricao={
        <>
          Orçamentos, projetos, <strong className="text-white">OCR de faturas</strong>,
          acompanhamento de obras e financeiro — feito pra empresa de energia
          solar fotovoltaica pequena e média.
        </>
      }
      ctaPrimaria={{
        label: "Falar com vendas",
        href: "mailto:contato@luqsys.com.br?subject=Quero%20o%20SolarPro",
      }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      passos={[
        {
          n: "1",
          titulo: "Cadastra cliente e projeto",
          texto:
            "Dados do cliente, consumo (kWh) por foto da fatura via OCR, projeto fotovoltaico, equipamentos.",
        },
        {
          n: "2",
          titulo: "Gera orçamento e contrato",
          texto:
            "Orçamento profissional com economia projetada e payback. Contrato pronto pra assinar. Acompanhamento da instalação.",
        },
        {
          n: "3",
          titulo: "Controle financeiro da empresa",
          texto:
            "Contas a pagar/receber, comissão de vendedor, cobranças do cliente. Tudo num sistema só.",
        },
      ]}
      problema={{
        titulo: "Vender o kit é a parte fácil",
        texto: (
          <>
            <p>
              O difícil é o depois: a fatura que chega diferente do previsto, o
              cliente perguntando quanto economizou, a obra que atrasou e a
              cobrança que ninguém emitiu esse mês.
            </p>
            <p>
              O SolarPro lê a fatura da distribuidora, calcula o que cada
              cliente deve e emite a cobrança sozinho — com o PDF mostrando de
              onde saiu cada número.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "🧾",
          titulo: "A fatura vira número",
          texto:
            "OCR na conta de luz: consumo, energia injetada, tarifa e bandeira entram sem ninguém digitar.",
          itens: [
            "OCR de fatura da distribuidora",
            "Leitura da energia compensada e do saldo de créditos",
            "Tarifa e bandeira do mês aplicadas no cálculo",
            "Sincronização automática das faturas novas",
          ],
        },
        {
          icone: "💸",
          titulo: "Cobrança que se explica",
          texto:
            "O cliente recebe um PDF que mostra a conta sem solar, o desconto e o que ele paga. Sem discussão no fim do mês.",
          itens: [
            "Cobrança recorrente automática",
            "PDF com a economia real do mês",
            "Desconto sobre a energia injetada",
            "Ajuste manual quando a fatura vem torta",
          ],
        },
        {
          icone: "🏗️",
          titulo: "Do orçamento à obra",
          texto:
            "Payback calculado, proposta em PDF e o acompanhamento da instalação — o funil inteiro num lugar.",
          itens: [
            "Cálculo de payback",
            "Orçamento profissional em PDF",
            "Acompanhamento de obras por etapa",
            "Comissão de vendedor",
          ],
        },
        {
          icone: "📊",
          titulo: "Sua margem, não só a do cliente",
          texto:
            "Quanto entrou do cliente, quanto foi pra distribuidora e quanto sobrou pra você — por usina e por mês.",
          itens: [
            "Lucro por usina calculado sobre o custo real",
            "Contas a pagar e a receber",
            "Multi-usuário com permissão",
            "Histórico por unidade consumidora",
          ],
        },
      ]}
      faq={[
        {
          p: "Funciona com a minha distribuidora?",
          r: "O OCR foi feito em cima das faturas da Copel e lê o padrão da fatura brasileira de energia. Distribuidora nova a gente ajusta junto com você nas primeiras faturas.",
        },
        {
          p: "E quando o cliente usa crédito acumulado?",
          r: "Entra na conta. O sistema sabe separar a energia que veio das placas da que veio direto da distribuidora — o desconto vale só sobre a sua energia, que é como tem que ser.",
        },
        {
          p: "Eu emito a cobrança ou o sistema emite?",
          r: "O sistema emite e cobra sozinho todo mês, com o PDF anexado. Você entra só quando quer ajustar alguma coisa.",
        },
      ]}
      features={[
        "OCR de fatura de energia (Copel, etc)",
        "Cálculo automático de payback",
        "Orçamento profissional em PDF",
        "Acompanhamento de obras",
        "Financeiro: contas a pagar/receber",
        "Cobranças recorrentes",
        "Comissão de vendedor",
        "Multi-usuário",
      ]}
      planos={[
        {
          nome: "Básico",
          publico: "Integrador começando",
          precoLabel: "R$ 49",
          features: [
            "Até 10 propostas/mês",
            "OCR de fatura (até 20/mês)",
            "1 usuário",
            "Orçamento PDF",
            "Sem financeiro",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Básico",
          ctaHref: "https://www.asaas.com/c/gvkazy8583uxptbj",
        },
        {
          nome: "Pro",
          publico: "Empresa solar completa",
          precoLabel: "R$ 89",
          precoDe: "R$ 119",
          features: [
            "Clientes e projetos ilimitados",
            "OCR de faturas ilimitado",
            "Orçamentos profissionais em PDF",
            "Acompanhamento de obras",
            "Financeiro completo",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/wy6zkhm3k7otovzd",
          destaque: true,
        },
        {
          nome: "Empresa",
          publico: "Rede de integradores/franquia",
          precoLabel: "R$ 179",
          features: [
            "Tudo do Pro",
            "Multi-filial",
            "Comissões por vendedor",
            "Dashboard consolidado",
            "API pra distribuidor",
            "Suporte prioritário",
          ],
          ctaLabel: "Assinar Empresa",
          ctaHref: "https://www.asaas.com/c/rsu497dzfvpwbmp6",
        },
      ]}
      ctaFinalTitulo="Seu negócio solar organizado"
      ctaFinalTexto="Combine com HoraPro (instaladores) e ContabilidadePro pro fechamento."
    appUrl="https://solarpro.luqsys.com.br"
    assinarUrl="https://www.asaas.com/c/wy6zkhm3k7otovzd"
    />
  );
}
