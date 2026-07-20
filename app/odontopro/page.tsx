import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "OdontoPro — Gestão completa pra clínica odontológica",
  description:
    "Agenda multi-dentista, prontuário eletrônico com odontograma, plano de tratamento, financeiro, portal do paciente e site com marcação online. R$ 49/mês, 3 dias grátis.",
};

export default function OdontoProPage() {
  return (
    <ProductLayout
      icone="🦷"
      nome="OdontoPro"
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
          ctaHref: "https://wa.me/5545991077788?text=Quero%20assinar%20o%20OdontoPro",
          destaque: true,
        },
      ]}
      ctaFinalTitulo="Sua agenda não devia morar num caderno"
      ctaFinalTexto="Teste 3 dias de graça, sem cartão. Se não fizer sentido pra sua clínica, é só parar."
      appUrl="https://odontopro.luqsys.com.br"
      assinarUrl="https://wa.me/5545991077788?text=Quero%20assinar%20o%20OdontoPro"
    />
  );
}
