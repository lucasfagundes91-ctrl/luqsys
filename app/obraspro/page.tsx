import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "ObrasPro — Controle financeiro de obras",
  description:
    "Multi-obra com etapas, investidores, gastos com OCR e relatórios por etapa. Pra construtora pequena e média que quer parar de furar orçamento.",
};

export default function ObrasProPage() {
  return (
    <ProductLayout
      tema="obraspro"
      icone="🏗️"
      nome="ObrasPro"
      tagline="Sua obra dentro do orçamento"
      descricao={
        <>
          Controle financeiro de <strong className="text-white">múltiplas obras</strong>{" "}
          com etapas, investidores e gastos com OCR de notas. Pra construtora
          pequena que quer parar de furar orçamento.
        </>
      }
      ctaPrimaria={{
        label: "Falar com vendas",
        href: "mailto:contato@luqsys.com.br?subject=Quero%20o%20ObrasPro",
      }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      passos={[
        {
          n: "1",
          titulo: "Cadastra obras e etapas",
          texto:
            "Cada obra com orçamento previsto, etapas (fundação, alvenaria, acabamento), investidores e percentuais.",
        },
        {
          n: "2",
          titulo: "Lança gastos por etapa",
          texto:
            "Nota fiscal por foto (OCR). Cada gasto vai pra etapa certa. Vê na hora se está dentro ou estourando.",
        },
        {
          n: "3",
          titulo: "Relatório pro investidor",
          texto:
            "Fechamento por obra, por etapa, por investidor. Exporta PDF/Excel. Transparência total.",
        },
      ]}
      problema={{
        titulo: "A obra estourou o orçamento. Quando?",
        texto: (
          <>
            <p>
              Você descobre no fim, quando já não dá pra corrigir. As notas
              estão numa pasta, o combinado com o investidor está no WhatsApp e
              o previsto de cada etapa está numa planilha que ninguém atualiza
              desde a fundação.
            </p>
            <p>
              O ObrasPro compara previsto e realizado por etapa enquanto a obra
              anda — e o investidor vê a parte dele sem precisar te ligar.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "🏗️",
          titulo: "Obra por etapa",
          texto:
            "Fundação, estrutura, acabamento: cada etapa com o que foi orçado e o que já saiu do caixa.",
          itens: [
            "Várias obras ao mesmo tempo",
            "Previsto × realizado por etapa",
            "Categorias de gasto (material, mão de obra)",
            "Alerta quando a etapa passa do orçado",
          ],
        },
        {
          icone: "📸",
          titulo: "Nota entra pela foto",
          texto:
            "Compra de material vira lançamento sem digitação, com o documento anexado pra conferência depois.",
          itens: [
            "OCR de nota fiscal por foto",
            "Anexo guardado no lançamento",
            "Duplicata mesmo sem número de nota",
            "Fornecedor e forma de pagamento",
          ],
        },
        {
          icone: "🤝",
          titulo: "Investidor no jogo limpo",
          texto:
            "Cada sócio com o percentual dele, vendo o que entrou e o que saiu — sem você mandar planilha todo mês.",
          itens: [
            "Investidores com percentual de participação",
            "Relatório por obra, etapa e investidor",
            "Papéis: admin, editor e quem só olha",
            "Exportação em PDF e Excel",
          ],
        },
      ]}
      prints={[
        {arquivo: "/prints/obraspro-0.jpg", legenda: "Obra com gasto por etapa"},
        {arquivo: "/prints/obraspro-1.jpg", legenda: "Lançamentos da obra"},
      ]}
      praQuem={[
        {icone:"🧱", titulo:"Construtor de poucas obras", texto:"Quem toca duas ou três ao mesmo tempo e mistura os caixas."},
        {icone:"🤝", titulo:"Obra com investidor", texto:"Cada sócio vendo a parte dele sem te ligar todo mês."},
        {icone:"🔨", titulo:"Quem reforma pra vender", texto:"Saber a margem antes de fechar o negócio, não depois."},
      ]}
      naoServe={[
        "Você precisa de cronograma físico com Gantt e curva S — aqui o controle é financeiro por etapa",
        "Você quer projeto e quantitativo: o ObrasPro entra depois, quando o dinheiro começa a sair",
      ]}
      faq={[
        {
          p: "Serve pra reforma ou só pra construção do zero?",
          r: "Serve pras duas. O que o sistema controla é etapa com orçamento — se a sua reforma tem etapas, ele organiza igual.",
        },
        {
          p: "Meu investidor precisa de login?",
          r: "Só se você quiser. Dá pra dar acesso somente-leitura pra ele acompanhar sozinho, ou mandar o relatório em PDF e manter o sistema só com a sua equipe.",
        },
      ]}
      features={[
        "Múltiplas obras simultâneas",
        "Etapas com orçamento previsto × realizado",
        "Investidores com percentual de participação",
        "OCR de notas fiscais por foto",
        "Categorias de gasto (material, mão de obra, etc)",
        "Relatórios por obra/etapa/investidor",
        "Multi-usuário com papéis (admin/editor/viewer)",
        "Exportação PDF e Excel",
      ]}
      planos={[
        {
          nome: "Básico",
          publico: "1-2 obras simultâneas",
          precoLabel: "R$ 69",
          features: [
            "Até 2 obras ativas",
            "OCR de notas (até 100/mês)",
            "1 usuário",
            "Etapas e investidores",
            "Relatórios básicos",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Básico",
          ctaHref: "https://www.asaas.com/c/9klwm6prnwg1bjk2",
        },
        {
          nome: "Pro",
          publico: "Construtora ativa",
          precoLabel: "R$ 119",
          precoDe: "R$ 149",
          features: [
            "Obras ilimitadas",
            "Etapas e investidores ilimitados",
            "OCR de notas ilimitado",
            "Usuários ilimitados com permissões",
            "Relatórios e exportação",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/gj85zr3wdfwp28vp",
          destaque: true,
        },
        {
          nome: "Empresa",
          publico: "Construtora com várias frentes",
          precoLabel: "R$ 249",
          features: [
            "Tudo do Pro",
            "Multi-empresa (CNPJs)",
            "API pra integrações",
            "Relatório por investidor (PDF custom)",
            "Onboarding dedicado",
            "Suporte prioritário",
          ],
          ctaLabel: "Assinar Empresa",
          ctaHref: "https://www.asaas.com/c/qf8m56k3w21dhmha",
        },
      ]}
      ctaFinalTitulo="Pare de furar o orçamento"
      ctaFinalTexto="Combine com BankPro pra controlar o caixa da obra e com FrotaPro pra rastrear a caminhonete."
    appUrl="https://obraspro.luqsys.com.br"
    assinarUrl="https://www.asaas.com/c/gj85zr3wdfwp28vp"
    />
  );
}
