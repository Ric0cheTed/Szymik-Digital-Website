/* eslint-disable @next/next/no-img-element */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteSettings } from "@/lib/site";

export const alt = siteSettings.meta.openGraphAlt;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const dynamic = "force-static";
export const runtime = "nodejs";

async function getLogoDataUri() {
  const logoBuffer = await readFile(
    path.join(process.cwd(), "public", "brand", "logo-horizontal.png"),
  );

  return `data:image/png;base64,${logoBuffer.toString("base64")}`;
}

export default async function OpenGraphImage() {
  const logo = await getLogoDataUri();
  const domainLabel = siteSettings.siteUrl.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(180deg, #07100b 0%, #0c1711 45%, #101f16 100%)",
          color: "#f8fbf6",
          padding: "58px 64px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(87,214,129,0.18), transparent 44%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                fontSize: 18,
                letterSpacing: 5,
                textTransform: "uppercase",
                color: "rgba(248,251,246,0.62)",
              }}
            >
              {siteSettings.tagline}
            </div>
            <img
              src={logo}
              alt={siteSettings.businessName}
              width={430}
              height={84}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: 999,
              border: "1px solid rgba(248,251,246,0.14)",
              background: "rgba(248,251,246,0.08)",
              padding: "12px 20px",
              fontSize: 20,
              color: "rgba(248,251,246,0.78)",
            }}
          >
            {domainLabel}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              maxWidth: 900,
              fontSize: 68,
              lineHeight: 1.03,
              fontWeight: 700,
              letterSpacing: 0,
            }}
          >
            Practical websites for small local businesses
          </div>
          <div
            style={{
              maxWidth: 860,
              fontSize: 28,
              lineHeight: 1.4,
              color: "rgba(248,251,246,0.72)",
            }}
          >
            Website refreshes, starter websites, local growth support, and
            practical systems from Todmorden, West Yorkshire.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["Website refreshes", "Starter websites", "Local growth"].map(
            (item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 999,
                  border: "1px solid rgba(248,251,246,0.14)",
                  background: "rgba(248,251,246,0.08)",
                  padding: "12px 20px",
                  fontSize: 20,
                  color: "rgba(248,251,246,0.8)",
                }}
              >
                {item}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
