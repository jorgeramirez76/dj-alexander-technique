import social from "@data/social-links.json";
import artist from "@data/artist.json";

export const SITE = {
  name: "Alexander Technique",
  domain: "djalexandertechnique.com",
  url: "https://www.djalexandertechnique.com",
  title: "Alexander Technique — NYC Techno DJ, Producer & Label Owner",
  description:
    "Official site of Alexander Technique — New York City techno DJ, producer and label owner. Raw, stripped, peak-time techno supported by Carl Cox, Adam Beyer & Kevin Saunderson. Listen, watch, and book.",
  bookingEmail: social.bookingEmail,
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/music", label: "Music" },
  { href: "/videos", label: "Videos" },
  { href: "/shows", label: "Shows" },
  { href: "/gallery", label: "Gallery" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Book" },
] as const;

export { social, artist };
