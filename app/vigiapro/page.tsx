import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "VigiaPro — Alarme inteligente pras suas câmeras",
  description:
    "Suas câmeras avisam no WhatsApp quando aparece gente, carro ou animal — na zona e no horário que você escolher. Um painel só pra fazenda, empresa e casa.",
};

/* Único sistema da casa que NÃO é autoatendimento: a venda envolve o mini PC
   que fica no local e a instalação das câmeras. Por isso as CTAs levam pro
   WhatsApp em vez de trial/demo — o app nem tem rota de cadastro, e oferecer
   "Testar 3 dias" aqui cairia num 404, que é justamente o que o ComandaPro
   estava fazendo. */
const ZAP =
  "https://wa.me/5545991077788?text=" +
  encodeURIComponent("Oi Lucas, quero saber do VigiaPro pras minhas câmeras");

export default function VigiaProPage() {
  return (
    <ProductLayout
      tema="vigiapro"
      icone="📹"
      nome="VigiaPro"
      tagline="Suas câmeras param de gravar e passam a avisar"
      descricao={
        <>
          Câmera boa todo mundo tem — o problema é que{" "}
          <strong className="text-white">ninguém fica olhando</strong>. O
          VigiaPro assiste por você e chama no{" "}
          <strong className="text-white">WhatsApp com a foto</strong> quando
          aparece pessoa, carro ou animal na zona e no horário que importam.
        </>
      }
      ctaPrimaria={{ label: "Falar com o Lucas", href: ZAP }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      semDemo
      passos={[
        {
          n: "1",
          titulo: "Um mini PC no local",
          texto:
            "Ele processa as câmeras ali dentro, na sua rede. Vinte câmeras subindo vídeo pra nuvem seriam 40 a 80 Mbps de upload — nenhuma internet de fazenda aguenta, então a análise fica no local.",
        },
        {
          n: "2",
          titulo: "Você diz o que importa",
          texto:
            "Pessoa no pátio depois das 19h. Carro na entrada em qualquer horário. Boi fora da cerca. A regra é por objeto, zona, horário e dia da semana — o resto não te acorda.",
        },
        {
          n: "3",
          titulo: "O aviso chega com a foto",
          texto:
            "WhatsApp com o print do momento, e o painel guarda o histórico. Fazenda, empresa e casa num lugar só, cada local com seu telefone de destino.",
        },
      ]}
      problema={{
        titulo: "Câmera que só grava serve pra ver o prejuízo depois",
        texto: (
          <>
            <p>
              O portão ficou aberto às 2h e você descobriu de manhã. O gado
              saiu pela cerca e alguém viu no dia seguinte. A gravação estava
              lá — só não tinha ninguém olhando.
            </p>
            <p>
              O VigiaPro assiste por você e chama no WhatsApp com a foto,
              no momento em que acontece.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "👁️",
          titulo: "Ele sabe o que está vendo",
          texto:
            "Pessoa, carro, moto, caminhão ou animal — e só na zona e no horário que interessam pra você.",
          itens: [
            "Detecta pessoa, veículo e animal",
            "Zonas por câmera: o pátio avisa, a rua não",
            "Regra por horário e dia da semana",
            "Aviso com a foto do momento anexada",
          ],
        },
        {
          icone: "🏘️",
          titulo: "Fazenda, empresa e casa juntas",
          texto:
            "Um painel só pra todos os locais, cada um com o seu telefone de destino e as suas regras.",
          itens: [
            "Vários locais no mesmo painel",
            "Telefone de destino por local",
            "Histórico de eventos com snapshot",
            "Avisa quando uma câmera para de responder",
          ],
        },
        {
          icone: "🔒",
          titulo: "Sem abrir a sua rede",
          texto:
            "O mini PC processa tudo dentro da sua rede e só fala pra fora por HTTPS. Nada de expor câmera na internet.",
          itens: [
            "Só HTTPS de saída — sem porta aberta no roteador",
            "Vídeo não sai do local; só o evento sobe",
            "Continua gravando local com a internet fora",
            "Usa as câmeras que você já tem",
          ],
        },
      ]}
      praQuem={[
        {icone:"🌾", titulo:"Fazenda com pátio e maquinário", texto:"Onde ninguém dorme perto do que precisa ser vigiado."},
        {icone:"🏢", titulo:"Empresa fechada à noite", texto:"Movimento fora do horário é sempre notícia."},
        {icone:"🏠", titulo:"Casa com câmera já instalada", texto:"Aproveita o que existe e só acrescenta o aviso."},
      ]}
      naoServe={[
        "Você quer só gravar pra ver depois — o gravador que você já tem faz isso",
        "Você não pode instalar um mini PC no local: a análise precisa acontecer lá dentro",
      ]}
      faq={[
        {
          p: "Preciso trocar minhas câmeras?",
          r: "Na maioria dos casos não. Câmera IP que já está instalada costuma servir — o que entra novo é o mini PC que faz a análise no local.",
        },
        {
          p: "Por que precisa de um computador na fazenda?",
          r: "Porque vinte câmeras subindo vídeo pra nuvem dariam 40 a 80 Mbps de upload, e nenhuma internet rural aguenta isso. Analisando no local, só o evento sobe — e um evento é uma foto.",
        },
        {
          p: "Vou receber alerta a noite inteira?",
          r: "Só do que você pedir. A regra é por objeto, zona, horário e dia — carro na entrada às 3h avisa; folha balançando no vento, não.",
        },
      ]}
      featuresTitulo="O que ele faz"
      features={[
        "Detecta pessoa, carro, moto, caminhão e animal",
        "Zonas por câmera — o pátio avisa, a rua não",
        "Regra por horário e dia da semana",
        "WhatsApp com a foto do evento anexada",
        "Telefone de destino diferente por local",
        "Vários locais no mesmo painel (fazenda, empresa, casa)",
        "Histórico de eventos com snapshot",
        "Só HTTPS de saída — sem abrir porta no seu roteador",
        "Continua gravando local mesmo com a internet fora",
        "Avisa quando uma câmera para de responder",
      ]}
      planos={[
        {
          nome: "VigiaPro",
          publico: "Por local monitorado",
          precoLabel: "R$ 99",
          features: [
            "Câmeras ilimitadas no local",
            "Regras ilimitadas por câmera e zona",
            "Alerta no WhatsApp com foto",
            "Histórico de eventos",
            "Painel multi-local",
            "Suporte por WhatsApp",
          ],
          ctaLabel: "Falar com o Lucas",
          ctaHref: ZAP,
          destaque: true,
        },
        {
          nome: "Instalação",
          publico: "Uma vez, por local",
          precoLabel: "sob orçamento",
          features: [
            "Mini PC com acelerador de IA",
            "Configuração das câmeras e das zonas",
            "Regras montadas junto com você",
            "Pode usar as câmeras que você já tem",
          ],
          ctaLabel: "Pedir orçamento",
          ctaHref: ZAP,
        },
      ]}
      ctaFinalTitulo="Câmera que só grava serve pra ver o prejuízo depois"
      ctaFinalTexto="O VigiaPro te chama na hora que a coisa acontece, com a foto do que ele viu."
      rodapeHero="✦ A instalação é agendada com você · usa as câmeras que você já tem"
    />
  );
}
