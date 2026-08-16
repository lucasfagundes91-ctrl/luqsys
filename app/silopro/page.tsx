import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "SiloPro — Pesagem de silo em tempo real",
  description:
    "Registre cada caminhão de milho e soja no silo da fazenda — peso bruto, tara e líquido, com foto. Leitura automática da balança e dashboard no celular.",
};

export default function SiloProPage() {
  return (
    <ProductLayout
      tema="silopro"
      icone="⚖️"
      nome="SiloPro"
      tagline="A balança do silo direto no seu celular"
      descricao={
        <>
          Registre cada caminhão de{" "}
          <strong className="text-white">milho e soja</strong> no silo da
          fazenda — peso bruto, tara e líquido, com foto do caminhão. E
          acompanhe a colheita em tempo real, de onde estiver.
        </>
      }
      ctaPrimaria={{
        label: "Falar com vendas",
        href: "mailto:contato@luqsys.com.br?subject=Quero%20o%20SiloPro",
      }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      passos={[
        {
          n: "1",
          titulo: "Pesa na balança",
          texto:
            "O app no computador do silo lê o peso direto da balança pela porta serial. Bruto, tara e líquido calculados automaticamente.",
        },
        {
          n: "2",
          titulo: "Registra a carga",
          texto:
            "Placa, motorista, produto e talhão de origem, mais a foto do caminhão. Um clique e a pesagem vai pra nuvem.",
        },
        {
          n: "3",
          titulo: "Acompanha de longe",
          texto:
            "Dashboard no celular em tempo real, com totais por produto e por talhão. E um aviso no WhatsApp a cada carga registrada.",
        },
      ]}
      features={[
        "Leitura automática da balança (porta serial)",
        "Pesagem dupla: bruto − tara = líquido",
        "Foto do caminhão em cada pesagem",
        "Funciona offline — reenvia quando a internet volta",
        "Dashboard no celular em tempo real",
        "Cadastro de talhões e motoristas",
        "Totais por produto e por talhão",
        "Aviso no WhatsApp a cada carga",
        "Lançamento manual e correção de registros",
        "Exportação Excel por período",
      ]}
      planos={[
        {
          nome: "SiloPro",
          publico: "Fazenda com silo",
          precoLabel: "R$ 99",
          features: [
            "Pesagens ilimitadas",
            "App de balança pro computador do silo",
            "Dashboard no celular em tempo real",
            "Cadastro de talhões e motoristas",
            "Foto do caminhão + exportação Excel",
            "Aviso no WhatsApp a cada carga",
            "Suporte por WhatsApp",
          ],
          ctaLabel: "Assinar SiloPro",
          ctaHref: "https://www.asaas.com/c/t7ch28ki5aip1fpu",
          destaque: true,
        },
      ]}
      ctaFinalTitulo="Rastreabilidade total da sua colheita"
      ctaFinalTexto="Cada carga pesada, fotografada e registrada — do talhão ao silo."
      appUrl="https://silopro.luqsys.com.br"
      assinarUrl="https://www.asaas.com/c/t7ch28ki5aip1fpu"
    />
  );
}
