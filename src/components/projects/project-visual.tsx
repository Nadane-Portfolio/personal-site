import Image from "next/image";
import type { Project } from "@/types/content";

type ProjectVisualProps = {
  projectId: Project["id"];
};

export function ProjectVisual({ projectId }: ProjectVisualProps) {
  switch (projectId) {
    case "ai-knowledge-assistant":
      return (
        <div aria-hidden="true" className="project-diagram project-diagram--ai-knowledge">
          <span className="project-diagram__annotation">Shared knowledge layer</span>
          <div className="ai-knowledge-visual__sources">
            <span>Project documents</span>
            <span>Dropbox</span>
          </div>
          <div className="ai-knowledge-visual__knowledge">
            <span>Ingestion</span>
            <span>Indexed knowledge</span>
          </div>
          <div className="ai-knowledge-visual__retrieval">Retrieval</div>
          <div className="ai-knowledge-visual__execution">
            <span>Local AI</span>
            <span>OpenAI</span>
          </div>
          <div className="ai-knowledge-visual__outputs">
            <span>Grounded Q&amp;A</span>
            <span>Source traceability</span>
          </div>
        </div>
      );
    case "legal-first-pass":
      return (
        <div className="project-visual-image">
          <Image
            src="/images/legal-first-pass-workflow.png"
            alt="Legal First Pass workflow showing a mutual NDA moving through structured extraction, deterministic playbook checks and AI contextual review, followed by combined issue triage, risk findings and final lawyer review."
            width={1536}
            height={1024}
            className="project-visual-image__image"
          />
        </div>
      );
    case "rag-security-thesis":
      return (
        <div aria-hidden="true" className="project-diagram project-diagram--thesis">
          <div className="thesis-visual__header">
            <span>Defensive evaluation</span>
            <span>RAG testbed</span>
          </div>
          <div className="thesis-visual__stages">
            <span>Threat-intelligence corpus</span>
            <span>Retrieval stage</span>
            <span>Model answer stage</span>
          </div>
          <div className="thesis-visual__measures">
            <div>
              <span>Measure 01</span>
              <strong>Was poisoned content retrieved?</strong>
            </div>
            <div>
              <span>Measure 02</span>
              <strong>Did it change the final answer?</strong>
            </div>
          </div>
        </div>
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
