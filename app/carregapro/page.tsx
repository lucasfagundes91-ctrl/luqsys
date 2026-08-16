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
      tema="carregapro"
      icone="⚡"
      nome="CarregaPro"
      tagline="Seu eletroposto sem dar comissão pra ninguém"
      descricao={
        <>
          Pra quem opera <strong className="text-white">1 ou mais carregadores
          veiculares</strong>: aceita <strong className="text-white">OCPP 1.6 J
          e 2.0.1 nativos</strong> — sem precisar usar a plataforma do fabricante
          e pagar R$ 0,30-0,50 por kWh em comissão.
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
      problema={{
        titulo: "Você comprou o carregador. A plataforma leva a comissão.",
        texto: (
          <>
            <p>
              O carregador é seu, a energia você paga, o ponto é seu — e mesmo
              assim some R$ 0,30 a R$ 0,50 por kWh na plataforma do fabricante.
              Num eletroposto que roda, isso é o lucro inteiro.
            </p>
            <p>
              O CarregaPro fala OCPP nativo com qualquer carregador certificado.
              O Pix cai direto na sua conta ao fim de cada carga.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "🔌",
          titulo: "Qualquer carregador certificado",
          texto:
            "OCPP 1.6 J e 2.0.1 nativos: não importa a marca, ele conversa. Você deixa de ficar preso ao software do fabricante.",
          itens: [
            "OCPP 1.6 J e 2.0.1 nativos",
            "Telemetria ao vivo: kWh, kW, V, A, SoC e temperatura",
            "Log OCPP completo pra auditoria",
            "Vários pontos no mesmo painel",
          ],
        },
        {
          icone: "💰",
          titulo: "O dinheiro é seu",
          texto:
            "Pix automático ao fim da carga, direto pra sua conta. Sem comissão por kWh pra ninguém.",
          itens: [
            "Cobrança Pix automática ao fim de cada carga",
            "Tarifa por horário, dia da semana e estação",
            "RFID por tipo: cliente, frota, VIP e fidelidade",
            "Relatório de faturamento por ponto",
          ],
        },
      ]}
      praQuem={[
        {icone:"⛽", titulo:"Posto ou comércio com carregador", texto:"Quem instalou pra atrair cliente e descobriu a comissão por kWh."},
        {icone:"🏨", titulo:"Hotel, condomínio e estacionamento", texto:"Tarifa diferente por horário e RFID pra morador ou hóspede."},
        {icone:"🚚", titulo:"Frota elétrica própria", texto:"Carga interna sem cobrança, com o consumo medido mesmo assim."},
      ]}
      naoServe={[
        "Você tem um carregador só, em casa, pro seu carro — não precisa de sistema pra isso",
        "Seu carregador não é OCPP: sem esse padrão não há como o sistema conversar com ele",
      ]}
      faq={[
        {
          p: "Meu carregador é compatível?",
          r: "Se ele é certificado OCPP 1.6 J ou 2.0.1 — o que hoje é praticamente todo carregador vendido no Brasil — é compatível. Manda o modelo no WhatsApp que a gente confirma antes de você assinar.",
        },
        {
          p: "Preciso cancelar a plataforma do fabricante?",
          r: "Não precisa cancelar pra testar: dá pra apontar o carregador pro CarregaPro e ver funcionando. Depois você decide se continua pagando comissão.",
        },
      ]}
      features={[
        "OCPP 1.6 J e 2.0.1 nativo — aceita qualquer marca certificada",
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
