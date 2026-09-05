import { availability, contactContent, contactLinks } from "@/content/site";

export function ContactSection() {
  const emailLinks = contactLinks.filter((link) => link.kind === "email");
  const profileLinks = contactLinks.filter((link) => link.kind !== "email");

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="content-container content-container--wide contact__grid">
        <header className="contact__intro">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title" id="contact-title">
            Let’s build something useful.
          </h2>
          <p className="contact__summary body-copy">{contactContent.intro}</p>
        </header>

        <div className="contact__actions">
          <div className="contact__availability">
            <p className="technical-label">Availability</p>
            <p>
              {availability.location} <span aria-hidden="true">/</span>{" "}
              {availability.preference} <span aria-hidden="true">/</span>{" "}
              {availability.opportunities}
            </p>
          </div>

          {emailLinks.map((link) => (
            <a className="button button--primary contact__email" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}

          <nav aria-label="Contact profiles" className="contact__profiles">
            {profileLinks.map((link) => (
              <a
                aria-label={`${link.label} (opens in a new tab)`}
                href={link.href}
                key={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
