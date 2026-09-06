"use client";

import { useRef } from "react";

import { CompactProjectItem } from "@/components/projects/compact-project-item";
import type { Project } from "@/types/content";

type SupportingWorkCarouselProps = {
  projects: readonly Project[];
};

export function SupportingWorkCarousel({
  projects,
}: SupportingWorkCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "previous" | "next") {
    const scroller = scrollerRef.current;

    if (!scroller) return;

    scroller.scrollBy({
      left:
        direction === "next"
          ? scroller.clientWidth * 0.8
          : -scroller.clientWidth * 0.8,
      behavior: "smooth",
    });
  }

  return (
    <div className="more-work__carousel">
      <div className="more-work__controls" aria-label="Supporting work controls">
        <button
          className="more-work__control"
          type="button"
          aria-label="Show previous supporting projects"
          onClick={() => scroll("previous")}
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          className="more-work__control"
          type="button"
          aria-label="Show next supporting projects"
          onClick={() => scroll("next")}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <div className="more-work__scroller" ref={scrollerRef}>
        {projects.map((project) => (
          <CompactProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
