import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "ShopPro — site de e-commerce próprio integrado ao PDV",
  description:
    "Site de vendas online sob medida pra sua loja: integrado ao PDV Pro, com checkout, frete (Melhor Envio), Asaas, login social e CMS pra editar tudo. Add-on do PDV Pro por +R$ 199/mês.",
};

export default function ShopProPage() {
  return (
    <ProductLayout
      tema="shoppro"
      icone="🛍️"
      nome="ShopPro"
      tagline="Site de e-commerce próprio integrado ao PDV Pro"
      descricao={
        <>
          <strong className="text-white">Site de vendas online pessoal e personalizável</strong>{" "}
          conectado ao seu PDV Pro. Estoque, preço, promoções e fotos saem
          direto do PDV pro site — sem dois cadastros, sem duplicação. Você
          edita as páginas, banners e cupons sem precisar saber programar.
        </>
      }
      ctaPrimaria={{
        label: "Falar com vendas",
        href: "https://wa.me/5545991077788?text=Quero%20o%20ShopPro%20(site%20+%20PDV%20Pro)",
      }}
      ctaSecundaria={{ label: "Ver o que vem", href: "#features" }}
      passos={[
        {
          n: "1",
          titulo: "Você assina o PDV Pro",
          texto:
            "ShopPro é exclusivo pra clientes ativos do PDV Pro. Por +R$ 199/mês a mais do seu plano, ativa o site e a gente cuida do deploy do seu domínio próprio.",
        },
        {
          n: "2",
          titulo: "Subimos seu site em até 7 dias",
          texto:
            "Você fala o nome da loja, logo, cores, telefone e regras (frete, formas de pagamento). A gente publica num domínio à sua escolha (ex: minhaloja.com.br).",
        },
        {
          n: "3",
          titulo: "Vende online sem dois sistemas",
          texto:
            "Pedido cai no PDV Pro automático, baixa estoque, envia WhatsApp pro cliente, gera etiqueta de envio. Você opera tudo de um lugar só.",
        },
      ]}
      features={[
        "🛒 Carrinho + checkout com endereço, frete e cupom",
        "💳 Pagamento PIX (com desconto) e cartão via Asaas (até 12x)",
        "📦 Frete Melhor Envio (Correios + transportadoras) ou retira na loja",
        "👤 Login com Google ou e-mail/senha (cadastro automático)",
        "🎁 Clube de pontos sincronizado com o PDV físico",
        "🎂 Lista de aniversário pública (cliente compartilha link)",
        "🔥 Promoções e cupons sincronizados do PDV Pro",
        "✨ Seções: Novidades, Mais Vendidos, LiquidaLuqui, Por idade",
        "📝 CMS pra editar Sobre, Trocas, Entregas, Pagamento, Privacidade",
        "🎨 Banners do hero gerenciáveis (sem mexer no código)",
        "🛍️ Catálogo: filtros por departamento, grupo, marca, faixa etária",
        "📲 WhatsApp flutuante no canto pra suporte ao cliente",
        "🔍 SEO básico (sitemap, meta tags, JSON-LD)",
        "📊 Painel admin com pedidos, clientes, assinantes do clube",
        "🤖 Integração WhatsApp com IA (Luquizinha) responde pedidos",
        "💌 E-mails transacionais (confirmação, pagamento, envio)",
        "🌐 Domínio próprio (ex: minhaloja.com.br) — você compra, a gente liga",
      ]}
      planos={[
        {
          nome: "ShopPro (add-on)",
          publico: "Cliente PDV Pro que quer vender online",
          precoLabel: "+R$ 199",
          features: [
            "Adiciona +R$ 199/mês ao seu plano PDV Pro",
            "Site próprio com domínio à sua escolha",
            "Integração total com seu PDV Pro (estoque, preço, promo)",
            "Setup em até 7 dias",
            "CMS pra editar páginas, banners, cupons",
            "Asaas + Melhor Envio + Google Login inclusos",
            "Sem fidelidade, cancele quando quiser",
          ],
          ctaLabel: "Quero o ShopPro",
          ctaHref:
            "https://wa.me/5545991077788?text=Quero%20o%20ShopPro%20(site%20+%20PDV%20Pro%2C%20%2BR%24%20199%2Fm%C3%AAs)",
          destaque: true,
        },
      ]}
      ctaFinalTitulo="Loja física + online no mesmo sistema"
      ctaFinalTexto="Sem dois cadastros, sem dois estoques, sem dois preços. ShopPro vive na mesma fonte de dados do seu PDV Pro."
      assinarUrl="https://wa.me/5545991077788?text=Quero%20o%20ShopPro%20(site%20+%20PDV%20Pro)"
    />
  );
}
