import Link from "next/link";

import type { Project } from "@/types/content";

type CaseStudyHeaderProps = {
  project: Project;
};

export function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  const metadata = [
    project.kind,
    project.duration,
    project.categories.join(" / "),
  ].filter(Boolean);

  return (
    <header className="case-study-header content-container content-container--wide">
      <Link className="case-study-header__back" href="/#work">
        <span aria-hidden="true">←</span> Back to selected work
      </Link>

      <div className="case-study-header__meta">
        <span>{String(project.displayOrder).padStart(2, "0")}</span>
        <span>{metadata.join(" · ")}</span>
      </div>

      <h1 className="case-study-header__title">
        <span>{project.title}</span>
        <span className="case-study-header__subtitle">{project.subtitle}</span>
      </h1>

      <p className="case-study-header__summary">{project.summary}</p>
    </header>
  );
}
