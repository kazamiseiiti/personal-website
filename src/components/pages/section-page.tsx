import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { getDictionary, resolveLocale } from "@/i18n/get-dictionary";
import type { PageKey } from "@/i18n/types";

export type LocalizedPageProps = {
  params: Promise<{ locale: string }>;
};

export async function getSectionMetadata(
  props: LocalizedPageProps,
  pageKey: PageKey,
): Promise<Metadata> {
  const locale = await resolveLocale(props.params);
  const dictionary = await getDictionary(locale);
  const page = dictionary.pages[pageKey];

  return {
    title: page.title,
    description: page.description,
  };
}

export async function SectionPage({
  params,
  pageKey,
}: LocalizedPageProps & { pageKey: PageKey }) {
  const locale = await resolveLocale(params);
  const dictionary = await getDictionary(locale);

  return <PageIntro {...dictionary.pages[pageKey]} />;
}
