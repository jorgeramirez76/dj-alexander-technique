import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { coverGradient } from "@/lib/art";
import { SITE, artist, social } from "@/lib/site";
import press from "@data/press.json";

export const metadata: Metadata = {
  title: "Press / EPK",
  description: "Electronic press kit for Alexander Technique — bios, highlights, press photos and booking contact.",
};

export default function PressPage() {
  return (
    <>
      <PageHeader eyebrow="Electronic Press Kit" title="Press" sub="Everything a promoter, booker or journalist needs — in one place." />

      <section className="container-site py-14">
        <div className="flex flex-wrap gap-3">
          <a
            href={press.pressKitUrl ?? undefined}
            aria-disabled={!press.pressKitUrl}
            className={`btn-acid ${press.pressKitUrl ? "" : "pointer-events-none opacity-60"}`}
          >
            {press.pressKitUrl ? "Download press kit" : "Press kit — coming soon"}
          </a>
          <a href={`mailto:${SITE.bookingEmail}`} className="btn-ghost">Booking: {SITE.bookingEmail}</a>
        </div>
        {!press.pressKitUrl && <p className="mt-3 text-xs text-bone-faint">{press.pressKitNote}</p>}
      </section>

      {/* Bios */}
      <section className="container-site grid gap-6 pb-16 lg:grid-cols-3">
        {(["short", "medium", "long"] as const).map((k, i) => (
          <Reveal key={k} delay={i * 60} className="card p-6">
            <div className="label-mono mb-3 text-acid">{k} bio</div>
            <p className={`whitespace-pre-line leading-relaxed text-bone-muted ${k === "long" ? "text-sm" : ""}`}>
              {artist.bio[k]}
            </p>
          </Reveal>
        ))}
      </section>

      {/* Highlights */}
      <section className="border-y border-ink-line bg-ink-soft py-16">
        <div className="container-site">
          <h2 className="display mb-8 text-3xl text-bone sm:text-4xl">Career highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {press.highlights.map((h, i) => (
              <Reveal key={i} delay={i * 40} className="card p-5">
                <div className="label-mono mb-2 text-bone-faint">{h.label}</div>
                <div className="text-bone">{h.value}</div>
              </Reveal>
            ))}
          </div>
          {press.quotes.length === 0 && (
            <p className="mt-6 text-xs text-bone-faint">{press.quotesNote}</p>
          )}
        </div>
      </section>

      {/* Press images */}
      <section className="container-site py-16">
        <h2 className="display mb-8 text-3xl text-bone sm:text-4xl">Press images</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {press.pressImages.map((p, i) => {
            const grad = coverGradient(p.id + p.label);
            return (
              <Reveal key={p.id} delay={i * 40} className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-ink-line" >
                {p.src ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.src} alt={p.label} loading="lazy" className="h-full w-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <div className="text-sm text-bone">{p.label}</div>
                      <div className="text-[10px] uppercase tracking-widest text-bone/50">{p.credit}</div>
                    </div>
                  </>
                ) : (
                  <div className="relative h-full w-full" style={{ background: grad.background }}>
                    <div className="scanlines absolute inset-0 opacity-40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
                      <span className="text-sm text-bone/90">{p.label}</span>
                      <span className="text-[10px] uppercase tracking-widest text-bone/40">{p.credit}</span>
                    </div>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-bone-faint">Hi-res, cleared press photos to be supplied by the artist / management.</p>
      </section>

      {/* Contact + socials */}
      <section className="border-t border-ink-line bg-ink-soft py-16">
        <div className="container-site grid gap-10 md:grid-cols-2">
          <div>
            <div className="label-mono mb-4 text-acid">Booking &amp; press contact</div>
            <a href={`mailto:${SITE.bookingEmail}`} className="display text-3xl text-bone hover:text-acid sm:text-4xl">
              {SITE.bookingEmail}
            </a>
            <div className="mt-6">
              <Link href="/contact" className="btn-acid">Booking form →</Link>
            </div>
          </div>
          <div>
            <div className="label-mono mb-4 text-acid">Official channels</div>
            <ul className="grid grid-cols-2 gap-2">
              {social.profiles.map((p) => (
                <li key={p.platform}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-sm text-bone-muted hover:text-acid">
                    {p.platform} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
