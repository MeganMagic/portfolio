import SectionWatcher from "@/_components/SectionWatcher";
import SlideUpInView from "@/_components/SlideUpInView";
import SkillItems from "@/_components/skill/SkillItems";
import skills from "@/data/skills";

export default function SkillSection() {
  return (
    <SectionWatcher id="skill">
      <SlideUpInView>
        <h2 className="section-eyebrow">기술 스택 및 도구</h2>
        <p className="section-title">아래의 기술을 사용할 수 있습니다.</p>
        <SkillItems skills={skills} />
      </SlideUpInView>
    </SectionWatcher>
  );
}
