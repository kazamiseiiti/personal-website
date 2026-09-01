import Link from "next/link";
import { localeLabels, type Locale } from "@/i18n/config";
import { getLocalizedContentPath } from "@/lib/content/translations";
import type { ResearchArticleSummary } from "@/lib/research/types";
import { researchLabels } from "./research-labels";

type ResearchListProps = {
  locale: Locale;
  articles: ResearchArticleSummary[];
};

export function ResearchList({ locale, articles }: ResearchListProps) {
  const labels = researchLabels[locale];

  return (
    <div className="grid gap-5">
      {articles.map((article) => (
        <article key={article.translationKey} className="glass-medium rounded-2xl border p-6 sm:p-8">
          <div className="font-mono text-xs uppercase tracking-[0.12em] text-accent">Point cloud · GCN · MRA</div>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            <Link
              href={getLocalizedContentPath("research", article.translationKey, locale)}
              className="transition-colors hover:text-accent"
            >
              {article.title}
            </Link>
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{article.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
            <Link
              href={getLocalizedContentPath("research", article.translationKey, locale)}
              className="font-medium text-accent-strong transition-colors hover:text-accent"
            >
              {labels.readArticle} →
            </Link>
            <span className="sm:ml-auto">
              {labels.availableIn}: {article.availableLocales.map((item) => localeLabels[item]).join(" / ")}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
