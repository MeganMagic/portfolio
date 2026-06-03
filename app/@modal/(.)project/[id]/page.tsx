import ProjectModalComponent from "@/_components/project/ProjectModal";

interface ProjectModalPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectModal({ params }: ProjectModalPageProps) {
  const { id } = await params;

  return <ProjectModalComponent id={Number(id)} />;
}
