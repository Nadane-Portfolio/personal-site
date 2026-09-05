import type {
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
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "Skills", href: "#skills" },
  { label: "Background", href: "#background" },
  { label: "Contact", href: "#contact" },
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
