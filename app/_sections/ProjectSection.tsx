import SectionWatcher from "@/_components/SectionWatcher";
import SlideUpInView from "@/_components/SlideUpInView";
import ProjectCard from "@/_components/project/ProjectCard";
import prisma from "@/lib/prisma";

async function getProjects() {
  const response = await prisma.project.findMany({
    select: {
      id: true,
      title: true,
      sub_title: true,
    },
  });

  return response.map(({ sub_title, ...res }) => ({ subTitle: sub_title!, ...res }));
}

export default async function ProjectSection() {
  const projects = await getProjects();
  return (
    <SectionWatcher id="project">
      <SlideUpInView>
        <h2>프로젝트 상세</h2>
        <p className="section-description">주요 프로젝트의 세부 사항을 확인해보세요</p>

        <div className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map(props => (
            <ProjectCard key={`project-card-${props.id}`} {...props} />
          ))}
        </div>
      </SlideUpInView>
    </SectionWatcher>
  );
}
