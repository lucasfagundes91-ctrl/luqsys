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
      assinarUrl="https://comandapro.luqsys.com.br/cadastro"
    />
  );
}
