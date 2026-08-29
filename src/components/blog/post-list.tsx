import Link from "next/link";
import { localeLabels, type Locale } from "@/i18n/config";
import type { BlogPostSummary } from "@/lib/blog/types";
import { blogLabels } from "./blog-labels";

type PostListProps = {
  locale: Locale;
  posts: BlogPostSummary[];
  compact?: boolean;
};

function formatDate(date: string, locale: Locale) {
  const dateLocales: Record<Locale, string> = { zh: "zh-CN", ja: "ja-JP", en: "en-US" };
  return new Intl.DateTimeFormat(dateLocales[locale], {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

export function PostList({ locale, posts, compact = false }: PostListProps) {
  const labels = blogLabels[locale];

  if (posts.length === 0) {
    return <p className="rounded-2xl border bg-surface/70 p-6 text-muted">{labels.empty}</p>;
  }

  return (
    <div className={compact ? "space-y-4" : "grid gap-5"}>
      {posts.map((post) => (
        <article key={post.slug} className="glass-medium rounded-2xl border p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-muted">
            <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
            <span aria-hidden="true">·</span>
            <span>{labels.minuteRead(post.readingMinutes)}</span>
            <span className="rounded-full bg-accent-soft px-2.5 py-1 text-accent-strong">{post.category}</span>
            {post.draft && <span className="rounded-full border px-2.5 py-1 text-accent">{labels.draft}</span>}
          </div>
          <h2 className={`${compact ? "mt-4 text-xl" : "mt-5 text-2xl sm:text-3xl"} font-semibold tracking-tight`}>
            <Link href={`/${locale}/blog/${post.slug}`} className="transition-colors hover:text-accent">
              {post.title}
            </Link>
          </h2>
          <p className="mt-3 leading-7 text-muted">{post.description}</p>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted">
            {post.tags.map((tag) => <span key={tag}>#{tag}</span>)}
            <span className="ml-auto font-mono">{labels.availableIn}: {post.availableLocales.map((item) => localeLabels[item]).join(" / ")}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
