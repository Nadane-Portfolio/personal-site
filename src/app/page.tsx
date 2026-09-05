import { AboutSection } from "@/components/home/about-section";
import { AiPracticeSection } from "@/components/home/ai-practice-section";
import { BackgroundSection } from "@/components/home/background-section";
import { Hero } from "@/components/home/hero";
import { HowIWorkSection } from "@/components/home/how-i-work-section";
import { SkillsSection } from "@/components/home/skills-section";
import { WorkSection } from "@/components/home/work-section";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WorkSection />
      <HowIWorkSection />
      <AiPracticeSection />
      <SkillsSection />
      <BackgroundSection />
    </>
  );
}
