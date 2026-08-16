import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "FrotaPro — sua frota inteira no controle",
  description:
    "IPVA, seguro, manutenção, abastecimento e multa de cada veículo, amarrados ao quilômetro do dia. Lembretes antes do vencimento e o custo real de cada carro da frota.",
};

/* Landing completa e independente do FrotaPro, no padrão do SiloPro
   (app/p/silopro/page.tsx). Sem menu da Luqsys e sem link pros irmãos: é o
   site do produto, pronto pra ganhar domínio próprio depois.

   Fatos (funcionalidades, planos, preços e links de assinatura) vêm da página
   curta em app/frotapro/page.tsx — inclusive os preços reajustados: Básico
   R$ 69, Pro R$ 129, Empresa R$ 199. Nada aqui é número inventado: não há
   bloco `numeros` porque não existe dado verdadeiro pra mostrar. */

export default function FrotaProLanding() {
  return (
    <LandingLayout
      slug="frotapro"
      nome="FrotaPro"
      icone="🚚"
      whatsapp="5545991077788"
      promessa="Sua frota inteira no controle"
      subpromessa={
        <>
          Cada gasto amarrado ao{" "}
          <strong className="text-white">quilômetro do dia</strong> — e o aviso
          do IPVA chegando antes do vencimento, não junto com a multa.
        </>
      }
      ctaPrincipal={{
        label: "Testar 3 dias grátis",
        href: "https://frotapro.luqsys.com.br/cadastro?trial=1",
      }}
      ctaSecundaria={{
        label: "Ver a demonstração",
        href: "https://frotapro.luqsys.com.br/demo",
      }}
      notaCta="✦ Sem cartão de crédito · sem fidelidade · cancele quando quiser"
      problema={{
        titulo: "Frota não afunda de uma vez. Afunda R$ 300 por vez.",
        paragrafos: [
          "O pneu foi trocado e ninguém sabe com quantos quilômetros. O IPVA venceu porque a data estava num papel na gaveta de alguém que saiu de férias. A revisão foi feita duas vezes no mesmo mês, porque não havia registro da primeira e o motorista achou melhor garantir.",
          "Nenhuma dessas coisas quebra uma empresa sozinha. O que quebra é a soma: trezentos reais aqui, uma multa ali, um veículo que come o dobro de combustível e ninguém percebe porque o gasto entrou como despesa geral, sem nome e sem placa. No fim do ano o custo da frota é um número grande que ninguém consegue explicar linha por linha.",
          "O FrotaPro guarda cada gasto amarrado ao quilômetro daquele momento e avisa antes do vencimento. Aí você para de descobrir o problema pelo boleto: descobre qual veículo custa caro enquanto ainda dá tempo de fazer alguma coisa a respeito.",
        ],
      }}
      antesDepois={[
        {
          antes: "Comprovante de abastecimento no bolso do motorista",
          depois: "Foto do comprovante, OCR lê o valor e o gasto entra na placa certa",
        },
        {
          antes: "Pneu trocado sem saber com quantos quilômetros",
          depois: "Cada lançamento carrega o KM do dia — o histórico responde sozinho",
        },
        {
          antes: "IPVA e seguro anotados numa planilha que ninguém abre",
          depois: "Lembrete antes de vencer, por data ou por quilometragem",
        },
        {
          antes: "Manutenção feita duas vezes por falta de registro",
          depois: "Histórico por veículo: dá pra ver o que já foi feito antes de autorizar",
        },
        {
          antes: "Custo da frota é um total só, sem placa e sem categoria",
          depois: "Custo por veículo, por período e por categoria de gasto",
        },
        {
          antes: "Cobrar a planilha da equipe todo mês",
          depois: "Cada motorista lança o dele, você só confere",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "Cadastra a frota",
          texto:
            "Cada veículo com placa, modelo, KM atual, IPVA, seguro e vencimentos. Foto pra identificar rápido na lista, sem decorar placa.",
        },
        {
          n: "2",
          titulo: "A equipe lança os gastos",
          texto:
            "Abastecimento, manutenção, multa — vinculados ao KM no momento. Comprovante entra por foto, com OCR. Cada usuário tem o login e a permissão dele.",
        },
        {
          n: "3",
          titulo: "Os lembretes e o painel fazem o resto",
          texto:
            "O sistema avisa antes de vencer IPVA, seguro e revisão. O painel mostra por categoria e por veículo pra onde o dinheiro está indo.",
        },
      ]}
      blocos={[
        {
          icone: "🚗",
          titulo: "A frota cadastrada de verdade",
          texto:
            "Antes de controlar gasto, é preciso saber o que existe no pátio. Cada veículo vira uma ficha com documento, vencimento e histórico — e o painel mostra a frota inteira numa tela só.",
          itens: [
            "Placa, modelo e quilometragem atual de cada veículo",
            "Foto do carro pra achar na lista sem decorar placa",
            "Categorias: dia a dia, coleção e projeto",
            "Painel do gestor com a frota toda",
            "Veículos ilimitados a partir do plano Pro",
          ],
          print: {
            arquivo: "/prints/frotapro-0.jpg",
            legenda: "Painel da frota, com cada veículo e a situação dele",
          },
        },
        {
          icone: "⛽",
          titulo: "Cada gasto no seu quilômetro",
          texto:
            "Abastecimento, pneu, revisão — tudo registrado com o KM daquele momento. É esse detalhe que transforma uma pilha de notas em custo por rodado, e é ele que quase nenhuma planilha guarda.",
          itens: [
            "Gasto vinculado ao KM no momento do lançamento",
            "OCR do comprovante por foto, sem digitar valor",
            "Abastecimento, manutenção e multa no mesmo lugar",
            "Histórico de manutenção por veículo",
            "Exportação dos lançamentos pra planilha",
          ],
        },
        {
          icone: "🔔",
          titulo: "O que vence não te pega",
          texto:
            "Vencimento não avisa sozinho — ou avisa pelo guarda na blitz, que é a forma cara. Aqui o sistema cutuca antes, por data ou por quilometragem, e guarda o documento junto do veículo.",
          itens: [
            "IPVA e seguro com vencimento automático",
            "Licenciamento e revisão avisando por data ou por KM",
            "Lembretes recorrentes ou por data marcada",
            "Aviso antes, não depois da multa",
            "Documentos guardados junto do veículo",
          ],
        },
        {
          icone: "📊",
          titulo: "Qual veículo está custando caro",
          texto:
            "O carro que parece barato às vezes é o mais caro do pátio — só que o custo dele está diluído em cinco notas de meses diferentes. O comparativo por veículo desfaz essa ilusão em um minuto.",
          itens: [
            "Custo por veículo e por período",
            "Comparativo entre os veículos da frota",
            "Custo real por quilômetro, porque cada gasto tem o KM",
            "Relatórios e dashboards no plano Pro",
            "Relatórios consolidados por CNPJ no plano Empresa",
          ],
          print: {
            arquivo: "/prints/frotapro-1.jpg",
            legenda: "Custo por veículo — quem come mais dinheiro aparece na hora",
          },
        },
        {
          icone: "💸",
          titulo: "Pra onde o dinheiro está indo",
          texto:
            "Combustível, manutenção, multa, documentação: separado por categoria, o gasto para de ser um total redondo e vira uma decisão. Dá pra ver o mês em que a manutenção passou o combustível — e perguntar por quê.",
          itens: [
            "Dashboard com gráficos por categoria de gasto",
            "Comparação entre períodos",
            "Separação entre dia a dia, coleção e projeto",
            "Assistente de IA pra perguntar sobre os gastos (plano Pro)",
            "Centros de custo no plano Empresa",
          ],
          print: {
            arquivo: "/prints/frotapro-2.jpg",
            legenda: "Gastos por categoria, no período que você escolher",
          },
        },
        {
          icone: "👥",
          titulo: "Motorista lança, gestor confere",
          texto:
            "O controle só sobrevive se quem está na rua conseguir alimentar em trinta segundos. Cada motorista registra o que gastou no veículo dele; você enxerga a frota inteira sem cobrar planilha de ninguém.",
          itens: [
            "Multi-usuário com login próprio",
            "Motorista vê só o que é dele",
            "Painel do gestor com a frota toda",
            "Página pública por loja, quando você revende veículo",
            "Multi-empresa (vários CNPJs) no plano Empresa",
            "API e integrações no plano Empresa",
          ],
        },
      ]}
      paraQuem={[
        {
          icone: "🚚",
          titulo: "Frota de PME",
          texto:
            "De 2 a 50 veículos, onde ninguém tem tempo — nem cargo — pra manter planilha de frota.",
        },
        {
          icone: "🏪",
          titulo: "Loja que revende veículo",
          texto:
            "Custo por carro do pátio e página pública por loja pra mostrar o estoque.",
        },
        {
          icone: "🚗",
          titulo: "Carro de coleção ou projeto",
          texto:
            "Categoria própria pra separar o que é hobby do que é trabalho, com o histórico de cada peça e cada KM.",
        },
      ]}
      naoServe={[
        "Você precisa de rastreamento por GPS em tempo real — o FrotaPro cuida do custo do veículo, não de onde ele está agora",
        "Sua operação é de caminhão com jornada, diário de bordo e CIOT: isso é logística, e não é o que ele faz",
        "Você quer que alguém pague o IPVA por você — ele avisa antes do vencimento, mas quem paga continua sendo você",
      ]}
      planos={[
        {
          nome: "Básico",
          preco: "R$ 69",
          publico: "Frota pequena (até 5 veículos)",
          itens: [
            "Até 5 veículos",
            "1 usuário",
            "IPVA + seguro + manutenção",
            "Lembretes automáticos",
            "Sem OCR de comprovante",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Básico",
          ctaHref: "https://www.asaas.com/c/a5ax24hq7f8iitdk",
        },
        {
          nome: "Pro",
          preco: "R$ 129",
          publico: "Frota empresarial",
          destaque: true,
          itens: [
            "Veículos ilimitados",
            "Usuários ilimitados",
            "OCR de comprovante",
            "Lembretes automáticos",
            "Relatórios e dashboards",
            "Assistente IA",
            "Suporte prioritário",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/q7naaqzljwdl3hxe",
        },
        {
          nome: "Empresa",
          preco: "R$ 199",
          publico: "Frota grande com várias filiais",
          itens: [
            "Tudo do Pro",
            "Multi-empresa (CNPJs)",
            "Centros de custo",
            "API + integrações",
            "Relatórios consolidados",
            "Onboarding dedicado",
          ],
          ctaLabel: "Assinar Empresa",
          ctaHref: "https://www.asaas.com/c/b0h36jbs6uwb6lsz",
        },
      ]}
      notaPlanos="O preço é por empresa, não por motorista: quem lança gasto no Pro é a equipe inteira, sem custo por cabeça."
      faq={[
        {
          p: "Serve pra 2 carros ou só pra frota grande?",
          r: "Serve pros dois. Tem gente usando com o carro da família e o da empresa só pra saber quanto cada um custa — e tem quem use com dezenas de veículos e motoristas. O plano Básico existe justamente pra quem tem até 5 veículos.",
        },
        {
          p: "O motorista precisa saber mexer em sistema?",
          r: "Ele fotografa o comprovante e pronto. O OCR lê o valor e ele confirma o quilômetro — leva menos tempo que mandar a foto no grupo do WhatsApp. E ele só enxerga o veículo dele, então não tem onde se perder.",
        },
        {
          p: "E se eu cancelar?",
          r: "Cancela e acabou: não tem fidelidade nem multa. Antes de sair, você exporta os lançamentos — o histórico da sua frota é seu, e a gente não segura dado de ninguém como refém.",
        },
        {
          p: "Ele mostra onde o veículo está agora?",
          r: "Não. Isso é rastreador, e é outro produto — inclusive de outro tipo de empresa. O FrotaPro cuida do custo, do vencimento e do histórico de cada veículo. Se você já tem rastreador, os dois convivem bem, cada um no seu papel.",
        },
        {
          p: "Qual a diferença do Básico pro Pro?",
          r: "O Básico é 1 usuário, até 5 veículos e sem OCR — você digita o gasto. O Pro libera veículos e usuários ilimitados, leitura do comprovante por foto, relatórios, dashboards e o assistente de IA. Se mais de uma pessoa vai lançar gasto, o Pro é o caminho.",
        },
        {
          p: "Tenho o histórico numa planilha. Começo do zero?",
          r: "Você começa cadastrando os veículos com a quilometragem atual, e daí pra frente tudo é registrado. O que já passou pode ser lançado à mão quando for importante — a manutenção grande do ano passado, por exemplo. Não precisa recuperar cinco anos de nota pra o sistema virar útil.",
        },
        {
          p: "Funciona no celular?",
          r: "Funciona. É um site: abre no navegador do computador e do celular, sem instalar nada e sem loja de aplicativo. O motorista na rua usa o celular, você usa onde estiver.",
        },
      ]}
      prints={[]}
      fechamento={{
        titulo: "Você sabe quanto cada veículo custa por KM rodado?",
        texto:
          "Testa 3 dias com a sua frota cadastrada de verdade. Se não fizer diferença no seu controle, a gente fala isso na sua cara.",
      }}
    />
  );
}
