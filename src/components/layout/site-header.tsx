import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary, PageKey } from "@/i18n/types";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

const navigation: Array<{ key: "home" | PageKey; path: string }> = [
  { key: "home", path: "" },
  { key: "about", path: "/about" },
  { key: "blog", path: "/blog" },
  { key: "projects", path: "/projects" },
  { key: "research", path: "/research" },
  { key: "publications", path: "/publications" },
  { key: "contact", path: "/contact" },
];

type SiteHeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

function NavigationLinks({ locale, dictionary }: SiteHeaderProps) {
  return navigation.map(({ key, path }) => (
    <Link
      key={key}
      href={`/${locale}${path}`}
      className="rounded-md px-2 py-2 text-sm text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
    >
      {dictionary.navigation[key]}
    </Link>
  ));
}

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  return (
    <header className="glass-strong sticky top-0 z-20 border-b">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="mr-auto min-w-0">
          <span className="block truncate text-sm font-semibold tracking-tight">
            {dictionary.brand.name}
          </span>
          <span className="hidden text-[0.65rem] tracking-[0.12em] text-muted sm:block">
            {dictionary.brand.descriptor}
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label={dictionary.accessibility.menu}>
          <NavigationLinks locale={locale} dictionary={dictionary} />
        </nav>

        <div className="hidden sm:block">
          <LanguageSwitcher locale={locale} label={dictionary.accessibility.language} />
        </div>
        <ThemeToggle label={dictionary.accessibility.theme} />

        <details className="relative lg:hidden">
          <summary
            aria-label={dictionary.accessibility.menu}
            className="glass-control grid size-9 cursor-pointer list-none place-items-center rounded-full border text-lg transition-colors marker:content-none"
          >
            <span aria-hidden="true">≡</span>
          </summary>
          <div className="glass-strong absolute right-0 top-12 w-64 rounded-xl border p-3">
            <nav className="flex flex-col" aria-label={dictionary.accessibility.menu}>
              <NavigationLinks locale={locale} dictionary={dictionary} />
            </nav>
            <div className="mt-2 border-t pt-3 sm:hidden">
              <LanguageSwitcher locale={locale} label={dictionary.accessibility.language} />
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
