import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "AgendaPro — Auto-agendamento online pro seu negócio",
  description:
    "Arena esportiva, barbearia, lavagem, estética, clínica, personal: 1 link público pro cliente reservar sozinho. Multi-vertical com painel completo, link único, WhatsApp automático.",
};

export default function AgendaProPage() {
  return (
    <ProductLayout
      tema="agendapro"
      icone="📅"
      nome="AgendaPro"
      tagline="Seu cliente reserva sozinho. Sem WhatsApp manual."
      descricao={
        <>
          Para <strong className="text-white">arenas esportivas, barbearias, lavagens, salões,
          clínicas e personal trainers</strong>: um link público de auto-agendamento
          onde o cliente escolhe horário, recurso e profissional. Você só vê a agenda
          encher.
        </>
      }
      passos={[
        {
          n: "1",
          titulo: "Escolhe o tipo do negócio",
          texto:
            "Arena, barbearia, lavagem, estética, clínica, personal ou genérico. O sistema cria recursos, serviços e horários iniciais com a linguagem do seu ramo (Quadra/Cadeira/Box/Sala etc).",
        },
        {
          n: "2",
          titulo: "Ajusta tudo em 5 minutos",
          texto:
            "Edita recursos, serviços, profissionais, horários de funcionamento, preços. Importa clientes que você já tem.",
        },
        {
          n: "3",
          titulo: "Manda o link e relaxa",
          texto:
            "Cola o seu link único (ex: /a/sua-arena) no WhatsApp, Instagram ou bio. Cliente entra, escolhe e reserva sozinho. Você recebe notificação no WhatsApp.",
        },
      ]}
      problema={{
        titulo: "Agendar pelo WhatsApp é o seu segundo emprego",
        texto: (
          <>
            <p>
              "Tem horário sábado?" — e lá vai você olhar a agenda, responder,
              anotar, lembrar de confirmar, e descobrir na hora que marcou dois
              no mesmo horário.
            </p>
            <p>
              O AgendaPro dá um link pro cliente reservar sozinho, vendo só os
              horários que existem de verdade. Conflito o sistema não deixa
              acontecer.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "🔗",
          titulo: "O cliente marca sozinho",
          texto:
            "Um link público, sem login e sem app. Ele escolhe o horário que existe — e você para de ser o intermediário.",
          itens: [
            "Link público de auto-agendamento",
            "Horários por dia da semana com slots configuráveis",
            "Detecção automática de conflito",
            "Bloqueios pontuais: feriado, manutenção, torneio",
          ],
        },
        {
          icone: "🎯",
          titulo: "Do jeito do seu negócio",
          texto:
            "Quadra, barbearia, lavagem, clínica: cada um agenda diferente, e os presets já vêm montados.",
          itens: [
            "7 verticais com presets prontos",
            "Recursos, serviços, profissionais e turmas",
            "Horário exclusivo pra mensalista e VIP",
            "Aulas em grupo com vaga limitada",
          ],
        },
      ]}
      praQuem={[
        {icone:"🏐", titulo:"Arena e quadra", texto:"Horário fixo de mensalista convivendo com avulso, sem conflito."},
        {icone:"💈", titulo:"Barbearia e salão", texto:"Vários profissionais, cada um com a própria agenda."},
        {icone:"🚿", titulo:"Lavagem e serviço por hora", texto:"Recurso limitado (box, cadeira, máquina) que não pode dobrar."},
      ]}
      naoServe={[
        "Você atende só por ordem de chegada, sem hora marcada",
        "Você quer prontuário e ficha clínica junto: pra clínica odontológica o certo é o SorriPro",
      ]}
      faq={[
        {
          p: "Meu cliente precisa baixar app?",
          r: "Não. Ele abre o link, escolhe o horário e pronto — funciona no navegador do celular dele, sem cadastro nem instalação.",
        },
        {
          p: "E quem prefere marcar pelo WhatsApp?",
          r: "Continua marcando: você lança na agenda pelo painel e o horário some do link público na hora. Os dois caminhos usam a mesma agenda.",
        },
      ]}
      features={[
        "Link público de auto-agendamento (cliente reserva sem login)",
        "7 verticais com presets prontos (arena/barbearia/lavagem/etc)",
        "Recursos, serviços, profissionais e turmas/aulas em grupo",
        "Horários por dia da semana com slots configuráveis",
        "Horários exclusivos só pra clientes mensalistas/VIP",
        "Bloqueios pontuais (feriado, manutenção, torneio)",
        "Detecção automática de conflito de horário",
        "Notificação WhatsApp pro admin a cada reserva",
        "Painel completo: agenda, financeiro, clientes",
        "Cor e logo personalizáveis no link público",
        "Multi-usuário com permissões (operador/visualizador)",
      ]}
      planos={[
        {
          nome: "Pro",
          publico: "Qualquer negócio com auto-agendamento",
          precoLabel: "R$ 99",
          features: [
            "Recursos, serviços e profissionais ilimitados",
            "Clientes ilimitados",
            "Link público próprio (slug)",
            "Notificações WhatsApp",
            "Turmas/aulas em grupo com vagas",
            "Clientes mensalistas com horários exclusivos",
            "Multi-usuário com permissões",
            "Identidade visual personalizada",
            "Suporte por WhatsApp",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/7pi900esfhsvb5rl",
          destaque: true,
        },
      ]}
      ctaFinalTitulo="Seu cliente já tá te procurando — facilita a vida dele"
      ctaFinalTexto="WhatsApp lotado de pergunta 'que horas tem'? Manda o link. Em 3 cliques ele reserva."
      appUrl="https://agendapro.luqsys.com.br"
      assinarUrl="https://www.asaas.com/c/7pi900esfhsvb5rl"
    />
  );
}
