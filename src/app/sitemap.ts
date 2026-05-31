import type { MetadataRoute } from "next";
import { footerNavigation, siteSettings } from "@/lib/site";

export const dynamic = "force-static";

const additionalSitemapRoutes = [
  "/services/guide-prices/",
  "/services/automation-custom-tools/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteSettings.legal.lastUpdatedIso);
  const routes = [
    ...footerNavigation.map((item) => item.href),
    ...additionalSitemapRoutes,
  ];

  return routes.map((href) => ({
    url: new URL(href, siteSettings.siteUrl).toString(),
    lastModified,
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: href === "/" ? 1 : href === "/website-review/" ? 0.75 : 0.7,
  }));
}
