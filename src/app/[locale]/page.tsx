import Link from "next/link";
import { getDictionary, resolveLocale } from "@/i18n/get-dictionary";

export default async function HomePage(props: PageProps<"/[locale]">) {
  const locale = await resolveLocale(props.params);
  const dictionary = await getDictionary(locale);

  return (
    <>
      <section className="mx-auto grid min-h-[68vh] max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1fr_18rem] lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {dictionary.home.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            {dictionary.home.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            {dictionary.home.introduction}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-strong dark:text-background"
            >
              {dictionary.home.primaryAction}
            </Link>
            <Link
              href={`/${locale}/research`}
              className="inline-flex min-h-11 items-center justify-center rounded-full border bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              {dictionary.home.secondaryAction}
            </Link>
          </div>
        </div>

        <div aria-hidden="true" className="relative hidden aspect-square lg:block">
          <div className="absolute inset-0 rounded-full border border-accent/30" />
          <div className="absolute inset-[18%] rounded-full border border-accent/60" />
          <div className="absolute inset-[39%] rounded-full bg-accent" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-linear-to-b from-transparent via-accent/40 to-transparent" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-linear-to-r from-transparent via-accent/40 to-transparent" />
        </div>
      </section>

      <section className="border-y bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            {dictionary.home.areasTitle}
          </h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-3">
            {dictionary.home.areas.map((area, index) => (
              <article key={area.title} className="bg-surface p-6 sm:p-8">
                <span className="font-mono text-xs text-accent">0{index + 1}</span>
                <h3 className="mt-8 text-xl font-semibold tracking-tight">{area.title}</h3>
                <p className="mt-3 leading-7 text-muted">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
