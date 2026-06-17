import { useLocale, useTranslations } from "next-intl";

import SectionWatcher from "@/_components/SectionWatcher";
import SlideUpInView from "@/_components/SlideUpInView";
import ProjectCards from "@/_components/project/ProjectCards";
import projects from "@/data/projects";
import skills from "@/data/skills";
import type { Locale } from "@/i18n/routing";

function getSkillsByIds(ids: number[]) {
  return ids
    .map(id => skills.find(skill => skill.id === id))
    .filter((skill): skill is (typeof skills)[number] => Boolean(skill))
    .sort((a, b) => a.category.localeCompare(b.category));
}

export default function ProjectSection() {
  const t = useTranslations("Project");
  const locale = useLocale() as Locale;

  const projectSummaries = projects[locale].map(({ id, title, sub_title, skill_ids }) => ({
    id,
    title,
    sub_title,
    skills: getSkillsByIds(skill_ids),
  }));

  return (
    <SectionWatcher id="project">
      <SlideUpInView>
        <h2 className="section-eyebrow">{t("eyebrow")}</h2>
        <p className="section-title">{t("title")}</p>

        <ProjectCards projects={projectSummaries} />
      </SlideUpInView>
    </SectionWatcher>
  );
}
