import type { Locale } from "@/i18n/config";

export const researchLabels: Record<
  Locale,
  { back: string; availableIn: string; tableOfContents: string; readArticle: string }
> = {
  zh: { back: "研究", availableIn: "其他语言", tableOfContents: "目录", readArticle: "阅读研究文章" },
  ja: { back: "研究", availableIn: "他の言語", tableOfContents: "目次", readArticle: "研究記事を読む" },
  en: { back: "Research", availableIn: "Available in", tableOfContents: "Contents", readArticle: "Read the research article" },
};
