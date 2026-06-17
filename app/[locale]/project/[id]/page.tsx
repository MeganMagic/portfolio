import { setRequestLocale } from "next-intl/server";

import ProjectModal from "@/_components/project/ProjectModal";
import type { Locale } from "@/i18n/routing";

import HomeButton from "./HomeButton";

interface ProjectPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, id } = await params;
  setRequestLocale(locale as Locale);

  return (
    <div className="w-full md:w-[540px] mx-auto px-4 py-8 md:py-12">
      <ProjectModal id={Number(id)} />
      <HomeButton />
    </div>
  );
}
