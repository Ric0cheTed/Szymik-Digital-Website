import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  actions?: ReactNode;
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  actions,
  aside,
}: PageHeroProps) {
  return (
    <section className="page-section pb-10 pt-10 sm:pt-14 lg:pt-20">
      <div className="site-container">
        <div
          className={[
            "grid gap-6 lg:items-end",
            aside
              ? "lg:grid-cols-[minmax(0,1.12fr)_minmax(18rem,0.88fr)]"
              : "",
          ]
            .join(" ")
            .trim()}
        >
          <div className="section-intro max-w-4xl">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              {intro}
            </p>
            {actions ? (
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">{actions}</div>
            ) : null}
          </div>
          {aside ? <div className="panel p-6 sm:p-8">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
