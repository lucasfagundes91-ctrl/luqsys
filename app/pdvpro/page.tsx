import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "PDV Pro — PDV + ERP completo pra loja",
  description:
    "Frente de caixa, estoque, financeiro, NF-e, etiquetas com código de barras, comissões e atendimento WhatsApp por IA. Tudo em um sistema.",
};

export default function PDVProPage() {
  return (
    <ProductLayout
      icone="🛒"
      nome="PDV Pro"
      tagline="PDV + ERP completo pra loja física"
      descricao={
        <>
          Do <strong className="text-white">caixa</strong> à{" "}
          <strong className="text-white">contabilidade</strong>: PDV, NFC-e,
          estoque, financeiro com conciliação bancária, manifestação de NF-e,
          comissões e atendimento WhatsApp por IA — tudo em um sistema só.
        </>
      }
      ctaPrimaria={{
        label: "Falar com vendas",
        href: "mailto:contato@luqsys.com.br?subject=Quero%20o%20PDV%20Pro",
      }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      passos={[
        {
          n: "1",
          titulo: "Cadastra a loja",
          texto:
            "Produtos (com CSV em massa), fornecedores, clientes, fabricantes. Etiquetas com código de barras impressas direto.",
        },
        {
          n: "2",
          titulo: "Opera o caixa",
          texto:
            "Frente de caixa fluida com busca rápida, crediário, troco automático, sangria/suprimento. Abre e fecha o caixa com 1 clique.",
        },
        {
          n: "3",
          titulo: "Vende pelo WhatsApp",
          texto:
            "Luluzinha (IA) atende o cliente, qualifica o pedido e cria um rascunho. Você confirma e vira venda real no PDV.",
        },
      ]}
      features={[
        "PDV com crediário, troco e múltiplas formas de pagamento",
        "NFC-e e NF-e via Focus NFe (Simples Nacional)",
        "Caixa por usuário (cada vendedor abre o seu)",
        "Compras geram contas a pagar e atualizam estoque",
        "Manifestação automática de NF-e recebida",
        "Financeiro: contas a pagar/receber, recorrentes, conciliação bancária OFX",
        "Estoque + inventário (modo substituir/somar por item)",
        "Promoções flexíveis (% ou R$, por item ou em massa)",
        "Trocas, devoluções e vale-compras",
        "Comissão por vendedor com sub-permissões granulares",
        "Atendimento WhatsApp com IA (Luquizinha) — Profissional e Empresarial",
        "Catálogo Excel/WhatsApp pra divulgar produtos",
        "Etiquetas com código de barras",
        "Dashboard com vendas, contas vencidas e estoque baixo",
      ]}
      planos={[
        {
          nome: "Essencial",
          publico: "Loja pequena começando",
          precoLabel: "R$ 149",
          features: [
            "1 loja · até 500 NFC-e/mês",
            "PDV + NFC-e/NF-e",
            "Estoque + inventário",
            "Financeiro básico (contas a pagar/receber)",
            "Cadastros (produtos, clientes, fornecedores)",
            "Promoções e catálogo Excel/WhatsApp",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Essencial",
          ctaHref:
            "https://wa.me/5545991077788?text=Quero%20assinar%20o%20PDV%20Pro%20Essencial%20(R%24%20149%2Fm%C3%AAs)",
        },
        {
          nome: "Profissional",
          publico: "A loja completa do dia a dia",
          precoLabel: "R$ 299",
          features: [
            "1 loja · 2.000 NFC-e/mês",
            "Tudo do Essencial",
            "Manifestação NF-e (recebimento)",
            "Conciliação bancária (OFX/CSV)",
            "Lançamentos recorrentes (aluguel, luz, folha)",
            "Atendimento WhatsApp com IA (Luquizinha)",
            "Suporte WhatsApp em horário comercial",
          ],
          ctaLabel: "Assinar Profissional",
          ctaHref:
            "https://wa.me/5545991077788?text=Quero%20assinar%20o%20PDV%20Pro%20Profissional%20(R%24%20299%2Fm%C3%AAs)",
          destaque: true,
        },
        {
          nome: "Empresarial",
          publico: "Multi-loja / atacado",
          precoLabel: "R$ 499",
          features: [
            "Até 3 lojas",
            "NFC-e ilimitada (sem cobrança de excedente)",
            "Tudo do Profissional",
            "Dashboard consolidado",
            "Suporte prioritário",
            "Onboarding dedicado",
          ],
          ctaLabel: "Assinar Empresarial",
          ctaHref:
            "https://wa.me/5545991077788?text=Quero%20assinar%20o%20PDV%20Pro%20Empresarial%20(R%24%20499%2Fm%C3%AAs)",
        },
      ]}
      ctaFinalTitulo="A loja inteira em um sistema só"
      ctaFinalTexto="Combine com ContabilidadePro e PontoPro pra um varejo 100% no controle."
    appUrl="https://pdvpro.luqsys.com.br"
    assinarUrl="https://wa.me/5545991077788?text=Quero%20assinar%20o%20PDV%20Pro"
    />
  );
}
