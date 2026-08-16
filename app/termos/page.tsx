import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso — Luqsys",
  description:
    "Termos de uso dos sistemas de gestão Luqsys (BankPro, FarmPro, FrotaPro, PDV Pro, AdsPro e demais produtos).",
};

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <a href="/" className="text-sm text-yellow-400 hover:underline">
          ← voltar pra Luqsys
        </a>

        <h1 className="mt-6 text-4xl font-bold">Termos de Uso</h1>
        <p className="mt-2 text-sm text-zinc-400">
          Última atualização: 19 de maio de 2026
        </p>

        <div className="mt-10 space-y-8 text-zinc-200 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white">1. Aceitação</h2>
            <p className="mt-3">
              Ao usar qualquer produto Luqsys (BankPro, FarmPro, FrotaPro,
              PDV Pro, AdsPro, AgendaPro, HoraPro, ViagemPro, ObrasPro,
              CarregaPro e demais), você concorda com estes termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">2. Serviço</h2>
            <p className="mt-3">
              A Luqsys oferece SaaS de gestão por assinatura mensal. Os
              recursos exatos de cada produto estão descritos na respectiva
              página em www.luqsys.com.br.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              3. Conta e responsabilidade
            </h2>
            <p className="mt-3">
              Você é responsável pelas credenciais da sua conta e pelo
              conteúdo que cadastra nos sistemas. Não compartilhe senha. Nos
              avise por email se suspeitar de acesso indevido.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              4. Cobrança e cancelamento
            </h2>
            <p className="mt-3">
              Assinaturas são mensais e cobradas via Asaas. Período de teste
              quando aplicável é informado no momento da assinatura. Você
              pode cancelar quando quiser; a cobrança cessa no próximo ciclo.
              Não há reembolso proporcional, exceto em caso de falha técnica
              persistente da nossa parte.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              5. Uso aceitável
            </h2>
            <p className="mt-3">
              Você não pode usar a Luqsys pra: violar leis, enviar spam,
              cometer fraude, distribuir malware, ou tentar acessar dados de
              outros usuários. Violação resulta em suspensão imediata.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              6. Integrações de terceiros
            </h2>
            <p className="mt-3">
              Alguns produtos integram com Meta (Facebook/Instagram), Asaas,
              Resend, Z-API, Anthropic, entre outros. O uso dessas
              integrações também está sujeito aos respectivos termos de
              cada fornecedor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              7. Limitação de responsabilidade
            </h2>
            <p className="mt-3">
              A Luqsys é fornecida &quot;como está&quot;. Fazemos esforço
              razoável de manter disponibilidade, segurança e exatidão, mas
              não garantimos uso ininterrupto ou livre de erros. Nossa
              responsabilidade total se limita ao valor pago pelos últimos
              12 meses de assinatura.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              8. Privacidade
            </h2>
            <p className="mt-3">
              O tratamento de dados pessoais segue a{" "}
              <a
                href="/privacidade"
                className="text-yellow-400 hover:underline"
              >
                Política de Privacidade
              </a>{" "}
              e a LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              9. Mudanças nos termos
            </h2>
            <p className="mt-3">
              Podemos atualizar estes termos. Mudanças relevantes serão
              comunicadas por email com pelo menos 15 dias de antecedência.
              Uso continuado após a mudança significa aceitação.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              10. Foro
            </h2>
            <p className="mt-3">
              Fica eleito o foro da comarca de Cascavel, PR, Brasil, pra
              dirimir qualquer questão decorrente destes termos. Contato:{" "}
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
