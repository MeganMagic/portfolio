import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import BlogSection from "@/sections/BlogSection";
import EducationSection from "@/sections/EducationSection";
import ExperienceSection from "@/sections/ExperienceSection";
import IntroSection from "@/sections/IntroSection";
import MainSection from "@/sections/MainSection";
import OutroSection from "@/sections/OutroSection";
import ProjectSection from "@/sections/ProjectSection";
import SkillSection from "@/sections/SkillSection";

export default function Home() {
  return (
    <div
      className="
        w-full min-w-80 max-w-screen-xl min-h-screen mx-auto
        px-5 md:px-8 xl:px-10
        flex flex-col items-center
        xl:grid xl:grid-cols-4 xl:items-start xl:gap-12
      "
    >
      <Header className="xl:hidden" />
      <Navigation className="hidden xl:flex" />

      <main className="w-full xl:col-span-3">
        <MainSection />
        <IntroSection />
        <ExperienceSection />
        <ProjectSection />
        <BlogSection />
        <SkillSection />
        <EducationSection />
        <OutroSection />
      </main>
    </div>
  );
}
