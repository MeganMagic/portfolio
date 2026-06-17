import { setRequestLocale } from "next-intl/server";

import ProjectModalComponent from "@/_components/project/ProjectModal";
import type { Locale } from "@/i18n/routing";

interface ProjectModalPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export default async function ProjectModal({ params }: ProjectModalPageProps) {
  const { locale, id } = await params;
  setRequestLocale(locale as Locale);

  return <ProjectModalComponent id={Number(id)} />;
}
