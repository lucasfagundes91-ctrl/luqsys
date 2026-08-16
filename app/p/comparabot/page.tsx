import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "ComparaBot — compare orçamentos pelo WhatsApp",
  description:
    "Manda foto de 2 a 5 orçamentos no WhatsApp e recebe em segundos qual fornecedor é mais barato, item a item, com a melhor combinação de compra. Sem instalar nada.",
};

/* O ComparaBot não tem painel: ele vive dentro do WhatsApp. Por isso esta
   landing mostra a CONVERSA no lugar de telas de sistema — e o texto da
   resposta é saída real da função que atende no WhatsApp, não roteiro
   escrito à mão. A legenda diz "exemplo de conversa" em vez de fingir print
   de celular. */

const ZAP_BOT = "https://wa.me/15559312876?text=" +
  encodeURIComponent("COMPARA — quero comparar orçamentos.");

export default function ComparaBotLanding() {
  return (
    <LandingLayout
      slug="comparabot"
      nome="ComparaBot"
      icone="🧾"
      whatsapp="5545991077788"
      promessa="Qual fornecedor está mais barato? Em segundos, no WhatsApp"
      subpromessa={
        <>
          Manda <strong className="text-white">foto ou texto</strong> de 2 a 5
          orçamentos e recebe a comparação item a item — com a conta de quanto
          você economiza comprando de cada um.
        </>
      }
      ctaPrincipal={{ label: "Comparar agora no WhatsApp", href: ZAP_BOT }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      notaCta="✦ 3 comparações grátis por mês · sem instalar nada · sem cadastro pra começar"
      problema={{
        titulo: "Três orçamentos na mesa e nenhuma hora pra conferir",
        paragrafos: [
          "O fornecedor A é mais barato no cimento, o B no ferro, e o C dá desconto mas cobra frete. Cada um escreve o mesmo produto de um jeito — FERRO CA-50 10mm num, VERGALHÃO CA50 10MM no outro — e um vende por barra enquanto o outro vende por quilo.",
          "Conferir isso direito leva meia hora e uma planilha. Na correria, quase todo mundo olha só o total no rodapé e fecha com quem parecia mais barato.",
          "O ComparaBot faz essa conferência em segundos: agrupa o mesmo produto com nomes diferentes, avisa quando a unidade não bate, e diz onde vale dividir o pedido e onde dividir sai mais caro por causa do frete.",
        ],
      }}
      antesDepois={[
        {
          antes: "Meia hora montando planilha pra comparar 3 orçamentos",
          depois: "Manda as fotos e recebe a comparação em segundos",
        },
        {
          antes: "Olhar só o total do rodapé e torcer",
          depois: "Item a item, com o vencedor de cada linha marcado",
        },
        {
          antes: "Descobrir depois que o frete comeu o desconto",
          depois: "O alerta vem junto, antes de você fechar",
        },
        {
          antes: "Não perceber que um cobra por barra e outro por quilo",
          depois: "O bot avisa quando a unidade não permite comparar",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "Manda os orçamentos",
          texto:
            "Foto do papel, print do e-mail ou o texto colado — de 2 a 5 fornecedores. Ele lê e confirma o que entendeu de cada um.",
        },
        {
          n: "2",
          titulo: "Digita analisar",
          texto:
            "Uma palavra. O bot agrupa os produtos iguais, mesmo escritos diferente, e confere as unidades.",
        },
        {
          n: "3",
          titulo: "Recebe o veredito",
          texto:
            "Resumo, item a item, melhor combinação de compra e a recomendação direta: fechar tudo com quem, ou se vale dividir.",
        },
      ]}
      blocos={[
        {
          icone: "📷",
          titulo: "Lê foto de papel amassado",
          texto:
            "Orçamento raramente chega em planilha bonita. Chega como foto do bloco do vendedor, print de conversa ou PDF — e é assim que ele aceita.",
          itens: [
            "Foto, print ou texto colado",
            "Entende formato brasileiro de valor (R$ 1.293,60)",
            "De 2 a 5 orçamentos por comparação",
            "Funciona no WhatsApp que você já usa, sem instalar nada",
          ],
          print: {
            arquivo: "/prints/comparabot-0.jpg",
            legenda: "Exemplo de conversa — você manda e pede pra analisar",
          },
        },
        {
          icone: "🔎",
          titulo: "Compara o que é comparável",
          texto:
            "O mesmo produto aparece com nome diferente em cada fornecedor, e às vezes em unidade diferente. É aí que a comparação no olho erra.",
          itens: [
            "Agrupa o mesmo item escrito de formas diferentes",
            "Avisa quando a unidade não permite comparar",
            "Marca o vencedor de cada item",
            "Considera frete, desconto e outras despesas no total final",
          ],
        },
        {
          icone: "🛒",
          titulo: "Diz onde vale dividir o pedido",
          texto:
            "Comprar cada item no mais barato nem sempre compensa: o frete separado e o desconto por volume podem comer a diferença. Ele faz essa conta.",
          itens: [
            "Melhor combinação de compra, com o total",
            "Quanto economiza contra fechar tudo num lugar só",
            "Alerta quando dividir sai mais caro",
            "Recomendação final, sem enrolação",
          ],
          print: {
            arquivo: "/prints/comparabot-1.jpg",
            legenda: "Exemplo de conversa — a melhor combinação e o veredito",
          },
        },
      ]}
      paraQuem={[
        {
          icone: "🏗️",
          titulo: "Quem compra material",
          texto:
            "Obra, reforma e manutenção, onde três orçamentos é o mínimo e o preço muda toda semana.",
        },
        {
          icone: "🏪",
          titulo: "Comércio que repõe estoque",
          texto:
            "Quem pede cotação pros mesmos fornecedores todo mês e decide no olho.",
        },
        {
          icone: "🏢",
          titulo: "Quem precisa justificar a escolha",
          texto:
            "A comparação vem escrita, dá pra encaminhar pro sócio ou pro conselho.",
        },
      ]}
      naoServe={[
        "Você quer um sistema de compras com pedido, aprovação e histórico — aqui é comparação pontual, no WhatsApp",
        "Seus orçamentos não têm item discriminado: sem itens, só dá pra comparar o total",
        "Você precisa de integração com ERP — o ComparaBot responde a você, não a outro sistema",
      ]}
      planos={[
        {
          nome: "Grátis",
          preco: "R$ 0",
          publico: "Pra experimentar",
          itens: [
            "3 comparações por mês",
            "Até 5 orçamentos por comparação",
            "Comparação item a item",
            "Sem cadastro",
          ],
          ctaLabel: "Comparar agora",
          ctaHref: ZAP_BOT,
        },
        {
          nome: "Pro",
          preco: "R$ 9",
          publico: "Quem compara toda semana",
          destaque: true,
          itens: [
            "Comparações ilimitadas",
            "Até 5 orçamentos por comparação",
            "Histórico das comparações",
            "Suporte por WhatsApp",
          ],
          ctaLabel: "Assinar o Pro",
          ctaHref: "https://luqsys.com.br/comparabot#planos",
        },
      ]}
      notaPlanos="Os planos e valores completos estão na página do ComparaBot dentro do site da Luqsys."
      faq={[
        {
          p: "Preciso instalar alguma coisa?",
          r: "Não. É uma conversa no WhatsApp: você manda a foto do orçamento e ele responde. Sem app, sem cadastro pra começar.",
        },
        {
          p: "Ele lê foto tirada de qualquer jeito?",
          r: "Lê foto de papel, print de conversa e texto colado. Quanto mais legível, melhor o resultado — se ele não entender algum item, ele avisa em vez de chutar.",
        },
        {
          p: "E se os fornecedores usarem nomes diferentes pro mesmo produto?",
          r: "É justamente o que ele resolve. 'FERRO CA-50 10mm' e 'VERGALHÃO CA50 10MM' entram como o mesmo item. E se um vende por barra e o outro por quilo, ele avisa que aquela linha não dá pra comparar direto.",
        },
        {
          p: "Os meus orçamentos ficam guardados?",
          r: "A comparação fica na conversa, como qualquer mensagem sua. O bot não publica nem compartilha nada com ninguém.",
        },
        {
          p: "Quantos orçamentos posso mandar de uma vez?",
          r: "De 2 a 5. Abaixo de 2 não há o que comparar; acima de 5 a resposta ficaria longa demais pra ler no celular.",
        },
        {
          p: "O que acontece quando acabam as 3 grátis do mês?",
          r: "Ele avisa e oferece o plano pago. No mês seguinte as três voltam — nada trava e nada é cobrado sem você pedir.",
        },
      ]}
      prints={[]}
      fechamento={{
        titulo: "Tem orçamento na mesa agora?",
        texto:
          "Manda as fotos no WhatsApp e recebe a comparação antes de terminar o café.",
      }}
    />
  );
}
