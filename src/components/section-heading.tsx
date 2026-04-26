type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro: string;
  align?: "left" | "center";
  surface?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  surface = "light",
  className = "",
}: SectionHeadingProps) {
  const sectionClassName = [
    "section-intro",
    align === "center" ? "mx-auto text-center" : "",
    className,
  ]
    .join(" ")
    .trim();

  const eyebrowClassName =
    surface === "dark"
      ? "text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-accent"
      : "eyebrow";

  const titleClassName =
    surface === "dark"
      ? "text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
      : "section-title";

  const introClassName =
    surface === "dark"
      ? "panel-dark-copy text-base leading-8 sm:text-lg"
      : "section-copy";

  return (
    <div className={sectionClassName}>
      <span className={eyebrowClassName}>{eyebrow}</span>
      <h2 className={titleClassName}>{title}</h2>
      <p className={introClassName}>{intro}</p>
    </div>
  );
}
