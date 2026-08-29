import type { Locale } from "@/i18n/config";

export const translationStatuses = ["original", "machine", "human"] as const;

export type TranslationStatus = (typeof translationStatuses)[number];

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  draft: boolean;
  originalLocale: Locale;
  translationStatus: TranslationStatus;
};

export type TocItem = {
  id: string;
  title: string;
  level: 2 | 3;
};

export type BlogPostSummary = BlogFrontmatter & {
  slug: string;
  requestedLocale: Locale;
  locale: Locale;
  isFallback: boolean;
  availableLocales: Locale[];
  readingMinutes: number;
};

export type BlogPost = BlogPostSummary & {
  source: string;
  toc: TocItem[];
};
