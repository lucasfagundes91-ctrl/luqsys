import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "BarbeariaPro — Gestão completa pra barbearia",
  description:
    "Agenda por barbeiro com link de agendamento, comanda e caixa, comissão automática, metas por barbeiro, clube de assinatura, cartão fidelidade, mensagens pros clientes sumidos e NFC-e. R$ 99,99/mês, 3 dias grátis.",
};

export default function BarbeariaProPage() {
  return (
    <ProductLayout
      tema="barbeariapro"
      icone="💈"
      nome="BarbeariaPro"
      tagline="A barbearia inteira na palma da mão."
      descricao={
        <>
          Para <strong className="text-white">barbearias</strong>: agenda por barbeiro com link
          pro cliente marcar sozinho, comanda e caixa, comissão calculada na hora, metas por
          barbeiro, clube de assinatura, cartão fidelidade e mensagens pros clientes que
          sumiram — tudo num sistema só.
        </>
      }
      passos={[
        {
          n: "1",
          titulo: "Cadastra os barbeiros e os serviços",
          texto:
            "Cada barbeiro com foto, horário e a porcentagem de comissão em serviço e em produto. Corte, barba, combo e sobrancelha já vêm cadastrados — é só ajustar o preço.",
        },
        {
          n: "2",
          titulo: "Manda o link pros clientes",
          texto:
            "O cliente escolhe o serviço, o barbeiro e um horário realmente livre. Recebe a confirmação no WhatsApp com link pra desmarcar, e um lembrete antes do horário.",
        },
        {
          n: "3",
          titulo: "Fecha a comanda e acompanha a meta",
          texto:
            "Na comanda entram serviço e produto, com pagamento dividido e troco. A comissão sai calculada, o estoque baixa e o painel mostra quanto cada barbeiro precisa por dia pra bater a meta.",
        },
      ]}
      problema={{
        titulo: "Agenda no WhatsApp, comissão no caderno, cliente que some sem ninguém ver",
        texto: (
          <>
            <p>
              O horário fica perdido no meio das conversas, a comissão é feita
              na calculadora no fim do mês e ninguém percebe que aquele cliente
              de toda quinzena não vem há dois meses.
            </p>
            <p>
              O BarbeariaPro junta agenda, caixa, comissão e clientes — e mostra
              se a casa está saudável e se o time vai bater a meta.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "🎯",
          titulo: "Metas e indicadores por barbeiro",
          texto:
            "Quantos cortes, barbas e sobrancelhas cada um fez, quanto faturou em serviço e em produto, a comissão de cada parte e se o ritmo leva à meta.",
          itens: [
            "Meta do mês por barbeiro e da casa, com projeção",
            "Quanto falta por dia, em reais e em atendimentos",
            "Andamento da meta enviado no WhatsApp do barbeiro",
            "Ponto de equilíbrio, margem e ticket médio da casa",
          ],
        },
        {
          icone: "💬",
          titulo: "Cliente que volta",
          texto:
            "Clientes únicos e recorrentes no mês, retenção e uma central de mensagens que organiza quem precisa ser chamado.",
          itens: [
            "Lista de sumidos, aniversariantes e quem faltou",
            "Lembrete de horário automático",
            "Cartão fidelidade: a cada 10 cortes, 1 grátis",
            "Clube de assinatura com controle de mensalidade",
          ],
        },
      ]}
      praQuem={[
        {icone:"💈", titulo:"Barbearia de 1 a 10 cadeiras", texto:"Onde a agenda ainda vive no WhatsApp e a comissão no caderno."},
        {icone:"⭐", titulo:"Quem quer receita recorrente", texto:"Clube de corte ilimitado ou pacote mensal, com mensalidade controlada."},
        {icone:"🧑‍🦲", titulo:"Quem trabalha com prótese capilar", texto:"Ficha técnica, pedidos ao fornecedor e agenda de manutenção de cada cliente."},
      ]}
      naoServe={[
        "Você precisa emitir NFS-e de serviço direto pelo sistema (por enquanto a nota sai só dos produtos, em NFC-e)",
      ]}
      faq={[
        {
          p: "Cada barbeiro vê o faturamento da barbearia?",
          r: "Não. O barbeiro vê a agenda, a própria comissão e a própria meta. Faturamento, despesas e a comissão dos colegas ficam só com o dono e o gerente.",
        },
        {
          p: "O cliente precisa baixar aplicativo pra marcar?",
          r: "Não. Ele abre o link da barbearia no celular, escolhe o horário e pronto. A confirmação chega no WhatsApp.",
        },
        {
          p: "Dá pra emitir nota fiscal?",
          r: "Dá: NFC-e dos produtos vendidos no balcão, e você escolhe em cada venda se emite ou não. Precisa de conta na Focus NFe com o certificado da barbearia.",
        },
      ]}
      features={[
        "Agenda por barbeiro, com encaixe, bloqueio de horário e remarcação",
        "Link de agendamento online com horários realmente livres",
        "Confirmação e lembrete no WhatsApp, com link pro cliente desmarcar",
        "Comanda com serviço e produto, pagamento dividido e troco",
        "Comissão automática por barbeiro, separada em serviço e produto",
        "Metas por barbeiro e da casa, com projeção e quanto falta por dia",
        "Indicadores: cortes, barbas, sobrancelhas, produtos, ticket e ocupação",
        "Clientes únicos, novos, recorrentes e retenção do mês",
        "Central de mensagens: sumidos, aniversariantes, faltaram, fidelidade",
        "Clube de assinatura com mensalidades e limite de usos",
        "Cartão fidelidade com resgate no caixa",
        "Estoque de produtos com alerta de mínimo",
        "Financeiro: caixa por forma de pagamento, despesas e resultado",
        "NFC-e dos produtos opcional em cada venda",
        "Módulo de prótese capilar e loja online (opcionais)",
      ]}
      planos={[
        {
          nome: "Pro",
          publico: "Barbearias de todos os tamanhos",
          precoLabel: "R$ 99,99",
          features: [
            "Barbeiros, clientes e horários ilimitados",
            "Link de agendamento online",
            "Comanda, caixa e comissão automática",
            "Metas e indicadores por barbeiro",
            "Clube de assinatura e cartão fidelidade",
            "Central de mensagens e lembrete no WhatsApp",
            "Suporte por WhatsApp",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/1sc7zgpobygzd7vg",
          destaque: true,
        },
      ]}
      ctaFinalTitulo="Sua barbearia não devia depender do caderno"
      ctaFinalTexto="Teste 3 dias de graça, sem cartão. Se não fizer sentido pra sua barbearia, é só parar."
      appUrl="https://barbeariapro.luqsys.com.br"
      assinarUrl="https://www.asaas.com/c/1sc7zgpobygzd7vg"
    />
  );
}
