import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "AdsPro — Anúncios no Meta com IA",
  description:
    "Crie campanhas no Facebook e Instagram com IA gerando copy, ou deixe a gestão por nossa conta. Click-to-WhatsApp, relatórios automáticos e otimização contínua.",
};

const WHATSAPP_NUMERO = "5545991077788";
const ctaWhats = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(msg)}`;

export default function AdsProPage() {
  return (
    <ProductLayout
      tema="adspro"
      icone="📣"
      nome="AdsPro"
      tagline="Anúncios no Meta sem agência (ou com a gente fazendo tudo)"
      descricao={
        <>
          Painel pra criar campanhas no <strong className="text-white">Facebook</strong>{" "}
          e <strong className="text-white">Instagram</strong> com copy gerada por
          IA, ou{" "}
          <strong className="text-white">gestão completa</strong> feita por nós
          dentro do seu Business Manager. Você escolhe quanto quer se envolver.
        </>
      }
      ctaPrimaria={{ label: "Ver planos", href: "#planos" }}
      ctaSecundaria={{
        label: "Falar no WhatsApp",
        href: ctaWhats(
          "Oi Lucas, quero saber mais sobre o AdsPro pra anunciar no Meta",
        ),
      }}
      assinarUrl="https://www.asaas.com/c/25b3hf60gwxxa8b9"
      rodapeHero="✦ Sem fidelidade · cancele quando quiser · verba de mídia paga direto pra Meta"
      passos={[
        {
          n: "1",
          titulo: "Conecta seu Business Manager",
          texto:
            "Você cria/usa o BM do seu negócio na Meta e adiciona o AdsPro como administrador. Onboarding passo a passo (5 a 10 min) se for sua primeira vez.",
        },
        {
          n: "2",
          titulo: "Cria a campanha (ou pede pra gente)",
          texto:
            "Wizard completo: objetivo, público, raio geográfico, criativo, copy com IA. Ou no plano gestão você manda o briefing e a gente monta tudo.",
        },
        {
          n: "3",
          titulo: "Acompanha resultado",
          texto:
            "Insights em tempo real (gasto, CTR, conversas, custo por mensagem). Relatório semanal com resumo executivo escrito por IA — pra você entender sem ser de marketing.",
        },
      ]}
      problema={{
        titulo: "Impulsionar não é anunciar",
        texto: (
          <>
            <p>
              Você aperta "impulsionar", o dinheiro sai, chega curtida — e
              nenhuma conversa. Agência cobra mensalidade que não cabe, e o
              Gerenciador de Anúncios é uma cabine de avião pra quem só quer
              vender mais.
            </p>
            <p>
              O AdsPro monta a campanha inteira num fluxo só, com o anúncio que
              abre conversa no WhatsApp — e mostra quanto custou cada conversa.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "💬",
          titulo: "Anúncio que vira conversa",
          texto:
            "Click-to-WhatsApp: quem clica cai direto no seu WhatsApp, que é onde a venda acontece de verdade.",
          itens: [
            "Click-to-WhatsApp (CTWA)",
            "Messenger e tráfego pro site",
            "Promover post existente ou subir criativo novo",
            "Campanha, público e criativo num fluxo só",
          ],
        },
        {
          icone: "🎯",
          titulo: "Pra quem está perto de você",
          texto:
            "Cidade, raio em quilômetros, idade e interesse — sem precisar entender a interface do Meta.",
          itens: [
            "Segmentação por cidade e raio em km",
            "Idade e interesses",
            "Sugestão de texto com IA em 3 ângulos",
            "Insights: gasto, CTR, conversas e R$ por conversa",
          ],
        },
      ]}
      faq={[
        {
          p: "Preciso ter Gerenciador de Anúncios configurado?",
          r: "Você precisa da conta de anúncios e da página — a gente ajuda a conectar. Depois disso o dia a dia acontece dentro do AdsPro.",
        },
        {
          p: "Qual a diferença pro plano de gestão?",
          r: "No plano de R$ 199 você sobe as campanhas; no de R$ 499 a gente faz por você — criativo, texto, segmentação e acompanhamento.",
        },
      ]}
      features={[
        "Click-to-WhatsApp (CTWA): anúncio que abre conversa direto",
        "Mensageria pelo Messenger e tráfego pro site",
        "Sugestão de copy com IA (3 variações de ângulos)",
        "Wizard: campanha + público + criativo num só fluxo",
        "Promover post existente (boost) ou subir criativo novo",
        "Targeting por cidade + raio km + idade + interesses",
        "Insights por campanha: gasto, CTR, conversas, R$/conversa",
        "Editar / pausar / duplicar campanha sem entrar no Ads Manager",
        "Relatório semanal HTML com resumo executivo IA",
        "Multi-conta: roda anúncios de mais de um negócio no mesmo painel",
      ]}
      planos={[
        {
          nome: "Self-Service",
          publico: "Você opera, IA ajuda",
          precoLabel: "R$ 199",
          features: [
            "Painel completo de criação de campanha",
            "Sugestão de copy com IA (Claude)",
            "Targeting geo + interesses + idade",
            "Insights e relatórios automáticos",
            "Até 2 contas de anúncios",
            "Suporte por e-mail",
            "Verba de mídia paga direto pra Meta",
          ],
          ctaLabel: "Assinar Self-Service",
          ctaHref: "https://www.asaas.com/c/yrchtoia1s2ed5lt",
        },
        {
          nome: "Gestão Completa",
          publico: "A gente faz por você",
          precoLabel: "R$ 499",
          features: [
            "Você manda só o briefing — a gente monta tudo",
            "Criação e otimização contínua das campanhas",
            "Relatório semanal + acompanhamento mensal",
            "Copy + criativo orientados por IA",
            "Suporte prioritário no WhatsApp",
            "Verba de mídia paga direto pra Meta (não inclusa)",
          ],
          ctaLabel: "Assinar Gestão Completa",
          ctaHref: "https://www.asaas.com/c/25b3hf60gwxxa8b9",
          destaque: true,
        },
      ]}
      ctaFinalTitulo="Anúncio que vende, não só impressão"
      ctaFinalTexto="Click-to-WhatsApp com copy de IA: cliente já chega pedindo orçamento, não só curtindo o post."
    />
  );
}
