import { skillGroups } from "@/content/skills";

export function SkillsSection() {
  const primaryGroup = skillGroups.find((group) => group.emphasis === "primary");
  const supportingGroups = skillGroups.filter(
    (group) => group.emphasis !== "primary",
  );

  return (
    <section className="skills" id="skills" aria-labelledby="skills-title">
      <div className="content-container content-container--wide">
        <header className="skills__header">
          <p className="eyebrow">Technical skills</p>
          <h2 className="section-title" id="skills-title">
            Tools are useful. Knowing where they fit matters more.
          </h2>
          <p className="skills__intro body-copy">
            My work spans AI systems, software development, data and business
            systems. I choose tools based on the problem rather than forcing
            every project into the same stack.
          </p>
        </header>

        {primaryGroup ? (
          <article className="skill-group skill-group--primary">
            <div>
              <p className="technical-label">Current focus</p>
              <h3>{primaryGroup.title}</h3>
              <p>{primaryGroup.description}</p>
            </div>
            <SkillList skills={primaryGroup.skills} />
          </article>
        ) : null}

        <div className="skill-groups">
          {supportingGroups.map((group) => (
            <article className="skill-group" key={group.id}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <SkillList skills={group.skills} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillList({ skills }: { skills: readonly string[] }) {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}
