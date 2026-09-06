# Andrei George Nadane — AI Product Engineer

Hi, I'm **Andrei George Nadane**, an AI Product Engineer based in **Stockport, Greater Manchester, UK**.

This repository contains my personal portfolio and project case studies. I use the site to show how I approach practical AI and software problems — from understanding the problem and choosing an appropriate architecture to implementation, testing, evaluation and iteration.

**Live portfolio:** [andrei-nadane-portfolio.vercel.app](https://andrei-nadane-portfolio.vercel.app/)

## Featured Work

### AI Knowledge Assistant

A configurable RAG assistant for working with document-based knowledge.

I developed the project during a **10-week university internship module** with **Twinx B.V.**, a Dutch project and subsidy consultancy working with innovation projects. Their work depends heavily on project documentation, and the original brief was deliberately open-ended: explore how AI could make that workflow faster and easier to work with.

I researched possible approaches and helped turn the brief into a working RAG-based assistant. The system synchronises project documents from Dropbox, processes and chunks their contents, creates embeddings, stores them in ChromaDB, and retrieves relevant context for grounded question answering through a Chainlit interface.

When privacy concerns around external AI APIs became important, I also worked on a local execution path using Sentence Transformers and Ollama. After the internship, I sanitised and adapted my implementation into a reusable version with sensitive and client-specific information removed.

### Legal First Pass

An independent prototype I built for structured first-pass review of routine mutual NDAs.

The main design decision was to avoid using AI for every part of the review. Objective policy checks, such as governing law or confidentiality periods, can be handled deterministically, while clauses that require contextual interpretation can be reviewed with AI assistance.

The system combines these approaches to produce risk-based findings, supporting evidence and suggested amendment wording while preserving matter and document history. The reviewer remains responsible for the final decision through **Approve**, **Changes required** and **Escalate** rather than autonomous legal decision-making.

I also used evaluation and adversarial testing to explore reliability, including how the system behaves when uploaded contract text is treated as untrusted input.

### RAG Security Thesis

My Bachelor's thesis at the University of Twente:

**[Measuring the Effectiveness of RAG Poisoning Attacks on Cyber Threat Intelligence Data](https://purl.utwente.nl/essays/110864)**

I built a controlled RAG testbed over public cyber threat intelligence data to study how manipulated knowledge can affect both retrieval and final model behaviour.

A central part of the research was separating two different questions: whether poisoned content was retrieved, and whether that content actually changed the model's final answer. The experiments evaluated several poisoning categories across different retrieval depths, poison budgets and model pairings.

The results showed that retrieval compromise does not automatically imply final-answer compromise, and that the behaviour of the answer model can strongly influence the outcome.

The research is defensive. Operational attack code, payloads and reproduction details are intentionally not published.

## Other Work

### Infoplaza

A university team project for **Infoplaza**, a Dutch weather-intelligence company that provides decision-support services for weather-sensitive operations, including marine and offshore work.

The project used a large North Sea weather and operational dataset containing information such as forecasts, meteorologists, customers, contracts, wind speed and location data. The challenge was that the dataset was difficult to analyse effectively in its original structure.

My contribution focused on normalising the data into a clearer relational model, splitting it into linked business entities, writing SQL-based KPI queries, and contributing to the final business recommendations. The wider team then used the prepared data for Tableau visualisation and additional analysis.

### ActFact

A team project connected to **ActFact**, a Dutch cloud-business-software company whose platform includes ERP, workflow, dashboard and reporting functionality.

We worked on an enterprise data-management application for creating and sharing dashboards with different users and permissions. My contribution was mainly on the frontend, where I worked on the user-facing application and stayed involved with the wider system integration so the frontend fitted correctly with the rest of the application.

The project gave me practical experience working in a larger software system rather than treating the frontend as an isolated component.

### SolarMotion

A university product-development and online-business project built around a modular solar retrofit concept for e-bikes.

My main technical contribution was the **Odoo ERP implementation**. I built and configured the e-commerce website and product catalogue, set up products and bills of materials, linked suppliers and inventory, and implemented stock management with automated reordering. I also configured the customer-facing ordering and marketing flow, including the newsletter setup.

This turned the project from a product concept into a connected digital business system spanning e-commerce, inventory, suppliers and order processing.

**Project website:** [edu-solarmotionv0.odoo.com](https://edu-solarmotionv0.odoo.com/)

## What I Work With

My projects span AI systems, software development, data and business systems.

Some of the technologies and areas I work with include:

- Python
- RAG and LLM systems
- OpenAI APIs
- local LLMs
- ChromaDB
- Sentence Transformers
- Ollama
- Chainlit
- Streamlit
- SQL and relational databases
- Java
- JavaScript
- Git and GitHub
- testing and AI evaluation

## How This Portfolio Was Built

The portfolio uses:

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Next.js App Router
- Vercel

I used **Codex as an AI coding assistant throughout the development process** to help implement and iterate on the site.

I remained responsible for the structure, content, project framing, design decisions, reviewing generated changes, testing the site and deciding what was ultimately committed and deployed.

The site is intentionally lightweight, with minimal unnecessary client-side JavaScript and external dependencies.

## Project Structure

```text
src/
├── app/                  # Next.js routes and global styles
├── components/
│   ├── case-study/       # Shared case-study components
│   ├── home/             # Homepage sections
│   ├── layout/           # Header, footer and shared layout
│   └── projects/         # Project presentation components
├── content/              # Typed portfolio content
└── types/                # Shared TypeScript types

public/
└── images/               # Portfolio and project visuals
```

Featured project case studies are statically generated under:

```text
/work/[slug]
```

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Validation

Run linting with:

```bash
npm run lint
```

Run a production build with:

```bash
npm run build
```

## Deployment

The portfolio is deployed on **Vercel** and connected to the `main` branch of this repository.

When I push a new commit to `main`, Vercel automatically builds and deploys the updated site.

**Live site:** [andrei-nadane-portfolio.vercel.app](https://andrei-nadane-portfolio.vercel.app/)

## Contact

I'm open to AI product engineering, software engineering and adjacent technical opportunities.

**Andrei George Nadane**  
AI Product Engineer  
Stockport, Greater Manchester, UK

Email: [a.g.nadane@gmail.com](mailto:a.g.nadane@gmail.com)  
LinkedIn: [linkedin.com/in/andrei-george-nadane](https://www.linkedin.com/in/andrei-george-nadane/)  
GitHub: [github.com/Nadane-Portfolio](https://github.com/Nadane-Portfolio)
