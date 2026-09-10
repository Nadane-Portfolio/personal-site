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
    homepageFeatured: true,
    caseStudyAvailable: true,
    showCaseStudySummary: false,
    displayOrder: 1,
    summary:
      "A reusable RAG assistant for synchronising Dropbox documents and answering questions with grounded, traceable context. It originated in a real client project and was later sanitised for reuse, with OpenAI-backed and local execution paths retained.",
    homepageSummary:
      "A configurable RAG assistant that grew out of a 10-week university internship project with Twinx B.V., a Dutch project and subsidy consultancy. I researched how AI could reduce friction in document-heavy workflows and worked on a system that synchronises Dropbox documents, retrieves grounded context through ChromaDB, and supports question answering through Chainlit. When privacy became a constraint, I also worked on a local execution path using Sentence Transformers and Ollama. The version shown here was later sanitised and adapted into a reusable assistant.",
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
      label: "Source repository",
      notice: "Private — access available on request.",
      repositoryUrl: "https://github.com/Nadane-Portfolio/rag-assistant",
    },
    caseStudy: {
      sections: [
        {
          id: "origin",
          kind: "context",
          eyebrow: "Origin",
          title: "Ten weeks from an open brief to a working RAG assistant.",
          paragraphs: [
            "This project began as a ten-week university client assignment with Twinx B.V., a Dutch innovation and subsidy consultancy whose work depends heavily on project documentation. Their existing AI workflows were useful, but keeping project knowledge current still required employees to manually select, upload and maintain documents.",
            "I started by researching how that workflow could be improved rather than assuming RAG was the answer. The early part of the project involved learning the architecture, comparing possible AI integrations, investigating Dropbox connectivity, and working with the team and Twinx to define the requirements. The project then moved from research into implementation of a document-based RAG system with both local and API-backed execution.",
            "The version shown here was later sanitised into my portfolio implementation. Client data, credentials and project-specific material were removed while the reusable document retrieval, Q&A and report-generation workflow was retained.",
          ],
        },
        {
          id: "functionality",
          kind: "problem",
          eyebrow: "Functionality",
          title: "One indexed knowledge layer supports two practical workflows.",
          paragraphs: [
            "The assistant synchronises project folders from Dropbox and turns their documents into searchable project knowledge. Once a project has been ingested, the same indexed data can be used for two main tasks: document-grounded Q&A and structured report generation.",
            "In Q&A mode, a user selects a project and asks questions against its indexed documents, with source files surfaced for traceability. In report mode, the system retrieves from the same project knowledge and generates a structured English Word document. The interface is implemented in Chainlit, and the system supports English and Dutch documents and questions.",
          ],
        },
        {
          id: "system-architecture",
          kind: "implementation",
          eyebrow: "System architecture",
          title: "Sync once, index once, reuse the project knowledge.",
          paragraphs: [
            "A sync service pulls top-level project folders from Dropbox into local project data. During ingestion, supported PDF, DOCX, TXT, CSV and XLSX files are processed and converted into chunks. Embeddings are created for those chunks and stored in Chroma so that later requests can retrieve relevant project context rather than repeatedly processing the raw files.",
            "The execution layer is interchangeable. Local mode uses Sentence Transformers for embeddings and Ollama for model execution. Non-local mode uses OpenAI for both embeddings and generation. Both execution paths feed the same Q&A and report workflows through the Chainlit application.",
            "Under the hood: Python 3.11 · Chainlit · Dropbox API · Chroma · Sentence Transformers · Ollama · OpenAI API · Node.js / docx",
          ],
        },
        {
          id: "setup-application-flow",
          kind: "architecture",
          eyebrow: "Setup & application flow",
          title: "The assistant has to be prepared before it can answer.",
          paragraphs: [
            "There are two different stages to using the application. The first is environment configuration. Dropbox access is configured with an app key, secret, refresh token and root path. Local execution requires an Ollama endpoint and model, while the non-local path requires OpenAI model and API configuration.",
            "After the application starts, the runtime workflow is deliberately sequential:",
            "choose execution mode → sync → ingest → choose Q&A or report → select project → interact",
            "/sync downloads the available project folders from Dropbox. /ingest then processes those files and builds or rebuilds the vector index. Only after that preparation is the project available for Q&A or report generation. If the project documents change, synchronisation is followed by ingestion again so the indexed knowledge reflects the updated files.",
            "The gallery below walks through that flow in the actual Chainlit application.",
          ],
          gallery: [
            {
              src: "/images/ai_assistant/ai_assistant_flow.webp",
              title: "System architecture",
              caption:
                "Document synchronisation, ingestion, retrieval, grounded Q&A, report generation, and the local/cloud execution paths.",
              alt: "Architecture overview of the AI Knowledge Assistant showing Dropbox document synchronisation, ingestion, ChromaDB retrieval, grounded question answering, report drafting, and local or cloud model execution.",
              width: 1448,
              height: 1086,
            },
            {
              src: "/images/ai_assistant/demo_1.webp",
              title: "Execution mode",
              caption:
                "The assistant can start in local mode or use the non-local API-backed path depending on the deployment requirement.",
              alt: "Chainlit interface asking the user to choose between local and non-local execution modes.",
              width: 1920,
              height: 572,
            },
            {
              src: "/images/ai_assistant/demo_2.webp",
              title: "Project-scoped Q&A",
              caption:
                "After choosing Q&A, the user selects which synchronised project knowledge base to work with.",
              alt: "Chainlit interface showing local mode, Q&A selection, and available project knowledge bases.",
              width: 779,
              height: 763,
            },
            {
              src: "/images/ai_assistant/demo_3_local_response.webp",
              title: "Grounded local response",
              caption:
                "A question answered from retrieved project context in local mode, with the source document shown for traceability.",
              alt: "Local-mode grounded question answering in the AI Knowledge Assistant with an answer and cited source document.",
              width: 775,
              height: 871,
            },
            {
              src: "/images/ai_assistant/demo_4_api_response.webp",
              title: "API-backed response",
              caption:
                "The same document-grounded workflow can use the API-backed execution path while retaining source traceability.",
              alt: "API-backed question answering in the AI Knowledge Assistant showing a detailed grounded answer and source document.",
              width: 642,
              height: 795,
            },
            {
              src: "/images/ai_assistant/demo_5_help_status.webp",
              title: "Operational controls",
              caption:
                "Help and status commands expose the current mode, task, project state, available projects, and maintenance actions.",
              alt: "AI Knowledge Assistant help menu and system status showing execution mode, current task, available projects, and commands.",
              width: 641,
              height: 802,
            },
            {
              src: "/images/ai_assistant/demo_6_report.webp",
              title: "Report generation",
              caption:
                "The report workflow retrieves project knowledge and produces a downloadable structured first draft for human review.",
              alt: "Chainlit report-generation workflow showing project selection and a completed downloadable report.",
              width: 788,
              height: 756,
            },
          ],
        },
        {
          id: "q-and-a-reports",
          kind: "constraints",
          eyebrow: "Q&A & reports",
          title: "Two outputs built on the same retrieval layer.",
          paragraphs: [
            "For Q&A, the selected project's indexed knowledge is searched for relevant context before the model generates an answer. The response can include the source documents used during retrieval, making it easier to trace an answer back to the underlying project material.",
            "Report generation reuses the same prepared knowledge rather than creating a separate document pipeline. Instead of answering an individual question, the report service generates structured report content from the selected project's documents and exports the result as a .docx file.",
          ],
        },
        {
          id: "execution-modes",
          kind: "outcome",
          eyebrow: "Execution modes",
          title: "Same application, different model boundary.",
          paragraphs: [
            "Local and non-local execution use the same application workflow but move the AI boundary.",
            "In local mode, embeddings are created with Sentence Transformers and generation runs through Ollama. This avoids OpenAI API usage and keeps model execution on the local machine, with speed and output quality dependent on the available hardware and model.",
            "In non-local mode, embeddings and generation use OpenAI. This is generally faster and avoids relying on local model hardware, but it requires an API key and introduces usage cost. Supporting both paths originally became important when privacy and deployment requirements emerged during the client project.",
          ],
        },
        {
          id: "operations-limitations",
          kind: "reflection",
          eyebrow: "Operations & limitations",
          title: "The non-AI parts matter too.",
          paragraphs: [
            "The application also has operational commands around the main AI workflow. /status exposes the current mode, task, selected project and setup state; /help explains the available commands; /home returns to the main flow; and /delete removes stored project data when it is no longer needed.",
            "The current implementation also has deliberate trade-offs. Large document sets take longer to ingest, local performance depends heavily on the machine and model, report generation is more resource-intensive than Q&A, and OpenAI cost increases with document volume and generation activity. The supported ingestion formats are currently PDF, DOCX, TXT, CSV and XLSX.",
          ],
        },
        {
          id: "portfolio-version",
          kind: "outcome",
          eyebrow: "Portfolio version",
          title: "Sanitised, but still functional.",
          paragraphs: [
            "The portfolio repository excludes credentials, private client data, generated vector databases, generated reports and project-specific test documents. What remains is the reusable application architecture: Dropbox synchronisation, document ingestion, vector retrieval, local/OpenAI execution, grounded Q&A and structured report generation.",
            "It is not presented as a universal plug-and-play product. It is a working foundation that can be adapted to another document workflow by changing the configuration, data source and application-specific behaviour.",
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
    homepageFeatured: true,
    caseStudyAvailable: true,
    showCaseStudySummary: false,
    displayOrder: 2,
    summary:
      "Built a first-pass review prototype for routine mutual NDAs that combines deterministic playbook checks with AI for clauses requiring contextual interpretation. The system triages contracts by risk, shows supporting evidence and suggested wording, preserves matter/version history, and keeps the lawyer responsible for the final decision.",
    homepageSummary:
      "An independent prototype for structured first-pass review of routine mutual NDAs. I deliberately combined deterministic playbook checks for objective rules with AI-assisted interpretation for clauses that depend on context. The system surfaces risk, evidence and suggested wording while preserving matter and version history, with the reviewer retaining the final decision. I also tested reliability and adversarial behaviour around untrusted contract content.",
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
      label: "Source repository",
      notice: "Private — access available on request.",
      repositoryUrl: "https://github.com/Nadane-Portfolio/legal-first-pass",
    },
    caseStudy: {
      sections: [
        {
          id: "context",
          kind: "context",
          eyebrow: "Context",
          title: "A first-pass layer for routine mutual NDAs.",
          paragraphs: [
            "Small legal teams repeatedly review routine mutual NDAs where many clauses are familiar, but every document still requires human attention. The goal of Legal First Pass is not to make legal decisions automatically. It is to perform a structured first pass so the reviewer can focus on contracts and clauses that actually need judgement.",
            "I built the project as an independent prototype around that workflow: upload one or more NDAs, extract the relevant contract facts, compare them against a playbook, surface contextual issues, and present the findings in a form a lawyer can inspect before making the final decision.",
          ],
        },
        {
          id: "review-engine",
          kind: "approach",
          eyebrow: "Review engine",
          title: "Rules where rules are enough. AI where language matters.",
          paragraphs: [
            "The review pipeline starts with structured extraction of key contract facts. From there, I deliberately split the analysis into two paths rather than asking a model to make every decision.",
            "Objective policy checks — such as confidentiality duration and governing law — are evaluated deterministically against the playbook. Clauses whose meaning depends on wording and context — including IP ownership, mutuality, residual knowledge and permitted disclosure — are sent through AI-assisted contextual review.",
            "The findings from both paths are then combined into the same triage result. This makes predictable rules testable as normal software while reserving probabilistic model behaviour for the parts of the contract where language understanding is actually useful.",
            "Under the hood: Python · Streamlit · OpenAI API · YAML playbook · SQLite · local document storage",
          ],
        },
        {
          id: "application-workflow",
          kind: "implementation",
          eyebrow: "Application workflow",
          title: "From batch upload to evidence-backed triage.",
          paragraphs: [
            "The prototype accepts batches of up to 20 text-based PDF NDAs. After analysis, each contract is classified as green, amber or red according to the issues found.",
            "A risk label by itself is not enough, so relevant findings include the reason for the issue, supporting contract evidence and suggested amendment wording where appropriate. The reviewer can also inspect the individual checks that passed or failed instead of relying on a single opaque model conclusion.",
            "From that review state, a contract can be saved as a new matter, attached as a later version of an existing matter, or discarded.",
          ],
          gallery: [
            {
              src: "/images/legal_first_pass/legal_first_pass_flow.webp",
              title: "Review architecture",
              caption:
                "Structured extraction feeds deterministic policy checks and AI-assisted contextual review before findings are combined for human decision.",
              alt: "Legal First Pass architecture showing a mutual NDA moving through structured extraction, deterministic playbook checks, AI contextual review, combined issue triage, risk findings and final lawyer decision.",
              width: 1156,
              height: 1015,
            },
            {
              src: "/images/legal_first_pass/demo_1.webp",
              title: "Application home",
              caption:
                "The Streamlit interface separates new analysis, saved matters and unfinished-session recovery.",
              alt: "Legal First Pass home screen with navigation for analysing NDAs, opening saved matters and resuming the last session.",
              width: 1920,
              height: 927,
            },
            {
              src: "/images/legal_first_pass/demo_2.webp",
              title: "Batch analysis",
              caption:
                "Multiple mutual NDAs can be uploaded and processed in the same analysis run.",
              alt: "Legal First Pass analysing four uploaded PDF contracts with progress shown during batch processing.",
              width: 1920,
              height: 927,
            },
            {
              src: "/images/legal_first_pass/demo_3.webp",
              title: "Risk findings",
              caption:
                "Contracts are triaged by risk while relevant findings expose reasoning, evidence and suggested wording.",
              alt: "Legal First Pass last-session review showing high-priority contract findings, supporting evidence and suggested amendment wording.",
              width: 1920,
              height: 3576,
            },
            {
              src: "/images/legal_first_pass/demo_4.webp",
              title: "Playbook checks and filing",
              caption:
                "The reviewer can inspect individual checks before deciding whether to save the analysis as a matter or discard it.",
              alt: "Legal First Pass showing passed and failed contract checks together with controls for saving the reviewed NDA as a new matter.",
              width: 1920,
              height: 927,
            },
            {
              src: "/images/legal_first_pass/demo_5.webp",
              title: "Saved matter and lawyer decision",
              caption:
                "Saved matters retain findings, source evidence and the lawyer's recorded decision.",
              alt: "Legal First Pass saved matter showing high-risk findings, evidence, suggested wording and lawyer decision controls.",
              width: 1920,
              height: 3286,
            },
            {
              src: "/images/legal_first_pass/demo_6.webp",
              title: "Revised contract",
              caption:
                "A revised NDA can be reviewed independently and then attached as a new version of an existing matter.",
              alt: "Legal First Pass showing a revised mutual NDA with no material deviations and an option to add it as a new version of an existing matter.",
              width: 1920,
              height: 1459,
            },
            {
              src: "/images/legal_first_pass/demo_7.webp",
              title: "Version history",
              caption:
                "Matter history preserves multiple negotiation versions and their review outcomes.",
              alt: "Legal First Pass saved matter showing two contract versions, including an approved revised version and the earlier high-risk version.",
              width: 1920,
              height: 2097,
            },
          ],
        },
        {
          id: "matters-state",
          kind: "architecture",
          eyebrow: "Matters & state",
          title: "Contract review is a process, not a single model call.",
          paragraphs: [
            "The workflow does not end when a model returns findings. A saved contract becomes a matter with a stable internal UUID, while the reviewer works with a readable matter name. Revised contracts can then be attached as later versions even when their filenames change, preserving negotiation history instead of treating each upload as an unrelated document.",
            "Unfinished analyses are kept in a temporary Last Session buffer so the reviewer can return to them before deciding whether to file or discard them.",
            "In the prototype, PDF documents are stored on the local filesystem while SQLite holds matter and version metadata. Document persistence is isolated behind a DocumentStorage interface, so the local filesystem is an implementation choice rather than a requirement of the review pipeline. A production adapter could instead target an approved document repository, CLM platform, SharePoint or object storage.",
          ],
        },
        {
          id: "security-evaluation",
          kind: "testing",
          eyebrow: "Security & evaluation",
          title: "Contract text is data, not trusted instruction.",
          paragraphs: [
            "Uploaded contracts are treated as untrusted documents. The model is explicitly instructed not to follow instructions embedded inside the contract text, because a document can contain text designed to manipulate the review process.",
            "I included an adversarial NDA containing repeated fake system-style instructions and policy overrides. In the current evaluation, those instructions did not prevent the underlying high-risk IP assignment from being surfaced. That is a controlled test result, not a claim that the system is immune to prompt injection.",
            "The current synthetic evaluation suite runs the complete path from PDF through extraction, deterministic checks, contextual AI review and final findings. It covers four scenarios — clean, deterministic-policy deviations, contextual high-risk clauses and adversarial document content — with the latest local run passing 4/4. The suite is deliberately small, so it demonstrates prototype behaviour rather than production-level legal accuracy.",
          ],
        },
        {
          id: "human-control-boundary",
          kind: "outcome",
          eyebrow: "Human control & boundary",
          title: "Decision support stops before the legal decision.",
          paragraphs: [
            "Legal First Pass deliberately stops before the final legal decision. The reviewer can record Approve as-is, Changes required or Escalate, along with a review note. Suggested wording remains draft material for human review.",
            "The current implementation is a focused prototype rather than production legal infrastructure. It supports mutual NDAs and text-based PDFs, uses local filesystem/SQLite storage, and does not yet include OCR, authentication, enterprise permissions, retention controls, full audit infrastructure or CRM/CLM integration.",
            "A production version would connect the same review workflow to organisation-specific playbooks, approved document storage, existing matter or contract systems, asynchronous processing and continued evaluation against lawyer-reviewed outcomes.",
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
    homepageFeatured: true,
    caseStudyAvailable: true,
    showCaseStudySummary: false,
    displayOrder: 3,
    summary:
      "Built a controlled cybersecurity RAG testbed to measure how poisoned knowledge affects both retrieval and final model behaviour. Evaluated five attack types using Qwen and Llama across different poison budgets and retrieval depths, separating whether malicious content was retrieved from whether it actually changed the answer.",
    homepageSummary:
      "My Bachelor's thesis at the University of Twente explored poisoning attacks against RAG systems using cyber threat intelligence data. I built a controlled testbed that separately measured whether poisoned content entered retrieved context and whether it actually changed the model's final answer. The results showed that retrieval compromise does not automatically mean answer compromise, and that answer-model behaviour can strongly influence the outcome.",
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
      "Ollama",
      "Qwen",
      "Llama",
      "SQLite",
      "AI Evaluation",
    ],
    source: {
      visibility: "restricted",
      label: "Defensive research repository",
      notice: "Private — access available on request.",
      repositoryUrl: "https://github.com/Nadane-Portfolio/Thesis_Code",
    },
    caseStudy: {
      sections: [
        {
          id: "context",
          kind: "context",
          eyebrow: "Context / thesis scope",
          title: "A defensive evaluation of RAG poisoning over cyber threat intelligence.",
          paragraphs: [
            "This Bachelor's thesis at the University of Twente was a defensive AI-security evaluation project. I built a controlled RAG testbed from scratch to measure how poisoned knowledge affects retrieval and final answers when the knowledge base contains cyber threat intelligence from APTNotes.",
            "The repository preserves the source code and selected generated artifacts needed to reproduce the sanitised portfolio evaluation. It is research infrastructure for measuring RAG behaviour, not a production chatbot or an operational attack toolkit.",
          ],
        },
        {
          id: "testbed-architecture",
          kind: "architecture",
          eyebrow: "Testbed architecture",
          title: "A clean RAG pipeline built for controlled experiments.",
          paragraphs: [
            "I loaded the APTNotes corpus, split it into 350-word chunks with a 60-word overlap, embedded those chunks with sentence-transformers/all-MiniLM-L6-v2, and stored the vectors in ChromaDB. Each evaluation request retrieved top-k context from that indexed corpus before passing it to a local answer model through Ollama.",
            "The two local aliases, qwen3-30b-rag and llama32-1b-rag, were used as both poison generators and answer models, creating four generator-answer pairings. The core contribution was a controlled experimental system that could vary one part of the pipeline at a time, not an end-user query interface.",
          ],
        },
        {
          id: "clean-evaluation-set",
          kind: "implementation",
          eyebrow: "Building the clean evaluation set",
          title: "One hundred repeatable targets, not a human query stream.",
          paragraphs: [
            "The evaluation questions were not based on human user queries. I first built a clean indexed knowledge base, sampled random clean chunks, and generated candidate questions automatically from those chunks.",
            "Clean-RAG and rule-based checks filtered low-quality or unanswerable candidates. The final 100 target questions formed a controlled evaluation set that could be replayed consistently across poison budgets, retrieval depths, attack types, and model pairings.",
          ],
        },
        {
          id: "attack-runner",
          kind: "implementation",
          eyebrow: "Attack implementation and experiment runner",
          title: "One runner varied attacks, retrieval settings, and model roles.",
          paragraphs: [
            "I implemented five controlled attack types: prag_bb, prag_wb, ii_bb, ii_wb, and jamming. The first four use canary-based outcomes across factual and instruction-oriented families; jamming evaluates fallback or answer-disruption behaviour rather than a canary output.",
            "The experiment runner automated poison generation, evaluation, result logging, and figure generation across poison budget m ∈ {5, 25, 50}, retrieval depth k ∈ {5, 25, 50}, and the four generator-answer pairings. The pipeline diagram introduces that end-to-end process, while the tables and charts show the attack families, settings, and recorded outputs.",
          ],
          gallery: [
            {
              src: "/images/thesis/ai_thesis_flow.webp",
              title: "Pipeline overview",
              caption:
                "From clean-set construction through poisoning experiments to retrieval and answer-stage outcome measurement.",
              alt: "Automated RAG poisoning evaluation pipeline showing clean question-set construction, poisoned knowledge-base experiments, retrieval measurement, answer measurement, and results logging.",
              width: 1448,
              height: 1086,
            },
            {
              src: "/images/thesis/table_1.webp",
              title: "Attack families",
              caption:
                "The five implemented attack types and whether they target a canary output or fallback behaviour.",
              alt: "Table listing the prag_bb, prag_wb, ii_bb, ii_wb, and jamming attack types, their related families, and their goals.",
              width: 485,
              height: 209,
            },
            {
              src: "/images/thesis/table_2.webp",
              title: "Experimental settings",
              caption:
                "Corpus, chunking, embeddings, vector store, models, and the evaluated poison-budget and retrieval-depth values.",
              alt: "Table of main experimental settings including APTNotes, 10,249 clean chunks, all-MiniLM-L6-v2 embeddings, ChromaDB, two models, and m and k values of 5, 25, and 50.",
              width: 471,
              height: 363,
            },
            {
              src: "/images/thesis/table_3.webp",
              title: "Macro summary",
              caption:
                "Overall macro-averaged attack success by attack type.",
              alt: "Table summarising macro-averaged attack success rates for jamming, black-box instruction injection, retriever-aware instruction injection, black-box factual poisoning, and retriever-aware factual poisoning.",
              width: 471,
              height: 213,
            },
            {
              src: "/images/thesis/asr_by_attack_k.webp",
              title: "Retrieval-depth trend",
              caption:
                "Attack success as retrieval depth k changes across the evaluated attack types.",
              alt: "Chart showing attack success rate by retrieval depth for the evaluated RAG poisoning attack types.",
              width: 2130,
              height: 1286,
            },
            {
              src: "/images/thesis/asr_by_attack_m.webp",
              title: "Poison-budget trend",
              caption:
                "Attack success as poison budget m changes across the evaluated attack types.",
              alt: "Chart showing attack success rate by poison budget for the evaluated RAG poisoning attack types.",
              width: 2130,
              height: 1286,
            },
            {
              src: "/images/thesis/table_4.webp",
              title: "Model-pair breakdown",
              caption:
                "Macro-averaged attack success by generator-answer model pairing and attack type.",
              alt: "Table showing macro-averaged attack success for Llama and Qwen generator-answer model pairs across five attack types.",
              width: 521,
              height: 215,
            },
          ],
        },
        {
          id: "metrics-outputs",
          kind: "testing",
          eyebrow: "Metrics and experiment outputs",
          title: "Retrieval compromise and answer compromise were measured separately.",
          paragraphs: [
            "The evaluation measured clean answerability, retrieved poison rate (RPR), attack success rate (ASR) for canary-based attacks, and jamming success rate (JSR) for fallback behaviour. This separated a retrieval-stage compromise — poisoned context entering top-k results — from an answer-stage compromise in the final model output.",
            "Experiment state and outcomes were stored in a SQLite results database, then reproduced through the plotting pipeline. The model-pair table and the k and m charts show why retrieval metrics alone are incomplete: the same retrieved context can lead to different final behaviour depending on the answer model and experiment settings.",
          ],
        },
        {
          id: "findings-engineering-takeaways",
          kind: "outcome",
          eyebrow: "Findings / engineering takeaways",
          title: "Secure RAG evaluation has to measure the whole pipeline.",
          paragraphs: [
            "Retrieval compromise did not automatically imply answer compromise. Answer-model behaviour changed the final outcome, which is why the evaluation treated generator and answer roles separately rather than reporting a single retrieval score.",
            "Jamming produced the highest macro-average success rate at 59.2%, followed by black-box instruction injection at 50.3%. Success generally increased with larger poison budgets, while retrieval depth changed outcomes in non-trivial ways across attack types and model pairings.",
            "For secure RAG engineering, this means testing should observe ingestion, retrieval, context construction, and final answers together. Retrieval exposure is an important signal, but it is not a complete measure of end-to-end compromise.",
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
    homepageFeatured: false,
    displayOrder: 4,
    summary:
      "Turned a large operational weather dataset into a structured relational model covering forecasts, meteorologists, customers, and contracts. I worked on database normalisation, SQL-based KPIs, and the final business recommendations, while the wider team used the prepared data to build the Tableau dashboard.",
    homepageSummary:
      "A university team project for Dutch weather-intelligence company Infoplaza. I helped turn a large North Sea weather and operational dataset into a clearer relational structure by normalising the data, splitting it into linked business entities, and writing SQL-based KPI queries. I also contributed to the final business recommendations, while the wider team used the prepared data for Tableau visualisation and additional analysis.",
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
      "DBeaver",
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
    homepageFeatured: false,
    displayOrder: 5,
    summary:
      "Focused on the Odoo implementation, product configuration, and technical product research, including calculations for compatible solar-panel and battery combinations, while also serving as project manager during part of the project.",
    homepageSummary:
      "A university product-development and online-business project built around a modular solar retrofit concept for e-bikes. My main technical contribution was the Odoo ERP implementation: I configured the e-commerce site and product catalogue, bills of materials, suppliers, inventory, stock management, automated reordering, ordering flows and newsletter functionality. The result connected the product concept to a working digital business system.",
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
    externalLink: {
      label: "Project website",
      href: "https://edu-solarmotionv0.odoo.com/",
    },
  },
  {
    id: "actfact",
    slug: "actfact-enterprise-dashboard",
    title: "ActFact",
    subtitle: "Enterprise Dashboard Application",
    kind: "Team project",
    categories: ["Frontend", "Software Engineering"],
    homepageFeatured: false,
    displayOrder: 6,
    summary:
      "Worked primarily on the frontend of an enterprise data-management application for creating and sharing dashboards while staying involved with wider application integration.",
    homepageSummary:
      "A team project connected to Dutch cloud-business-software company ActFact. We worked on an enterprise data-management application for creating and sharing dashboards with different users and permissions. My contribution was mainly on the frontend, while I stayed involved with wider application integration so the user-facing work fitted correctly with the rest of the system.",
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

export const homepageFeaturedProjects = projects.filter(
  (project) => project.homepageFeatured,
);

export const supportingProjects = projects.filter(
  (project) => !project.homepageFeatured,
);

export const caseStudyProjects = projects.filter(
  (project) => project.caseStudyAvailable && project.caseStudy,
);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
