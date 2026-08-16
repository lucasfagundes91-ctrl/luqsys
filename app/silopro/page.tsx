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
      problema={{
        titulo: "Na colheita, o que não é pesado vira boato",
        texto: (
          <>
            <p>
              O caminhão sai do talhão, passa na balança e alguém anota num
              papel que vai molhar. No fim da safra ninguém sabe quanto cada
              área rendeu, e a diferença entre o que entrou e o que saiu do
              silo vira discussão.
            </p>
            <p>
              O SiloPro lê o peso direto da balança e guarda a carga com foto.
              Você acompanha a colheita do celular, de onde estiver, enquanto
              ela acontece.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "⚖️",
          titulo: "A balança fala com o sistema",
          texto:
            "Nada de digitar peso. O app no computador do silo lê a porta serial do indicador e calcula sozinho.",
          itens: [
            "Leitura automática do indicador (porta serial)",
            "Bruto − tara = líquido, sem conta na mão",
            "Foto do caminhão em cada pesagem",
            "Funciona offline e reenvia quando a internet volta",
          ],
        },
        {
          icone: "🌡️",
          titulo: "Classificação da amostra",
          texto:
            "Umidade, impureza e ardido descontam o que têm que descontar — e o ticket sai igual ao que está no sistema.",
          itens: [
            "Desconto por umidade e impureza no líquido",
            "Grão da própria fazenda não desconta ardido",
            "Romaneio em duas vias pra motorista e armazém",
            "Ardido médio por silo, pra dosar a carga de venda",
          ],
        },
        {
          icone: "📱",
          titulo: "A colheita no seu bolso",
          texto:
            "Cada carga registrada chega no seu WhatsApp e o painel soma sozinho — sem esperar o fim do dia.",
          itens: [
            "Aviso no WhatsApp a cada carga",
            "Painel em tempo real no celular",
            "Totais por produto, talhão e silo",
            "Aviso quando o PC do silo para de comunicar",
          ],
        },
        {
          icone: "📊",
          titulo: "Fechamento da safra",
          texto:
            "Produtividade por alqueire de cada talhão, romaneio por carga e exportação — o que faz falta na hora de vender.",
          itens: [
            "Produtividade em sacas por alqueire e por hectare",
            "Relatório carga a carga pro comprador",
            "Estoque por silo com saldo real",
            "Exportação Excel por período",
          ],
        },
      ]}
      faq={[
        {
          p: "Serve pra minha balança?",
          r: "Serve pra indicador que manda peso pela porta serial, que é o caso da grande maioria. Se a sua for de outro tipo, dá pra digitar o peso na mão e o resto do sistema funciona igual.",
        },
        {
          p: "E se cair a internet no meio da colheita?",
          r: "A pesagem continua. O app grava tudo no computador do silo e sobe sozinho quando a conexão volta — colheita não para por causa de sinal.",
        },
        {
          p: "Dá pra usar com grão de terceiro?",
          r: "Dá. Cada carga tem o dono do grão, e o desconto de classificação segue a regra daquele cliente. Grão da sua fazenda pode ter regra diferente da de quem só está armazenando com você.",
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
