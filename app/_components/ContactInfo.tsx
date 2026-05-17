import Link from "next/link";

const EMAILS = [
  { addr: "contato@luqsys.com.br", role: "Comercial" },
  { addr: "vendas@luqsys.com.br", role: "Vendas" },
  { addr: "suporte@luqsys.com.br", role: "Suporte" },
  { addr: "lucas@luqsys.com.br", role: "Direto com o Lucas" },
];

const WA_NUMERO = "5545991077788";
const WA_DISPLAY = "+55 45 99107-7788";

export function ContactInfo() {
  return (
    <section className="mx-auto max-w-5xl border-t border-neutral-900 px-6 py-12">
      <h2 className="text-center text-lg font-semibold text-neutral-200 sm:text-xl">
        Fale com a gente
      </h2>
      <p className="mt-2 text-center text-sm text-neutral-500">
        Respondemos em horário comercial. WhatsApp costuma ser mais rápido.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a
          href={`https://wa.me/${WA_NUMERO}?text=${encodeURIComponent("Oi Lucas, tenho uma dúvida sobre a Luqsys")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl border border-gold-dim/60 bg-bg-soft px-4 py-3 transition hover:border-gold hover:bg-bg-card"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366]/20 text-lg">
            💬
          </span>
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wider text-gold">
              WhatsApp
            </div>
            <div className="truncate text-sm font-medium text-neutral-200">
              {WA_DISPLAY}
            </div>
          </div>
        </a>

        {EMAILS.map(({ addr, role }) => (
          <a
            key={addr}
            href={`mailto:${addr}`}
            className="group flex items-center gap-3 rounded-xl border border-neutral-900 bg-bg-soft px-4 py-3 transition hover:border-gold-dim hover:bg-bg-card"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-base">
              ✉️
            </span>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-neutral-500">
                {role}
              </div>
              <div className="truncate text-sm font-medium text-neutral-200">
                {addr}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
