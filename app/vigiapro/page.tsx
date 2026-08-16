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
