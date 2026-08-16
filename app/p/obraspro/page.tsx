import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "ObrasPro — a obra dentro do orçamento, etapa por etapa",
  description:
    "Previsto × realizado por etapa, nota fiscal entrando por foto com OCR, investidores com percentual e relatório por obra. Pra construtora pequena e média que quer parar de furar orçamento.",
};

/* Landing independente do ObrasPro (padrão do /p/silopro, 17/08/2026).
   Fatos daqui saem de app/obraspro/page.tsx — preço, link de assinatura e
   funcionalidade não podem divergir da página curta. */

export default function ObrasProLanding() {
  return (
    <LandingLayout
      slug="obraspro"
      nome="ObrasPro"
      icone="🏗️"
      whatsapp="5545991077788"
      promessa="Descubra que a obra está estourando enquanto ainda dá pra corrigir"
      subpromessa={
        <>
          Previsto e realizado{" "}
          <strong className="text-white">etapa por etapa</strong>, nota entrando
          por foto e cada investidor vendo a parte dele — sem planilha parada e
          sem prestação de contas no WhatsApp.
        </>
      }
      ctaPrincipal={{
        label: "Testar 3 dias grátis",
        href: "https://obraspro.luqsys.com.br/cadastro?trial=1",
      }}
      ctaSecundaria={{
        label: "Ver a demonstração",
        href: "https://obraspro.luqsys.com.br/demo",
      }}
      notaCta="✦ Sem cartão de crédito · sem fidelidade · a demonstração já abre com uma obra de exemplo dentro"
      problema={{
        titulo: "A obra estourou o orçamento. Quando?",
        paragrafos: [
          "Quase sempre a resposta é: no fim, quando já não dá pra corrigir. Durante a obra você sente que está caro, mas sentir não é saber. O pedreiro pediu mais cimento, o eletricista cobrou por ponto em vez de por metro, o concreto veio num caminhão a mais — cada decisão dessas parece pequena sozinha. Só que ninguém soma etapa por etapa enquanto elas acontecem, e a conta só aparece inteira quando a chave já está pronta pra entregar.",
          "Enquanto isso, o comprovante do que saiu está espalhado: nota numa pasta do escritório, recibo de mão de obra no bolso, foto de cupom no celular de quem foi comprar. Quando alguém precisa fechar o mês ou o contador pede os documentos, se perde uma tarde separando papel — e o que não tem nota simplesmente não entra na conta, o que faz o custo da obra parecer menor do que é.",
          "E tem o investidor. O combinado com ele está numa conversa de WhatsApp de três meses atrás, o previsto de cada etapa está numa planilha que ninguém atualiza desde a fundação, e todo mês você monta um resumo à mão pra provar que está tudo certo. O ObrasPro compara previsto e realizado por etapa enquanto a obra anda, deixa a nota entrar pela foto e mostra pro sócio a parte dele — sem você virar o relatório ambulante da obra.",
        ],
      }}
      antesDepois={[
        {
          antes: "Descobrir o estouro na entrega da obra",
          depois: "Ver a etapa passando do orçado no dia em que ela passa",
        },
        {
          antes: "Planilha de previsto parada desde a fundação",
          depois: "Previsto × realizado atualizado a cada gasto lançado",
        },
        {
          antes: "Nota digitada à noite, quando dá tempo",
          depois: "Foto da nota vira lançamento com OCR, com o documento anexado",
        },
        {
          antes: "Três obras misturadas no mesmo caixa",
          depois: "Cada obra com o gasto, o saldo e o relatório dela",
        },
        {
          antes: "Resumo mensal montado à mão pro investidor",
          depois: "Relatório por obra, etapa e investidor, em PDF ou Excel",
        },
        {
          antes: "Contador pedindo documento que ninguém acha",
          depois: "Exportação pro contador, só as notas fiscais ou tudo",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "Cadastra a obra e as etapas",
          texto:
            "Cada obra com o orçamento previsto, as etapas (fundação, alvenaria, acabamento), os investidores e o percentual de cada um. É esse cadastro que transforma gasto solto em desvio visível.",
        },
        {
          n: "2",
          titulo: "Lança o gasto na etapa certa",
          texto:
            "Foto da nota vira lançamento por OCR; recibo e mão de obra entram no manual. Cada gasto vai pra etapa e pra categoria, e o previsto × realizado se mexe na hora.",
        },
        {
          n: "3",
          titulo: "Fecha e mostra",
          texto:
            "Relatório por obra, por etapa e por investidor, em PDF ou Excel. Pro sócio acompanhar sozinho, dá pra dar acesso somente-leitura em vez de mandar planilha.",
        },
      ]}
      blocos={[
        {
          icone: "🏗️",
          titulo: "A obra dividida em etapas, não num total só",
          texto:
            "Um número grande no fim não diz nada. O que diz é qual etapa comeu mais do que devia — porque é nela que ainda dá pra negociar, trocar material ou apertar o cronograma antes de a próxima começar.",
          itens: [
            "Várias obras ao mesmo tempo, cada uma com o caixa dela",
            "Orçamento previsto × realizado por etapa",
            "Categorias e subcategorias de gasto (material, mão de obra, elétrica, hidráulica)",
            "Alerta quando a etapa passa do orçado",
            "Evolução mês a mês do que já saiu",
            "Total da obra, o que está pago e o que ainda vai vencer",
          ],
          print: {
            arquivo: "/prints/obraspro-0.jpg",
            legenda:
              "Painel da obra: gasto por etapa, subcategorias que mais pesam e evolução mensal",
          },
        },
        {
          icone: "📸",
          titulo: "A nota entra pela foto",
          texto:
            "Lançar gasto é a tarefa que todo mundo adia — e obra que não tem lançamento em dia não tem controle nenhum. Fotografar a nota na loja leva cinco segundos, e o documento fica anexado pra quando alguém quiser conferir.",
          itens: [
            "OCR de nota fiscal pela foto, sem digitar item por item",
            "Anexo guardado junto do lançamento pra conferência depois",
            "Duplicata registrada mesmo quando a nota ainda não tem número",
            "Fornecedor, forma de pagamento e vencimento",
            "Lançamento manual pra recibo e mão de obra sem nota",
            "Importação de planilha, quando o gasto já está em Excel",
          ],
          print: {
            arquivo: "/prints/obraspro-1.jpg",
            legenda:
              "Gastos da obra com etapa, categoria, valor, quem pagou e status",
          },
        },
        {
          icone: "💸",
          titulo: "Quem pagou o quê",
          texto:
            "Em obra com sócio, metade da confusão não é sobre quanto custou — é sobre quem desembolsou. Cada lançamento fica com o pagador e com o status, então a conta entre vocês para de depender de memória.",
          itens: [
            "Cada gasto com quem pagou registrado",
            "Status pago × a pagar, com o que ainda vai vencer",
            "Filtro por etapa, categoria, subcategoria, fonte, status e data",
            "Busca por descrição, pra achar aquela compra específica",
            "Comprovantes anexados aos lançamentos",
          ],
        },
        {
          icone: "🤝",
          titulo: "Investidor no jogo limpo",
          texto:
            "Sócio que não enxerga a obra liga. Sócio que enxerga, não liga. Cada um com o percentual dele, o aporte que fez e o que já saiu — transparência que evita a conversa desconfortável antes de ela nascer.",
          itens: [
            "Investidores com percentual de participação",
            "Aporte de cada sócio e saldo acompanhados na própria obra",
            "Relatório por obra, por etapa e por investidor",
            "Acesso somente-leitura pro sócio acompanhar sozinho",
            "Exportação em PDF e Excel",
          ],
        },
        {
          icone: "📑",
          titulo: "Na hora de prestar contas",
          texto:
            "O fechamento de obra serve pra três públicos diferentes: você, o sócio e o contador. Cada um precisa de um recorte, e nenhum deles deveria custar uma tarde de garimpo em pasta.",
          itens: [
            "Exportação em PDF e Excel por obra e por período",
            "Pacote pro contador só com as notas fiscais, ou completo",
            "Comprovantes reunidos pra enviar de uma vez",
            "Impressão do relatório da obra",
            "Fechamento por etapa pra comparar com o próximo orçamento",
          ],
        },
        {
          icone: "👥",
          titulo: "Quem entra e o que cada um vê",
          texto:
            "Mestre de obra lançando gasto não precisa enxergar a margem, e o sócio não precisa poder editar nada. Papéis diferentes resolvem isso sem você criar planilha paralela pra cada pessoa.",
          itens: [
            "Papéis: admin, editor e quem só olha",
            "Usuários ilimitados com permissões no plano Pro",
            "Multi-empresa por CNPJ no plano Empresa",
            "API pra integrações no plano Empresa",
            "Relatório por investidor em PDF personalizado no plano Empresa",
          ],
        },
      ]}
      prints={[
        {
          arquivo: "/prints/obraspro-0.jpg",
          legenda: "Gasto por etapa e o que mais pesa na obra",
        },
        {
          arquivo: "/prints/obraspro-1.jpg",
          legenda: "Lançamento a lançamento, com etapa, pagador e status",
        },
      ]}
      paraQuem={[
        {
          icone: "🧱",
          titulo: "Construtor de poucas obras",
          texto:
            "Quem toca duas ou três ao mesmo tempo e acaba misturando os caixas sem perceber.",
        },
        {
          icone: "🤝",
          titulo: "Obra com investidor",
          texto:
            "Cada sócio vendo a parte dele, com percentual e aporte registrados, sem te ligar todo mês.",
        },
        {
          icone: "🔨",
          titulo: "Quem reforma pra vender",
          texto:
            "Saber a margem antes de fechar o negócio, com o custo real por etapa na mão.",
        },
      ]}
      naoServe={[
        "Você precisa de cronograma físico com Gantt e curva S — aqui o controle é financeiro por etapa, não de prazo",
        "Você quer projeto e quantitativo de material: o ObrasPro entra depois, quando o dinheiro começa a sair",
        "Você quer folha de pagamento e ponto da equipe: aqui a mão de obra entra como custo da etapa, não como RH",
      ]}
      planos={[
        {
          nome: "Básico",
          preco: "R$ 69",
          publico: "1-2 obras simultâneas",
          itens: [
            "Até 2 obras ativas",
            "OCR de notas (até 100/mês)",
            "1 usuário",
            "Etapas e investidores",
            "Relatórios básicos",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Básico",
          ctaHref: "https://www.asaas.com/c/9klwm6prnwg1bjk2",
        },
        {
          nome: "Pro",
          preco: "R$ 119",
          publico: "Construtora ativa",
          destaque: true,
          itens: [
            "Obras ilimitadas",
            "Etapas e investidores ilimitados",
            "OCR de notas ilimitado",
            "Usuários ilimitados com permissões",
            "Relatórios e exportação",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/gj85zr3wdfwp28vp",
        },
        {
          nome: "Empresa",
          preco: "R$ 249",
          publico: "Construtora com várias frentes",
          itens: [
            "Tudo do Pro",
            "Multi-empresa (CNPJs)",
            "API pra integrações",
            "Relatório por investidor (PDF personalizado)",
            "Onboarding dedicado",
            "Suporte prioritário",
          ],
          ctaLabel: "Assinar Empresa",
          ctaHref: "https://www.asaas.com/c/qf8m56k3w21dhmha",
        },
      ]}
      notaPlanos="O que separa o Básico do Pro é volume: duas obras ativas e 100 notas por mês dão conta de quem constrói devagar. Passou disso, o Pro sai mais barato que a hora perdida."
      faq={[
        {
          p: "Serve pra reforma ou só pra construção do zero?",
          r: "Serve pras duas. O que o sistema controla é etapa com orçamento — se a sua reforma tem etapas, ele organiza igual. Quem compra imóvel pra reformar e revender usa exatamente assim, pra saber a margem antes de fechar a venda.",
        },
        {
          p: "Meu investidor precisa de login?",
          r: "Só se você quiser. Dá pra dar acesso somente-leitura pra ele acompanhar sozinho, ou mandar o relatório em PDF e manter o sistema só com a sua equipe. Nos dois casos, o número que ele vê é o mesmo que está lançado.",
        },
        {
          p: "O OCR erra a leitura da nota?",
          r: "Às vezes erra, como qualquer leitura automática — por isso o sistema mostra o que ele leu antes de gravar, pra você corrigir valor, fornecedor ou etapa. E a foto da nota fica anexada ao lançamento, então a conferência depois é olhar o documento, não confiar no palpite.",
        },
        {
          p: "Comprei material sem nota, só com recibo. Dá pra lançar?",
          r: "Dá, no lançamento manual, com o recibo anexado. Obra tem muito gasto sem nota fiscal — se ele ficar de fora, o custo da obra fica mentiroso. Na hora de exportar pro contador, você escolhe mandar só o que tem nota fiscal ou tudo.",
        },
        {
          p: "Toco três obras ao mesmo tempo. Os caixas se misturam?",
          r: "Não. Cada obra tem o orçamento, as etapas, os gastos e os investidores dela, e você troca de obra num seletor no topo. Os relatórios saem por obra — e é justamente isso que mostra qual delas está segurando o dinheiro das outras.",
        },
        {
          p: "Meu contador consegue usar os dados?",
          r: "Sim. Dá pra exportar em Excel e PDF, e existe uma exportação pensada pro contador: uma versão só com as notas fiscais e outra completa, com todos os lançamentos e comprovantes.",
        },
        {
          p: "E se eu cancelar no meio da obra?",
          r: "Não tem fidelidade nem multa: você cancela e a assinatura para de renovar. Antes de encerrar, exporte o relatório da obra em PDF e Excel — esses arquivos ficam com você. Se a obra seguinte começar daqui a seis meses, é só reassinar.",
        },
      ]}
      fechamento={{
        titulo: "Pare de descobrir o estouro na entrega",
        texto:
          "Testa 3 dias com uma obra que já está andando. Se em três dias você não achar pelo menos uma etapa mais cara do que imaginava, não assina.",
      }}
    />
  );
}
