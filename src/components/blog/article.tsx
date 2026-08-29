import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { localeLabels, type Locale } from "@/i18n/config";
import type { BlogPost } from "@/lib/blog/types";
import { blogLabels } from "./blog-labels";

type ArticleProps = {
  locale: Locale;
  post: BlogPost;
};

function formatDate(date: string, locale: Locale) {
  const dateLocales: Record<Locale, string> = { zh: "zh-CN", ja: "ja-JP", en: "en-US" };
  return new Intl.DateTimeFormat(dateLocales[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

export function Article({ locale, post }: ArticleProps) {
  const labels = blogLabels[locale];
  const notice = post.isFallback
    ? labels.fallbackNotice
    : post.translationStatus === "machine"
      ? labels.machineNotice
      : post.translationStatus === "human"
        ? labels.humanNotice
        : labels.originalNotice;

  return (
    <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <header className="mx-auto max-w-4xl">
        <Link href={`/${locale}/blog`} className="font-mono text-xs text-accent transition-colors hover:text-accent-strong">
          ← Blog
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-xs text-muted">
          <span className="rounded-full bg-accent-soft px-3 py-1.5 text-accent-strong">{post.category}</span>
          <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
          <span aria-hidden="true">·</span>
          <span>{labels.minuteRead(post.readingMinutes)}</span>
          {post.draft && <span className="rounded-full border px-3 py-1.5 text-accent">{labels.draft}</span>}
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">{post.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">{post.description}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="glass-subtle rounded-full border px-3 py-1.5 text-xs text-muted">#{tag}</span>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-3 border-t pt-6 text-sm">
          <span className="status-indicator rounded-full px-3 py-1.5 text-accent-strong">
            {labels.languageStatus(post.originalLocale, post.translationStatus)}
          </span>
          <span className="text-muted">{labels.availableIn}:</span>
          {post.availableLocales.map((item) => (
            <Link
              key={item}
              href={`/${item}/blog/${post.slug}`}
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
          <p className="rounded-2xl border border-accent/20 bg-accent-soft/70 px-5 py-4 text-sm leading-6 text-muted">{notice}</p>
          <div className="blog-prose mt-10">
            <MDXRemote
              source={post.source}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm, remarkMath],
                  rehypePlugins: [rehypeSlug, rehypeHighlight, rehypeKatex],
                },
              }}
            />
          </div>
        </div>

        {post.toc.length > 0 && (
          <aside className="order-first lg:order-last">
            <nav className="glass-subtle rounded-2xl border p-5 lg:sticky lg:top-24" aria-label={labels.tableOfContents}>
              <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">{labels.tableOfContents}</h2>
              <ol className="mt-4 space-y-2.5 text-sm text-muted">
                {post.toc.map((item) => (
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
