import Image from "next/image";

export function AiKnowledgeSystemVisual() {
  return (
    <figure className="ai-knowledge-system-visual">
      <Image
        src="/images/ai-knowledge-system-overview.png"
        alt="Existing system overview from the original client engagement, showing document ingestion, ChromaDB retrieval, grounded question answering, and legacy report-draft material."
        width={1792}
        height={1024}
        sizes="(max-width: 768px) 100vw, 1200px"
        className="ai-knowledge-system-visual__image"
        priority={false}
      />
    </figure>
  );
}
