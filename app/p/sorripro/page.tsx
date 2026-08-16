import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "SorriPro — a clínica odontológica inteira num sistema só",
  description:
    "Agenda por dentista e por cadeira, prontuário com odontograma clicável, plano de tratamento que vira parcela no financeiro e site da clínica com marcação online. Software de gestão pra consultório e clínica odontológica.",
};

/* Landing independente do SorriPro (/p/sorripro), no padrão do /p/silopro.

   DOIS CUIDADOS QUE VALEM MAIS QUE O TEXTO — não afrouxar em revisão futura:

   1) Publicidade odontológica é regulada pelo CFO. Esta página vende SOFTWARE
      pro dentista, não tratamento pro paciente. Nada de promessa de resultado
      clínico, nada de "antes e depois" de paciente, nada de tabela de preço de
      procedimento oferecida ao público. Todo número que aparece aqui é preço
      da assinatura do sistema.

   2) Prontuário é dado sensível. Nenhum print com nome, CPF ou ficha de
      paciente entra aqui. O único print usado (public/prints/sorripro-1.jpg) é
      o catálogo de procedimentos da clínica FICTÍCIA da demonstração — a
      própria tela carrega o aviso de "modo demonstração", e a legenda deixa
      claro que os valores são fictícios e definidos por cada clínica. Se
      surgirem telas novas, valem as mesmas duas regras.

   Fatos vindos de app/sorripro/page.tsx. Nada foi inventado. */

const TRIAL = "https://sorripro.luqsys.com.br/cadastro?trial=1";
const DEMO = "https://sorripro.luqsys.com.br/demo";
const ASSINAR =
  "https://wa.me/5545991077788?text=Quero%20assinar%20o%20SorriPro";

export default function SorriProLanding() {
  return (
    <LandingLayout
      slug="sorripro"
      nome="SorriPro"
      icone="🦷"
      whatsapp="5545991077788"
      promessa="A clínica inteira num sistema só"
      subpromessa={
        <>
          Agenda, prontuário e financeiro no mesmo lugar — com{" "}
          <strong className="text-white">odontograma clicável</strong> e o
          tratamento aprovado virando parcela sem passar por planilha.
        </>
      }
      ctaPrincipal={{ label: "Testar 3 dias grátis", href: TRIAL }}
      ctaSecundaria={{ label: "Ver a demonstração", href: DEMO }}
      notaCta="✦ Sem cartão de crédito · sem fidelidade · demonstração com clínica fictícia"
      problema={{
        titulo: "Prontuário no papel, agenda no caderno, cobrança na memória",
        paragrafos: [
          "A ficha do paciente está numa pasta que alguém precisa achar antes da consulta. A agenda é um caderno na recepção, com rasura de remarcação e um encaixe escrito na margem. Quando duas pessoas mexem no mesmo caderno, aparece paciente marcado em cima de paciente.",
          "O que foi feito na última sessão está na cabeça de quem atendeu. Se foi outro profissional, se faz seis meses, se o paciente sumiu e voltou — a conversa começa do zero, e a alergia que ele contou uma vez está numa linha escrita a lápis em algum lugar daquela pasta.",
          "E tem o tratamento que o paciente aprovou e ninguém cobrou: o orçamento saiu, a primeira sessão aconteceu, o resto ficou no ar. Isso não aparece em lugar nenhum, porque não existe uma tela onde o plano aprovado esteja ligado às parcelas. O SorriPro junta as três pontas — agenda, prontuário e financeiro — na mesma clínica.",
        ],
      }}
      antesDepois={[
        {
          antes: "Ficha de papel numa pasta, achada antes de cada consulta",
          depois: "Prontuário na tela, com odontograma e histórico por sessão",
        },
        {
          antes: "Agenda em caderno, com rasura e paciente em cima de paciente",
          depois: "Agenda por dentista e por cadeira, sem sobreposição",
        },
        {
          antes: "Alergia lembrada por quem atendeu daquela vez",
          depois: "Alerta da anamnese na tela antes de anestesiar",
        },
        {
          antes: "Orçamento aprovado que some depois da primeira sessão",
          depois: "Plano aprovado gerando as parcelas no contas a receber",
        },
        {
          antes: "Recepção parando o atendimento pra atender o telefone",
          depois: "Paciente marcando pelo site, nos horários realmente vagos",
        },
        {
          antes: "Falta descoberta quando a cadeira já está vazia",
          depois: "Confirmação e lembrete automáticos por WhatsApp e e-mail",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "Cadastra a equipe e o horário",
          texto:
            "Cada dentista com CRO, especialidade e horário por dia da semana. O sistema já vem com procedimentos odontológicos pré-cadastrados, com duração e valor sugerido — você ajusta pra tabela da sua clínica.",
        },
        {
          n: "2",
          titulo: "Atende com o prontuário na tela",
          texto:
            "Odontograma clicável dente a dente e face a face, anamnese com alerta de alergia, evolução por sessão e os exames anexados na própria ficha. Do orçamento sai o parcelamento direto no financeiro.",
        },
        {
          n: "3",
          titulo: "Deixa o paciente marcar sozinho",
          texto:
            "O site da clínica mostra os horários realmente vagos. O paciente escolhe, o cadastro é criado e a recepção recebe o aviso no WhatsApp — e ele ainda aprova o orçamento pelo portal.",
        },
      ]}
      blocos={[
        {
          icone: "🦷",
          titulo: "Prontuário feito pra dentista, não formulário genérico",
          texto:
            "Software de clínica que não entende dente vira campo de texto livre — e o que está escrito em texto livre ninguém consulta depois. Aqui o registro é por dente e por face, do jeito que o atendimento acontece.",
          itens: [
            "Odontograma clicável em notação FDI, do 11 ao 48",
            "Registro por face do dente, não só por dente",
            "Evolução clínica por sessão, com dente e profissional",
            "Anamnese com alerta de alergia visível antes de anestesiar",
            "Radiografia, foto, atestado e documento anexados na ficha",
          ],
        },
        {
          icone: "🗓️",
          titulo: "A cadeira não fica vazia",
          texto:
            "Cadeira parada é custo fixo rodando sem faturamento. A agenda acompanha o ciclo real do atendimento, então dá pra saber quem chegou, quem está na sala e quem não apareceu — e medir isso no fim do mês.",
          itens: [
            "Agenda visual por dentista e por cadeira, no dia e na semana",
            "Ciclo completo: pendente, confirmado, sala de espera, em atendimento, atendido",
            "Encaixe e remarcação sem perder o histórico do paciente",
            "Confirmação e lembrete automáticos por WhatsApp e e-mail",
            "Taxa de faltas no painel, pra você medir e não achar",
          ],
        },
        {
          icone: "💰",
          titulo: "O tratamento aprovado não some mais",
          texto:
            "O prejuízo silencioso da clínica é o plano que o paciente aprovou e ninguém acompanhou. Quando o orçamento aprovado gera as parcelas sozinho, cobrar deixa de depender da memória de alguém.",
          itens: [
            "Catálogo de procedimentos com duração e valor da sua clínica",
            "Plano de tratamento com aprovação do paciente registrada",
            "Parcelamento gerado automaticamente a partir do plano",
            "Contas a receber em dinheiro, PIX, cartão ou convênio",
            "Faturamento e consultas do dia no painel da clínica",
          ],
          print: {
            arquivo: "/prints/sorripro-1.jpg",
            legenda:
              "Catálogo de procedimentos na clínica fictícia da demonstração — cada clínica define a própria tabela",
          },
        },
        {
          icone: "🌐",
          titulo: "O paciente marca sozinho e acompanha",
          texto:
            "Boa parte do telefone da recepção é pra marcar, remarcar e perguntar quanto ficou. O site e o portal tiram isso da fila — e o site sai dentro das regras de publicidade odontológica do CFO, sem promessa de resultado.",
          itens: [
            "Site da clínica com marcação online, nos horários realmente vagos",
            "Cadastro do paciente criado na hora da marcação",
            "Aviso no WhatsApp pra recepção a cada agendamento novo",
            "Portal do paciente com consultas, histórico e aprovação do orçamento",
            "Publicidade dentro das regras do CFO: serviço e credencial, não promessa",
          ],
        },
        {
          icone: "👥",
          titulo: "Cada um vê o que é da sua função",
          texto:
            "Prontuário é dado sensível e não pode circular pela clínica inteira só porque todo mundo usa o mesmo computador. Os perfis existem pra isso — e a agenda separada por profissional é o que faz a comissão fechar sem discussão.",
          itens: [
            "Três perfis: administrador, dentista e recepção",
            "Recepção marca e cobra, mas não abre o prontuário",
            "Agenda própria de cada dentista, com o horário dele",
            "Comissão separada por profissional",
            "Painel com faturamento, consultas do dia e aniversariantes",
          ],
        },
      ]}
      prints={[
        {
          arquivo: "/prints/sorripro-1.jpg",
          legenda:
            "Procedimentos da clínica de demonstração: duração define o slot na agenda e o valor alimenta o orçamento (dados fictícios)",
        },
      ]}
      paraQuem={[
        {
          icone: "🦷",
          titulo: "Clínica de um a cinco dentistas",
          texto:
            "Onde o prontuário ainda é papel e a agenda ainda é caderno de recepção.",
        },
        {
          icone: "🪑",
          titulo: "Quem divide cadeira",
          texto:
            "Agenda por cadeira, e não só por profissional, pra dois não caírem na mesma sala.",
        },
        {
          icone: "🌐",
          titulo: "Clínica sem site",
          texto:
            "Site próprio com marcação online, dentro das regras de publicidade do CFO.",
        },
      ]}
      naoServe={[
        "Você precisa de faturamento TISS e integração com convênio: o financeiro aqui é da clínica, não do plano",
        "Sua clínica é médica, e não odontológica — o odontograma é o coração do sistema e não faz sentido fora da odontologia",
        "Você quer só uma agenda: aqui vêm prontuário, plano de tratamento e financeiro no mesmo pacote",
      ]}
      planos={[
        {
          nome: "Pro",
          preco: "R$ 49",
          publico: "Clínicas e consultórios odontológicos",
          destaque: true,
          itens: [
            "Dentistas, pacientes e consultas ilimitados",
            "Prontuário eletrônico completo com odontograma",
            "Plano de tratamento e contas a receber",
            "Portal do paciente incluso",
            "Site da clínica com marcação online",
            "WhatsApp automático de confirmação e lembrete",
            "Equipe ilimitada com permissões por perfil",
            "Suporte por WhatsApp",
          ],
          ctaLabel: "Assinar o Pro",
          ctaHref: ASSINAR,
        },
      ]}
      notaPlanos="Preço da assinatura do sistema, por clínica — não cobramos por dentista nem por paciente cadastrado."
      faq={[
        {
          p: "Tenho vários dentistas. Dá pra separar agenda e comissão de cada um?",
          r: "Dá. Cada dentista tem CRO, especialidade e horário próprios, e a agenda dele é dele — o que aparece no site pra marcação é o horário real daquele profissional. A comissão é separada por profissional, e o que cada um atendeu fica registrado na evolução da sessão, então o fechamento sai do próprio histórico em vez de sair de uma planilha paralela.",
        },
        {
          p: "A recepção vai enxergar o prontuário dos pacientes?",
          r: "Não, se você não quiser. São três perfis: administrador, dentista e recepção. A recepção marca consulta, cadastra paciente e cuida do financeiro, mas não abre a ficha clínica. Prontuário é dado sensível e o acesso acompanha a função de cada um.",
        },
        {
          p: "O site da clínica pode divulgar preço e caso de paciente?",
          r: "Publicidade odontológica é regulada pelo CFO, e o site que sai do SorriPro é montado dentro dessa régua: divulga os serviços, a credencial dos profissionais e a marcação online, sem preço de procedimento, sem promessa de resultado e sem foto de antes e depois de paciente. A tabela de valores fica dentro do sistema, pra uso da clínica e pro orçamento do paciente — não na vitrine.",
        },
        {
          p: "O paciente precisa instalar alguma coisa pra usar o portal?",
          r: "Não. Ele abre o link no navegador do celular, vê as consultas e o histórico dele e aprova o orçamento por ali mesmo. Sem app e sem instalação.",
        },
        {
          p: "E as fichas de papel que eu já tenho?",
          r: "A migração que compensa é começar pelos pacientes ativos: você cadastra o paciente, registra a situação atual no odontograma e segue dali. A ficha antiga pode ser digitalizada e anexada na própria ficha do sistema, pra continuar acessível sem precisar redigitar anos de histórico.",
        },
        {
          p: "Consigo ver como foi o mês da clínica?",
          r: "O painel mostra faturamento, consultas do dia, taxa de faltas e aniversariantes, e o contas a receber mostra o que está em aberto. É o suficiente pra saber se o mês fechou pelo que foi feito ou só pelo que foi marcado.",
        },
        {
          p: "O que acontece se eu cancelar?",
          r: "Não tem fidelidade nem multa: você cancela e o acesso vai até o fim do período já pago. A guarda do prontuário é obrigação da clínica, então antes de encerrar chama no WhatsApp que a gente separa os dados dos seus pacientes e o histórico financeiro pra você levar — a gente não segura prontuário de ninguém como refém.",
        },
      ]}
      fechamento={{
        titulo: "Sua agenda não devia morar num caderno",
        texto:
          "Testa 3 dias, sem cartão, com a clínica fictícia da demonstração pra você mexer à vontade. Se não fizer sentido pra sua clínica, é só parar.",
      }}
    />
  );
}
