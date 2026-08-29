# Personal website

A multilingual personal technical blog foundation built with Next.js, TypeScript, and Tailwind CSS.

## Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. The root route redirects to the default Chinese locale.

## Quality checks

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Structure

- `src/app/[locale]` — localized App Router pages and shared layout
- `src/components` — reusable layout and page components
- `src/i18n` — locale configuration and dictionaries
- `src/content/blog` — reserved for the future MDX article pipeline
- `src/data` — reserved for typed project, research, and publication data
- `src/types` — shared content models

Supported locales are Chinese (`zh`), Japanese (`ja`), and English (`en`). The project is ready to import into Vercel without additional framework configuration.
