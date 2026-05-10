import type { MetadataRoute } from "next";
import { footerNavigation, siteSettings } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteSettings.legal.lastUpdatedIso);

  return footerNavigation.map((item) => ({
    url: new URL(item.href, siteSettings.siteUrl).toString(),
    lastModified,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
