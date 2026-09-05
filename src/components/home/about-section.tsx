import { aboutContent } from "@/content/site";

export function AboutSection() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="content-container about__grid">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="section-title" id="about-title">
            Practical systems, carefully built.
          </h2>
        </div>

        <div className="about__content prose">
          {aboutContent.paragraphs.map((paragraph) => (
            <p className="body-copy" key={paragraph}>
              {paragraph}
            </p>
          ))}

          <ol aria-label="Problem-solving process" className="about__process">
            {aboutContent.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
