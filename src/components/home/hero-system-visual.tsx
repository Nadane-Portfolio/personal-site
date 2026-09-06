import Image from "next/image";

export function HeroSystemVisual() {
  return (
    <div className="hero-system-visual">
      <Image
        src="/images/from-problem-to-practical-systems.png"
        alt="Diagram showing business problems, product thinking, data and AI engineering combining into practical systems that produce reliable workflows and useful tools."
        width={1536}
        height={1024}
        sizes="(max-width: 768px) 100vw, 560px"
        className="hero-system-visual__image"
        priority
      />
    </div>
  );
}