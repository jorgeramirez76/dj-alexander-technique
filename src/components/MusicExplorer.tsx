"use client";

import { useMemo, useState } from "react";
import type { Release } from "@/lib/types";
import { ReleaseCard } from "@/components/ReleaseCard";

const FILTERS: { key: string; label: string; match: (r: Release) => boolean }[] = [
  { key: "all", label: "All", match: () => true },
  { key: "singles", label: "Singles / EPs", match: (r) => r.type === "single" || r.type === "ep" || r.type === "album" },
  { key: "remixes", label: "Remixes", match: (r) => r.type === "remix" || r.type === "rework" },
  { key: "collabs", label: "Collaborations", match: (r) => r.type === "collab" },
];

export function MusicExplorer({ releases }: { releases: Release[] }) {
  const [active, setActive] = useState("all");
  const filter = FILTERS.find((f) => f.key === active)!;
  const shown = useMemo(() => releases.filter(filter.match), [releases, filter]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const count = releases.filter(f.match).length;
          const on = f.key === active;
          return (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                on ? "border-acid bg-acid text-ink" : "border-ink-line text-bone-muted hover:border-acid/50 hover:text-bone"
              }`}
            >
              {f.label} <span className={on ? "text-ink/60" : "text-bone-faint"}>({count})</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {shown.map((r) => (
          <ReleaseCard key={r.id} release={r} />
        ))}
      </div>
      {shown.length === 0 && <p className="py-12 text-center text-bone-faint">No releases in this category yet.</p>}
    </div>
  );
}
