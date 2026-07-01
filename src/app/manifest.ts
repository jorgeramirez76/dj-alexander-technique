import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alexander Technique — NYC Techno",
    short_name: "Alexander Technique",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#08090c",
    theme_color: "#08090c",
    categories: ["music", "entertainment"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
