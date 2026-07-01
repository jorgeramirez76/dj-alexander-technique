import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { VideoTabs } from "@/components/VideoTabs";
import type { VideoCategory } from "@/lib/types";
import videos from "@data/videos.json";

export const metadata: Metadata = {
  title: "Videos & Live Sets",
  description: "Live sets, streams and productions from Alexander Technique — plus footage of Carl Cox, Adam Beyer, Kevin Saunderson and more dropping his tracks.",
};

const categories = videos.categories as unknown as VideoCategory[];

export default function VideosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Watch"
        title="Videos"
        sub="Full sets from the booth, studio productions, and the receipts — A-list DJs playing his records worldwide."
      />
      <section className="container-site py-14">
        <VideoTabs categories={categories} />
        <p className="mt-10 text-xs text-bone-faint">
          Interviews &amp; podcast appearances — coming soon. All videos stream from the official YouTube channel; nothing is rehosted.
        </p>
      </section>
    </>
  );
}
