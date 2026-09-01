import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResearchArticle } from "@/components/research/research-article";
import { locales, type Locale } from "@/i18n/config";
import { resolveLocale } from "@/i18n/get-dictionary";
import { getLocalizedContentPath } from "@/lib/content/translations";
import { getResearchArticle, getStaticResearchParams } from "@/lib/research/content";

const openGraphLocales: Record<Locale, string> = {
  zh: "zh_CN",
  ja: "ja_JP",
  en: "en_US",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getStaticResearchParams();
}

export async function generateMetadata(
  props: PageProps<"/[locale]/research/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const locale = await resolveLocale(props.params);
  const article = await getResearchArticle(slug, locale);
  if (!article) return {};

  const canonical = getLocalizedContentPath("research", article.translationKey, locale);
  const languages = Object.fromEntries(
    article.availableLocales.map((item) => [
      item,
      getLocalizedContentPath("research", article.translationKey, item),
    ]),
  );
  const alternateLocale = locales
    .filter((item) => item !== locale && article.availableLocales.includes(item))
    .map((item) => openGraphLocales[item]);
  const image = "/images/research/cerebral-vessel-completion/research-framework.png";

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical, languages },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: canonical,
      locale: openGraphLocales[locale],
      alternateLocale,
      images: [{ url: image, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [image],
    },
  };
}

export default async function ResearchArticlePage(
  props: PageProps<"/[locale]/research/[slug]">,
) {
  const { slug } = await props.params;
  const locale = await resolveLocale(props.params);
  const article = await getResearchArticle(slug, locale);

  if (!article) notFound();
  return <ResearchArticle locale={locale} article={article} />;
}
