import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "BankPro — o dinheiro da sua casa num lugar só",
  description:
    "Contas, cartões e investimentos da família no mesmo painel. Lança gasto pelo WhatsApp por foto, texto ou áudio e importa o extrato por OFX — sem dar a senha do banco pra ninguém.",
};

/* Landing independente do BankPro (/p/bankpro), no padrão do SiloPro.
   Cuidado deliberado: é sistema de dinheiro. A página descreve o que o
   sistema faz — registrar, somar, mostrar — e nunca promete rendimento,
   economia em porcentagem ou recomendação de investimento. */

export default function BankProLanding() {
  return (
    <LandingLayout
      slug="bankpro"
      nome="BankPro"
      icone="🏦"
      whatsapp="5545991077788"
      promessa="O dinheiro da sua casa num lugar só"
      subpromessa={
        <>
          Contas, cartões e investimentos da família no mesmo painel — e o
          gasto entrando{" "}
          <strong className="text-white">na hora em que você gasta</strong>,
          por uma mensagem no WhatsApp.
        </>
      }
      ctaPrincipal={{
        label: "Falar com a gente",
        href: "mailto:contato@luqsys.com.br?subject=Quero%20o%20BankPro",
      }}
      ctaSecundaria={{ label: "Ver os planos", href: "#planos" }}
      notaCta="✦ Sem fidelidade · o sistema nunca pede a senha do seu banco"
      problema={{
        titulo: "Você sabe quanto ganha. Sabe pra onde foi?",
        paragrafos: [
          "O salário cai, o mês passa, e no dia 28 a pergunta é sempre a mesma: sumiu dinheiro pra onde? Não é que você gaste errado — é que ninguém consegue lembrar de quarenta compras pequenas espalhadas por trinta dias. O gasto some no mesmo instante em que acontece, e o que sobra no fim do mês é uma sensação, não um número.",
          "E a informação existe, só que picada. O extrato está no app do banco, a fatura está no app do cartão, a aplicação está num terceiro, e o comprovante do pedreiro está numa foto perdida na galeria. Cada um mostra um pedaço, nenhum mostra o total. Pra juntar tudo você precisaria de uma noite de domingo com planilha aberta — e essa noite nunca chega.",
          "Aí tem o pior pedaço: o dinheiro da empresa saindo da mesma conta que paga o mercado de casa. Quem tem CNPJ pequeno conhece bem. No fim, nem o negócio sabe quanto realmente deu, nem a família sabe quanto realmente gastou. O BankPro junta as duas pontas num painel só e separa por pessoa — e o lançamento acontece por WhatsApp, no momento do gasto, que é o único momento em que você lembra dele.",
        ],
      }}
      antesDepois={[
        {
          antes: "Descobrir o estrago quando a fatura fecha",
          depois: "Mandar 'Mercado 89,90 no Nubank' no WhatsApp e já estar lançado",
        },
        {
          antes: "Comprovante virando foto perdida na galeria",
          depois: "Foto no WhatsApp, o OCR lê o valor e o lançamento aparece",
        },
        {
          antes: "Extrato num app, fatura em outro, aplicação num terceiro",
          depois: "Tudo no mesmo painel, com o total de verdade na frente",
        },
        {
          antes: "Dinheiro da empresa misturado com o de casa",
          depois: "Cada pessoa (e o CNPJ) com o seu, somando quando interessa",
        },
        {
          antes: "Digitar o extrato do mês inteiro na mão",
          depois: "Importar o OFX do banco e a IA categorizar, sem duplicar o que já foi lançado",
        },
        {
          antes: "Não saber se o patrimônio subiu ou desceu no ano",
          depois: "Contas, cartões e aplicações somados na mesma linha do tempo",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "Cadastra suas contas",
          texto:
            "Conta corrente, poupança, investimento e cartões — por pessoa: você, cônjuge, filhos, a empresa. O histórico entra de uma vez importando o OFX do banco.",
        },
        {
          n: "2",
          titulo: "Lança pelo WhatsApp",
          texto:
            "Manda 'Mercado 89,90 no Nubank', um áudio ou a foto do comprovante. O assistente entende, categoriza e registra sem você abrir o app.",
        },
        {
          n: "3",
          titulo: "Olha o panorama",
          texto:
            "Painel com os últimos 30 dias, fluxo de caixa, patrimônio total, gasto por categoria e por cartão. Filtra por pessoa quando quiser ver só o seu.",
        },
      ]}
      blocos={[
        {
          icone: "💬",
          titulo: "Lança pelo WhatsApp, na hora do gasto",
          texto:
            "O controle não falha por preguiça, falha por atrito. Se registrar custa abrir um app, escolher categoria e digitar valor, você não vai fazer. Falar do gasto custa cinco segundos — e é isso que faz o mês inteiro ficar registrado.",
          itens: [
            "Texto solto: 'Mercado 89,90 no Nubank' e pronto",
            "Foto do comprovante com OCR lendo o valor",
            "Áudio transcrito automaticamente",
            "Assistente que responde perguntas sobre as suas finanças",
            "Sem precisar abrir o app pra registrar",
          ],
        },
        {
          icone: "📊",
          titulo: "O panorama que nenhum app do banco te dá",
          texto:
            "O app do banco mostra a conta dele. O BankPro mostra a sua vida: o que entrou, o que saiu, o que está preso na fatura e quanto sobra de verdade — tudo na mesma tela.",
          itens: [
            "Últimos 30 dias em janela móvel, não só o mês fechado",
            "Fluxo de caixa: entrada, saída e o que sobrou",
            "Gasto por categoria e por cartão",
            "Patrimônio total somando contas e aplicações",
            "Filtro por pessoa: só o seu, só o do cônjuge, ou a família toda",
          ],
          print: {
            arquivo: "/prints/bankpro-0.jpg",
            legenda: "Painel das finanças",
          },
        },
        {
          icone: "🏦",
          titulo: "Bancos e cartões, sem senha nenhuma",
          texto:
            "Você baixa o OFX no seu banco — todo banco brasileiro exporta — e importa aqui. O sistema não entra na sua conta, não pede senha e não usa token de ninguém.",
          itens: [
            "Importação OFX de qualquer banco brasileiro",
            "Conciliação com o que você já lançou, sem duplicar",
            "Cartão de crédito com fatura e parcelamento",
            "Transferência entre contas não vira despesa inventada",
            "Categorização automática do que veio no extrato",
          ],
        },
        {
          icone: "👨‍👩‍👧",
          titulo: "Cada um com o seu, a casa com o total",
          texto:
            "Casal, filhos, pessoa física e empresa no mesmo painel — separados quando a conta é de um só, somados quando a pergunta é sobre a família.",
          itens: [
            "Multi-pessoa com patrimônio separado por pessoa",
            "Visão consolidada da família num clique",
            "Metas e limites por categoria",
            "Acesso por perfil, cada um vendo o que é dele",
          ],
        },
        {
          icone: "📈",
          titulo: "Dinheiro aplicado também é saldo",
          texto:
            "O que está em aplicação costuma ficar de fora da conta de cabeça — e aí o patrimônio parece menor do que é. Aqui ele entra no total como qualquer outro saldo, sem você abrir planilha pra atualizar.",
          itens: [
            "CDB, LCI, LCA, ações e tesouro cadastrados como contas",
            "Reconciliação de aplicação pelo CDI",
            "Evolução do patrimônio ao longo do tempo",
            "Atualização sem digitar planilha",
            "O BankPro registra e mostra — não indica onde aplicar",
          ],
        },
        {
          icone: "🔒",
          titulo: "É o seu dinheiro, então: o que fica onde",
          texto:
            "Sistema de finanças precisa ser chato com isso. O resumo é curto: você não entrega senha de banco, seus dados ficam no seu login e o que passa pelo WhatsApp passa pelo número do sistema.",
          itens: [
            "Nenhuma senha de banco é pedida nem armazenada",
            "Dados isolados por conta, atrás do seu login",
            "O WhatsApp fala pelo número do sistema, não por conversa de terceiro",
            "Sem fidelidade: você cancela quando quiser",
          ],
        },
      ]}
      paraQuem={[
        {
          icone: "👤",
          titulo: "Quem mistura PF e PJ",
          texto:
            "O dinheiro da empresa e o da casa saindo da mesma conta — o clássico do pequeno empresário.",
        },
        {
          icone: "👨‍👩‍👧",
          titulo: "Casal que divide contas",
          texto:
            "Cada um com o seu, e a visão da família quando interessa saber o total.",
        },
        {
          icone: "📈",
          titulo: "Quem investe e perde a conta",
          texto:
            "CDB aqui, ação ali, e nenhum lugar somando o patrimônio inteiro.",
        },
      ]}
      naoServe={[
        "Você quer contabilidade de empresa — nota, estoque e folha ficam em outro sistema da casa",
        "Você espera que ele acesse seu banco sozinho: aqui a importação é por OFX, sem senha nenhuma",
        "Você procura conselho de investimento: o BankPro registra e mostra o seu dinheiro, não recomenda onde aplicar nem promete rendimento",
      ]}
      planos={[
        {
          nome: "Básico",
          preco: "R$ 19",
          publico: "Só você, app web",
          itens: [
            "App web completo",
            "1 pessoa",
            "Contas e cartões ilimitados",
            "Importação OFX (5/mês)",
            "Sem WhatsApp",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Básico",
          ctaHref: "https://www.asaas.com/c/vr2dp6vjh69del96",
        },
        {
          nome: "Pro",
          preco: "R$ 49",
          publico: "Você + família + WhatsApp (de R$ 88)",
          destaque: true,
          itens: [
            "App web completo",
            "WhatsApp com IA: lançar, consultar, áudio, foto",
            "Multi-pessoa (você + família)",
            "Contas, cartões, investimentos ilimitados",
            "Importação OFX ilimitada",
            "Suporte prioritário",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/ou3zyy6fr8hiyt5x",
        },
        {
          nome: "Família+",
          preco: "R$ 99",
          publico: "Patrimônio + planejamento financeiro",
          itens: [
            "Tudo do Pro",
            "Consultoria mensal (30min via call)",
            "Relatório de patrimônio anual",
            "Planejamento financeiro guiado",
            "Suporte prioritário 24h em dia útil",
            "API bancária (Open Finance)",
          ],
          ctaLabel: "Assinar Família+",
          ctaHref: "https://www.asaas.com/c/votuo35ov6pwoggt",
        },
      ]}
      notaPlanos="O WhatsApp com IA está a partir do Pro — no Básico o lançamento é pelo app web."
      faq={[
        {
          p: "Preciso dar a senha do meu banco?",
          r: "Não. Nada de senha e nada de robô entrando na sua conta: você baixa o arquivo OFX no seu próprio banco (todo banco brasileiro exporta) e importa no BankPro. O sistema nunca acessa a sua conta. O plano Família+ oferece, à parte, conexão por Open Finance — que também não usa a sua senha: a autorização é dada por você, dentro do seu banco, e pode ser revogada lá a qualquer hora.",
        },
        {
          p: "Serve pra empresa também?",
          r: "Serve pra separar o que é seu do que é da empresa, que é o problema mais comum de quem tem CNPJ pequeno: a empresa vira mais uma 'pessoa' no painel, com contas e cartões próprios. Pra operação da empresa mesmo — emitir nota, controlar estoque, folha de pagamento — o sistema certo é outro da casa, e a gente te diz qual.",
        },
        {
          p: "Meus dados ficam onde?",
          r: "No seu login, num banco de dados isolado por conta. O que entra pelo WhatsApp passa pelo número do sistema, não fica salvo em conversa de terceiro. E não guardamos senha de banco porque nunca pedimos nenhuma.",
        },
        {
          p: "O que acontece se eu cancelar?",
          r: "Não tem fidelidade nem multa: você cancela a assinatura e a cobrança para no ciclo seguinte, sem ligação de retenção. Se quiser levar o histórico junto, fala com a gente antes de encerrar que a gente separa os seus lançamentos pra você.",
        },
        {
          p: "Meu banco exporta OFX?",
          r: "Sim — OFX é o formato padrão de extrato no Brasil e todo banco grande oferece, normalmente em 'exportar extrato' no app ou no internet banking. Cartão de crédito costuma exportar a fatura do mesmo jeito. Se o seu não achar o botão, manda mensagem que a gente localiza junto.",
        },
        {
          p: "Preciso usar o WhatsApp pra funcionar?",
          r: "Não. O app web é completo sozinho, e no plano Básico é assim que se lança. O WhatsApp entra a partir do Pro, e ele existe por um motivo prático: gasto que você registra na hora é gasto que não some. Quem usa os dois costuma lançar no WhatsApp e conferir no app.",
        },
        {
          p: "O BankPro diz onde eu devo investir?",
          r: "Não, e nem deve. Ele registra o que você já tem — CDB, LCI, LCA, ações, tesouro — soma no seu patrimônio e mostra a evolução. Recomendação de investimento é trabalho de quem tem certificação pra isso; a nossa parte é te dar o número certo na frente antes de você decidir.",
        },
      ]}
      prints={[]}
      fechamento={{
        titulo: "Comece sabendo pra onde foi",
        texto:
          "Não dá pra ajustar o que você não enxerga. Junta as contas num painel só, lança pelo WhatsApp e, no fim do mês, olha um número em vez de uma sensação.",
      }}
    />
  );
}
