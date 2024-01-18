import { PlusCircle } from "react-feather";

import { useOverlay } from "@toss/use-overlay";
import cn from "classnames";

import ProjectModal from "./ProjectModal";
import { Project } from "./types";

interface ProjectCardProps {
  id: number;
  renderShape: (options: { className: string }) => React.ReactNode;
  color: "lime" | "blue" | "green";
  project: Project;
}

const ProjectCard = ({ id, renderShape, color, project }: ProjectCardProps) => {
  const overlay = useOverlay();
  const { subTitle, ...projectDetail } = project;

  const openModal = () =>
    overlay.open(({ isOpen, close }) => (
      <ProjectModal isOpen={isOpen} close={close} renderShape={renderShape} color={color} {...projectDetail} />
    ));

  return (
    <button onClick={openModal}>
      <div
        id={`project-card-${id}`}
        className={cn(
          "w-full h-fit md:h-72 xl:h-80 p-5 md:p-6 bg-background border border-foreground/15 hover:border-foreground/0 rounded-md md:rounded-lg flex md:flex-col justify-between items-end md:items-start group",
          color === "blue" && "hover:bg-blue",
          color === "green" && "hover:bg-green",
          color === "lime" && "hover:bg-lime",
        )}
      >
        <div className="text-left">
          {renderShape({
            className: cn(
              "w-5 h-5 md:w-6 md:h-6 mb-2.5 md:mb-4",
              color === "blue" && "text-blue",
              color === "green" && "text-green",
              color === "lime" && "text-lime",
              "group-hover:text-white",
            ),
          })}
          <p className="text-lg md:text-xl font-semibold md:mb-4">{project.title}</p>
          <p className="text-sm font-normal opacity-60 hidden md:inline-block">{subTitle}</p>
        </div>

        <PlusCircle size={20} strokeWidth={1.5} className="text-foreground/60" />
      </div>
    </button>
  );
};

export default ProjectCard;
