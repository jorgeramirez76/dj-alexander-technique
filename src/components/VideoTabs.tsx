"use client";

import { useState } from "react";
import type { VideoCategory } from "@/lib/types";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

export function VideoTabs({ categories }: { categories: VideoCategory[] }) {
  const [active, setActive] = useState(categories[0]?.key);
  const cat = categories.find((c) => c.key === active) ?? categories[0];

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((c) => {
          const on = c.key === active;
          return (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                on ? "border-acid bg-acid text-ink" : "border-ink-line text-bone-muted hover:border-acid/50 hover:text-bone"
              }`}
            >
              {c.label} <span className={on ? "text-ink/60" : "text-bone-faint"}>({c.items.length})</span>
            </button>
          );
        })}
      </div>

      <p className="mb-8 max-w-2xl text-sm text-bone-muted">{cat.blurb}</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cat.items.map((v) => (
          <figure key={v.id} className="flex flex-col gap-3">
            <YouTubeEmbed id={v.id} title={v.title} />
            <figcaption>
              {v.dj ? (
                <>
                  <div className="text-sm font-semibold text-bone">{v.dj}</div>
                  <div className="text-xs text-bone-muted">{v.title.replace(`${v.dj} `, "")}</div>
                  {v.track && <div className="mt-1 font-mono text-[11px] text-acid">{v.track}</div>}
                </>
              ) : (
                <div className="text-sm text-bone-muted">{v.title}</div>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
