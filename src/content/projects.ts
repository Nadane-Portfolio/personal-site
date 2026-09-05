import type { Project } from "@/types/content";

export const projects: readonly Project[] = [
  {
    id: "ai-knowledge-assistant",
    slug: "ai-knowledge-assistant",
    title: "AI Knowledge Assistant",
    subtitle: "Configurable RAG assistant for document-grounded Q&A",
    kind: "Client project",
    duration: "10 weeks",
    categories: ["AI", "RAG"],
    featured: true,
    displayOrder: 1,
    summary:
      "A reusable RAG assistant for synchronising Dropbox documents and answering questions with grounded, traceable context. It originated in a real client project and was later sanitised for reuse, with OpenAI-backed and local execution paths retained.",
    role: "AI & Innovation Support Intern",
    contributions: [
      "Researched possible approaches for the open-ended brief",
      "Worked on document synchronisation, retrieval, and grounded Q&A",
      "Adapted the architecture as client requirements changed",
    ],
    attributionNote:
      "This portfolio shows my contribution to a team/client project and its later sanitised adaptation; it does not represent the entire original client system.",
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
          title: "A broad client request, not a predefined solution.",
          paragraphs: [
            "Originally developed during a client project for Twinx B.V., a company in the Netherlands, this version was later sanitised and adapted into a reusable AI assistant. Sensitive and client-specific data were removed, while the core document retrieval and cloud/local execution workflow was retained.",
            "The original brief was deliberately open-ended: explore how AI could make a document-heavy workflow faster. At the start, the solution was not obvious, so the early engagement focused on understanding the workflow, researching possible approaches, and discussing ideas with the original client before committing to an implementation.",
            "The important product question was not simply where AI could be added. It was which parts of the document workflow created friction, and where an AI-assisted system could make a practical difference.",
          ],
        },
        {
          id: "problem",
          kind: "problem",
          eyebrow: "Problem",
          title: "Useful AI still depended on a cumbersome document workflow.",
          paragraphs: [
            "The original client was already experimenting with custom GPT-style tools, but keeping project knowledge current required documents to be uploaded and maintained manually. The assistant was therefore only as useful as the completeness and freshness of its knowledge base.",
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
            "I contributed across discovery and implementation as the requirements became clearer, working with the team and the original client to turn an open-ended request into a usable direction.",
          ],
          bullets: [
            "Researched possible AI and RAG approaches during discovery.",
            "Contributed to shaping the solution as requirements evolved.",
            "Worked on document synchronisation and the retrieval workflow.",
            "Worked on grounded question answering, source traceability, and conversation context.",
            "Contributed to the local execution mode after the privacy requirement emerged.",
            "Adapted the implementation as the project constraints changed.",
          ],
        },
        {
          id: "system",
          kind: "architecture",
          eyebrow: "System design",
          title: "A RAG assistant built around the project documents.",
          visual: "ai-knowledge-system",
          paragraphs: [
            "The working system synchronised project documents from Dropbox, extracted text, split it into chunks, and created embeddings for retrieval in ChromaDB. When a user asked a question, relevant project context was retrieved and supplied to the model alongside conversation context.",
            "The Chainlit interface supported grounded responses that could reference source filenames, helping users trace an answer back to the relevant project material. Conversation context was supplied alongside retrieved document context to support follow-up questions.",
            "The wider system supported PDF, DOCX, TXT, CSV, and XLSX project documents. Cloud execution used OpenAI for embeddings and generation; the local path used Sentence Transformers and Ollama.",
          ],
        },
        {
          id: "privacy",
          kind: "constraints",
          eyebrow: "Changing requirements",
          title: "Privacy changed the architecture.",
          paragraphs: [
            "During the engagement, the original client raised concerns about sending potentially sensitive project information to an external AI API. That feedback changed the technical direction rather than being treated as a reason to keep the original design fixed.",
            "I worked on a local execution path using Sentence Transformers for embeddings and Ollama for local model execution. This allowed the core document-question-answering workflow to operate without relying on OpenAI for the model path.",
            "It was a practical reminder that client requirements evolve, and that deployment constraints should shape the architecture as the project develops.",
          ],
        },
        {
          id: "reusable-version",
          kind: "implementation",
          eyebrow: "Reusable version",
          title: "Sanitised for reuse beyond the original client.",
          paragraphs: [
            "The current artifact removes sensitive data and generalises client-specific configuration while retaining a functional document-grounded assistant. It represents my implementation and contribution, rather than the entire original team project.",
            "Another organisation could adapt it to a different document workflow by tailoring its document sources, prompts, and workflow-specific settings. It is a configurable starting point, not a universal plug-and-play product.",
          ],
        },
        {
          id: "reliability",
          kind: "testing",
          eyebrow: "Reliability",
          title: "Grounding mattered more than simply generating convincing text.",
          paragraphs: [
            "Retrieval ties answers to the assistant's indexed documents, while source filenames make the response path more traceable. This grounding helps constrain answers to the available material; it does not eliminate the need for review or the possibility of incorrect model output.",
            "The system was still something a person needed to review rather than treating model output as automatically correct. Cloud and local modes also brought different operational trade-offs, which needed to be considered alongside the user workflow.",
          ],
        },
        {
          id: "outcome",
          kind: "outcome",
          eyebrow: "Outcome",
          title: "From exploration to a working prototype in ten weeks.",
          paragraphs: [
            "By the end of the client project, the work had progressed from an open-ended request into a functioning RAG-based assistant. The sanitised version retains Dropbox/document synchronisation, retrieval, grounded Q&A, and OpenAI-backed or local AI paths.",
            "Structured report generation was explored in the original engagement, but it is not a defining feature of this reusable assistant.",
            "The value was not only the prototype itself, but translating a vague business problem into a concrete, usable technical system while adapting to changing requirements.",
          ],
        },
        {
          id: "reflection",
          kind: "reflection",
          eyebrow: "Reflection",
          title: "The most important decisions were not model choices.",
          paragraphs: [
            "The project reinforced that useful AI software involves more than connecting an LLM to data. The harder work was understanding the workflow, deciding where retrieval was appropriate, responding to privacy concerns, making outputs traceable, and adjusting the solution as requirements evolved.",
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
    caseStudy: {
      sections: [
        {
          id: "context",
          kind: "context",
          eyebrow: "Context",
          title: "Routine contracts still require careful first-pass review.",
          paragraphs: [
            "Mutual NDAs are relatively standard documents, but reviewing them still means checking clauses against an organisation's preferred playbook. A reviewer may need to assess confidentiality periods, governing law, mutual obligations, IP ownership language, residuals clauses, and disclosure exceptions.",
            "I built this independent prototype to perform a structured first pass, surface relevant evidence, and help a human reviewer focus attention where judgement was needed. The objective was not to automate the lawyer out of the process.",
          ],
        },
        {
          id: "problem",
          kind: "problem",
          eyebrow: "Problem",
          title: "Not every contract decision should be delegated to the same kind of AI.",
          paragraphs: [
            "Some NDA checks, such as a confidentiality period or governing law, are objective enough to express as deterministic playbook rules. Other clauses, including IP ownership, mutuality, residuals, and permitted disclosure, require interpretation of wording and context.",
            "Using an LLM for every decision would make objective checks unnecessarily probabilistic. Using only rigid rules would struggle with clauses whose meaning depends on context. This led to a hybrid architecture.",
          ],
        },
        {
          id: "decision",
          kind: "approach",
          eyebrow: "Product decision",
          title: "Deterministic where possible. AI where judgement is useful.",
          paragraphs: [
            "The central design decision was to separate the review work. Deterministic playbook checks handle objective policy conditions with predictable outcomes that are easier to test. AI-assisted contextual interpretation is reserved for clauses where wording and surrounding context matter, using structured interpretation rather than unrestricted generation.",
            "The system combines both paths into a first-pass risk assessment. This division was an engineering choice about where each approach is most reliable and reviewable, rather than a technology checklist.",
          ],
        },
        {
          id: "workflow",
          kind: "implementation",
          eyebrow: "Review workflow",
          title: "From document upload to an evidence-backed review.",
          paragraphs: [
            "The prototype accepts batches of up to 20 PDF contracts, extracts text and facts, applies playbook-based deterministic checks, and uses AI-assisted clause interpretation where context matters. Findings are classified as green, amber, or red and can include supporting evidence and suggested amendment wording where appropriate.",
            "Matters, sessions, and document version history preserve the review workflow around those findings. The reviewer ultimately chooses whether to approve, require changes, or escalate; those decisions are not made autonomously by the system.",
          ],
        },
        {
          id: "evidence",
          kind: "testing",
          eyebrow: "Explainability",
          title: "A risk label is not useful without the reasoning behind it.",
          paragraphs: [
            "The interface was designed to show more than a colour or score. For relevant findings, it surfaces the clause or evidence supporting the finding, why the playbook or contextual review flagged it, and suggested amendment wording where appropriate.",
            "The intention is to help the reviewer inspect the system's reasoning and make their own decision, rather than asking them to accept a conclusion without context.",
          ],
        },
        {
          id: "human-control",
          kind: "constraints",
          eyebrow: "Human control",
          title: "The system stops before the final legal decision.",
          paragraphs: [
            "The prototype intentionally performs triage and first-pass analysis only. The reviewer remains responsible for approving the document, requesting changes, escalating the matter, and deciding whether the evidence and suggested wording are appropriate.",
            "Keeping that final control with the reviewer is a deliberate product decision: it keeps probabilistic outputs within a workflow where the accountable person can inspect, challenge, and act on them.",
          ],
        },
        {
          id: "state",
          kind: "architecture",
          eyebrow: "Workflow design",
          title: "Contract review is a process, not a single model call.",
          paragraphs: [
            "The prototype preserves matters and sessions, contract versions, previous review state, and session recovery rather than treating every upload as an isolated prompt. That state makes it possible to return to a review and understand how a document has changed over time.",
            "Document files are stored on the local filesystem and SQLite holds metadata. I introduced a storage abstraction so the underlying storage approach could be replaced later, without claiming distributed or production-grade persistence.",
          ],
        },
        {
          id: "security",
          kind: "challenges",
          eyebrow: "Adversarial testing",
          title: "Contract text has to be treated as untrusted input.",
          paragraphs: [
            "Uploaded contracts are external, untrusted documents. The prototype therefore included defensive evaluation around prompt-injection and instruction-jamming-style content embedded in documents, testing whether malicious or misleading instructions could interfere with the intended review behaviour.",
            "This kind of testing improves confidence in the workflow, but it does not prove the system is secure against every adversarial input. No immunity to prompt injection is claimed.",
          ],
        },
        {
          id: "evaluation",
          kind: "testing",
          eyebrow: "Evaluation",
          title: "A small evaluation helped test the end-to-end workflow.",
          paragraphs: [
            "The latest synthetic evaluation set completed 4/4 test cases end-to-end. This is a very small synthetic evaluation and should not be treated as evidence of production-level accuracy or broad legal reliability.",
            "Its value was checking that the workflow completed correctly, important playbook checks were surfaced, evidence was presented, and the human-review path remained intact.",
          ],
        },
        {
          id: "production",
          kind: "outcome",
          eyebrow: "Production direction",
          title: "A useful prototype is still a long way from production legal software.",
          paragraphs: [
            "A production deployment would need authentication and role-based access, secure document-retention policies, audit trails, stronger traceability, asynchronous processing or queues, integrations with document or matter-management systems, more robust storage, and substantially broader evaluation.",
            "It would also require ongoing monitoring of model behaviour and organisational and legal review of the playbook itself. These are future requirements, not capabilities already implemented in the prototype.",
          ],
        },
        {
          id: "outcome",
          kind: "outcome",
          eyebrow: "Outcome",
          title: "A working prototype for structured first-pass review.",
          paragraphs: [
            "The prototype can accept batches of mutual NDA PDFs, apply deterministic playbook checks, use AI for clauses requiring contextual interpretation, classify findings by risk, surface evidence, suggest amendment wording, and preserve matters and document versions.",
            "It keeps the reviewer responsible for the final outcome. It is a working prototype, not production-ready legal software.",
          ],
        },
        {
          id: "reflection",
          kind: "reflection",
          eyebrow: "Reflection",
          title: "The strongest AI systems are often deliberately hybrid.",
          paragraphs: [
            "This project reinforced that AI should not automatically replace deterministic software. For decisions expressed as clear policy, conventional rules are easier to test and more predictable. AI is most useful where interpretation genuinely depends on language and context.",
            "The product challenge is deciding where each approach belongs, then designing the workflow so probabilistic outputs remain reviewable by the person responsible for the final decision.",
          ],
        },
      ],
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
    caseStudy: {
      sections: [
        {
          id: "context",
          kind: "context",
          eyebrow: "Research context",
          title: "RAG systems inherit risk from the knowledge they retrieve.",
          paragraphs: [
            "Retrieval-augmented generation gives a model access to external knowledge by retrieving relevant documents and supplying them as context. That creates a different security surface from a model operating only from its internal parameters: manipulated content in an external knowledge base may be surfaced to the answer model.",
            "My Bachelor's thesis at the University of Twente, Measuring the Effectiveness of RAG Poisoning Attacks on Cyber Threat Intelligence Data (3 July 2026), investigated how effective this kind of poisoning can be in a controlled cyber threat intelligence setting.",
          ],
        },
        {
          id: "question",
          kind: "problem",
          eyebrow: "Research question",
          title: "When poisoned content is retrieved, does it actually change the answer?",
          paragraphs: [
            "A poisoned document appearing in retrieved context is not the same thing as a successful attack. A robust evaluation needs to distinguish retrieval exposure—whether poisoned content was retrieved—from final-answer effect—whether that content actually altered the resulting answer.",
            "This separation became a core design decision in the thesis. Retrieval rate alone is not treated as attack success.",
          ],
        },
        {
          id: "testbed",
          kind: "architecture",
          eyebrow: "Experimental system",
          title: "A controlled RAG testbed over public cyber threat intelligence.",
          paragraphs: [
            "I built a controlled testbed using the APTNotes public cyber threat intelligence corpus. Its knowledge base contained 10,249 document chunks, created with 350-word chunks and a 60-word overlap.",
            "The system used all-MiniLM-L6-v2 embeddings, ChromaDB, and cosine similarity. It was designed so clean and poisoned retrieval behaviour could be measured systematically without exposing operational poisoning code or payload construction details.",
          ],
        },
        {
          id: "models",
          kind: "approach",
          eyebrow: "Model comparison",
          title: "The answer model mattered as much as the retrieval pipeline.",
          paragraphs: [
            "The evaluation used Qwen3-30B and Llama 3.2 1B across different generator and answer-model pairings, giving four pairings in total. The purpose was not simply to compare model quality, but to observe whether answer models responded differently when exposed to poisoned retrieved context.",
          ],
        },
        {
          id: "attacks",
          kind: "challenges",
          eyebrow: "Threat model",
          title: "Five poisoning strategies, evaluated under controlled conditions.",
          paragraphs: [
            "The controlled evaluation covered black-box factual poisoning, retriever-aware factual poisoning, black-box instruction injection, retriever-aware instruction injection, and jamming or answer disruption. Some categories introduced misleading factual content, some attempted to influence model behaviour through retrieved instructions, and one focused on disrupting useful answering.",
            "The research goal was measurement, not operational exploitation. The public case study deliberately omits construction details, payloads, and example malicious instructions.",
          ],
        },
        {
          id: "experiment",
          kind: "implementation",
          eyebrow: "Experiment design",
          title: "Attack strength was tested across multiple poison budgets and retrieval depths.",
          paragraphs: [
            "The poison budget m was tested at 5, 25, and 50; retrieval depth k was also tested at 5, 25, and 50. The evaluation covered combinations of these values across all four model pairings.",
            "The clean evaluation set contained 100 generated questions answerable from the unmodified corpus. Here, m controls how much poisoned material is present and k controls how much context the retrieval system returns; the case study does not describe how that material was generated or inserted.",
          ],
        },
        {
          id: "measurement",
          kind: "testing",
          eyebrow: "Measurement",
          title: "Retrieval success and final attack success were measured separately.",
          paragraphs: [
            "The experiments measured two distinct outcomes: whether a poisoned chunk entered the retrieved context, and whether the final model answer was actually affected. A retrieval system may expose a model to malicious content without the model following or adopting it; conversely, some content may have a strong effect once retrieved.",
            "This is an evaluation-design lesson beyond this thesis: retrieval exposure and final-answer compromise should be measured separately when assessing end-to-end RAG risk.",
          ],
        },
        {
          id: "results",
          kind: "outcome",
          eyebrow: "Results",
          title: "The most disruptive strategies were not always the most sophisticated.",
          paragraphs: [
            "In this controlled evaluation, jamming produced the highest macro attack-success rate at 59.2%, followed by black-box instruction injection at 50.3%. Retriever-aware instruction injection reached 34.5%, black-box factual poisoning 22.9%, and retriever-aware factual poisoning 20.9%.",
            "These are experiment-specific macro results from this testbed, not rates that generalise to all RAG systems. No statistical-significance claim is implied.",
          ],
        },
        {
          id: "patterns",
          kind: "testing",
          eyebrow: "What changed the outcome",
          title: "Poison budget, retrieval depth and answer model all influenced vulnerability.",
          paragraphs: [
            "In the thesis experiments, attacks generally became stronger when the poison budget m was at least as large as the retrieval depth k. Retrieving poisoned content still did not guarantee final-answer compromise.",
            "The answer model had a stronger influence on attack effectiveness than the model used to generate the poisoned material. These are observations from the controlled experiments, not universal claims about every model or RAG implementation.",
          ],
        },
        {
          id: "interpretation",
          kind: "reflection",
          eyebrow: "Interpretation",
          title: "A vulnerable retriever does not necessarily imply a compromised answer.",
          paragraphs: [
            "A system can retrieve poisoned content and still resist changing its final answer. Evaluating only retrieval-level metrics can therefore overstate or misunderstand downstream risk.",
            "Final-answer behaviour still needs explicit testing because an answer model interprets retrieved context probabilistically. The end-to-end system is what matters.",
          ],
        },
        {
          id: "defence",
          kind: "constraints",
          eyebrow: "Defensive implications",
          title: "RAG security has to consider the context, not just the model.",
          paragraphs: [
            "The findings point to high-level engineering practices: preserve provenance for retrieved content, make retrieved-context composition observable, treat retrieved documents as data rather than trusted instructions, monitor unusual fallback or answer behaviour, and preserve traceability between retrieved material and final responses.",
            "Teams should evaluate retrieval and final-answer behaviour together, and test multiple model configurations rather than assuming all models respond identically. These measures do not eliminate poisoning risk.",
          ],
        },
        {
          id: "limitations",
          kind: "constraints",
          eyebrow: "Limitations",
          title: "A controlled experiment is not a universal security benchmark.",
          paragraphs: [
            "The study used one public cyber threat intelligence corpus, one embedding model, one vector-store configuration, a defined set of attack categories, two answer-model families across four pairings, 100 generated clean-answerable questions, and controlled experimental settings.",
            "The results demonstrate behaviour in this testbed, not a universal rate of vulnerability for every RAG application.",
          ],
        },
        {
          id: "outcome",
          kind: "outcome",
          eyebrow: "Outcome",
          title: "A repeatable way to measure poisoning beyond retrieval alone.",
          paragraphs: [
            "The thesis produced a controlled RAG cybersecurity testbed, a clean evaluation set, experiments across five poisoning categories, multiple poison budgets and retrieval depths, and comparisons across four model pairings.",
            "Its core contribution was separate measurement of retrieved poison and final-answer compromise, alongside defensive findings about how RAG systems respond to manipulated knowledge. It is research infrastructure, not production security software.",
          ],
        },
        {
          id: "reflection",
          kind: "reflection",
          eyebrow: "Reflection",
          title: "Security evaluation has to follow the entire AI pipeline.",
          paragraphs: [
            "The thesis reinforced that evaluating an AI system at only one layer can be misleading. Retrieval, context construction, and answer generation interact: a poisoned chunk entering context matters, but final behaviour depends on how the answer model interprets it.",
            "For AI engineering, reliability and security testing should measure the complete path from data ingestion through retrieval to final output. The work gave me experience designing controlled AI evaluations, separating metrics, analysing model behaviour, and translating experimental results into engineering implications.",
          ],
        },
      ],
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
    ],
    caseStudy: {
      sections: [
        {
          id: "context",
          kind: "context",
          eyebrow: "Context",
          title: "A large operational dataset needed structure before it could become useful.",
          paragraphs: [
            "This university team project for Infoplaza involved a large North Sea weather and operational dataset with wind speed, latitude, longitude, forecast-related information, and meteorologist-, customer-, and contract-related fields.",
            "The original data was difficult to work with directly. The team needed a structure that made operational performance and business relationships easier to analyse without inventing conclusions from a large flat dataset.",
          ],
        },
        {
          id: "problem",
          kind: "problem",
          eyebrow: "Problem",
          title: "Analysis is only as reliable as the structure underneath it.",
          paragraphs: [
            "A large flat or poorly structured dataset makes entity relationships harder to understand, duplicated information harder to avoid, and queries and KPI calculations harder to keep consistent. It also makes it more difficult to connect operational data to customers, contracts, and employees or prepare reliable data for downstream visualisation.",
            "The project therefore needed more than charts. It needed a relational model first.",
          ],
        },
        {
          id: "contribution",
          kind: "role",
          eyebrow: "My contribution",
          title: "I focused on the data foundation behind the analysis.",
          paragraphs: [
            "I worked on the relational data foundation and analysis, preparing structured data that the wider team could use for further analysis and Tableau visualisation.",
          ],
          bullets: [
            "Worked on database normalisation.",
            "Split the larger dataset into smaller related tables.",
            "Helped define relationships between key entities.",
            "Wrote SQL-based KPIs.",
            "Contributed to the final business recommendations.",
          ],
        },
        {
          id: "model",
          kind: "architecture",
          eyebrow: "Data model",
          title: "The relational model connected forecasts, people, customers and contracts.",
          paragraphs: [
            "Forecast was a central entity connected to Meteorologist and Customer. The wider relational design also included Employment Contract and Customer Contract entities.",
            "This structure separated distinct business entities, reduced duplicated information, made relationships explicit, and made SQL analysis and downstream reporting more consistent.",
          ],
        },
        {
          id: "normalisation",
          kind: "approach",
          eyebrow: "Database design",
          title: "Normalisation turned one difficult dataset into smaller, meaningful tables.",
          paragraphs: [
            "The original data was reorganised into related tables rather than treated as one large dataset. The aim was practical: reduce redundancy, create clearer entity boundaries, improve maintainability, and support cleaner joins.",
            "That made analytical queries easier to reason about while keeping the model grounded in the operational and commercial relationships represented by the data.",
          ],
        },
        {
          id: "kpis",
          kind: "implementation",
          eyebrow: "Analysis",
          title: "SQL turned the relational model into operational KPIs.",
          paragraphs: [
            "Once the database structure was in place, I used SQL to calculate KPIs and explore patterns in the data. The key benefit was being able to query relationships across forecasts, meteorologists, customers, and contracts instead of analysing disconnected fields.",
            "The relational model could then be translated into useful analysis without inventing KPI values or treating a visualisation as the analytical foundation.",
          ],
        },
        {
          id: "team",
          kind: "role",
          eyebrow: "Team workflow",
          title: "The structured data became the foundation for the wider team's visual analysis.",
          paragraphs: [
            "I worked on the relational model and SQL analysis. The wider team used the prepared data to build the Tableau dashboard, while other team members worked on predictive and Random Forest analysis.",
            "Those Tableau and Random Forest components were wider team contributions, not my individual deliverables. The project was collaborative by design.",
          ],
        },
        {
          id: "recommendations",
          kind: "outcome",
          eyebrow: "Business recommendations",
          title: "The technical work had to end in business decisions, not just queries.",
          paragraphs: [
            "I also contributed to the final business recommendations. The analysis informed discussion of seasonal patterns in the operational and weather data, workload considerations, and performance or accuracy considerations.",
            "It also highlighted a missing or unclear fixed-fee revenue field and related contract-data questions, pointing to the value of clearer contract and database fields. These were recommendations from the project, not claims that they were implemented.",
          ],
        },
        {
          id: "quality",
          kind: "challenges",
          eyebrow: "Data quality",
          title: "The model also exposed where the data structure itself needed improvement.",
          paragraphs: [
            "Structuring the data made inconsistencies and unclear fields easier to identify. Contract and revenue information, for example, can be difficult to interpret when fields are missing or their meaning is unclear.",
            "Better data modelling does not only support analysis; it can reveal where the underlying business data model needs refinement. I did not claim responsibility for changing the source systems themselves.",
          ],
        },
        {
          id: "outcome",
          kind: "outcome",
          eyebrow: "Outcome",
          title: "A clearer data foundation for analysis and business reporting.",
          paragraphs: [
            "The project produced a normalised relational data model, linked business entities, SQL-based KPI analysis, structured data suitable for downstream visualisation, and business recommendations informed by that analysis.",
            "The Tableau visualisation was created by the wider team. This was a university project, not a production deployment claim.",
          ],
        },
        {
          id: "reflection",
          kind: "reflection",
          eyebrow: "Reflection",
          title: "Good analytics often starts long before the dashboard.",
          paragraphs: [
            "This project reinforced that useful business intelligence depends on the quality of the underlying data model. A dashboard can only be as reliable as the structure, relationships, and definitions behind it.",
            "The most valuable part for me was turning a large operational dataset into a relational structure that supported consistent SQL analysis and helped the team connect technical findings to business recommendations. It strengthened my understanding of the connection between database design, analytical queries, business requirements, and downstream reporting.",
          ],
        },
      ],
    },
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
