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
      ctaPrimaria={{
        label: "Falar no WhatsApp",
        href: ctaWhats(
          "Oi Lucas, quero saber mais sobre o AdsPro pra anunciar no Meta",
        ),
      }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
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
          ctaLabel: "Quero o Self-Service",
          ctaHref: ctaWhats(
            "Oi Lucas, quero o AdsPro Self-Service (R$ 199/mês) pra criar os anúncios eu mesmo",
          ),
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
          ctaLabel: "Quero a Gestão Completa",
          ctaHref: ctaWhats(
            "Oi Lucas, quero o AdsPro Gestão Completa (R$ 499/mês) — vocês fazem os anúncios pra mim",
          ),
          destaque: true,
        },
      ]}
      ctaFinalTitulo="Anúncio que vende, não só impressão"
      ctaFinalTexto="Click-to-WhatsApp com copy de IA: cliente já chega pedindo orçamento, não só curtindo o post."
    />
  );
}
