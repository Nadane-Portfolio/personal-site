import type { AiPracticeContent, ApproachContent } from "@/types/content";

export const approachContent: ApproachContent = {
  intro:
    "I’m most comfortable when the problem is clear enough to investigate, but the solution is not predetermined. I try to understand the workflow first, identify the real constraint, and then choose the simplest technical approach that can solve it reliably.",
  principles: [
    {
      number: "01",
      title: "Start with the problem, not the technology",
      description:
        "Do not assume AI is automatically the answer. Understand the workflow, users and constraint before deciding on the technical approach.",
    },
    {
      number: "02",
      title: "Use AI where judgement is useful",
      description:
        "Prefer deterministic logic for objective rules and use AI where contextual interpretation genuinely adds value.",
    },
    {
      number: "03",
      title: "Treat changing constraints as part of the design",
      description:
        "Requirements change. Privacy, deployment, user expectations and operational limitations should influence the architecture rather than being treated as interruptions.",
    },
    {
      number: "04",
      title: "Test failure modes, not only the happy path",
      description:
        "Look at what happens when assumptions fail, retrieval is wrong, model output is unreliable, or unexpected input reaches the system.",
    },
    {
      number: "05",
      title: "Build something people can actually use",
      description:
        "A technically correct backend is not enough. Think about workflow, interfaces, traceability, outputs and what would still be needed before a prototype became a production system.",
    },
  ],
};

export const aiPracticeContent: AiPracticeContent = {
  statement:
    "I use AI as an engineering tool, not as a substitute for understanding the system I’m building.",
  helpsWith: [
    "Explore unfamiliar technologies",
    "Compare approaches",
    "Generate and refactor code",
    "Debug",
    "Reduce repetitive work",
  ],
  responsibility: [
    "Architecture",
    "Inspecting generated changes",
    "Validating assumptions",
    "Testing important paths",
    "Version control",
    "Evaluation",
    "Final verification before shipping",
  ],
  operatingPrinciples: [
    "Give AI bounded tasks with clear constraints. Inspect context before modifying, and plan before implementation when the task is significant.",
    "Review generated diffs rather than assuming generated code is correct, then test the result.",
    "Be particularly sceptical around probabilistic AI behaviour. Prefer deterministic checks where rules are sufficient, and keep human oversight for consequential decisions.",
  ],
  workingLoop: [
    "Bound the task",
    "Inspect context",
    "Plan",
    "Generate/change",
    "Review the diff",
    "Test",
    "Verify",
  ],
  toolsLine:
    "Tools and workflows: Codex, ChatGPT, OpenAI APIs, local LLMs, Ollama and prompt-driven development workflows.",
};
