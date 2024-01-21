import Header from "@/_components/Header";
import Navigation from "@/_components/Navigation";
import BlogSection from "@/_sections/BlogSection";
import EducationSection from "@/_sections/EducationSection";
import ExperienceSection from "@/_sections/ExperienceSection";
import IntroSection from "@/_sections/IntroSection";
import MainSection from "@/_sections/MainSection";
import OutroSection from "@/_sections/OutroSection";
import ProjectSection from "@/_sections/ProjectSection";
import SkillSection from "@/_sections/SkillSection";

export default function Home() {
  return (
    <div
      className="
        w-full min-w-96 max-w-screen-xl min-h-screen mx-auto
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
