import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "FalaPro — inglês do zero, falando desde a primeira aula",
  description:
    "Curso de inglês pra quem nunca aprendeu ou trava pra falar. Você fala em toda aula e é corrigido palavra por palavra, com dica de pronúncia em português.",
};

const LINK = "https://www.asaas.com/c/n8tpb3eekssjjrjq";

export default function FalaProPage() {
  return (
    <ProductLayout
      tema="falapro"
      icone="🗣️"
      nome="FalaPro"
      tagline="Inglês do zero, falando desde a primeira aula"
      descricao={
        <>
          Você não fica só lendo e tocando em botão:{" "}
          <strong className="text-white">você fala em toda aula</strong> e o
          FalaPro mostra, palavra por palavra, o que saiu certo e o que precisa
          ajustar — com a dica explicada em português.
        </>
      }
      ctaPrimaria={{ label: "Testar 3 dias grátis", href: "https://falapro.luqsys.com.br/cadastro" }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      passos={[
        {
          n: "1",
          titulo: "Ouve",
          texto:
            "Cada frase vem com a voz de um nativo, em velocidade normal e devagar, e com o jeito de falar escrito com os sons do português (\"rrê-LOU\").",
        },
        {
          n: "2",
          titulo: "Fala",
          texto:
            "Toca no microfone e repete. Cada palavra aparece em verde (certo), amarelo (quase, com sotaque) ou vermelho (não deu pra entender), com uma dica de como acertar.",
        },
        {
          n: "3",
          titulo: "Volta amanhã",
          texto:
            "O que você treinou volta na revisão nos dias certos: você vê a frase em português e fala em inglês, sem olhar. É aí que o inglês gruda.",
        },
      ]}
      problema={{
        titulo: "Você até entende alguma coisa, mas trava na hora de falar",
        texto: (
          <>
            <p>
              A maioria dos aplicativos de curso ensina a ler: você toca na
              palavra certa, acerta o exercício e continua sem conseguir abrir a
              boca no aeroporto ou na reunião.
            </p>
            <p>
              No FalaPro a aula só anda falando. Você ouve, repete em voz alta e
              recebe a correção na hora — do jeito que um professor faria, sem
              pagar R$ 300 ou mais por mês de aula particular.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "🎤",
          titulo: "Correção da sua fala, palavra por palavra",
          texto:
            "O FalaPro escuta como você pronunciou e mostra onde está a diferença — não só se a frase \"passou\".",
          itens: [
            "Verde = certo, amarelo = quase (sotaque), vermelho = não entendido",
            "Dica de pronúncia explicada em português",
            "Voz nativa em velocidade normal e devagar",
            "Pronúncia escrita com os sons do português",
          ],
        },
        {
          icone: "💬",
          titulo: "Conversa de verdade em toda aula",
          texto:
            "Depois de treinar as frases, você usa numa cena: a IA faz o papel do garçom, do agente de imigração ou da recepcionista, e você responde falando.",
          itens: [
            "Um diálogo por aula, com a situação real",
            "Trilha Base: 10 aulas, começando do \"Hello\"",
            "Depois: trilhas de Viagem, Negócios e Dia a dia",
            "Conversa livre por voz com a IA",
          ],
        },
        {
          icone: "🔁",
          titulo: "Feito pra virar hábito",
          texto:
            "Dez minutos por dia fazem mais que duas horas no fim de semana. O FalaPro cuida da repetição pra você.",
          itens: [
            "Revisão espaçada: vê em português, fala em inglês",
            "Sequência de dias praticando",
            "Lembrete diário no WhatsApp",
            "Funciona no celular e instala na tela de início",
          ],
        },
      ]}
      praQuem={[
        {icone:"🌱", titulo:"Quem começa do zero", texto:"A primeira aula começa no \"Hello\" — não precisa saber nada."},
        {icone:"😶", titulo:"Quem trava pra falar", texto:"Entende um pouco, mas não consegue abrir a boca. Aqui a aula só anda falando."},
        {icone:"✈️", titulo:"Quem vai viajar ou fazer negócio", texto:"Aeroporto, hotel, restaurante e reunião — as situações que aparecem de verdade."},
      ]}
      naoServe={[
        "Quem já é fluente e quer preparação pra prova (TOEFL, IELTS)",
        "Quem quer estudar gramática em profundidade: aqui o foco é falar e entender",
        "Quem não pode usar o microfone — sem falar, o curso não funciona",
      ]}
      faq={[
        {
          p: "Preciso saber alguma coisa de inglês?",
          r: "Não. A trilha Base começa do zero absoluto, no \"Hello\", e cada aula só usa palavras que você já viu ou que ela mesma ensina.",
        },
        {
          p: "Como a correção sabe se eu falei certo?",
          r: "Você grava a frase pelo celular e o FalaPro escuta o áudio: mostra cada palavra em verde, amarelo ou vermelho e explica em português o som que precisa ajustar. Fale num lugar sem barulho, com o celular perto da boca.",
        },
        {
          p: "Meu áudio fica guardado?",
          r: "Não. A gravação é usada só pra corrigir a pronúncia e é descartada em seguida. Fica guardado o texto do que foi entendido e a nota, pra montar sua revisão.",
        },
        {
          p: "Quanto tempo por dia?",
          r: "Uma aula leva uns 10 minutos, e a revisão do dia, poucos minutos. Um lembrete no WhatsApp ajuda a não perder a sequência.",
        },
        {
          p: "Funciona no celular?",
          r: "Funciona no navegador do celular e dá pra instalar na tela de início como um aplicativo. No computador também, desde que tenha microfone.",
        },
      ]}
      features={[
        "Correção de pronúncia palavra por palavra",
        "Dica de pronúncia em português",
        "Voz nativa normal e devagar",
        "Pronúncia escrita com sons do português",
        "Diálogo com a IA em toda aula",
        "Trilha Base do zero + Viagem, Negócios e Dia a dia",
        "Conversa livre por voz",
        "Revisão espaçada",
        "Sequência de dias e lembrete no WhatsApp",
        "Instala na tela de início do celular",
      ]}
      planos={[
        {
          nome: "FalaPro",
          publico: "Pra quem quer falar inglês",
          precoLabel: "R$ 49",
          features: [
            "Todas as trilhas e aulas",
            "Correção de pronúncia em todas as aulas",
            "Conversa livre por voz com a IA",
            "Revisão espaçada",
            "Lembrete diário no WhatsApp",
            "Suporte por WhatsApp",
          ],
          ctaLabel: "Assinar FalaPro",
          ctaHref: LINK,
          destaque: true,
        },
      ]}
      ctaFinalTitulo="Sua primeira frase em inglês, falada hoje"
      ctaFinalTexto="Testa 3 dias grátis, sem cartão. Ou experimenta a demonstração sem cadastro."
      appUrl="https://falapro.luqsys.com.br"
      assinarUrl={LINK}
    />
  );
}
