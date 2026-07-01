import type { ElementType, ReactNode } from "react";

interface Props {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}

/**
 * Entrance flourish that NEVER gates visibility on scroll.
 * Uses a one-shot load animation (plays on mount) instead of an
 * IntersectionObserver, so content is always rendered and visible —
 * safe for headless previews and no-JS.
 */
export function Reveal({ children, as, delay = 0, className = "" }: Props) {
  const Tag = as || "div";
  return (
    <Tag
      className={`animate-fade-up ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
