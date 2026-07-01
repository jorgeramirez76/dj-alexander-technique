import type { Release } from "@/lib/types";
import { coverGradient, initials } from "@/lib/art";

const typeLabel: Record<Release["type"], string> = {
  single: "Single",
  ep: "EP",
  album: "Album",
  remix: "Remix",
  collab: "Collab",
  rework: "Rework",
};

const platformLabel: Record<string, string> = {
  beatport: "Beatport",
  traxsource: "Traxsource",
  discogs: "Discogs",
  soundcloud: "SoundCloud",
};

export function ReleaseCard({ release }: { release: Release }) {
  const g = coverGradient(release.title);
  const links = Object.entries(release.links).filter(([, v]) => !!v);

  return (
    <article className="card group flex flex-col">
      <div className="relative aspect-square w-full overflow-hidden" style={release.image ? undefined : { background: g.background }}>
        {release.image ? (
          /* Real cover art */
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={release.image}
            alt={`${release.title} — cover art`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Generated placeholder cover (art licensing unclear) */
          <>
            <div className="scanlines absolute inset-0 opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="display text-7xl text-bone/95 transition-transform duration-500 group-hover:scale-110"
                style={{ textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}
              >
                {initials(release.title)}
              </span>
            </div>
            <span className="absolute bottom-2 right-3 text-[9px] uppercase tracking-widest text-bone/40">
              art placeholder
            </span>
          </>
        )}
        <span className="label-mono absolute left-3 top-3 rounded bg-ink/70 px-2 py-1 text-bone">
          {typeLabel[release.type]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold leading-snug text-bone">{release.title}</h3>
        <p className="mt-1 text-xs text-bone-muted">
          {release.artists.join(", ")}
          {release.featuring ? ` feat. ${release.featuring}` : ""}
        </p>

        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-bone-faint">
          {release.label && <span>{release.label}</span>}
          {release.year && <span className="text-acid">{release.year}</span>}
          {release.catalog && <span>{release.catalog}</span>}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {links.length > 0 ? (
            links.map(([k, v]) => (
              <a
                key={k}
                href={v as string}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ink-line px-3 py-1 text-[11px] text-bone-muted transition-colors hover:border-acid hover:text-acid"
              >
                {platformLabel[k] ?? k} ↗
              </a>
            ))
          ) : (
            <span className="text-[11px] text-bone-faint">Links coming soon</span>
          )}
        </div>
      </div>
    </article>
  );
}
