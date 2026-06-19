import { setRequestLocale } from "next-intl/server";

import Header from "@/_components/Header";
import SectionNav from "@/_components/SectionNav";
import { SectionWatchProvider } from "@/_components/SectionWatcher";
import BlogSection from "@/_sections/BlogSection";
import EducationSection from "@/_sections/EducationSection";
import ExperienceSection from "@/_sections/ExperienceSection";
import IntroSection from "@/_sections/IntroSection";
import MainSection from "@/_sections/MainSection";
import OutroSection from "@/_sections/OutroSection";
import ProjectSection from "@/_sections/ProjectSection";
import type { Locale } from "@/i18n/routing";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <SectionWatchProvider>
      <Header />
      <SectionNav />
      <main
        className="
        w-full min-w-96 max-w-screen-lg min-h-screen mx-auto
        px-5 md:px-8 lg:px-10
        flex flex-col items-center relative
      "
      >
        <MainSection />
        <IntroSection />
        <ExperienceSection />
        <ProjectSection />
        <BlogSection />
        <EducationSection />
        <OutroSection />
      </main>
    </SectionWatchProvider>
  );
}
