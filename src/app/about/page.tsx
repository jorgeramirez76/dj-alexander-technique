import type { Metadata } from "next";
import Link from "next/link";
import { artist } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description: artist.bio.medium,
};

export default function AboutPage() {
  const paragraphs = artist.bio.long.split("\n\n");
  return (
    <>
      <PageHeader eyebrow="Biography" title="About" sub={artist.tagline} />

      <section className="container-site py-12">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-ink-line sm:aspect-[21/9]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={artist.media.portrait}
            alt="Alexander Technique"
            className="h-full w-full object-cover object-[center_22%] grayscale contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <div className="scanlines absolute inset-0 opacity-40" />
          <span className="label-mono absolute bottom-4 left-5 text-bone-muted">Alexander Technique — New York City</span>
        </div>
      </section>

      <section className="container-site grid gap-12 pb-20 lg:grid-cols-[1.5fr_1fr]">
        {/* Bio */}
        <Reveal className="space-y-5 text-base leading-relaxed text-bone-muted">
          {paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "text-lg text-bone" : ""}>
              {p}
            </p>
          ))}
          <p className="text-xs text-bone-faint">Long bio verbatim from the artist&apos;s official SoundCloud profile.</p>
        </Reveal>

        {/* Fact sheet */}
        <Reveal delay={80}>
          <div className="card sticky top-24 p-6">
            <div className="label-mono mb-4 text-acid">Fact sheet</div>
            <dl className="space-y-3 text-sm">
              <Row k="Based" v={artist.location} />
              <Row k="Roots" v={artist.originScene} />
              <Row k="Active since" v={artist.activeSince} />
              <Row k="Genres" v={artist.genres.join(" · ")} />
              <Row k="BPM" v={artist.bpmRange} />
              <Row k="Labels" v={artist.labels.map((l) => l.name).join(" · ")} />
            </dl>
            <Link href="/press" className="btn-ghost mt-6 w-full">Press / EPK →</Link>
          </div>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="border-t border-ink-line bg-ink-soft py-20">
        <div className="container-site">
          <h2 className="display mb-12 text-4xl text-bone sm:text-5xl">Career timeline</h2>
          <ol className="relative border-l border-ink-line">
            {artist.timeline.map((t, i) => (
              <Reveal as="li" key={i} delay={i * 40} className="relative mb-10 pl-8 last:mb-0">
                <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-acid" />
                <div className="font-mono text-sm text-acid">{t.year}</div>
                <p className="mt-1 max-w-2xl text-bone-muted">{t.event}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Supporters + labels */}
      <section className="container-site py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <div className="label-mono mb-5 text-acid">Supported by</div>
            <div className="flex flex-wrap gap-2">
              {artist.supporters.map((s) => (
                <span key={s} className="rounded-full border border-ink-line px-3 py-1.5 text-sm text-bone-muted">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="label-mono mb-5 text-acid">Labels &amp; imprints</div>
            <ul className="space-y-4">
              {artist.labels.map((l) => (
                <li key={l.name} className="border-b border-ink-line pb-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-semibold text-bone">{l.name}</span>
                    <span className="font-mono text-xs text-bone-faint">{l.since ?? ""}</span>
                  </div>
                  <div className="text-sm text-bone-muted">{l.role}</div>
                  {l.note && <div className="mt-1 text-xs text-bone-faint">{l.note}</div>}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-ink-line pb-3">
      <dt className="label-mono text-bone-faint">{k}</dt>
      <dd className="text-right text-bone">{v}</dd>
    </div>
  );
}
