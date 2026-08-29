type PageIntroProps = {
  title: string;
  description: string;
  note: string;
};

export function PageIntro({ title, description, note }: PageIntroProps) {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-6xl items-center px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="max-w-3xl">
        <div className="mb-7 h-1 w-12 rounded-full bg-accent" />
        <h1 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
          {description}
        </p>
        <p className="mt-10 inline-flex rounded-full border bg-surface px-4 py-2 text-sm text-muted">
          {note}
        </p>
      </div>
    </section>
  );
}
