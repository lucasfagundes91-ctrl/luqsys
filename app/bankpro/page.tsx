import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "BankPro — Gestão financeira pessoal com IA e WhatsApp",
  description:
    "App + WhatsApp pra você controlar contas, cartões e investimentos da família com importação OFX, OCR de comprovantes e assistente IA.",
};

export default function BankProPage() {
  return (
    <ProductLayout
      tema="bankpro"
      icone="🏦"
      nome="BankPro"
      tagline="Sua vida financeira no app e no WhatsApp"
      descricao={
        <>
          Controla contas, cartões e investimentos da família inteira.{" "}
          <strong className="text-white">
            Lança gasto pelo WhatsApp em segundos
          </strong>{" "}
          ou importa OFX e deixa a IA categorizar tudo.
        </>
      }
      ctaPrimaria={{
        label: "Falar com a gente",
        href: "mailto:contato@luqsys.com.br?subject=Quero%20o%20BankPro",
      }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      passos={[
        {
          n: "1",
          titulo: "Cadastra suas contas",
          texto:
            "Conta corrente, poupança, investimento, cartões. Por pessoa (você, cônjuge, filhos). Importa OFX direto do banco.",
        },
        {
          n: "2",
          titulo: "Lança no WhatsApp",
          texto:
            "Manda 'Mercado 89,90 no Nubank' ou um áudio. O bot entende, categoriza e lança. OCR de comprovante também.",
        },
        {
          n: "3",
          titulo: "Vê o panorama",
          texto:
            "Dashboard com 30 dias móveis, fluxo de caixa, patrimônio total, gastos por categoria e cartão. Filtra por pessoa.",
        },
      ]}
      problema={{
        titulo: "Você sabe quanto ganha. Sabe pra onde foi?",
        texto: (
          <>
            <p>
              Extrato num app, fatura do cartão em outro, investimento num
              terceiro, e o dinheiro que entrou pra casa misturado com o da
              empresa. No fim do mês sobra a sensação de que sumiu dinheiro.
            </p>
            <p>
              O BankPro junta tudo e separa por pessoa. Você fotografa o
              comprovante no WhatsApp e ele entra sozinho — o controle acontece
              no momento do gasto, não no domingo à noite.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "💬",
          titulo: "Lança pelo WhatsApp",
          texto:
            "O jeito mais rápido de registrar um gasto é falar dele. Manda foto, texto ou áudio e o lançamento aparece.",
          itens: [
            "OCR do comprovante por foto",
            "Áudio transcrito automaticamente",
            "Assistente que responde sobre as suas finanças",
            "Sem abrir o app pra registrar",
          ],
        },
        {
          icone: "🏦",
          titulo: "Bancos e cartões",
          texto:
            "Importa o extrato de qualquer banco brasileiro e concilia com o que você já lançou, sem duplicar.",
          itens: [
            "Importação OFX de qualquer banco",
            "Cartão de crédito com fatura e parcelamento",
            "Conciliação do que já foi lançado",
            "Transferência entre contas sem virar despesa",
          ],
        },
        {
          icone: "👨‍👩‍👧",
          titulo: "Cada um com o seu",
          texto:
            "Casal, filhos, empresa e pessoa física no mesmo painel — separados quando precisa, somados quando interessa.",
          itens: [
            "Multi-pessoa com patrimônio separado",
            "Visão consolidada da família",
            "Metas e limites por categoria",
            "Acesso por perfil",
          ],
        },
        {
          icone: "📈",
          titulo: "Investimento também é saldo",
          texto:
            "Dinheiro aplicado não é dinheiro sumido. O rendimento entra na conta do patrimônio automaticamente.",
          itens: [
            "CDB, LCI, LCA, ações e tesouro",
            "Reconciliação de aplicação pelo CDI",
            "Evolução do patrimônio no tempo",
            "Rendimento sem digitar planilha",
          ],
        },
      ]}
      faq={[
        {
          p: "Preciso dar minha senha do banco?",
          r: "Não. Nada de open banking nem senha: você baixa o OFX do seu banco (todo banco brasileiro exporta) e importa. O sistema nunca acessa a sua conta.",
        },
        {
          p: "Serve pra empresa também?",
          r: "Serve pra separar o que é seu do que é da empresa, que é o problema mais comum de quem tem CNPJ pequeno. Pra operação da empresa mesmo — nota, estoque, folha — o sistema certo é outro da casa.",
        },
        {
          p: "Meus dados ficam onde?",
          r: "No seu login, num banco isolado por conta. E o que entra pelo WhatsApp passa pelo número do sistema, não fica salvo em conversa de terceiro.",
        },
      ]}
      features={[
        "Multi-pessoa: separa patrimônio de cada um da família",
        "Importação OFX de qualquer banco brasileiro",
        "OCR de comprovante via foto no WhatsApp",
        "Cartão de crédito com fatura e parcelamento",
        "Investimentos: CDB, LCI, LCA, ações, tesouro",
        "Reconciliação de aplicação automática (CDI)",
        "Assistente IA pra responder perguntas das suas finanças",
        "Áudio no WhatsApp transcrito automaticamente",
      ]}
      planos={[
        {
          nome: "Básico",
          publico: "Só você, app web",
          precoLabel: "R$ 19",
          features: [
            "App web completo",
            "1 pessoa",
            "Contas e cartões ilimitados",
            "Importação OFX (5/mês)",
            "Sem WhatsApp",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Básico",
          ctaHref: "https://www.asaas.com/c/vr2dp6vjh69del96",
        },
        {
          nome: "Pro",
          publico: "Você + família + WhatsApp",
          precoLabel: "R$ 49",
          precoDe: "R$ 88",
          features: [
            "App web completo",
            "WhatsApp com IA: lançar, consultar, áudio, foto",
            "Multi-pessoa (você + família)",
            "Contas, cartões, investimentos ilimitados",
            "Importação OFX ilimitada",
            "Suporte prioritário",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/ou3zyy6fr8hiyt5x",
          destaque: true,
        },
        {
          nome: "Família+",
          publico: "Patrimônio + planejamento financeiro",
          precoLabel: "R$ 99",
          features: [
            "Tudo do Pro",
            "Consultoria mensal (30min via call)",
            "Relatório de patrimônio anual",
            "Planejamento financeiro guiado",
            "Suporte prioritário 24h em dia útil",
            "API bancária (Open Finance)",
          ],
          ctaLabel: "Assinar Família+",
          ctaHref: "https://www.asaas.com/c/votuo35ov6pwoggt",
        },
      ]}
      ctaFinalTitulo="Sua vida financeira no controle"
      ctaFinalTexto="Sem planilha, sem app que confunde. Lança pelo WhatsApp e pronto."
    appUrl="https://bankpro.luqsys.com.br"
    assinarUrl="https://www.asaas.com/c/ou3zyy6fr8hiyt5x"
    />
  );
}
