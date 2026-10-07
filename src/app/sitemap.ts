import type { MetadataRoute } from "next";
import { SITE, NAV } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV.map((n) => ({
    url: `${SITE.url}${n.href === "/" ? "" : n.href}`,
    changeFrequency: n.href === "/shows" ? "weekly" : "monthly",
    priority: n.href === "/" ? 1 : 0.7,
  }));
}
