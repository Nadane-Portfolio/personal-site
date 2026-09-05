import type { CaseStudyContent } from "@/types/content";
import { AiKnowledgeSystemVisual } from "@/components/case-study/visuals/ai-knowledge-system-visual";

type CaseStudySectionsProps = {
  caseStudy?: CaseStudyContent;
};

const caseStudyVisuals = {
  "ai-knowledge-system": AiKnowledgeSystemVisual,
} as const;

export function CaseStudySections({ caseStudy }: CaseStudySectionsProps) {
  if (!caseStudy?.sections?.length) {
    return null;
  }

  return (
    <div className="case-study-sections content-container">
      {caseStudy.sections.map((section) => (
        <CaseStudySection key={section.id} section={section} />
      ))}
    </div>
  );
}

type CaseStudySectionProps = {
  section: NonNullable<CaseStudyContent["sections"]>[number];
};

function CaseStudySection({ section }: CaseStudySectionProps) {
  const Visual = section.visual ? caseStudyVisuals[section.visual] : null;

  return (
    <section
      className="case-study-section"
      id={section.id}
      aria-labelledby={`${section.id}-title`}
    >
      <header className="case-study-section__header">
        {section.eyebrow ? <p className="eyebrow">{section.eyebrow}</p> : null}
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

      {Visual ? (
        <div className="case-study-section__visual">
          <Visual />
        </div>
      ) : null}
    </section>
  );
}
