"use client";

import { useEffect, useState } from "react";

/**
 * Subtle acid glow that trails the cursor on pointer devices.
 * Disabled for touch / reduced-motion. Purely decorative — never blocks content.
 */
export function CursorGlow() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setPos({ x: e.clientX, y: e.clientY }));
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!pos) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[55] hidden h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full lg:block"
      style={{
        left: pos.x,
        top: pos.y,
        background: "radial-gradient(circle, rgba(200,255,0,0.06) 0%, transparent 60%)",
        transition: "left .25s cubic-bezier(.16,1,.3,1), top .25s cubic-bezier(.16,1,.3,1)",
      }}
    />
  );
}
