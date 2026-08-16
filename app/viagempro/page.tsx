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
      tagline="Do roteiro à passagem em milhas, no mesmo lugar"
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
        "Busca de passagem em milhas (Smiles, TudoAzul)",
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
      praQuem={[
        {icone:"🧳", titulo:"Quem viaja e odeia planejar", texto:"O roteiro pronto pra editar, em vez da folha em branco."},
        {icone:"👨‍👩‍👧", titulo:"Família com dias contados", texto:"Encaixar tudo sem descobrir na hora que o museu fecha na terça."},
        {icone:"💼", titulo:"Viagem de trabalho com folga", texto:"Compromisso fixo no meio do dia e o resto montado em volta."},
      ]}
      naoServe={[
        "Você quer emitir a passagem e reservar o hotel aqui dentro — ele planeja e busca, a compra é fora",
        "Você já tem o roteiro pronto e só quer guardar: um bloco de notas resolve",
      ]}
      faq={[
        {
          p: "Ele compra a passagem ou reserva o hotel?",
          r: "Hotel não. Passagem em milhas ele BUSCA: o antigo MilhasPro virou parte do ViagemPro, então o mesmo app monta o roteiro e procura o trecho na Smiles e na TudoAzul. A emissão você faz no programa de fidelidade.",
        },
        {
          p: "Dá pra usar em viagem de trabalho?",
          r: "Dá. O roteiro aceita compromisso fixo no meio do dia e monta o resto em volta dele.",
        },
      ]}
      features={[
        "Roteiro dia a dia gerado por IA",
        "Busca de passagem em milhas (Smiles, TudoAzul)",
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
          nome: "ViagemPro",
          publico: "Planejamento e passagem, no mesmo lugar",
          precoLabel: "R$ 99",
          features: [
            "Viagens ilimitadas, roteiro completo por IA",
            "Comparador carro × avião × ônibus",
            "Busca de passagem em milhas (Smiles, TudoAzul)",
            "Alerta quando o trecho que você quer aparece",
            "Sugestões de restaurantes com favoritos",
            "Assistente IA durante a viagem",
            "Suporte por e-mail",
          ],
          // Assinatura única de R$ 99 criada no Asaas em 16/08/2026 — os seis
          // links antigos (ViagemPro e MilhasPro, 19/49/89) foram desativados
          // porque nenhum deles cobra o valor do produto fundido.
          ctaLabel: "Assinar R$ 99/mês",
          ctaHref: "https://www.asaas.com/c/3ie5r2bm9s1kugtp",
          destaque: true,
        },
      ]}
      ctaFinalTitulo="Sua próxima viagem planejada em minutos"
      ctaFinalTexto="Sem ficar 3 horas no Google Maps. A IA monta, você ajusta."
    appUrl="https://viagempro.luqsys.com.br"
    assinarUrl="https://www.asaas.com/c/3ie5r2bm9s1kugtp"
    />
  );
}
