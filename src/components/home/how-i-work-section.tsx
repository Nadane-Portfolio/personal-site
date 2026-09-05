import { approachContent } from "@/content/approach";

export function HowIWorkSection() {
  return (
    <section className="how-i-work" id="approach" aria-labelledby="approach-title">
      <div className="content-container how-i-work__grid">
        <header className="how-i-work__intro">
          <p className="eyebrow">How I work</p>
          <h2 className="section-title" id="approach-title">
            Start with the problem. Build toward something useful.
          </h2>
          <p className="how-i-work__summary body-copy">{approachContent.intro}</p>
        </header>

        <ol className="work-principles">
          {approachContent.principles.map((principle) => (
            <li className="work-principle" key={principle.number}>
              <span className="work-principle__number">{principle.number}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
