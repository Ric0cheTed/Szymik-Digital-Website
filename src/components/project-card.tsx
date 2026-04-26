import type { Project } from "@/lib/work";

type ProjectCardProps = {
  project: Project;
};

const labelMeta: Record<
  Project["label"],
  {
    title: string;
    description: string;
    className: string;
  }
> = {
  Internal: {
    title: "Internal build",
    description:
      "Real studio work created for Szymik Digital itself or for an internal working system.",
    className: "border-accent/20 bg-accent-soft text-accent-strong",
  },
  Concept: {
    title: "Concept direction",
    description:
      "Deliberate example work shown to demonstrate approach and judgement, not claimed client delivery.",
    className: "border-border bg-background text-foreground",
  },
};

export function ProjectCard({ project }: ProjectCardProps) {
  const projectLabel = labelMeta[project.label];

  return (
    <article className="panel flex h-full flex-col p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <span className={`pill ${projectLabel.className}`}>{projectLabel.title}</span>
          <p className="max-w-md text-sm leading-7 text-muted">
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

      <div className="mt-6 flex flex-1 flex-col">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="text-base leading-8 text-muted">{project.summary}</p>
        </div>

        <div className="mt-6 grid gap-3">
            {project.scope.map((item) => (
              <p key={item} className="list-check">
                {item}
              </p>
            ))}
          </div>

        <div className="mt-6 rounded-[1.35rem] border border-border bg-background/75 p-4">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            Why it is included
          </p>
          <p className="mt-2 text-sm leading-7 text-muted">{project.note}</p>
        </div>
      </div>
    </article>
  );
}
