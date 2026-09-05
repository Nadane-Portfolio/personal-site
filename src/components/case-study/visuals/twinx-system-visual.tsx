import Image from "next/image";

export function TwinxSystemVisual() {
  return (
    <figure className="twinx-system-visual">
      <Image
        src="/images/twinx-system-overview.png"
        alt="Twinx RAG system overview showing project documents flowing through ingestion, ChromaDB and retrieval into grounded question answering and structured report drafts, with OpenAI-backed and local execution paths."
        width={1792}
        height={1024}
        sizes="(max-width: 768px) 100vw, 1200px"
        className="twinx-system-visual__image"
        priority={false}
      />
    </figure>
  );
}