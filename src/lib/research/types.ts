import type { Locale } from "@/i18n/config";

export type ResearchFrontmatter = {
  title: string;
  description: string;
  locale: Locale;
  slug: string;
  translationKey: string;
};

export type ResearchTocItem = {
  id: string;
  title: string;
  level: 2 | 3;
};

export type ResearchArticleSummary = ResearchFrontmatter & {
  availableLocales: Locale[];
};

export type ResearchArticle = ResearchArticleSummary & {
  source: string;
  toc: ResearchTocItem[];
};
