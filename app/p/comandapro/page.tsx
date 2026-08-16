import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "ComandaPro — do pedido na mesa ao cupom fiscal",
  description:
    "Comanda de mesa, balcão, delivery e iFood no mesmo lugar. O garçom lança pelo celular, o pedido cai na tela da cozinha e a conta fecha com taxa, divisão e NFC-e. Demonstração aberta.",
};

/* Landing independente do ComandaPro (17/08/2026), no molde do SiloPro.
   Diferente da /comandapro — aquela é a página dele dentro do site da
   Luqsys, com o menu da casa. Esta é o site do produto, pra depois ganhar
   domínio próprio.

   Dois cuidados que não podem se perder aqui:

   1) A demonstração é o deploy separado (demo.comandapro.luqsys.com.br). O
      endereço principal, comandapro.luqsys.com.br, é a produção de um
      cliente real — mandar visitante pra lá é jogar gente dentro do salão
      de alguém em pleno serviço.

   2) Preço e funcionalidades vêm da página curta: R$ 99/mês, plano único,
      teste de 3 dias sem cartão. Nada aqui pode inventar recurso que o
      sistema não tem.

   Só existe um print (public/prints/comandapro-0.jpg, o salão com as
   comandas abertas). Ele fica pendurado no bloco da comanda, que é
   exatamente o que a imagem mostra. `prints={[
        {arquivo: "/prints/comandapro-2.jpg", legenda: "Cardápio por categoria, com preço e estação"},
      ]}` porque a galeria "o
   sistema por dentro" precisaria de várias telas — quando houver KDS e
   caixa capturados, é só pendurar nos blocos correspondentes. */

const CADASTRO = "https://comandapro.luqsys.com.br/cadastro";
const DEMO_URL = "https://demo.comandapro.luqsys.com.br/";

export default function ComandaProLanding() {
  return (
    <LandingLayout
      slug="comandapro"
      nome="ComandaPro"
      icone="🍽️"
      whatsapp="5545991077788"
      promessa="Do pedido na mesa ao cupom fiscal"
      subpromessa={
        <>
          O garçom lança pelo celular, a cozinha vê na tela e a conta fecha{" "}
          <strong className="text-white">com a taxa e a divisão prontas</strong>{" "}
          — sem comanda de papel no meio do caminho.
        </>
      }
      ctaPrincipal={{ label: "Testar grátis 3 dias", href: CADASTRO }}
      ctaSecundaria={{ label: "Ver a demonstração", href: DEMO_URL }}
      notaCta="✦ Sem cartão de crédito · sem fidelidade · roda no celular, no computador e na maquininha"
      problema={{
        titulo: "A conta da mesa 7 saiu errada de novo",
        paragrafos: [
          "Comanda de papel é uma promessa: alguém escreveu, alguém vai conseguir ler, alguém vai lembrar de somar. No meio do movimento, o papel amassa no bolso do garçom, a caneta falha, o cliente pede mais uma rodada e ninguém anota. O item que não foi lançado não deixa rastro — sai da cozinha, chega na mesa e some da conta.",
          "Do outro lado, o pedido chega na cozinha gritado ou num papelzinho espetado. A cozinha não sabe o que entrou primeiro, o que já saiu e o que está parado há vinte minutos. Quando o cliente reclama da demora, ninguém consegue dizer onde o pedido travou — só que travou.",
          "E aí vem o fim: a mesa quer dividir por quatro, alguém abre a calculadora do celular, some a taxa de serviço na mão e erra. No fechamento do caixa a diferença aparece e não tem como investigar, porque não existe registro de nada. O ComandaPro fecha esse buraco: cada item lançado na hora, cada pedido com status na cozinha, a conta somada com taxa e divisão, e a NFC-e emitida no fechamento.",
        ],
      }}
      antesDepois={[
        {
          antes: "Comanda de papel que amassa, molha e some",
          depois: "Comanda no sistema, aberta e visível pra todo o salão",
        },
        {
          antes: "Pedido gritado pra cozinha ou espetado num prego",
          depois: "Cai na tela de cozinha com o status de cada item",
        },
        {
          antes: "Item que ninguém lançou e virou prejuízo",
          depois: "O garçom lança no celular na hora em que o cliente pede",
        },
        {
          antes: "Divisão da conta na calculadora do celular",
          depois: "Taxa de serviço e divisão calculadas no fechamento",
        },
        {
          antes: "Caixa que não fecha e ninguém sabe onde furou",
          depois: "Abertura, fechamento e forma de pagamento registrados",
        },
        {
          antes: "Delivery e iFood em tela separada, com outra cozinha",
          depois: "Pedido de fora entra como comanda, na mesma fila",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "Monte o cardápio",
          texto:
            "Categorias e produtos com preço — você cadastra na hora ou importa do sistema que usa hoje. É o único trabalho de largada.",
        },
        {
          n: "2",
          titulo: "Abra as comandas",
          texto:
            "Mesa, comanda avulsa, balcão ou delivery: tudo vira uma comanda. O garçom lança os itens pelo celular, andando pelo salão.",
        },
        {
          n: "3",
          titulo: "Cozinha e caixa",
          texto:
            "O pedido cai na tela da cozinha e anda de status até sair. No fim, a conta fecha com taxa e divisão, e a NFC-e é emitida.",
        },
      ]}
      blocos={[
        {
          icone: "📋",
          titulo: "Uma comanda pra tudo",
          texto:
            "Mesa, balcão, delivery e iFood viram a mesma coisa dentro do sistema. Isso importa porque o salão e a cozinha não deveriam precisar saber de onde veio o pedido pra saber o que fazer com ele.",
          itens: [
            "Comanda de mesa, balcão, delivery e iFood no mesmo lugar",
            "Cardápio digital touch, organizado por categoria — o garçom acha o item sem procurar",
            "Pedido lançado pelo celular do garçom, na hora em que o cliente pede",
            "Taxa de serviço e divisão de conta calculadas no fechamento",
            "Roda também na maquininha Android, sem tela separada",
          ],
          print: {
            arquivo: "/prints/comandapro-0.jpg",
            legenda: "Salão com as comandas abertas",
          },
        },
        {
          icone: "👨‍🍳",
          titulo: "A cozinha enxerga a fila",
          texto:
            "A tela de cozinha mostra o que entrou, o que está saindo e o que está atrasado. É o que transforma \"a cozinha está enrolada\" em \"o pedido da mesa 4 está parado há 18 minutos\" — a diferença entre reclamar e resolver.",
          itens: [
            "Tela de cozinha (KDS) com o status de cada pedido",
            "Impressão por estação de preparo: chapa, bar e sobremesa recebem só o que é delas",
            "Tempo de preparo por item, pra saber onde a fila trava",
            "Pedido de delivery e iFood entra na mesma fila da cozinha",
          ],
        },
        {
          icone: "💳",
          titulo: "O caixa que fecha",
          texto:
            "Abertura, fechamento e forma de pagamento ficam registrados. Quando falta dinheiro na gaveta, você tem onde procurar — e quase sempre a resposta está no registro, não na memória de quem estava lá.",
          itens: [
            "Abertura e fechamento de caixa com registro",
            "Formas de pagamento separadas: dinheiro, cartão e Pix",
            "Conta fechada com taxa de serviço aplicada",
            "Divisão da conta feita pelo sistema, não pela calculadora",
          ],
        },
        {
          icone: "🧾",
          titulo: "Cupom fiscal na hora do fechamento",
          texto:
            "A NFC-e sai pela Focus NFe, com o certificado digital da sua empresa. O cupom é emitido no fechamento da conta, junto com o pagamento — não é uma segunda tarefa pra fazer depois que o cliente já foi embora.",
          itens: [
            "NFC-e emitida via Focus NFe",
            "Usa o certificado digital da sua empresa",
            "Cupom sai no momento em que a conta é fechada",
            "Histórico de vendas guardado pra conferência",
          ],
        },
        {
          icone: "📊",
          titulo: "Números que dizem o que mudar",
          texto:
            "Faturamento, ticket médio e mais vendidos são os três números que decidem cardápio e escala. Sem eles, promoção vira palpite e prato que dá prejuízo continua no menu.",
          itens: [
            "Faturamento por período",
            "Ticket médio",
            "Ranking dos itens mais vendidos",
            "Histórico de vendas pra conferir qualquer noite",
          ],
        },
        {
          icone: "👥",
          titulo: "Cada um com o seu acesso",
          texto:
            "Garçom, caixa e cozinha veem o que precisam ver. Usuários são ilimitados no plano — contratar mais gente na temporada não deve custar mais software.",
          itens: [
            "Perfis de garçom, caixa e cozinha",
            "Usuários ilimitados, sem cobrança por pessoa",
            "Cadastro de fornecedores",
            "Mesmo sistema no celular, no computador e na maquininha",
          ],
        },
      ]}
      paraQuem={[
        {
          icone: "🍽️",
          titulo: "Restaurante e bar de salão",
          texto:
            "Onde a comanda de papel ainda decide a conta do cliente — e o item esquecido sai de graça.",
        },
        {
          icone: "🏐",
          titulo: "Arena e clube com bar",
          texto:
            "Consumo lançado na comanda de quem está jogando, e acertado quando o grupo sai da quadra.",
        },
        {
          icone: "🛵",
          titulo: "Quem faz delivery e iFood",
          texto:
            "Pedido de fora entrando na mesma cozinha e na mesma fila, sem tela separada pra vigiar.",
        },
      ]}
      naoServe={[
        "Você é loja de varejo, não food service — nesse caso o sistema é o PDV Pro, que tem nota fiscal de venda, estoque de mercadoria e compras",
        "Você quer um marketplace de delivery próprio, com app do cliente final: o ComandaPro cuida do que acontece dentro da casa",
        "Você precisa de um sistema só pra controlar estoque de insumos e ficha técnica de receita — isso não faz parte dele",
      ]}
      planos={[
        {
          nome: "ComandaPro",
          preco: "R$ 99",
          publico: "Restaurante, bar ou lanchonete",
          destaque: true,
          itens: [
            "Comandas, cardápio e tela de cozinha",
            "Caixa e formas de pagamento",
            "NFC-e (cupom fiscal)",
            "Relatórios e histórico de vendas",
            "Usuários ilimitados",
            "Delivery e iFood",
            "Suporte por WhatsApp",
          ],
          ctaLabel: "Começar teste grátis",
          ctaHref: CADASTRO,
        },
      ]}
      notaPlanos="Um preço só, com usuários ilimitados — contratar garçom pra temporada não deveria encarecer o software."
      faq={[
        {
          p: "Preciso de maquininha específica?",
          r: "Não. O garçom pode usar o celular dele mesmo — é um navegador, não tem app pra instalar em cada aparelho. Se você já tem maquininha Android, o sistema roda nela também: a tela do PDA foi feita pensando nesse formato de tela.",
        },
        {
          p: "Emite cupom fiscal?",
          r: "Emite NFC-e pela Focus NFe, usando o certificado digital da sua empresa. O cupom sai na hora do fechamento da conta, junto com o pagamento. Se você ainda não tem certificado A1, a gente te orienta a tirar antes de ligar a emissão.",
        },
        {
          p: "Tem demonstração?",
          r: "Tem, aberta e sem cadastro: demo.comandapro.luqsys.com.br. É um deploy separado, com dados de exemplo, pra você abrir comanda e lançar item sem medo de estragar nada.",
        },
        {
          p: "E se eu cancelar?",
          r: "Não tem fidelidade nem multa: você avisa e a cobrança para no mês seguinte. Antes de encerrar, a gente exporta o seu histórico de vendas e os cadastros pra você levar. O que é seu é seu.",
        },
        {
          p: "Como funciona o teste de 3 dias?",
          r: "Você cria a conta sem cartão de crédito e usa o sistema completo por 3 dias — mesma coisa que o cliente pagante usa. Se servir, assina; se não servir, a conta simplesmente expira e ninguém te cobra nada.",
        },
        {
          p: "Preciso instalar alguma coisa nos computadores?",
          r: "Não. Tudo roda no navegador — celular do garçom, computador do caixa, tablet da cozinha ou maquininha Android. O que você precisa é de internet no salão.",
        },
        {
          p: "Dá pra dividir a conta entre os clientes da mesa?",
          r: "Dá. O fechamento calcula a divisão e aplica a taxa de serviço, então a conta de cada um sai já somada — ninguém precisa abrir a calculadora do celular.",
        },
      ]}
      prints={[]}
      fechamento={{
        titulo: "Seu restaurante no controle",
        texto:
          "Testa 3 dias, sem cartão de crédito. Se gostar, são R$ 99 por mês, sem fidelidade — e se não servir pra sua casa, a gente fala isso na sua cara.",
      }}
    />
  );
}
