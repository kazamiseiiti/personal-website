import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocumentLocale } from "@/components/layout/document-locale";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: LayoutProps<"/[locale]">,
): Promise<Metadata> {
  const { locale } = await props.params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return {
    title: {
      default: dictionary.metadata.title,
      template: `%s · ${dictionary.metadata.title}`,
    },
    description: dictionary.metadata.description,
  };
}

export default async function LocaleLayout(props: LayoutProps<"/[locale]">) {
  const { locale } = await props.params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return (
    <div lang={locale} className="contents">
      <DocumentLocale locale={locale} />
      <SiteHeader locale={locale} dictionary={dictionary} />
      <main className="flex-1">{props.children}</main>
      <SiteFooter dictionary={dictionary} />
    </div>
  );
}
