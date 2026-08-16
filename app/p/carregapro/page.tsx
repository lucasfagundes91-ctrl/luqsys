import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "CarregaPro — seu eletroposto sem dar comissão pra ninguém",
  description:
    "Gestão de carregador veicular por OCPP 1.6 J e 2.0.1 nativos: tarifa por horário, RFID, cobrança Pix ao fim da carga e telemetria ao vivo. Sem pagar R$ 0,30-0,50 por kWh pra plataforma do fabricante.",
};

/* Landing independente do CarregaPro (padrão do /p/silopro, 17/08/2026).
   Fatos daqui saem de app/carregapro/page.tsx — preço, link e funcionalidade
   não podem divergir da página curta. Planos seguem a página curta: contato
   por WhatsApp, sem link de assinatura direta. */

export default function CarregaProLanding() {
  return (
    <LandingLayout
      slug="carregapro"
      nome="CarregaPro"
      icone="⚡"
      whatsapp="5545991077788"
      promessa="Seu eletroposto sem dar comissão pra ninguém"
      subpromessa={
        <>
          O carregador é seu e a energia você paga. O CarregaPro fala{" "}
          <strong className="text-white">OCPP nativo</strong> direto com ele,
          cobra por Pix ao fim de cada carga e o dinheiro cai na sua conta — com
          mensalidade fixa, não com fatia do kWh.
        </>
      }
      ctaPrincipal={{
        label: "Testar 3 dias grátis",
        href: "https://carregapro.luqsys.com.br/cadastro?trial=1",
      }}
      ctaSecundaria={{
        label: "Ver a demonstração",
        href: "https://carregapro.luqsys.com.br/demo",
      }}
      notaCta="✦ Sem cartão de crédito · sem fidelidade · dá pra apontar o carregador e testar antes de mexer no contrato atual"
      problema={{
        titulo: "Você comprou o carregador. A plataforma leva a comissão.",
        paragrafos: [
          "O carregador é seu — e não foi barato. A energia sai da sua conta de luz. O ponto é seu, o estacionamento é seu, a obra elétrica foi você que pagou. E mesmo assim, a cada carga, some R$ 0,30 a R$ 0,50 por kWh na plataforma do fabricante. Num eletroposto que roda, isso não é uma taxa: é o lucro inteiro saindo pela porta antes de você contar.",
          "O detalhe cruel é que a comissão cresce junto com o seu sucesso. Quanto mais gente carrega no seu ponto, mais você paga — e o custo nunca para de subir, porque ele é uma porcentagem do que você faz, não um preço. Ao longo de cinco anos, essa fatia por kWh soma o valor de outro carregador. Junto com ela vai o relacionamento: quem carrega no seu ponto é cliente do app deles, com a tarifa que eles deixam você configurar.",
          "O CarregaPro conversa em OCPP 1.6 J e 2.0.1 nativos com qualquer carregador certificado — você aponta o endpoint do seu carregador pro sistema e pronto. A tarifa é sua, por horário e por dia da semana. O Pix da carga cai direto na sua conta. E a conta que você paga é uma mensalidade fixa, que não muda se o ponto rodar o dobro no mês que vem.",
        ],
      }}
      antesDepois={[
        {
          antes: "Comissão por kWh que cresce junto com o movimento",
          depois: "Mensalidade fixa, rodando pouco ou rodando muito",
        },
        {
          antes: "O pagamento passa pela plataforma do fabricante",
          depois: "Pix gerado ao fim da carga, direto pra sua conta",
        },
        {
          antes: "Uma tarifa só, o dia inteiro",
          depois: "Tarifa por horário, dia da semana e estação",
        },
        {
          antes: "Carga da frota interna cobrada como se fosse cliente",
          depois: "RFID interno carrega sem cobrar, com o consumo medido do mesmo jeito",
        },
        {
          antes: "Descobrir o faturamento do ponto pelo relatório de terceiro",
          depois: "Sessão a sessão na sua tela: kWh, tarifa aplicada e total",
        },
        {
          antes: "Preso ao software da marca do carregador",
          depois: "OCPP padrão: trocou de marca, o painel continua o mesmo",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "Cadastra sua estação",
          texto:
            "Charge Point ID, marca, modelo, potência e endereço. Serve ON-CHARGE, Intelbras, NeoCharge ou qualquer carregador certificado OCPP, AC ou DC.",
        },
        {
          n: "2",
          titulo: "Aponta o carregador",
          texto:
            "O sistema mostra a URL OCPP da sua estação. Você cola ela no painel do carregador, no lugar do endpoint do fabricante — e as transações começam a aparecer.",
        },
        {
          n: "3",
          titulo: "Recebe sem comissão",
          texto:
            "Configura a tarifa em R$/kWh, com janela por horário e dias da semana, cadastra os RFIDs e cobra por Pix ao fim de cada carga.",
        },
      ]}
      blocos={[
        {
          icone: "🔌",
          titulo: "Qualquer carregador certificado",
          texto:
            "OCPP é o padrão que faz carregador e software conversarem sem depender da marca. Como o CarregaPro implementa 1.6 J e 2.0.1 nativos, você deixa de ser refém do fabricante — e o carregador que você comprar no ano que vem entra no mesmo painel.",
          itens: [
            "OCPP 1.6 J e 2.0.1 nativos, detectados no próprio handshake",
            "Uma URL por estação, pronta pra colar no painel do carregador",
            "ON-CHARGE, Intelbras, NeoCharge e outras marcas certificadas",
            "Carregador AC de parede ou DC rápido, o sistema é o mesmo",
            "Vários pontos, de endereços diferentes, no mesmo painel",
          ],
          print: {
            arquivo: "/prints/carregapro-1.jpg",
            legenda:
              "A estação cadastrada, com a URL OCPP que vai no painel do carregador",
          },
        },
        {
          icone: "💰",
          titulo: "O dinheiro é seu",
          texto:
            "A cobrança acontece no fim da carga, por Pix, e o valor vai pra sua conta. Nenhuma fatia por kWh sai pra ninguém — é a diferença entre pagar por um software e dividir a receita do seu ponto com quem só vendeu o equipamento.",
          itens: [
            "Cobrança Pix automática ao fim de cada carga",
            "Sem comissão por kWh: a mensalidade é fixa",
            "Sessão a sessão com kWh, tarifa aplicada e total cobrado",
            "Relatório de faturamento por ponto",
            "Motivo de encerramento registrado em cada sessão",
          ],
          print: {
            arquivo: "/prints/carregapro-0.jpg",
            legenda:
              "Transações da estação: início, fim, kWh, R$/kWh e total de cada carga",
          },
        },
        {
          icone: "⏱️",
          titulo: "A tarifa é sua",
          texto:
            "Energia não custa a mesma coisa às 3 da tarde e às 7 da noite. Se a sua conta de luz tem horário de ponta, a sua tarifa também precisa ter — senão você subsidia o carro do cliente justamente na hora mais cara.",
          itens: [
            "Tarifa em R$/kWh definida por você",
            "Janela por faixa de horário e por dias da semana",
            "Tarifa diferente por estação",
            "Mudança de preço no painel, sem mexer no carregador",
            "O valor aplicado fica registrado na transação, pra conferência depois",
          ],
        },
        {
          icone: "🎫",
          titulo: "Cada um paga o que é dele",
          texto:
            "No mesmo ponto costuma carregar gente muito diferente: cliente de passagem, morador, hóspede, e o próprio carro da empresa. Com RFID por tipo, cada um tem a regra dele sem você ficar liberando carga na mão.",
          itens: [
            "Cartões RFID por tipo: cliente, frota interna, VIP e fidelidade",
            "Frota própria carrega sem cobrança, com o consumo medido do mesmo jeito",
            "Autorização do cartão validada na hora, pelo próprio OCPP",
            "Histórico por cartão, pra saber quem carregou o quê",
            "Cupom fidelidade e idTag por CPF no plano Rede",
          ],
        },
        {
          icone: "📡",
          titulo: "Telemetria ao vivo e log pra auditoria",
          texto:
            "Quando o cliente reclama que a carga parou ou que o valor está errado, discussão sem registro não termina. Aqui fica tudo: o que o carregador mandou, quando mandou e o que o sistema respondeu.",
          itens: [
            "kWh, kW, tensão, corrente, SoC e temperatura durante a carga",
            "Status de cada conector em tempo real",
            "Log OCPP completo, mensagem por mensagem",
            "Histórico de sessões com início, fim e razão do encerramento",
            "Base pronta pra conferir faturamento com o consumo medido",
          ],
        },
        {
          icone: "🏢",
          titulo: "Quando vira rede",
          texto:
            "Um ponto vira três, três viram dez, e aí o problema deixa de ser o carregador e passa a ser a operação. O que existe hoje e o que ainda está no roadmap está escrito aqui, sem enfeite.",
          itens: [
            "Até 3 estações no Operador e até 15 no Rede",
            "Multi-usuário com painel por estação (plano Rede)",
            "Webapp por QR Code pro motorista (plano Rede)",
            "Multi-tenant pra revender pros seus clientes (plano Operadora)",
            "Plug & Charge ISO 15118: roadmap, ainda não está pronto",
          ],
        },
      ]}
      prints={[
        {
          arquivo: "/prints/carregapro-1.jpg",
          legenda: "Estações de recarga, com a URL OCPP de cada uma",
        },
        {
          arquivo: "/prints/carregapro-0.jpg",
          legenda: "Cada sessão com kWh, tarifa e valor cobrado",
        },
      ]}
      paraQuem={[
        {
          icone: "⛽",
          titulo: "Posto ou comércio com carregador",
          texto:
            "Quem instalou pra atrair cliente e descobriu depois quanto a comissão por kWh come do faturamento.",
        },
        {
          icone: "🏨",
          titulo: "Hotel, condomínio e estacionamento",
          texto:
            "Tarifa diferente por horário e RFID pra morador, hóspede ou visitante, cada um com a regra dele.",
        },
        {
          icone: "🚚",
          titulo: "Frota elétrica própria",
          texto:
            "Carga interna sem cobrança, com o consumo de cada veículo medido pra entrar no custo da operação.",
        },
      ]}
      naoServe={[
        "Você tem um carregador só, em casa, pro seu carro — não precisa de sistema pra isso",
        "Seu carregador não fala OCPP: sem esse padrão não há como o sistema conversar com ele",
        "Você quer que alguém opere o ponto por você: aqui quem opera é você, o sistema só tira o intermediário do meio",
      ]}
      planos={[
        {
          nome: "Operador",
          preco: "R$ 49",
          publico: "1-3 carregadores",
          itens: [
            "Até 3 estações",
            "Transações ilimitadas",
            "Tarifa dinâmica + RFID",
            "Cobrança Pix via Asaas",
            "Telemetria em tempo real",
            "Suporte por WhatsApp",
          ],
          ctaLabel: "Falar com a gente",
          ctaHref:
            "https://wa.me/5545991077788?text=Quero%20o%20CarregaPro%20Operador",
        },
        {
          nome: "Rede",
          preco: "R$ 199",
          publico: "4-15 carregadores",
          destaque: true,
          itens: [
            "Até 15 estações",
            "Multi-usuário com permissões",
            "Webapp QR pro motorista",
            "Cupom fidelidade + idTag por CPF",
            "Relatórios consolidados",
            "Onboarding dedicado",
          ],
          ctaLabel: "Falar com a gente",
          ctaHref:
            "https://wa.me/5545991077788?text=Quero%20o%20CarregaPro%20Rede",
        },
        {
          nome: "Operadora",
          preco: "Sob consulta",
          publico: "16+ carregadores",
          itens: [
            "Estações ilimitadas",
            "Multi-tenant (revender pra clientes)",
            "Plug & Charge ISO 15118 (roadmap)",
            "Integração com seu app/site",
            "SLA dedicado",
            "Onboarding + treinamento",
          ],
          ctaLabel: "Falar com a gente",
          ctaHref:
            "https://wa.me/5545991077788?text=Quero%20o%20CarregaPro%20Operadora",
        },
      ]}
      notaPlanos="O plano Operadora é orçado caso a caso — o preço depende de quantos pontos você opera e do que pretende revender. Nos outros dois, o valor é fixo e não muda com o número de cargas."
      faq={[
        {
          p: "Meu carregador é compatível?",
          r: "Se ele é certificado OCPP 1.6 J ou 2.0.1 — o que hoje é praticamente todo carregador certificado vendido no Brasil, AC de parede ou DC rápido — é compatível. Não importa a marca: o padrão existe justamente pra isso. Manda o modelo no WhatsApp que a gente confirma antes de você assinar.",
        },
        {
          p: "Preciso cancelar a plataforma do fabricante pra testar?",
          r: "Não. Dá pra apontar o endpoint OCPP do carregador pro CarregaPro e ver funcionando com carga real. Só depois de ver as transações chegando é que você decide se continua pagando comissão por kWh.",
        },
        {
          p: "Como o motorista paga?",
          r: "Por Pix, ao fim da carga: o valor sai de kWh × a sua tarifa, e o pagamento vai pra sua conta. Quem tem cartão RFID cadastrado é identificado pelo cartão e segue a regra do tipo dele — cliente paga, frota interna carrega sem cobrança e o consumo é medido igual.",
        },
        {
          p: "Quanto tempo leva pra colocar no ar?",
          r: "O cadastro da estação leva alguns minutos: Charge Point ID, marca, modelo, potência e endereço. Depois é colar a URL OCPP no painel do carregador. A partir daí, as transações começam a aparecer sozinhas no painel.",
        },
        {
          p: "E se a internet do ponto cair?",
          r: "O OCPP conversa pela internet, então enquanto a conexão estiver fora o sistema não recebe as transações. A maior parte dos carregadores guarda o que aconteceu e reenvia quando volta, mas isso depende do firmware da marca. Se o seu ponto tem sinal ruim, fala com a gente antes de assinar — é melhor resolver a conexão primeiro.",
        },
        {
          p: "Tenho carregadores em endereços diferentes. Dá pra juntar?",
          r: "Dá. Cada estação tem o Charge Point ID, a tarifa e o relatório dela, e todas aparecem no mesmo painel. O plano Operador cobre até 3 estações e o Rede até 15.",
        },
        {
          p: "E se eu cancelar?",
          r: "Não tem fidelidade nem multa. Você cancela e a assinatura para de renovar; o carregador é seu e volta a apontar pra onde você quiser, trocando de novo o endpoint OCPP no painel dele. Antes de encerrar, gere os relatórios de faturamento do período — o histórico das cargas fica com você.",
        },
      ]}
      fechamento={{
        titulo: "Quanto você está pagando de comissão por kWh?",
        texto:
          "Pega o seu último relatório, multiplica os kWh do mês por R$ 0,30 e compara com uma mensalidade fixa a partir de R$ 49. Se a conta não fechar a seu favor, a gente mesmo te diz pra não assinar.",
      }}
    />
  );
}
