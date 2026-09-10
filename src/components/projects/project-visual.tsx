import Image from "next/image";
import type { Project } from "@/types/content";

type ProjectVisualProps = {
  projectId: Project["id"];
};

export function ProjectVisual({ projectId }: ProjectVisualProps) {
  switch (projectId) {
    case "ai-knowledge-assistant":
      return (
        <figure className="ai-knowledge-project-photo">
          <Image
            src="/images/ai_assistant_home.webp"
            alt="Software development environment representing the document AI assistant implementation."
            width={4288}
            height={2848}
            sizes="(max-width: 768px) 100vw, 46vw"
            className="ai-knowledge-project-photo__image"
          />
        </figure>
      );
    case "legal-first-pass":
      return (
        <figure className="project-visual-image">
          <Image
            src="/images/legal_first_pass_home.webp"
            alt="Contract documents being reviewed, representing the Legal First Pass contract review workflow."
            width={6240}
            height={4160}
            sizes="(max-width: 768px) 100vw, 46vw"
            className="project-visual-image__image"
          />
        </figure>
      );
    case "rag-security-thesis":
      return (
        <figure className="thesis-project-photo">
          <Image
            src="/images/thesis_home.webp"
            alt="Cybersecurity interface representing the security focus of the RAG poisoning thesis."
            width={4576}
            height={3051}
            sizes="(max-width: 768px) 100vw, 46vw"
            className="thesis-project-photo__image"
          />
        </figure>
      );
    case "infoplaza":
      return (
        <div aria-hidden="true" className="project-diagram project-diagram--infoplaza">
          <div className="infoplaza-visual__schema">
            <svg fill="none" preserveAspectRatio="none" viewBox="0 0 260 180">
              <path d="M130 92 130 32M130 92 42 144M130 92l88 52" />
            </svg>
            <span className="infoplaza-visual__entity infoplaza-visual__entity--forecast">
              Forecast
            </span>
            <span className="infoplaza-visual__entity infoplaza-visual__entity--meteorologist">
              Meteorologist
            </span>
            <span className="infoplaza-visual__entity infoplaza-visual__entity--customer">
              Customer
            </span>
            <span className="infoplaza-visual__entity infoplaza-visual__entity--contracts">
              Contracts
            </span>
          </div>
          <div className="infoplaza-visual__outcomes">
            <span>SQL KPIs</span>
            <span>Business recommendations</span>
          </div>
        </div>
      );
    default:
      return null;
  }
}
