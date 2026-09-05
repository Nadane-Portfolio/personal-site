import type { SkillGroup } from "@/types/content";

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "ai-llm-systems",
    title: "AI & LLM Systems",
    description:
      "Building and evaluating AI-assisted systems using retrieval, APIs and local models.",
    emphasis: "primary",
    skills: [
      "RAG",
      "LLMs",
      "Embeddings",
      "Semantic search",
      "Vector databases",
      "Prompt design",
      "LLM evaluation",
      "OpenAI API",
      "Local LLMs",
      "ChromaDB",
      "Sentence Transformers",
      "Ollama",
      "Chainlit",
      "Streamlit",
    ],
  },
  {
    id: "software-development",
    title: "Software Development",
    description:
      "General-purpose programming, web development, APIs, testing and version-controlled team workflows.",
    emphasis: "standard",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "C",
      "C++",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
      "GitLab",
      "Testing",
      "TDD",
      "REST APIs",
    ],
  },
  {
    id: "data-backend",
    title: "Data & Backend",
    description:
      "Relational data modelling, SQL, backend integration and analysis-oriented systems.",
    emphasis: "standard",
    skills: [
      "SQL",
      "PostgreSQL",
      "Relational database design",
      "Data normalisation",
      "JDBC",
      "Client-server systems",
      "Dashboards",
      "Data visualisation",
    ],
  },
  {
    id: "business-product-systems",
    title: "Business & Product Systems",
    description:
      "Connecting technical implementation with workflows, requirements and operational systems.",
    emphasis: "standard",
    skills: [
      "Odoo",
      "ERP systems",
      "BPMN",
      "Mendix",
      "UML",
      "Scrum",
      "Sprint planning",
      "Requirements and workflow analysis",
    ],
  },
];
