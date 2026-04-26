import type { MetadataRoute } from "next";
import { siteSettings } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteSettings.businessName,
    short_name: siteSettings.businessName,
    description: siteSettings.meta.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f4f7f2",
    theme_color: "#09120d",
    icons: [
      {
        src: siteSettings.brandAssets.appIconLight.src,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: siteSettings.brandAssets.appIconDark.src,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: siteSettings.brandAssets.favicon.src,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
