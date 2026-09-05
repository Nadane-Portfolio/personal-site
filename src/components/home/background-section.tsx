import { education, experience } from "@/content/background";

export function BackgroundSection() {
  return (
    <section className="background" id="background" aria-labelledby="background-title">
      <div className="content-container">
        <header className="background__header">
          <p className="eyebrow">Background</p>
          <h2 className="section-title" id="background-title">
            Technical work grounded in business systems.
          </h2>
        </header>

        <div className="background__grid">
          <section aria-labelledby="experience-title">
            <h3 className="background__label" id="experience-title">
              Experience
            </h3>
            <ol className="background__list">
              {experience.map((item) => (
                <li key={`${item.organisation}-${item.role}`}>
                  <article className="background-entry">
                    <p className="background-entry__date">{item.dateRange}</p>
                    <h4>{item.role}</h4>
                    <p className="background-entry__organisation">
                      {item.organisation} · {item.location}
                    </p>
                    {item.description ? (
                      <p className="background-entry__description">
                        {item.description}
                      </p>
                    ) : null}
                  </article>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="education-title">
            <h3 className="background__label" id="education-title">
              Education
            </h3>
            <ol className="background__list">
              {education.map((item) => (
                <li key={`${item.institution}-${item.qualification}`}>
                  <article className="background-entry">
                    <p className="background-entry__date">{item.dateRange}</p>
                    <h4>{item.qualification}</h4>
                    <p className="background-entry__organisation">
                      {item.institution}
                    </p>
                    {item.thesis ? (
                      <p className="background-entry__description">
                        <span className="meta-label">Thesis</span>
                        {item.thesis}
                      </p>
                    ) : null}
                  </article>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </section>
  );
}
