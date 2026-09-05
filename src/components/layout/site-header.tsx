import Link from "next/link";

import { contactLinks, navigation, siteIdentity } from "@/content/site";

export function SiteHeader() {
  const emailLinks = contactLinks.filter((link) => link.kind === "email");

  return (
    <header className="site-header">
      <div className="content-container site-header__inner">
        <Link className="site-header__brand" href="/">
          {siteIdentity.shortName}
        </Link>

        <nav aria-label="Primary navigation" className="site-header__nav">
          {navigation.map((item) => (
            <a className="site-header__nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__contact">
          {emailLinks.map((link) => (
            <a className="site-header__contact-link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
