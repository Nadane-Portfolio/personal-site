import type { EducationItem, ExperienceItem } from "@/types/content";

export const experience: readonly ExperienceItem[] = [
  {
    role: "AI & Innovation Support Intern",
    organisation: "Twinx B.V.",
    location: "Netherlands",
    dateRange: "Feb 2026 – Apr 2026",
  },
  {
    role: "Production Operator",
    organisation: "Royal Sens",
    location: "Netherlands",
    dateRange: "Mar 2022 – Jul 2026",
    description: "Part-time alongside full-time university study",
  },
];

export const education: readonly EducationItem[] = [
  {
    qualification: "BSc Business Information Technology",
    institution: "University of Twente",
    dateRange: "2022 – 2026",
    thesis:
      "Measuring the Effectiveness of RAG Poisoning Attacks on Cyber Threat Intelligence Data",
  },
];
