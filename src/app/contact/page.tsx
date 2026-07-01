import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { BookingForm } from "@/components/BookingForm";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";
import { SITE, social, artist } from "@/lib/site";
import faq from "@data/faq.json";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description: `Book Alexander Technique or send a press/label inquiry. ${SITE.bookingEmail}`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Get in touch" title="Booking" sub="Promoters, talent buyers, press and labels — start here." />

      <section className="container-site grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <BookingForm />
        </Reveal>

        <Reveal delay={80} className="space-y-8">
          <div className="card p-6">
            <div className="label-mono mb-2 text-bone-faint">Direct</div>
            <a href={`mailto:${SITE.bookingEmail}`} className="text-lg text-acid link-underline">
              {SITE.bookingEmail}
            </a>
            <p className="mt-3 text-sm text-bone-muted">
              Based in {artist.location}. Booking worldwide.
            </p>
          </div>

          <div className="card p-6">
            <div className="label-mono mb-3 text-bone-faint">Mailing list</div>
            <p className="mb-4 text-sm text-bone-muted">Drops, dates and label news.</p>
            <NewsletterForm compact />
          </div>

          <div className="card p-6">
            <div className="label-mono mb-3 text-bone-faint">Follow</div>
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
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="border-t border-ink-line bg-ink-soft py-16">
        <div className="container-site">
          <div className="label-mono mb-8 text-center text-acid">Booking FAQ</div>
          <Faq items={faq.items} />
        </div>
      </section>
    </>
  );
}
