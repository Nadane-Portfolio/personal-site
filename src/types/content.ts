export type ExternalLinkKind = "github" | "linkedin" | "email";

export type ExternalLink = {
  label: string;
  href: string;
  kind: ExternalLinkKind;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type Availability = {
  location: string;
  preference: string;
  opportunities: string;
};

export type AboutContent = {
  paragraphs: readonly string[];
  process: readonly string[];
};

export type WorkPrinciple = {
  number: string;
  title: string;
  description: string;
};

export type ApproachContent = {
  intro: string;
  principles: readonly WorkPrinciple[];
};

export type AiPracticeContent = {
  statement: string;
  helpsWith: readonly string[];
  responsibility: readonly string[];
  operatingPrinciples: readonly string[];
  workingLoop: readonly string[];
  toolsLine: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  emphasis: "primary" | "standard";
  skills: readonly string[];
};

export type ExperienceItem = {
  role: string;
  organisation: string;
  location: string;
  dateRange: string;
  description?: string;
};

export type EducationItem = {
  qualification: string;
  institution: string;
  dateRange: string;
  thesis?: string;
};

export type ProjectSourceStatus = {
  visibility: "private" | "restricted" | "public";
  label: string;
  notice: string;
  repositoryUrl?: string;
};

export type ProjectMedia =
  | {
      kind: "image";
      src: string;
      alt: string;
      caption?: string;
      width: number;
      height: number;
    }
  | {
      kind: "diagram";
      title: string;
      description: string;
      caption?: string;
    };

export type CaseStudySection = {
  id: string;
  kind:
    | "context"
    | "problem"
    | "role"
    | "constraints"
    | "approach"
    | "architecture"
    | "implementation"
    | "challenges"
    | "testing"
    | "outcome"
    | "reflection"
    | "custom";
  eyebrow?: string;
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  mediaIds?: readonly string[];
  visual?: "twinx-system";
};

export type CaseStudyContent = {
  sections?: readonly CaseStudySection[];
  media?: readonly ProjectMedia[];
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  kind: string;
  duration?: string;
  categories: readonly string[];
  featured: boolean;
  displayOrder: number;
  summary: string;
  role: string;
  contributions: readonly string[];
  attributionNote?: string;
  technology: readonly string[];
  source?: ProjectSourceStatus;
  caseStudy?: CaseStudyContent;
};
