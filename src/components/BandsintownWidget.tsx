"use client";

import { useEffect, useRef } from "react";

/**
 * Official Bandsintown "Play My City" widget. Renders the artist's live tour
 * feed straight from Bandsintown so upcoming dates are always accurate and
 * owner-controlled — no dates are hardcoded.
 *
 * NOTE for the site owner: the widget needs the exact Bandsintown artist name
 * (or "id_<artist_id>"). Set NEXT_PUBLIC_BANDSINTOWN_ARTIST or edit `artist`.
 */
export function BandsintownWidget({ artist = "DJ Alexander Technique" }: { artist?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const name = process.env.NEXT_PUBLIC_BANDSINTOWN_ARTIST || artist;

  useEffect(() => {
    if (!ref.current) return;
    // Avoid duplicate script injection
    if (!document.querySelector('script[src*="widgetv3/app"]')) {
      const s = document.createElement("script");
      s.src = "https://widgetv3.bandsintown.com/main.min.js";
      s.async = true;
      s.charset = "utf-8";
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div ref={ref}>
      <a
        className="bit-widget-initializer"
        data-artist-name={name}
        data-background-color="rgba(8,9,12,0)"
        data-separator-color="#22252e"
        data-text-color="#f4f4f0"
        data-link-color="#c8ff00"
        data-display-local-dates="false"
        data-display-past-dates="false"
        data-auto-style="false"
        data-display-limit="15"
        data-link-text-color="#08090c"
        data-display-lineup="false"
        data-display-play-my-city="false"
        data-font="inherit"
      />
    </div>
  );
}
