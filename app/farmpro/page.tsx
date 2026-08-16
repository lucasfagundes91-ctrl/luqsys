import type { Metadata } from "next";
import { ProductLayout } from "../_components/ProductLayout";

export const metadata: Metadata = {
  title: "FarmPro — Gestão da fazenda completa",
  description:
    "OCR de notas, livro caixa, LCDPR, folha de pagamento rural, ponto eletrônico e caderno de campo. Pra produtor rural de verdade, não pra apresentação.",
};

export default function FarmProPage() {
  return (
    <ProductLayout
      tema="farmpro"
      icone="🌾"
      nome="FarmPro"
      tagline="A fazenda toda no controle"
      descricao={
        <>
          OCR de notas, <strong className="text-white">livro caixa + LCDPR</strong>,
          folha rural, ponto eletrônico, caderno de campo. Feito pro produtor
          rural brasileiro — não traduzido do agro americano.
        </>
      }
      ctaPrimaria={{
        label: "Testar 3 dias grátis",
        href: "https://farmpro.luqsys.com.br/cadastro?trial=1",
      }}
      ctaSecundaria={{ label: "Ver planos", href: "#planos" }}
      passos={[
        {
          n: "1",
          titulo: "Cadastra a fazenda",
          texto:
            "Talhões, culturas, máquinas, empregados, fornecedores. Importação de planilha aceita.",
        },
        {
          n: "2",
          titulo: "Fotografa e lança",
          texto:
            "Nota fiscal de insumo? Foto e a IA extrai. Lançamento já vai pro livro caixa e LCDPR. Caderno de campo registra atividade por talhão.",
        },
        {
          n: "3",
          titulo: "Fecha o mês e o ano",
          texto:
            "LCDPR pronto pra entregar. Folha de pagamento dos empregados rurais. Relatórios por safra, por talhão, por cultura.",
        },
      ]}
      problema={{
        titulo: "Nota de insumo no porta-luvas, LCDPR na véspera do prazo",
        texto: (
          <>
            <p>
              A contabilidade rural não perdoa: LCDPR é entrega obrigatória, e
              ela se monta com nota que ficou no bolso do gerente, pagamento
              feito no WhatsApp e diária anotada num caderno que molhou.
            </p>
            <p>
              O FarmPro tira a nota da foto e joga direto no livro caixa. O que
              você lançou durante o ano vira o LCDPR do ano — sem virar noite
              em janeiro remontando o que já aconteceu.
            </p>
          </>
        ),
      }}
      blocos={[
        {
          icone: "📸",
          titulo: "A nota entra pela foto",
          texto:
            "Fotografou, acabou. A IA lê a nota do insumo e devolve fornecedor, valor, itens e data — você só confere.",
          itens: [
            "OCR de nota fiscal por foto",
            "Comprovante chega pelo WhatsApp e entra sozinho",
            "Anexo guardado junto do lançamento",
            "Centro de custo por talhão ou por atividade",
          ],
        },
        {
          icone: "📗",
          titulo: "Livro caixa e LCDPR",
          texto:
            "O que você lança no dia a dia é exatamente o que sai na entrega. Sem segunda digitação em planilha.",
          itens: [
            "Livro caixa do produtor rural",
            "LCDPR pronto pra entregar",
            "Receita e despesa por safra e por cultura",
            "Grupo familiar: várias fazendas, um lugar só",
          ],
        },
        {
          icone: "👷",
          titulo: "Gente da fazenda",
          texto:
            "Empregado rural tem regra própria. Folha, ponto e as sedes onde cada um bate ficam no mesmo sistema.",
          itens: [
            "Folha de pagamento rural",
            "Ponto eletrônico por sede",
            "Integração com o HoraPro",
            "Multi-usuário com permissão por perfil",
          ],
        },
        {
          icone: "🌱",
          titulo: "Caderno de campo",
          texto:
            "Cada aplicação, cada máquina, cada talhão — o histórico que faz falta na hora de decidir a safra que vem.",
          itens: [
            "Atividade registrada por talhão",
            "Controle de safra, cultura e máquinas",
            "Relatórios por talhão, safra e cultura",
            "Painel no celular pra ver de qualquer lugar",
          ],
        },
      ]}
      prints={[
        {arquivo: "/prints/farmpro-0.jpg", legenda: "Painel e livro caixa"},
        {arquivo: "/prints/farmpro-1.jpg", legenda: "Relatório por talhão e safra"},
      ]}
      praQuem={[
        {icone:"🌾", titulo:"Produtor que entrega LCDPR", texto:"Quem já teve que remontar o ano inteiro em janeiro sabe o tamanho do problema."},
        {icone:"👨‍👩‍👦", titulo:"Família com mais de uma fazenda", texto:"Cada área com o seu resultado, e a soma quando você quiser olhar o todo."},
        {icone:"🧑‍🌾", titulo:"Quem tem empregado registrado", texto:"Folha rural e ponto no mesmo lugar do resto da fazenda."},
      ]}
      naoServe={[
        "Você quer software de agricultura de precisão — mapa de produtividade e taxa variável não é aqui",
        "Sua fazenda não tem nenhum lançamento a controlar e você só quer previsão do tempo",
      ]}
      faq={[
        {
          p: "Preciso de internet boa na fazenda?",
          r: "Pra usar no dia a dia, um sinal de celular resolve — o sistema é leve e o que pesa (a foto da nota) sobe quando o sinal volta. O painel funciona bem no 4G.",
        },
        {
          p: "Meu contador aceita o LCDPR daqui?",
          r: "É o LCDPR no formato da Receita. Você entrega o arquivo ou manda pro contador conferir antes — muitos preferem receber o ano inteiro pronto em vez de caixa de sapato em janeiro.",
        },
        {
          p: "Tenho mais de uma fazenda no nome da família. Dá pra separar?",
          r: "Dá. O grupo familiar mantém cada fazenda com seus lançamentos e seu LCDPR, e você transita entre elas sem sair do sistema.",
        },
      ]}
      features={[
        "OCR de nota fiscal por foto (IA Claude)",
        "Livro caixa + LCDPR (entrega obrigatória)",
        "Folha de pagamento rural",
        "Ponto eletrônico dos empregados",
        "Caderno de campo por talhão",
        "Controle de safra, cultura e máquinas",
        "Relatórios por talhão/safra/cultura",
        "Multi-usuário com permissões",
      ]}
      planos={[
        {
          nome: "Básico",
          publico: "Sítio ou fazenda pequena",
          precoLabel: "R$ 69",
          features: [
            "Caderno de campo",
            "OCR de notas (até 50/mês)",
            "Livro caixa",
            "Até 5 talhões",
            "1 usuário",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Básico",
          ctaHref: "https://www.asaas.com/c/zm541eavrb9qzi40",
        },
        {
          nome: "Pro",
          publico: "Produtor rural completo",
          precoLabel: "R$ 119",
          features: [
            "Talhões e culturas ilimitados",
            "OCR de notas ilimitado",
            "Livro caixa + LCDPR",
            "Folha rural completa",
            "Ponto eletrônico embutido",
            "Caderno de campo",
            "Suporte por e-mail",
          ],
          ctaLabel: "Assinar Pro",
          ctaHref: "https://www.asaas.com/c/8uvtsmwsprfokrd1",
          destaque: true,
        },
        {
          nome: "Empresa",
          publico: "Grupo com múltiplas fazendas",
          precoLabel: "R$ 249",
          features: [
            "Tudo do Pro",
            "Multi-fazenda (até 5)",
            "Relatórios consolidados",
            "Comparativo entre safras",
            "API + integrações",
            "Suporte prioritário",
          ],
          ctaLabel: "Assinar Empresa",
          ctaHref: "https://www.asaas.com/c/k2dtdzavrcj9ip8g",
        },
      ]}
      ctaFinalTitulo="A fazenda merece um sistema feito pra ela"
      ctaFinalTexto="Combine com SolarPro (se gera energia solar) e ContabilidadePro pro fechamento."
    appUrl="https://farmpro.luqsys.com.br"
    assinarUrl="https://www.asaas.com/c/8uvtsmwsprfokrd1"
    />
  );
}
