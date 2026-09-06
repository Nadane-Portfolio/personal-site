import Link from "next/link";

import type { Project } from "@/types/content";

import { ProjectVisual } from "./project-visual";

type FeaturedProjectItemProps = {
  project: Project;
  reversed?: boolean;
};

export function FeaturedProjectItem({
  project,
  reversed = false,
}: FeaturedProjectItemProps) {
  const titleId = `project-${project.id}`;
  const metadata = [
    project.kind,
    project.duration,
    project.categories.join(" / "),
  ].filter(Boolean);

  return (
    <article
      className={`featured-project${reversed ? " featured-project--reversed" : ""}`}
      aria-labelledby={titleId}
    >
      <div className="featured-project__content">
        <p className="featured-project__sequence">
          {String(project.displayOrder).padStart(2, "0")}
        </p>
        <p className="featured-project__meta">{metadata.join(" · ")}</p>
        <h3 className="project-title" id={titleId}>
          {project.title}
        </h3>
        <p className="featured-project__subtitle">{project.subtitle}</p>
        <p className="featured-project__summary">
          {project.homepageSummary ?? project.summary}
        </p>
        <p className="featured-project__role">
          <span className="meta-label">Role</span>
          {project.role}
        </p>
        <p className="featured-project__technology">
          <span className="technical-label">Technology</span>
          {project.technology.join(", ")}
        </p>
        {project.source ? (
          <p className="featured-project__source">{project.source.notice}</p>
        ) : null}
        <Link
          className="featured-project__link"
          href={`/work/${project.slug}`}
        >
          Read case study <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="featured-project__visual">
        <ProjectVisual projectId={project.id} />
      </div>
    </article>
  );
}
