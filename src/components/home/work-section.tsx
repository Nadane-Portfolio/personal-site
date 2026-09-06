import {
  homepageFeaturedProjects,
  supportingProjects,
} from "@/content/projects";
import { FeaturedProjectItem } from "@/components/projects/featured-project-item";
import { SupportingWorkCarousel } from "@/components/home/supporting-work-carousel";

export function WorkSection() {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="content-container content-container--wide">
        <header className="work__header">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title" id="work-title">
            Building practical systems across AI, software and data.
          </h2>
          <p className="work__intro body-copy">
            From client work and independent AI products to research and data
            systems.
          </p>
        </header>

        <div className="featured-projects">
          {homepageFeaturedProjects.map((project, index) => (
            <FeaturedProjectItem
              key={project.id}
              project={project}
              reversed={index % 2 === 1}
            />
          ))}
        </div>

        <section className="more-work" aria-labelledby="more-work-title">
          <div className="more-work__header">
            <p className="eyebrow">More work</p>
            <h3 id="more-work-title">Supporting product and software work.</h3>
          </div>
          <SupportingWorkCarousel projects={supportingProjects} />
        </section>
      </div>
    </section>
  );
}
