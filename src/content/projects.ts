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
    caseStudy: {
      sections: [
        {
          id: "context",
          kind: "context",
          eyebrow: "Context",
          title: "A broad request, not a predefined solution.",
          paragraphs: [
            "Twinx is a subsidy consultancy where a large part of the workflow depends on project documentation. The initial brief was deliberately open-ended: explore how AI could make that work faster.",
            "At the start, the solution was not obvious. Our team had limited experience with retrieval-augmented generation, so the early engagement focused on understanding the workflow, researching possible approaches, and discussing ideas with Twinx before committing to an implementation.",
            "The important product question was not simply where AI could be added. It was which parts of the document workflow created friction, and where an AI-assisted system could make a practical difference.",
          ],
        },
        {
          id: "problem",
          kind: "problem",
          eyebrow: "Problem",
          title: "Useful AI still depended on a cumbersome document workflow.",
          paragraphs: [
            "Twinx was already experimenting with custom GPT-style tools, but keeping project knowledge current required documents to be uploaded and maintained manually. The assistant was therefore only as useful as the completeness and freshness of its knowledge base.",
            "There was also a reliability concern. A useful system could not simply produce fluent answers; it needed to ground responses in documents belonging to the project and make it easier to understand where information came from.",
            "This led us toward a RAG-based approach in which project documentation could be synchronised, indexed, and retrieved when answering questions.",
          ],
        },
        {
          id: "contribution",
          kind: "role",
          eyebrow: "My contribution",
          title: "I helped turn the open brief into a concrete product direction.",
          paragraphs: [
            "I contributed across discovery and implementation as the requirements became clearer, working with the team and Twinx to turn an open-ended request into a usable direction.",
          ],
          bullets: [
            "Researched possible AI and RAG approaches during discovery.",
            "Contributed to shaping the solution as requirements evolved.",
            "Worked on document synchronisation and the retrieval workflow.",
            "Worked on grounded question answering and structured first-draft report generation.",
            "Contributed to the local execution mode after the privacy requirement emerged.",
            "Iterated with Twinx as the project constraints changed.",
          ],
        },
        {
          id: "system",
          kind: "architecture",
          eyebrow: "System design",
          title: "A RAG assistant built around the project documents.",
          visual: "twinx-system",
          paragraphs: [
            "The working system synchronised project documents from Dropbox, extracted text, split it into chunks, and created embeddings for retrieval in ChromaDB. When a user asked a question, relevant project context was retrieved and supplied to the model alongside conversation context.",
            "The Chainlit interface supported grounded responses that could reference source filenames, helping users trace an answer back to the relevant project material. The same retrieved context also supported structured first-draft report generation.",
            "The wider system supported PDF, DOCX, TXT, CSV, and XLSX project documents. Cloud execution used OpenAI for embeddings and generation; the local path used Sentence Transformers and Ollama.",
          ],
        },
        {
          id: "privacy",
          kind: "constraints",
          eyebrow: "Changing requirements",
          title: "Privacy changed the architecture.",
          paragraphs: [
            "During the engagement, Twinx raised concerns about sending potentially sensitive project information to an external AI API. That feedback changed the technical direction rather than being treated as a reason to keep the original design fixed.",
            "I worked on a local execution path using Sentence Transformers for embeddings and Ollama for local model execution. This allowed the core document-question-answering workflow to operate without relying on OpenAI for the model path.",
            "It was a practical reminder that client requirements evolve, and that deployment constraints should shape the architecture as the project develops.",
          ],
        },
        {
          id: "reporting",
          kind: "implementation",
          eyebrow: "Beyond question answering",
          title: "The assistant also helped turn project knowledge into first-draft reports.",
          paragraphs: [
            "Twinx's workflow involved producing structured reports from project information. I worked on a report-generation capability that used retrieved project context to create structured Dutch DOCX first drafts.",
            "A particularly important behaviour was surfacing missing information explicitly rather than confidently filling gaps with invented content. The generated report remained a draft for human review, not an autonomous final deliverable.",
          ],
        },
        {
          id: "reliability",
          kind: "testing",
          eyebrow: "Reliability",
          title: "Grounding mattered more than simply generating convincing text.",
          paragraphs: [
            "Retrieval tied answers to the project's indexed documents, while source filenames made the response path more traceable. In report generation, missing information was surfaced instead of being silently fabricated.",
            "The system was still something a person needed to review rather than treating model output as automatically correct. Cloud and local modes also brought different operational trade-offs, which needed to be considered alongside the user workflow.",
          ],
        },
        {
          id: "outcome",
          kind: "outcome",
          eyebrow: "Outcome",
          title: "From exploration to a working prototype in ten weeks.",
          paragraphs: [
            "By the end of the client project, the work had progressed from an open-ended request into a functioning RAG-based assistant. It could synchronise project documentation, retrieve relevant knowledge, support grounded Q&A, and create structured first-draft reports using either OpenAI-backed or local AI paths.",
            "The value was not only the prototype itself, but translating a vague business problem into a concrete, usable technical system while adapting to changing requirements.",
          ],
        },
        {
          id: "reflection",
          kind: "reflection",
          eyebrow: "Reflection",
          title: "The most important decisions were not model choices.",
          paragraphs: [
            "The project reinforced that useful AI software involves more than connecting an LLM to data. The harder work was understanding the workflow, deciding where retrieval was appropriate, responding to privacy concerns, making outputs traceable, and adjusting the solution as Twinx learned what it needed.",
            "It also gave me practical experience with an initially unfamiliar AI architecture and with turning research into a functioning system within a real client engagement.",
          ],
        },
      ],
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
