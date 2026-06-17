import { useTranslations } from "next-intl";

import SectionWatcher from "@/_components/SectionWatcher";
import SlideUpInView from "@/_components/SlideUpInView";
import SkillItems from "@/_components/skill/SkillItems";
import skills from "@/data/skills";

export default function SkillSection() {
  const t = useTranslations("Skill");

  return (
    <SectionWatcher id="skill">
      <SlideUpInView>
        <h2 className="section-eyebrow">{t("eyebrow")}</h2>
        <p className="section-title">{t("title")}</p>
        <SkillItems skills={skills} />
      </SlideUpInView>
    </SectionWatcher>
  );
}
