import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "ContabilidadePro — o contador e o sistema no mesmo lugar",
  description:
    "Sistema contábil com acompanhamento humano de contador. Painel do mês, lançamentos com documento, folha, obrigações com lembrete de vencimento e IRPF dos sócios. PJ e PF na mesma casa.",
};

/* Landing completa e independente, no padrão do SiloPro (/p/silopro).
   Conteúdo tirado da página curta (app/contabilidadepro/page.tsx) e das telas
   reais do sistema — nada de preço ou função inventada. Trial e demo são os do
   padrão da casa (/cadastro?trial=1 e /demo), os dois conferidos respondendo
   antes de entrar aqui. */

export default function ContabilidadeProLanding() {
  return (
    <LandingLayout
      slug="contabilidadepro"
      nome="ContabilidadePro"
      icone="📊"
      whatsapp="5545991077788"
      promessa="O contador e o sistema no mesmo lugar"
      subpromessa={
        <>
          Um contador que responde no seu WhatsApp e um sistema que já sabe o
          que a empresa movimentou —{" "}
          <strong className="text-white">
            com o que vence, quando vence e quanto
          </strong>{" "}
          na primeira tela.
        </>
      }
      ctaPrincipal={{
        label: "Testar 3 dias grátis",
        href: "https://contabilidadepro.luqsys.com.br/cadastro?trial=1",
      }}
      ctaSecundaria={{
        label: "Ver a demonstração",
        href: "https://contabilidadepro.luqsys.com.br/demo",
      }}
      notaCta="✦ Sem cartão de crédito · sem fidelidade · o contador dedicado entra a partir do plano Pro"
      problema={{
        titulo: "Contador que só aparece quando o imposto vence",
        paragrafos: [
          "Você manda os documentos, ele manda a guia. No meio disso ninguém explica nada: não dá pra saber por que o valor subiu, o que entrou na conta ou o que ainda falta entregar neste mês. A relação inteira acontece em dois dias do mês e some no resto.",
          "Aí chega uma notificação e começa a caçada por um papel de dois anos atrás — no e-mail, no WhatsApp, na pasta do computador, na gaveta. O documento existe em algum lugar; o problema é que ninguém sabe onde, e o prazo da resposta corre igual.",
          "No ContabilidadePro o documento fica junto do lançamento, o que vence aparece antes de vencer e o contador está no mesmo canal que você já usa. Quando a notificação chega, a busca leva um minuto em vez de uma tarde.",
        ],
      }}
      antesDepois={[
        {
          antes: "Descobrir o imposto no dia do vencimento",
          depois: "Obrigações pendentes com valor e prazo, na primeira tela",
        },
        {
          antes: "Caçar um documento de dois anos atrás em quatro lugares",
          depois: "Lançamento com data, categoria e documento, filtrável por mês",
        },
        {
          antes: "Mandar o mesmo relatório da operação todo mês",
          depois: "O dado vem dos outros sistemas Luqsys, sem reenviar arquivo",
        },
        {
          antes: "Falar com o contador só quando ele cobra alguma coisa",
          depois: "Dúvida do dia a dia respondida no WhatsApp por quem cuida da sua empresa",
        },
        {
          antes: "IRPF do sócio com outro profissional, em outro mês",
          depois: "PJ e PF na mesma casa, com dependentes, bens e rendimentos",
        },
        {
          antes: "Duas ou três empresas, três conversas paralelas",
          depois: "Empresas no mesmo painel, trocando com um clique",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "Sua empresa entra no sistema",
          texto:
            "Cadastro da empresa, plano de contas e o que já roda em outro Luqsys — PDV Pro, FarmPro, ObrasPro mandam o dado direto, sem digitar duas vezes.",
        },
        {
          n: "2",
          titulo: "O contador acompanha",
          texto:
            "No plano Pro, um profissional dedicado valida a classificação, prepara as guias e responde dúvida no WhatsApp — não é chat genérico, é quem conhece a sua empresa.",
        },
        {
          n: "3",
          titulo: "Você só assina e paga",
          texto:
            "DAS, DCTFWeb, eSocial e IRPF prontos pra entregar, com lembrete antes de cada vencimento. O que era caçada vira lista.",
        },
      ]}
      blocos={[
        {
          icone: "📊",
          titulo: "O mês inteiro numa tela",
          texto:
            "Receita, despesa e saldo do mês não deveriam ser uma surpresa no fechamento. O painel mostra o que entrou, o que saiu e — o que mais importa — o que ainda vence, com valor e competência, antes de virar multa.",
          itens: [
            "Receitas, despesas e saldo do mês",
            "Obrigações pendentes com valor, incluindo vencidas",
            "Próximas obrigações por competência e vencimento",
            "Receitas × despesas dos últimos 6 meses no gráfico",
            "Funcionários ativos e ativo imobilizado somados",
            "Troca de empresa ativa no canto, sem sair do painel",
          ],
          print: {
            arquivo: "/prints/contabilidadepro-0.jpg",
            legenda: "Painel do mês, com o que vence antes de vencer",
          },
        },
        {
          icone: "🧾",
          titulo: "Lançamento que você encontra depois",
          texto:
            "O valor de um lançamento importa no fechamento; o documento dele importa dois anos depois, quando alguém pergunta. Aqui os dois ficam no mesmo lugar, com filtro por mês, tipo e categoria.",
          itens: [
            "Receita e despesa com data, descrição e categoria",
            "Número do documento junto do lançamento",
            "Filtro por mês, ano, tipo e categoria",
            "Totais de receita, despesa e saldo do período filtrado",
            "Plano de contas próprio da empresa",
          ],
          print: {
            arquivo: "/prints/contabilidadepro-1.jpg",
            legenda: "Lançamentos do período, com documento e categoria",
          },
        },
        {
          icone: "🧑‍💼",
          titulo: "Contador de verdade, no seu WhatsApp",
          texto:
            "A parte que nenhum software resolve sozinho: alguém pra dizer se aquilo pode ser despesa, se a classificação está certa e o que fazer com a notificação que chegou. Vem no plano Pro, junto do sistema.",
          itens: [
            "Contador dedicado por WhatsApp e e-mail",
            "Dúvida do dia a dia respondida sem esperar o vencimento",
            "Validação da classificação dos lançamentos",
            "Acompanhamento do que vence no mês",
            "PJ e PF (sócios e família) com o mesmo profissional",
          ],
        },
        {
          icone: "📑",
          titulo: "As obrigações entregues no prazo",
          texto:
            "Guia atrasada custa multa e juros por um motivo bobo: ninguém lembrou. O sistema lembra antes, e no plano Pro alguém prepara.",
          itens: [
            "DAS do Simples Nacional todo mês",
            "DCTFWeb e eSocial",
            "IRPF anual dos sócios e dependentes",
            "Obrigações com competência, vencimento e status",
            "Lembrete antes de cada vencimento",
          ],
        },
        {
          icone: "🏗️",
          titulo: "Folha, imobilizado e apuração",
          texto:
            "As contas que costumam viver em três planilhas diferentes ficam dentro do mesmo sistema, e por isso batem entre si no fim do mês.",
          itens: [
            "Folha de pagamento com salário base, INSS e custo do empregador",
            "Funcionários com cargo, admissão e histórico de folhas",
            "Ativo imobilizado com depreciação mensal calculada",
            "Apuração de Lucro Presumido por trimestre (IRPJ, CSLL, PIS e COFINS) com DARF",
            "Usuários e permissões, pra quem tem mais de uma pessoa no financeiro",
          ],
        },
        {
          icone: "👨‍👩‍👧",
          titulo: "PJ e PF na mesma casa",
          texto:
            "O IRPF do dono não é um assunto separado da empresa — é o mesmo dinheiro, visto do outro lado. Manter os dois no mesmo lugar evita a conversa de março com um profissional que não conhece a sua PJ.",
          itens: [
            "Pessoa física com dependentes, bens e direitos e dívidas",
            "Rendimentos e carnê-leão do ano",
            "Resumo de IR com o total de deduções",
            "Exportação em TXT e JSON pra declaração",
            "Exportar para contador, se quiser levar pra fora",
          ],
        },
      ]}
      paraQuem={[
        {
          icone: "🧾",
          titulo: "MEI e Simples que só recebe guia",
          texto:
            "Quem nunca conseguiu falar com o contador fora do vencimento e quer entender o que está pagando.",
        },
        {
          icone: "🔗",
          titulo: "Quem já usa outro Luqsys",
          texto:
            "O dado da operação vira lançamento sem reenviar arquivo todo mês pra alguém.",
        },
        {
          icone: "👨‍👩‍👧",
          titulo: "Sócio com IRPF pra entregar",
          texto:
            "PJ e PF na mesma casa, com dependentes e bens, sem contratar dois profissionais.",
        },
      ]}
      naoServe={[
        "Sua empresa é Lucro Real com operação complexa — fale com a gente antes, o pacote com contador foi desenhado pro Simples",
        "Você quer trocar o contador por um robô: aqui o software organiza e a pessoa continua existindo, é isso que você está pagando no Pro",
        "Você só quer o software e vai manter o seu contador: dá certo no plano Software, mas o acompanhamento humano não está incluído",
      ]}
      planos={[
        {
          nome: "Software",
          preco: "R$ 99",
          publico: "Só o sistema, sem contador",
          itens: [
            "Sistema completo, PJ + PF",
            "Painel, lançamentos e plano de contas",
            "Folha, imobilizado e obrigações",
            "Integração com os outros sistemas Luqsys",
            "Lembretes de vencimento",
            "Exportar para contador",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar o Software",
          ctaHref: "https://www.asaas.com/c/alf8qiy9p8nazwx8",
        },
        {
          nome: "Pro",
          preco: "R$ 199",
          publico: "Software + contador dedicado",
          destaque: true,
          itens: [
            "Tudo do Software",
            "Contador dedicado por WhatsApp",
            "Guias mensais (DAS e afins)",
            "DCTFWeb e eSocial",
            "IRPF de até 2 sócios + dependentes",
            "Suporte WhatsApp prioritário",
          ],
          ctaLabel: "Assinar o Pro",
          ctaHref: "https://www.asaas.com/c/4ugw3ktqktdu8kqt",
        },
        {
          nome: "Premium",
          preco: "R$ 399",
          publico: "Múltiplas empresas e sócios",
          itens: [
            "Tudo do Pro",
            "Até 3 CNPJs",
            "IRPF ilimitado (sócios + família)",
            "Assessoria fiscal e tributária",
            "Planejamento tributário anual",
            "Suporte 24h em dia útil",
          ],
          ctaLabel: "Assinar o Premium",
          ctaHref: "https://www.asaas.com/c/4w4k8ghm6n06vsxy",
        },
      ]}
      notaPlanos="O Software é o sistema sozinho. Do Pro pra cima existe uma pessoa do outro lado — é ela que muda o preço."
      faq={[
        {
          p: "Preciso trocar de contador pra usar?",
          r: "Pro pacote completo, sim: o contador vem junto, e é ele que valida a classificação e prepara as guias. Se você quer manter o seu contador, assine o plano Software — tem o botão de exportar para contador, e os relatórios saem no formato que ele já usa.",
        },
        {
          p: "Minha empresa não é Simples Nacional. Serve?",
          r: "O acompanhamento com contador foi desenhado pro Simples, que é a maioria. O software também faz apuração de Lucro Presumido por trimestre, com IRPJ, CSLL, PIS e COFINS e geração de DARF. Se o seu regime é outro, fale com a gente antes de assinar em vez de descobrir depois.",
        },
        {
          p: "Dá pra ver antes de pagar?",
          r: "Dá, de dois jeitos: a demonstração abre agora com uma empresa de exemplo pra você mexer à vontade, e o teste de 3 dias cria a sua conta de verdade, sem cartão de crédito.",
        },
        {
          p: "Tenho mais de uma empresa. Como fica?",
          r: "O sistema é multi-empresa: você troca a empresa ativa no canto da tela e o painel inteiro acompanha. O plano Premium cobre até 3 CNPJs com contador. Se você está no Software ou no Pro e vai entrar uma segunda empresa, chama no WhatsApp que a gente ajusta antes.",
        },
        {
          p: "O IRPF da família entra?",
          r: "No Pro entram até 2 sócios com os dependentes deles. No Premium é ilimitado, sócios e família. A parte de pessoa física guarda dependentes, bens e direitos, dívidas, rendimentos e carnê-leão, e exporta o arquivo pra declaração.",
        },
        {
          p: "Como a integração com os outros sistemas funciona?",
          r: "Se a venda está no PDV Pro, a lavoura no FarmPro e a obra no ObrasPro, o lançamento chega no contábil sem você reenviar planilha. É o motivo de o sistema ser da mesma casa: o dado já nasceu aqui dentro.",
        },
        {
          p: "O que acontece se eu cancelar?",
          r: "Não tem fidelidade nem multa: você cancela e o acesso vai até o fim do período já pago. Antes de encerrar, use o exportar para contador e baixe os arquivos do período — a guarda dos documentos contábeis é obrigação da empresa, então leve tudo com você. Se precisar de ajuda pra gerar o pacote, chama no WhatsApp que a gente faz junto.",
        },
      ]}
      prints={[
        {
          arquivo: "/prints/contabilidadepro-0.jpg",
          legenda: "Painel: receitas, despesas, saldo e o que vence",
        },
        {
          arquivo: "/prints/contabilidadepro-1.jpg",
          legenda: "Lançamentos filtrados por mês, tipo e categoria",
        },
      ]}
      fechamento={{
        titulo: "Contabilidade que fala com você o mês inteiro",
        texto:
          "Testa 3 dias sem cartão. Se o seu caso não couber no que a gente faz bem, a gente diz isso antes de você assinar.",
      }}
    />
  );
}
