import { locales, type Locale } from "@/i18n/config";

export type ContentSection = "research" | "blog";

type LocalizedSlugs = Partial<Record<Locale, string>>;

export const contentRouteTranslations: Record<
  ContentSection,
  Record<string, LocalizedSlugs>
> = {
  research: {
    "cerebral-vessel-completion": {
      zh: "naoxueguan-jiegou-buquan",
      ja: "noukekkan-kouzou-hokan",
      en: "cerebral-vessel-structure-completion",
    },
  },
  blog: {},
};

export function getTranslationKey(
  section: ContentSection,
  locale: Locale,
  slug: string,
): string | null {
  for (const [translationKey, slugs] of Object.entries(contentRouteTranslations[section])) {
    if (slugs[locale] === slug) return translationKey;
  }
  return null;
}

export function getLocalizedContentPath(
  section: ContentSection,
  translationKey: string,
  locale: Locale,
): string {
  const slug = contentRouteTranslations[section][translationKey]?.[locale];
  return slug ? `/${locale}/${section}/${slug}` : `/${locale}/${section}`;
}

export function getAvailableContentLocales(
  section: ContentSection,
  translationKey: string,
): Locale[] {
  const slugs = contentRouteTranslations[section][translationKey];
  return slugs ? locales.filter((locale) => Boolean(slugs[locale])) : [];
}

export function resolveTranslatedContentPath(
  pathnameWithoutLocale: string,
  targetLocale: Locale,
): string | null {
  const match = /^\/(research|blog)\/([^/]+)\/?$/.exec(pathnameWithoutLocale);
  if (!match) return null;

  const section = match[1] as ContentSection;
  const currentSlug = match[2];
  const entry = Object.entries(contentRouteTranslations[section]).find(([, slugs]) =>
    Object.values(slugs).includes(currentSlug),
  );

  return entry ? getLocalizedContentPath(section, entry[0], targetLocale) : null;
}
