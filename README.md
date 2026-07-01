# Alexander Technique — Official Artist Website

A premium, production-ready website for **Alexander Technique** — NYC techno DJ, producer &
label owner. Built to out-perform the official sites of far bigger artists: proof-first design,
real music/video embeds, a live tour feed, a full EPK, and clean SEO/structured data.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v3 · React 19.

## 👀 See it live (1 click)

This is a full Next.js app, so it needs a host that runs it (not GitHub Pages). The fastest way
to get a shareable link is Vercel's free tier:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jorgeramirez76/dj-alexander-technique)

Click the button → sign in with GitHub → **Deploy**. In ~60 seconds you get a public
`https://…vercel.app` link you can send to anyone.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000  (this project is wired to :3210 in Claude preview)
```

```bash
npm run build      # production build
npm start          # serve the production build
npm run lint       # eslint
```

Node 18.18+ (or 20+) recommended.

---

## Project structure

```
data/                 # ← all site content (CMS-ready JSON, single source of truth)
  artist.json           bio, timeline, labels, supporters, genres
  discography.json      releases + buy/stream links
  videos.json           YouTube live sets / "played out by" / productions
  performances.json     past shows + Bandsintown config (upcoming is live)
  gallery.json          gallery placeholders
  press.json            EPK highlights, press-image + press-kit slots
  social-links.json     socials + booking email
research/             # ← sourced research & documentation (see below)
src/
  app/                  routes: / about music videos shows gallery press contact
    api/                booking + subscribe route handlers (stubs, wired to console)
    og/                 dynamic Open Graph image
    sitemap.ts robots.ts
  components/           Nav, Footer, embeds, forms, cards, Reveal, etc.
  lib/                  site config, types, cover-art generator
```

### Editing content
Everything a non-developer needs to change lives in **`/data/*.json`**. No component edits
required to add a release, video, show, or social link.

---

## Media & licensing (important)

This site **rehosts no copyrighted media**. All music/video plays through official embeds that
stream from the rights-holders' own platforms:

- **YouTube** — click-to-load `youtube-nocookie` iframes (thumbnails from YouTube's CDN).
- **SoundCloud** — official widget, click-to-load.
- **Bandsintown** — official tour widget (live upcoming dates).

Photos, flyers and cover art are shown as **clearly-marked, on-brand placeholders** until the
owner supplies licensed assets (see the checklist below). Release "cover art" is a deterministic,
license-free generated gradient.

---

## Configuration / going live

| What | Where | Notes |
|------|-------|-------|
| Booking email | `data/social-links.json` → `bookingEmail` | currently `bookings@djalexandertechnique.com` |
| Social links | `data/social-links.json` | all official profiles pre-filled |
| Upcoming shows | Bandsintown | set `NEXT_PUBLIC_BANDSINTOWN_ARTIST` (name or `id_1208679`) or add to `performances.json → upcoming` |
| Booking form delivery | `src/app/api/booking/route.ts` | wire to email (Resend/SendGrid) or a CRM |
| Newsletter | `src/app/api/subscribe/route.ts` | wire to your ESP (Mailchimp/Beehiiv/ConvertKit) |
| Canonical domain | `src/lib/site.ts` → `SITE.url` | used for metadata, OG, sitemap |
| Press kit / photos | `data/press.json`, `data/gallery.json`, `/public` | drop files + set paths |

### Environment variables (optional)
```
NEXT_PUBLIC_BANDSINTOWN_ARTIST=id_1208679   # or "DJ Alexander Technique"
```

---

## Deploy to Vercel

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected). Build command `next build`, output auto.
4. Add any env vars from above (optional).
5. **Deploy.** Then add the custom domain `djalexandertechnique.com` in Vercel → Domains.

Or via CLI:

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production
```

---

## SEO / structured data
- Per-page `<title>`/description, Open Graph + Twitter cards, dynamic OG image at `/og`.
- `sitemap.xml` and `robots.txt` generated at build.
- Schema.org JSON-LD: `MusicGroup`/`Person` (site-wide) and `MusicRecording`/`MusicAlbum` (Music).

---

## Research & sources
Full, cited research lives in [`/research`](./research):
`sources.md`, `bio.md`, `discography.md`, `videos.md`, `performances.md`, `visual-assets.md`,
`competitor-analysis.md`. Every fact traces to a public source; uncertain items are flagged
**`Needs verification`**.

See **[`VERIFICATION-CHECKLIST.md`](./VERIFICATION-CHECKLIST.md)** for the exact list of items the
artist/manager should confirm before launch.
