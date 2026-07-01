"use client";

import { useState } from "react";

interface Props {
  id: string;
  title: string;
  className?: string;
}

/**
 * Privacy-friendly, click-to-load YouTube facade.
 * Shows the official thumbnail (from the rights-holder's CDN) and only injects
 * the youtube-nocookie iframe on click — keeps LCP fast and rehosts nothing.
 */
export function YouTubeEmbed({ id, title, className = "" }: Props) {
  const [active, setActive] = useState(false);

  return (
    <div className={`group relative aspect-video w-full overflow-hidden rounded-lg border border-ink-line bg-black ${className}`}>
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="absolute inset-0 h-full w-full"
          aria-label={`Play: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt={title}
            loading="lazy"
            className="h-full w-full scale-105 object-cover opacity-70 transition-all duration-500 group-hover:scale-100 group-hover:opacity-90"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-acid text-ink shadow-lg transition-transform duration-300 group-hover:scale-110">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
