import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "FrotaPro — Gestão de frota PME",
  description:
    "Controle de IPVA, seguro, manutenção, abastecimento e multas pra cada veículo da sua frota. Lembretes automáticos e dashboard por veículo.",
};

export default function FrotaProPage() {
  return (
    <ProductLayout
      tema="frotapro"
      icone="🚚"
      nome="FrotaPro"
      tagline="Sua frota inteira no controle"
      descricao={
        <>
          Pra empresas com <strong className="text-white">5 a 50 veículos</strong>:
          IPVA, seguro, manutenção, abastecimento, multas — tudo organizado por
          veículo com lembretes automáticos.
        </>
      }
      ctaPrimaria={{
        label: "Falar com a gente",
        href: "mailto:contato@luqsys.com.br?subject=Quero%20o%20FrotaPro",
      }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      passos={[
        {
          n: "1",
          titulo: "Cadastra a frota",
          texto:
            "Cada veículo com placa, modelo, KM atual, IPVA, seguro, vencimentos. Foto pra identificar rápido.",
        },
        {
          n: "2",
          titulo: "Equipe lança gastos",
          texto:
            "Abastecimento, manutenção, multa — vinculados ao KM no momento. OCR de comprovante por foto. Multi-usuário com permissões.",
        },
        {
          n: "3",
          titulo: "Lembretes + dashboard",
          texto:
            "Avisa antes de vencer IPVA, seguro, revisão. Dashboard por categoria mostra onde o dinheiro está indo.",
        },
      ]}
      problema={{
        titulo: "Frota não afunda de uma vez. Afunda R$ 300 por vez.",
        texto: (
          <>
            <p>
              O pneu que trocou não se sabe com quantos quilômetros. O IPVA que
              venceu ninguém lembrou. A manutenção que foi feita duas vezes
              porque não havia registro da primeira.
            </p>
            <p>
              O FrotaPro guarda cada gasto amarrado ao quilômetro do dia e
              avisa antes do vencimento. Você descobre qual veículo custa caro
              antes de ele custar caro demais.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "⛽",
          titulo: "Cada gasto no seu quilômetro",
          texto:
            "Abastecimento, pneu, revisão — tudo registrado com o KM daquele momento. É isso que revela o custo real por rodado.",
          itens: [
            "Gasto vinculado ao KM no momento do lançamento",
            "OCR do comprovante por foto",
            "Categorias: dia a dia, coleção, projeto",
            "Histórico de manutenção por veículo",
          ],
        },
        {
          icone: "🔔",
          titulo: "O que vence não te pega",
          texto:
            "IPVA, seguro, licenciamento e revisão avisam antes — por data ou por quilometragem.",
          itens: [
            "IPVA e seguro com vencimento automático",
            "Lembretes recorrentes ou por data",
            "Aviso antes, não depois da multa",
            "Documentos guardados junto do veículo",
          ],
        },
        {
          icone: "👥",
          titulo: "Motorista lança, gestor confere",
          texto:
            "Cada motorista registra o que gastou no veículo dele. Você vê a frota inteira sem ficar cobrando planilha.",
          itens: [
            "Multi-usuário com login próprio",
            "Motorista vê só o que é dele",
            "Painel do gestor com a frota toda",
            "Página pública por loja, quando você revende",
          ],
        },
        {
          icone: "📊",
          titulo: "Onde o dinheiro está indo",
          texto:
            "Gráfico por categoria e por veículo — o carro que parece barato às vezes é o mais caro do pátio.",
          itens: [
            "Dashboard com gráficos por categoria",
            "Custo por veículo e por período",
            "Comparativo entre veículos",
            "Exportação dos lançamentos",
          ],
        },
      ]}
      praQuem={[
        {icone:"🚚", titulo:"Frota de PME", texto:"De 2 a 50 veículos, onde ninguém tem tempo de manter planilha."},
        {icone:"🏪", titulo:"Loja que revende veículo", texto:"Custo por carro e página pública pra vitrine."},
        {icone:"🚗", titulo:"Quem tem carro de coleção ou projeto", texto:"Categoria própria pra separar o que é hobby do que é trabalho."},
      ]}
      naoServe={[
        "Você precisa de rastreamento por GPS em tempo real — isso é rastreador, não gestão de custo",
        "Sua frota é de caminhão com jornada e CIOT: o FrotaPro cuida do custo, não da logística",
      ]}
      faq={[
        {
          p: "Serve pra 2 carros ou só pra frota grande?",
          r: "Serve pros dois. Tem gente usando com o carro da família e o da empresa só pra saber quanto cada um custa — e tem quem use com dezenas de veículos e motoristas.",
        },
        {
          p: "O motorista precisa saber mexer em sistema?",
          r: "Ele fotografa o comprovante e pronto. O OCR lê o valor e ele confirma o quilômetro — leva menos tempo que mandar a foto no grupo do WhatsApp.",
        },
      ]}
      features={[
        "Categorias: dia a dia, coleção, projeto",
        "Gastos vinculados ao KM no momento",
        "IPVA + seguro com vencimento automático",
        "Histórico de manutenção por veículo",
        "OCR de comprovante via foto",
        "Lembretes recorrentes ou por data",
        "Dashboard com gráficos por categoria",
        "Multi-usuário com login (motoristas + gestor)",
      ]}
      planos={[
        {
          nome: "Básico",
          publico: "Frota pequena (até 5 veículos)",
          precoLabel: "R$ 69",
          features: [
            "Até 5 veículos",
            "1 usuário",
            "IPVA + seguro + manutenção",
            "Lembretes automáticos",
            "Sem OCR de comprovante",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Básico",
          ctaHref: "https://www.asaas.com/c/a5ax24hq7f8iitdk",
        },
        {
          nome: "Pro",
          publico: "Frota empresarial",
          precoLabel: "R$ 129",
          features: [
            "Veículos ilimitados",
            "Usuários ilimitados",
            "OCR de comprovante",
            "Lembretes automáticos",
            "Relatórios e dashboards",
            "Assistente IA",
            "Suporte prioritário",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/q7naaqzljwdl3hxe",
          destaque: true,
        },
        {
          nome: "Empresa",
          publico: "Frota grande com várias filiais",
          precoLabel: "R$ 199",
          features: [
            "Tudo do Pro",
            "Multi-empresa (CNPJs)",
            "Centros de custo",
            "API + integrações",
            "Relatórios consolidados",
            "Onboarding dedicado",
          ],
          ctaLabel: "Assinar Empresa",
          ctaHref: "https://www.asaas.com/c/b0h36jbs6uwb6lsz",
        },
      ]}
      ctaFinalTitulo="Frota no controle, sem planilha"
      ctaFinalTexto="Você sabe quanto cada veículo está custando por KM rodado?"
    appUrl="https://frotapro.luqsys.com.br"
    assinarUrl="https://www.asaas.com/c/q7naaqzljwdl3hxe"
    />
  );
}
