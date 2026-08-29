type ResearchConsoleProps = {
  label: string;
};

const pipeline = ["MRA", "POINT CLOUD", "GRAPH", "TOPOLOGY"];

export function ResearchConsole({ label }: ResearchConsoleProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className="glass-strong relative overflow-hidden rounded-3xl border p-4 sm:p-5"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-accent/10 blur-3xl" />
      <div className="flex items-center justify-between border-b pb-3 font-mono text-[0.65rem] text-muted">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-accent-secondary/70" />
          <span className="size-2 rounded-full bg-border" />
          <span className="size-2 rounded-full bg-border" />
        </div>
        <span>RESEARCH_CONSOLE / 01</span>
      </div>

      <div className="mt-5 rounded-2xl border bg-background/70 p-4 font-mono text-xs leading-6">
        <p className="text-muted"><span className="text-accent">$</span> initialize pipeline</p>
        <p><span className="text-accent">→</span> loading vascular geometry</p>
        <p><span className="text-accent">→</span> preserving graph connectivity</p>
        <p className="text-muted">status: <span className="status-indicator rounded-full px-2 py-0.5 text-accent-strong">exploring</span></p>
      </div>

      <div className="mt-5 grid grid-cols-[auto_1fr] gap-x-3 gap-y-4">
        {pipeline.map((item, index) => (
          <div className="contents" key={item}>
            <span className="grid size-7 place-items-center rounded-full border bg-accent-soft font-mono text-[0.6rem] font-bold text-accent-strong">
              {index + 1}
            </span>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[0.68rem] tracking-[0.12em] text-muted">{item}</span>
              <span className="bg-accent-line h-px flex-1 opacity-60" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t pt-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
        <span>AI × Engineering</span>
        <span className="status-indicator flex items-center gap-2 rounded-full px-2 py-0.5"><span className="size-1.5 rounded-full bg-accent shadow-[0_0_0_3px_var(--accent-soft)]" /> online</span>
      </div>
    </div>
  );
}
