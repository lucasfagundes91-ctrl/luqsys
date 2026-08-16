import Link from "next/link";
import type { ReactNode } from "react";

/* ─────────────────────────────────────────────────────────────────────────
   Landing completa e INDEPENDENTE de um sistema.

   Diferente do ProductLayout: aquele é a página do produto DENTRO do site da
   Luqsys, com o menu da casa e o convite pra ver os outros sistemas. Esta
   aqui é o site do produto — sem menu da Luqsys, sem link pros irmãos, com o
   nome dele no topo e a marca da casa só num selo discreto no rodapé.

   Vive em /p/<slug> por enquanto. O plano do Lucas é dar domínio próprio pra
   cada sistema depois; por isso ela é auto-contida — mover significa apontar
   o domínio e trocar a rota, sem desmontar cabeçalho nem caçar dependência do
   site-mãe.

   O conteúdo é todo por slot, como no ProductLayout, e pela mesma razão: 21
   arquivos escritos à mão divergem em uma semana. O que muda entre sistemas é
   texto, cor e imagem — não a estrutura.
   ───────────────────────────────────────────────────────────────────────── */

export type LandingBloco = {
  icone: string;
  titulo: string;
  texto: string;
  itens?: string[];
  print?: { arquivo: string; legenda: string };
};

export type LandingPasso = { n: string; titulo: string; texto: string };
export type LandingPlano = {
  nome: string;
  preco: string;
  publico: string;
  itens: string[];
  destaque?: boolean;
  ctaLabel?: string;
  ctaHref: string;
};
export type LandingFaq = { p: string; r: string };
export type LandingNumero = { valor: string; rotulo: string };

export type LandingProps = {
  slug: string;
  nome: string;
  icone: string;
  /** Frase que o cliente entenderia sem saber o que é o sistema. */
  promessa: string;
  subpromessa: ReactNode;
  ctaPrincipal: { label: string; href: string };
  ctaSecundaria?: { label: string; href: string };
  notaCta?: string;
  /** Números só entram se forem verdade e verificáveis. Vazio some. */
  numeros?: LandingNumero[];
  problema: { titulo: string; paragrafos: string[] };
  /** Antes × depois: a tabela que faz a pessoa se reconhecer. */
  antesDepois?: { antes: string; depois: string }[];
  passos: LandingPasso[];
  blocos: LandingBloco[];
  prints?: { arquivo: string; legenda: string }[];
  paraQuem?: { icone: string; titulo: string; texto: string }[];
  naoServe?: string[];
  planos: LandingPlano[];
  notaPlanos?: string;
  faq: LandingFaq[];
  fechamento: { titulo: string; texto: string };
  whatsapp: string;
};

export function LandingLayout(p: LandingProps) {
  const wa = (t: string) =>
    `https://wa.me/${p.whatsapp}?text=${encodeURIComponent(t)}`;
  return (
    <main className={`tema-produto tema-${p.slug} acc-radial`}>
      {/* topo do PRODUTO, não da Luqsys */}
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 py-5 sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{p.icone}</span>
          <span className="acc-text text-lg font-black tracking-tight">
            {p.nome}
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm">
          <a href="#recursos" className="text-neutral-400 transition hover:text-white">
            Recursos
          </a>
          <a href="#planos" className="text-neutral-400 transition hover:text-white">
            Planos
          </a>
          <a href="#duvidas" className="text-neutral-400 transition hover:text-white">
            Dúvidas
          </a>
          <a
            href={p.ctaPrincipal.href}
            target="_blank"
            rel="noopener noreferrer"
            className="acc-bg rounded-full px-4 py-2 text-xs font-semibold text-bg transition hover:brightness-110 sm:text-sm"
          >
            {p.ctaPrincipal.label}
          </a>
        </div>
      </nav>

      {/* ── herói ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 pb-12 pt-10 text-center sm:pt-16">
        <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
          <span className="acc-gradient-text">{p.promessa}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300 sm:text-xl">
          {p.subpromessa}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={p.ctaPrincipal.href}
            target="_blank"
            rel="noopener noreferrer"
            className="acc-bg rounded-full px-7 py-3 text-sm font-semibold text-bg transition hover:brightness-110"
          >
            {p.ctaPrincipal.label} →
          </a>
          {p.ctaSecundaria && (
            <a
              href={p.ctaSecundaria.href}
              target={p.ctaSecundaria.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="acc-borda acc-text rounded-full border px-7 py-3 text-sm font-semibold transition hover:brightness-125"
            >
              {p.ctaSecundaria.label}
            </a>
          )}
        </div>
        {p.notaCta && (
          <p className="mt-4 text-xs text-neutral-500">{p.notaCta}</p>
        )}
      </section>

      {p.numeros && p.numeros.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 pb-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {p.numeros.map((n) => (
              <div
                key={n.rotulo}
                className="rounded-2xl border border-neutral-900 bg-bg-card p-6 text-center"
              >
                <p className="acc-text text-3xl font-black">{n.valor}</p>
                <p className="mt-1 text-sm text-neutral-400">{n.rotulo}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── o problema ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="acc-borda rounded-2xl border bg-bg-card/60 p-7 sm:p-9">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            {p.problema.titulo}
          </h2>
          <div className="mt-4 space-y-3 text-neutral-300">
            {p.problema.paragrafos.map((t) => (
              <p key={t.slice(0, 24)}>{t}</p>
            ))}
          </div>
        </div>
      </section>

      {p.antesDepois && p.antesDepois.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 py-8">
          <h2 className="text-center text-2xl font-black sm:text-3xl">
            O que muda no seu dia
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-900">
            <div className="grid grid-cols-2 bg-bg-soft text-xs font-bold uppercase tracking-wider text-neutral-500">
              <div className="px-5 py-3">Hoje</div>
              <div className="acc-text px-5 py-3">Com o {p.nome}</div>
            </div>
            {p.antesDepois.map((l) => (
              <div
                key={l.antes}
                className="grid grid-cols-2 border-t border-neutral-900 text-sm"
              >
                <div className="px-5 py-4 text-neutral-500">{l.antes}</div>
                <div className="px-5 py-4 text-neutral-200">{l.depois}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── como funciona ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-center text-3xl font-black sm:text-4xl">
          Como funciona
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {p.passos.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-neutral-900 bg-bg-card p-6"
            >
              <span className="acc-bg inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-black text-bg">
                {s.n}
              </span>
              <h3 className="mt-4 font-bold text-white">{s.titulo}</h3>
              <p className="mt-2 text-sm text-neutral-400">{s.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── recursos, com print no meio quando houver ─────────────── */}
      <section id="recursos" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-center text-3xl font-black sm:text-4xl">
          Tudo o que ele faz
        </h2>
        <div className="mt-10 space-y-5">
          {p.blocos.map((b, i) => (
            <div
              key={b.titulo}
              className={`grid gap-6 rounded-2xl border border-neutral-900 bg-bg-card p-6 sm:p-8 ${
                b.print ? "md:grid-cols-2 md:items-center" : ""
              }`}
            >
              <div className={b.print && i % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{b.icone}</span>
                  <h3 className="acc-text text-xl font-bold">{b.titulo}</h3>
                </div>
                <p className="mt-3 text-neutral-300">{b.texto}</p>
                {b.itens && (
                  <ul className="mt-4 space-y-2">
                    {b.itens.map((it) => (
                      <li key={it} className="flex gap-2 text-sm text-neutral-400">
                        <span className="acc-text mt-0.5">✓</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {b.print && (
                <figure className="overflow-hidden rounded-xl border border-neutral-800">
                  <img
                    src={b.print.arquivo}
                    alt={b.print.legenda}
                    loading="lazy"
                    className="w-full"
                  />
                  <figcaption className="border-t border-neutral-800 bg-bg-soft px-3 py-2 text-xs text-neutral-500">
                    {b.print.legenda}
                  </figcaption>
                </figure>
              )}
            </div>
          ))}
        </div>
      </section>

      {p.prints && p.prints.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="text-center text-3xl font-black sm:text-4xl">
            O sistema por dentro
          </h2>
          <p className="mt-3 text-center text-sm text-neutral-500">
            Telas reais, tiradas da demonstração — não é mockup.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {p.prints.map((im) => (
              <figure
                key={im.arquivo}
                className="overflow-hidden rounded-2xl border border-neutral-900 bg-bg-card"
              >
                <img src={im.arquivo} alt={im.legenda} loading="lazy" className="w-full" />
                <figcaption className="acc-text border-t border-neutral-900 px-4 py-3 text-sm font-medium">
                  {im.legenda}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {p.paraQuem && p.paraQuem.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-center text-3xl font-black sm:text-4xl">
            Feito pra quem
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {p.paraQuem.map((q) => (
              <div
                key={q.titulo}
                className="rounded-2xl border border-neutral-900 bg-bg-card p-6"
              >
                <span className="text-2xl">{q.icone}</span>
                <h3 className="mt-3 font-bold text-white">{q.titulo}</h3>
                <p className="mt-2 text-sm text-neutral-400">{q.texto}</p>
              </div>
            ))}
          </div>
          {p.naoServe && p.naoServe.length > 0 && (
            <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-neutral-800 bg-bg-soft p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400">
                Não é pra você se
              </h3>
              <ul className="mt-3 space-y-2">
                {p.naoServe.map((n) => (
                  <li key={n} className="flex gap-2 text-sm text-neutral-400">
                    <span className="mt-0.5 text-neutral-600">✗</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-neutral-500">
                Preferimos dizer isso agora do que você descobrir depois de
                assinar.
              </p>
            </div>
          )}
        </section>
      )}

      {/* ── planos ────────────────────────────────────────────────── */}
      <section id="planos" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-center text-3xl font-black sm:text-4xl">Planos</h2>
        <p className="mt-3 text-center text-neutral-400">
          Sem fidelidade. Cancele quando quiser.
        </p>
        <div
          className={`mt-10 grid gap-5 ${
            p.planos.length > 2 ? "lg:grid-cols-3" : "sm:grid-cols-2"
          }`}
        >
          {p.planos.map((pl) => (
            <div
              key={pl.nome}
              className={
                pl.destaque
                  ? "acc-borda acc-sombra relative rounded-2xl border-2 bg-bg-card p-7"
                  : "relative rounded-2xl border border-neutral-900 bg-bg-card p-7"
              }
            >
              {pl.destaque && (
                <span className="acc-bg absolute -top-3 left-7 rounded-full px-3 py-1 text-xs font-bold text-bg">
                  mais escolhido
                </span>
              )}
              <h3 className="acc-text text-xl font-bold">{pl.nome}</h3>
              <p className="mt-1 text-sm text-neutral-400">{pl.publico}</p>
              <p className="mt-6 text-4xl font-black text-white">
                {pl.preco}
                <span className="text-base font-medium text-neutral-500">/mês</span>
              </p>
              <ul className="mt-6 space-y-2">
                {pl.itens.map((i) => (
                  <li key={i} className="flex gap-2 text-sm text-neutral-300">
                    <span className="acc-text mt-0.5">✓</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <a
                href={pl.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  pl.destaque
                    ? "acc-bg mt-7 block rounded-full px-5 py-3 text-center text-sm font-semibold text-bg transition hover:brightness-110"
                    : "acc-borda acc-text mt-7 block rounded-full border px-5 py-3 text-center text-sm font-semibold transition hover:brightness-125"
                }
              >
                {pl.ctaLabel || `Assinar ${pl.nome}`}
              </a>
            </div>
          ))}
        </div>
        {p.notaPlanos && (
          <p className="mt-6 text-center text-sm text-neutral-500">{p.notaPlanos}</p>
        )}
      </section>

      {/* ── dúvidas ───────────────────────────────────────────────── */}
      <section id="duvidas" className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="text-center text-3xl font-black sm:text-4xl">
          Perguntas que sempre fazem
        </h2>
        <div className="mt-10 space-y-4">
          {p.faq.map((f) => (
            <div
              key={f.p}
              className="rounded-2xl border border-neutral-900 bg-bg-card p-6"
            >
              <h3 className="font-bold text-white">{f.p}</h3>
              <p className="mt-2 text-sm text-neutral-400">{f.r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── fechamento ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="acc-borda acc-sombra rounded-3xl border bg-bg-card p-10 text-center">
          <h2 className="text-2xl font-black sm:text-3xl">
            {p.fechamento.titulo}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-neutral-300">
            {p.fechamento.texto}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={p.ctaPrincipal.href}
              target="_blank"
              rel="noopener noreferrer"
              className="acc-bg rounded-full px-8 py-3 text-sm font-semibold text-bg transition hover:brightness-110"
            >
              {p.ctaPrincipal.label} →
            </a>
            <a
              href={wa(`Oi Lucas, tenho uma dúvida sobre o ${p.nome}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="acc-borda acc-text rounded-full border px-8 py-3 text-sm font-semibold transition hover:brightness-125"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* rodapé: a marca da casa aparece aqui, discreta — a página é do
          produto, mas quem assina o software é a Luqsys */}
      <footer className="border-t border-neutral-900 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
          <p className="text-sm text-neutral-500">
            {p.nome} é um sistema{" "}
            <Link href="/" className="text-neutral-300 hover:underline">
              Luqsys
            </Link>
          </p>
          <p className="text-xs text-neutral-600">
            contato@luqsys.com.br · Cascavel/PR
          </p>
        </div>
      </footer>
    </main>
  );
}
