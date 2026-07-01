# Visual assets — DJ Alexander Technique

## Rule
No third-party copyrighted press photos are used. The site uses (a) the **artist's own official
imagery** pulled from his own channels, and (b) **AI-generated, non-likeness brand atmosphere**.
No fake face of the artist is ever generated — his real likeness comes only from his own official
photos. Remaining human-photo needs are clearly-marked placeholders for the owner to fill.

## Integrated assets (in `/public/media`)
**Real — the artist's own official imagery:**
| File | Source | Used on |
|------|--------|---------|
| `portrait.webp` (1600²) | Official YouTube channel avatar (B&W press portrait) | Home hero, About band, Press, Gallery |
| `live-nyc.webp` (1280×720) | His own YouTube live-stream still | Gallery, Press |
| `you-are-here.webp` (1152²) | Official release art: *Roland Clark & Alexander Technique — You Are Here (Josh Wink Remixes)*, MOOD M088 | Music (real cover), Gallery, Press |
| `live-razzmatazz / techbunker1 / techbunker2 / tnl / myspacevapes .webp` | His own set-video thumbnails (YouTube CDN) | Gallery |

**Generated — AI brand atmosphere (Higgsfield `nano_banana`, no faces, no likeness):**
| File | Prompt gist | Used on |
|------|-------------|---------|
| `atmo-crowd.webp` (16:9) | B&W warehouse rave, crowd silhouettes, haze, acid-green laser | Home "Played Out By" background, Gallery |
| `atmo-mixer.webp` (1:1) | Pioneer CDJ/mixer close-up, gloved hands, red glow | Gallery |
| `atmo-texture.webp` (16:9) | Acid laser + smoke on black, glitch texture | spare / section art |

> **Licensing note for owner:** the "real" images are the artist's own promotional assets, used
> here on his own official site. Confirm you hold/are cleared for print + web use before any
> off-site or paid distribution. Generated images are original and license-free.

## Rule (legacy note)
Where a human photo is still needed, the site ships a clearly-marked placeholder.

## What exists publicly (for reference only — link out, don't rehost)
| Asset | Where it lives | Use on site |
|-------|----------------|-------------|
| Artist press photos | Official site / Instagram (#1, #19) | Hero + About + Gallery → **placeholder**, owner to supply |
| Release cover art | Beatport / Discogs release pages (#7, #8) | Music cards → **generated gradient placeholder** + link to release page |
| Event flyers | RA / promoter pages (#5) | Shows → **placeholder** |
| Live performance photos | Instagram / YouTube thumbnails (#4, #19) | Gallery → **placeholder** |
| YouTube thumbnails | youtube.com (i.ytimg.com) | Allowed to display via the official embed only |

## Brand / art-direction reference (derived from the music, not copied from anyone)
- **Palette:** near-black base (`#08090c`), off-white (`#f4f4f0`), one acid accent. Chosen accent:
  **acid lime `#c8ff00`** (peak-time, warehouse, "Data Distortion" energy) with a magenta
  secondary for gradients. High contrast, low chroma except the accent.
- **Type:** oversized condensed grotesque for display (e.g. "Anton"/"Archivo"), clean neutral
  sans for body (Inter). Monospace for metadata/labels (catalog #s, BPM) — nods to techno record
  culture.
- **Texture:** film grain + subtle scanline/noise overlay; strobe/flicker used sparingly.
- **Motion:** marquee ticker, slow parallax, cursor-reactive glow, hover scrub on video/music
  cards. Tasteful — never blocks content or gates visibility behind animation.
- **Logo:** wordmark set in the display face ("ALEXANDER TECHNIQUE" / "AT" monogram). No official
  logo file rehosted; the CSS wordmark is original.

## Placeholder inventory (each is labelled in-UI as a placeholder)
1. Hero portrait (portrait, ~1200×1600) — `public/placeholders/hero.svg`
2. About portrait (~1000×1200) — generated
3. Gallery grid ×9 — generated tiles marked "Photo — owner to supply"
4. Release cover fallback — deterministic gradient per release title
5. EPK press-photo slots ×3 — generated, marked
6. Open Graph / social share image — generated wordmark card
