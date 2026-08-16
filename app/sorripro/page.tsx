import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "SorriPro — Gestão completa pra clínica odontológica",
  description:
    "Agenda multi-dentista, prontuário eletrônico com odontograma, plano de tratamento, financeiro, portal do paciente e site com marcação online. R$ 49/mês, 3 dias grátis.",
};

export default function SorriProPage() {
  return (
    <ProductLayout
      tema="sorripro"
      icone="🦷"
      nome="SorriPro"
      tagline="A clínica inteira num sistema só."
      descricao={
        <>
          Para <strong className="text-white">clínicas e consultórios odontológicos</strong>:
          agenda por dentista, prontuário eletrônico com odontograma clicável, plano de
          tratamento, contas a receber, portal do paciente e um site próprio onde o
          paciente marca sozinho — sem passar pela recepção.
        </>
      }
      passos={[
        {
          n: "1",
          titulo: "Cadastra a equipe e o horário",
          texto:
            "Cada dentista com CRO, especialidade e horário de atendimento por dia da semana. O sistema já vem com 15 procedimentos odontológicos e preços sugeridos — é só ajustar.",
        },
        {
          n: "2",
          titulo: "Atende com o prontuário na tela",
          texto:
            "Odontograma FDI clicável face a face, anamnese com alerta de alergia, evolução clínica por sessão, RX e fotos anexados na ficha. Do orçamento sai o parcelamento direto no financeiro.",
        },
        {
          n: "3",
          titulo: "Deixa o paciente marcar sozinho",
          texto:
            "Seu site em /c/sua-clinica mostra os horários realmente vagos. O paciente escolhe, o cadastro é criado e a recepção recebe no WhatsApp. Ele ainda aprova o orçamento pelo portal.",
        },
      ]}
      problema={{
        titulo: "Prontuário no papel, agenda no caderno, cobrança na memória",
        texto: (
          <>
            <p>
              A ficha do paciente está numa pasta, o que foi feito na última
              sessão está na cabeça de quem atendeu, e o tratamento aprovado
              que ninguém cobrou virou prejuízo silencioso.
            </p>
            <p>
              O SorriPro junta agenda, prontuário e financeiro — com
              odontograma clicável e alerta de alergia antes de anestesiar.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "🦷",
          titulo: "Prontuário que o dentista usa",
          texto:
            "Odontograma por dente e por face, evolução por sessão e os anexos junto — não um formulário genérico de clínica.",
          itens: [
            "Odontograma clicável em notação FDI (11–48)",
            "Evolução clínica por sessão, dente e profissional",
            "Anamnese com alerta de alergia antes de anestesiar",
            "Radiografia, foto e atestado na própria ficha",
          ],
        },
        {
          icone: "🗓️",
          titulo: "A cadeira não fica vazia",
          texto:
            "Agenda por dentista e por cadeira, com o ciclo real do atendimento — dá pra ver quem chegou e quem está na sala.",
          itens: [
            "Agenda visual por dentista, cadeira, dia e semana",
            "Pendente → confirmado → sala de espera → atendido",
            "Encaixe e remarcação sem perder histórico",
            "Site público da clínica dentro das regras do CFO",
          ],
        },
      ]}
      prints={[
        {arquivo: "/prints/sorripro-1.jpg", legenda: "Tabela de procedimentos"},
      ]}
      praQuem={[
        {icone:"🦷", titulo:"Clínica de um a cinco dentistas", texto:"Onde o prontuário ainda é papel e a agenda é caderno."},
        {icone:"🪑", titulo:"Quem divide cadeira", texto:"Agenda por cadeira, não só por profissional."},
        {icone:"🌐", titulo:"Clínica sem site", texto:"Site público dentro das regras de publicidade do CFO."},
      ]}
      naoServe={[
        "Você precisa de integração com convênio e faturamento TISS",
        "Sua clínica é médica, não odontológica: o odontograma é o coração do sistema",
      ]}
      faq={[
        {
          p: "Tenho mais de um dentista na clínica. Cada um vê tudo?",
          r: "Você decide. Dá pra separar agenda e comissão por profissional e limitar quem enxerga o prontuário de quem.",
        },
        {
          p: "O site da clínica pode divulgar preço e antes/depois?",
          r: "O CFO tem regra sobre isso, e o site que sai do SorriPro já respeita — divulga serviço e credencial sem cair na publicidade que a norma proíbe.",
        },
      ]}
      features={[
        "Agenda visual por dentista/cadeira, dia e semana",
        "Ciclo real do atendimento: pendente → confirmado → sala de espera → em atendimento → atendido",
        "Odontograma clicável em notação FDI (11–48), por dente e por face",
        "Anamnese com alerta de alergia antes de anestesiar",
        "Evolução clínica por sessão, com dente, valor e profissional",
        "Anexos na ficha: radiografia, foto, atestado, documento",
        "Plano de tratamento com aprovação do paciente e parcelamento automático",
        "Contas a receber: dinheiro, PIX, cartão ou convênio",
        "Portal do paciente: consultas, histórico e aprovação de orçamento",
        "Site da clínica com marcação online e horários realmente vagos",
        "Confirmação e lembrete de consulta por WhatsApp e email",
        "Equipe com 3 níveis: admin, dentista e recepção (recepção não vê prontuário)",
        "Dashboard: faturamento, consultas do dia, taxa de faltas e aniversariantes",
      ]}
      planos={[
        {
          nome: "Pro",
          publico: "Clínicas e consultórios odontológicos",
          precoLabel: "R$ 49",
          features: [
            "Dentistas, pacientes e consultas ilimitados",
            "Prontuário eletrônico completo com odontograma",
            "Plano de tratamento e contas a receber",
            "Portal do paciente incluso",
            "Site da clínica com marcação online",
            "WhatsApp automático de confirmação e lembrete",
            "Equipe ilimitada com permissões por perfil",
            "Suporte por WhatsApp",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://wa.me/5545991077788?text=Quero%20assinar%20o%20SorriPro",
          destaque: true,
        },
      ]}
      ctaFinalTitulo="Sua agenda não devia morar num caderno"
      ctaFinalTexto="Teste 3 dias de graça, sem cartão. Se não fizer sentido pra sua clínica, é só parar."
      appUrl="https://sorripro.luqsys.com.br"
      assinarUrl="https://wa.me/5545991077788?text=Quero%20assinar%20o%20SorriPro"
    />
  );
}
