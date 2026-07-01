"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

function useCountUp(target: number, start: boolean, duration = 1300) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    let raf = 0;
    let t0 = 0;
    const tick = (t: number) => {
      if (!t0) t0 = t;
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return n;
}

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const n = useCountUp(stat.value, start);
  return (
    <div className="text-center sm:text-left">
      <div className="display text-6xl leading-none text-bone sm:text-7xl">
        <span className="text-acid">{stat.prefix}</span>
        {n}
        <span className="text-acid">{stat.suffix}</span>
      </div>
      <div className="mt-3 text-sm text-bone-muted">{stat.label}</div>
    </div>
  );
}

export function StatCounters({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  // Start when in view; failsafe fires regardless so counts never stay at 0.
  useEffect(() => {
    const failsafe = window.setTimeout(() => setStart(true), 900);
    const el = ref.current;
    if (el && typeof IntersectionObserver !== "undefined") {
      const io = new IntersectionObserver(
        (e) => e.some((x) => x.isIntersecting) && (setStart(true), io.disconnect()),
        { threshold: 0.3 }
      );
      io.observe(el);
      return () => { io.disconnect(); window.clearTimeout(failsafe); };
    }
    return () => window.clearTimeout(failsafe);
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      {stats.map((s, i) => (
        <StatItem key={i} stat={s} start={start} />
      ))}
    </div>
  );
}
