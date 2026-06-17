import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "CarregaPro — Gestão de eletroposto OCPP 1.6",
  description:
    "SaaS pra operar carregador veicular (DC ou AC) sem pagar comissão pra Tupi/Move/Spott. Aceita qualquer marca certificada OCPP 1.6 J: ON-CHARGE, Intelbras, NeoCharge. Tarifa dinâmica, RFID, cobrança Pix.",
};

export default function CarregaProPage() {
  return (
    <ProductLayout
      icone="⚡"
      nome="CarregaPro"
      tagline="Seu eletroposto sem dar comissão pra ninguém"
      descricao={
        <>
          Pra quem opera <strong className="text-white">1 ou mais carregadores
          veiculares</strong>: gerencia tudo via OCPP 1.6 J — sem precisar usar
          a plataforma do fabricante e pagar R$ 0,30-0,50 por kWh em comissão.
        </>
      }
      ctaPrimaria={{
        label: "Falar com a gente",
        href: "https://wa.me/5545991077788?text=Quero%20o%20CarregaPro",
      }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      passos={[
        {
          n: "1",
          titulo: "Cadastra sua estação",
          texto:
            "Charge Point ID, marca, modelo (ON-CHARGE, Intelbras, NeoCharge ou qualquer OCPP 1.6 J), potência e endereço.",
        },
        {
          n: "2",
          titulo: "Aponta o carregador",
          texto:
            "No painel do carregador, configura o endpoint OCPP pro seu workspace no CarregaPro. Em 1 minuto, transações começam a aparecer.",
        },
        {
          n: "3",
          titulo: "Recebe sem comissão",
          texto:
            "Configura tarifa R$/kWh (com janela por horário e dias), cadastra RFIDs e cobra Pix dinâmico ao fim de cada carga.",
        },
      ]}
      features={[
        "OCPP 1.6 J nativo — aceita qualquer marca certificada",
        "Tarifa dinâmica por horário, dia da semana e estação",
        "RFID com tipos: cliente, frota interna, VIP, fidelidade",
        "Cobrança Pix automática (Asaas) ao fim de cada carga",
        "Telemetria em tempo real: kWh, kW, V, A, SoC, temperatura",
        "Log OCPP completo pra auditoria fiscal",
        "Webapp QR Code pro motorista (em breve)",
        "Multi-usuário com painel por estação",
      ]}
      planos={[
        {
          nome: "Operador",
          publico: "1-3 carregadores",
          precoLabel: "R$ 49",
          features: [
            "Até 3 estações",
            "Transações ilimitadas",
            "Tarifa dinâmica + RFID",
            "Cobrança Pix via Asaas",
            "Telemetria em tempo real",
            "Suporte por WhatsApp",
          ],
          ctaLabel: "Falar com a gente",
          ctaHref:
            "https://wa.me/5545991077788?text=Quero%20o%20CarregaPro%20Operador",
        },
        {
          nome: "Rede",
          publico: "4-15 carregadores",
          precoLabel: "R$ 199",
          features: [
            "Até 15 estações",
            "Multi-usuário com permissões",
            "Webapp QR pro motorista",
            "Cupom fidelidade + idTag por CPF",
            "Relatórios consolidados",
            "Onboarding dedicado",
          ],
          ctaLabel: "Falar com a gente",
          ctaHref:
            "https://wa.me/5545991077788?text=Quero%20o%20CarregaPro%20Rede",
          destaque: true,
        },
        {
          nome: "Operadora",
          publico: "16+ carregadores",
          precoLabel: "Sob consulta",
          features: [
            "Estações ilimitadas",
            "Multi-tenant (revender pra clientes)",
            "Plug & Charge ISO 15118 (roadmap)",
            "Integração com seu app/site",
            "SLA dedicado",
            "Onboarding + treinamento",
          ],
          ctaLabel: "Falar com a gente",
          ctaHref:
            "https://wa.me/5545991077788?text=Quero%20o%20CarregaPro%20Operadora",
        },
      ]}
      ctaFinalTitulo="Quanto você está pagando de comissão por kWh?"
      ctaFinalTexto="Em 5 anos, R$ 0,30/kWh em comissão vira R$ 18-60k por carregador. Aqui é R$ 49/mês fixo."
      appUrl="https://carregapro.luqsys.com.br"
      assinarUrl="https://wa.me/5545991077788?text=Quero%20o%20CarregaPro"
    />
  );
}
