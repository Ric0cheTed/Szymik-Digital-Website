import Image from "next/image";
import { siteSettings } from "@/lib/site";

type BrandLogoProps = {
  variant?: "horizontal" | "stacked" | "mark";
  className?: string;
  sizes?: string;
  priority?: boolean;
  alt?: string;
};

const assetMap = {
  horizontal: siteSettings.brandAssets.logoHorizontal,
  stacked: siteSettings.brandAssets.logoStacked,
  mark: siteSettings.brandAssets.logoMark,
} as const;

export function BrandLogo({
  variant = "horizontal",
  className = "",
  sizes,
  priority = false,
  alt,
}: BrandLogoProps) {
  const asset = assetMap[variant];

  return (
    <Image
      src={asset.src}
      alt={alt ?? siteSettings.businessName}
      width={asset.width}
      height={asset.height}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
