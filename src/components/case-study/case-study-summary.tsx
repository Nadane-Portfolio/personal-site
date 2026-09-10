import type { Project } from "@/types/content";

type CaseStudySummaryProps = {
  project: Project;
  compact?: boolean;
};

export function CaseStudySummary({
  project,
  compact = false,
}: CaseStudySummaryProps) {
  return (
    <section
      className={`case-study-summary content-container content-container--wide${compact ? " case-study-summary--compact" : ""}`}
      aria-labelledby={compact ? undefined : "case-study-summary-title"}
    >
      {!compact ? (
        <h2 className="case-study-summary__title" id="case-study-summary-title">
          At a glance
        </h2>
      ) : null}

      <dl className="case-study-summary__facts">
        {!compact ? (
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
        ) : null}

        <div className="case-study-summary__fact">
          <dt>Technology</dt>
          <dd>{project.technology.join(", ")}</dd>
        </div>

        {project.source ? (
          <div className="case-study-summary__fact case-study-summary__fact--source">
            <dt>
              {project.source.repositoryUrl ? (
                <a
                  href={project.source.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.source.label} (opens in a new tab)`}
                >
                  {project.source.label} <span aria-hidden="true">↗</span>
                </a>
              ) : (
                project.source.label
              )}
            </dt>
            <dd>{project.source.notice}</dd>
          </div>
        ) : null}
      </dl>
    </section>
  );
}
