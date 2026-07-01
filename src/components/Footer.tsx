import Link from "next/link";
import { NAV, SITE, social, artist } from "@/lib/site";
import { Marquee } from "@/components/Marquee";

export function Footer() {
  return (
    <footer className="relative border-t border-ink-line bg-ink-soft">
      <Marquee items={artist.supporters} className="border-b border-ink-line py-5 text-bone-faint" />

      <div className="container-site grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="display text-3xl tracking-tightest text-bone">
            Alexander<span className="text-acid">.</span>Technique
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone-muted">
            {artist.tagline} New York City. Booking worldwide.
          </p>
          <a href={`mailto:${SITE.bookingEmail}`} className="link-underline mt-5 inline-block font-mono text-sm text-acid">
            {SITE.bookingEmail}
          </a>
        </div>

        <div>
          <div className="label-mono mb-4 text-bone-faint">Explore</div>
          <ul className="space-y-2.5">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-sm text-bone-muted transition-colors hover:text-acid">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="label-mono mb-4 text-bone-faint">Follow / Listen</div>
          <ul className="grid grid-cols-2 gap-2.5">
            {social.profiles.map((p) => (
              <li key={p.platform}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-bone-muted transition-colors hover:text-acid"
                >
                  {p.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-site flex flex-col gap-2 border-t border-ink-line py-6 text-xs text-bone-faint sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Alexander Technique. All rights reserved.</span>
        <span className="font-mono">{SITE.domain}</span>
      </div>
    </footer>
  );
}
