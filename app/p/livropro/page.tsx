import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "LivroPro — o livro que você não tem tempo de ler, no caminho do trabalho",
  description:
    "Sobe o PDF ou EPUB e recebe um episódio de podcast com dois apresentadores conversando sobre o livro. Cai sozinho no seu app de podcast e toca no CarPlay.",
};

const LINK = "https://www.asaas.com/c/9o2hq6obqes356az";

export default function LivroProLanding() {
  return (
    <LandingLayout
      slug="livropro"
      nome="LivroPro"
      icone="🎧"
      whatsapp="5545991077788"
      promessa="Aquele livro parado vira 20 minutos de estrada"
      subpromessa={
        <>
          Sobe o arquivo e recebe um episódio com{" "}
          <strong className="text-white">dois apresentadores conversando</strong>{" "}
          sobre o livro — e ele aparece sozinho no seu aplicativo de podcast.
        </>
      }
      ctaPrincipal={{
        label: "Testar 3 dias grátis",
        href: "https://livropro.luqsys.com.br/cadastro",
      }}
      ctaSecundaria={{ label: "Ver como funciona", href: "#como" }}
      notaCta="✦ Sem cartão de crédito · dois episódios por conta da casa no teste"
      problema={{
        titulo: "Você compra livro mais rápido do que consegue ler",
        paragrafos: [
          "A pilha na mesa de cabeceira não é falta de vontade. É falta de uma hora sentado em silêncio, que não sobra em nenhum dia da semana.",
          "Enquanto isso você passa quarenta minutos por dia no carro. Ida e volta, todo dia, ouvindo a mesma rádio ou a mesma playlist.",
          "O LivroPro pega o livro que está parado e devolve em vinte minutos de conversa — com os casos, os números e os nomes que estão nele. Não é leitura em voz alta, e não é lista de tópicos: é o que você lembraria se um amigo que leu tivesse te contado no almoço.",
        ],
      }}
      antesDepois={[
        { antes: "Livro comprado há oito meses, no capítulo dois", depois: "Ouvido inteiro na ida e na volta de uma terça" },
        { antes: "Relatório de 90 páginas que ninguém da equipe leu", depois: "Episódio de 20 minutos que todo mundo ouviu" },
        { antes: "Resumo de internet que serve pra qualquer livro", depois: "Os exemplos e casos daquele livro, com nome e número" },
        { antes: "Baixar MP3 e passar pro celular na mão", depois: "Aparece sozinho no app de podcast e toca no CarPlay" },
        { antes: "Audiolivro de 11 horas que você nunca termina", depois: "A ideia inteira em 20 minutos, com a crítica junto" },
      ]}
      passos={[
        { n: "1", titulo: "Sobe o arquivo", texto: "PDF, EPUB ou TXT. Livro, apostila, relatório, norma técnica, material de treinamento." },
        { n: "2", titulo: "Escolhe o tamanho", texto: "De 10 a 45 minutos. Vinte é o padrão e cabe no trajeto. Dá pra ajustar velocidade da fala e música de fundo." },
        { n: "3", titulo: "Ouve dirigindo", texto: "O episódio cai no seu feed privado de podcast e toca no CarPlay e no Android Auto, como qualquer programa." },
      ]}
      blocos={[
        {
          icone: "🎙️",
          titulo: "Conversa, não leitura em voz alta",
          texto:
            "Dois apresentadores discutem o livro: um traz a tese, o outro questiona e discorda. É esse vaivém que segura vinte minutos de estrada — locução única cansa em cinco.",
          itens: [
            "Duas vozes se revezando, com ritmo de rádio",
            "Os exemplos concretos do livro, com nome, número e caso",
            "A crítica junto: onde o autor falha, o episódio diz",
            "Música de fundo que abaixa sozinha quando alguém fala",
            "Velocidade da fala ajustável, de calma a rápida",
          ],
        },
        {
          icone: "🚗",
          titulo: "O carro é o lugar onde isso funciona",
          texto:
            "Você tem um endereço de podcast privado. Cola uma vez no aplicativo e nunca mais mexe em arquivo — todo episódio novo já está lá quando você liga o carro.",
          itens: [
            "Feed privado só seu, com endereço secreto",
            "Apple Podcasts, Spotify, Pocket Casts, Overcast",
            "Toca no CarPlay e no Android Auto",
            "Download do MP3 quando você preferir",
            "Endereço revogável num clique, se vazar",
          ],
        },
        {
          icone: "📄",
          titulo: "Não é só livro",
          texto:
            "O mesmo motor engole o material que a empresa manda e ninguém lê. Relatório de consultoria, norma técnica, contrato longo, apostila de treinamento.",
          itens: [
            "PDF, EPUB e TXT",
            "De 10 a 45 minutos, você escolhe por documento",
            "Histórico com player na própria tela",
            "15 episódios por mês",
          ],
        },
      ]}
      paraQuem={[
        { icone: "🚗", titulo: "Quem dirige todo dia", texto: "Transformar o trajeto em leitura, sem tirar os olhos da estrada." },
        { icone: "📚", titulo: "Quem compra mais livro do que lê", texto: "A pilha parada vira uma fila de episódios que anda." },
        { icone: "👔", titulo: "Equipe que precisa se atualizar", texto: "Material longo em formato que a equipe realmente consome." },
      ]}
      naoServe={[
        "Livro comprado na Apple Books ou na Kindle: o arquivo é protegido e não sai da biblioteca deles nem pra você",
        "PDF que é foto de página escaneada — sem texto de verdade não há o que ler, precisa de OCR antes",
        "Quem quer o livro na íntegra, palavra por palavra: aqui é episódio sobre o livro, não audiolivro",
        "Quem não suporta voz sintetizada: ela é boa, mas em escuta longa você percebe",
      ]}
      planos={[
        {
          nome: "LivroPro",
          preco: "R$ 49",
          publico: "Por mês, sem fidelidade",
          destaque: true,
          itens: [
            "15 episódios por mês",
            "De 10 a 45 minutos cada",
            "Feed de podcast privado",
            "Toca no CarPlay e Android Auto",
            "Download do MP3",
            "PDF, EPUB e TXT",
            "Música de fundo e velocidade ajustáveis",
            "Suporte por WhatsApp",
          ],
          ctaLabel: "Assinar o LivroPro",
          ctaHref: LINK,
        },
      ]}
      notaPlanos="Teste 3 dias com dois episódios por conta da casa, sem cartão."
      faq={[
        {
          p: "A voz é de gente?",
          r: "Não, é sintetizada. É boa, mas em escuta longa você percebe — prefiro dizer isso antes de você assinar. A música de fundo é gerada pelo próprio sistema, então não há problema de direito autoral se você compartilhar o episódio com alguém.",
        },
        {
          p: "Serve com o livro que comprei na Kindle ou na Apple Books?",
          r: "Não serve. Esses arquivos são protegidos e não saem da biblioteca deles nem pra você, que pagou. Precisa ser um PDF, EPUB ou TXT que você tenha em mãos — e boa parte dos livros técnicos e materiais de trabalho já são assim.",
        },
        {
          p: "Como faço pra tocar no carro?",
          r: "Copia o endereço do seu feed e adiciona no seu aplicativo de podcast uma única vez. No Apple Podcasts é Biblioteca, três pontinhos, adicionar por URL. Daí pra frente todo episódio aparece lá sozinho e toca no CarPlay como qualquer podcast.",
        },
        {
          p: "O episódio é fiel ao livro?",
          r: "O sistema lê o arquivo inteiro antes de escrever, e o roteiro sai dos exemplos e casos que estão lá. Mas é um resumo em conversa: cabe a ideia central, os casos principais e a crítica — não cabem os detalhes. Se o livro for decisivo pro seu trabalho, o episódio serve pra você decidir se vale ler inteiro.",
        },
        {
          p: "Quanto tempo demora?",
          r: "Alguns minutos, dependendo do tamanho do livro e da duração escolhida. Pode fechar a página que a produção continua, e o episódio aparece no feed quando terminar.",
        },
        {
          p: "Alguém mais consegue ouvir meus episódios?",
          r: "Só quem tiver o endereço do seu feed, que é secreto e não dá pra adivinhar a partir do seu e-mail. Se achar que vazou, um botão troca o endereço e derruba o antigo na hora.",
        },
      ]}
      prints={[]}
      fechamento={{
        titulo: "Amanhã de manhã, no caminho do trabalho",
        texto:
          "Sobe um livro hoje à noite e ele já está no seu carro amanhã. Testa 3 dias — se não servir pro seu jeito de ouvir, a gente fala isso na sua cara.",
      }}
    />
  );
}
