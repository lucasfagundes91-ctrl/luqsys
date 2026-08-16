import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "RotinaPro — a ronda de cada unidade, com foto e nota",
  description:
    "Checklist que o inspetor responde pelo WhatsApp, sem login. Foto obrigatória onde importa, nota por unidade, ranking entre filiais e alerta quando a conformidade cai do limite.",
};

/* Landing independente do RotinaPro (/p/rotinapro), no padrão do /p/silopro:
   site do produto, sem menu da Luqsys, pronta pra ganhar domínio próprio.

   Fatos tirados de app/rotinapro/page.tsx: checklist com peso por item, tipos
   Sim/Não, nota 0-10, texto e foto obrigatória; inspetor responde por link no
   WhatsApp sem conta; banco de fotos pesquisável; KPI e ranking por unidade;
   alerta quando a conformidade cai do limite; agendamento recorrente; planos
   Pro R$ 49 (até 10 unidades, 5GB) e Empresa R$ 149 (ilimitadas, 50GB).
   O que não estava lá nem na tela do print não entrou.

   Prints reais em public/prints/rotinapro-{0,1}.jpg. Eles ficam pendurados em
   dois blocos de recurso, no meio da rolagem, e repetem na galeria — a queixa
   do Lucas era justamente página comprida sem tela aparecendo. */

const TRIAL = "https://rotinapro.luqsys.com.br/cadastro?trial=1";
const DEMO = "https://rotinapro.luqsys.com.br/demo";
const ASSINAR_PRO = "https://www.asaas.com/c/fmai51owfhde8ckw";
const FALAR_EMPRESA =
  "mailto:contato@luqsys.com.br?subject=Quero%20o%20RotinaPro%20Empresa";

export default function RotinaProLanding() {
  return (
    <LandingLayout
      slug="rotinapro"
      nome="RotinaPro"
      icone="📋"
      whatsapp="5545991077788"
      promessa="A ronda de cada unidade, com foto e com nota"
      subpromessa={
        <>
          O inspetor responde{" "}
          <strong className="text-white">pelo WhatsApp, sem login</strong> — e
          você vê na hora qual filial cuida e qual só assina o papel.
        </>
      }
      ctaPrincipal={{ label: "Testar 3 dias grátis", href: TRIAL }}
      ctaSecundaria={{ label: "Ver a demonstração", href: DEMO }}
      notaCta="✦ Sem cartão de crédito · sem fidelidade · o inspetor não instala nada"
      problema={{
        titulo: "Checklist que ninguém preenche não controla nada",
        paragrafos: [
          "A prancheta fica pendurada atrás da porta e alguém assina no fim do dia, de cabeça, pelos três turnos. A planilha da conferência está sempre “quase em dia” — falta a semana passada, falta a foto, falta a unidade que o responsável esqueceu de mandar. No papel, todo mundo cumpre 100%.",
          "Aí você descobre que o freezer ficou aberto a noite inteira, que o banheiro passou a tarde sem papel ou que o extintor venceu há dois meses. E descobre tarde: quando o cliente já foi embora, quando o produto já estragou, quando o fiscal já anotou.",
          "No RotinaPro o inspetor recebe um link no WhatsApp e responde ali mesmo, item por item, com foto obrigatória onde importa. Cada unidade sai com uma nota, o ranking mostra quem está deixando cair, e você recebe alerta quando a conformidade fica abaixo do limite que você definiu.",
        ],
      }}
      antesDepois={[
        {
          antes: "Prancheta assinada no fim do dia, de memória",
          depois: "Item respondido na hora, no celular de quem está no campo",
        },
        {
          antes: "“Está tudo certo” sem nada que comprove",
          depois: "Foto obrigatória anexada ao item que exige evidência",
        },
        {
          antes: "Planilha que consolida quando alguém tem tempo",
          depois: "Nota por unidade calculada assim que a ronda termina",
        },
        {
          antes: "Todas as filiais parecendo iguais no relatório",
          depois: "Ranking de conformidade mostrando quem está caindo",
        },
        {
          antes: "Descobrir o problema quando o cliente reclama",
          depois: "Alerta no WhatsApp quando a nota fura o limite",
        },
        {
          antes: "Foto perdida no meio do grupo do zap",
          depois: "Banco de fotos pesquisável por unidade e período",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "Cadastra as unidades e os modelos",
          texto:
            "Lojas, filiais, restaurantes, condomínios, obras. Os checklists são seus: item de Sim/Não, nota de 0 a 10, texto ou foto obrigatória, cada um com o peso que tem na conta final.",
        },
        {
          n: "2",
          titulo: "O inspetor preenche pelo WhatsApp",
          texto:
            "Você manda o link pro celular dele. Ele responde sem criar conta e sem senha, e a foto vai junto do item — não num grupo separado.",
        },
        {
          n: "3",
          titulo: "A nota aparece e o alerta dispara",
          texto:
            "Conformidade por unidade, ranking entre filiais e evolução semana a semana. Se a nota cair do limite, dono e responsável da unidade recebem aviso no WhatsApp.",
        },
      ]}
      blocos={[
        {
          icone: "✅",
          titulo: "O inspetor responde onde ele já está",
          texto:
            "Sistema que exige app, cadastro e senha é sistema que o campo não usa — e checklist não preenchido é pior que checklist nenhum, porque dá a sensação de controle. Por isso a ronda acontece no WhatsApp, que o inspetor já tem aberto.",
          itens: [
            "Link enviado pro celular do inspetor, sem conta e sem app",
            "Sem senha pra esquecer e sem treinamento pra dar",
            "Foto tirada na hora vai anexada ao item, não solta no grupo",
            "Observação escrita no próprio item, junto da resposta",
          ],
        },
        {
          icone: "🧱",
          titulo: "O checklist é seu, não um modelo pronto",
          texto:
            "Cada operação tem o seu ponto crítico, e nem todo item vale o mesmo: temperatura de câmara fria não pesa igual a lâmpada queimada. O peso por item é o que faz a nota final querer dizer alguma coisa.",
          itens: [
            "Itens de Sim/Não, nota de 0 a 10, texto livre ou foto obrigatória",
            "Peso por item, pra o crítico pesar mais que o cosmético",
            "Um modelo por rotina: abertura, fechamento, manutenção, auditoria",
            "Agendamento recorrente diário, semanal ou mensal",
            "O mesmo modelo aplicado em todas as unidades, do mesmo jeito",
          ],
        },
        {
          icone: "📈",
          titulo: "O que não conforma aparece",
          texto:
            "Uma unidade com 97% e outra com 55% não podem receber a mesma cobrança. O ranking existe pra isso: mostrar onde o padrão está caindo antes de virar reclamação de cliente, e mostrar a evolução pra você saber se a conversa surtiu efeito.",
          itens: [
            "Conformidade por unidade, calculada com o peso de cada item",
            "Ranking automático entre as unidades do período",
            "Evolução semana a semana, pra ver tendência e não só o dia ruim",
            "Execuções pendentes destacadas, com o que falta resolver",
            "Alerta no WhatsApp quando a conformidade fica abaixo do limite",
          ],
          print: {
            arquivo: "/prints/rotinapro-0.jpg",
            legenda:
              "Evolução da conformidade, ranking das unidades e execuções recentes",
          },
        },
        {
          icone: "📸",
          titulo: "Evidência que você acha depois",
          texto:
            "A foto só vale se alguém conseguir encontrar ela três meses depois, quando a discussão aparecer. No banco de fotos ela fica ligada à unidade, ao modelo e à data — não enterrada em dois mil arquivos de um grupo de WhatsApp.",
          itens: [
            "Banco de fotos pesquisável por unidade, modelo e período",
            "Cada foto amarrada ao item da ronda em que foi tirada",
            "Histórico das execuções pra comparar mês a mês",
            "Evidência pra mostrar pro franqueador, pro cliente ou pro seguro",
          ],
        },
        {
          icone: "🏬",
          titulo: "Uma rede inteira no mesmo padrão",
          texto:
            "Comparar filial com filial é o que faz o padrão subir. Pra isso as unidades precisam estar cadastradas do mesmo jeito, cada uma com o seu responsável — é quem recebe a cobrança quando a nota da unidade cai.",
          itens: [
            "Unidades com código, cidade, tipo e responsável",
            "Importação por CSV, pra não cadastrar rede inteira na mão",
            "Responsável da unidade notificado junto com o dono",
            "Equipe de inspetores com os dados separados por empresa",
          ],
          print: {
            arquivo: "/prints/rotinapro-1.jpg",
            legenda:
              "Unidades cadastradas, com código, cidade e responsável de cada uma",
          },
        },
      ]}
      prints={[
        {
          arquivo: "/prints/rotinapro-0.jpg",
          legenda: "Ranking das unidades e evolução da conformidade",
        },
        {
          arquivo: "/prints/rotinapro-1.jpg",
          legenda: "As unidades da rede, cada uma com o seu responsável",
        },
      ]}
      paraQuem={[
        {
          icone: "🏬",
          titulo: "Rede com várias unidades",
          texto:
            "Onde comparar filial com filial é justamente o que faz o padrão subir.",
        },
        {
          icone: "🧹",
          titulo: "Facilities e limpeza",
          texto:
            "Ronda com foto obrigatória, feita por quem está no campo e não no escritório.",
        },
        {
          icone: "🏗️",
          titulo: "Segurança e manutenção",
          texto:
            "Checklist periódico que precisa de evidência, não de assinatura no fim do dia.",
        },
      ]}
      naoServe={[
        "Você tem uma unidade só e o checklist cabe na sua cabeça — o sistema rende quando há comparação entre unidades",
        "Você precisa de ordem de serviço com peça, mão de obra e custo: isso é manutenção, e o RotinaPro faz inspeção",
        "Você quer que o sistema execute a rotina: ele cobra, registra e mostra a nota, mas quem fecha o freezer é a sua equipe",
      ]}
      planos={[
        {
          nome: "Pro",
          preco: "R$ 49",
          publico: "Até 10 unidades, checklists ilimitados",
          destaque: true,
          itens: [
            "Até 10 unidades",
            "Modelos e execuções ilimitados",
            "Banco de fotos de 5 GB",
            "Inspetor preenchendo pelo WhatsApp",
            "KPI por unidade e ranking automático",
            "Alertas de conformidade",
            "Suporte por e-mail e WhatsApp",
          ],
          ctaLabel: "Assinar o Pro",
          ctaHref: ASSINAR_PRO,
        },
        {
          nome: "Empresa",
          preco: "R$ 149",
          publico: "Várias filiais ou franquia",
          itens: [
            "Unidades ilimitadas",
            "Banco de fotos de 50 GB",
            "Sub-usuários com perfis",
            "Grupos consolidados de mais de um CNPJ",
            "Relatórios em PDF mensais",
            "Onboarding dedicado",
            "Suporte prioritário",
          ],
          ctaLabel: "Falar sobre o Empresa",
          ctaHref: FALAR_EMPRESA,
        },
      ]}
      notaPlanos="Começa no Pro e sobe quando a rede crescer — a diferença entre os planos é número de unidades e espaço de foto, não recurso escondido."
      faq={[
        {
          p: "Meu inspetor não é bom com sistema. Funciona?",
          r: "É exatamente por isso que ele responde no WhatsApp, que é o aplicativo que ele já usa o dia inteiro. Não tem login, não tem app pra instalar, não tem senha pra esquecer: ele abre o link que você mandou, responde os itens e tira as fotos.",
        },
        {
          p: "Serve pra quantas unidades?",
          r: "De uma a dezenas. O plano Pro atende até 10 unidades e o Empresa não tem limite. O sistema fica mais útil quanto mais unidades você tem, porque é a comparação entre elas que mostra qual filial cuida e qual só assina o papel.",
        },
        {
          p: "Como eu sei que a ronda foi feita mesmo, e não no fim do dia?",
          r: "Cada execução fica registrada com data e hora, e os itens de foto exigem a imagem daquele item — não dá pra fechar a ronda sem ela. As execuções que estavam agendadas e não aconteceram aparecem como pendentes no painel.",
        },
        {
          p: "Posso ter checklists diferentes por tipo de unidade?",
          r: "Pode. Você cria quantos modelos quiser — abertura, fechamento, manutenção, auditoria — e aplica cada um onde faz sentido. Loja e depósito não precisam responder a mesma lista.",
        },
        {
          p: "Quem recebe o alerta quando a nota cai?",
          r: "Você define o limite de conformidade. Quando uma execução fica abaixo dele, o aviso vai no WhatsApp pro dono e pro responsável daquela unidade — a cobrança chega em quem pode resolver.",
        },
        {
          p: "As fotos ficam guardadas onde, e por quanto tempo?",
          r: "Ficam no banco de fotos do sistema, pesquisável por unidade, modelo e período: 5 GB no Pro e 50 GB no Empresa. Elas continuam lá enquanto a assinatura estiver ativa, ligadas à ronda em que foram tiradas.",
        },
        {
          p: "O que acontece se eu cancelar?",
          r: "Não tem fidelidade nem multa: você cancela e o acesso vai até o fim do período já pago. Antes de encerrar, chama no WhatsApp que a gente separa o histórico das execuções e as fotos pra você — a evidência é sua e sai com você.",
        },
      ]}
      fechamento={{
        titulo: "Padrão que não é medido é só discurso",
        texto:
          "Cadastra uma unidade, roda a primeira ronda e olha a nota. São 3 dias grátis, sem cartão — se a sua operação não precisa disso, melhor descobrir agora.",
      }}
    />
  );
}
