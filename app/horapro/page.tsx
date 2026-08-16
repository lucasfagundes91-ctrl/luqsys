import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "HoraPro — Ponto eletrônico REP-P (Portaria 671)",
  alternates: { canonical: "https://www.luqsys.com.br/horapro" },
  description:
    "Ponto eletrônico online em conformidade com a Portaria MTP 671/2021. Multi-tenant, selfie, GPS, AFD/AEJ, ATTR — pra PME brasileira.",
};

export default function HoraProPage() {
  return (
    <ProductLayout
      tema="horapro"
      icone="⏱️"
      nome="HoraPro"
      tagline="Ponto eletrônico REP-P em conformidade total"
      descricao={
        <>
          Online, com <strong className="text-white">selfie + GPS</strong>,
          comprovante por batida e AFD/AEJ/ATTR prontos pra fiscalização.
          Conformidade com a <strong className="text-white">Portaria MTP 671/2021</strong>.
        </>
      }
      ctaPrimaria={{
        label: "Falar com vendas",
        href: "mailto:contato@luqsys.com.br?subject=Quero%20o%20HoraPro",
      }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      passos={[
        {
          n: "1",
          titulo: "Cadastra empresa e funcionários",
          texto:
            "Empresa, jornada (Comercial 8h pré-pronta), funcionários. Cada um recebe QR code/token via WhatsApp pra bater ponto.",
        },
        {
          n: "2",
          titulo: "Funcionário bate ponto",
          texto:
            "Página pública /ponto/<token> com selfie e GPS opcionais. Comprovante PDF gerado na hora com hash criptográfico.",
        },
        {
          n: "3",
          titulo: "Você fiscaliza e fecha",
          texto:
            "Dashboard ao vivo. Espelho de Ponto mensal. AFD (Anexo II), AEJ (Anexo VI) e ATTR com assinatura PAdES ICP-Brasil.",
        },
      ]}
      problema={{
        titulo: "Ponto errado não é detalhe — é processo trabalhista",
        texto: (
          <>
            <p>
              Caderninho na portaria e planilha no fim do mês não valem como
              prova. A Portaria 671 pede registro sequencial, íntegro e
              exportável — e é isso que o juiz vai pedir pra ver.
            </p>
            <p>
              O HoraPro é REP-P: cada batida ganha número sequencial, hash de
              integridade e comprovante na hora. O AFD sai pronto quando
              pedirem.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "⚖️",
          titulo: "Conformidade de verdade",
          texto:
            "Não é ponto genérico com cara de conformidade: é o que a Portaria 671 exige, do NSR ao arquivo assinado.",
          itens: [
            "NSR sequencial criptográfico (Portaria 671)",
            "Hash SHA256 de integridade em cada registro",
            "AFD, AEJ e ATTR com ICP-Brasil",
            "Comprovante em PDF na hora da batida",
          ],
        },
        {
          icone: "📍",
          titulo: "Bate de onde trabalha",
          texto:
            "Selfie e GPS conforme a sua regra. O perímetro serve pra marcar onde foi a batida — não pra impedir o funcionário de bater.",
          itens: [
            "Selfie e GPS configuráveis por empresa",
            "Perímetro por latitude, longitude e raio",
            "Várias sedes na mesma empresa",
            "Lembrete de saída pra quem esqueceu",
          ],
        },
        {
          icone: "🧮",
          titulo: "O mês fecha sozinho",
          texto:
            "Banco de horas, ajustes e justificativas com trilha de quem alterou o quê — e a folha puxa daqui.",
          itens: [
            "Banco de horas",
            "Ajustes e justificativas com histórico",
            "Grade do mês por funcionário",
            "Integração com a folha do FarmPro",
          ],
        },
      ]}
      faq={[
        {
          p: "Preciso comprar relógio de ponto?",
          r: "Não. O REP-P é software: o funcionário bate pelo próprio celular. Isso é o que a Portaria 671 permite desde 2021 — e é por isso que sai muito mais barato que relógio de parede.",
        },
        {
          p: "E quem trabalha sem sinal de celular?",
          r: "A batida fica registrada no aparelho e sobe quando o sinal volta, mantendo o horário real. O perímetro marca a localização, mas não trava o registro.",
        },
      ]}
      features={[
        "Multi-tenant: cada empresa isolada",
        "NSR sequencial criptográfico (Portaria 671)",
        "Selfie + GPS configurável por empresa",
        "Perímetro GPS (lat/lon/raio)",
        "Comprovante PDF instantâneo",
        "Hash SHA256 de integridade",
        "AFD + AEJ + ATTR (com ICP-Brasil)",
        "Banco de horas",
        "Ajustes e justificativas",
      ]}
      planos={[
        {
          nome: "Básico",
          publico: "Equipe pequena (até 5 func)",
          precoLabel: "R$ 29",
          features: [
            "Até 5 funcionários",
            "Ponto via QR/token",
            "Selfie + GPS opcional",
            "Comprovante PDF",
            "Espelho de ponto mensal",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Básico",
          ctaHref: "https://www.asaas.com/c/67uk3ksmifuifly7",
        },
        {
          nome: "Pro",
          publico: "PME completa (até 20 func)",
          precoLabel: "R$ 49",
          features: [
            "Até 20 funcionários inclusos",
            "Funcionários extras: R$ 5/mês cada",
            "AFD + AEJ (Anexo II e VI)",
            "ATTR com PAdES ICP-Brasil",
            "Banco de horas + ajustes",
            "Justificativas e abonos",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/a77msa0ndv1smwxn",
          destaque: true,
        },
        {
          nome: "Empresa",
          publico: "Empresa grande (50+ func)",
          precoLabel: "R$ 149",
          features: [
            "Tudo do Pro",
            "Até 50 funcionários inclusos",
            "Extras: R$ 4/mês cada",
            "Multi-empresa (matriz + filiais)",
            "API pra folha (eSocial)",
            "Suporte prioritário",
          ],
          ctaLabel: "Assinar Empresa",
          ctaHref: "https://www.asaas.com/c/gtru0vknwtodd96y",
        },
      ]}
      rodapeHero="3 planos. Pro a partir de R$ 49 (até 20 func). Sem fidelidade."
      ctaFinalTitulo="Ponto eletrônico sem dor de cabeça"
      ctaFinalTexto="Fiscalização do trabalho não vai te pegar de surpresa."
    appUrl="https://horapro.luqsys.com.br"
    assinarUrl="https://www.asaas.com/c/a77msa0ndv1smwxn"
    />
  );
}
