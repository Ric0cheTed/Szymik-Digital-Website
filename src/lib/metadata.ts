import type { Metadata } from "next";
import { siteName, siteSettings } from "@/lib/site";

const siteUrl = new URL(siteSettings.siteUrl);
const sharedImage = new URL("/opengraph-image", siteUrl).toString();

function pageTitle(title?: string) {
  return title ? `${title} | ${siteName}` : siteSettings.meta.defaultTitle;
}

function canonicalUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export const rootMetadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteSettings.meta.defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: siteSettings.meta.defaultDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: siteSettings.founderName }],
  creator: siteSettings.founderName,
  publisher: siteName,
  category: "business",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteSettings.locale,
    siteName,
    title: siteSettings.meta.defaultTitle,
    description: siteSettings.meta.defaultDescription,
    url: siteUrl.toString(),
    images: [
      {
        url: sharedImage,
        width: 1200,
        height: 630,
        alt: siteSettings.meta.openGraphAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteSettings.meta.defaultTitle,
    description: siteSettings.meta.defaultDescription,
    images: [sharedImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      {
        url: siteSettings.brandAssets.favicon.src,
        sizes: "512x512",
        type: "image/png",
      },
      {
        url: siteSettings.brandAssets.appIconLight.src,
        sizes: "512x512",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: siteSettings.brandAssets.appIconDark.src,
        sizes: "512x512",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      {
        url: siteSettings.brandAssets.appIconLight.src,
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [siteSettings.brandAssets.favicon.src],
  },
};

type CreatePageMetadataInput = {
  title?: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: CreatePageMetadataInput): Metadata {
  const fullTitle = pageTitle(title);
  const canonical = canonicalUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteSettings.locale,
      siteName,
      title: fullTitle,
      description,
      url: canonical,
      images: [
        {
          url: sharedImage,
          width: 1200,
          height: 630,
          alt: siteSettings.meta.openGraphAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [sharedImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
