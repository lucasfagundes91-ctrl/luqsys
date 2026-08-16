import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "ComandaPro — Sistema para restaurantes e bares",
  description:
    "Comandas de mesa, balcão e delivery, cardápio digital, tela de cozinha (KDS), caixa, NFC-e e relatórios. A gestão completa do seu restaurante.",
};

export default function ComandaProPage() {
  return (
    <ProductLayout
      tema="comandapro"
      icone="🍽️"
      nome="ComandaPro"
      tagline="Sistema de gestão para restaurantes, bares e lanchonetes"
      descricao={
        <>
          Do <strong className="text-white">pedido na mesa</strong> ao{" "}
          <strong className="text-white">cupom fiscal</strong>: comandas,
          cardápio digital, tela de cozinha, caixa, NFC-e e relatórios — tudo
          num sistema só, que roda no celular, no computador e na maquininha.
        </>
      }
      ctaPrimaria={{
        label: "Testar grátis 3 dias",
        href: "https://comandapro.luqsys.com.br/cadastro",
      }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      passos={[
        {
          n: "1",
          titulo: "Monte o cardápio",
          texto:
            "Categorias e produtos com preço — cadastra na hora ou importa do seu sistema atual.",
        },
        {
          n: "2",
          titulo: "Abra as comandas",
          texto:
            "Mesa, comanda, balcão ou delivery — tudo vira uma comanda. O garçom lança os itens pelo celular.",
        },
        {
          n: "3",
          titulo: "Cozinha e caixa",
          texto:
            "O pedido cai na tela da cozinha. No fim, fecha a conta com taxa de serviço e emite a NFC-e.",
        },
      ]}
      problema={{
        titulo: "A conta da mesa 7 saiu errada de novo",
        texto: (
          <>
            <p>
              Comanda de papel, pedido gritado pra cozinha, item que ninguém
              lançou e a divisão da conta feita na calculadora do celular. No
              fim da noite, o caixa não fecha e ninguém sabe onde furou.
            </p>
            <p>
              O ComandaPro leva o pedido do garçom direto pra cozinha e fecha a
              conta com taxa e divisão calculadas — com NFC-e emitida na hora.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "📋",
          titulo: "Uma comanda pra tudo",
          texto:
            "Mesa, balcão, delivery e iFood no mesmo lugar — o salão não precisa saber de onde veio o pedido.",
          itens: [
            "Comanda de mesa, balcão, delivery e iFood",
            "Cardápio digital touch por categoria",
            "Taxa de serviço e divisão de conta",
            "Pedido pelo celular ou pela maquininha do garçom",
          ],
        },
        {
          icone: "👨‍🍳",
          titulo: "A cozinha enxerga a fila",
          texto:
            "Tela de cozinha com o status de cada pedido: o que entrou, o que está saindo e o que está atrasado.",
          itens: [
            "Tela de cozinha (KDS) com status por pedido",
            "Impressão por estação de preparo",
            "Tempo de preparo por item",
            "Caixa com abertura, fechamento e formas de pagamento",
          ],
        },
      ]}
      prints={[
        {arquivo: "/prints/comandapro-0.jpg", legenda: "Salão com as comandas abertas"},
        {arquivo: "/prints/comandapro-2.jpg", legenda: "Cardápio por categoria, com preço e estação"},
      ]}
      praQuem={[
        {icone:"🍽️", titulo:"Restaurante e bar de salão", texto:"Onde a comanda de papel ainda decide a conta do cliente."},
        {icone:"🏐", titulo:"Arena e clube com bar", texto:"Consumo lançado na comanda de quem está jogando."},
        {icone:"🛵", titulo:"Quem faz delivery e iFood", texto:"Pedido de fora entrando na mesma cozinha, sem tela separada."},
      ]}
      naoServe={[
        "Você é loja de varejo, não food service — nesse caso o sistema é o PDV Pro",
        "Você quer marketplace de delivery próprio com app do cliente",
      ]}
      faq={[
        {
          p: "Preciso de maquininha específica?",
          r: "O garçom pode usar o celular dele. Se você já tem maquininha Android, o sistema roda nela também — a tela do PDA foi feita pensando nesse formato.",
        },
        {
          p: "Emite cupom fiscal?",
          r: "Emite NFC-e pela Focus NFe, com o seu certificado. O cupom sai na hora do fechamento da conta.",
        },
      ]}
      features={[
        "Comanda universal: mesa, balcão, delivery e iFood",
        "Cardápio digital touch, organizado por categoria",
        "Tela de cozinha (KDS) com o status de cada pedido",
        "Taxa de serviço e divisão de conta",
        "Caixa: abertura, fechamento e formas de pagamento",
        "NFC-e via Focus NFe (cupom fiscal eletrônico)",
        "Relatórios: faturamento, ticket médio, mais vendidos",
        "Fornecedores e usuários (garçom, caixa, cozinha)",
        "Roda no celular, no computador e na maquininha",
      ]}
      planos={[
        {
          nome: "ComandaPro",
          publico: "Restaurante, bar ou lanchonete",
          precoLabel: "R$ 99",
          features: [
            "Comandas, cardápio e tela de cozinha",
            "Caixa e formas de pagamento",
            "NFC-e (cupom fiscal)",
            "Relatórios e histórico de vendas",
            "Usuários ilimitados",
            "Delivery e iFood",
            "Suporte por WhatsApp",
          ],
          ctaLabel: "Começar teste grátis",
          ctaHref: "https://comandapro.luqsys.com.br/cadastro",
          destaque: true,
        },
      ]}
      ctaFinalTitulo="Seu restaurante no controle"
      ctaFinalTexto="Teste 3 dias grátis, sem cartão de crédito. Se gostar, são R$ 99/mês sem fidelidade."
      appUrl="https://comandapro.luqsys.com.br"
      demoUrl="https://demo.comandapro.luqsys.com.br/"
      assinarUrl="https://comandapro.luqsys.com.br/cadastro"
    />
  );
}
