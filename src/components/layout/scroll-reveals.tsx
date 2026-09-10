"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Only leaf presentation groups: never transform a gallery/modal ancestor.
const revealTargets = [
  ".about__grid > :first-child",
  ".about__content",
  ".work__header",
  ".featured-project__content",
  ".featured-project__visual",
  ".more-work__header",
  ".work-principle",
  ".ai-practice__header",
  ".ai-practice__column",
  ".ai-practice__operating",
  ".skills__header",
  ".skill-group",
  ".background__header",
  ".background-entry",
  ".contact__intro",
  ".contact__actions",
  ".case-study-section__header",
  ".case-study-section__content",
  ".project-pagination__link",
].join(",");

export function ScrollReveals() {
  const pathname = usePathname();

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;

    const elements = document.querySelectorAll<HTMLElement>(revealTargets);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          if (!motion.matches) target.setAttribute("data-reveal", "enter");
          observer.unobserve(target);
        });
      },
      { rootMargin: "0px 0px 40px 0px", threshold: 0 },
    );

    // Fail open: content is always visible without JS, before observation,
    // and during keyboard navigation. There is no persistent hidden state.
    const configure = () => {
      observer.disconnect();
      elements.forEach((element) => {
        element.removeAttribute("data-reveal");
        if (!motion.matches && element.getBoundingClientRect().top > innerHeight) {
          observer.observe(element);
        }
      });
    };
    const finish = (event: Event) => {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest(revealTargets);
      element?.removeAttribute("data-reveal");
      if (element) observer.unobserve(element);
    };

    configure();
    motion.addEventListener("change", configure);
    document.addEventListener("animationend", finish);
    document.addEventListener("focusin", finish);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", configure);
      document.removeEventListener("animationend", finish);
      document.removeEventListener("focusin", finish);
      elements.forEach((element) => element.removeAttribute("data-reveal"));
    };
  }, [pathname]);

  return null;
}
