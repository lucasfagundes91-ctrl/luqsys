import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "AluguelPro — o aluguel cobra, repassa e presta contas sozinho",
  description:
    "Contratos com reajuste na data, cobrança recorrente por boleto e Pix, baixa automática, repasse ao proprietário com a sua taxa e demonstrativo em PDF. Pra pequena administradora e pra quem tem vários imóveis.",
};

/* Landing independente do AluguelPro (padrão do /p/silopro, 17/08/2026).
   Fatos daqui saem de app/aluguelpro/page.tsx — preço, link de assinatura e
   funcionalidade não podem divergir da página curta. */

export default function AluguelProLanding() {
  return (
    <LandingLayout
      slug="aluguelpro"
      nome="AluguelPro"
      icone="🏠"
      whatsapp="5545991077788"
      promessa="O aluguel cobra, repassa e presta contas sozinho"
      subpromessa={
        <>
          Boleto e Pix saem na data, a baixa entra quando o inquilino paga, o
          repasse já sai com a sua taxa descontada — e o{" "}
          <strong className="text-white">reajuste anual acontece</strong> sem
          depender da sua memória.
        </>
      }
      ctaPrincipal={{
        label: "Testar 3 dias grátis",
        href: "https://aluguelpro.luqsys.com.br/cadastro?trial=1",
      }}
      ctaSecundaria={{
        label: "Ver a demonstração",
        href: "https://aluguelpro.luqsys.com.br/demo",
      }}
      notaCta="✦ Sem cartão de crédito · sem fidelidade · cancele quando quiser"
      problema={{
        titulo: "Todo dia 5, a mesma maratona",
        paragrafos: [
          "Gerar o boleto de cada inquilino, um por um. Abrir o extrato e conferir quem pagou, quem pagou errado e quem não pagou. Cobrar os que faltaram, sabendo que metade vai dizer que pagou. Multiplique por quinze imóveis e o começo do mês some inteiro nisso — não é o trabalho de administrar imóvel, é o trabalho de conferir dinheiro.",
          "Depois vem a segunda metade: calcular a sua taxa em cima do que entrou, transferir o líquido pro proprietário e montar o demonstrativo daquele mês — o que entrou, o que foi descontado, o que sobrou. Se demorar dois dias, o telefone toca. E o demonstrativo que você monta às pressas na planilha é justamente o documento que o proprietário guarda pra usar no imposto de renda.",
          "E tem o reajuste, que é onde o dinheiro escorre de verdade. O contrato aniversaria em março, você lembra em agosto: são cinco meses cobrando o valor velho que ninguém devolve. O AluguelPro guarda a data-base e o índice dentro do contrato, aplica na hora certa, cobra, dá baixa, calcula o repasse e gera o demonstrativo — o ciclo inteiro, todo mês, sem alguém tocando nele.",
        ],
      }}
      antesDepois={[
        {
          antes: "Gerar boleto de cada inquilino, um por um",
          depois: "Cobrança recorrente por boleto e Pix, gerada e enviada sozinha",
        },
        {
          antes: "Conferir extrato pra saber quem pagou",
          depois: "Baixa automática no pagamento e a lista de quem falta na tela",
        },
        {
          antes: "Calcular sua taxa na calculadora e transferir na mão",
          depois: "Repasse já com a taxa de administração descontada",
        },
        {
          antes: "Demonstrativo montado na planilha no fim do mês",
          depois: "Demonstrativo em PDF, pronto pra mandar pro proprietário",
        },
        {
          antes: "Reajuste lembrado meses depois da data-base",
          depois: "IGP-M ou IPCA aplicados na data que está no contrato",
        },
        {
          antes: "Contrato numa pasta, valor certo só na sua cabeça",
          depois: "Contrato, valor, índice e histórico de alteração num lugar só",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "Cadastra imóveis e contratos",
          texto:
            "Imóvel, proprietário, inquilino e o contrato: valor, dia do vencimento, índice de reajuste, data-base e a sua taxa de administração. É o cadastro que faz todo o resto acontecer sozinho.",
        },
        {
          n: "2",
          titulo: "A cobrança roda",
          texto:
            "Boleto e Pix recorrentes pro inquilino, lembrete antes do vencimento e baixa automática quando o pagamento cai. Quem atrasou continua sendo cobrado sem você lembrar.",
        },
        {
          n: "3",
          titulo: "O repasse sai e o demonstrativo vai",
          texto:
            "Recebido o aluguel, o sistema desconta a sua taxa, calcula o repasse e gera o demonstrativo em PDF pro proprietário. Na data-base, o reajuste entra sozinho.",
        },
      ]}
      blocos={[
        {
          icone: "📄",
          titulo: "O contrato se lembra sozinho",
          texto:
            "A data-base e o índice moram dentro do contrato, não na sua agenda. É isso que impede o erro mais caro da administração de imóveis: seguir cobrando o valor do ano passado porque ninguém lembrou de reajustar.",
          itens: [
            "Contratos com vencimento, valor e data-base de reajuste",
            "Reajuste por IGP-M ou IPCA aplicado na data",
            "Modelos de contrato prontos pra gerar",
            "Histórico de cada alteração, com o valor de antes e o de depois",
            "Contratos ativos e encerrados na mesma tela, com o período de cada um",
          ],
          print: {
            arquivo: "/prints/aluguelpro-1.jpg",
            legenda: "Contratos ativos, com período, valor e status de cada locação",
          },
        },
        {
          icone: "💳",
          titulo: "Cobrança que roda sem você",
          texto:
            "O inquilino recebe a cobrança na data, todo mês, sem depender de alguém sentar pra gerar. E quando o dinheiro cai, o sistema dá a baixa — porque conferir pagamento na mão é o que mais consome tempo e o que mais gera briga depois.",
          itens: [
            "Cobrança recorrente por boleto e Pix",
            "Lembrete antes do vencimento",
            "Baixa automática quando o inquilino paga",
            "Quem está em atraso continua sendo cobrado",
            "Antecipação com desconto pra quem paga adiantado",
            "Histórico financeiro imóvel por imóvel",
          ],
          print: {
            arquivo: "/prints/aluguelpro-3.jpg",
            legenda:
              "Cobranças do mês na mesma tela: pago, a vencer e atrasado com multa e juros já calculados",
          },
        },
        {
          icone: "🤝",
          titulo: "O proprietário fica sabendo antes de perguntar",
          texto:
            "O repasse sai calculado e o demonstrativo vai junto: o que o inquilino pagou, o que foi descontado, o que sobrou. A ligação do dia 10 deixa de existir — e o proprietário passa a ter um documento pra guardar, não um print de conversa.",
          itens: [
            "Repasse ao proprietário com a taxa de administração já descontada",
            "Taxa configurável por imóvel — nos seus, ela é zero",
            "Demonstrativo em PDF pra mandar por WhatsApp ou e-mail",
            "Multi-proprietário e multi-imóvel na mesma carteira",
            "Prestação de contas com o histórico do que já foi repassado",
          ],
          print: {
            arquivo: "/prints/aluguelpro-4.jpg",
            legenda:
              "Repasse mês a mês: bruto, comissão descontada, líquido do proprietário e o que ainda está pendente",
          },
        },
        {
          icone: "🔍",
          titulo: "Vistoria com foto, laudo em PDF",
          texto:
            "A discussão da saída é sempre sobre o estado da entrada. Vistoria com foto por cômodo resolve isso antes de virar desconto de caução — e você pode importar as fotos deixando a IA identificar cômodo, item e condição, em vez de descrever parede por parede.",
          itens: [
            "Vistoria por cômodo, com foto e condição de cada item",
            "Importação de fotos com IA, que sugere cômodo, item e condição pra você revisar",
            "Laudo em PDF nos estilos tabela ou descritivo",
            "Orçamentos e recibos anexados à vistoria",
            "Apólices de seguro guardadas junto do imóvel",
          ],
        },
        {
          icone: "🪧",
          titulo: "Imóvel vago também dá trabalho",
          texto:
            "Mês vago é prejuízo dos dois lados. O sistema monta a página pública do imóvel com as fotos e o custo mensal somado, e o interessado chega direto no seu WhatsApp — sem você montar arte nem repetir o mesmo texto em cada grupo.",
          itens: [
            "Anúncio público com página própria pra cada imóvel",
            "Texto do anúncio gerado por IA a partir das fotos e dos dados",
            "Custo mensal somado: aluguel, IPTU, lixo e condomínio",
            "Contagem de visitas do anúncio",
            "Pipeline de propostas e cadastro de compradores",
          ],
          print: {
            arquivo: "/prints/aluguelpro-2.jpg",
            legenda:
              "O painel conta a vacância: 7 alugados, 1 vago — e quem vence nos próximos 7 dias",
          },
        },
        {
          icone: "🏢",
          titulo: "Quando a carteira cresce",
          texto:
            "Administradora com mais de uma frente precisa que cada um veja o que é dele, sem você virar o intermediário de toda informação. Isso mora no plano Empresa — está aqui pra você saber onde termina o Pro.",
          itens: [
            "Multi-administradora (plano Empresa)",
            "Portal do proprietário (plano Empresa)",
            "Portal do inquilino (plano Empresa)",
            "API e integrações (plano Empresa)",
            "Suporte prioritário (plano Empresa)",
          ],
        },
      ]}
      prints={[
        {
          arquivo: "/prints/aluguelpro-1.jpg",
          legenda: "Contratos com período, aluguel e status — a tela onde o mês começa",
        },
        {
          arquivo: "/prints/aluguelpro-2.jpg",
          legenda: "Painel do mês: previsto, recebido, atrasos e taxa de ocupação",
        },
        {
          arquivo: "/prints/aluguelpro-3.jpg",
          legenda: "Cobranças do mês — pago, a vencer e atrasado, com multa e juros",
        },
        {
          arquivo: "/prints/aluguelpro-4.jpg",
          legenda: "Repasse ao proprietário com a taxa de administração descontada",
        },
      ]}
      paraQuem={[
        {
          icone: "🏢",
          titulo: "Imobiliária pequena",
          texto:
            "Quem administra dezenas de imóveis sem ter equipe de cobrança pra segurar o dia 5.",
        },
        {
          icone: "🔑",
          titulo: "Proprietário com vários imóveis",
          texto:
            "Cobra sozinho, sem virar refém do começo do mês nem depender de imobiliária pra saber o que entrou.",
        },
        {
          icone: "📑",
          titulo: "Quem já perdeu reajuste",
          texto:
            "IGP-M e IPCA aplicados na data-base do contrato, sem depender de alguém lembrar do aniversário.",
        },
      ]}
      naoServe={[
        "Você administra temporada por diária: aqui o ciclo é mensal, com contrato e reajuste anual",
        "Você quer sindicalizar anúncio em portal (ZAP, Viva Real, OLX): o sistema cria a página pública do seu imóvel, mas não publica nos portais por você",
        "Você tem um imóvel só, alugado pra um conhecido, e o combinado é Pix na mão: pra isso uma planilha resolve",
      ]}
      planos={[
        {
          nome: "Básico",
          preco: "R$ 59",
          publico: "Proprietário com poucos imóveis",
          itens: [
            "Até 10 imóveis",
            "Contratos com reajuste",
            "Cobrança manual (Pix/boleto)",
            "1 usuário",
            "Demonstrativo simples",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Básico",
          ctaHref: "https://www.asaas.com/c/o10vzdh38yuwb2eo",
        },
        {
          nome: "Pro",
          preco: "R$ 99",
          publico: "Pequena administradora",
          destaque: true,
          itens: [
            "Imóveis e contratos ilimitados",
            "Cobrança recorrente automática",
            "Repasse automático",
            "Reajustes IGP-M/IPCA automáticos",
            "Demonstrativos em PDF",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/mhw1a1fe2i14hit6",
        },
        {
          nome: "Empresa",
          preco: "R$ 199",
          publico: "Administradora com várias filiais",
          itens: [
            "Tudo do Pro",
            "Multi-administradora",
            "Portal do proprietário",
            "Portal do inquilino",
            "API + integrações",
            "Suporte prioritário",
          ],
          ctaLabel: "Assinar Empresa",
          ctaHref: "https://www.asaas.com/c/yvfvq42xetpq1i59",
        },
      ]}
      notaPlanos="A diferença entre o Básico e o Pro é a cobrança rodando sozinha: no Básico você dispara, no Pro ela sai na data e dá baixa quando o inquilino paga."
      faq={[
        {
          p: "Administro imóvel dos outros e alguns meus. Dá pra separar?",
          r: "Dá. Cada imóvel tem o proprietário dele e a sua taxa; nos seus, a taxa é zero e o repasse é pra você mesmo. O demonstrativo sai certo nos dois casos, e a carteira continua sendo uma só.",
        },
        {
          p: "E se o inquilino atrasar?",
          r: "O sistema mostra quem está em atraso e continua cobrando. Multa e juros entram conforme o que estiver no contrato — você não precisa refazer a conta pra saber quanto cobrar de quem pagou fora do prazo.",
        },
        {
          p: "Como funciona o reajuste na prática?",
          r: "O contrato guarda a data-base e o índice (IGP-M ou IPCA). Na data, o reajuste é aplicado e o novo valor passa a valer nas cobranças seguintes, com o valor antigo e o novo registrados no histórico do contrato. É o oposto de descobrir em agosto que o contrato aniversariou em março.",
        },
        {
          p: "Já tenho contratos rodando. Dá pra começar no meio do caminho?",
          r: "Dá — é o caso mais comum. Você cadastra o contrato como ele está hoje: valor atual, dia de vencimento, índice e a próxima data-base. O sistema não precisa do histórico antigo pra começar a cobrar e repassar no mês que vem.",
        },
        {
          p: "O proprietário precisa de login pra acompanhar?",
          r: "Só se você quiser. No Básico e no Pro você manda o demonstrativo em PDF por WhatsApp ou e-mail e pronto. Portal do proprietário e portal do inquilino, com acesso próprio pra cada um, estão no plano Empresa.",
        },
        {
          p: "E se eu cancelar?",
          r: "Não tem fidelidade nem multa: você cancela a assinatura e ela para de renovar. Antes de encerrar, vale gerar os demonstrativos e relatórios em PDF do período — esses arquivos ficam com você, fora do sistema. E se quiser voltar depois, é só reassinar.",
        },
        {
          p: "Serve pra imóvel comercial e sala?",
          r: "Serve. O que o sistema controla é contrato de locação com vencimento, índice e repasse — o tipo do imóvel entra no cadastro e não muda o ciclo. Aluguel por diária é que não é o caso dele.",
        },
      ]}
      fechamento={{
        titulo: "O dia 5 não precisa ser o seu mês inteiro",
        texto:
          "Testa 3 dias com dois ou três contratos seus dentro. Se o ciclo não rodar sozinho como está escrito aqui, a gente prefere que você não assine.",
      }}
    />
  );
}
