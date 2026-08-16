import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "BotaPro — o custo real de cada par, calculado sozinho",
  description:
    "ERP pra fábrica de botina e calçado de couro: ficha técnica com custo real do par, ordem de produção que baixa insumo e registra refugo, estoque por numeração, atacado e varejo no mesmo estoque, NF-e modelo 55 e loja própria.",
};

/* Landing independente do BotaPro, no padrão do /p/silopro. É o site do
   produto: sem menu da Luqsys e sem link pros irmãos, porque a ideia é cada
   sistema ganhar domínio próprio depois. Fatos (planos, preços, links,
   funcionalidades) vêm da página curta em app/botapro/page.tsx. */

export default function BotaProLanding() {
  return (
    <LandingLayout
      slug="botapro"
      nome="BotaPro"
      icone="🥾"
      whatsapp="5545991077788"
      promessa="O custo real de cada par, calculado sozinho"
      subpromessa={
        <>
          Da vaqueta ao par vendido no mesmo sistema: ficha técnica, ordem de
          produção e estoque por numeração —{" "}
          <strong className="text-white">sem planilha paralela</strong> e sem
          sistema de varejo que não entende produção.
        </>
      }
      ctaPrincipal={{
        label: "Falar com a gente",
        href: "https://wa.me/5545991077788?text=Quero%20o%20BotaPro",
      }}
      ctaSecundaria={{
        label: "Ver os planos",
        href: "#planos",
      }}
      notaCta="✦ Sem fidelidade · três planos, do chão de fábrica à loja na internet"
      problema={{
        titulo: "Você sabe quanto custa o par que acabou de sair?",
        paragrafos: [
          "Vaqueta, palmilha, solado, cadarço, cola, mão de obra — e o refugo que ninguém contabiliza. Cada um desses números existe em algum lugar da fábrica: na nota do fornecedor, na cabeça do cortador, num caderno do galpão. Junto, num só lugar, por par produzido, quase nunca.",
          "Sem essa conta, o preço acaba saindo do “mais ou menos o que o concorrente cobra”. Funciona até o couro subir 12% numa compra, o modelo que mais vende passar a ser o que menos deixa margem, e ninguém perceber — porque o faturamento continuou bonito. Aí a margem some no meio do mês e a explicação vira palpite.",
          "O BotaPro monta a ficha técnica de cada modelo: quanto ele consome de cada insumo por par. O custo é somado com mão de obra e overhead e se recalcula quando o insumo muda de preço, com preço sugerido pelo seu markup. A ordem de produção baixa a matéria-prima, dá entrada no produto acabado grade por grade e registra o refugo — então o custo que aparece na tela é o da fábrica de verdade, não o do papel.",
        ],
      }}
      antesDepois={[
        {
          antes: "Preço tirado do que o concorrente está cobrando",
          depois: "Preço sugerido a partir do custo real e do seu markup",
        },
        {
          antes: "Couro subiu e o custo do modelo continua o antigo",
          depois: "Insumo mudou de preço, a ficha técnica recalcula sozinha",
        },
        {
          antes: "Estoque de bota contado no olho, sem separar numeração",
          depois: "Cada numeração com o seu saldo e o seu código de barras",
        },
        {
          antes: "Refugo que ninguém anota e some do custo",
          depois: "Refugo registrado na ordem de produção, par a par",
        },
        {
          antes: "Planilha do atacado separada da venda no varejo",
          depois: "Um estoque só, com preço de atacado e de varejo",
        },
        {
          antes: "Boleto do fornecedor perdido na caixa de e-mail",
          depois: "Boleto capturado do e-mail e lançado em contas a pagar",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "Cadastra insumos e modelos",
          texto:
            "Couro, solado, palmilha, cadarço e cola com custo unitário. Cada modelo nasce com a grade de numeração e um código de barras próprio por numeração.",
        },
        {
          n: "2",
          titulo: "Monta a ficha técnica",
          texto:
            "Quanto cada modelo consome por par. O sistema soma insumo, mão de obra e overhead e sugere o preço pelo seu markup — insumo subiu, o custo se atualiza.",
        },
        {
          n: "3",
          titulo: "Produz, vende e fatura",
          texto:
            "A ordem de produção baixa matéria-prima e dá entrada no acabado. A venda baixa o par, emite NF-e e manda o boleto pro lojista por e-mail e WhatsApp.",
        },
      ]}
      blocos={[
        {
          icone: "👞",
          titulo: "Bota não é um produto, é uma grade",
          texto:
            "Sistema comum trata o modelo como um item só e você descobre no pedido que a 39 acabou. Aqui cada numeração tem saldo próprio — que é como o lojista compra e como a fábrica produz.",
          itens: [
            "Grade de numeração com estoque separado por número",
            "Código de barras próprio de cada numeração",
            "Estoque em dois níveis: matéria-prima e produto acabado",
            "Aviso de numeração no mínimo, antes de faltar",
            "Histórico de cada movimento, com data e origem",
          ],
          print: {
            arquivo: "/prints/botapro-1.jpg",
            legenda: "Estoque por numeração, com mínimo e ajuste na mesma tela",
          },
        },
        {
          icone: "🧾",
          titulo: "Ficha técnica com o custo do par",
          texto:
            "É o coração do sistema: sem saber o que entra no par, todo o resto é chute caro. Com a ficha montada, cada compra de insumo mexe no custo dos modelos que usam aquele insumo.",
          itens: [
            "Consumo de cada insumo por par, modelo a modelo",
            "Custo somando insumo, mão de obra e overhead",
            "Recálculo automático quando o insumo muda de preço",
            "Preço sugerido pelo markup que você definir",
            "Comparação entre o que o modelo custa e o que ele é vendido",
          ],
        },
        {
          icone: "🏭",
          titulo: "Ordem de produção que fecha a conta",
          texto:
            "A produção é o que liga insumo a par pronto. Quando ela baixa a matéria-prima e registra o refugo, o estoque para de mentir e o custo passa a incluir o que se perdeu no corte.",
          itens: [
            "Baixa automática de matéria-prima ao produzir",
            "Entrada no produto acabado, grade por grade",
            "Refugo registrado e considerado no custo",
            "Painel com modelos ativos, pares em estoque e estoque a custo",
            "Últimas movimentações da fábrica em tempo real",
          ],
          print: {
            arquivo: "/prints/botapro-0.jpg",
            legenda: "Painel da fábrica: pares em estoque e movimentações do dia",
          },
        },
        {
          icone: "🤝",
          titulo: "Atacado e varejo no mesmo estoque",
          texto:
            "Manter dois controles pro mesmo par é como a fábrica costuma vender errado duas vezes. Aqui o lojista e o consumidor tiram da mesma grade, cada um com o seu preço.",
          itens: [
            "Preço de atacado e de varejo no mesmo cadastro",
            "Loja própria que só oferece numeração com estoque",
            "Checkout com boleto, cartão e Pix",
            "Boleto de venda no Asaas, enviado por e-mail e WhatsApp",
            "Frete, transportadora e rastreio dentro do pedido",
          ],
        },
        {
          icone: "📄",
          titulo: "Fiscal e financeiro no mesmo lugar",
          texto:
            "Nota emitida em um sistema e conta lançada em outro é como o dinheiro some do radar. Aqui a venda vira nota, e a compra vira conta a pagar sem redigitação.",
          itens: [
            "NF-e modelo 55 de saída industrial, com DANFE própria",
            "NF-e automática da venda feita pela internet",
            "Boleto de compra capturado do e-mail e lançado em contas a pagar",
            "Contas a pagar e a receber com fluxo de caixa",
            "Gastos por categoria, pra achar onde a margem foi embora",
          ],
        },
      ]}
      paraQuem={[
        {
          icone: "🏭",
          titulo: "Fábrica de calçado pequena",
          texto:
            "Quem produz e vende, e hoje mistura no mesmo controle o insumo e o par pronto.",
        },
        {
          icone: "📐",
          titulo: "Quem trabalha com grade",
          texto:
            "Numeração 34 a 44, cada uma com estoque, código de barras e mínimo próprios.",
        },
        {
          icone: "🤝",
          titulo: "Quem vende atacado e varejo",
          texto:
            "Lojista e consumidor final tirando da mesma grade, com preços diferentes.",
        },
      ]}
      naoServe={[
        "Você só revende calçado pronto e não produz nada — nesse caso o PDV Pro dá conta e sai mais barato",
        "Sua produção é sob medida, par a par, sem grade nem ficha técnica que se repita",
        "Você quer só um controle de estoque simples: aqui vem ficha técnica, produção e financeiro junto, e isso dá trabalho pra montar no começo",
      ]}
      planos={[
        {
          nome: "Fábrica",
          preco: "R$ 149",
          publico: "Até 30 modelos",
          itens: [
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
          preco: "R$ 249",
          publico: "Quem emite nota",
          destaque: true,
          itens: [
            "Tudo do plano Fábrica",
            "NF-e modelo 55 com DANFE própria",
            "Boleto de venda via Asaas",
            "Captura de boleto por e-mail",
            "Frete, transportadora e rastreio",
            "Onboarding dedicado",
          ],
          ctaLabel: "Falar com a gente",
          ctaHref: "https://wa.me/5545991077788?text=Quero%20o%20BotaPro%20Fiscal",
        },
        {
          nome: "Fábrica + Loja",
          preco: "R$ 349",
          publico: "Quem vende pela internet",
          itens: [
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
      notaPlanos="Dá pra começar no Fábrica e subir depois — a ficha técnica e o estoque que você montou continuam os mesmos."
      faq={[
        {
          p: "Vendo pra lojista e no varejo. Preciso de dois sistemas?",
          r: "Não. O mesmo estoque atende os dois, com preço de atacado e de varejo separados — o par que sai pra loja e o que sai pro consumidor saem da mesma grade. É justamente o que evita vender pela internet um número que já foi embora num pedido de atacado.",
        },
        {
          p: "Emite nota?",
          r: "Emite NF-e modelo 55 de saída industrial, com DANFE própria, nos planos Fábrica + Fiscal e Fábrica + Loja. No plano Fábrica a emissão fiscal não entra — ele cobre produção, estoque e financeiro. Como em qualquer emissor, a nota sai assinada com o certificado digital da sua empresa.",
        },
        {
          p: "Minha grade é de 34 a 44. Serve?",
          r: "Serve. A grade é definida por modelo, então cada um pode ter a sua faixa de numeração. Cada número entra com estoque, mínimo e código de barras próprios.",
        },
        {
          p: "O couro subiu. Preciso refazer o preço de tudo na mão?",
          r: "Não. Você atualiza o custo do insumo uma vez e todos os modelos que usam aquele insumo têm o custo recalculado, com o preço sugerido acompanhando o seu markup. É a diferença entre descobrir na hora e descobrir no fechamento do mês.",
        },
        {
          p: "E o refugo, entra na conta?",
          r: "Entra. A ordem de produção registra o que se perdeu, e essa perda pesa no custo do par. Refugo não anotado é a forma mais comum de a fábrica achar que ganha mais do que ganha.",
        },
        {
          p: "Quem faz a produção precisa mexer no sistema?",
          r: "Só na ordem de produção: abrir, apontar o que saiu pronto e o que virou refugo. O resto — custo, estoque, financeiro — o sistema faz a partir disso. Quem estiver no plano Fábrica + Loja ainda registra o ponto dos funcionários pelo HoraPro que vem junto.",
        },
        {
          p: "O que acontece se eu cancelar?",
          r: "Não tem fidelidade nem multa. Você avisa, o ciclo em curso termina e a cobrança para. Enquanto a conta está ativa você tira os relatórios que quiser, e a gente manda uma cópia dos seus dados antes de encerrar — sua ficha técnica é sua.",
        },
      ]}
      prints={[]}
      fechamento={{
        titulo: "Antes de vender o próximo lote, saiba quanto ele custou",
        texto:
          "Chama no WhatsApp com um modelo seu na cabeça — a gente monta a ficha técnica dele junto e você vê o custo real do par antes de assinar qualquer coisa.",
      }}
    />
  );
}
