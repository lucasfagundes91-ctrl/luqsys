import type { Metadata } from "next";
import { LandingLayout } from "../../_components/LandingLayout";

export const metadata: Metadata = {
  title: "HoraPro — ponto eletrônico pelo celular, do jeito que a norma pede",
  description:
    "REP-P em conformidade com a Portaria MTP 671/2021: cada batida com número sequencial, hash de integridade e comprovante na hora. AFD, AEJ e ATTR prontos pra fiscalização. Sem relógio de parede.",
};

/* Landing independente do HoraPro (17/08/2026), no molde do SiloPro.
   Diferente da /horapro — aquela é a página dele dentro do site da Luqsys.
   Esta é o site do produto, pra depois ganhar domínio próprio.

   Três cuidados que NÃO podem se perder numa edição futura:

   1) CUIDADO JURÍDICO. Isto é sistema de conformidade trabalhista. A página
      descreve o que o sistema FAZ (NSR sequencial, hash de integridade,
      arquivos assinados com ICP-Brasil) e nunca promete resultado jurídico.
      Conformidade com a norma não é garantia de vitória em processo. Não
      escrever "garante que você não perde processo" nem equivalente.

   2) AFD, AEJ e ATTR são do Pro pra cima — o Básico entrega ponto,
      comprovante e espelho. A página diz isso em voz alta no bloco da
      fiscalização e no FAQ, porque descobrir depois de assinar seria pior.

   3) Não existe demo pública funcionando: horapro.luqsys.com.br/demo cai no
      login. Por isso a CTA principal é o trial de 3 dias (/cadastro?trial=1,
      que redireciona pro /signup) e não tem botão de demonstração. Quando a
      demo for semeada de novo, dá pra pendurar como ctaSecundaria.

   Prints reais em public/prints/horapro-{0,1,2}.jpg, pendurados nos blocos
   do painel, do banco de horas e do espelho. */

const ZAP = (texto: string) =>
  "https://wa.me/5545991077788?text=" + encodeURIComponent(texto);

const TRIAL_URL = "https://horapro.luqsys.com.br/cadastro?trial=1";

export default function HoraProLanding() {
  return (
    <LandingLayout
      slug="horapro"
      nome="HoraPro"
      icone="⏱️"
      whatsapp="5545991077788"
      promessa="O ponto da sua equipe, registrado do jeito que a lei pede"
      subpromessa={
        <>
          O funcionário bate pelo próprio celular e cada batida nasce{" "}
          <strong className="text-white">numerada, lacrada e com comprovante</strong>{" "}
          — sem relógio de parede, sem caderno na portaria.
        </>
      }
      ctaPrincipal={{ label: "Testar 3 dias grátis", href: TRIAL_URL }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      notaCta="✦ Sem cartão de crédito · sem fidelidade · a empresa fica pronta em uma tarde"
      problema={{
        titulo: "Ponto errado não é detalhe — é o que sobra pra discutir depois",
        paragrafos: [
          "O caderninho na portaria e a planilha que alguém preenche no fim do mês não valem como prova. Os dois têm o mesmo defeito: podem ser escritos hoje contando a história de três meses atrás, e não existe nada dentro deles que mostre o contrário. Quando a discussão sobre hora extra chega, o que você tem na mão é a sua palavra contra a do funcionário — e a folha de papel não ajuda nenhum dos dois lados.",
          "A Portaria 671 pede outra coisa: registro sequencial, íntegro e exportável. Sequencial porque cada batida recebe um número que não pula nem volta, então some uma e o buraco aparece. Íntegro porque o registro carrega uma assinatura própria, e mudar o horário depois quebra essa assinatura. Exportável porque, quando pedirem, tem que sair num arquivo em formato definido pela norma — não num print de tela nem numa planilha montada às pressas. É exatamente esse conjunto que a fiscalização do trabalho pede pra ver, e é o mesmo que aparece na perícia quando o caso vai pra Justiça.",
          "O HoraPro é REP-P: ponto por software, permitido desde 2021. Cada batida ganha NSR sequencial, hash de integridade e comprovante em PDF na hora, no celular de quem bateu. Ajuste feito depois não apaga o registro original — fica registrado quem alterou, o que alterou e por quê. E quando alguém pedir os arquivos, o AFD, o AEJ e o ATTR saem prontos, o último assinado com certificado ICP-Brasil. O sistema não decide processo nenhum: ele faz o registro existir e se sustentar.",
        ],
      }}
      antesDepois={[
        {
          antes: "Folha de ponto assinada em bloco no fim do mês",
          depois: "Batida registrada na hora, com número sequencial e comprovante",
        },
        {
          antes: "Comprar e instalar relógio de parede homologado",
          depois: "Cada funcionário bate pelo próprio celular, com link ou QR code",
        },
        {
          antes: "Somar hora extra na planilha, funcionário por funcionário",
          depois: "Banco de horas somando sozinho, com o saldo à vista",
        },
        {
          antes: "Descobrir no dia 30 que faltou batida na semana 2",
          depois: "Painel do dia mostrando quem bateu e quem não bateu",
        },
        {
          antes: "Correção a lápis, sem ninguém saber quem mexeu",
          depois: "Ajuste com justificativa, autor e histórico do que mudou",
        },
        {
          antes: "Fiscalização pede o arquivo e começa a correria",
          depois: "AFD, AEJ e ATTR exportados do período em minutos",
        },
      ]}
      passos={[
        {
          n: "1",
          titulo: "Você cadastra a empresa",
          texto:
            "Dados da empresa, a jornada (a Comercial 8h já vem pronta) e os funcionários. Cada um recebe o próprio token de ponto e um QR code, que dá pra mandar pelo WhatsApp.",
        },
        {
          n: "2",
          titulo: "O funcionário bate no celular",
          texto:
            "Ele abre a página do ponto dele — sem instalar app, sem senha de sistema. Selfie e GPS entram se você exigir. O comprovante em PDF sai na hora, pra ele guardar.",
        },
        {
          n: "3",
          titulo: "Você acompanha e fecha o mês",
          texto:
            "Painel do dia ao vivo, banco de horas somando sozinho e o espelho de ponto do mês pronto pra imprimir. Quando pedirem, o AFD e o AEJ saem do mesmo lugar.",
        },
      ]}
      blocos={[
        {
          icone: "⚖️",
          titulo: "Cada batida nasce numerada e lacrada",
          texto:
            "É aqui que o HoraPro se separa de uma planilha bonita. O registro recebe um número sequencial por empresa e um hash de integridade calculado sobre os dados da batida — mudar o horário depois não passa despercebido, porque a conta deixa de fechar.",
          itens: [
            "NSR sequencial por empresa, sem pular e sem repetir",
            "Hash SHA256 de integridade em cada registro",
            "Comprovante em PDF gerado na hora, pro funcionário guardar",
            "Ajuste posterior não apaga o original: fica autor, motivo e histórico",
            "Cada empresa isolada da outra no sistema (multi-tenant)",
          ],
        },
        {
          icone: "📱",
          titulo: "O celular do funcionário é o relógio",
          texto:
            "REP-P é ponto por software — não precisa comprar relógio de parede, e é isso que derruba o custo. Cada funcionário tem um endereço próprio de batida, que chega por WhatsApp em link ou QR code.",
          itens: [
            "Página pública de ponto por token, uma por funcionário",
            "Nada pra instalar: abre no navegador do celular dele",
            "Selfie e GPS ligados ou desligados por empresa, conforme sua regra",
            "Perímetro por latitude, longitude e raio — marca onde foi a batida",
            "Sem sinal, a batida fica no aparelho e sobe depois com o horário real",
            "Token regenerável quando alguém troca de celular ou sai da empresa",
          ],
        },
        {
          icone: "👀",
          titulo: "O dia acontecendo na sua tela",
          texto:
            "A pergunta que mais custa dinheiro é 'quem ainda não chegou?', e ela normalmente só é respondida por telefone. Aqui o painel mostra o dia inteiro se formando, com as marcações entrando conforme acontecem.",
          itens: [
            "Painel do dia com as últimas marcações, atualizando sozinho",
            "Quem bateu, quem está em aberto e quem esqueceu a saída",
            "Lembrete de saída pra quem deixou o expediente sem fechar",
            "Várias sedes na mesma empresa, cada uma com seu perímetro",
            "Jornadas com horário por dia da semana e tolerância",
          ],
          print: {
            arquivo: "/prints/horapro-0.jpg",
            legenda: "Painel do dia, com as marcações entrando ao vivo",
          },
        },
        {
          icone: "🧮",
          titulo: "O mês fecha sem planilha paralela",
          texto:
            "Hora extra e saldo devedor deixam de ser conta de fim de mês. O banco de horas acompanha o que foi batido contra a jornada de cada um, e toda correção deixa rastro de quem fez.",
          itens: [
            "Banco de horas por funcionário, com saldo acumulado",
            "Ajustes e justificativas com histórico de quem alterou o quê",
            "Abonos e faltas justificadas lançados no mesmo lugar",
            "Grade do mês funcionário por funcionário",
            "Integração com a folha do FarmPro, pra não redigitar",
          ],
          print: {
            arquivo: "/prints/horapro-1.jpg",
            legenda: "Banco de horas com o saldo de cada funcionário",
          },
        },
        {
          icone: "📄",
          titulo: "O que sai quando pedem os arquivos",
          texto:
            "Fiscalização e perícia não pedem print de tela: pedem arquivo em formato definido pela norma. O HoraPro exporta os três — e o ATTR sai assinado digitalmente com certificado ICP-Brasil, o que permite conferir a assinatura por fora do sistema.",
          itens: [
            "Espelho de ponto mensal, pronto pra imprimir e assinar",
            "AFD (Anexo II) — o arquivo-fonte de dados registrados",
            "AEJ (Anexo VI) — o arquivo eletrônico de jornada",
            "ATTR com assinatura PAdES usando certificado ICP-Brasil",
            "Exportação por período, quando você precisar e não só no fechamento",
            "AFD, AEJ e ATTR fazem parte do plano Pro em diante",
          ],
          print: {
            arquivo: "/prints/horapro-2.jpg",
            legenda: "Espelho de ponto do mês, funcionário por funcionário",
          },
        },
      ]}
      paraQuem={[
        {
          icone: "🏭",
          titulo: "Empresa que quer o registro de pé",
          texto:
            "Se a discussão de hora extra aparecer, existe um registro sequencial e íntegro pra mostrar — em vez de uma folha assinada em bloco.",
        },
        {
          icone: "📍",
          titulo: "Equipe que trabalha fora",
          texto:
            "Obra, fazenda, atendimento externo, entrega. Bate de onde está, com selfie e localização se você quiser, e sem sinal sobe depois.",
        },
        {
          icone: "💸",
          titulo: "Quem não quer relógio de parede",
          texto:
            "REP-P é software. Sem equipamento pra comprar, instalar em cada unidade e manter funcionando.",
        },
      ]}
      naoServe={[
        "Você quer só somar horas pra si mesmo: pra isso uma planilha resolve e sai de graça — aqui você está pagando pela conformidade",
        "Sua empresa exige relógio físico homologado por decisão interna ou por acordo coletivo: aqui o registro é pelo celular",
        "Você precisa de folha de pagamento completa com holerite e guias: o HoraPro cuida do ponto e entrega os dados pra folha, não substitui ela",
      ]}
      planos={[
        {
          nome: "Básico",
          preco: "R$ 29",
          publico: "Equipe pequena (até 5 funcionários)",
          itens: [
            "Até 5 funcionários",
            "Ponto via QR code ou token",
            "Selfie e GPS opcionais",
            "Comprovante em PDF por batida",
            "Espelho de ponto mensal",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Básico",
          ctaHref: "https://www.asaas.com/c/67uk3ksmifuifly7",
        },
        {
          nome: "Pro",
          preco: "R$ 49",
          publico: "PME completa (até 20 funcionários)",
          destaque: true,
          itens: [
            "Até 20 funcionários inclusos",
            "Funcionários extras: R$ 5/mês cada",
            "AFD + AEJ (Anexo II e VI)",
            "ATTR com PAdES ICP-Brasil",
            "Banco de horas + ajustes",
            "Justificativas e abonos",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/a77msa0ndv1smwxn",
        },
        {
          nome: "Empresa",
          preco: "R$ 149",
          publico: "Empresa grande (50+ funcionários)",
          itens: [
            "Tudo do Pro",
            "Até 50 funcionários inclusos",
            "Extras: R$ 4/mês cada",
            "Multi-empresa (matriz + filiais)",
            "API pra folha (eSocial)",
            "Suporte prioritário",
          ],
          ctaLabel: "Assinar Empresa",
          ctaHref: "https://www.asaas.com/c/gtru0vknwtodd96y",
        },
      ]}
      notaPlanos="O trial de 3 dias abre com tudo ligado, pra você ver o AFD sair antes de escolher o plano. Sem fidelidade em nenhum deles."
      faq={[
        {
          p: "Preciso comprar relógio de ponto?",
          r: "Não. O REP-P é software: o funcionário bate pelo próprio celular. É o que a Portaria 671 permite desde 2021 — e é por isso que sai muito mais barato que relógio de parede, que ainda tem instalação, manutenção e um aparelho por unidade.",
        },
        {
          p: "E quem trabalha sem sinal de celular?",
          r: "A batida fica registrada no aparelho e sobe quando o sinal volta, mantendo o horário real de quando foi feita — não o horário em que a internet apareceu. O perímetro serve pra marcar onde a batida aconteceu, não pra travar o registro: obra e fazenda não podem parar por causa de antena.",
        },
        {
          p: "O que exatamente sai pra fiscalização?",
          r: "Três arquivos, além do espelho de ponto do mês. O AFD (Anexo II) é o arquivo-fonte com os registros do período. O AEJ (Anexo VI) é o arquivo eletrônico de jornada, com o tratamento das marcações. E o ATTR é o termo de responsabilidade, que sai assinado digitalmente com certificado ICP-Brasil no padrão PAdES — dá pra conferir a assinatura em validador oficial, fora do sistema. Os três estão no plano Pro em diante; o Básico entrega ponto, comprovante e espelho.",
        },
        {
          p: "Se alguém corrigir uma batida, some o registro original?",
          r: "Não. O registro original continua lá com o NSR e o hash dele. O ajuste entra por cima, com justificativa, autor e data — e o histórico mostra o que mudou. É esse rastro que faz a correção parecer o que ela é (uma correção documentada) e não uma reescrita da história.",
        },
        {
          p: "Isso me protege num processo trabalhista?",
          r: "O que a gente pode afirmar é o que o sistema faz: registro sequencial, íntegro, com comprovante por batida e exportação nos formatos que a Portaria 671 define. Ter registro em conformidade é diferente de ter garantia de resultado — quem decide processo é a Justiça, olhando o caso inteiro. Qualquer fornecedor que prometer vitória judicial está vendendo o que não pode entregar.",
        },
        {
          p: "Tenho gente em mais de um endereço. Funciona?",
          r: "Funciona. Dá pra cadastrar várias sedes na mesma empresa, cada uma com seu perímetro de latitude, longitude e raio. No plano Empresa dá pra ir além e separar matriz e filiais como empresas distintas, com API pra folha.",
        },
        {
          p: "E se eu cancelar? Perco os registros?",
          r: "Não tem fidelidade, você cancela quando quiser. Antes de encerrar, exporte o AFD, o AEJ e os espelhos do período: são arquivos que continuam valendo fora do sistema, porque o formato é definido pela norma e não pelo HoraPro. A guarda dos registros de ponto é obrigação da empresa, então leve o pacote inteiro antes de sair — e se precisar de ajuda pra gerar tudo de uma vez, é só chamar no WhatsApp que a gente faz junto.",
        },
      ]}
      prints={[]}
      fechamento={{
        titulo: "Comece pelo registro que se sustenta",
        texto:
          "Testa 3 dias com a sua equipe de verdade, exporta um AFD e vê como fica. Se o HoraPro não servir pro seu caso, a gente diz isso antes de você assinar.",
      }}
    />
  );
}
