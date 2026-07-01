import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { BandsintownWidget } from "@/components/BandsintownWidget";
import { TourMap } from "@/components/TourMap";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import type { Show } from "@/lib/types";
import performances from "@data/performances.json";

export const metadata: Metadata = {
  title: "Shows & Tour Dates",
  description: "Upcoming and past shows for Alexander Technique. Book for your event — bookings@djalexandertechnique.com.",
};

const past = performances.past as unknown as Show[];

export default function ShowsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Live"
        title="Shows"
        sub={`Booking worldwide — frequently in ${performances.bookingRegions.join(", ")}.`}
      />

      {/* Upcoming (live from Bandsintown) */}
      <section className="container-site py-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="display text-3xl text-bone sm:text-4xl">Upcoming</h2>
          <Link href="/contact" className="btn-acid">Book Alexander Technique</Link>
        </div>
        <Reveal className="card p-6">
          <BandsintownWidget artist={performances.bandsintownArtist} />
          <p className="mt-4 text-xs text-bone-faint">
            Live dates load from Bandsintown. If nothing appears yet, follow on{" "}
            <a href={performances.bandsintownUrl} target="_blank" rel="noopener noreferrer" className="text-acid link-underline">
              Bandsintown
            </a>{" "}
            to get notified — or add manual dates in <code className="text-bone-muted">/data/performances.json</code>.
          </p>
        </Reveal>
      </section>

      {/* Global circuit map */}
      <section className="border-t border-ink-line bg-ink-soft py-16">
        <div className="container-site">
          <h2 className="display mb-8 text-3xl text-bone sm:text-4xl">On the circuit</h2>
          <Reveal>
            <TourMap />
          </Reveal>
        </div>
      </section>

      {/* Past archive */}
      <section className="border-t border-ink-line py-16">
        <div className="container-site">
          <h2 className="display mb-8 text-3xl text-bone sm:text-4xl">Past performances</h2>
          <div className="divide-y divide-ink-line border-y border-ink-line">
            {past.map((s, i) => (
              <Reveal as="div" key={i} delay={i * 30} className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[120px_1fr_auto] sm:items-center">
                <div className="font-mono text-sm text-acid">
                  {s.date}
                  {s.year ? `, ${s.year}` : <span className="text-bone-faint"> ·&nbsp;year TBC</span>}
                </div>
                <div>
                  <div className="font-semibold text-bone">{s.event}</div>
                  <div className="text-sm text-bone-muted">{s.venue}</div>
                </div>
                <div className="text-sm text-bone-muted sm:text-right">{s.city}</div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-bone-faint">{performances.pastNote}</p>
        </div>
      </section>

      {/* Booking CTA band */}
      <section className="container-site py-20 text-center">
        <Reveal>
          <h2 className="display mx-auto max-w-3xl text-4xl text-bone sm:text-6xl">Bring the technique to your floor.</h2>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/contact" className="btn-acid">Request a booking</Link>
            <a href={`mailto:${SITE.bookingEmail}`} className="btn-ghost">{SITE.bookingEmail}</a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
