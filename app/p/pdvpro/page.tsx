import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "PDV Pro — o sistema inteiro da sua loja",
  description:
    "Caixa, nota fiscal, estoque, compras, financeiro e comissão no mesmo sistema. A venda baixa o estoque, a nota do fornecedor vira conta a pagar e o contador recebe o pacote pronto. Demonstração aberta, sem cadastro.",
};

/* Landing independente do PDV Pro (17/08/2026), no molde do SiloPro.
   Diferente da /pdvpro — aquela é a página dele dentro do site da Luqsys.
   Esta é o site do produto, pra depois ganhar domínio próprio.

   Duas coisas que NÃO podem mudar aqui sem quebrar a verdade da oferta:

   1) Não existe teste grátis self-service. O PDV Pro roda UMA LOJA POR
      DEPLOY, com banco e certificado A1 próprios — não dá pra abrir sozinho
      num clique. A CTA principal é a demonstração aberta e as contratações
      seguem pro WhatsApp, exatamente como na página curta.

   2) A demonstração é o deploy de exemplo (demo.pdvpro.luqsys.com.br), com
      banco fictício. O endereço "de produção" é a loja de um cliente real —
      apontar pra lá seria mandar visitante pra dentro da operação de alguém.

   Sem prints: não existe public/prints/pdvpro-*.jpg ainda. Por isso
   prints={[]} e nenhum bloco com `print`. Quando as telas forem capturadas,
   é só pendurá-las nos blocos de caixa, fiscal e financeiro. */

const ZAP = (texto: string) =>
  "https://wa.me/5545991077788?text=" + encodeURIComponent(texto);

const DEMO_URL = "https://demo.pdvpro.luqsys.com.br/";

export default function PDVProLanding() {
  return (
    <LandingLayout
      slug="pdvpro"
      nome="PDV Pro"
      icone="🛒"
      whatsapp="5545991077788"
      promessa="O sistema inteiro da sua loja — não só o caixa"
      subpromessa={
        <>
          A venda no balcão baixa o estoque, a nota do fornecedor vira conta a
          pagar e o fim do mês fecha{" "}
          <strong className="text-white">sem planilha paralela</strong>.
        </>
      }
      ctaPrincipal={{ label: "Abrir a demonstração", href: DEMO_URL }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      notaCta="✦ Loja de exemplo, aberta agora · sem cadastro, sem cartão de crédito · dados fictícios"
      problema={{
        titulo:
          "Loja não quebra por falta de venda. Quebra por falta de controle.",
        paragrafos: [
          "O caixa está num programa que só faz caixa. O estoque está numa planilha que alguém atualiza quando lembra. A nota do fornecedor chegou por e-mail e ficou lá. A comissão do vendedor está num caderno atrás do balcão. Cada um desses lugares tem um número, e nenhum deles bate com o outro.",
          "Aí chega o dia 5 e o contador cobra os XMLs do mês passado — os que ninguém baixou. Chega o cliente perguntando se tem aquele produto e você precisa ir até a prateleira olhar, porque o sistema diz 7 e no chão tem 2. Chega o fim do mês e você sabe quanto entrou no caixa, mas não sabe quanto sobrou. Vender, vendeu. Ganhou? Ninguém sabe.",
          "O PDV Pro é um sistema só pra loja inteira. A venda do balcão baixa o estoque na hora. A nota de compra que você lança já move o estoque e já abre a conta a pagar, sem digitar duas vezes. O extrato do banco concilia com o que o sistema esperava receber. E no fim do mês o pacote do contador sai pronto, com o resumo por CFOP junto.",
        ],
      }}
      antesDepois={[
        {
          antes: "Estoque numa planilha que alguém atualiza quando lembra",
          depois: "Baixa na hora que o produto passa no caixa",
        },
        {
          antes: "Nota do fornecedor digitada duas vezes: no estoque e no financeiro",
          depois: "Uma entrada de compra move o estoque e abre a conta a pagar",
        },
        {
          antes: "Contador cobrando os XMLs que ninguém baixou",
          depois: "Pacote mensal pronto, com resumo por CFOP",
        },
        {
          antes: "Comissão do vendedor calculada no caderno no fim do mês",
          depois: "Comissão por vendedor saindo das vendas que ele fez",
        },
        {
          antes: "Extrato do banco conferido linha por linha na mão",
          depois: "Conciliação por OFX ou CSV, batendo com o que o sistema esperava",
        },
        {
          antes: "Cliente pergunta preço no WhatsApp e espera você responder",
          depois: "A Luquizinha responde pelo catálogo e monta o pedido pra você conferir",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "Você abre a demonstração",
          texto:
            "Loja de exemplo com produto, venda e relatório de verdade. Sem cadastro e sem cartão — mexa à vontade antes de falar com alguém.",
        },
        {
          n: "2",
          titulo: "A gente sobe o seu ambiente",
          texto:
            "O PDV Pro roda uma loja por instalação: o banco é só seu. A gente configura os seus dados fiscais e o seu certificado A1 junto com você.",
        },
        {
          n: "3",
          titulo: "Seus produtos entram",
          texto:
            "Traz o cadastro do sistema antigo em planilha e a gente importa. Já fizemos migração de sistema legado, inclusive lendo direto a base do anterior.",
        },
      ]}
      blocos={[
        {
          icone: "🛒",
          titulo: "Frente de caixa",
          texto:
            "O caixa é o único lugar do sistema que não pode travar nem pensar — tem fila esperando. Por isso ele é feito pra teclado, aceita mais de uma forma de pagamento na mesma venda e o fechamento é cego: o operador conta o dinheiro antes de ver o que o sistema esperava, e a diferença aparece sozinha.",
          itens: [
            "Crediário, dinheiro, cartão e Pix na mesma venda",
            "Caixa por usuário — cada vendedor abre e fecha o seu",
            "Sangria e suprimento com histórico",
            "Conferência de caixa cego no fechamento",
            "Trocas, devoluções e vale-compras",
            "TEF Pay&Go integrado — a maquininha conversa com o PDV",
          ],
          print: {
            arquivo: "/prints/pdvpro-0.jpg",
            legenda: "Painel da loja com venda do dia e contas",
          },
        },
        {
          icone: "🧾",
          titulo: "Fiscal sem susto",
          texto:
            "Nota fiscal é a parte que mais assusta quem troca de sistema, porque errado dá multa. Aqui a NFC-e sai no balcão, a NF-e sai pro atacado, e as notas que os seus fornecedores emitem contra o seu CNPJ são manifestadas sozinhas — você não perde prazo por não ter olhado o portal.",
          itens: [
            "NFC-e e NF-e pela Focus NFe, com o seu certificado A1",
            "Manifestação automática das NF-e recebidas",
            "Devolução a fornecedor com a chave da nota de compra referenciada",
            "CFOP e CST por produto e por operação",
            "Pacote mensal de XMLs pro contador, com resumo por CFOP",
            "Conhecimento de frete (CT-e) no mesmo pacote",
          ],
        },
        {
          icone: "📦",
          titulo: "Estoque e compras",
          texto:
            "Estoque só fica certo quando ninguém precisa lembrar de atualizar. A venda tira, a compra põe, o inventário corrige — e a mesma entrada de nota que moveu o estoque já deixou a conta a pagar aberta no financeiro. Digitação dobrada é onde o número começa a mentir.",
          itens: [
            "Compra atualiza estoque e gera contas a pagar",
            "Inventário com modo substituir ou somar por item",
            "Uso e consumo e mercadoria em condicional",
            "Importação de produtos em massa por CSV",
            "Etiquetas com código de barras (Argox e afins)",
            "Aviso de estoque baixo no painel",
          ],
          print: {
            arquivo: "/prints/pdvpro-1.jpg",
            legenda: "Produtos com custo, venda e estoque",
          },
        },
        {
          icone: "💰",
          titulo: "Financeiro de verdade",
          texto:
            "É a diferença entre saber quanto entrou no caixa e saber quanto sobrou. Contas a pagar e a receber com baixa parcial, o que se repete todo mês lançado sozinho, e a conciliação com o extrato do banco pra confirmar que o que devia cair, caiu.",
          itens: [
            "Contas a pagar e a receber com baixa parcial",
            "Lançamentos recorrentes (aluguel, luz, folha)",
            "Conciliação bancária por OFX e CSV",
            "Comissão por vendedor",
            "DRE e relatórios de venda por período",
            "Painel com vendas do dia, vencidos e estoque baixo",
          ],
          print: {
            arquivo: "/prints/pdvpro-3.jpg",
            legenda: "Contas a pagar, vencidos e conciliação",
          },
        },
        {
          icone: "🤖",
          titulo: "Vende no WhatsApp sozinho",
          texto:
            "Boa parte da venda de balcão hoje começa numa mensagem — e morre esperando resposta. A Luquizinha atende com o catálogo real da sua loja, tira dúvida de produto e monta o rascunho do pedido. Você confere e transforma em venda no PDV com um clique.",
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
            "A loja física não vive sozinha. O PDV Pro fica no centro e o resto pendura nele — o site e o Mercado Livre vendendo do mesmo estoque, sem alguém dando baixa em três lugares e esquecendo do terceiro.",
          itens: [
            "ShopPro — seu site de e-commerce com o mesmo estoque",
            "Mercado Livre — anúncios e pedidos no mesmo lugar",
            "ContabilidadePro e HoraPro pro resto da operação",
            "Multi-loja com painel consolidado no plano Empresarial",
          ],
        },
      ]}
      paraQuem={[
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
        "Você é restaurante ou bar — aí o sistema certo é o ComandaPro, feito pra comanda e mesa",
        "Você quer só emitir nota avulsa, sem estoque nem caixa: é sistema demais pra isso",
        "Você precisa de teste self-service hoje à noite — aqui tem demonstração aberta na hora, mas a liberação da sua loja é acompanhada",
      ]}
      planos={[
        {
          nome: "Essencial",
          preco: "R$ 149",
          publico: "Loja pequena começando",
          itens: [
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
          preco: "R$ 299",
          publico: "A loja completa do dia a dia",
          destaque: true,
          itens: [
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
        },
        {
          nome: "Empresarial",
          preco: "R$ 499",
          publico: "Multi-loja e atacado",
          itens: [
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
      notaPlanos="A contratação começa por uma conversa no WhatsApp: cada loja roda no próprio ambiente, com o próprio certificado, e isso a gente sobe junto com você."
      faq={[
        {
          p: "Quanto custa e tem taxa de implantação?",
          r: "R$ 149, R$ 299 ou R$ 499 por mês, conforme o plano — sem fidelidade e sem taxa separada de implantação: subir o seu ambiente, configurar o fiscal e importar o cadastro faz parte. O que muda entre os planos é o volume de NFC-e, o número de lojas e os recursos de financeiro e WhatsApp.",
        },
        {
          p: "Por que não tem teste grátis igual aos outros sistemas?",
          r: "Porque o PDV Pro não é multi-inquilino: cada loja roda no seu próprio ambiente, com o seu banco e o seu certificado digital — não dá pra abrir sozinho num clique. Pra ver o sistema por dentro tem a demonstração aberta, com uma loja de exemplo cheia de produto, venda e relatório. Já a liberação da sua loja é acompanhada: você não fica sozinho com um sistema fiscal na mão.",
        },
        {
          p: "E os meus produtos do sistema antigo?",
          r: "Vêm junto. Exporta em planilha e a gente importa. Já migramos loja que vinha de sistema desktop antigo, lendo direto a base do sistema anterior — então mesmo sem exportação decente costuma dar pra trazer o cadastro.",
        },
        {
          p: "Emite nota mesmo? Com o meu certificado?",
          r: "Sim — NFC-e no balcão e NF-e pro atacado, com o seu certificado A1. A manifestação das notas que os fornecedores te mandam é automática, e a devolução a fornecedor sai com a chave da nota de compra referenciada, do jeito que a SEFAZ espera.",
        },
        {
          p: "Preciso trocar minha maquininha ou comprar computador novo?",
          r: "Maquininha: o PDV Pro fala com a Pay&Go, que atende as principais adquirentes; se a sua não for compatível, dá pra seguir digitando o valor na maquininha como você já faz hoje. Computador: o sistema roda no navegador, então serve o que você já tem — o que precisa mesmo é internet estável e uma impressora de cupom.",
        },
        {
          p: "Se eu cancelar, perco meus dados?",
          r: "Não. Sem fidelidade: avisa e a gente encerra. Antes de desligar o ambiente você leva os seus dados — cadastro, vendas e financeiro exportados, e os XMLs fiscais do período, que por lei você precisa guardar de qualquer jeito.",
        },
        {
          p: "Quem dá suporte quando a nota trava numa sexta à noite?",
          r: "A gente, pelo WhatsApp. É o mesmo número que está nesta página — não tem central com protocolo. Nos planos Essencial o suporte é por e-mail; no Profissional e no Empresarial é WhatsApp, com prioridade no Empresarial.",
        },
      ]}
      prints={[
        {arquivo: "/prints/pdvpro-2.jpg", legenda: "Vendas do período, com forma de pagamento e nota"},
        {arquivo: "/prints/pdvpro-0.jpg", legenda: "Painel: venda do dia, contas vencidas e estoque baixo"},
      ]}
      fechamento={{
        titulo: "Veja rodando antes de decidir",
        texto:
          "Abra a demonstração e mexa à vontade: venda no caixa, estoque baixando, relatório fechando. Depois chame no WhatsApp — se não servir pra sua loja, a gente fala isso também.",
      }}
    />
  );
}
