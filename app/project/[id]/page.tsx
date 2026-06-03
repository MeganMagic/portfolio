import ProjectModal from "@/_components/project/ProjectModal";

import HomeButton from "./HomeButton";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  return (
    <div className="w-full md:w-[540px] mx-auto px-4 py-8 md:py-12">
      <ProjectModal id={Number(id)} />
      <HomeButton />
    </div>
  );
}
