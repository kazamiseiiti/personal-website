import type { Locale } from "@/i18n/config";

export type LocalizedText = Record<Locale, string>;

export type ProjectRecord = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  technologies: string[];
  url?: string;
  repository?: string;
};

export type ResearchRecord = {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  period: string;
};

export type PublicationRecord = {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue?: string;
  url?: string;
};
