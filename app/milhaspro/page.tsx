import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "MilhasPro — Passagens em milhas pro cidadão comum",
  description:
    "Buscador de passagens em milhas (Smiles, TudoAzul) com veredito automático: Ótimo, Bom, Ok ou Caro. Em português, sem jargão.",
};

export default function MilhasProPage() {
  return (
    <ProductLayout
      tema="milhaspro"
      icone="🎫"
      nome="MilhasPro"
      tagline="Passagens em milhas em português, sem jargão"
      descricao={
        <>
          Procure passagens em <strong className="text-white">Smiles</strong> e{" "}
          <strong className="text-white">TudoAzul</strong> e receba na hora o
          veredito:{" "}
          <span className="text-gold">Ótimo · Bom · Ok · Caro</span>. O app
          decide pra você se vale a pena.
        </>
      }
      ctaPrimaria={{
        label: "Falar com a gente",
        href: "mailto:contato@luqsys.com.br?subject=Quero%20o%20MilhasPro",
      }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      passos={[
        {
          n: "1",
          titulo: "Cadastra suas milhas",
          texto:
            "Saldo Smiles, TudoAzul, validade, CPM atual. O app calcula o valor real do milheiro pra você.",
        },
        {
          n: "2",
          titulo: "Busca destino ou janela",
          texto:
            "Modo 'pra onde dá pra ir' com suas milhas, ou 'tenho um destino, quando voa mais barato'. Janela de datas.",
        },
        {
          n: "3",
          titulo: "Veredito automático",
          texto:
            "Cada oferta vem com selo: Ótimo, Bom, Ok, Caro. Você não precisa entender cURL, milhas/R$ ou inglês.",
        },
      ]}
      problema={{
        titulo: "Milhas viraram um idioma que ninguém te ensinou",
        texto: (
          <>
            <p>
              CPM, milheiro, taxa de embarque, promoção de transferência
              bonificada. Você junta milhas há anos e, na hora de usar, não sabe
              dizer se aquela oferta é boa ou se está sendo passado pra trás.
            </p>
            <p>
              O MilhasPro busca a disponibilidade real e dá um veredito em
              português: vale ou não vale, e por quê.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "🔎",
          titulo: "Disponibilidade de verdade",
          texto:
            "Dados reais de Smiles e TudoAzul — não é simulação nem tabela velha de blog.",
          itens: [
            "Consulta real de Smiles e TudoAzul",
            "Veredito automático em cada oferta",
            "Rotas monitoradas com teto de milhas",
            "Alerta quando a passagem entra no seu teto",
          ],
        },
        {
          icone: "🧮",
          titulo: "Em português, sem jargão",
          texto:
            "Quanto vale o seu milheiro, quanto sai a passagem em dinheiro e se compensa comprar milha pra fechar.",
          itens: [
            "Calculadora de valor do milheiro",
            "Suas milhas com alerta de vencimento",
            "Assistente que responde 'vale a pena?'",
            "Feito pra celular, sem cadastro pra começar",
          ],
        },
      ]}
      praQuem={[
        {icone:"✈️", titulo:"Quem junta milha e não usa", texto:"Milha parada vencendo porque nunca dá pra saber se a oferta é boa."},
        {icone:"📊", titulo:"Quem transfere com bônus", texto:"Saber quanto vale o milheiro antes de aceitar a promoção."},
        {icone:"🎯", titulo:"Quem tem uma rota na cabeça", texto:"Monitorar e ser avisado quando entrar no seu teto."},
      ]}
      naoServe={[
        "Você quer emitir a passagem por aqui — a emissão continua no programa",
        "Você voa só em companhia sem programa de milhas relevante no Brasil",
      ]}
      faq={[
        {
          p: "Preciso dar login do meu programa de milhas?",
          r: "Não. A consulta de disponibilidade é feita sem a sua conta; suas milhas você informa se quiser o alerta de vencimento.",
        },
        {
          p: "Ele emite a passagem?",
          r: "Não emite — mostra onde tem, por quantas milhas e se o preço faz sentido. A emissão você faz no programa, como sempre fez.",
        },
      ]}
      features={[
        "Dados reais de Smiles e TudoAzul (sem demo)",
        "Veredito automático em cada oferta",
        "Suas milhas com alerta de vencimento",
        "Rotas monitoradas com teto de milhas",
        "Calculadora de valor do milheiro",
        "Assistente IA: 'vale a pena essa oferta?'",
        "Mobile-first, 100% em português",
        "Sem necessidade de cadastro nas companhias",
      ]}
      planos={[
        {
          nome: "Básico",
          publico: "Curioso de milhas",
          precoLabel: "R$ 19",
          features: [
            "Até 10 buscas/mês",
            "Carteira de milhas",
            "Alerta de vencimento",
            "Sem rotas monitoradas",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Básico",
          ctaHref: "https://www.asaas.com/c/l5ukxyyofshxngh0",
        },
        {
          nome: "Pro",
          publico: "Pra quem voa direto",
          precoLabel: "R$ 49",
          features: [
            "Buscas ilimitadas Smiles + TudoAzul",
            "Carteira com alerta de vencimento",
            "Rotas monitoradas com teto de milhas",
            "Assistente IA: 'vale a pena?'",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/q4ceriz467m31i85",
          destaque: true,
        },
        {
          nome: "Família",
          publico: "Família + várias contas de milhas",
          precoLabel: "R$ 89",
          features: [
            "Tudo do Pro",
            "Até 5 perfis compartilhando",
            "Soma de milhas da família",
            "Recomendações cruzadas",
            "Concierge por e-mail",
            "Suporte prioritário",
          ],
          ctaLabel: "Assinar Família",
          ctaHref: "https://www.asaas.com/c/nga96be8v36itedc",
        },
      ]}
      ctaFinalTitulo="Voe mais barato sem virar especialista"
      ctaFinalTexto="Suas milhas estão valendo a pena? O MilhasPro responde."
    appUrl="https://milhaspro.luqsys.com.br"
    assinarUrl="https://www.asaas.com/c/q4ceriz467m31i85"
    />
  );
}
