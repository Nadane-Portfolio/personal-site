import { availability, contactLinks, siteIdentity } from "@/content/site";

import { HeroSystemVisual } from "./hero-system-visual";

const secondaryLinkKinds = ["github", "linkedin", "email"] as const;

export function Hero() {
  const secondaryLinks = secondaryLinkKinds.flatMap((kind) =>
    contactLinks.filter((link) => link.kind === kind),
  );

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="content-container content-container--wide hero__grid">
        <div className="hero__content">
          <p className="eyebrow">{siteIdentity.name}</p>
          <h1 className="display-title" id="hero-title">
            {siteIdentity.role}
          </h1>
          <p className="hero__statement">{siteIdentity.heroStatement}</p>

          <div className="hero__availability">
            <span>{availability.location}</span>
            <span>{availability.preference}</span>
            <span>{availability.opportunities}</span>
          </div>

          <div className="hero__actions">
            <a className="button button--primary" href="#work">
              View my work
            </a>
            <nav aria-label="Profile links" className="hero__secondary-links">
              {secondaryLinks.map((link) => {
                const opensInNewTab = link.kind !== "email";

                return (
                  <a
                    aria-label={
                      opensInNewTab
                        ? `${link.label} (opens in a new tab)`
                        : link.label
                    }
                    href={link.href}
                    key={link.href}
                    rel={opensInNewTab ? "noreferrer" : undefined}
                    target={opensInNewTab ? "_blank" : undefined}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>

        <HeroSystemVisual />
      </div>
    </section>
  );
}
