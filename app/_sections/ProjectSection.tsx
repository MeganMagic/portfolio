import SectionWatcher from "@/_components/SectionWatcher";
import SlideUpInView from "@/_components/SlideUpInView";
import ProjectCards from "@/_components/project/ProjectCards";
import projects from "@/data/projects";
import skills from "@/data/skills";

function getSkillsByIds(ids: number[]) {
  return ids
    .map(id => skills.find(skill => skill.id === id))
    .filter((skill): skill is (typeof skills)[number] => Boolean(skill))
    .sort((a, b) => a.category.localeCompare(b.category));
}

export default function ProjectSection() {
  const projectSummaries = projects.map(({ id, title, sub_title, skill_ids }) => ({
    id,
    title,
    sub_title,
    skills: getSkillsByIds(skill_ids),
  }));

  return (
    <SectionWatcher id="project">
      <SlideUpInView>
        <h2 className="section-eyebrow">프로젝트 상세</h2>
        <p className="section-title">주요 프로젝트의 세부 사항을 확인해보세요</p>

        <ProjectCards projects={projectSummaries} />
      </SlideUpInView>
    </SectionWatcher>
  );
}
