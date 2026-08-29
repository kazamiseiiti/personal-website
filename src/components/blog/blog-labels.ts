import type { Locale } from "@/i18n/config";
import type { TranslationStatus } from "@/lib/blog/types";

type BlogLabels = {
  empty: string;
  draft: string;
  minuteRead: (minutes: number) => string;
  availableIn: string;
  tableOfContents: string;
  fallbackNotice: string;
  originalNotice: string;
  machineNotice: string;
  humanNotice: string;
  languageStatus: (originalLocale: Locale, status: TranslationStatus) => string;
};

const languageNames: Record<Locale, Record<Locale, string>> = {
  zh: { zh: "中文", ja: "日语", en: "英语" },
  ja: { zh: "中国語", ja: "日本語", en: "英語" },
  en: { zh: "Chinese", ja: "Japanese", en: "English" },
};

export const blogLabels: Record<Locale, BlogLabels> = {
  zh: {
    empty: "目前还没有已发布的文章。",
    draft: "草稿预览",
    minuteRead: (minutes) => `${minutes} 分钟阅读`,
    availableIn: "可用语言",
    tableOfContents: "目录",
    fallbackNotice: "当前仅提供中文原文，正在显示中文版本。",
    originalNotice: "本文为中文原文。",
    machineNotice: "此版本由机器翻译生成，可能存在不准确之处，请以中文原文为准。",
    humanNotice: "此版本经过人工翻译。",
    languageStatus: (originalLocale, status) => {
      const original = `原文：${languageNames.zh[originalLocale]}`;
      if (status === "machine") return `${original} / 机器翻译`;
      if (status === "human") return `${original} / 人工翻译`;
      return original;
    },
  },
  ja: {
    empty: "公開済みの記事はまだありません。",
    draft: "下書きプレビュー",
    minuteRead: (minutes) => `${minutes}分で読めます`,
    availableIn: "対応言語",
    tableOfContents: "目次",
    fallbackNotice: "現在は中国語の原文のみ公開されています。中国語版を表示しています。",
    originalNotice: "この記事は中国語の原文です。",
    machineNotice: "この版は機械翻訳です。不正確な箇所がある可能性があるため、中国語の原文をご参照ください。",
    humanNotice: "この版は人によって翻訳されています。",
    languageStatus: (originalLocale, status) => {
      const original = `原文：${languageNames.ja[originalLocale]}`;
      if (status === "machine") return `${original} / 機械翻訳`;
      if (status === "human") return `${original} / 人による翻訳`;
      return original;
    },
  },
  en: {
    empty: "There are no published posts yet.",
    draft: "Draft preview",
    minuteRead: (minutes) => `${minutes} min read`,
    availableIn: "Available in",
    tableOfContents: "Table of contents",
    fallbackNotice: "Only the Chinese original is currently available. The Chinese version is shown here.",
    originalNotice: "This article is the original Chinese version.",
    machineNotice: "This version was machine translated and may contain inaccuracies. Please refer to the Chinese original.",
    humanNotice: "This version was translated by a human.",
    languageStatus: (originalLocale, status) => {
      const original = `Original: ${languageNames.en[originalLocale]}`;
      if (status === "machine") return `${original} / Machine translated`;
      if (status === "human") return `${original} / Human translated`;
      return original;
    },
  },
};
