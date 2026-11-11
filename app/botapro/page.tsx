import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "BotaPro — ERP para indústria de calçados",
  description:
    "ERP pra fábrica de botinas e calçados de couro: grade de numeração, ficha técnica com custo real do par, ordem de produção, corte e pesponto terceirizados, vendas por representante com comissão, NF-e modelo 55 e loja própria integrada ao estoque.",
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
            "Ordem de produção baixa matéria-prima, acompanha o que foi pro corte e pesponto terceirizados e dá entrada no acabado. O representante tira o pedido pelo celular; a fábrica confirma, emite a NF-e e manda o boleto pro lojista.",
        },
      ]}
      problema={{
        titulo: "Você sabe quanto custa o par que acabou de sair?",
        texto: (
          <>
            <p>
              Vaqueta, palmilha, solado, mão de obra e o refugo que ninguém
              contabiliza. O preço acaba saindo do "mais ou menos o que o
              concorrente cobra" — e a margem some no meio do mês.
            </p>
            <p>
              O BotaPro tem ficha técnica com custo real do par e ordem de
              produção que baixa insumo e dá entrada no acabado, grade por
              grade.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "👞",
          titulo: "Estoque em grade",
          texto:
            "Bota não é um produto: é uma grade. Cada numeração com o seu estoque e o seu código de barras.",
          itens: [
            "Grade de numeração com estoque próprio",
            "Código de barras por numeração",
            "Estoque em dois níveis: insumo e produto acabado",
            "Histórico de cada movimento",
          ],
        },
        {
          icone: "🏭",
          titulo: "Da vaqueta ao par pronto",
          texto:
            "A ordem de produção baixa o insumo, dá entrada no acabado e registra o refugo — o custo do par sai da realidade.",
          itens: [
            "Ficha técnica com custo real do par",
            "Preço sugerido por markup",
            "Ordem de produção com refugo registrado",
            "Atacado e varejo no mesmo estoque",
          ],
        },
        {
          icone: "✂️",
          titulo: "Corte e pesponto terceirizados",
          texto:
            "Quantos pares estão com cada ateliê, o que voltou, o que veio com defeito e qual remessa atrasou — e o pagamento por par sai sozinho.",
          itens: [
            "Remessa por ordem de produção e etapa",
            "Retorno parcial com pares bons e com defeito",
            "Aviso de remessa atrasada",
            "NF-e de remessa para industrialização",
          ],
        },
        {
          icone: "🤝",
          titulo: "Venda por representante",
          texto:
            "Cada representante com a carteira dele e um acesso próprio: tira o pedido em grade pelo celular e acompanha a comissão.",
          itens: [
            "Pedido lançado em grade, modelo por modelo",
            "Comissão liberada quando o lojista paga",
            "Fechamento da comissão direto no contas a pagar",
            "NF-e com duplicatas e transportadora do pedido",
          ],
        },
      ]}
      prints={[
        {arquivo: "/prints/botapro-0.jpg", legenda: "Painel da fábrica"},
        {arquivo: "/prints/botapro-1.jpg", legenda: "Estoque por grade"},
      ]}
      praQuem={[
        {icone:"🏭", titulo:"Fábrica de calçado pequena", texto:"Quem produz e vende, e mistura insumo com produto pronto."},
        {icone:"📐", titulo:"Quem trabalha com grade", texto:"Numeração 34 a 44, cada uma com estoque próprio."},
        {icone:"🤝", titulo:"Quem vende atacado e varejo", texto:"Lojista e consumidor tirando do mesmo estoque."},
      ]}
      naoServe={[
        "Você só revende calçado pronto — nesse caso o PDV Pro dá conta e sai mais barato",
        "Sua produção é sob medida, par a par, sem grade nem ficha técnica repetida",
      ]}
      faq={[
        {
          p: "Vendo pra lojista e no varejo. Preciso de dois sistemas?",
          r: "Não. O mesmo estoque atende os dois, com preço de atacado e de varejo separados — o par que sai pra loja e o que sai pro consumidor saem da mesma grade.",
        },
        {
          p: "Emite nota?",
          r: "Sim. A NF-e modelo 55 sai do próprio pedido, com CFOP de venda de produção, duplicatas, transportadora e volumes, pela Focus NFe com o certificado da sua empresa. Funciona no Simples Nacional e no Regime Normal. A remessa pro terceirizado também tem nota.",
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
        "Corte e pesponto terceirizados: pares na rua, retorno e pagamento por par",
        "Representantes com acesso próprio, pedido em grade e comissão",
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
            "Ordem de produção e terceirizados",
            "Representantes e comissão",
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
