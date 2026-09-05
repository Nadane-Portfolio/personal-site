import type {
  AboutContent,
  Availability,
  ExternalLink,
  NavigationItem,
} from "@/types/content";

export const siteIdentity = {
  name: "Andrei George Nadane",
  shortName: "Andrei Nadane",
  role: "AI Product Engineer",
  heroStatement:
    "I build AI-powered tools and software that turn complex business problems into practical, reliable systems.",
} as const;

export const availability: Availability = {
  location: "Greater Manchester, UK",
  preference: "Remote preferred",
  opportunities: "Open to hybrid and on-site opportunities around Manchester",
};

export const aboutContent: AboutContent = {
  paragraphs: [
    "I’m a Business Information Technology graduate from the University of Twente, focused on building practical AI and software systems. My experience spans RAG, document analysis, AI evaluation, workflow automation, databases and business systems.",
    "I enjoy working on problems where the solution is not obvious at the start — understanding how a process works, identifying what is actually slowing people down, and then choosing the right technology to improve it. I’m particularly interested in AI systems that need to be useful outside of a demo: grounded in real data, tested properly, and designed around the people who will use them.",
  ],
  process: ["Understand", "Choose", "Build", "Test", "Refine"],
};

export const contactContent = {
  intro:
    "I’m open to AI product engineering, software engineering and adjacent technical roles where I can work on real problems, build practical systems and keep learning.",
} as const;

export const contactLinks: readonly ExternalLink[] = [
  {
    label: "Email me",
    href: "mailto:a.g.nadane@gmail.com",
    kind: "email",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andrei-george-nadane/",
    kind: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/Nadane-Portfolio",
    kind: "github",
  },
];

export const navigation: readonly NavigationItem[] = [
  { label: "Work", href: "/#work" },
  { label: "Approach", href: "/#approach" },
  { label: "Skills", href: "/#skills" },
  { label: "Background", href: "/#background" },
  { label: "Contact", href: "/#contact" },
];

export const heroVisualGuidance = {
  description:
    "A restrained abstract composition that suggests the relationship between AI systems, software engineering, data, and product thinking.",
  avoid: [
    "Fake terminal or code content",
    "AI-brain imagery",
    "Neural-network clichés",
    "Decorative gimmicks",
  ],
} as const;
