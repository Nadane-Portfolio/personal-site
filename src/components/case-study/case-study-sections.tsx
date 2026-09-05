import type { CaseStudyContent } from "@/types/content";

type CaseStudySectionsProps = {
  caseStudy?: CaseStudyContent;
};

export function CaseStudySections({ caseStudy }: CaseStudySectionsProps) {
  if (!caseStudy?.sections?.length) {
    return null;
  }

  return (
    <div className="case-study-sections content-container">
      {caseStudy.sections.map((section) => (
        <section
          className="case-study-section"
          id={section.id}
          key={section.id}
          aria-labelledby={`${section.id}-title`}
        >
          <header className="case-study-section__header">
            {section.eyebrow ? (
              <p className="eyebrow">{section.eyebrow}</p>
            ) : null}
            <h2 id={`${section.id}-title`}>{section.title}</h2>
          </header>

          <div className="case-study-section__content">
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets?.length ? (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>
      ))}
    </div>
  );
}
