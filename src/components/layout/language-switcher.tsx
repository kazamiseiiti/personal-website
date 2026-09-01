"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { localeLabels, locales, type Locale } from "@/i18n/config";
import { resolveTranslatedContentPath } from "@/lib/content/translations";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

const linkClassName =
  "rounded-md px-2 py-1.5 text-xs font-medium text-muted transition-colors hover:bg-surface-muted hover:text-foreground aria-[current=page]:bg-accent-soft aria-[current=page]:text-accent-strong";

function LanguageSwitcherFallback({ locale, label }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1" aria-label={label}>
      {locales.map((item) => (
        <span
          key={item}
          lang={item}
          aria-current={item === locale ? "page" : undefined}
          className={linkClassName}
        >
          {localeLabels[item]}
        </span>
      ))}
    </div>
  );
}

function LanguageSwitcherLinks({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const localePrefix = `/${locale}`;
  const pathnameWithoutLocale = pathname.slice(localePrefix.length);
  const query = searchParams.toString();

  return (
    <div className="flex items-center gap-1" aria-label={label}>
      {locales.map((item) => {
        const localizedPathname =
          resolveTranslatedContentPath(pathnameWithoutLocale, item) ??
          `/${item}${pathnameWithoutLocale}`;
        const href = query ? `${localizedPathname}?${query}` : localizedPathname;

        return (
          <Link
            key={item}
            href={href}
            hrefLang={item}
            lang={item}
            aria-current={item === locale ? "page" : undefined}
            className={linkClassName}
          >
            {localeLabels[item]}
          </Link>
        );
      })}
    </div>
  );
}

export function LanguageSwitcher(props: LanguageSwitcherProps) {
  return (
    <Suspense fallback={<LanguageSwitcherFallback {...props} />}>
      <LanguageSwitcherLinks {...props} />
    </Suspense>
  );
}
