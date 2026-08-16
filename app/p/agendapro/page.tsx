import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "AgendaPro — seu cliente reserva sozinho, sem passar por você",
  description:
    "Um link público onde o cliente escolhe o horário que existe de verdade. Arena, barbearia, lavagem, estética, clínica e personal: agenda, financeiro e clientes num painel só, com aviso no WhatsApp a cada reserva.",
};

/* Landing independente do AgendaPro (/p/agendapro), no padrão do /p/silopro.
   Fora do site da Luqsys: topo com o nome do produto, sem menu da casa, pra
   um dia virar domínio próprio sem desmontar nada.

   Fatos vêm todos de app/agendapro/page.tsx (a página curta dentro do site):
   link público de auto-agendamento, 7 verticais com preset, recursos/serviços/
   profissionais/turmas, horário exclusivo de mensalista, bloqueios, detecção
   de conflito, aviso no WhatsApp, multi-usuário e plano Pro R$ 99. Nada foi
   inventado aqui — se não estava lá ou na tela do print, não entrou.

   Prints reais em public/prints/agendapro-{0,1}.jpg. O Lucas cobrou que as
   telas APAREÇAM ao longo da página: por isso cada uma está pendurada num
   bloco de recurso (metade da rolagem) e as duas repetem na galeria. */

const TRIAL = "https://agendapro.luqsys.com.br/cadastro?trial=1";
const DEMO = "https://agendapro.luqsys.com.br/demo";
const ASSINAR = "https://www.asaas.com/c/7pi900esfhsvb5rl";

export default function AgendaProLanding() {
  return (
    <LandingLayout
      slug="agendapro"
      nome="AgendaPro"
      icone="📅"
      whatsapp="5545991077788"
      promessa="Seu cliente reserva sozinho"
      subpromessa={
        <>
          Um link que mostra{" "}
          <strong className="text-white">só os horários que existem</strong> —
          o cliente escolhe, confirma e cai na sua agenda sem você responder
          nada.
        </>
      }
      ctaPrincipal={{ label: "Testar 3 dias grátis", href: TRIAL }}
      ctaSecundaria={{ label: "Ver a demonstração", href: DEMO }}
      notaCta="✦ Sem cartão de crédito · sem fidelidade · seu cliente não instala nada"
      problema={{
        titulo: "Agendar pelo WhatsApp virou o seu segundo emprego",
        paragrafos: [
          "“Tem horário sábado?” — e lá vai você: abrir a agenda, ver o que está livre, responder, anotar num canto, lembrar de confirmar no dia anterior e, no meio disso tudo, descobrir que marcou dois no mesmo horário. A conversa leva dez mensagens pra resolver um encaixe de uma hora.",
          "O pior nem é o tempo. É que você responde tarde da noite, no meio do atendimento, dirigindo — e quando demora, o cliente marca em outro lugar. O horário que ficou vago ninguém preencheu porque ninguém soube que estava vago.",
          "O AgendaPro te dá um link público. O cliente abre, vê os horários que realmente existem, escolhe e pronto: a reserva já entra na sua agenda e você recebe o aviso no WhatsApp. Marcar dois no mesmo horário o sistema não deixa acontecer.",
        ],
      }}
      antesDepois={[
        {
          antes: "Responder “tem horário?” dez vezes por dia",
          depois: "Mandar o link uma vez e o cliente se resolver sozinho",
        },
        {
          antes: "Anotar no caderno e torcer pra não repetir horário",
          depois: "Conflito bloqueado pelo sistema na hora da reserva",
        },
        {
          antes: "Descobrir que a quadra ficou vazia sábado à tarde",
          depois: "Horário vago visível no link pra quem quiser pegar",
        },
        {
          antes: "Mensalista brigando por horário com quem marcou avulso",
          depois: "Horário exclusivo do mensalista fechado pro público",
        },
        {
          antes: "Não saber quem já pagou e quem ficou devendo",
          depois: "Cada reserva com valor e status de pagamento na lista",
        },
        {
          antes: "Feriado e manutenção lembrados só quando o cliente aparece",
          depois: "Bloqueio pontual e o link para de oferecer aquele dia",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "Escolhe o tipo do negócio",
          texto:
            "Arena, barbearia, lavagem, estética, clínica, personal ou genérico. O sistema já cria recursos, serviços e horários com a linguagem do seu ramo — quadra, cadeira, box, sala.",
        },
        {
          n: "2",
          titulo: "Ajusta em uma sentada",
          texto:
            "Edita recursos, serviços, profissionais, horário de funcionamento e preço. Importa os clientes que você já tem e põe a sua cor e o seu logo no link.",
        },
        {
          n: "3",
          titulo: "Manda o link e para de responder",
          texto:
            "Cola o seu link no WhatsApp, no Instagram ou na bio. O cliente reserva sozinho e você recebe o aviso no WhatsApp a cada reserva nova.",
        },
      ]}
      blocos={[
        {
          icone: "🔗",
          titulo: "O cliente marca sozinho, sem app e sem cadastro",
          texto:
            "O link público é o coração do sistema: ele mostra só o que está realmente livre. É isso que tira você do meio da conversa — não existe horário pra negociar, existe horário pra clicar.",
          itens: [
            "Link público próprio, aberto no navegador do celular do cliente",
            "Sem login, sem senha e sem instalar nada",
            "Horários por dia da semana, com o tamanho de slot que você define",
            "Detecção automática de conflito: dois no mesmo horário não passa",
            "Bloqueio pontual pra feriado, manutenção ou torneio",
          ],
        },
        {
          icone: "🗓️",
          titulo: "O dia inteiro numa tela",
          texto:
            "Quem marcou, a que horas, em qual recurso e com qual profissional — tudo junto. Você abre uma vez de manhã e sabe como vai ser o dia, em vez de reconstruir isso rolando conversa de WhatsApp.",
          itens: [
            "Painel com os agendamentos de hoje e dos próximos dias",
            "Agenda por recurso e por profissional, cada um com a sua",
            "Reserva lançada pelo painel some do link público na hora",
            "Aviso no WhatsApp a cada reserva feita pelo cliente",
          ],
          print: {
            arquivo: "/prints/agendapro-0.jpg",
            legenda:
              "Painel do dia: próximos agendamentos, recurso, horário e valor",
          },
        },
        {
          icone: "🎯",
          titulo: "Do jeito que o seu negócio agenda",
          texto:
            "Quadra não agenda igual barbearia, que não agenda igual lavagem. Em vez de um calendário genérico, o sistema já vem com o vocabulário e as regras de cada ramo prontos — você ajusta, não monta do zero.",
          itens: [
            "7 verticais com preset: arena, barbearia, lavagem, estética, clínica, personal e genérico",
            "Recursos limitados que não podem dobrar: quadra, cadeira, box, sala",
            "Serviços com duração e preço próprios",
            "Vários profissionais, cada um com a própria agenda",
            "Turmas e aulas em grupo com número de vagas",
          ],
        },
        {
          icone: "💰",
          titulo: "Quem pagou e quem ficou devendo",
          texto:
            "Agenda cheia não é o mesmo que mês bom. A reserva carrega o valor e o status do pagamento, então o controle do dinheiro sai da mesma tela em que você marca — sem planilha paralela pra fechar o mês.",
          itens: [
            "Valor por serviço e por recurso, do jeito que você cobra",
            "Status de cada reserva: pago, confirmado ou cancelado",
            "Filtro por período pra ver o movimento da semana ou do mês",
            "Faturamento do mês somando sozinho no painel",
          ],
          print: {
            arquivo: "/prints/agendapro-1.jpg",
            legenda:
              "Reservas do período, com cliente, valor e situação do pagamento",
          },
        },
        {
          icone: "👥",
          titulo: "Cliente fiel, equipe e a sua cara no link",
          texto:
            "Quem sustenta o mês é o cliente que volta toda semana. O sistema trata mensalista como mensalista, e o link que ele abre é seu — com o seu logo e a sua cor, não com a marca de um app qualquer.",
          itens: [
            "Cadastro de clientes, com importação dos que você já tem",
            "Cliente mensalista com horário exclusivo, fora do público",
            "Cor e logo personalizados no link público",
            "Multi-usuário com permissão de operador e de visualizador",
          ],
        },
      ]}
      prints={[
        {
          arquivo: "/prints/agendapro-0.jpg",
          legenda: "O painel do dia, com os próximos agendamentos",
        },
        {
          arquivo: "/prints/agendapro-1.jpg",
          legenda: "As reservas do período, com valor e pagamento",
        },
      ]}
      paraQuem={[
        {
          icone: "🏐",
          titulo: "Arena e quadra",
          texto:
            "Horário fixo de mensalista convivendo com avulso, sem ninguém marcar por cima.",
        },
        {
          icone: "💈",
          titulo: "Barbearia e salão",
          texto:
            "Vários profissionais, cada um com a própria agenda e o próprio horário.",
        },
        {
          icone: "🚿",
          titulo: "Lavagem e serviço por hora",
          texto:
            "Recurso limitado — box, cadeira, máquina — que não pode ser vendido duas vezes.",
        },
      ]}
      naoServe={[
        "Você atende por ordem de chegada, sem hora marcada: aqui tudo gira em torno do horário reservado",
        "Você quer prontuário e ficha clínica junto da agenda — pra clínica odontológica o certo é o SorriPro",
        "Você precisa que o sistema cobre o cliente no cartão na hora da reserva: aqui a reserva registra o valor e o status, o pagamento você combina do seu jeito",
      ]}
      planos={[
        {
          nome: "Pro",
          preco: "R$ 99",
          publico: "Qualquer negócio que marca hora",
          destaque: true,
          itens: [
            "Recursos, serviços e profissionais ilimitados",
            "Clientes ilimitados",
            "Link público próprio, com a sua cor e o seu logo",
            "Notificação no WhatsApp a cada reserva",
            "Turmas e aulas em grupo com vagas",
            "Mensalistas com horários exclusivos",
            "Multi-usuário com permissões",
            "Suporte por WhatsApp",
          ],
          ctaLabel: "Assinar o Pro",
          ctaHref: ASSINAR,
        },
      ]}
      notaPlanos="Um preço só, sem cobrar por reserva — semana cheia não pode sair mais cara que semana fraca."
      faq={[
        {
          p: "Meu cliente precisa baixar app?",
          r: "Não. Ele abre o link, escolhe o horário e pronto — funciona no navegador do celular dele, sem cadastro, sem senha e sem instalar nada.",
        },
        {
          p: "E quem prefere marcar pelo WhatsApp?",
          r: "Continua marcando com você. Você lança a reserva no painel e o horário some do link público na hora. Os dois caminhos usam a mesma agenda, então não tem como um cliente pegar o horário que você acabou de dar pra outro.",
        },
        {
          p: "Como o sistema evita que dois marquem no mesmo horário?",
          r: "O recurso é limitado por natureza: uma quadra, uma cadeira, um box. Quando alguém reserva, aquele intervalo daquele recurso deixa de aparecer pra todo mundo, e o sistema recusa qualquer tentativa de sobrepor.",
        },
        {
          p: "Tenho mensalista com horário fixo. Como fica?",
          r: "O mensalista tem horário exclusivo: você reserva aquele intervalo pra ele e o link público simplesmente não oferece esse horário pros avulsos. Ele não precisa correr toda semana pra garantir o de sempre.",
        },
        {
          p: "E aula em grupo, dá pra controlar as vagas?",
          r: "Dá. Turma tem número de vagas: o cliente vê quantas sobraram e a turma fecha sozinha quando lota — não é uma reserva de horário só, é uma lista com limite.",
        },
        {
          p: "Mais de uma pessoa pode mexer na agenda?",
          r: "Pode. Você cria usuários com permissão de operador, que marca e altera, ou de visualizador, que só olha. Cada um entra com o próprio acesso.",
        },
        {
          p: "O que acontece se eu cancelar?",
          r: "Não tem fidelidade nem multa: você cancela a assinatura e o acesso vai até o fim do período que já está pago, sem ligação de retenção. Se quiser levar a lista de clientes e o histórico de reservas, chama no WhatsApp antes de encerrar que a gente separa os dados pra você.",
        },
      ]}
      fechamento={{
        titulo: "Manda o link e vai atender",
        texto:
          "Testa 3 dias, sem cartão. Se no fim disso você ainda estiver respondendo “tem horário sábado?”, a gente errou.",
      }}
    />
  );
}
