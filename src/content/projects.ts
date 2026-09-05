import type { Project } from "@/types/content";

export const projects: readonly Project[] = [
  {
    id: "twinx",
    slug: "twinx-ai-knowledge-assistant",
    title: "Twinx",
    subtitle: "AI Knowledge & Reporting Assistant",
    kind: "Client project",
    duration: "10 weeks",
    categories: ["AI", "RAG"],
    featured: true,
    displayOrder: 1,
    summary:
      "Turned an open-ended request to make document-heavy work faster with AI into a working RAG-based assistant. After researching possible approaches and iterating with Twinx on changing requirements, I worked on a system that synchronises project documents, supports grounded Q&A, and generates structured first-draft reports, with both OpenAI and fully local execution modes.",
    role: "AI & Innovation Support Intern",
    contributions: [
      "Researched possible approaches for the open-ended brief",
      "Worked on document synchronisation, grounded Q&A, and structured first-draft reporting",
      "Iterated with Twinx as requirements changed",
    ],
    attributionNote:
      "This was a team/client project. The portfolio must not imply that I built every component personally, and newsletter functionality is not presented as my contribution.",
    technology: [
      "Python",
      "RAG",
      "Chainlit",
      "ChromaDB",
      "OpenAI",
      "Ollama",
      "Dropbox API",
    ],
    source: {
      visibility: "private",
      label: "Private repository",
      notice: "Private repository — source access available on request.",
    },
  },
  {
    id: "legal-first-pass",
    slug: "legal-first-pass",
    title: "Legal First Pass",
    subtitle: "AI-Assisted Contract Review",
    kind: "Independent project",
    categories: ["AI", "Legal workflow"],
    featured: true,
    displayOrder: 2,
    summary:
      "Built a first-pass review prototype for routine mutual NDAs that combines deterministic playbook checks with AI for clauses requiring contextual interpretation. The system triages contracts by risk, shows supporting evidence and suggested wording, preserves matter/version history, and keeps the lawyer responsible for the final decision.",
    role: "Independent project builder",
    contributions: [
      "Built the first-pass review prototype for routine mutual NDAs",
      "Combined deterministic playbook checks with AI-assisted contextual interpretation",
      "Designed the workflow to preserve lawyer responsibility for the final decision",
    ],
    technology: [
      "Python",
      "Streamlit",
      "OpenAI API",
      "Document Analysis",
      "AI Evaluation",
    ],
    source: {
      visibility: "private",
      label: "Private repository",
      notice: "Private repository — source access available on request.",
    },
  },
  {
    id: "rag-security-thesis",
    slug: "rag-security-thesis",
    title: "RAG Security Thesis",
    subtitle: "Poisoning Attacks on Cyber Threat Intelligence",
    kind: "Bachelor's thesis",
    categories: ["AI Security", "RAG Evaluation"],
    featured: true,
    displayOrder: 3,
    summary:
      "Built a controlled cybersecurity RAG testbed to measure how poisoned knowledge affects both retrieval and final model behaviour. Evaluated five attack types using Qwen and Llama across different poison budgets and retrieval depths, separating whether malicious content was retrieved from whether it actually changed the answer.",
    role: "Bachelor's thesis researcher",
    contributions: [
      "Built a controlled cybersecurity RAG testbed",
      "Evaluated retrieval and final-answer behaviour separately",
      "Tested five attack types across different poison budgets and retrieval depths using Qwen and Llama",
    ],
    attributionNote:
      "This is defensive research. Public case-study content may explain methodology, architecture, and findings, but must not disclose operational attack-building code, reproduction instructions, or implementation details that would make attacks easier to execute.",
    technology: [
      "Python",
      "RAG",
      "ChromaDB",
      "Sentence Transformers",
      "Qwen",
      "Llama",
      "AI Evaluation",
    ],
    source: {
      visibility: "restricted",
      label: "Private defensive-research repository",
      notice:
        "Private defensive-research repository — operational source code is not published.",
    },
  },
  {
    id: "infoplaza",
    slug: "infoplaza-data-modelling",
    title: "Infoplaza",
    subtitle: "Data Modelling & Business Intelligence",
    kind: "Company project",
    categories: ["Data", "SQL", "Business Intelligence"],
    featured: true,
    displayOrder: 4,
    summary:
      "Turned a large operational weather dataset into a structured relational model covering forecasts, meteorologists, customers, and contracts. I worked on database normalisation, SQL-based KPIs, and the final business recommendations, while the wider team used the prepared data to build the Tableau dashboard.",
    role: "Data modelling, KPI, and business-recommendation contributor",
    contributions: [
      "Worked on relational database normalisation",
      "Worked on SQL-based KPIs",
      "Contributed to final business recommendations",
    ],
    attributionNote:
      "The wider team used the prepared data to build the Tableau dashboard; the portfolio must not imply that I built it alone.",
    technology: [
      "SQL",
      "Relational Databases",
      "Data Normalisation",
      "KPIs",
      "Business Intelligence",
      "Tableau",
    ],
  },
  {
    id: "solarmotion",
    slug: "solarmotion-odoo-prototype",
    title: "SolarMotion",
    subtitle: "Odoo ERP & E-Commerce Prototype",
    kind: "Team project",
    categories: ["ERP", "E-commerce", "Product"],
    featured: false,
    displayOrder: 5,
    summary:
      "Focused on the Odoo implementation, product configuration, and technical product research, including calculations for compatible solar-panel and battery combinations, while also serving as project manager during part of the project.",
    role: "Odoo implementation, technical research, and project-management contributor",
    contributions: [
      "Focused on Odoo implementation and product configuration",
      "Conducted technical product research, including compatible solar-panel and battery calculations",
      "Served as project manager during part of the project",
    ],
    technology: [
      "Odoo",
      "ERP",
      "E-commerce",
      "Product Configuration",
      "Project Management",
    ],
  },
  {
    id: "actfact",
    slug: "actfact-enterprise-dashboard",
    title: "ActFact",
    subtitle: "Enterprise Dashboard Application",
    kind: "Team project",
    categories: ["Frontend", "Software Engineering"],
    featured: false,
    displayOrder: 6,
    summary:
      "Worked primarily on the frontend of an enterprise data-management application for creating and sharing dashboards while staying involved with wider application integration.",
    role: "Frontend and application-integration contributor",
    contributions: [
      "Worked primarily on the frontend of the enterprise data-management application",
      "Stayed involved with wider application integration",
    ],
    attributionNote:
      "The portfolio must not imply that I personally built all backend, database, or permission functionality.",
    technology: [
      "JavaScript",
      "HTML",
      "CSS",
      "Java",
      "Figma",
      "Git",
      "Team Development",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const supportingProjects = projects.filter(
  (project) => !project.featured,
);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
