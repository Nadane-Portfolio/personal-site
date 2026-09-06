import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyHeader } from "@/components/case-study/case-study-header";
import { CaseStudySections } from "@/components/case-study/case-study-sections";
import { CaseStudySummary } from "@/components/case-study/case-study-summary";
import { ProjectPagination } from "@/components/case-study/project-pagination";
import { caseStudyProjects, getProjectBySlug } from "@/content/projects";
import type { Project } from "@/types/content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function getCaseStudyProject(slug: string): Project | undefined {
  const project = getProjectBySlug(slug);

  return project?.caseStudyAvailable && project.caseStudy ? project : undefined;
}

function getMetadataDescription(summary: string): string {
  const firstSentenceEnd = summary.indexOf(". ");

  return firstSentenceEnd === -1
    ? summary
    : summary.slice(0, firstSentenceEnd + 1);
}

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyProject(slug);

  if (!project) {
    notFound();
  }

  return {
    title: `${project.title} — ${project.subtitle} | Andrei Nadane`,
    description: getMetadataDescription(project.summary),
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getCaseStudyProject(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = caseStudyProjects.findIndex(
    (caseStudyProject) => caseStudyProject.slug === project.slug,
  );
  const previousProject = caseStudyProjects[projectIndex - 1];
  const nextProject = caseStudyProjects[projectIndex + 1];

  return (
    <article className="case-study">
      <CaseStudyHeader project={project} />
      {project.showCaseStudySummary !== false ? (
        <CaseStudySummary project={project} />
      ) : null}
      <CaseStudySections caseStudy={project.caseStudy} />
      <ProjectPagination
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </article>
  );
}
