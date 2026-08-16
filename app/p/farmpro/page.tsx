import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "FarmPro — a fazenda inteira num sistema só",
  description:
    "Nota de insumo vira lançamento pela foto. Livro caixa somando o ano inteiro, LCDPR pronto pra entregar, folha do empregado rural, ponto e caderno de campo por talhão. Feito pro produtor rural brasileiro.",
};

/* Landing independente do FarmPro (/p/farmpro). Segue o modelo aprovado em
   /p/silopro: sem menu da Luqsys, sem link pros sistemas irmãos, pronta pra
   apontar um domínio próprio depois. Fatos (planos, preços, links de
   assinatura, funcionalidades) vêm de app/farmpro/page.tsx — nada inventado.
   Prints reais: /prints/farmpro-0.jpg e /prints/farmpro-1.jpg. */

export default function FarmProLanding() {
  return (
    <LandingLayout
      slug="farmpro"
      nome="FarmPro"
      icone="🌾"
      whatsapp="5545991077788"
      promessa="A fazenda inteira num sistema só"
      subpromessa={
        <>
          Você fotografa a nota do insumo e ela{" "}
          <strong className="text-white">vira lançamento sozinha</strong> — o
          livro caixa soma o ano inteiro e o LCDPR chega pronto em janeiro.
        </>
      }
      ctaPrincipal={{
        label: "Testar 3 dias grátis",
        href: "https://farmpro.luqsys.com.br/cadastro?trial=1",
      }}
      ctaSecundaria={{
        label: "Ver a demonstração",
        href: "https://farmpro.luqsys.com.br/demo",
      }}
      notaCta="✦ Sem cartão de crédito · sem fidelidade · com dados de exemplo pra você mexer à vontade"
      problema={{
        titulo: "O ano da fazenda não cabe numa caixa de sapato",
        paragrafos: [
          "A nota do adubo ficou no porta-luvas. A do óleo diesel amassou no bolso do gerente. O pagamento do frete saiu pelo PIX e a única prova é um comprovante perdido no meio do WhatsApp. A diária do turmeiro foi anotada num caderno que pegou chuva na carroceria. Nada disso é desleixo — é uma fazenda funcionando, com você em cima da máquina e não em cima de uma planilha.",
          "Aí chega dezembro. O contador pede o ano, e o ano não existe em lugar nenhum: existe em pedaços, espalhado entre o escritório, a caminhonete, o banco e a memória de três pessoas. Aí vira aquela semana de remontar doze meses de trás pra frente, adivinhando de qual talhão saiu cada saco de semente, e o LCDPR — que é entrega obrigatória, não é opcional — sai no susto, na véspera do prazo, com o que deu pra achar.",
          "O FarmPro inverte a ordem: em vez de remontar o ano no fim, ele guarda o ano enquanto ele acontece. Você fotografa a nota no pátio mesmo, a IA lê fornecedor, valor, itens e data, e o lançamento já nasce no livro caixa com centro de custo e anexo junto. Em janeiro não tem remontagem — tem conferência.",
        ],
      }}
      antesDepois={[
        {
          antes: "Nota de insumo no porta-luvas até alguém digitar",
          depois: "Foto no pátio e o lançamento já entra com valor, fornecedor e itens",
        },
        {
          antes: "LCDPR montado na véspera, com o que deu pra achar",
          depois: "O ano inteiro já lançado — o LCDPR é só conferir e entregar",
        },
        {
          antes: "Diária anotada em caderno que molhou na carroceria",
          depois: "Ponto do empregado batido por sede e folha rural no mesmo sistema",
        },
        {
          antes: "Comprovante de PIX enterrado na conversa do WhatsApp",
          depois: "Comprovante mandado pro sistema pelo WhatsApp e guardado no lançamento",
        },
        {
          antes: "Saber o custo do talhão só quando a safra já acabou",
          depois: "Centro de custo por talhão somando desde o primeiro gasto do plantio",
        },
        {
          antes: "Contador pedindo papel e você caçando de novo o mesmo documento",
          depois: "Ele entra na área do contador e tira o período que quiser em Excel",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "Monta a fazenda uma vez",
          texto:
            "Talhões, culturas, safras, máquinas, empregados e fornecedores. Se você já tem planilha, ela é aceita na importação — ninguém começa digitando tudo do zero.",
        },
        {
          n: "2",
          titulo: "Vai fotografando o dia",
          texto:
            "Nota de insumo, comprovante de PIX, boleto pago. Foto ou PDF, a IA lê e devolve o lançamento pronto com centro de custo. Você só confere e confirma.",
        },
        {
          n: "3",
          titulo: "Fecha o mês e fecha o ano",
          texto:
            "Livro caixa em dia, LCDPR pronto pra entregar, folha dos empregados rodada e o resultado de cada talhão à mão pra decidir a próxima safra.",
        },
      ]}
      blocos={[
        {
          icone: "📸",
          titulo: "A nota entra pela foto, não pela digitação",
          texto:
            "Esse é o ponto que muda tudo: se lançar dá trabalho, ninguém lança, e o ano se perde. Aqui lançar é tirar uma foto — e é por isso que o livro caixa continua em dia em maio, não só em janeiro.",
          itens: [
            "OCR de nota fiscal por foto, com IA lendo fornecedor, valor, itens e data",
            "Várias fotos de uma vez, ou o PDF do relatório de notas do fornecedor",
            "Comprovante mandado pelo WhatsApp entra sozinho no sistema",
            "Anexo guardado grudado no lançamento — nunca mais caçar o papel",
            "Centro de custo por talhão ou por atividade já na hora do lançamento",
            "Botão de desfazer: errou o lançamento em massa, volta atrás",
          ],
          print: {
            arquivo: "/prints/farmpro-0.jpg",
            legenda:
              "Painel com receitas, despesas e saldo — e a área onde você joga as fotos das notas",
          },
        },
        {
          icone: "📗",
          titulo: "Livro caixa e LCDPR na mesma linha",
          texto:
            "O que você lançou durante o ano é exatamente o que sai na entrega. Não tem segunda digitação em planilha, não tem conferir duas bases que discordam uma da outra.",
          itens: [
            "Livro caixa do produtor rural, receita e despesa lado a lado",
            "LCDPR montado a partir do que já foi lançado",
            "Separação entre o que tem nota fiscal e o que não tem",
            "Receita e despesa por safra e por cultura",
            "Categorias de verdade da fazenda: insumos, combustível, mão de obra, seguros, impostos",
          ],
        },
        {
          icone: "📊",
          titulo: "Relatório que serve pra decidir e pra entregar",
          texto:
            "Fazenda se administra olhando pra trás com honestidade. Filtra o período, o centro de custo, a categoria e a forma de pagamento — e o que sai dali tanto imprime pro contador quanto responde se aquele talhão pagou o que custou.",
          itens: [
            "Filtro por período, tipo, categoria, centro de custo e forma de pagamento",
            "Totais de receita, despesa e saldo já no topo do relatório",
            "Ranking das categorias que mais pesaram no período",
            "Exportação em Excel e impressão em PDF",
            "Relatórios por talhão, por safra e por cultura",
            "Área do contador pra ele puxar o que precisa sem te ligar",
          ],
          print: {
            arquivo: "/prints/farmpro-1.jpg",
            legenda:
              "Relatório filtrado por período e centro de custo, com exportação em Excel",
          },
        },
        {
          icone: "👷",
          titulo: "A gente da fazenda, com a regra da fazenda",
          texto:
            "Empregado rural não é empregado de escritório e a folha dele tem regra própria. Manter folha e ponto no mesmo lugar do resto evita a conta de mão de obra virar um chute no fim do mês.",
          itens: [
            "Folha de pagamento rural dos empregados registrados",
            "Ponto eletrônico batido por sede — a fazenda tem mais de um ponto de trabalho",
            "Integração com o HoraPro pra quem já usa o ponto de lá",
            "Folha entrando no livro caixa como despesa, mês a mês",
            "Multi-usuário com permissão por perfil: gerente vê o que é dele",
          ],
        },
        {
          icone: "🌱",
          titulo: "Caderno de campo por talhão",
          texto:
            "O talhão é a unidade que importa. Registrar aplicação, máquina e atividade no talhão é o que transforma custo solto em resposta: essa área pagou o que custou?",
          itens: [
            "Atividade registrada por talhão, na data em que aconteceu",
            "Controle de safra, cultura e máquinas",
            "Custo do talhão somando junto com os lançamentos financeiros",
            "Histórico de safras pra comparar ano com ano",
            "Estoque de insumo pra saber o que ainda tem no barracão",
          ],
        },
        {
          icone: "👨‍👩‍👦",
          titulo: "Mais de uma fazenda no nome da família",
          texto:
            "Quase nunca é uma fazenda só. Cada área precisa do seu resultado e do seu LCDPR separado, mas quem administra quer poder olhar o todo sem abrir três sistemas.",
          itens: [
            "Grupo familiar com cada fazenda mantendo seus próprios lançamentos",
            "Troca de fazenda sem sair do sistema e sem novo login",
            "Relatórios consolidados e comparativo entre safras no plano Empresa",
            "Painel no celular pra olhar de dentro da lavoura",
            "Integração com o BankPro pra conferir o extrato contra os lançamentos",
          ],
        },
      ]}
      prints={[]}
      paraQuem={[
        {
          icone: "🌾",
          titulo: "Produtor que entrega LCDPR",
          texto:
            "Quem já virou uma noite em janeiro remontando o ano sabe exatamente o tamanho desse problema.",
        },
        {
          icone: "👨‍👩‍👦",
          titulo: "Família com mais de uma fazenda",
          texto:
            "Cada área com o seu resultado e a sua entrega, e a soma quando você quiser olhar o conjunto.",
        },
        {
          icone: "🧑‍🌾",
          titulo: "Quem tem empregado registrado",
          texto:
            "Folha rural, ponto por sede e o custo de mão de obra caindo no livro caixa sem retrabalho.",
        },
      ]}
      naoServe={[
        "Você procura agricultura de precisão: mapa de produtividade, taxa variável e piloto automático não são daqui",
        "Você quer pesagem de balança e romaneio no silo — isso é o SiloPro, um sistema separado",
        "Sua fazenda não tem lançamento nenhum a controlar e você só queria previsão do tempo",
      ]}
      planos={[
        {
          nome: "Básico",
          preco: "R$ 69",
          publico: "Sítio ou fazenda pequena",
          itens: [
            "Caderno de campo",
            "OCR de notas (até 50/mês)",
            "Livro caixa",
            "Até 5 talhões",
            "1 usuário",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Básico",
          ctaHref: "https://www.asaas.com/c/zm541eavrb9qzi40",
        },
        {
          nome: "Pro",
          preco: "R$ 119",
          publico: "Produtor rural completo",
          destaque: true,
          itens: [
            "Talhões e culturas ilimitados",
            "OCR de notas ilimitado",
            "Livro caixa + LCDPR",
            "Folha rural completa",
            "Ponto eletrônico embutido",
            "Caderno de campo",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/8uvtsmwsprfokrd1",
        },
        {
          nome: "Empresa",
          preco: "R$ 249",
          publico: "Grupo com múltiplas fazendas",
          itens: [
            "Tudo do Pro",
            "Multi-fazenda (até 5)",
            "Relatórios consolidados",
            "Comparativo entre safras",
            "API + integrações",
            "Suporte prioritário",
          ],
          ctaLabel: "Assinar Empresa",
          ctaHref: "https://www.asaas.com/c/k2dtdzavrcj9ip8g",
        },
      ]}
      notaPlanos="O LCDPR e a folha rural estão no Pro em diante. Se você só quer o caderno de campo e o caixa, o Básico já resolve — dá pra subir de plano depois sem perder nada do que já foi lançado."
      faq={[
        {
          p: "Minha internet na fazenda é ruim. Funciona?",
          r: "Funciona com sinal de celular. O sistema é leve e o que pesa é a foto da nota — se o sinal estiver fraco na hora, ela sobe quando você chegar num ponto melhor ou na sede. O painel e os relatórios abrem bem no 4G.",
        },
        {
          p: "Meu contador aceita o LCDPR daqui?",
          r: "É o LCDPR no formato da Receita. Você pode entregar direto ou mandar pro contador conferir antes — e tem uma área específica pra ele, onde puxa o período que quiser em Excel. Na prática a maioria prefere receber o ano lançado o ano inteiro do que uma caixa de documentos em janeiro.",
        },
        {
          p: "Tenho mais de uma fazenda no nome da família. Dá pra separar?",
          r: "Dá. O grupo familiar mantém cada fazenda com seus lançamentos e seu LCDPR próprios, e você troca de uma pra outra sem sair do sistema. O plano Empresa acrescenta o relatório consolidado, pra olhar o conjunto quando quiser.",
        },
        {
          p: "E se o OCR ler a nota errado?",
          r: "Ele te mostra o que leu antes de gravar — fornecedor, valor, itens e data ficam na tela pra você conferir e corrigir. Nada entra no livro caixa sem passar pelo seu olho, e se um lote de lançamentos saiu torto existe o botão de desfazer.",
        },
        {
          p: "Já estou no meio do ano. Perco o que passou?",
          r: "Não. Você lança o retroativo — inclusive jogando de uma vez o PDF do relatório de notas que o fornecedor te manda — e a importação por planilha aceita o que você já controlava por conta própria. Quem entra em julho costuma ter o ano fechado sem susto.",
        },
        {
          p: "Preciso ter empregado registrado pra usar?",
          r: "Não. Folha e ponto são partes do sistema, não obrigação: se você não tem empregado, simplesmente não usa e o resto funciona igual. Quem tem é que ganha mais, porque a folha cai no livro caixa sozinha.",
        },
        {
          p: "E se eu cancelar?",
          r: "Não tem fidelidade nem multa: você cancela e a cobrança para no mês seguinte. Antes de sair, exporta em Excel tudo o que lançou e os relatórios em PDF — os dados são seus e saem com você. Se voltar depois, a fazenda ainda está lá.",
        },
      ]}
      fechamento={{
        titulo: "Janeiro chega todo ano. Esse pode ser diferente",
        texto:
          "Testa 3 dias, sem cartão. Fotografa duas notas que estão aí no porta-luvas e veja o livro caixa se montar sozinho — se não servir pra sua fazenda, a gente te diz isso na hora.",
      }}
    />
  );
}
