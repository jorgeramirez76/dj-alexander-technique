import Link from "next/link";
import { Reveal } from "@/components/Reveal";

interface Props {
  eyebrow?: string;
  title: string;
  sub?: string;
  cta?: { href: string; label: string };
  className?: string;
}

export function SectionHeading({ eyebrow, title, sub, cta, className = "" }: Props) {
  return (
    <div className={`flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between ${className}`}>
      <Reveal className="max-w-2xl">
        {eyebrow && (
          <div className="label-mono mb-3 flex items-center gap-3 text-acid">
            <span className="h-px w-8 bg-acid" />
            {eyebrow}
          </div>
        )}
        <h2 className="display text-4xl text-bone sm:text-5xl md:text-6xl">{title}</h2>
        {sub && <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone-muted sm:text-base">{sub}</p>}
      </Reveal>
      {cta && (
        <Link href={cta.href} className="btn-ghost shrink-0 self-start sm:self-auto">
          {cta.label}
          <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  );
}
