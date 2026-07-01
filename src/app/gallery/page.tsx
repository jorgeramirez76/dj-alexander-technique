import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { coverGradient } from "@/lib/art";
import gallery from "@data/gallery.json";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Press photos, live shots and artwork from Alexander Technique.",
};

const aspect: Record<string, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="Visuals" title="Gallery" sub="Press photos, live shots and artwork." />

      <section className="container-site py-14">
        <Reveal className="mb-8 rounded-lg border border-ink-line bg-ink-soft p-4 text-sm text-bone-muted">
          <span className="label-mono text-acid">Note</span> — the tiles below are on-brand placeholders. No
          third-party photos are bundled; the owner supplies licensed images (drop files in{" "}
          <code className="text-bone">/public/gallery</code> and set <code className="text-bone">src</code> in{" "}
          <code className="text-bone">/data/gallery.json</code>).
        </Reveal>

        <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {gallery.items.map((g, i) => {
            const grad = coverGradient(g.id + g.label);
            return (
              <Reveal key={g.id} delay={i * 30} className={`group relative block break-inside-avoid overflow-hidden rounded-xl border border-ink-line ${aspect[g.aspect] ?? "aspect-square"}`}>
                {g.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={g.src} alt={g.label} className="h-full w-full object-cover" />
                ) : (
                  <div className="relative h-full w-full" style={{ background: grad.background }}>
                    <div className="scanlines absolute inset-0 opacity-40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
                      <span className="label-mono text-bone/70">{g.kind}</span>
                      <span className="text-sm text-bone/90">{g.label}</span>
                      <span className="mt-2 text-[10px] uppercase tracking-widest text-bone/40">Photo — owner to supply</span>
                    </div>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
