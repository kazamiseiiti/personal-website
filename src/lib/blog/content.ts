import "server-only";

import { cache } from "react";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import GithubSlugger from "github-slugger";
import matter from "gray-matter";
import { isLocale, locales, type Locale } from "@/i18n/config";
import {
  translationStatuses,
  type BlogFrontmatter,
  type BlogPost,
  type BlogPostSummary,
  type TocItem,
} from "./types";

const contentRoot = path.join(process.cwd(), "src", "content", "blog");
const isDevelopment = process.env.NODE_ENV === "development";

function assertString(value: unknown, field: string, filePath: string): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Invalid or missing ${field} in ${filePath}`);
  }
  return value.trim();
}

function parseDate(value: unknown, filePath: string): string {
  const date = value instanceof Date
    ? value.toISOString().slice(0, 10)
    : assertString(value, "date", filePath);

  if (Number.isNaN(Date.parse(date))) {
    throw new Error(`Invalid date in ${filePath}`);
  }
  return date;
}

function parseFrontmatter(data: Record<string, unknown>, filePath: string): BlogFrontmatter {
  const date = parseDate(data.date, filePath);

  if (!Array.isArray(data.tags) || !data.tags.every((tag) => typeof tag === "string")) {
    throw new Error(`Invalid or missing tags in ${filePath}`);
  }
  if (typeof data.draft !== "boolean") {
    throw new Error(`Invalid or missing draft in ${filePath}`);
  }
  if (typeof data.originalLocale !== "string" || !isLocale(data.originalLocale)) {
    throw new Error(`Invalid or missing originalLocale in ${filePath}`);
  }
  if (
    typeof data.translationStatus !== "string" ||
    !translationStatuses.includes(data.translationStatus as BlogFrontmatter["translationStatus"])
  ) {
    throw new Error(`Invalid or missing translationStatus in ${filePath}`);
  }

  return {
    title: assertString(data.title, "title", filePath),
    description: assertString(data.description, "description", filePath),
    date,
    category: assertString(data.category, "category", filePath),
    tags: data.tags,
    draft: data.draft,
    originalLocale: data.originalLocale,
    translationStatus: data.translationStatus as BlogFrontmatter["translationStatus"],
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

function getToc(source: string): TocItem[] {
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];
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
    if (!title) continue;
    items.push({ id: slugger.slug(title), title, level: match[1].length as 2 | 3 });
  }

  return items;
}

function getReadingMinutes(source: string): number {
  const plainText = source
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`~\[\]()-]/g, " ");
  const latinWords = plainText.match(/[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*/g)?.length ?? 0;
  const cjkCharacters = plainText.match(/[\u3400-\u9fff\u3040-\u30ff\uac00-\ud7af]/g)?.length ?? 0;
  return Math.max(1, Math.ceil(latinWords / 220 + cjkCharacters / 500));
}

async function getSlugs(): Promise<string[]> {
  const entries = await readdir(contentRoot, { withFileTypes: true });
  return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
}

async function getLocaleFiles(slug: string): Promise<Locale[]> {
  const entries = await readdir(path.join(contentRoot, slug), { withFileTypes: true });
  const fileNames = new Set(entries.filter((entry) => entry.isFile()).map((entry) => entry.name));
  return locales.filter((locale) => fileNames.has(`${locale}.mdx`));
}

async function readPostFile(slug: string, locale: Locale) {
  const filePath = path.join(contentRoot, slug, `${locale}.mdx`);
  const raw = await readFile(filePath, "utf8");
  const parsed = matter(raw);
  return {
    frontmatter: parseFrontmatter(parsed.data, filePath),
    source: parsed.content.trim(),
  };
}

async function loadPostUncached(
  slug: string,
  requestedLocale: Locale,
  includeDrafts = isDevelopment,
): Promise<BlogPost | null> {
  if (!(await getSlugs()).includes(slug)) return null;

  const localeFiles = await getLocaleFiles(slug);
  if (!localeFiles.includes("zh")) {
    throw new Error(`Blog post "${slug}" must include zh.mdx`);
  }

  const versions = new Map(
    await Promise.all(
      localeFiles.map(async (locale) => [locale, await readPostFile(slug, locale)] as const),
    ),
  );
  const availableLocales = localeFiles.filter(
    (locale) => includeDrafts || !versions.get(locale)?.frontmatter.draft,
  );
  if (!availableLocales.includes("zh")) return null;

  const locale = availableLocales.includes(requestedLocale) ? requestedLocale : "zh";
  const version = versions.get(locale);
  if (!version) return null;
  const { frontmatter, source } = version;

  return {
    ...frontmatter,
    slug,
    requestedLocale,
    locale,
    isFallback: locale !== requestedLocale,
    availableLocales,
    readingMinutes: getReadingMinutes(source),
    source,
    toc: getToc(source),
  };
}

export const getPost = cache(loadPostUncached);

export const listPosts = cache(async (locale: Locale): Promise<BlogPostSummary[]> => {
  const posts = await Promise.all(
    (await getSlugs()).map((slug) => loadPostUncached(slug, locale, false)),
  );

  return posts
    .filter((post): post is BlogPost => post !== null)
    .map((post) => ({
      title: post.title,
      description: post.description,
      date: post.date,
      category: post.category,
      tags: post.tags,
      draft: post.draft,
      originalLocale: post.originalLocale,
      translationStatus: post.translationStatus,
      slug: post.slug,
      requestedLocale: post.requestedLocale,
      locale: post.locale,
      isFallback: post.isFallback,
      availableLocales: post.availableLocales,
      readingMinutes: post.readingMinutes,
    }))
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
});

export async function getStaticPostParams() {
  const params: Array<{ locale: Locale; slug: string }> = [];

  for (const slug of await getSlugs()) {
    for (const locale of locales) {
      const post = await loadPostUncached(slug, locale);
      if (post) params.push({ locale, slug });
    }
  }

  return params;
}
