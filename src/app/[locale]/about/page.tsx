import { getSectionMetadata, type LocalizedPageProps } from "@/components/pages/section-page";
import { getDictionary, resolveLocale } from "@/i18n/get-dictionary";

export const generateMetadata = (props: LocalizedPageProps) => getSectionMetadata(props, "about");

export default async function AboutPage(props: LocalizedPageProps) {
  const locale = await resolveLocale(props.params);
  const dictionary = await getDictionary(locale);
  const about = dictionary.about;

  return (
    <article>
      <header className="relative isolate overflow-hidden border-b">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_32%,var(--accent-soft),transparent_30%)] opacity-60" />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">{about.eyebrow}</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            {about.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">{about.introduction}</p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        {about.sections.map((section) => (
          <section key={section.index} className="grid gap-6 border-b py-14 last:border-b-0 sm:py-20 lg:grid-cols-[11rem_1fr] lg:gap-12">
            <div>
              <span className="font-mono text-xs text-accent">{section.index} / 05</span>
              <div className="mt-4 hidden h-px w-16 bg-accent/50 lg:block" />
            </div>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">{section.title}</h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-muted sm:text-lg">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {section.topics && (
                <ul className="mt-8 flex flex-wrap gap-2" aria-label={section.title}>
                  {section.topics.map((topic) => (
                    <li key={topic} className="rounded-full border bg-surface px-3 py-1.5 font-mono text-[0.68rem] tracking-[0.04em] text-muted">
                      {topic}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
