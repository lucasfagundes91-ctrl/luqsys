import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "VigiaPro — suas câmeras param de gravar e passam a avisar",
  description:
    "Alarme inteligente pras câmeras que você já tem: aviso no WhatsApp com a foto quando aparece pessoa, carro ou animal na zona e no horário que importam. Análise no local, sem abrir porta no roteador.",
};

/* Landing completa e independente, no padrão do SiloPro (/p/silopro).

   Único sistema da casa que NÃO é autoatendimento: a venda envolve o mini PC
   instalado no local. Por isso a CTA principal é WhatsApp, não existe trial e
   nenhuma frase promete teste grátis — o app nem tem rota de cadastro.

   A demonstração existe e é um deploy à parte (demo.vigiapro.luqsys.com.br),
   com banco próprio e imagens de evento desenhadas por computador. Nenhuma
   câmera de cliente aparece no site. Conferido respondendo 200 antes de linkar.

   A instalação é cobrada uma vez, sob orçamento. Ela NÃO virou um card de
   plano aqui porque o LandingLayout carimba "/mês" em todo preço, e "sob
   orçamento/mês" venderia uma mensalidade que não existe. Ela aparece na nota
   dos planos, num bloco e no FAQ. */

const ZAP =
  "https://wa.me/5545991077788?text=" +
  encodeURIComponent("Oi Lucas, quero saber do VigiaPro pras minhas câmeras");

export default function VigiaProLanding() {
  return (
    <LandingLayout
      slug="vigiapro"
      nome="VigiaPro"
      icone="📹"
      whatsapp="5545991077788"
      promessa="Suas câmeras param de gravar e passam a avisar"
      subpromessa={
        <>
          Câmera boa todo mundo tem — o problema é que{" "}
          <strong className="text-white">ninguém fica olhando</strong>. O
          VigiaPro assiste por você e chama no{" "}
          <strong className="text-white">WhatsApp com a foto</strong> quando
          aparece pessoa, carro ou animal na zona e no horário que importam.
        </>
      }
      ctaPrincipal={{ label: "Falar com o Lucas", href: ZAP }}
      ctaSecundaria={{
        label: "Ver a demonstração",
        href: "https://demo.vigiapro.luqsys.com.br/",
      }}
      notaCta="✦ A instalação é agendada com você · usa as câmeras que você já tem · não é autoatendimento"
      problema={{
        titulo: "Câmera que só grava serve pra ver o prejuízo depois",
        paragrafos: [
          "O portão ficou aberto às 2h da manhã e você descobriu de manhã, quando já não fazia diferença. O gado saiu pela cerca e alguém viu no dia seguinte. A gravação estava lá o tempo todo — só não tinha ninguém olhando.",
          "É assim em quase todo lugar: o gravador roda 24 horas, guarda semanas de vídeo, e a única hora em que alguém abre é depois que o estrago aconteceu, pra procurar o minuto em que ele aconteceu. A câmera vira prova, não vira proteção.",
          "O VigiaPro assiste por você. Ele reconhece o que está vendo — pessoa, carro, moto, caminhão, animal —, aplica a regra que você definiu pra aquela zona e aquele horário, e te chama no WhatsApp com a foto do momento. A câmera continua gravando; o que muda é que agora alguém está olhando.",
        ],
      }}
      antesDepois={[
        {
          antes: "Descobrir de manhã o que aconteceu às 2h",
          depois: "WhatsApp com a foto no minuto em que acontece",
        },
        {
          antes: "Abrir o gravador e caçar o minuto no meio de horas de vídeo",
          depois: "Histórico só dos eventos, com foto, câmera, zona e horário",
        },
        {
          antes: "Alerta de movimento tocando com folha no vento e chuva",
          depois: "Regra por objeto, zona, horário e dia — o resto não te acorda",
        },
        {
          antes: "Fazenda, empresa e casa em três aplicativos diferentes",
          depois: "Um painel só, cada local com o seu telefone de destino",
        },
        {
          antes: "Câmera fora do ar há uma semana e ninguém percebeu",
          depois: "Aviso quando uma câmera para de responder",
        },
        {
          antes: "Porta aberta no roteador pra ver a câmera de fora",
          depois: "Só HTTPS de saída — nada da sua rede exposto na internet",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "Um mini PC no local",
          texto:
            "Ele processa as câmeras ali dentro, na sua rede. Vinte câmeras subindo vídeo pra nuvem seriam 40 a 80 Mbps de upload — nenhuma internet de fazenda aguenta isso, então a análise fica no local.",
        },
        {
          n: "2",
          titulo: "Você diz o que importa",
          texto:
            "Pessoa no pátio depois das 19h. Carro na entrada de madrugada. Boi fora da cerca. A regra é por objeto, zona, horário e dia da semana — montada junto com você na instalação.",
        },
        {
          n: "3",
          titulo: "O aviso chega com a foto",
          texto:
            "WhatsApp com o print do momento e o painel guardando o histórico. Fazenda, empresa e casa num lugar só, cada local com o seu telefone de destino.",
        },
      ]}
      blocos={[
        {
          icone: "👁️",
          titulo: "Ele sabe o que está vendo",
          texto:
            "Detector de movimento comum dispara com folha, chuva e sombra, e em uma semana você desliga o aviso. Aqui o sistema reconhece o objeto antes de decidir se te chama — é isso que faz o alerta continuar valendo alguma coisa no mês que vem.",
          itens: [
            "Reconhece pessoa, carro, moto, caminhão e animal",
            "Zonas por câmera: o pátio avisa, a rua não",
            "Regra por horário e por dia da semana",
            "Confiança mínima por alarme, pra cortar o duvidoso",
            "Anti-spam: o mesmo bicho passando não vira dez mensagens",
            "Aviso com a foto do momento anexada",
          ],
          print: {
            arquivo: "/prints/vigiapro-1.jpg",
            legenda: "Alarmes por objeto, zona, horário e local",
          },
        },
        {
          icone: "📱",
          titulo: "O aviso que chega onde você já olha",
          texto:
            "Aplicativo que precisa ser aberto não avisa ninguém às 3h da manhã. O VigiaPro manda no WhatsApp, com a foto, pro telefone que cuida daquele local.",
          itens: [
            "WhatsApp com o snapshot do evento",
            "E-mail também, quando fizer sentido pro alarme",
            "Telefone de destino diferente por local",
            "Histórico com objeto, câmera, zona e horário de cada evento",
            "Link pro vídeo do momento, quando o local está acessível",
          ],
          print: {
            arquivo: "/prints/vigiapro-0.jpg",
            legenda: "Histórico de eventos, cada um com a foto do momento",
          },
        },
        {
          icone: "🏘️",
          titulo: "Fazenda, empresa e casa no mesmo painel",
          texto:
            "Quem tem mais de um lugar pra cuidar não quer três aplicativos e três senhas. É um painel só, com regras e destinatários separados por local.",
          itens: [
            "Vários locais no mesmo painel",
            "Filtro de eventos por local",
            "Regras próprias de cada local, sem misturar",
            "Câmera pode ser silenciada por um tempo e reativada depois",
            "Avisa quando uma câmera para de responder",
          ],
        },
        {
          icone: "📈",
          titulo: "Relatório pra entender o movimento",
          texto:
            "Depois de algumas semanas, os eventos contam uma história: a que hora tem gente, em que dia o movimento muda, qual câmera dispara mais. Serve pra ajustar a regra — e às vezes pra ajustar a rotina.",
          itens: [
            "Períodos de 7, 30 e 90 dias",
            "Eventos por dia e movimento por hora do dia",
            "Totais por objeto, por câmera e por local",
            "Quantos viraram alerta de verdade",
            "Exportação em CSV",
          ],
        },
        {
          icone: "🔒",
          titulo: "Sem abrir a sua rede",
          texto:
            "Câmera exposta na internet é problema conhecido. Aqui o mini PC processa tudo dentro da sua rede e só fala pra fora por HTTPS de saída — não existe porta aberta no seu roteador pra alguém achar.",
          itens: [
            "Só HTTPS de saída, sem redirecionamento de porta",
            "O vídeo não sai do local; só o evento sobe",
            "Continua gravando local mesmo com a internet fora",
            "Cada local tem o seu token, separado dos outros",
          ],
        },
        {
          icone: "🛠️",
          titulo: "A instalação é feita com você",
          texto:
            "Essa é a parte que não dá pra vender por botão. Alguém precisa ver as câmeras que você tem, entender o que precisa ser vigiado e desenhar as zonas — por isso a conversa começa no WhatsApp e a instalação sai sob orçamento.",
          itens: [
            "Mini PC com acelerador de IA, instalado no local",
            "Na maioria dos casos, usa as câmeras IP que você já tem",
            "Configuração das câmeras e desenho das zonas",
            "Regras montadas junto com você, no seu horário de funcionamento",
            "Cobrada uma vez, sob orçamento — não é mensalidade",
          ],
        },
      ]}
      paraQuem={[
        {
          icone: "🌾",
          titulo: "Fazenda com pátio e maquinário",
          texto:
            "Onde ninguém dorme perto do que precisa ser vigiado, e a internet não aguenta subir vídeo.",
        },
        {
          icone: "🏢",
          titulo: "Empresa fechada à noite",
          texto:
            "Movimento fora do horário é sempre notícia — e no fim de semana, mais ainda.",
        },
        {
          icone: "🏠",
          titulo: "Casa com câmera já instalada",
          texto:
            "Aproveita o que existe e só acrescenta a parte que faltava: o aviso na hora.",
        },
      ]}
      naoServe={[
        "Você quer só gravar pra ver depois — o gravador que você já tem faz isso, e de graça",
        "Você não pode instalar um mini PC no local: a análise precisa acontecer lá dentro, é o que segura o custo de internet",
        "Você quer alguém acionando a polícia por você: o VigiaPro avisa, quem decide o que fazer é você",
      ]}
      planos={[
        {
          nome: "VigiaPro",
          preco: "R$ 99",
          publico: "Por local monitorado",
          destaque: true,
          itens: [
            "Câmeras ilimitadas no local",
            "Regras ilimitadas por câmera e zona",
            "Alerta no WhatsApp com a foto",
            "Histórico de eventos com snapshot",
            "Relatórios de 7, 30 e 90 dias com exportação",
            "Painel multi-local",
            "Suporte por WhatsApp",
          ],
          ctaLabel: "Falar com o Lucas",
          ctaHref: ZAP,
        },
      ]}
      notaPlanos="A instalação é cobrada à parte, uma vez só e sob orçamento: mini PC com acelerador de IA, configuração das câmeras, desenho das zonas e as regras montadas junto com você. Peça o orçamento no WhatsApp — depende de quantas câmeras e quantos locais."
      faq={[
        {
          p: "Preciso trocar minhas câmeras?",
          r: "Na maioria dos casos não. Câmera IP que já está instalada costuma servir, e é justamente o que a gente prefere aproveitar. O que entra novo é o mini PC que faz a análise no local. Manda uma foto do que você tem no WhatsApp que a gente confirma antes de qualquer orçamento.",
        },
        {
          p: "Por que precisa de um computador no local?",
          r: "Porque vinte câmeras subindo vídeo pra nuvem dariam de 40 a 80 Mbps de upload sem parar, e nenhuma internet de fazenda — nem a maioria das de empresa — aguenta isso. Analisando no local, só o evento sobe, e um evento é uma foto. É o que faz a conta fechar tanto na internet quanto no preço.",
        },
        {
          p: "Vou receber alerta a noite inteira?",
          r: "Só do que você pedir. A regra é por objeto, zona, horário e dia da semana: carro na entrada às 3h avisa; folha balançando no vento, não. Cada alarme ainda tem confiança mínima e um intervalo anti-spam, pra que o mesmo bicho passando duas vezes não vire dez mensagens.",
        },
        {
          p: "E se a internet cair?",
          r: "O gravador continua gravando local normalmente, porque ele não depende da nuvem pra funcionar. O que fica em falta enquanto a conexão está fora é o aviso — o mini PC só consegue mandar o WhatsApp quando volta a ter linha.",
        },
        {
          p: "Preciso abrir porta no meu roteador?",
          r: "Não, e essa é uma das razões de o sistema existir desse jeito. A comunicação é só HTTPS de saída, do mini PC pra fora. Nenhuma câmera fica exposta na internet esperando alguém encontrar.",
        },
        {
          p: "Dá pra testar antes de instalar?",
          r: "Teste grátis com as suas câmeras não existe, e a gente prefere dizer isso do que enrolar: depende do mini PC instalado no local. O que dá pra fazer agora é abrir a demonstração e mexer à vontade — são três locais fictícios, e as imagens dos eventos ali são desenhadas por computador, não são câmera de cliente nenhum.",
        },
        {
          p: "O que acontece se eu cancelar?",
          r: "Não tem fidelidade nem multa: você avisa, o ciclo em curso termina e a mensalidade para. O mini PC e as câmeras são seus e ficam onde estão — o que acaba é o painel, os alertas e o histórico na nuvem. Se quiser levar os eventos do período, exporte o CSV antes de encerrar, ou chama no WhatsApp que a gente separa.",
        },
      ]}
      prints={[
        {
          arquivo: "/prints/vigiapro-0.jpg",
          legenda: "Painel: eventos do dia com a foto de cada um, por local",
        },
        {
          arquivo: "/prints/vigiapro-1.jpg",
          legenda: "Alarmes: objeto, zona, horário, canal e anti-spam",
        },
      ]}
      fechamento={{
        titulo: "A gravação não adianta se ninguém está olhando",
        texto:
          "Conta quantas câmeras você tem e onde elas estão. A gente diz se dá pra aproveitar as suas e quanto fica a instalação — sem compromisso.",
      }}
    />
  );
}
