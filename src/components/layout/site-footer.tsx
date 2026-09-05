import { contactLinks, siteIdentity } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="content-container site-footer__inner">
        <p className="site-footer__identity">
          {siteIdentity.shortName} <span aria-hidden="true">/</span>{" "}
          {siteIdentity.role}
        </p>

        <div aria-label="Contact links" className="site-footer__links">
          {contactLinks.map((link) => {
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
        </div>

        <p className="site-footer__copyright">© {siteIdentity.shortName}</p>
      </div>
    </footer>
  );
}
