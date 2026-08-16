import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "PDV Pro — o sistema inteiro da sua loja",
  description:
    "Frente de caixa, NFC-e, estoque, compras, financeiro com conciliação bancária, etiquetas, comissão e atendimento no WhatsApp por IA. Um sistema só, com implantação assistida.",
};

/* Esta página foi o piloto do padrão "cada sistema com a sua cara" (16/08) e
   nasceu fora do ProductLayout, escrita à mão. Em menos de um dia isso cobrou
   o preço previsto: as seções novas (galeria de telas, "Feito pra quem",
   "Não é pra você se") entraram no layout compartilhado e o PDV Pro — logo o
   sistema mais completo da casa — ficou sem elas. O Lucas notou olhando as
   páginas lado a lado. Então ela volta pro layout: mesma cor, mesmo conteúdo,
   e agora acompanha toda melhoria que os outros 20 receberem.

   O trial continua sendo assistido: o PDV Pro roda UMA LOJA POR DEPLOY, então
   /cadastro?trial=1 não tem formulário e as CTAs de contratação seguem indo
   pro WhatsApp, em vez do "Testar 3 dias" self-service dos outros.

   A demo, essa sim, deixou de ser agendamento: ganhou deploy próprio com banco
   próprio em demo.pdvpro.luqsys.com.br — loja fictícia, caixa do dia aberto,
   estoque e relatórios com número. Era o único sistema da casa sem nada pra
   mostrar, logo o mais caro. Por isso `semDemo` saiu e entrou `demoUrl`: sem
   apontar pro endereço novo, o layout montaria `appUrl + /demo` e mandaria o
   visitante pra produção de um cliente real. */

const ZAP = (texto: string) =>
  "https://wa.me/5545991077788?text=" + encodeURIComponent(texto);

/* Deploy separado, banco separado: loja fictícia que qualquer um pode abrir e
   mexer. NÃO é o endereço principal — aquele é a produção de um cliente. */
const DEMO_URL = "https://demo.pdvpro.luqsys.com.br/";

export default function PDVProPage() {
  return (
    <ProductLayout
      tema="pdvpro"
      icone="🛒"
      nome="PDV Pro"
      tagline="O sistema inteiro da sua loja — não só o caixa"
      descricao={
        <>
          Frente de caixa, nota fiscal, estoque, compras, financeiro e comissão
          no mesmo lugar. Quem vende no balcão, quem confere a nota do
          fornecedor e quem fecha o mês olham{" "}
          <strong className="text-white">o mesmo dado</strong>.
        </>
      }
      ctaPrimaria={{ label: "Abrir a demonstração", href: DEMO_URL }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      rodapeHero="✦ Loja de exemplo, aberta agora · sem cadastro, sem cartão de crédito · dados fictícios"
      demoUrl={DEMO_URL}
      problema={{
        titulo: "Loja não quebra por falta de venda. Quebra por falta de controle.",
        texto: (
          <>
            <p>
              O caixa num programa, o estoque numa planilha, a nota do
              fornecedor num e-mail e a comissão num caderno. No fim do mês
              ninguém sabe o que sobrou — e o contador cobra os XMLs que
              ninguém guardou.
            </p>
            <p>
              O PDV Pro junta isso num sistema só. A venda no balcão baixa o
              estoque, a nota do fornecedor vira conta a pagar, e o pacote do
              contador sai pronto no fim do mês —{" "}
              <strong className="text-white">
                com o resumo por CFOP junto
              </strong>
              .
            </p>
          </>
        ),
      }}
      passosTitulo="Como começa"
      passos={[
        {
          n: "1",
          titulo: "A gente conversa",
          texto:
            "15 a 20 minutos no WhatsApp ou numa chamada, com o sistema rodando na tela. Você vê a venda sair, a nota emitir e o relatório fechar — não é vídeo gravado.",
        },
        {
          n: "2",
          titulo: "Seu ambiente sobe",
          texto:
            "O PDV Pro roda uma loja por instalação — o seu banco é só seu. A gente sobe o ambiente com os seus dados fiscais e o seu certificado A1.",
        },
        {
          n: "3",
          titulo: "Seus produtos entram",
          texto:
            "Traz o cadastro do sistema antigo em planilha e a gente importa. Já fizemos migração de sistema legado, inclusive de base Firebird.",
        },
      ]}
      featuresTitulo="O que tem dentro"
      blocos={[
        {
          icone: "🛒",
          titulo: "Frente de caixa",
          texto:
            "O caixa é onde o sistema não pode travar nem pensar. Busca rápida, troco calculado, várias formas de pagamento na mesma venda.",
          itens: [
            "Crediário, dinheiro, cartão e Pix na mesma venda",
            "Caixa por usuário — cada vendedor abre e fecha o seu",
            "Sangria e suprimento com histórico",
            "Conferência de caixa cego no fechamento",
            "Trocas, devoluções e vale-compras",
            "TEF Pay&Go integrado — a maquininha conversa com o PDV",
          ],
        },
        {
          icone: "🧾",
          titulo: "Fiscal sem susto",
          texto:
            "NFC-e no balcão, NF-e pro atacado, e as notas que chegam de fornecedor manifestadas sozinhas. O contador recebe o pacote pronto.",
          itens: [
            "NFC-e e NF-e pela Focus NFe",
            "Manifestação automática das NF-e recebidas",
            "Devolução a fornecedor com a chave da nota de compra",
            "CFOP e CST por produto e por operação",
            "Pacote mensal de XMLs pro contador, com resumo por CFOP",
            "Conhecimento de frete (CT-e) no mesmo pacote",
          ],
        },
        {
          icone: "📦",
          titulo: "Estoque e compras",
          texto:
            "A entrada da nota do fornecedor já move o estoque e já vira conta a pagar. Ninguém digita a mesma coisa duas vezes.",
          itens: [
            "Compra atualiza estoque e gera contas a pagar",
            "Inventário com modo substituir ou somar por item",
            "Uso e consumo e mercadoria em condicional",
            "Importação de produtos em massa por CSV",
            "Etiquetas com código de barras (Argox e afins)",
            "Aviso de estoque baixo no painel",
          ],
        },
        {
          icone: "💰",
          titulo: "Financeiro de verdade",
          texto:
            "Contas a pagar e a receber, recorrentes e conciliação com o extrato do banco — pra fechar o mês sem planilha paralela.",
          itens: [
            "Contas a pagar e a receber com baixa parcial",
            "Lançamentos recorrentes (aluguel, luz, folha)",
            "Conciliação bancária por OFX e CSV",
            "Comissão por vendedor",
            "DRE e relatórios de venda por período",
            "Painel com vendas do dia, vencidos e estoque baixo",
          ],
        },
        {
          icone: "🤖",
          titulo: "Vende no WhatsApp sozinho",
          texto:
            "A Luquizinha atende o cliente no WhatsApp, responde sobre os produtos do seu catálogo e monta o pedido. Você só confirma.",
          itens: [
            "Atende com o catálogo real da sua loja",
            "Monta o rascunho do pedido pra você conferir",
            "Vira venda no PDV com um clique",
            "Catálogo em Excel e por WhatsApp pra divulgar",
          ],
        },
        {
          icone: "🔗",
          titulo: "Conectado no resto",
          texto:
            "A loja física não vive sozinha. O PDV Pro é o centro e o resto pendura nele sem digitação dobrada.",
          itens: [
            "ShopPro — seu site de e-commerce com o mesmo estoque",
            "Mercado Livre — anúncios e pedidos no mesmo lugar",
            "ContabilidadePro e HoraPro pro resto da operação",
            "Multi-loja com painel consolidado no plano Empresarial",
          ],
        },
      ]}
      prints={[
        {arquivo: "/prints/pdvpro-0.jpg", legenda: "Painel da loja: venda do dia, contas e estoque baixo"},
        {arquivo: "/prints/pdvpro-1.jpg", legenda: "Produtos com custo, venda e estoque"},
        {arquivo: "/prints/pdvpro-2.jpg", legenda: "Vendas com forma de pagamento e nota"},
        {arquivo: "/prints/pdvpro-3.jpg", legenda: "Financeiro com contas a pagar e vencidos"},
      ]}
      praQuem={[
        {
          icone: "🏪",
          titulo: "Loja de balcão que emite nota",
          texto:
            "Quem já tem NFC-e no dia a dia e cansou de sistema que só faz o caixa.",
        },
        {
          icone: "📦",
          titulo: "Quem compra de fornecedor",
          texto:
            "A nota que chega vira estoque e conta a pagar sem ninguém redigitar.",
        },
        {
          icone: "🏬",
          titulo: "Quem tem mais de uma loja",
          texto: "Painel consolidado sem virar dois sistemas separados.",
        },
      ]}
      naoServe={[
        "Você é restaurante ou bar — nesse caso o sistema certo é o ComandaPro",
        "Você quer só emitir nota avulsa, sem estoque nem caixa: é sistema demais pra isso",
        "Você precisa de teste self-service hoje à noite — aqui a liberação é acompanhada",
      ]}
      planos={[
        {
          nome: "Essencial",
          publico: "Loja pequena começando",
          precoLabel: "R$ 149",
          features: [
            "1 loja · até 500 NFC-e/mês",
            "PDV + NFC-e/NF-e",
            "Estoque e inventário",
            "Contas a pagar e a receber",
            "Cadastros e importação por CSV",
            "Etiquetas com código de barras",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Essencial",
          ctaHref: ZAP("Quero assinar o PDV Pro Essencial (R$ 149/mês)"),
        },
        {
          nome: "Profissional",
          publico: "A loja completa do dia a dia",
          precoLabel: "R$ 299",
          features: [
            "1 loja · 2.000 NFC-e/mês",
            "Tudo do Essencial",
            "Manifestação de NF-e recebida",
            "Conciliação bancária (OFX/CSV)",
            "Lançamentos recorrentes",
            "Luquizinha — WhatsApp com IA",
            "Suporte no WhatsApp em horário comercial",
          ],
          ctaLabel: "Assinar Profissional",
          ctaHref: ZAP("Quero assinar o PDV Pro Profissional (R$ 299/mês)"),
          destaque: true,
        },
        {
          nome: "Empresarial",
          publico: "Multi-loja e atacado",
          precoLabel: "R$ 499",
          features: [
            "Até 3 lojas",
            "NFC-e ilimitada, sem excedente",
            "Tudo do Profissional",
            "Painel consolidado das lojas",
            "Suporte prioritário",
            "Implantação dedicada",
          ],
          ctaLabel: "Assinar Empresarial",
          ctaHref: ZAP("Quero assinar o PDV Pro Empresarial (R$ 499/mês)"),
        },
      ]}
      faq={[
        {
          p: "Preciso trocar minha maquininha?",
          r: "Não. O PDV Pro fala com a Pay&Go, que atende as principais adquirentes. Se a sua não for compatível, dá pra seguir digitando o valor na maquininha como você já faz hoje.",
        },
        {
          p: "E os meus produtos do sistema antigo?",
          r: "Vêm junto. Exporta em planilha e a gente importa. Já migramos loja que vinha de sistema desktop antigo, lendo direto a base do sistema anterior.",
        },
        {
          p: "Emite nota mesmo? Com o meu certificado?",
          r: "Sim — NFC-e no balcão e NF-e pro atacado, com o seu certificado A1. A manifestação das notas que os fornecedores te mandam é automática.",
        },
        {
          p: "Por que não tem teste grátis igual aos outros sistemas?",
          r: "Porque o PDV Pro não é multi-inquilino: cada loja roda no seu próprio ambiente, com o seu banco e o seu certificado — não dá pra abrir sozinho num clique. Pra ver o sistema por dentro tem a demonstração aberta, com uma loja de exemplo cheia de produto, venda e relatório. Já a liberação da sua loja é acompanhada: você não fica sozinho com um sistema fiscal na mão.",
        },
      ]}
      ctaFinalTitulo="Veja rodando antes de decidir"
      ctaFinalTexto="Abra a demonstração e mexa à vontade: venda no caixa, estoque baixando, relatório fechando. Depois chame no WhatsApp — se não servir pra sua loja, a gente fala isso também."
    />
  );
}
