import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "LivroPro — seu livro vira podcast pra ouvir no carro",
  description:
    "Sobe o PDF ou EPUB e recebe um episódio de podcast com dois apresentadores conversando sobre o livro. Cai sozinho no seu app de podcast e toca no CarPlay.",
};

const LINK = "https://www.asaas.com/c/9o2hq6obqes356az";

export default function LivroProPage() {
  return (
    <ProductLayout
      tema="livropro"
      icone="🎧"
      nome="LivroPro"
      tagline="O livro que você não tem tempo de ler, no trajeto de casa pro trabalho"
      descricao={
        <>
          Sobe o arquivo e recebe um episódio de podcast com{" "}
          <strong className="text-white">dois apresentadores conversando</strong>{" "}
          sobre o livro — com os exemplos e os casos dele, não uma lista de
          tópicos. E ele cai sozinho no seu aplicativo de podcast.
        </>
      }
      ctaPrimaria={{ label: "Testar 3 dias grátis", href: "https://livropro.luqsys.com.br/cadastro" }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      passos={[
        {
          n: "1",
          titulo: "Sobe o arquivo",
          texto:
            "PDF, EPUB ou TXT. Livro, apostila, relatório da empresa, material de treinamento — qualquer coisa que você precisa conhecer e não tem tempo de sentar pra ler.",
        },
        {
          n: "2",
          titulo: "Escolhe o tamanho",
          texto:
            "De 10 a 45 minutos. Vinte é o padrão e cabe na ida pro trabalho. Dá pra ajustar a velocidade da fala e ligar ou desligar a música de fundo.",
        },
        {
          n: "3",
          titulo: "Ouve dirigindo",
          texto:
            "O episódio aparece sozinho no seu app de podcast e toca no CarPlay. Você assina seu feed uma vez e nunca mais mexe em arquivo.",
        },
      ]}
      problema={{
        titulo: "A pilha de livros que você comprou e não leu",
        texto: (
          <>
            <p>
              Não é falta de vontade, é falta de uma hora sentado em silêncio.
              Enquanto isso você passa quarenta minutos por dia no trânsito
              ouvindo rádio.
            </p>
            <p>
              O LivroPro pega o livro que está parado e devolve em vinte
              minutos de conversa — com os casos, os números e os nomes que
              estão nele. Não é leitura em voz alta e não é lista de tópicos: é
              o que você lembraria se um amigo que leu tivesse te contado.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "🎙️",
          titulo: "Conversa, não leitura em voz alta",
          texto:
            "Dois apresentadores discutem o livro: um traz a tese, o outro questiona. É esse vaivém que segura vinte minutos de estrada.",
          itens: [
            "Duas vozes que se revezam, com ritmo de rádio",
            "Os exemplos e casos concretos do livro, com nome e número",
            "A crítica junto: onde o autor falha, o episódio diz",
            "Música de fundo que abaixa sozinha quando alguém fala",
          ],
        },
        {
          icone: "🚗",
          titulo: "Cai sozinho no seu carro",
          texto:
            "Você tem um endereço de podcast privado. Assina uma vez no Apple Podcasts ou no Spotify e pronto: episódio novo aparece lá, e toca no CarPlay e no Android Auto.",
          itens: [
            "Feed privado só seu, com endereço secreto",
            "Funciona em Apple Podcasts, Spotify, Pocket Casts e Overcast",
            "Também dá pra baixar o MP3 quando quiser",
            "Endereço revogável num clique, se vazar",
          ],
        },
        {
          icone: "📄",
          titulo: "Não é só livro",
          texto:
            "O mesmo motor engole apostila, norma técnica, contrato longo e relatório de consultoria. Material que a empresa manda e ninguém lê vira episódio que a equipe ouve.",
          itens: [
            "PDF, EPUB e TXT",
            "De 10 a 45 minutos, você escolhe",
            "Velocidade da fala ajustável",
            "Histórico dos episódios, com player na tela",
          ],
        },
      ]}
      praQuem={[
        {icone:"🚗", titulo:"Quem dirige todo dia", texto:"Transformar o trajeto em leitura, sem tirar os olhos da estrada."},
        {icone:"📚", titulo:"Quem compra mais livro do que lê", texto:"A pilha parada vira fila de episódios."},
        {icone:"👔", titulo:"Equipe que precisa se atualizar", texto:"Material de treinamento e relatório longo em formato que a equipe realmente consome."},
      ]}
      naoServe={[
        "Livro comprado na Apple Books ou na Kindle: o arquivo é protegido e nem você consegue exportar",
        "PDF que é foto de página escaneada — sem texto de verdade não tem o que ler",
        "Quem quer o livro na íntegra: aqui é episódio sobre o livro, não audiolivro",
      ]}
      faq={[
        {
          p: "A voz é de gente?",
          r: "Não, é voz sintetizada. É boa, mas em escuta longa você percebe. A música de fundo é gerada pelo próprio sistema, então não tem problema de direito autoral se você compartilhar o episódio.",
        },
        {
          p: "Serve com livro que comprei na Kindle ou na Apple Books?",
          r: "Não. Esses arquivos são protegidos e não saem da biblioteca deles nem pra você. Precisa ser um PDF, EPUB ou TXT que você tenha em mãos.",
        },
        {
          p: "Como faço pra tocar no carro?",
          r: "Você copia o endereço do seu feed e adiciona no seu aplicativo de podcast uma única vez. Daí pra frente todo episódio novo aparece lá sozinho e toca no CarPlay ou Android Auto como qualquer podcast.",
        },
        {
          p: "Quanto tempo demora pra ficar pronto?",
          r: "Alguns minutos, dependendo do tamanho do livro. Pode fechar a página que a produção continua, e o episódio aparece no feed quando terminar.",
        },
        {
          p: "Alguém mais consegue ouvir meus episódios?",
          r: "Só quem tiver o endereço do seu feed, que é secreto e não dá pra adivinhar. Se achar que vazou, um botão troca o endereço e derruba o antigo na hora.",
        },
      ]}
      features={[
        "Upload de PDF, EPUB e TXT",
        "Episódio com dois apresentadores conversando",
        "Duração de 10 a 45 minutos, você escolhe",
        "Velocidade da fala ajustável",
        "Música de fundo com abaixamento automático",
        "Feed de podcast privado, com endereço revogável",
        "Toca no CarPlay e no Android Auto",
        "Download do MP3",
        "Histórico com player na tela",
        "15 episódios por mês",
      ]}
      planos={[
        {
          nome: "LivroPro",
          publico: "Pessoal ou equipe pequena",
          precoLabel: "R$ 49",
          features: [
            "15 episódios por mês",
            "De 10 a 45 minutos cada",
            "Feed de podcast privado",
            "Download do MP3",
            "PDF, EPUB e TXT",
            "Suporte por WhatsApp",
          ],
          ctaLabel: "Assinar LivroPro",
          ctaHref: LINK,
          destaque: true,
        },
      ]}
      ctaFinalTitulo="Aquele livro parado, ouvido essa semana"
      ctaFinalTexto="Testa 3 dias, com dois episódios por conta da casa. Sem cartão."
      appUrl="https://livropro.luqsys.com.br"
      assinarUrl={LINK}
      semDemo
    />
  );
}
