import Link from "next/link";
import { artist, social } from "@/lib/site";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SoundcloudEmbed } from "@/components/SoundcloudEmbed";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { NewsletterForm } from "@/components/NewsletterForm";
import { StatCounters } from "@/components/StatCounters";
import videos from "@data/videos.json";
import performances from "@data/performances.json";
import discography from "@data/discography.json";

const featuredVideo = videos.categories.find((c) => c.key === "live-sets")!.items[0];
const latest = discography.releases.find((r) => r.id === "you-are-here")!;
const proofDjs = ["Carl Cox", "Adam Beyer", "Kevin Saunderson", "The Blessed Madonna", "Loco Dice", "Maceo Plex", "Chris Liebing", "Marco Carola"];

export default function HomePage() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        {/* gradient field + portrait */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_70%_10%,#151824_0%,#08090c_55%)]" />
          {/* Real B&W portrait, graded + masked so the headline stays readable */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[64%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/portrait.webp"
              alt="Alexander Technique"
              className="h-full w-full object-cover object-[center_18%] opacity-40 contrast-125 grayscale lg:opacity-90"
              style={{
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 42%, black 80%)",
                maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 42%, black 80%)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <div className="absolute inset-0 bg-acid/5 mix-blend-overlay" />
          </div>
          <div className="absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-acid/10 blur-[120px]" />
          <div className="absolute -left-24 bottom-0 h-[360px] w-[360px] rounded-full bg-magenta/10 blur-[120px]" />
          <div className="scanlines absolute inset-0 opacity-60" />
        </div>

        <div className="container-site w-full pt-24">
          <div className="label-mono mb-6 flex items-center gap-3 text-acid animate-fade-up">
            <span className="h-px w-10 bg-acid" />
            NYC Techno · DJ · Producer · Label Owner
          </div>

          <h1 className="display text-[18vw] leading-[0.82] tracking-tightest text-bone sm:text-[13vw] lg:text-[11rem]">
            Alexander
            <br />
            <span className="text-acid">Technique</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-bone-muted sm:text-lg">
            {artist.bio.short}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/music" className="btn-acid">▶ Listen</Link>
            <Link href="/videos" className="btn-ghost">Watch</Link>
            <Link href="/contact" className="btn-ghost">Book</Link>
            <Link href="#mailing" className="btn-ghost">Join Mailing List</Link>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-0 right-0">
          <Marquee items={proofDjs} fast className="text-bone-faint/70" separator="•" />
        </div>
      </section>

      {/* ---------------- PROOF ---------------- */}
      <section className="relative overflow-hidden border-y border-ink-line py-20">
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/atmo-crowd.webp" alt="" aria-hidden className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        </div>
        <div className="container-site">
          <Reveal className="max-w-3xl">
            <div className="label-mono mb-3 text-acid">Played out by</div>
            <p className="display text-3xl leading-tight text-bone sm:text-4xl md:text-5xl">
              His records get dropped by <span className="text-acid">Carl Cox</span>, Adam Beyer,
              Kevin Saunderson, The Blessed Madonna &amp; Loco Dice — on the world&apos;s biggest stages.
            </p>
            <Link href="/videos" className="btn-ghost mt-8">See the proof on video →</Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- LATEST RELEASE ---------------- */}
      <section className="container-site py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-acid/10 blur-2xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={latest.image!}
              alt={`${latest.title} — cover art`}
              className="aspect-square w-full rounded-2xl border border-ink-line object-cover shadow-2xl"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="label-mono mb-4 text-acid">Latest release</div>
            <h2 className="display text-5xl text-bone sm:text-6xl">You Are Here</h2>
            <p className="mt-2 text-lg text-bone">Josh Wink Remixes</p>
            <p className="mt-4 text-sm text-bone-muted">
              {latest.artists.join(" & ")} · {latest.label}
              {latest.catalog ? ` · ${latest.catalog}` : ""}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={discography.buyStream.soundcloud} target="_blank" rel="noopener noreferrer" className="btn-acid">▶ Listen</a>
              <a href={discography.buyStream.beatport} target="_blank" rel="noopener noreferrer" className="btn-ghost">Beatport ↗</a>
              <Link href="/music" className="btn-ghost">All music</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="border-y border-ink-line bg-ink-soft py-20">
        <div className="container-site">
          <StatCounters stats={artist.stats} />
        </div>
      </section>

      {/* ---------------- FEATURED MUSIC + VIDEO ---------------- */}
      <section className="container-site py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="label-mono mb-4 text-acid">Featured — Listen</div>
            <SoundcloudEmbed variant="visual" height={380} />
            <Link href="/music" className="btn-ghost mt-5">Full discography →</Link>
          </Reveal>
          <Reveal delay={80}>
            <div className="label-mono mb-4 text-acid">Featured — Watch</div>
            <YouTubeEmbed id={featuredVideo.id} title={featuredVideo.title} />
            <p className="mt-3 text-sm text-bone-muted">{featuredVideo.title}</p>
            <Link href="/videos" className="btn-ghost mt-5">All videos & sets →</Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SHOWS PREVIEW ---------------- */}
      <section className="border-t border-ink-line bg-ink-soft py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="On the road"
            title="Shows"
            sub={`Frequently performs in ${performances.bookingRegions.join(", ")}. Live dates are pulled straight from Bandsintown.`}
            cta={{ href: "/shows", label: "All shows" }}
          />
          <Reveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {performances.past.slice(0, 3).map((s, i) => (
              <div key={i} className="card p-5">
                <div className="font-mono text-xs text-acid">{s.date}{s.year ? `, ${s.year}` : ""}</div>
                <div className="mt-2 font-semibold text-bone">{s.event}</div>
                <div className="text-sm text-bone-muted">{s.venue} — {s.city}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------- MAILING LIST ---------------- */}
      <section id="mailing" className="relative overflow-hidden py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid/5 blur-[120px]" />
        </div>
        <div className="container-site text-center">
          <Reveal>
            <div className="label-mono mb-4 text-acid">Stay locked in</div>
            <h2 className="display mx-auto max-w-3xl text-4xl text-bone sm:text-6xl">
              New drops. New dates. No spam.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm text-bone-muted">
              Join the mailing list for first access to releases, tickets and label news from Data Distortion.
            </p>
            <div className="mt-8 flex justify-center">
              <NewsletterForm />
            </div>
            <a href={`mailto:${social.bookingEmail}`} className="label-mono mt-8 inline-block text-bone-faint hover:text-acid">
              Bookings → {social.bookingEmail}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
