interface MarqueeProps {
  items: readonly string[];
  className?: string;
  fast?: boolean;
  separator?: string;
}

export function Marquee({ items, className = "", fast = false, separator = "✦" }: MarqueeProps) {
  const row = (
    <div className={`marquee-track ${fast ? "animate-marquee-fast" : "animate-marquee"}`}>
      {[...items, ...items].map((item, i) => (
        <span key={i} className="label-mono mx-6 inline-flex items-center gap-6">
          {item}
          <span className="text-acid/60" aria-hidden>
            {separator}
          </span>
        </span>
      ))}
    </div>
  );
  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden>
      {row}
    </div>
  );
}
