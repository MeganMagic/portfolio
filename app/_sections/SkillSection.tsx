import SectionWatcher from "@/_components/SectionWatcher";
import SkillItems from "@/_components/SkillItems";
import SlideUpInView from "@/_components/SlideUpInView";
import prisma from "@/lib/prisma";

async function getAllSkills() {
  return await prisma.skill.findMany({ orderBy: { category: "asc" } });
}

export default async function SkillSection() {
  const allSkills = await getAllSkills();

  return (
    <SectionWatcher id="skill">
      <SlideUpInView>
        <h2>기술 스택 및 도구</h2>
        <p className="section-description">업무와 프로젝트를 하면서 다음과 같은 기술을 사용했습니다</p>
        <SkillItems skills={allSkills} />
      </SlideUpInView>
    </SectionWatcher>
  );
}
