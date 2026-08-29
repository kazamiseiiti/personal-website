"use client";

type ThemeToggleProps = {
  label: string;
};

export function ThemeToggle({ label }: ThemeToggleProps) {
  function toggleTheme() {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="grid size-9 cursor-pointer place-items-center rounded-full border bg-surface text-sm transition-colors hover:border-accent hover:text-accent"
    >
      <span aria-hidden="true" className="dark:hidden">◐</span>
      <span aria-hidden="true" className="hidden dark:inline">◑</span>
    </button>
  );
}
