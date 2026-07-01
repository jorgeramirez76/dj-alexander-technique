# Competitor / benchmark analysis — top DJ & producer websites

Analysis of how leading artists structure their official sites, and what an underground techno
artist (Alexander Technique) should copy, avoid, and beat. This is design/strategy analysis based
on common patterns of these artists' official presences — not claims about Alexander Technique.

## Snapshot of benchmarks
| Artist | Lane | Signature web move | Weakness we beat |
|--------|------|--------------------|------------------|
| **Carl Cox** | Techno icon | Tour dates front-and-center; strong "Awesome!" brand voice | Can feel dated/blog-heavy |
| **Charlotte de Witte (KNTXT)** | Techno | Stark black/white, brutalist type, label-as-brand | Sparse discography depth |
| **Adam Beyer / Drumcode** | Techno | Label ecosystem, radio show as content engine | Artist site secondary to label |
| **Peggy Gou** | House/crossover | Fashion-grade art direction, lifestyle + music | Music discovery buried under aesthetic |
| **Black Coffee** | House | Cinematic hero, storytelling, awards | Heavy; slow on mobile |
| **Fred again..** | Electronic | Raw, personal, low-fi authenticity; IG-native | Minimal "official site" — relies on socials |
| **Fisher** | Tech house | Fun, meme-y brand; merch-forward | Thin editorial/press depth |
| **John Summit** | Tech house | Tour + merch conversion machine | Generic template feel |
| **Solomun / Diynamic** | Melodic house/techno | Elegant, restrained, event-led | Discography UX clunky |
| **Tiësto / Guetta / Garrix / Armin / SHM** | EDM mainstage | Big video hero, newsletter capture, slick tour modules | Over-produced; not "underground" |
| **Skrillex / Diplo** | Bass/crossover | Bold, chaotic, drop-culture design | Not relevant to techno positioning |
| **Anyma** | Melodic techno/AV | Immersive audio-visual, 3D | Overkill for a DJ/producer of this scale |

## Section-by-section teardown & our decision
**Homepage structure** — Winners open with one cinematic statement + immediate proof (a play
button or a tour date), not a menu wall.
→ *Us:* full-bleet kinetic hero (name + positioning line), instant "Listen / Watch / Book" CTAs,
then an autoplay-muted look and a **"Played out by Carl Cox, Adam Beyer, Kevin Saunderson…"**
proof strip that none of these mid-tier sites have as strongly as we can.

**Visual design** — Techno's best (KNTXT, Drumcode) win with restraint: black, one accent, huge
type, grain. EDM sites over-gloss.
→ *Us:* near-black + acid-lime, oversized condensed display, film grain, monospace metadata. Beat
them on *cohesion* and load speed.

**Music player** — Most bury music behind links. Best-in-class embed a persistent player.
→ *Us:* SoundCloud embed on Home + a filterable Music page (singles/EPs/remixes/collabs) where
every card links to Beatport/Traxsource/Discogs/SoundCloud. Beat them with **filters + "buy"
routing**, not a dead SoundCloud wall.

**Tour/events** — The conversion workhorse. Winners use a live feed (Bandsintown/Songkick) with
ticket + RA links, and a booking CTA.
→ *Us:* live Bandsintown widget (never stale) + past-shows archive + a prominent "Book Alexander
Technique → bookings@" CTA. Many underground artists forget the booking CTA entirely — we won't.

**Video/live** — Usually a single embedded reel.
→ *Us:* a real Videos page with tabs (Live Sets / Played Out By / Productions) driven by 20+ real
clips. The **"Played Out By"** wall is our unfair advantage — verifiable A-list support on video.

**Merch** — Fisher/Summit convert hard; techno artists under-index.
→ *Us:* merch is out-of-scope for v1 (no verified store), so we ship a tasteful "Merch — coming
soon / notify me" capture instead of a fake store. No fabricated products.

**Newsletter / fan capture** — Best sites capture email above the fold and at exit.
→ *Us:* mailing-list capture in hero secondary CTA, footer, and contact page. (Wire to the
owner's ESP; ships as a working form with a clearly-marked TODO endpoint.)

**Press / EPK** — Bookers need a one-click kit. Most artist sites hide it.
→ *Us:* dedicated `/press` EPK: short/medium/long bio, selected discography, selected shows,
supporter list, socials, booking contact, and a "Download press kit" slot (placeholder until the
owner supplies the PDF/photos).

**SEO / structured data** — EDM majors do this well; underground artists usually don't.
→ *Us:* full metadata, Open Graph, sitemap, robots, and Schema.org `MusicGroup`/`Person`,
`MusicRecording`, `MusicAlbum`, `Event`, `BreadcrumbList`. This is where we can genuinely
out-rank peers of similar size.

**Mobile / speed** — Cinematic majors are heavy and slow. Underground sites are often unstyled.
→ *Us:* mobile-first, "music-app feel" (bottom-anchored actions, large tap targets), Next.js
image optimization, system-font fallback, lazy embeds (click-to-load YouTube) → fast LCP.

## Net: what "better" means for this site
1. **Proof-first**: lead with verifiable A-list support (video wall) — nobody at this tier does it.
2. **Cohesive art direction** rivaling KNTXT/Drumcode, but faster.
3. **Actually converts**: booking CTA + live tour feed + email capture on every key page.
4. **Legit discovery**: filterable discography that *routes to buy/stream*, not a dead embed.
5. **Bookable**: a real EPK, which most underground artists simply don't have.
