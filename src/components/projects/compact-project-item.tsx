import type { Project } from "@/types/content";

type CompactProjectItemProps = {
  project: Project;
};

export function CompactProjectItem({ project }: CompactProjectItemProps) {
  const titleId = `project-${project.id}`;

  return (
    <article className="compact-project" aria-labelledby={titleId}>
      <p className="compact-project__meta">
        {project.kind} · {project.categories.join(" / ")}
      </p>
      <h4 className="compact-project__title" id={titleId}>
        {project.title}
      </h4>
      <p className="compact-project__subtitle">{project.subtitle}</p>
      <p className="compact-project__summary">{project.summary}</p>
      <p className="compact-project__role">
        <span className="meta-label">Contribution</span>
        {project.role}
      </p>
      <p className="compact-project__technology">{project.technology.join(", ")}</p>
    </article>
  );
}
