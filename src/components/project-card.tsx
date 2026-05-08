import type { Project } from "@/lib/work";

type ProjectCardProps = {
  project: Project;
  variant?: "full" | "compact";
};

const labelMeta: Record<
  Project["label"],
  {
    title: string;
    description: string;
    className: string;
  }
> = {
  Client: {
    title: "Client work",
    description:
      "Real external work. Any public claims are kept cautious and limited to what can be shown honestly.",
    className: "border-accent/20 bg-accent-soft text-accent-strong",
  },
  Internal: {
    title: "Internal foundation",
    description:
      "Real studio work created for Szymik Digital itself or for an internal working system.",
    className: "border-border bg-background text-foreground",
  },
  Concept: {
    title: "Concept direction",
    description:
      "Deliberate example work shown to demonstrate approach and judgement, not claimed client delivery.",
    className: "border-border bg-background text-foreground",
  },
  "Coming Soon": {
    title: "Coming soon",
    description:
      "A clearly labelled placeholder for future permissioned examples, not a claimed client result.",
    className: "border-border bg-background text-foreground",
  },
};

const compactNotes: Record<Project["label"], string> = {
  Client: "Real external work, described without invented metrics.",
  Internal: "Real Szymik Digital foundation work.",
  Concept: "Concept example, not claimed client delivery.",
  "Coming Soon": "Clearly labelled future placeholder.",
};

export function ProjectCard({ project, variant = "full" }: ProjectCardProps) {
  const projectLabel = labelMeta[project.label];

  if (variant === "compact") {
    return (
      <article className="panel flex h-full flex-col p-4 sm:p-7">
        <div className="flex flex-wrap items-center gap-3">
          <span className={`pill ${projectLabel.className}`}>
            {projectLabel.title}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            {project.category}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-foreground sm:mt-5 sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-7 text-muted sm:mt-3">
          {project.summary}
        </p>

        <div className="mt-5 hidden gap-2 sm:grid">
          {project.helpedWith.slice(0, 2).map((item) => (
            <p key={item} className="list-check">
              {item}
            </p>
          ))}
        </div>

        <p className="mt-4 border-t border-border pt-4 text-xs font-medium leading-6 text-muted sm:mt-5">
          {compactNotes[project.label]}
        </p>
      </article>
    );
  }

  return (
    <article className="panel flex h-full flex-col p-5 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="space-y-2 sm:space-y-3">
          <span className={`pill ${projectLabel.className}`}>
            {projectLabel.title}
          </span>
          <p className="hidden max-w-md text-sm leading-7 text-muted sm:block">
            {projectLabel.description}
          </p>
        </div>
        <div className="text-left sm:text-right">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            {project.year}
          </p>
          <p className="mt-2 text-sm font-medium text-muted">{project.category}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-1 flex-col sm:mt-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
            {project.title}
          </h3>
        </div>

        <div className="mt-5 grid gap-4 sm:mt-6 sm:gap-5">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground sm:text-base sm:normal-case sm:tracking-normal">
              Starting point
            </h4>
            <p className="mt-2 text-sm leading-7 text-muted sm:mt-3">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground sm:text-base sm:normal-case sm:tracking-normal">
              Helped with
            </h4>
            <div className="mt-2 grid gap-2 sm:mt-3 sm:gap-3">
              {project.helpedWith.map((item) => (
                <p key={item} className="list-check">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground sm:text-base sm:normal-case sm:tracking-normal">
              Outcome
            </h4>
            <p className="mt-2 text-sm leading-7 text-muted sm:mt-3">
              {project.outcome}
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-[1.25rem] border border-border bg-background/75 p-4 sm:mt-6 sm:rounded-[1.35rem]">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            Honest note
          </p>
          <p className="mt-2 text-sm leading-7 text-muted">{project.note}</p>
        </div>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            className="link-arrow mt-6"
            target="_blank"
            rel="noreferrer"
          >
            {project.linkLabel ?? "View live project"}{" "}
            <span aria-hidden>{">"}</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}
