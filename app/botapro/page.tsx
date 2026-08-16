import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "BotaPro — ERP para indústria de calçados",
  description:
    "ERP pra fábrica de botinas e calçados de couro: grade de numeração, ficha técnica com custo real do par, ordem de produção, estoque de matéria-prima e produto acabado, NF-e modelo 55 e loja própria integrada ao estoque.",
};

export default function BotaProPage() {
  return (
    <ProductLayout
      tema="botapro"
      icone="🥾"
      nome="BotaPro"
      tagline="Da vaqueta ao par vendido, no mesmo sistema"
      descricao={
        <>
          Pra <strong className="text-white">fábrica de calçado de couro</strong>:
          controla o <strong className="text-white">custo real de cada par</strong>,
          o estoque por numeração e a venda no atacado e na internet — sem planilha
          paralela e sem sistema de varejo que não entende produção.
        </>
      }
      ctaPrimaria={{
        label: "Falar com a gente",
        href: "https://wa.me/5545991077788?text=Quero%20o%20BotaPro",
      }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      passos={[
        {
          n: "1",
          titulo: "Cadastra insumos e modelos",
          texto:
            "Couro, solado, palmilha, cadarço e cola com custo unitário. Cada modelo nasce com a grade de numeração (37 a 44) e código de barras próprio por numeração.",
        },
        {
          n: "2",
          titulo: "Monta a ficha técnica",
          texto:
            "Quanto cada modelo consome por par. O sistema calcula o custo somando insumo, mão de obra e overhead — e sugere o preço pelo seu markup. Insumo subiu, custo se atualiza.",
        },
        {
          n: "3",
          titulo: "Produz, vende e fatura",
          texto:
            "Ordem de produção baixa matéria-prima e dá entrada em produto acabado. A venda baixa o par, emite NF-e e manda o boleto pro lojista por e-mail e WhatsApp.",
        },
      ]}
      features={[
        "Grade de numeração com estoque e código de barras por numeração",
        "Ficha técnica com custo real do par e preço sugerido por markup",
        "Ordem de produção: baixa insumo, entra produto acabado, registra refugo",
        "Estoque em dois níveis com histórico de cada movimento",
        "Atacado pra lojista e varejo pela loja própria, no mesmo estoque",
        "Boleto de venda no Asaas, enviado por e-mail e WhatsApp",
        "NF-e modelo 55 de saída industrial com DANFE própria",
        "Boleto de compra capturado do e-mail e lançado em contas a pagar",
        "Contas a pagar e receber, fluxo de caixa e gastos por categoria",
        "Frete, transportadora e rastreio no pedido",
      ]}
      planos={[
        {
          nome: "Fábrica",
          publico: "Até 30 modelos",
          precoLabel: "R$ 149",
          features: [
            "Modelos, grade e insumos ilimitados",
            "Ficha técnica e custo automático",
            "Ordem de produção",
            "Estoque nos dois níveis",
            "Contas a pagar e receber",
            "Suporte por WhatsApp",
          ],
          ctaLabel: "Falar com a gente",
          ctaHref: "https://wa.me/5545991077788?text=Quero%20o%20BotaPro%20Fábrica",
        },
        {
          nome: "Fábrica + Fiscal",
          publico: "Quem emite nota",
          precoLabel: "R$ 249",
          features: [
            "Tudo do plano Fábrica",
            "NF-e modelo 55 com DANFE própria",
            "Boleto de venda via Asaas",
            "Captura de boleto por e-mail",
            "Frete, transportadora e rastreio",
            "Onboarding dedicado",
          ],
          ctaLabel: "Falar com a gente",
          ctaHref: "https://wa.me/5545991077788?text=Quero%20o%20BotaPro%20Fiscal",
          destaque: true,
        },
        {
          nome: "Fábrica + Loja",
          publico: "Quem vende pela internet",
          precoLabel: "R$ 349",
          features: [
            "Tudo do plano Fiscal",
            "Loja própria com catálogo e carrinho",
            "Só oferece numeração com estoque",
            "Checkout com boleto, cartão e PIX",
            "NF-e automática da venda internet",
            "Ponto dos funcionários (HoraPro)",
          ],
          ctaLabel: "Falar com a gente",
          ctaHref: "https://wa.me/5545991077788?text=Quero%20o%20BotaPro%20Loja",
        },
      ]}
      ctaFinalTitulo="Você sabe quanto custa produzir um par hoje?"
      ctaFinalTexto="Sem ficha técnica, o preço sai do chute e a margem some no couro que subiu mês passado. Aqui o custo se recalcula sozinho."
      appUrl="https://botapro.luqsys.com.br"
      assinarUrl="https://wa.me/5545991077788?text=Quero%20o%20BotaPro"
    />
  );
}
