export function HeroSystemVisual() {
  return (
    <div aria-hidden="true" className="hero-system">
      <svg
        className="hero-system__lines"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 400 320"
      >
        <path d="M82 78 200 160 318 78" />
        <path d="M82 242 200 160 318 242" />
        <path d="M82 78v164M318 78v164" />
      </svg>

      <span className="hero-system__node hero-system__node--ai">AI Systems</span>
      <span className="hero-system__node hero-system__node--software">
        Software Engineering
      </span>
      <span className="hero-system__node hero-system__node--data">Data</span>
      <span className="hero-system__node hero-system__node--product">
        Product Thinking
      </span>
      <span className="hero-system__core">Practical systems</span>
      <span className="hero-system__annotation hero-system__annotation--top">
        Problem-led
      </span>
      <span className="hero-system__annotation hero-system__annotation--bottom">
        Built to be used
      </span>
    </div>
  );
}
