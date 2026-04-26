import Link from "next/link";
import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaLinkProps) {
  const buttonClassName = [
    variant === "primary" ? "btn-primary" : "btn-secondary",
    className,
  ]
    .join(" ")
    .trim();

  return (
    <Link href={href} className={buttonClassName}>
      {children}
      <span aria-hidden>{">"}</span>
    </Link>
  );
}
