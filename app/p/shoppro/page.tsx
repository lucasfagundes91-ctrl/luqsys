import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "ShopPro — a sua loja vendendo online, com o estoque do PDV",
  description:
    "Site de e-commerce próprio da sua loja, no seu domínio, com produto, preço e estoque saindo do PDV Pro. Carrinho, Pix, cartão em 12x, frete Melhor Envio e clube de pontos. Sem comissão por venda. Add-on do PDV Pro por +R$ 199/mês.",
};

/* Landing independente do ShopPro, no padrão do /p/silopro. É o site do
   produto: sem menu da Luqsys e sem link pros irmãos, porque a ideia é cada
   sistema ganhar domínio próprio depois. Fatos (preço, funcionalidades,
   links) vêm da página curta em app/shoppro/page.tsx — nada inventado. */

export default function ShopProLanding() {
  const ZAP_PRINCIPAL =
    "https://wa.me/5545991077788?text=Quero%20o%20ShopPro%20(site%20+%20PDV%20Pro)";
  const ZAP_PLANO =
    "https://wa.me/5545991077788?text=Quero%20o%20ShopPro%20(site%20+%20PDV%20Pro%2C%20%2BR%24%20199%2Fm%C3%AAs)";

  return (
    <LandingLayout
      slug="shoppro"
      nome="ShopPro"
      icone="🛍️"
      whatsapp="5545991077788"
      promessa="Sua loja vendendo online sem virar duas lojas"
      subpromessa={
        <>
          O site é seu, no seu domínio, com o{" "}
          <strong className="text-white">estoque do PDV Pro</strong>. Vendeu no
          balcão, saiu do site — e nenhum centavo de comissão por venda.
        </>
      }
      ctaPrincipal={{
        label: "Falar com vendas",
        href: ZAP_PRINCIPAL,
      }}
      ctaSecundaria={{
        label: "Ver tudo o que ele faz",
        href: "#recursos",
      }}
      notaCta="✦ Add-on do PDV Pro · sem comissão sobre a venda · sem fidelidade"
      problema={{
        titulo: "Vender online sem duplicar o trabalho da loja",
        paragrafos: [
          "Vender fora do balcão hoje custa caro de um jeito ou de outro. No marketplace, a plataforma leva uma comissão de cada venda — o mês inteiro produzindo e uma fatia sai antes de você olhar o caixa. E o cliente que comprou é da plataforma, não seu: ele não sabe o nome da sua loja, não volta pelo seu link e você não fala com ele de novo.",
          "A alternativa costuma ser um site próprio, e aí aparece o outro problema: ele vira um segundo estoque pra manter. Produto novo tem que ser cadastrado duas vezes, promoção tem que ser lançada duas vezes, e o item que acabou no balcão continua à venda no site — até o pedido cair de um produto que não existe mais e alguém ter que ligar pro cliente pra desmarcar a compra.",
          "O ShopPro não é um e-commerce avulso: é o site do seu PDV Pro. Produto, preço, foto, promoção e estoque saem de onde já estão. Vendeu na loja, o site atualiza; vendeu no site, o pedido cai no PDV e baixa o estoque. Um catálogo só, um caixa só, e a comissão que fica é zero — você paga a mensalidade e a taxa do meio de pagamento, como paga hoje na maquininha.",
        ],
      }}
      antesDepois={[
        {
          antes: "Comissão da plataforma em cima de cada venda",
          depois: "Mensalidade fixa e nenhum percentual sobre o que você vende",
        },
        {
          antes: "Cadastrar o produto no PDV e de novo no site",
          depois: "Cadastrou no PDV Pro, apareceu no site com foto e preço",
        },
        {
          antes: "Item que acabou no balcão continua à venda na internet",
          depois: "Estoque é o mesmo — acabou na loja, sai da vitrine",
        },
        {
          antes: "Promoção lançada em dois lugares (e esquecida em um)",
          depois: "Promoção e cupom do PDV valem no site na hora",
        },
        {
          antes: "Cliente do marketplace que você nunca conhece",
          depois: "Cadastro, pedido e clube de pontos no seu domínio",
        },
        {
          antes: "Mudar um texto do site depende de programador",
          depois: "Você troca banner, página e cupom sozinho, pelo painel",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "Você já é cliente do PDV Pro",
          texto:
            "O ShopPro é add-on: soma +R$ 199/mês ao seu plano atual do PDV Pro. É de lá que vêm produto, preço, foto e estoque.",
        },
        {
          n: "2",
          titulo: "A gente sobe seu site em até 7 dias",
          texto:
            "Você passa nome, logo, cores, telefone e as regras (frete, formas de pagamento). Publicamos no domínio que você escolher — minhaloja.com.br, por exemplo.",
        },
        {
          n: "3",
          titulo: "A loja vende nos dois lugares",
          texto:
            "O pedido cai no PDV Pro, baixa estoque, avisa o cliente no WhatsApp e gera a etiqueta de envio. Você opera de um lugar só.",
        },
      ]}
      blocos={[
        {
          icone: "🛍️",
          titulo: "Uma loja online de verdade",
          texto:
            "Não é catálogo com botão de WhatsApp: é carrinho, checkout e pagamento no site. Isso importa porque o cliente que já compra em loja grande desiste na hora em que percebe que vai ter que combinar tudo por mensagem.",
          itens: [
            "Carrinho e checkout com endereço, frete e cupom",
            "Pix com desconto e cartão em até 12x",
            "Frete pelo Melhor Envio (Correios e transportadoras) ou retirada na loja",
            "Login com Google ou e-mail e senha, com cadastro automático",
            "Botão de WhatsApp flutuante pra quem prefere perguntar antes",
          ],
          print: {
            arquivo: "/prints/shoppro-0.jpg",
            legenda: "A loja no ar, no domínio do cliente",
          },
        },
        {
          icone: "🔄",
          titulo: "Um catálogo só, o do PDV Pro",
          texto:
            "Todo o resto do sistema existe pra você não manter dois cadastros. O que muda no PDV muda no site, e é isso que impede a venda de um produto que já acabou no balcão.",
          itens: [
            "Estoque sincronizado com o PDV Pro nos dois sentidos",
            "Preço, foto e descrição saindo do cadastro que você já tem",
            "Promoções e cupons do PDV valendo no site",
            "Clube de pontos que soma no balcão e vale na internet",
            "Vitrine com filtros por departamento, grupo, marca e faixa etária",
          ],
          print: {
            arquivo: "/prints/shoppro-1.jpg",
            legenda: "Vitrine com preço, parcelamento e carrinho",
          },
        },
        {
          icone: "💳",
          titulo: "Pagamento e entrega resolvidos",
          texto:
            "Duas coisas derrubam venda online: não ter a forma de pagamento que a pessoa usa e não saber quanto custa o frete antes de fechar. As duas ficam prontas no dia em que o site sobe.",
          itens: [
            "Pix com desconto e cartão em até 12x pelo Asaas",
            "Frete calculado no checkout pelo Melhor Envio, sem tabela na mão",
            "Retirada na loja como opção, sem custo de envio",
            "Etiqueta de envio gerada a partir do pedido",
            "E-mails automáticos de confirmação, pagamento e envio",
          ],
        },
        {
          icone: "🎨",
          titulo: "Você edita o site sem chamar ninguém",
          texto:
            "Site que só o programador mexe envelhece parado. Aqui banner, texto e cupom são campo de formulário — a loja acompanha a data comemorativa em vez de perdê-la.",
          itens: [
            "Banners da home gerenciáveis, sem mexer no código",
            "Páginas de Sobre, Trocas, Entregas, Pagamento e Privacidade no CMS",
            "Cupons de desconto criados por você",
            "Seções prontas de novidades, mais vendidos, liquidação e por idade",
            "SEO básico já configurado: sitemap, meta tags e JSON-LD",
          ],
        },
        {
          icone: "📊",
          titulo: "Depois que o pedido entra",
          texto:
            "A venda online só é boa se ela não virar trabalho extra no dia seguinte. O pedido nasce dentro do PDV Pro, com cliente, estoque baixado e o cliente avisado.",
          itens: [
            "Painel com pedidos, clientes e assinantes do clube",
            "Pedido cai no PDV Pro e baixa o estoque automaticamente",
            "Aviso no WhatsApp pro cliente a cada etapa",
            "Atendimento no WhatsApp com IA (Luquizinha) respondendo sobre pedidos",
            "Lista de aniversário pública, com link que o cliente compartilha",
          ],
        },
      ]}
      paraQuem={[
        {
          icone: "🏪",
          titulo: "Loja física que quer vender online",
          texto:
            "Sem manter dois catálogos e sem entregar comissão por venda pra plataforma de ninguém.",
        },
        {
          icone: "🎁",
          titulo: "Quem tem clube de pontos",
          texto:
            "O ponto ganho no balcão vale no site, e o ganho no site vale no balcão. É o mesmo cliente.",
        },
        {
          icone: "📦",
          titulo: "Quem já envia pelos Correios",
          texto:
            "Frete calculado no checkout e etiqueta saindo do pedido, sem consultar tabela na mão.",
        },
      ]}
      naoServe={[
        "Você não usa o PDV Pro — o ShopPro exige o PDV Pro ativo, porque é dele que vêm produto, preço, foto e estoque. Não vendemos o site sozinho",
        "Você quer vender em marketplace: pra Mercado Livre a integração é dentro do próprio PDV Pro, não aqui",
        "Você quer um site institucional com portfólio e blog: o ShopPro é loja, com carrinho e checkout",
      ]}
      planos={[
        {
          nome: "ShopPro (add-on)",
          preco: "+R$ 199",
          publico: "Cliente PDV Pro que quer vender online",
          destaque: true,
          itens: [
            "Adiciona +R$ 199/mês ao seu plano do PDV Pro",
            "Site próprio no domínio à sua escolha",
            "Integração total com o PDV Pro: estoque, preço e promoção",
            "Setup em até 7 dias",
            "CMS pra editar páginas, banners e cupons",
            "Asaas, Melhor Envio e login com Google inclusos",
            "Sem comissão sobre a venda",
            "Sem fidelidade, cancele quando quiser",
          ],
          ctaLabel: "Quero o ShopPro",
          ctaHref: ZAP_PLANO,
        },
      ]}
      notaPlanos="Preço fixo, independente de quantos pedidos entrarem. Mês bom não pode custar mais caro."
      faq={[
        {
          p: "Preciso ter o PDV Pro?",
          r: "Precisa. O ShopPro é o site do PDV Pro, e é de lá que vêm produto, preço, foto e estoque — é exatamente isso que evita você manter dois catálogos. Não vendemos o site como e-commerce avulso pra quem usa outro sistema.",
        },
        {
          p: "Qual é a comissão por venda?",
          r: "Nenhuma. Você paga a mensalidade e as taxas do meio de pagamento (Pix e cartão), como já paga na maquininha. Não existe percentual sobre a venda como acontece nos marketplaces — vender mais num mês não aumenta o que você paga pra gente.",
        },
        {
          p: "Quanto tempo até o site ficar no ar?",
          r: "Até 7 dias. Você manda nome da loja, logo, cores, telefone e as regras de frete e pagamento; a gente publica no domínio combinado. Os produtos não precisam ser cadastrados de novo: eles já estão no seu PDV Pro.",
        },
        {
          p: "O domínio é meu?",
          r: "É seu. Você compra o domínio (minhaloja.com.br, por exemplo) e a gente faz a ligação com o site. Fica no seu nome, e se um dia você quiser apontar pra outro lugar, aponta.",
        },
        {
          p: "E se o produto acabar na loja física?",
          r: "Ele sai da vitrine. O estoque é o mesmo do PDV Pro, então a venda do balcão já derruba a quantidade do site. É o motivo principal de o site nascer colado no PDV em vez de ser um sistema separado.",
        },
        {
          p: "Preciso saber mexer em site pra manter?",
          r: "Não. Banner, texto das páginas e cupom são formulário no painel. Só o que envolve mudar a estrutura da loja passa pela gente — e isso está no suporte, não é serviço à parte.",
        },
        {
          p: "O que acontece se eu cancelar?",
          r: "Sem fidelidade e sem multa: você avisa, o ciclo em curso termina e a cobrança para. O site sai do ar no fim do período pago, o domínio continua seu e o PDV Pro segue funcionando normalmente com todos os seus dados — quem cancela o add-on não perde a loja física.",
        },
      ]}
      prints={[]}
      fechamento={{
        titulo: "A mesma loja, agora aberta 24 horas",
        texto:
          "Um catálogo, um estoque, um caixa — e uma vitrine que não fecha às 18h. Chama no WhatsApp que a gente vê se faz sentido pra sua loja antes de você pagar qualquer coisa.",
      }}
    />
  );
}
