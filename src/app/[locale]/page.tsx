import Link from "next/link";
import { PostList } from "@/components/blog/post-list";
import { ResearchConsole } from "@/components/home/research-console";
import { SectionHeading } from "@/components/home/section-heading";
import { getDictionary, resolveLocale } from "@/i18n/get-dictionary";
import { listPosts } from "@/lib/blog/content";

export default async function HomePage(props: PageProps<"/[locale]">) {
  const locale = await resolveLocale(props.params);
  const dictionary = await getDictionary(locale);
  const home = dictionary.home;
  const recentPosts = (await listPosts(locale)).slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_22%,var(--ambient-blue),transparent_30%),radial-gradient(circle_at_90%_58%,var(--ambient-violet),transparent_26%)]" />
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.8fr)] lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-gradient font-mono text-xs font-semibold uppercase tracking-[0.2em]">
              {home.eyebrow}
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-none tracking-[-0.055em] sm:text-7xl lg:text-[5.4rem]">
              {home.name}
            </h1>
            <div className="mt-7 flex flex-wrap gap-2">
              {home.roleTags.map((tag) => (
                <span key={tag} className="glass-subtle rounded-full border px-3 py-1.5 font-mono text-[0.68rem] tracking-[0.08em] text-muted">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 max-w-2xl space-y-3 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {home.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              {home.actions.map((action, index) => (
                <Link
                  key={action.href}
                  href={`/${locale}${action.href}`}
                  className={index === 0
                    ? "bg-accent-gradient accent-glow inline-flex min-h-11 items-center rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-[transform,filter] hover:-translate-y-0.5 hover:brightness-105"
                    : "glass-control inline-flex min-h-11 items-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors hover:text-accent"}
                >
                  {action.label}<span aria-hidden="true" className="ml-2">↗</span>
                </Link>
              ))}
            </div>
          </div>

          <ResearchConsole label={dictionary.accessibility.researchVisual} />
        </div>
      </section>

      <section className="ambient-surface border-y">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeading {...home.recentPosts} />
          {recentPosts.length > 0 ? (
            <PostList locale={locale} posts={recentPosts} compact />
          ) : (
            <div className="glass-medium rounded-3xl border p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-accent-strong">
                  {home.recentPosts.emptyStatus}
                </span>
                <span className="font-mono text-xs text-muted">00 POSTS</span>
              </div>
              <h3 className="mt-14 text-2xl font-semibold tracking-tight">{home.recentPosts.emptyTitle}</h3>
              <p className="mt-3 max-w-xl leading-7 text-muted">{home.recentPosts.emptyDescription}</p>
              <div className="mt-8 border-t pt-5">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">{home.recentPosts.categoriesLabel}</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
                  {home.recentPosts.categories.map((category) => <span key={category}>#{category}</span>)}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <SectionHeading {...home.featuredProjects} />
          <div className="glass-strong mt-10 grid overflow-hidden rounded-3xl border md:grid-cols-[1.2fr_0.8fr]">
            <div className="bg-surface/55 p-7 sm:p-10">
              <span className="status-indicator inline-flex rounded-full px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-accent">{home.featuredProjects.emptyStatus}</span>
              <h3 className="mt-12 max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">{home.featuredProjects.emptyTitle}</h3>
              <p className="mt-4 max-w-xl leading-7 text-muted">{home.featuredProjects.emptyDescription}</p>
            </div>
            <div aria-hidden="true" className="relative min-h-56 overflow-hidden border-t bg-surface-muted/55 p-8 md:border-l md:border-t-0">
              <div className="absolute inset-8 grid grid-cols-4 grid-rows-3 gap-3 opacity-70">
                {Array.from({ length: 12 }, (_, index) => (
                  <span key={index} className="rounded-lg border bg-background/70" />
                ))}
              </div>
              <div className="bg-accent-gradient accent-glow absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent" />
            </div>
          </div>
        </div>
      </section>

      <section className="ambient-surface border-y">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <SectionHeading {...home.currentFocus} />
          <div className="glass-medium mt-10 grid gap-px overflow-hidden rounded-3xl border bg-border/60 md:grid-cols-3">
            {home.currentFocus.topics.map((topic, index) => (
              <article key={topic.title} className="bg-surface/65 p-7 sm:p-8">
                <span className="font-mono text-xs text-accent">0{index + 1}</span>
                <h3 className="mt-12 text-xl font-semibold tracking-tight">{topic.title}</h3>
                <p className="mt-3 leading-7 text-muted">{topic.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="glass-medium relative overflow-hidden rounded-3xl border p-7 sm:p-12">
            <div className="pointer-events-none absolute -bottom-24 -right-16 size-72 rounded-full bg-accent-soft blur-3xl" />
            <div className="relative max-w-3xl">
              <SectionHeading {...home.aboutPreview} />
              <Link
                href={`/${locale}/about`}
                className="glass-control mt-8 inline-flex min-h-11 items-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors hover:text-accent"
              >
                {home.aboutPreview.action}<span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
