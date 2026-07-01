# Owner / manager verification checklist

Everything on the site is sourced from public info (see `/research/sources.md`). Before launch,
the artist or management should confirm the items below. Items marked in the data files with
`"needsVerification": true` or a `note` reference these.

## 🔴 Must confirm (accuracy)
- [ ] **Heritage** — bio references "Cuban-American" (from press/RA). Confirm or remove.
      → `data/artist.json → heritage`
- [ ] **Birth date** — Discogs lists **13 Nov 1975**. Confirm or omit (it's not shown on the site UI by default).
- [ ] **Terminator Records founding year** — currently blank. → `data/artist.json → labels`
- [ ] **Past show years** — RA listed the dates (May 23–26 Detroit; Feb 7 NYC) without years.
      Add correct years. → `data/performances.json → past[].year`
- [ ] **Discography details** — confirm labels, catalog numbers and release years flagged with a
      `note` in `data/discography.json` (e.g. Get Lost TR099, Stand Up on Brobot, etc.).
- [ ] **Remix/original attributions** — confirm the original artists/titles on remix entries
      (e.g. "Da Bango", "Yes It's Good", "All I'm Askin").

## 🟡 Images — confirm licensing / supply better assets
The site already ships **real official imagery** (see `research/visual-assets.md`): the B&W
portrait, a live still, "You Are Here" release art, and several set stills — all pulled from the
artist's own official channels — plus AI-generated, non-likeness atmosphere shots.
- [ ] **Confirm rights** to the artist's own photos for web/print use on this site (they are his
      own promo assets; just sign off). Files: `/public/media/*.webp`.
- [ ] **Optional: supply higher-res press photos** to replace/augment. → `data/gallery.json`,
      `data/press.json`; drop files in `/public/media`.
- [ ] **Confirm "You Are Here" details** — exact label name (shown as MOOD Records / M088) & year.
- [ ] **Logo / wordmark** — vector file if you want to replace the CSS wordmark.
- [ ] **Press kit** — upload a PDF/zip and set `data/press.json → pressKitUrl`.

## 🟢 Connect services (make forms/feeds live)
- [ ] **Bandsintown** — verify the widget resolves to the right artist; set
      `NEXT_PUBLIC_BANDSINTOWN_ARTIST` to `id_1208679` or the exact artist name.
- [ ] **Booking form** — wire `src/app/api/booking/route.ts` to email or a CRM so inquiries are delivered.
- [ ] **Newsletter** — wire `src/app/api/subscribe/route.ts` to your email provider.
- [ ] **Domain** — point `djalexandertechnique.com` at the Vercel deployment; update `SITE.url` if different.
- [ ] **Analytics** — add GA4 / Vercel Analytics if desired.

## 🔵 Optional enhancements
- [ ] Add verified **press pull-quotes** to `data/press.json → quotes` (none were found in research).
- [ ] Add **interview/podcast** videos to a new tab in `data/videos.json`.
- [ ] Add **merch** once a store exists (intentionally omitted — no fabricated products).
- [ ] Confirm the **official website host** (djalexandertechnique.com was unreachable during
      research — the DNS `216.139.213.144` timed out; verify hosting is up).

## What is already verified ✅
- Official socials, YouTube channel & 30 real videos, SoundCloud bio (verbatim), booking email,
  supporter list (video-corroborated), Beatport/Discogs/Traxsource/RA presence, past-show events.
