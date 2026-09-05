import Link from "next/link";

import type { Project } from "@/types/content";

type ProjectPaginationProps = {
  previousProject?: Project;
  nextProject?: Project;
};

type ProjectPaginationLinkProps = {
  direction: "previous" | "next";
  project: Project;
};

function ProjectPaginationLink({
  direction,
  project,
}: ProjectPaginationLinkProps) {
  const isPrevious = direction === "previous";
  const directionLabel = isPrevious ? "Previous project" : "Next project";

  return (
    <Link
      className={`project-pagination__link project-pagination__link--${direction}`}
      href={`/work/${project.slug}`}
      aria-label={`${directionLabel}: ${project.title} — ${project.subtitle}`}
    >
      <span className="technical-label">{directionLabel}</span>
      <span className="project-pagination__project">
        {isPrevious ? <span aria-hidden="true">← </span> : null}
        {project.title}
        {!isPrevious ? <span aria-hidden="true"> →</span> : null}
      </span>
    </Link>
  );
}

export function ProjectPagination({
  previousProject,
  nextProject,
}: ProjectPaginationProps) {
  return (
    <nav
      className="project-pagination content-container content-container--wide"
      aria-label="Featured project navigation"
    >
      {previousProject ? (
        <ProjectPaginationLink
          direction="previous"
          project={previousProject}
        />
      ) : null}
      {nextProject ? (
        <ProjectPaginationLink direction="next" project={nextProject} />
      ) : null}
    </nav>
  );
}
