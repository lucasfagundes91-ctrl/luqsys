import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "SolarPro — a conta de luz do seu cliente vira cobrança sozinha",
  description:
    "OCR da fatura da distribuidora, cálculo da economia real, cobrança recorrente com PDF que se explica, orçamento com payback, acompanhamento de obra e o lucro por usina. Gestão pra integrador de energia solar.",
};

/* Landing independente do SolarPro (/p/solarpro), no padrão aprovado do
   SiloPro. Página do produto, sem menu da Luqsys e sem link pros irmãos —
   o plano é dar domínio próprio depois.

   Todos os fatos (funcionalidades, planos, preços e links de assinatura)
   saem de app/solarpro/page.tsx, que é a página curta dentro do site da
   casa. Nada aqui é inventado: o texto é mais fundo, os números são os
   mesmos. Não há `numeros` porque não existe métrica verdadeira pra mostrar.

   CTA secundária aponta pra #planos, e não pra /demo: em 16/08/2026 a rota
   /demo do SolarPro cai no /login, então anunciar sandbox seria mentira. */

export default function SolarProLanding() {
  return (
    <LandingLayout
      slug="solarpro"
      nome="SolarPro"
      icone="☀️"
      whatsapp="5545991077788"
      promessa="Vender o kit é a parte fácil"
      subpromessa={
        <>
          O SolarPro lê a fatura da distribuidora, calcula quanto cada cliente
          economizou de verdade e{" "}
          <strong className="text-white">emite a cobrança sozinho</strong> — com
          um PDF que mostra de onde saiu cada número.
        </>
      }
      ctaPrincipal={{
        label: "Testar 3 dias grátis",
        href: "https://solarpro.luqsys.com.br/cadastro?trial=1",
      }}
      ctaSecundaria={{ label: "Ver os planos", href: "#planos" }}
      notaCta="✦ Sem cartão de crédito · sem fidelidade · cancele quando quiser"
      problema={{
        titulo: "O sistema começa no dia seguinte à instalação",
        paragrafos: [
          "Fechar a venda é a parte que você já sabe fazer. Você calcula o consumo, monta o kit, mostra o payback e o cliente assina. Até aqui, uma planilha aguenta o tranco.",
          "O problema aparece um mês depois, quando chega a fatura e ela não bate com o que estava na proposta. Veio bandeira, veio crédito acumulado do mês passado, veio um mínimo que não some. Aí o cliente liga perguntando quanto economizou, e a resposta honesta — “deixa eu conferir” — é a que mais custa confiança. Alguém abre o PDF da fatura, digita número na planilha, refaz a conta e responde três dias depois.",
          "E tem o mês em que ninguém abriu planilha nenhuma. A cobrança não saiu, o dinheiro não entrou, e você só descobre quando o caixa aperta. O SolarPro fecha esse ciclo: lê a fatura, faz a conta com a tarifa e a bandeira do mês, emite a cobrança recorrente e manda o demonstrativo mostrando a conta sem solar, o desconto e o que o cliente paga.",
        ],
      }}
      antesDepois={[
        {
          antes: "Alguém digita o consumo do PDF da fatura na planilha",
          depois: "OCR lê consumo, injetada, tarifa e bandeira da própria fatura",
        },
        {
          antes: "“Quanto eu economizei esse mês?” vira pesquisa de três dias",
          depois: "O cliente recebe o PDF com a economia real do mês, sozinho",
        },
        {
          antes: "Crédito acumulado bagunça a conta e vira desconto errado",
          depois:
            "O sistema separa a energia que veio das placas da que veio da distribuidora",
        },
        {
          antes: "Mês corrido, a cobrança de alguns clientes simplesmente não sai",
          depois: "Cobrança recorrente emitida todo mês, com o demonstrativo junto",
        },
        {
          antes: "Você sabe o faturamento, mas não sabe a margem por usina",
          depois: "Lucro por usina calculado sobre o custo real, não sobre o repasse",
        },
        {
          antes: "Proposta, contrato, obra e financeiro em quatro lugares",
          depois: "O mesmo cliente do orçamento é o da obra e o da cobrança",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "Cadastra o cliente e o projeto",
          texto:
            "Dados do cliente, o consumo tirado da foto da fatura por OCR, o projeto fotovoltaico e os equipamentos. A proposta já nasce com economia projetada e payback.",
        },
        {
          n: "2",
          titulo: "Acompanha a instalação",
          texto:
            "Contrato pronto pra assinar e a obra andando por etapa, com a comissão do vendedor amarrada na venda em vez de anotada num bloquinho.",
        },
        {
          n: "3",
          titulo: "A fatura chega e o resto acontece sozinho",
          texto:
            "O sistema sincroniza a fatura nova, calcula o que o cliente deve, emite a cobrança e manda o PDF explicando a conta.",
        },
      ]}
      blocos={[
        {
          icone: "🧮",
          titulo: "Da primeira conversa à proposta assinada",
          texto:
            "O orçamento não é um PDF bonito e solto: ele nasce do consumo real do cliente e continua sendo o mesmo cadastro na obra e na cobrança. Quem fecha a venda não redigita nada pra quem instala.",
          itens: [
            "Cadastro de cliente e projeto fotovoltaico, com os equipamentos",
            "Consumo em kWh puxado por foto da fatura, via OCR",
            "Cálculo automático de payback",
            "Orçamento profissional em PDF com a economia projetada",
            "Contrato pronto pra assinar",
          ],
        },
        {
          icone: "🏗️",
          titulo: "A obra e a equipe no mesmo lugar",
          texto:
            "Entre o “assinei” e o “ligou” tem semanas de gente e etapa. Deixar isso no grupo do WhatsApp é como você descobre atraso: pelo cliente reclamando.",
          itens: [
            "Acompanhamento de obras por etapa",
            "Comissão de vendedor amarrada à venda",
            "Multi-usuário com permissão por pessoa",
            "Histórico do projeto ligado ao cliente",
          ],
        },
        {
          icone: "🧾",
          titulo: "A fatura vira número sem ninguém digitar",
          texto:
            "É aqui que o sistema ganha o dia. A conta de luz é o documento mais chato do processo — e é o único que manda no valor da sua cobrança. Enquanto ele é lido à mão, a conta vai estar errada em algum mês.",
          itens: [
            "OCR da fatura da distribuidora",
            "Leitura da energia compensada e do saldo de créditos",
            "Tarifa e bandeira do mês aplicadas no cálculo",
            "Sincronização automática das faturas novas",
            "Histórico por unidade consumidora",
          ],
        },
        {
          icone: "💸",
          titulo: "Cobrança que se explica antes de você precisar explicar",
          texto:
            "O demonstrativo mostra a conta que o cliente pagaria sem solar, o desconto e o que ele paga agora. É o que transforma a cobrança mensal numa boa notícia em vez de uma discussão.",
          itens: [
            "Cobrança recorrente automática todo mês",
            "PDF com a economia real do mês anexado",
            "Desconto aplicado sobre a energia injetada",
            "Ajuste manual pro mês em que a fatura vem torta",
            "Contas a receber do cliente no mesmo lugar",
          ],
        },
        {
          icone: "📊",
          titulo: "Sua margem, não só a economia do cliente",
          texto:
            "Todo integrador sabe quanto o cliente economizou. Poucos sabem quanto sobrou pra eles. Aqui o lucro sai do custo real da usina, e não do que você repassa — que é o número que engana.",
          itens: [
            "Lucro por usina calculado sobre o custo real",
            "Contas a pagar e a receber da empresa",
            "Quanto entrou do cliente e quanto foi pra distribuidora, por mês",
            "Painel com os clientes e as usinas em uma tela",
          ],
          print: {
            arquivo: "/prints/solarpro-0.jpg",
            legenda: "Painel do integrador",
          },
        },
      ]}
      paraQuem={[
        {
          icone: "⚡",
          titulo: "Integrador que instala e some",
          texto:
            "Vender o kit é fácil; o difícil é o pós, e é aí que o cliente cancela.",
        },
        {
          icone: "🏘️",
          titulo: "Quem loca geração pra terceiro",
          texto:
            "Cobrança recorrente, repasse e demonstrativo automáticos, mês após mês.",
        },
        {
          icone: "📊",
          titulo: "Quem não sabe a própria margem",
          texto:
            "Lucro por usina calculado sobre o custo real, não sobre o repasse.",
        },
      ]}
      naoServe={[
        "Você só quer monitorar a geração do inversor — isso o app do fabricante já faz melhor",
        "Você não emite cobrança pra ninguém: metade do sistema ficaria parada",
        "Sua distribuidora não é a Copel e você não tem paciência de ajustar o OCR junto com a gente nas primeiras faturas",
      ]}
      planos={[
        {
          nome: "Básico",
          preco: "R$ 49",
          publico: "Integrador começando",
          itens: [
            "Até 10 propostas/mês",
            "OCR de fatura (até 20/mês)",
            "1 usuário",
            "Orçamento PDF",
            "Sem financeiro",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Básico",
          ctaHref: "https://www.asaas.com/c/gvkazy8583uxptbj",
        },
        {
          nome: "Pro",
          preco: "R$ 89",
          publico: "Empresa solar completa",
          destaque: true,
          itens: [
            "Clientes e projetos ilimitados",
            "OCR de faturas ilimitado",
            "Orçamentos profissionais em PDF",
            "Acompanhamento de obras",
            "Financeiro completo",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/wy6zkhm3k7otovzd",
        },
        {
          nome: "Empresa",
          preco: "R$ 179",
          publico: "Rede de integradores/franquia",
          itens: [
            "Tudo do Pro",
            "Multi-filial",
            "Comissões por vendedor",
            "Dashboard consolidado",
            "API pra distribuidor",
            "Suporte prioritário",
          ],
          ctaLabel: "Assinar Empresa",
          ctaHref: "https://www.asaas.com/c/rsu497dzfvpwbmp6",
        },
      ]}
      notaPlanos="O Pro é o plano de quem já cobra cliente todo mês — é nele que o financeiro e o OCR ilimitado entram. Dá pra começar no Básico e trocar depois."
      faq={[
        {
          p: "Funciona com a minha distribuidora?",
          r: "O OCR foi feito em cima das faturas da Copel e lê o padrão da fatura brasileira de energia. Distribuidora nova a gente ajusta junto com você nas primeiras faturas — manda uma fatura sua no WhatsApp antes de assinar que a gente confere.",
        },
        {
          p: "E quando o cliente usa crédito acumulado?",
          r: "Entra na conta. O sistema sabe separar a energia que veio das placas da que veio direto da distribuidora — o desconto vale só sobre a sua energia, que é como tem que ser. O saldo de créditos é lido da própria fatura, junto com a energia compensada.",
        },
        {
          p: "Eu emito a cobrança ou o sistema emite?",
          r: "O sistema emite e cobra sozinho todo mês, com o PDF do demonstrativo anexado. Você entra só quando quer ajustar alguma coisa.",
        },
        {
          p: "E no mês em que a fatura vem torta?",
          r: "Tem ajuste manual. Você corrige aquele mês na mão e a cobrança sai com o número certo, sem precisar refazer o cadastro nem desligar a recorrência.",
        },
        {
          p: "Quantas pessoas da minha equipe podem usar?",
          r: "No Básico é um usuário. Do Pro pra cima é multi-usuário com permissão por pessoa — o vendedor não precisa enxergar o financeiro da empresa pra fechar uma proposta.",
        },
        {
          p: "Preciso instalar alguma coisa?",
          r: "Não. Roda no navegador, em solarpro.luqsys.com.br — computador do escritório ou celular na casa do cliente, a mesma tela.",
        },
        {
          p: "O que acontece se eu cancelar?",
          r: "Não tem fidelidade nem multa: você cancela a assinatura no mesmo lugar em que assinou e o acesso vai até o fim do período pago. Se quiser levar o histórico dos seus clientes junto, chama no WhatsApp antes de cancelar que a gente separa os dados pra você.",
        },
      ]}
      prints={[]}
      fechamento={{
        titulo: "A instalação acaba. A conta chega todo mês.",
        texto:
          "Testa 3 dias com uma fatura de verdade sua. Se o OCR não ler direito a sua distribuidora, a gente fala isso na sua cara em vez de te empurrar um plano.",
      }}
    />
  );
}
