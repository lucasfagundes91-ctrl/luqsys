import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — Luqsys",
  description:
    "Como a Luqsys coleta, usa e protege seus dados nos sistemas BankPro, FarmPro, FrotaPro, PDV Pro, AdsPro e demais produtos.",
};

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <a href="/" className="text-sm text-yellow-400 hover:underline">
          ← voltar pra Luqsys
        </a>

        <h1 className="mt-6 text-4xl font-bold">Política de Privacidade</h1>
        <p className="mt-2 text-sm text-zinc-400">
          Última atualização: 19 de maio de 2026
        </p>

        <div className="mt-10 space-y-8 text-zinc-200 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white">1. Quem somos</h2>
            <p className="mt-3">
              Luqsys — Sistemas de Gestão é uma família de produtos SaaS
              operada por Lucas Miguel Fagundes (CNPJ próximo) em Cascavel, PR,
              Brasil. Email de contato:{" "}
              <a
                href="mailto:contato@luqsys.com.br"
                className="text-yellow-400 hover:underline"
              >
                contato@luqsys.com.br
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              2. Dados que coletamos
            </h2>
            <p className="mt-3">
              Coletamos apenas o necessário pra entregar cada produto:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>
                <strong>Cadastro:</strong> nome, email, telefone/WhatsApp.
              </li>
              <li>
                <strong>Cobrança:</strong> CPF/CNPJ, dados de pagamento via
                Asaas (não armazenamos cartão).
              </li>
              <li>
                <strong>Uso do sistema:</strong> dados que você insere (ex.
                lançamentos financeiros no BankPro, frota no FrotaPro,
                campanhas no AdsPro).
              </li>
              <li>
                <strong>Integrações Meta (AdsPro):</strong> tokens de acesso,
                IDs de conta de anúncios, Page e Instagram Business para criar
                e gerenciar campanhas no Facebook/Instagram via Meta Marketing
                API.
              </li>
              <li>
                <strong>Logs técnicos:</strong> data/hora, IP, navegador, pra
                segurança e diagnóstico.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              3. Como usamos
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Prestar o serviço contratado.</li>
              <li>Cobrar assinaturas via Asaas.</li>
              <li>
                Enviar notificações operacionais por email (Resend) e WhatsApp
                (Z-API).
              </li>
              <li>
                Criar e veicular anúncios no Meta Ads em nome do cliente
                (AdsPro).
              </li>
              <li>Atender suporte e cumprir obrigações legais.</li>
            </ul>
            <p className="mt-3">
              Não vendemos seus dados. Não usamos pra publicidade fora dos
              produtos que você contratou.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              4. Compartilhamento
            </h2>
            <p className="mt-3">
              Compartilhamos só com fornecedores essenciais à operação:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Railway (hospedagem)</li>
              <li>Vercel (landing)</li>
              <li>Cloudflare (DNS / email routing)</li>
              <li>Asaas (cobrança)</li>
              <li>Resend (email transacional)</li>
              <li>Z-API (WhatsApp transacional)</li>
              <li>Meta Platforms (Marketing API para AdsPro)</li>
              <li>Anthropic (assistente IA quando aplicável)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">5. Retenção</h2>
            <p className="mt-3">
              Mantemos seus dados enquanto sua conta estiver ativa, ou pelo
              período exigido por lei (ex. fiscal: 5 anos). Você pode pedir
              exclusão a qualquer momento por{" "}
              <a
                href="mailto:contato@luqsys.com.br"
                className="text-yellow-400 hover:underline"
              >
                contato@luqsys.com.br
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              6. Seus direitos (LGPD)
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Confirmar e acessar dados que temos sobre você</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Anonimizar, bloquear ou excluir dados desnecessários</li>
              <li>Portabilidade pra outro fornecedor</li>
              <li>Revogar consentimento</li>
            </ul>
            <p className="mt-3">
              Pra exercer qualquer um, envie um email pra{" "}
              <a
                href="mailto:contato@luqsys.com.br"
                className="text-yellow-400 hover:underline"
              >
                contato@luqsys.com.br
              </a>
              . Respondemos em até 15 dias.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">7. Segurança</h2>
            <p className="mt-3">
              HTTPS em todo o tráfego, senhas com hash, tokens de API
              armazenados criptografados, backups regulares do banco. Em caso
              de incidente, notificamos os afetados e a ANPD quando exigido.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">8. Exclusão de dados</h2>
            <p className="mt-3">
              Você pode pedir a exclusão total de seus dados enviando email
              pra{" "}
              <a
                href="mailto:contato@luqsys.com.br"
                className="text-yellow-400 hover:underline"
              >
                contato@luqsys.com.br
              </a>{" "}
              com o assunto &quot;Exclusão de dados&quot;. A remoção é
              processada em até 30 dias úteis, exceto dados que precisamos
              reter por obrigação legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              9. Mudanças nesta política
            </h2>
            <p className="mt-3">
              Podemos atualizar esta política. Mudanças relevantes serão
              comunicadas por email com pelo menos 15 dias de antecedência.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">10. Contato</h2>
            <p className="mt-3">
              Dúvidas sobre privacidade ou LGPD:{" "}
              <a
                href="mailto:contato@luqsys.com.br"
                className="text-yellow-400 hover:underline"
              >
                contato@luqsys.com.br
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
