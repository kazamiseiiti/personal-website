import Link from "next/link";
import { localeLabels, locales, type Locale } from "@/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1" aria-label={label}>
      {locales.map((item) => (
        <Link
          key={item}
          href={`/${item}`}
          hrefLang={item}
          lang={item}
          aria-current={item === locale ? "page" : undefined}
          className="rounded-md px-2 py-1.5 text-xs font-medium text-muted transition-colors hover:bg-surface-muted hover:text-foreground aria-[current=page]:bg-accent-soft aria-[current=page]:text-accent-strong"
        >
          {localeLabels[item]}
        </Link>
      ))}
    </div>
  );
}
