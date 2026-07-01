interface Props {
  eyebrow?: string;
  title: string;
  sub?: string;
}

export function PageHeader({ eyebrow, title, sub }: Props) {
  return (
    <header className="relative overflow-hidden border-b border-ink-line">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(100%_120%_at_80%_0%,#151824_0%,#08090c_60%)]" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-acid/10 blur-[100px]" />
        <div className="scanlines absolute inset-0 opacity-50" />
      </div>
      <div className="container-site pb-14 pt-32">
        {eyebrow && (
          <div className="label-mono mb-4 flex items-center gap-3 text-acid">
            <span className="h-px w-8 bg-acid" />
            {eyebrow}
          </div>
        )}
        <h1 className="display text-6xl tracking-tightest text-bone sm:text-7xl md:text-8xl">{title}</h1>
        {sub && <p className="mt-5 max-w-2xl text-base text-bone-muted sm:text-lg">{sub}</p>}
      </div>
    </header>
  );
}
