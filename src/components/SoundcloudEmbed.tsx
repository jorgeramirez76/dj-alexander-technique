"use client";

import { useState } from "react";

interface Props {
  /** SoundCloud URL to embed (profile or track). */
  url?: string;
  title?: string;
  /** visual = large artwork player; classic = compact list player */
  variant?: "visual" | "classic";
  height?: number;
}

/**
 * Click-to-load SoundCloud player. Streams from SoundCloud's official widget —
 * nothing is downloaded or rehosted.
 */
export function SoundcloudEmbed({
  url = "https://soundcloud.com/djalexandertechnique",
  title = "Alexander Technique on SoundCloud",
  variant = "visual",
  height = 400,
}: Props) {
  const [active, setActive] = useState(false);
  const visual = variant === "visual";
  const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    url
  )}&color=%23c8ff00&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=${visual}`;

  if (active) {
    return (
      <iframe
        title={title}
        width="100%"
        height={height}
        allow="autoplay"
        loading="lazy"
        className="rounded-xl border border-ink-line"
        src={src}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      style={{ height }}
      className="group flex w-full flex-col items-center justify-center gap-4 rounded-xl border border-ink-line bg-gradient-to-br from-ink-raised to-ink-soft text-center transition-colors hover:border-acid/50"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-acid text-ink transition-transform duration-300 group-hover:scale-110">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      <span className="label-mono text-bone-muted">Load SoundCloud player</span>
      <span className="max-w-xs text-xs text-bone-faint">{title}</span>
    </button>
  );
}
