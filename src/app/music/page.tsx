import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { MusicExplorer } from "@/components/MusicExplorer";
import { SoundcloudEmbed } from "@/components/SoundcloudEmbed";
import { Reveal } from "@/components/Reveal";
import type { Release } from "@/lib/types";
import { SITE, artist } from "@/lib/site";
import discography from "@data/discography.json";

export const metadata: Metadata = {
  title: "Music",
  description: "Discography of Alexander Technique — singles, EPs, remixes and collaborations on Terminator Records, Data Distortion and more. Stream and buy on Beatport, Traxsource and SoundCloud.",
};

const releases = discography.releases as unknown as Release[];

const buy = discography.buyStream as Record<string, string>;
const buyLabels: Record<string, string> = { beatport: "Beatport", traxsource: "Traxsource", discogs: "Discogs", soundcloud: "SoundCloud" };

function MusicJsonLd() {
  const data = releases.map((r) => ({
    "@context": "https://schema.org",
    "@type": r.type === "album" || r.type === "ep" ? "MusicAlbum" : "MusicRecording",
    name: r.title,
    byArtist: { "@type": "MusicGroup", name: artist.name },
    ...(r.year ? { datePublished: String(r.year) } : {}),
    ...(r.label ? { recordLabel: r.label } : {}),
    genre: "Techno",
    url: SITE.url + "/music",
  }));
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function MusicPage() {
  return (
    <>
      <MusicJsonLd />
      <PageHeader
        eyebrow="Discography"
        title="Music"
        sub="Raw, groove-driven techno. Filter the catalog, then stream or buy from the source."
      />

      <section className="container-site py-14">
        {/* Buy / stream bar */}
        <Reveal className="mb-12 flex flex-wrap items-center gap-3">
          <span className="label-mono text-bone-faint">Stream / Buy:</span>
          {Object.entries(buy).map(([k, v]) => (
            <a key={k} href={v} target="_blank" rel="noopener noreferrer" className="btn-ghost px-4 py-2 text-xs">
              {buyLabels[k] ?? k} ↗
            </a>
          ))}
        </Reveal>

        <MusicExplorer releases={releases} />

        <p className="mt-8 text-xs text-bone-faint">
          Cover art shown is a generated placeholder where release artwork licensing is unclear. Catalog numbers and
          dates marked for verification are flagged in the project&apos;s research files.
        </p>
      </section>

      {/* Full SoundCloud */}
      <section className="border-t border-ink-line bg-ink-soft py-16">
        <div className="container-site">
          <div className="label-mono mb-6 text-acid">On SoundCloud</div>
          <SoundcloudEmbed variant="classic" height={450} />
        </div>
      </section>
    </>
  );
}
