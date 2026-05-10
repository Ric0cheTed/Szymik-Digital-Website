import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import { AnalyticsConsent } from "@/components/analytics-consent";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { rootMetadata } from "@/lib/metadata";
import { siteSettings } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = rootMetadata;
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f7f2" },
    { media: "(prefers-color-scheme: dark)", color: "#09120d" },
  ],
};

const rootHtmlClasses = [
  manrope.variable,
  ibmPlexMono.variable,
  "h-full scroll-smooth antialiased",
].join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteSettings.language} className={rootHtmlClasses}>
      <body className="min-h-full bg-background text-foreground">
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(87,214,129,0.22),_transparent_58%)]" />
          <SiteHeader />
          <main className="relative flex-1">{children}</main>
          <SiteFooter />
          <AnalyticsConsent />
        </div>
      </body>
    </html>
  );
}
