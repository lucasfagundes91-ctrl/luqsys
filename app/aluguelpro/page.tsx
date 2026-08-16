import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "AluguelPro — Administração de imóveis e aluguéis",
  description:
    "Controle de contratos, cobrança recorrente, repasse a proprietários, reajuste IGP-M/IPCA e relatórios pro proprietário. Pra pequena administradora.",
};

export default function AluguelProPage() {
  return (
    <ProductLayout
      tema="aluguelpro"
      icone="🏠"
      nome="AluguelPro"
      tagline="Sua administração de imóveis no controle"
      descricao={
        <>
          Contratos, <strong className="text-white">cobrança recorrente</strong>,
          repasse a proprietários, reajuste por IGP-M/IPCA, relatórios.
          Pra pequena administradora ou proprietário de vários imóveis.
        </>
      }
      ctaPrimaria={{
        label: "Falar com vendas",
        href: "mailto:contato@luqsys.com.br?subject=Quero%20o%20AluguelPro",
      }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      passos={[
        {
          n: "1",
          titulo: "Cadastra imóveis e contratos",
          texto:
            "Imóveis, proprietários, inquilinos, contratos com vencimento, índice de reajuste e taxa de administração.",
        },
        {
          n: "2",
          titulo: "Cobrança automática",
          texto:
            "Boleto/Pix recorrente pro inquilino. Lembrete antes do vencimento. Cobrança automática de quem atrasou.",
        },
        {
          n: "3",
          titulo: "Repasse e relatório",
          texto:
            "Após recebido, calcula sua taxa, repassa pro proprietário e gera demonstrativo. Reajuste anual automático.",
        },
      ]}
      problema={{
        titulo: "Todo dia 5 a mesma maratona",
        texto: (
          <>
            <p>
              Gerar boleto de cada inquilino, conferir quem pagou, calcular a
              taxa, repassar pro proprietário e mandar o demonstrativo. Multiplique
              por quinze imóveis e o mês inteiro vira cobrança.
            </p>
            <p>
              O AluguelPro faz esse ciclo sozinho — inclusive o reajuste anual,
              que é onde mais se perde dinheiro por esquecimento.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "📄",
          titulo: "Contrato que se lembra sozinho",
          texto:
            "Vencimento, índice e data de reajuste ficam no contrato. O sistema aplica na hora certa, sem você marcar no calendário.",
          itens: [
            "Contratos com vencimento e reajuste automático",
            "Reajuste por IGP-M ou IPCA",
            "Modelos de contrato prontos",
            "Histórico de cada alteração",
          ],
        },
        {
          icone: "💳",
          titulo: "Cobrança no automático",
          texto:
            "Boleto e Pix gerados e enviados todo mês, com baixa automática quando o inquilino paga.",
          itens: [
            "Cobrança recorrente por boleto e Pix",
            "Baixa automática do pagamento",
            "Antecipação com desconto",
            "Histórico financeiro por imóvel",
          ],
        },
        {
          icone: "🏠",
          titulo: "O proprietário fica sabendo",
          texto:
            "Repasse calculado com a sua taxa e demonstrativo em PDF — a conversa do dia 10 deixa de existir.",
          itens: [
            "Repasse automático ao proprietário",
            "Taxa de administração configurável",
            "Demonstrativo em PDF",
            "Multi-proprietário e multi-imóvel",
          ],
        },
      ]}
      prints={[
        {arquivo: "/prints/aluguelpro-1.jpg", legenda: "Contratos e reajustes"},
      ]}
      praQuem={[
        {icone:"🏢", titulo:"Imobiliária pequena", texto:"Quem administra dezenas de imóveis sem equipe de cobrança."},
        {icone:"🔑", titulo:"Proprietário com vários imóveis", texto:"Cobrar sozinho sem virar refém do dia 5."},
        {icone:"📑", titulo:"Quem esquece o reajuste", texto:"IGP-M e IPCA aplicados na data, sem depender de memória."},
      ]}
      naoServe={[
        "Você quer portal de anúncios pra captar inquilino — aqui começa depois do contrato assinado",
        "Você administra temporada por diária: o ciclo do sistema é mensal",
      ]}
      faq={[
        {
          p: "Administro imóvel dos outros e alguns meus. Dá pra separar?",
          r: "Dá. Cada imóvel tem o proprietário dele e a sua taxa; nos seus, a taxa é zero e o repasse é pra você mesmo. O demonstrativo sai certo nos dois casos.",
        },
        {
          p: "E se o inquilino atrasar?",
          r: "O sistema mostra quem está em atraso e continua cobrando. Multa e juros entram conforme o que estiver no contrato.",
        },
      ]}
      features={[
        "Contratos com vencimento e reajuste automático",
        "Cobrança recorrente (boleto/Pix)",
        "Repasse automático ao proprietário",
        "Taxa de administração configurável",
        "Demonstrativos pro proprietário (PDF)",
        "Reajuste IGP-M/IPCA automático",
        "Multi-proprietário e multi-imóvel",
        "Histórico financeiro por imóvel",
      ]}
      planos={[
        {
          nome: "Básico",
          publico: "Proprietário com poucos imóveis",
          precoLabel: "R$ 59",
          features: [
            "Até 10 imóveis",
            "Contratos com reajuste",
            "Cobrança manual (PIX/boleto)",
            "1 usuário",
            "Demonstrativo simples",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Básico",
          ctaHref: "https://www.asaas.com/c/o10vzdh38yuwb2eo",
        },
        {
          nome: "Pro",
          publico: "Pequena administradora",
          precoLabel: "R$ 99",
          features: [
            "Imóveis e contratos ilimitados",
            "Cobrança recorrente automática",
            "Repasse automático",
            "Reajustes IGP-M/IPCA automáticos",
            "Demonstrativos PDF",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/mhw1a1fe2i14hit6",
          destaque: true,
        },
        {
          nome: "Empresa",
          publico: "Administradora com várias filiais",
          precoLabel: "R$ 199",
          features: [
            "Tudo do Pro",
            "Multi-administradora",
            "Portal do proprietário",
            "Portal do inquilino",
            "API + integrações",
            "Suporte prioritário",
          ],
          ctaLabel: "Assinar Empresa",
          ctaHref: "https://www.asaas.com/c/yvfvq42xetpq1i59",
        },
      ]}
      ctaFinalTitulo="Sua carteira de imóveis no controle"
      ctaFinalTexto="Combine com ContabilidadePro pro imposto certinho."
    appUrl="https://aluguelpro.luqsys.com.br"
    assinarUrl="https://www.asaas.com/c/mhw1a1fe2i14hit6"
    />
  );
}
