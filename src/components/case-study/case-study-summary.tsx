import type { Project } from "@/types/content";

type CaseStudySummaryProps = {
  project: Project;
};

export function CaseStudySummary({ project }: CaseStudySummaryProps) {
  return (
    <section
      className="case-study-summary content-container content-container--wide"
      aria-labelledby="case-study-summary-title"
    >
      <h2 className="case-study-summary__title" id="case-study-summary-title">
        At a glance
      </h2>

      <dl className="case-study-summary__facts">
        <div className="case-study-summary__fact case-study-summary__fact--role">
          <dt>Role / contribution</dt>
          <dd>
            <p>{project.role}</p>
            <ul>
              {project.contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          </dd>
        </div>

        <div className="case-study-summary__fact">
          <dt>Technology</dt>
          <dd>{project.technology.join(", ")}</dd>
        </div>

        {project.source ? (
          <div className="case-study-summary__fact case-study-summary__fact--source">
            <dt>{project.source.label}</dt>
            <dd>{project.source.notice}</dd>
          </div>
        ) : null}
      </dl>
    </section>
  );
}
