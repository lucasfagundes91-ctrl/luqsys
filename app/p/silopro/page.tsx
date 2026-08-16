import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "SiloPro — a balança do silo no seu celular",
  description:
    "Cada caminhão pesado, classificado e registrado com foto. Leitura automática da balança, romaneio em duas vias, estoque por silo e produtividade por alqueire. Sem papel molhado no fim da safra.",
};

/* Modelo do padrão de landing independente (17/08/2026). O Lucas quer uma
   página completa por sistema, fora do site da Luqsys, pra depois cada uma
   ganhar domínio próprio. Esta é a referência que os outros seguem: mesma
   estrutura, conteúdo e cor de cada produto. */

const ZAP = (t: string) =>
  "https://wa.me/5545991077788?text=" + encodeURIComponent(t);

export default function SiloProLanding() {
  return (
    <LandingLayout
      slug="silopro"
      nome="SiloPro"
      icone="⚖️"
      whatsapp="5545991077788"
      promessa="A balança do silo no seu celular"
      subpromessa={
        <>
          Cada caminhão pesado, classificado e registrado{" "}
          <strong className="text-white">com foto</strong> — e a colheita
          somando sozinha enquanto você está longe do silo.
        </>
      }
      ctaPrincipal={{
        label: "Testar 3 dias grátis",
        href: "https://silopro.luqsys.com.br/cadastro?trial=1",
      }}
      ctaSecundaria={{
        label: "Ver a demonstração",
        href: "https://silopro.luqsys.com.br/demo",
      }}
      notaCta="✦ Sem cartão de crédito · sem fidelidade · o app da balança acompanha"
      problema={{
        titulo: "Na colheita, o que não é pesado vira boato",
        paragrafos: [
          "O caminhão sai do talhão, passa na balança e alguém anota num papel que vai molhar. À noite o papel some, na semana seguinte ninguém lembra de qual talhão veio a carga, e no fim da safra a diferença entre o que entrou e o que saiu do silo vira discussão com o motorista, com o parceiro ou com o comprador.",
          "Enquanto isso a colheita acontece e você está a 40 km dali, sem saber quanto já entrou hoje.",
          "O SiloPro lê o peso direto do indicador da balança, guarda a carga com foto do caminhão e soma tudo em tempo real. O romaneio sai na hora, em duas vias, e o histórico fica de pé quando alguém contesta.",
        ],
      }}
      antesDepois={[
        {
          antes: "Peso anotado à mão num caderno do escritório",
          depois: "Lido direto do indicador, sem digitação e sem erro de leitura",
        },
        {
          antes: "Descobrir a produtividade do talhão só depois da safra",
          depois: "Sacas por alqueire de cada área, atualizando a cada carga",
        },
        {
          antes: "Ligar pro silo pra saber quanto entrou hoje",
          depois: "Aviso no WhatsApp a cada carga e painel no celular",
        },
        {
          antes: "Discussão sobre desconto de umidade no fim do mês",
          depois: "Classificação no romaneio que o motorista leva na hora",
        },
        {
          antes: "Internet caiu, a pesagem parou",
          depois: "Continua pesando offline e sobe sozinho quando volta",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "O app lê a balança",
          texto:
            "Um computador comum no silo, ligado no indicador pela porta serial. Bruto, tara e líquido calculados sozinhos — ninguém digita peso.",
        },
        {
          n: "2",
          titulo: "A carga é registrada",
          texto:
            "Placa, motorista, produto, talhão de origem, silo de destino e a foto do caminhão. Um clique e o romaneio sai em duas vias.",
        },
        {
          n: "3",
          titulo: "Você acompanha de onde estiver",
          texto:
            "Cada carga cai no seu WhatsApp e o painel soma em tempo real, por produto, por talhão e por silo.",
        },
      ]}
      blocos={[
        {
          icone: "⚖️",
          titulo: "A balança conversa com o sistema",
          texto:
            "O peso não passa pela mão de ninguém. O app lê o indicador direto e faz a conta — é isso que tira o erro de digitação do meio do caminho, justamente no número que vale dinheiro.",
          itens: [
            "Leitura automática pela porta serial (indicadores comuns de balança rodoviária)",
            "Pesagem dupla: bruto − tara = líquido",
            "Foto do caminhão anexada a cada pesagem",
            "Funciona offline e reenvia quando a internet volta",
            "Lançamento manual quando precisar, com o mesmo controle",
          ],
          print: {
            arquivo: "/prints/silopro-0.jpg",
            legenda: "Estoque por silo, com entradas e saídas do período",
          },
        },
        {
          icone: "🌡️",
          titulo: "Classificação que fecha com o papel",
          texto:
            "Umidade, impureza e ardido descontam o que têm que descontar — e o romaneio que o motorista leva mostra a mesma conta que está no sistema. Sem recálculo diferente depois.",
          itens: [
            "Desconto por umidade e impureza sobre o líquido",
            "Grão da própria fazenda pode não descontar ardido (é qualidade, não perda de peso)",
            "Romaneio em duas vias, pra motorista e armazém",
            "Ardido médio por silo, pra dosar a carga de venda",
          ],
        },
        {
          icone: "📊",
          titulo: "Fechamento de safra que serve pra negociar",
          texto:
            "Produtividade por alqueire de cada talhão, carga a carga pro comprador conferir, e o estoque real de cada silo. É o que falta na hora de sentar pra vender.",
          itens: [
            "Sacas por alqueire e por hectare, talhão a talhão",
            "Relatório carga a carga com classificação e nota",
            "Estoque por silo com saldo e estoque inicial",
            "Exportação em Excel por período",
          ],
          print: {
            arquivo: "/prints/silopro-2.jpg",
            legenda: "Produtividade por talhão no fechamento da safra",
          },
        },
        {
          icone: "📱",
          titulo: "O silo no seu bolso",
          texto:
            "Você não precisa estar lá pra saber o que está acontecendo lá. E se o computador do silo parar de falar, o sistema te avisa antes de você descobrir pela falta de carga.",
          itens: [
            "Aviso no WhatsApp a cada carga registrada",
            "Painel em tempo real no celular",
            "Aviso quando o PC do silo para de comunicar",
            "Cadastro de talhões, motoristas, clientes e silos",
          ],
        },
      ]}
      paraQuem={[
        {
          icone: "🚜",
          titulo: "Fazenda com silo próprio",
          texto:
            "Quem pesa a própria colheita e quer saber, sem achismo, o que cada área rendeu.",
        },
        {
          icone: "🏭",
          titulo: "Quem armazena pra terceiro",
          texto:
            "Cada dono de grão com o seu romaneio, o seu desconto e o seu histórico.",
        },
        {
          icone: "🤝",
          titulo: "Quem divide a lavoura",
          texto:
            "Parceria e arrendamento ficam mais simples quando a pesagem tem foto e histórico.",
        },
      ]}
      naoServe={[
        "Sua balança não tem indicador com saída serial — dá pra digitar o peso, mas você perde o melhor do sistema",
        "Você procura automação de secador e aeração: o SiloPro cuida da pesagem e do estoque, não do maquinário",
        "Você quer só uma planilha de cargas: aqui tem romaneio, classificação e fiscal junto",
      ]}
      planos={[
        {
          nome: "SiloPro",
          preco: "R$ 99",
          publico: "Por fazenda, sem limite de pesagem",
          destaque: true,
          itens: [
            "Pesagens ilimitadas",
            "App de balança pro computador do silo",
            "Painel no celular em tempo real",
            "Romaneio em duas vias e classificação",
            "Estoque por silo e produtividade por talhão",
            "Aviso no WhatsApp a cada carga",
            "Exportação Excel e relatórios em PDF",
            "Suporte por WhatsApp",
          ],
          ctaLabel: "Assinar o SiloPro",
          ctaHref: "https://www.asaas.com/c/t7ch28ki5aip1fpu",
        },
      ]}
      notaPlanos="Um preço só, sem escalonar por número de cargas — safra boa não pode custar mais caro."
      faq={[
        {
          p: "Serve pra minha balança?",
          r: "Serve pra indicador que manda o peso pela porta serial, que é o caso da grande maioria das balanças rodoviárias. Se a sua for de outro tipo, o operador digita o peso e todo o resto do sistema funciona igual. Manda o modelo no WhatsApp que a gente confirma antes de você assinar.",
        },
        {
          p: "E se cair a internet no meio da colheita?",
          r: "A pesagem continua. O app grava no computador do silo e sobe sozinho quando a conexão volta — colheita não pode parar por causa de sinal.",
        },
        {
          p: "Preciso comprar computador novo pro silo?",
          r: "Não. Qualquer computador com Windows e uma porta serial (ou um adaptador USB-serial) dá conta. O app é leve.",
        },
        {
          p: "Dá pra usar com grão de terceiro?",
          r: "Dá. Cada carga tem o dono do grão, e a regra de desconto segue aquele cliente. Grão da sua fazenda pode ter regra diferente da de quem só está armazenando com você.",
        },
        {
          p: "Como fica o desconto de ardido?",
          r: "Ardido é qualidade, não perda de peso — na entrada do seu próprio grão ele não precisa descontar quilo, porque o grão vai ser misturado no lote. Umidade e impureza continuam descontando sempre, porque essas o grão perde de verdade na secagem e na limpeza. Isso é configurável por cliente.",
        },
        {
          p: "Meu contador consegue usar os dados?",
          r: "Sim — dá pra exportar por período em Excel, e os relatórios saem em PDF pra imprimir ou mandar por WhatsApp.",
        },
      ]}
      prints={[]}
      fechamento={{
        titulo: "Sua colheita merece mais que um caderno",
        texto:
          "Testa 3 dias, com o app da balança rodando no silo. Se não servir pra sua operação, a gente fala isso na sua cara.",
      }}
    />
  );
}
