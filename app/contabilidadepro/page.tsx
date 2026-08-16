import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "ContabilidadePro — Software + acompanhamento contábil",
  description:
    "Sistema contábil completo com acompanhamento humano de contador. PJ e PF, integração com seus outros sistemas Luqsys.",
};

export default function ContabilidadeProPage() {
  return (
    <ProductLayout
      tema="contabilidadepro"
      icone="📊"
      nome="ContabilidadePro"
      tagline="Software + contador, no mesmo lugar"
      descricao={
        <>
          Sistema contábil completo <strong className="text-white">com acompanhamento humano</strong>{" "}
          de contador. PJ e PF, integração com seus outros sistemas Luqsys,
          IRPF do dono e da família.
        </>
      }
      ctaPrimaria={{
        label: "Falar com a gente",
        href: "mailto:contato@luqsys.com.br?subject=Quero%20o%20ContabilidadePro",
      }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      passos={[
        {
          n: "1",
          titulo: "Conexão com seus sistemas",
          texto:
            "PDV Pro, FarmPro, ObrasPro mandam dados direto. Nada de digitar duas vezes. Notas e lançamentos vêm prontos.",
        },
        {
          n: "2",
          titulo: "Contador acompanha",
          texto:
            "Profissional dedicado responde dúvidas, valida classificação, prepara guias e obrigações acessórias.",
        },
        {
          n: "3",
          titulo: "Você só assina e paga",
          texto:
            "DAS, DCTFWeb, eSocial, IRPF/IRPJ — tudo pronto pra entregar. Lembretes de vencimento automáticos.",
        },
      ]}
      problema={{
        titulo: "Contador que só aparece quando o imposto vence",
        texto: (
          <>
            <p>
              Você manda os documentos, ele manda a guia, e no meio disso
              ninguém explica nada. Quando chega uma notificação, começa a
              caçada por um papel de dois anos atrás.
            </p>
            <p>
              Aqui o contador vem junto com o software — e o software já está
              conectado nos outros sistemas que você usa, então o dado não
              precisa ser reenviado toda vez.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "🧑‍💼",
          titulo: "Contador de verdade, no seu WhatsApp",
          texto:
            "Não é chat genérico: é um contador dedicado que conhece a sua empresa e responde no canal que você já usa.",
          itens: [
            "Contador dedicado por WhatsApp e e-mail",
            "Resposta a dúvida do dia a dia",
            "Acompanhamento do que vence no mês",
            "PJ e PF (sócios e família) no mesmo lugar",
          ],
        },
        {
          icone: "📑",
          titulo: "As obrigações em dia",
          texto:
            "DAS, DCTFWeb, eSocial e IRPF entregues no prazo, com lembrete antes de cada vencimento.",
          itens: [
            "DAS do Simples Nacional todo mês",
            "DCTFWeb e eSocial",
            "IRPF anual dos sócios e dependentes",
            "Guias prontas e lembretes de vencimento",
          ],
        },
        {
          icone: "🔗",
          titulo: "Conectado no que você já usa",
          texto:
            "Se a venda está no PDV Pro e a folha no HoraPro, o contador não precisa te pedir o mesmo arquivo todo mês.",
          itens: [
            "Integração nativa com os outros Luqsys",
            "Lançamentos contábeis automatizados",
            "XMLs e relatórios sem reenvio manual",
            "Fechamento com o dado da operação",
          ],
        },
      ]}
      prints={[
        {arquivo: "/prints/contabilidadepro-0.jpg", legenda: "Painel contábil da empresa"},
        {arquivo: "/prints/contabilidadepro-1.jpg", legenda: "Lançamentos do período"},
      ]}
      praQuem={[
        {icone:"🧾", titulo:"MEI e Simples que só recebe guia", texto:"Quem nunca conseguiu falar com o contador sem ser no vencimento."},
        {icone:"🔗", titulo:"Quem já usa outro Luqsys", texto:"O dado da operação vira lançamento sem reenviar arquivo."},
        {icone:"👨‍👩‍👧", titulo:"Sócio com IRPF pra entregar", texto:"PJ e PF na mesma casa, sem dois profissionais."},
      ]}
      naoServe={[
        "Sua empresa é Lucro Real com operação complexa — fale com a gente antes, o pacote padrão é Simples",
        "Você quer só o software e manter o seu contador: dá pra conversar, mas o pacote foi feito junto",
      ]}
      faq={[
        {
          p: "Preciso trocar de contador pra usar?",
          r: "Pra usar o pacote completo, sim — o contador vem junto. Se você quer só o software e manter o seu contador, dá pra conversar: os relatórios saem no formato que ele já usa.",
        },
        {
          p: "Minha empresa não é Simples. Serve?",
          r: "O pacote padrão é desenhado pro Simples Nacional, que é a maioria. Fora dele, fale com a gente antes pra confirmar se o seu regime está coberto.",
        },
      ]}
      features={[
        "PJ + PF (sócios e família)",
        "Integração nativa com outros Luqsys",
        "Contador dedicado por e-mail/WhatsApp",
        "DAS Simples Nacional mensal",
        "DCTFWeb e eSocial",
        "IRPF anual (sócios e dependentes)",
        "Guias de impostos prontas",
        "Lembretes de vencimento",
        "Lançamentos contábeis automatizados",
      ]}
      planos={[
        {
          nome: "Software",
          publico: "Só o sistema, sem contador",
          precoLabel: "R$ 99",
          features: [
            "Software completo",
            "PJ + PF",
            "Lançamentos automáticos",
            "Integração com sistemas Luqsys",
            "Lembretes de vencimento",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Software",
          ctaHref: "https://www.asaas.com/c/alf8qiy9p8nazwx8",
        },
        {
          nome: "Pro",
          publico: "Software + contador dedicado",
          precoLabel: "R$ 199",
          features: [
            "Tudo do Software",
            "Contador dedicado por WhatsApp",
            "Guias mensais (DAS etc)",
            "DCTFWeb + eSocial",
            "IRPF de até 2 sócios + dependentes",
            "Suporte WhatsApp prioritário",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/4ugw3ktqktdu8kqt",
          destaque: true,
        },
        {
          nome: "Premium",
          publico: "Múltiplas empresas e sócios",
          precoLabel: "R$ 399",
          features: [
            "Tudo do Pro",
            "Até 3 CNPJs",
            "IRPF ilimitado (sócios + família)",
            "Assessoria fiscal/tributária",
            "Planejamento tributário anual",
            "Suporte 24h em dia útil",
          ],
          ctaLabel: "Assinar Premium",
          ctaHref: "https://www.asaas.com/c/4w4k8ghm6n06vsxy",
        },
      ]}
      ctaFinalTitulo="Pare de pagar dois lugares"
      ctaFinalTexto="Software + contador no mesmo pacote. Tudo conversando."
    appUrl="https://contabilidadepro.luqsys.com.br"
    assinarUrl="https://www.asaas.com/c/alf8qiy9p8nazwx8"
    />
  );
}
