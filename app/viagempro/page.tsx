import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "ViagemPro — Planejador de viagens com IA",
  description:
    "Roteiro dia a dia, comparador carro × avião × ônibus, sugestões de restaurantes e assistente IA — tudo em um app de viagens.",
};

export default function ViagemProPage() {
  return (
    <ProductLayout
      tema="viagempro"
      icone="🧳"
      nome="ViagemPro"
      tagline="Planeje sua viagem do roteiro ao restaurante"
      descricao={
        <>
          IA monta o <strong className="text-white">roteiro dia a dia</strong>,
          compara <strong className="text-white">carro × avião × ônibus</strong>
          , sugere onde comer e responde dúvidas durante a viagem.
        </>
      }
      ctaPrimaria={{
        label: "Falar com a gente",
        href: "mailto:contato@luqsys.com.br?subject=Quero%20o%20ViagemPro",
      }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      passos={[
        {
          n: "1",
          titulo: "Conta a viagem",
          texto:
            "Destino, datas, quantas pessoas, orçamento, estilo (família, casal, mochilão). Ou descubra um destino pelo orçamento.",
        },
        {
          n: "2",
          titulo: "IA monta o roteiro",
          texto:
            "Atividades dia a dia editáveis. Compara transporte. Sugere restaurantes (com favoritos). Tudo em segundos.",
        },
        {
          n: "3",
          titulo: "Assistente durante a viagem",
          texto:
            "Chat contextual: 'qual o melhor caminho daqui pro hotel?', 'onde almoçar perto?'. Como um guia local no bolso.",
        },
      ]}
      problema={{
        titulo: "Planejar viagem virou abrir 14 abas",
        texto: (
          <>
            <p>
              Uma pro voo, uma pro hotel, três pra restaurante, uma pro mapa e
              um bloco de notas com o roteiro que nunca fica pronto. No fim,
              você viaja sem plano ou passa a viagem no celular.
            </p>
            <p>
              O ViagemPro monta o roteiro dia a dia, compara como chegar e
              sugere onde comer — e continua te respondendo durante a viagem.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "🗺️",
          titulo: "Roteiro que já nasce pronto",
          texto:
            "Você diz pra onde e por quantos dias; ele devolve o dia a dia — e você edita o que quiser.",
          itens: [
            "Roteiro dia a dia gerado por IA",
            "Edição manual de qualquer atividade",
            "Modo 'descubra um destino'",
            "Várias viagens salvas e compartilháveis",
          ],
        },
        {
          icone: "🚗",
          titulo: "Como chegar e onde comer",
          texto:
            "Carro, avião ou ônibus comparados de verdade, e restaurante sugerido perto do que você vai fazer naquele dia.",
          itens: [
            "Comparador carro × avião × ônibus",
            "Sugestão de restaurantes com favoritos",
            "Assistente que responde durante a viagem",
            "Roteiro no celular, offline-friendly",
          ],
        },
      ]}
      faq={[
        {
          p: "Ele compra a passagem ou reserva o hotel?",
          r: "Não. Ele planeja e compara — a compra você faz onde preferir. Pra passagem em milhas, quem ajuda é o MilhasPro, da mesma casa.",
        },
        {
          p: "Dá pra usar em viagem de trabalho?",
          r: "Dá. O roteiro aceita compromisso fixo no meio do dia e monta o resto em volta dele.",
        },
      ]}
      features={[
        "Roteiro dia a dia gerado por IA",
        "Comparador carro × avião × ônibus",
        "Sugestões de restaurantes com favoritos",
        "Modo 'descubra um destino'",
        "Assistente IA contextual durante a viagem",
        "Múltiplas viagens salvas",
        "Edição manual de qualquer atividade",
        "Compartilhamento do roteiro",
      ]}
      planos={[
        {
          nome: "Básico",
          publico: "Pra viajantes ocasionais",
          precoLabel: "R$ 19",
          features: [
            "Até 2 viagens ativas",
            "Roteiro básico por IA",
            "Comparador de transporte",
            "Sem assistente IA durante viagem",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Básico",
          ctaHref: "https://www.asaas.com/c/hx5di6wrxu4z7cfl",
        },
        {
          nome: "Pro",
          publico: "Pra quem viaja sempre",
          precoLabel: "R$ 49",
          features: [
            "Viagens ilimitadas",
            "Roteiros completos por IA",
            "Comparador de transporte",
            "Sugestões de restaurantes",
            "Assistente IA durante a viagem",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/josachoczgkjobvf",
          destaque: true,
        },
        {
          nome: "Família",
          publico: "Pra viajar em grupo",
          precoLabel: "R$ 89",
          features: [
            "Tudo do Pro",
            "Até 5 pessoas compartilhando",
            "Lista de bagagem compartilhada",
            "Divisão de despesas",
            "Roteiro colaborativo",
            "Suporte prioritário",
          ],
          ctaLabel: "Assinar Família",
          ctaHref: "https://www.asaas.com/c/gbb4diiwxmg42cbx",
        },
      ]}
      ctaFinalTitulo="Sua próxima viagem planejada em minutos"
      ctaFinalTexto="Sem ficar 3 horas no Google Maps. A IA monta, você ajusta."
    appUrl="https://viagempro.luqsys.com.br"
    assinarUrl="https://www.asaas.com/c/josachoczgkjobvf"
    />
  );
}
