import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import GithubSlugger from "github-slugger";
import matter from "gray-matter";
import { isLocale, locales, type Locale } from "@/i18n/config";
import {
  contentRouteTranslations,
  getAvailableContentLocales,
  getTranslationKey,
} from "@/lib/content/translations";
import type {
  ResearchArticle,
  ResearchArticleSummary,
  ResearchFrontmatter,
  ResearchTocItem,
} from "./types";

const contentRoot = path.join(process.cwd(), "src", "content", "research");

function assertString(value: unknown, field: string, filePath: string): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Invalid or missing ${field} in ${filePath}`);
  }
  return value.trim();
}

function parseFrontmatter(data: Record<string, unknown>, filePath: string): ResearchFrontmatter {
  const locale = assertString(data.locale, "locale", filePath);
  if (!isLocale(locale)) throw new Error(`Invalid locale in ${filePath}`);

  return {
    title: assertString(data.title, "title", filePath),
    description: assertString(data.description, "description", filePath),
    locale,
    slug: assertString(data.slug, "slug", filePath),
    translationKey: assertString(data.translationKey, "translationKey", filePath),
  };
}

function stripInlineMarkdown(value: string): string {
  return value
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[`*_~]/g, "")
    .replace(/<[^>]+>/g, "")
    .trim();
}

function getToc(source: string): ResearchTocItem[] {
  const slugger = new GithubSlugger();
  const items: ResearchTocItem[] = [];
  let insideFence = false;

  for (const line of source.split(/\r?\n/)) {
    if (/^\s*```/.test(line)) {
      insideFence = !insideFence;
      continue;
    }
    if (insideFence) continue;
    const match = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!match) continue;
    const title = stripInlineMarkdown(match[2]);
    if (title) items.push({ id: slugger.slug(title), title, level: match[1].length as 2 | 3 });
  }

  return items;
}

async function loadArticle(
  translationKey: string,
  locale: Locale,
): Promise<ResearchArticle> {
  const filePath = path.join(contentRoot, translationKey, `${locale}.mdx`);
  const parsed = matter(await readFile(filePath, "utf8"));
  const frontmatter = parseFrontmatter(parsed.data, filePath);
  const registeredSlug = contentRouteTranslations.research[translationKey]?.[locale];

  if (
    frontmatter.translationKey !== translationKey ||
    frontmatter.locale !== locale ||
    frontmatter.slug !== registeredSlug
  ) {
    throw new Error(`Research frontmatter does not match the translation registry in ${filePath}`);
  }

  const source = parsed.content.trim();
  return {
    ...frontmatter,
    availableLocales: getAvailableContentLocales("research", translationKey),
    source,
    toc: getToc(source),
  };
}

export const getResearchArticle = cache(
  async (slug: string, locale: Locale): Promise<ResearchArticle | null> => {
    const translationKey = getTranslationKey("research", locale, slug);
    return translationKey ? loadArticle(translationKey, locale) : null;
  },
);

export const listResearchArticles = cache(
  async (locale: Locale): Promise<ResearchArticleSummary[]> => {
    const articles = await Promise.all(
      Object.entries(contentRouteTranslations.research).map(async ([translationKey, slugs]) => {
        if (!slugs[locale]) return null;
        const article = await loadArticle(translationKey, locale);
        return {
          title: article.title,
          description: article.description,
          locale: article.locale,
          slug: article.slug,
          translationKey: article.translationKey,
          availableLocales: article.availableLocales,
        };
      }),
    );
    return articles.filter((article): article is ResearchArticleSummary => article !== null);
  },
);

export function getStaticResearchParams() {
  return Object.values(contentRouteTranslations.research).flatMap((slugs) =>
    locales.flatMap((locale) => (slugs[locale] ? [{ locale, slug: slugs[locale] }] : [])),
  );
}
