import Modal from "@/_components/Modal";
import ProjectModalComponent from "@/_components/project/ProjectModal";

export default function ProjectModal({ params: { id } }: { params: { id: string } }) {
  return (
    <Modal>
      <ProjectModalComponent id={Number(id)} />
    </Modal>
  );
}
