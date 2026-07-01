import type { Metadata, Viewport } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE, social, artist } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorGlow } from "@/components/CursorGlow";
import { AudioDock } from "@/components/AudioDock";

const display = Anton({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s — Alexander Technique",
  },
  description: SITE.description,
  keywords: ["Alexander Technique", "techno DJ", "NYC techno", "Terminator Records", "Todd Terry", "Data Distortion", "techno producer", "DJ booking"],
  authors: [{ name: "Alexander Technique" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [{ url: "/media/og.jpg", width: 1200, height: 630, alt: "Alexander Technique — NYC Techno DJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    creator: "@AlexanderTechnq",
    images: ["/media/og.jpg"],
  },
  robots: { index: true, follow: true },
  appleWebApp: {
    capable: true,
    title: "Alexander Technique",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090c",
  colorScheme: "dark",
};

function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MusicGroup", "Person"],
    name: artist.name,
    alternateName: artist.stageName,
    url: SITE.url,
    email: `mailto:${SITE.bookingEmail}`,
    jobTitle: artist.roles.join(", "),
    description: artist.bio.medium,
    genre: artist.genres,
    foundingLocation: artist.location,
    sameAs: social.profiles.map((p) => p.url),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="grain font-sans antialiased">
        <StructuredData />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-acid focus:px-4 focus:py-2 focus:text-ink">
          Skip to content
        </a>
        <ScrollProgress />
        <CursorGlow />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        {/* space so the fixed audio dock never covers footer content */}
        <div aria-hidden className="h-16" />
        <AudioDock />
      </body>
    </html>
  );
}
