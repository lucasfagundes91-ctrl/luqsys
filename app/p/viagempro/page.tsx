import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "ViagemPro — a viagem inteira num lugar só",
  description:
    "Roteiro dia a dia montado por IA, comparador carro × avião × ônibus, busca de passagem em milhas (Smiles, TudoAzul), onde comer e um assistente que responde durante a viagem.",
};

/* Landing completa e independente, no padrão do SiloPro (/p/silopro).
   Os fatos saem da página curta (app/viagempro/page.tsx) e das telas do
   próprio app — o MilhasPro virou parte daqui na fusão, por isso a parte de
   milhas aparece como recurso e não como outro produto. Preço: assinatura
   única de R$ 99. Só existe um print (viagempro-0), então ele aparece no
   bloco do roteiro e na galeria. */

export default function ViagemProLanding() {
  return (
    <LandingLayout
      slug="viagempro"
      nome="ViagemPro"
      icone="🧳"
      whatsapp="5545991077788"
      promessa="A viagem inteira num lugar só"
      subpromessa={
        <>
          Você diz pra onde e por quantos dias. Ele devolve o{" "}
          <strong className="text-white">roteiro dia a dia</strong>, compara
          como chegar, procura a passagem — inclusive{" "}
          <strong className="text-white">em milhas</strong> — e continua
          respondendo enquanto você está lá.
        </>
      }
      ctaPrincipal={{
        label: "Testar 3 dias grátis",
        href: "https://viagempro.luqsys.com.br/cadastro?trial=1",
      }}
      ctaSecundaria={{
        label: "Ver a demonstração",
        href: "https://viagempro.luqsys.com.br/demo",
      }}
      notaCta="✦ Sem cartão de crédito · sem fidelidade · roda no celular, sem instalar nada"
      problema={{
        titulo: "Planejar viagem virou abrir 14 abas",
        paragrafos: [
          "Uma aba pro voo, uma pro hotel, três pra restaurante, uma pro mapa e um bloco de notas com o roteiro que nunca fica pronto. Cada aba tem um preço que muda, e nenhuma delas conversa com as outras.",
          "No fim acontece uma de duas coisas: você viaja sem plano nenhum e decide tudo na hora, cansado e com fome, ou passa a viagem no celular tentando descobrir o que fazer no dia seguinte. Os dois jeitos custam dias que você pagou pra ter.",
          "O ViagemPro junta as 14 abas numa só: monta o dia a dia, compara carro, avião e ônibus, procura a passagem em dinheiro e em milhas, sugere onde comer perto do que você vai fazer — e continua ali, respondendo, durante a viagem.",
        ],
      }}
      antesDepois={[
        {
          antes: "Folha em branco e três horas no Google Maps",
          depois: "Roteiro dia a dia pronto em minutos, pra você ajustar",
        },
        {
          antes: "Comparar voo, ônibus e gasolina em abas separadas",
          depois: "Carro, avião e ônibus comparados lado a lado, na mesma tela",
        },
        {
          antes: "Milhas paradas sem saber se compensa usar",
          depois: "A conta de milhas × dinheiro feita pro trecho que você quer",
        },
        {
          antes: "Abrir o site da companhia todo dia pra ver se abriu assento",
          depois: "Alerta quando o trecho que você está de olho aparece",
        },
        {
          antes: "Escolher restaurante com fome, na porta do primeiro que aparece",
          depois: "Sugestões perto do que você vai fazer naquele dia, com favoritos",
        },
        {
          antes: "Descobrir o custo da viagem quando a fatura chega",
          depois: "Custo estimado do roteiro por pessoa, enquanto você monta",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "Conta a viagem",
          texto:
            "Destino, datas, quantas pessoas, orçamento e o estilo — família, casal, mochilão. Não sabe pra onde ir? Diz o que procura e ele sugere destinos.",
        },
        {
          n: "2",
          titulo: "A IA monta o roteiro",
          texto:
            "Atividades dia a dia, no ritmo que você pediu, com custo estimado por pessoa. Tudo editável: some, troca, arrasta pra outro dia.",
        },
        {
          n: "3",
          titulo: "Ele vai junto na viagem",
          texto:
            "Chat que responde no contexto do seu roteiro: onde almoçar perto, qual o melhor caminho daqui pro hotel, o que dá pra encaixar hoje.",
        },
      ]}
      blocos={[
        {
          icone: "🗺️",
          titulo: "Roteiro que já nasce pronto",
          texto:
            "A parte difícil de planejar não é escolher: é começar. Em vez da folha em branco, você recebe o dia a dia montado e passa a fazer a coisa fácil, que é discordar e ajustar.",
          itens: [
            "Roteiro dia a dia gerado por IA, no ritmo tranquilo ou intenso",
            "Interesses e idade das crianças entram na conta",
            "Qualquer atividade editável: trocar, remover, mudar de dia",
            "Custo estimado do roteiro por pessoa enquanto você monta",
            "Várias viagens salvas, com status de planejando a concluída",
            "Roteiro compartilhável com quem vai junto",
          ],
          print: {
            arquivo: "/prints/viagempro-0.jpg",
            legenda: "Suas viagens, cada uma com o roteiro pronto",
          },
        },
        {
          icone: "✈️",
          titulo: "Passagem em milhas, sem chute",
          texto:
            "O antigo MilhasPro virou parte daqui. Você diz quantas milhas tem em cada programa e ele responde a única pergunta que interessa: nesse trecho, compensa usar milhas ou pagar em dinheiro?",
          itens: [
            "Busca de passagem em milhas na Smiles e na TudoAzul",
            "Suas milhas por programa, com validade e quanto você pagou por mil",
            "Comparação milhas × dinheiro no mesmo trecho",
            "Alerta das rotas que você está de olho, quando o assento aparece",
            "Promoções saindo da sua cidade e newsletter diária, se você quiser",
            "A emissão é feita por você no programa de fidelidade",
          ],
        },
        {
          icone: "🚗",
          titulo: "Como chegar e onde ficar",
          texto:
            "De Curitiba a Foz, de carro ou de avião? A conta muda com o número de pessoas, e é exatamente por isso que ela precisa ser feita antes de comprar.",
          itens: [
            "Comparador carro × avião × ônibus para o trecho da viagem",
            "Busca de hospedagem pras datas da viagem",
            "Hospedagem salva na viagem com o localizador da reserva",
            "A reserva você fecha no site do hotel ou da companhia",
          ],
        },
        {
          icone: "🍴",
          titulo: "Onde comer, perto do que você vai fazer",
          texto:
            "Restaurante bom a três bairros de distância não serve de nada às 13h. As sugestões saem por cidade e por região do dia, e o que você gostar entra no roteiro.",
          itens: [
            "Sugestões de restaurante nas cidades da viagem",
            "Favoritos que ficam salvos pra próxima",
            "Botão de pôr no roteiro, no dia certo",
            "Rota no Google Maps a partir de onde você está",
          ],
        },
        {
          icone: "💬",
          titulo: "Um assistente que já sabe da sua viagem",
          texto:
            "Não é um chat genérico: ele enxerga o seu roteiro, as suas datas e a cidade onde você está, e responde no meio da rua sem você explicar tudo de novo.",
          itens: [
            "Chat contextual durante a viagem",
            "Perguntas do tipo onde almoçar perto ou o que fazer com chuva",
            "Anotações e observações por atividade",
            "Tudo pelo celular, sem instalar aplicativo",
          ],
        },
      ]}
      paraQuem={[
        {
          icone: "🧳",
          titulo: "Quem viaja e odeia planejar",
          texto:
            "Recebe o roteiro pronto pra editar em vez de encarar a folha em branco duas semanas antes.",
        },
        {
          icone: "👨‍👩‍👧",
          titulo: "Família com dias contados",
          texto:
            "Encaixar tudo sem descobrir na hora que o museu fecha na terça e que o passeio era do outro lado da cidade.",
        },
        {
          icone: "💼",
          titulo: "Viagem de trabalho com folga",
          texto:
            "Compromisso fixo no meio do dia e o resto do roteiro montado em volta dele.",
        },
      ]}
      naoServe={[
        "Você quer emitir a passagem e fechar o hotel aqui dentro — ele planeja, compara e busca; a compra acontece fora",
        "Você já tem o roteiro pronto e só quer guardar: um bloco de notas resolve e sai de graça",
        "Você viaja sempre pro mesmo lugar, já conhece tudo e não quer sugestão nenhuma",
      ]}
      planos={[
        {
          nome: "ViagemPro",
          preco: "R$ 99",
          publico: "Planejamento e passagem, no mesmo lugar",
          destaque: true,
          itens: [
            "Viagens ilimitadas, com roteiro completo por IA",
            "Comparador carro × avião × ônibus",
            "Busca de passagem em milhas (Smiles, TudoAzul)",
            "Alerta quando o trecho que você quer aparece",
            "Sugestões de restaurante com favoritos",
            "Assistente que responde durante a viagem",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar o ViagemPro",
          ctaHref: "https://www.asaas.com/c/3ie5r2bm9s1kugtp",
        },
      ]}
      notaPlanos="Um plano só, com tudo dentro. O MilhasPro virou parte do ViagemPro — não são duas assinaturas."
      faq={[
        {
          p: "Ele compra a passagem ou reserva o hotel?",
          r: "Não. Ele busca: passagem em dinheiro, passagem em milhas na Smiles e na TudoAzul, e hospedagem pras suas datas. A compra e a emissão você faz no site da companhia, no programa de fidelidade ou no hotel. Quem guarda o seu cartão continua sendo eles.",
        },
        {
          p: "E se eu não gostar do roteiro que a IA montou?",
          r: "Você edita tudo: troca atividade, remove, muda de dia, ou manda regerar dizendo o que quer diferente. O roteiro é um ponto de partida — o objetivo é você não começar do zero, não é você aceitar o que veio.",
        },
        {
          p: "Não tenho milhas. Perco metade do sistema?",
          r: "Não. A parte de milhas é um recurso a mais: sem elas o roteiro, o comparador de transporte, os restaurantes e o assistente funcionam igual, e a busca de passagem em dinheiro continua valendo.",
        },
        {
          p: "Funciona no celular?",
          r: "Funciona, e é onde ele foi pensado pra ser usado — abre no navegador, sem instalar aplicativo. Vale contar com internet no destino pra usar o assistente e as buscas, porque as duas coisas consultam dados na hora.",
        },
        {
          p: "Dá pra usar em viagem de trabalho?",
          r: "Dá. Você põe o compromisso fixo no dia e o roteiro é montado em volta dele — o que sobra de tempo vira passeio e refeição perto do lugar onde você já vai estar.",
        },
        {
          p: "Dá pra ver antes de pagar?",
          r: "Dá. A demonstração abre agora com viagens de exemplo pra você mexer à vontade, e o teste de 3 dias cria a sua conta de verdade, sem cartão de crédito.",
        },
        {
          p: "O que acontece se eu cancelar?",
          r: "Sem fidelidade e sem multa: você cancela e o acesso vai até o fim do período já pago, sem ligação de retenção. Se quiser levar os roteiros das viagens que já fez, chama no WhatsApp antes de encerrar que a gente separa pra você.",
        },
      ]}
      prints={[
        {
          arquivo: "/prints/viagempro-0.jpg",
          legenda: "Minhas viagens: destino, datas, pessoas e orçamento de cada uma",
        },
        {arquivo: "/prints/viagempro-2.jpg", legenda: "Busca de passagem em milhas, com veredito"},
      ]}
      fechamento={{
        titulo: "Sua próxima viagem planejada em minutos",
        texto:
          "Sem 14 abas e sem três horas no mapa. A IA monta, você ajusta, e ele vai junto na viagem. Testa 3 dias sem cartão.",
      }}
    />
  );
}
