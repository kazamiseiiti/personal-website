import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { localeLabels, type Locale } from "@/i18n/config";
import { getLocalizedContentPath } from "@/lib/content/translations";
import type { ResearchArticle as ResearchArticleType } from "@/lib/research/types";
import { researchLabels } from "./research-labels";

type ResearchArticleProps = {
  locale: Locale;
  article: ResearchArticleType;
};

export function ResearchArticle({ locale, article }: ResearchArticleProps) {
  const labels = researchLabels[locale];

  return (
    <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <header className="mx-auto max-w-4xl">
        <Link href={`/${locale}/research`} className="font-mono text-xs text-accent transition-colors hover:text-accent-strong">
          ← {labels.back}
        </Link>
        <div className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-accent">Master&apos;s research · MRA · PointNet++ · GCN</div>
        <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">{article.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">{article.description}</p>
        <div className="mt-7 flex flex-wrap items-center gap-3 border-t pt-6 text-sm">
          <span className="text-muted">{labels.availableIn}:</span>
          {article.availableLocales.map((item) => (
            <Link
              key={item}
              href={getLocalizedContentPath("research", article.translationKey, item)}
              hrefLang={item}
              lang={item}
              className="text-muted transition-colors hover:text-accent"
            >
              {localeLabels[item]}
            </Link>
          ))}
        </div>
      </header>

      <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1fr)_15rem]">
        <div className="min-w-0">
          <div className="blog-prose">
            <MDXRemote
              source={article.source}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm, remarkMath],
                  rehypePlugins: [rehypeSlug, rehypeHighlight, rehypeKatex],
                },
              }}
            />
          </div>
        </div>

        {article.toc.length > 0 && (
          <aside className="order-first lg:order-last">
            <nav className="glass-subtle rounded-2xl border p-5 lg:sticky lg:top-24" aria-label={labels.tableOfContents}>
              <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">{labels.tableOfContents}</h2>
              <ol className="mt-4 space-y-2.5 text-sm text-muted">
                {article.toc.map((item) => (
                  <li key={item.id} className={item.level === 3 ? "pl-4" : undefined}>
                    <a href={`#${item.id}`} className="leading-5 transition-colors hover:text-accent">{item.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
        )}
      </div>
    </article>
  );
}
