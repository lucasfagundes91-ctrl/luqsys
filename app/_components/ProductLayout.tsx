import Link from "next/link";
import type { ReactNode } from "react";
import { ContactInfo } from "./ContactInfo";

export type Plano = {
  nome: string;
  precoLabel: string;
  precoDe?: string;
  publico: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  destaque?: boolean;
};

export type Passo = { n: string; titulo: string; texto: string };

/* Bloco temático: o mesmo que a lista de features conta, mas agrupado por
   assunto e com uma frase que explica POR QUE aquilo importa. Lista corrida
   de 14 checks é igual em todo sistema; bloco com assunto é o que dá cara
   própria à página. Página que não define `blocos` continua na lista. */
export type BlocoTema = {
  icone: string;
  titulo: string;
  texto: string;
  itens: string[];
};

export type Pergunta = { p: string; r: string };

/* "Pra quem é" e "pra quem não é". A segunda metade é a que constrói
   confiança: dizer em que caso o sistema NÃO serve evita a venda errada, que
   é a que gera cancelamento e reclamação. E é o conteúdo mais impossível de
   parecer genérico — cada sistema tem o seu recorte. */
export type Publico = { icone: string; titulo: string; texto: string };

/* Tela real do sistema rodando. Nenhuma das 21 páginas mostrava o produto —
   o visitante lia sobre frente de caixa, romaneio e odontograma sem ver
   nenhum, e por isso todas continuavam com cara de página institucional
   igual, mesmo com cor e texto próprios. Os prints saem das demos públicas
   (nunca de instância de cliente) e passam por curadoria: tela com painel
   zerado não entra, porque vende pior que print nenhum. */
export type Print = { arquivo: string; legenda: string };

export type ProductPageProps = {
  icone: string;
  nome: string;
  tagline: string;
  descricao: ReactNode;
  ctaPrimaria?: { label: string; href: string };
  ctaSecundaria?: { label: string; href: string };
  rodapeHero?: string;
  passos?: Passo[];
  passosTitulo?: string;
  features: string[];
  featuresTitulo?: string;
  /* Caixa logo abaixo do herói: a dor do cliente em duas frases, antes de
     falar de funcionalidade. */
  problema?: { titulo: string; texto: ReactNode };
  blocos?: BlocoTema[];
  prints?: Print[];
  praQuem?: Publico[];
  naoServe?: string[];
  faq?: Pergunta[];
  planos: Plano[];
  ctaFinalTitulo?: string;
  ctaFinalTexto?: string;
  appUrl?: string;
  demoUrl?: string;
  /* Sistema sem sandbox publico. Sem isto o layout monta o /demo a partir do
     appUrl e oferece "Ver demo" mesmo onde a rota nao existe — o ComandaPro
     mandava o visitante pra um 404 no meio da decisao de compra. */
  semDemo?: boolean;
  /* Slug do tema de cor (ex.: "farmpro" → .tema-farmpro no globals.css).
     Sem ele a página fica dourada como a marca-mãe. Cada sistema tem a cor
     que ele já usa por dentro do app — decisão de identidade que estava no
     papel desde a marca e não tinha chegado ao site. */
  tema?: string;
  trialUrl?: string;
  assinarUrl?: string;
};

export function ProductLayout({
  icone,
  nome,
  tagline,
  descricao,
  ctaPrimaria,
  ctaSecundaria,
  rodapeHero,
  passos,
  passosTitulo = "Como funciona",
  features,
  featuresTitulo = "O que ele faz",
  problema,
  blocos,
  prints,
  praQuem,
  naoServe,
  faq,
  planos,
  ctaFinalTitulo,
  ctaFinalTexto,
  appUrl,
  demoUrl,
  semDemo,
  tema,
  trialUrl,
  assinarUrl,
}: ProductPageProps) {
  const demoHref = semDemo ? undefined : (demoUrl ?? (appUrl ? `${appUrl}/demo` : undefined));
  const trialHref = trialUrl ?? (appUrl ? `${appUrl}/cadastro?trial=1` : undefined);
  return (
    <main className={`tema-produto acc-radial${tema ? ` tema-${tema}` : ""}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <img src="/luqsys-logo.png" alt="Luqsys" className="h-10 w-10 rounded-lg" />
          <span className="text-sm font-semibold tracking-[0.2em] acc-text">
            LUQSYS
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            className="hidden text-sm text-neutral-400 transition hover:text-white lg:inline"
          >
            ← Voltar
          </Link>
          {appUrl && (
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm text-neutral-400 transition hover:text-white sm:inline"
            >
              Entrar
            </a>
          )}
          {demoHref && (
            <a
              href={demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border acc-borda px-3 py-2 text-xs font-semibold acc-text transition hover:brightness-125 sm:px-4 sm:text-sm"
            >
              Ver demo
            </a>
          )}
          {trialHref ? (
            <a
              href={trialHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full acc-bg px-3 py-2 text-xs font-semibold text-bg transition hover:brightness-110 sm:px-4 sm:text-sm"
            >
              Testar 3 dias
            </a>
          ) : (
            appUrl && (
              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full acc-bg px-5 py-2 text-sm font-semibold text-bg transition hover:brightness-110 sm:hidden"
              >
                Entrar →
              </a>
            )
          )}
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-6 pb-16 pt-12 text-center sm:pt-20">
        <span className="inline-block rounded-full border acc-borda bg-transparent px-3 py-1 text-xs font-medium tracking-wider acc-text">
          UM SISTEMA LUQSYS
        </span>
        <div className="mt-6 text-5xl">{icone}</div>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
          <span className="acc-gradient-text">{nome}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-neutral-200 sm:text-lg">
          {tagline}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300 sm:text-xl">
          {descricao}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {trialHref && (
            <a
              href={trialHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full acc-bg px-7 py-3 text-sm font-semibold text-bg transition hover:brightness-110"
            >
              Testar 3 dias grátis →
            </a>
          )}
          {demoHref && (
            <a
              href={demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border acc-borda px-7 py-3 text-sm font-semibold acc-text transition hover:brightness-125"
            >
              Ver demo (sem cadastro)
            </a>
          )}
          {!trialHref && ctaPrimaria && (
            <a
              href={ctaPrimaria.href}
              target={
                ctaPrimaria.href.startsWith("http") ? "_blank" : undefined
              }
              rel={
                ctaPrimaria.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="rounded-full acc-bg px-7 py-3 text-sm font-semibold text-bg transition hover:brightness-110"
            >
              {ctaPrimaria.label}
            </a>
          )}
          {!demoHref && ctaSecundaria && (
            <a
              href={ctaSecundaria.href}
              className="rounded-full border acc-borda px-7 py-3 text-sm font-semibold acc-text transition hover:brightness-125"
            >
              {ctaSecundaria.label}
            </a>
          )}
        </div>

        {(trialHref || rodapeHero) && (
          <p className="mt-4 text-xs text-neutral-500">
            {trialHref
              ? "✦ Sem cartão de crédito · cancele quando quiser"
              : rodapeHero}
          </p>
        )}
        {assinarUrl && (
          <p className="mt-3 text-sm text-neutral-400">
            Já decidiu?{" "}
            <a
              href={assinarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold acc-text underline-offset-4 transition hover:brightness-125 hover:underline"
            >
              Assinar agora →
            </a>
          </p>
        )}
      </section>

      {problema && (
        <section className="mx-auto max-w-4xl px-6 pb-4">
          <div className="acc-borda rounded-2xl border bg-bg-card/60 p-7 sm:p-9">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              {problema.titulo}
            </h2>
            <div className="mt-4 space-y-3 text-neutral-300">
              {problema.texto}
            </div>
          </div>
        </section>
      )}

      {passos && passos.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            {passosTitulo}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {passos.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-neutral-900 bg-bg-card p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full acc-bg text-bg font-bold">
                  {s.n}
                </div>
                <h3 className="mt-4 text-lg font-bold">{s.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {s.texto}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {blocos && blocos.length > 0 ? (
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            {featuresTitulo}
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {blocos.map((b) => (
              <div
                key={b.titulo}
                className="rounded-2xl border border-neutral-900 bg-bg-card p-6 transition hover:border-neutral-700"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{b.icone}</span>
                  <h3 className="acc-text text-lg font-bold">{b.titulo}</h3>
                </div>
                <p className="mt-3 text-sm text-neutral-400">{b.texto}</p>
                <ul className="mt-4 space-y-2">
                  {b.itens.map((i) => (
                    <li key={i} className="flex gap-2 text-sm text-neutral-300">
                      <span className="acc-text mt-0.5">✓</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : (
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          {featuresTitulo}
        </h2>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 rounded-xl border border-neutral-900 bg-bg-soft px-4 py-3 text-sm text-neutral-200"
            >
              <span className="mt-0.5 acc-text">✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>
      )}

      {prints && prints.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            O sistema por dentro
          </h2>
          <p className="mt-3 text-center text-sm text-neutral-500">
            Telas reais, tiradas da demonstração — não é mockup.
          </p>
          <div
            className={
              prints.length === 1
                ? "mt-10 grid gap-5"
                : "mt-10 grid gap-5 md:grid-cols-2"
            }
          >
            {prints.map((im) => (
              <figure
                key={im.arquivo}
                className="overflow-hidden rounded-2xl border border-neutral-900 bg-bg-card"
              >
                {/* sem next/image de propósito: são JPEG já otimizados e
                    servidos estáticos; o componente só acrescentaria peso. */}
                <img
                  src={im.arquivo}
                  alt={im.legenda}
                  loading="lazy"
                  className="w-full"
                />
                <figcaption className="acc-text border-t border-neutral-900 px-4 py-3 text-sm font-medium">
                  {im.legenda}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section id="planos" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Planos</h2>
        <p className="mt-3 text-center text-neutral-400">
          Sem fidelidade. Cancele quando quiser.
        </p>

        <div
          className={`mt-12 grid gap-6 ${
            planos.length === 1
              ? "sm:max-w-md sm:mx-auto"
              : planos.length === 2
                ? "sm:grid-cols-2"
                : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {planos.map((p) => (
            <div
              key={p.nome}
              className={`relative rounded-2xl border p-8 ${
                p.destaque
                  ? "acc-borda bg-bg-card acc-sombra"
                  : "border-neutral-900 bg-bg-card"
              }`}
            >
              {p.destaque && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full acc-bg px-3 py-1 text-xs font-bold text-bg">
                  MAIS POPULAR
                </span>
              )}
              <h3
                className={`text-xl font-bold ${p.destaque ? "acc-text" : ""}`}
              >
                {p.nome}
              </h3>
              <p className="mt-1 text-sm text-neutral-400">{p.publico}</p>
              <div className="mt-6">
                {p.precoDe && (
                  <p className="text-sm text-neutral-500 line-through">
                    {p.precoDe}/mês
                  </p>
                )}
                <p className="text-4xl font-black">
                  {p.precoLabel}
                  {!p.precoLabel.includes("/") &&
                    !p.precoLabel.toLowerCase().includes("grátis") && (
                      <span className="text-base font-medium text-neutral-500">
                        /mês
                      </span>
                    )}
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-neutral-300">
                {p.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <a
                href={p.ctaHref}
                target={p.ctaHref.startsWith("http") ? "_blank" : undefined}
                rel={
                  p.ctaHref.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                  p.destaque
                    ? "acc-bg text-bg hover:brightness-110"
                    : "border acc-borda acc-text hover:brightness-125"
                }`}
              >
                {p.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </section>

      {praQuem && praQuem.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Feito pra quem
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {praQuem.map((q) => (
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
          {naoServe && naoServe.length > 0 && (
            <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-neutral-800 bg-bg-soft p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400">
                Não é pra você se
              </h3>
              <ul className="mt-3 space-y-2">
                {naoServe.map((n) => (
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

      {faq && faq.length > 0 && (
        <section className="mx-auto max-w-3xl px-6 py-10">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Perguntas que sempre fazem
          </h2>
          <div className="mt-10 space-y-4">
            {faq.map((f) => (
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
      )}

      {(ctaFinalTitulo || ctaPrimaria || trialHref) && (
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {ctaFinalTitulo || `Pronto pra começar com o ${nome}?`}
          </h2>
          {ctaFinalTexto && (
            <p className="mt-4 text-neutral-400">{ctaFinalTexto}</p>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {trialHref && (
              <a
                href={trialHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full acc-bg px-8 py-4 text-base font-semibold text-bg transition hover:brightness-110"
              >
                Testar 3 dias grátis →
              </a>
            )}
            {demoHref && (
              <a
                href={demoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border acc-borda px-8 py-4 text-base font-semibold acc-text transition hover:brightness-125"
              >
                Ver demo
              </a>
            )}
            {!trialHref && ctaPrimaria && (
              <a
                href={ctaPrimaria.href}
                target={
                  ctaPrimaria.href.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  ctaPrimaria.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-block rounded-full acc-bg px-8 py-4 text-base font-semibold text-bg transition hover:brightness-110"
              >
                {ctaPrimaria.label}
              </a>
            )}
          </div>
        </section>
      )}

      <ContactInfo />

      <footer className="border-t border-neutral-900 px-6 py-10 text-center text-sm text-neutral-500">
        <p>
          <Link href="/" className="hover:text-white">
            Luqsys
          </Link>{" "}
          · {nome} · © {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
