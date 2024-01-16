import { PlusCircle } from "react-feather";

import cn from "classnames";

interface ProjectCardProps {
  renderShape: (options: { className: string }) => React.ReactNode;
  color: "lime" | "blue" | "green";
  title: React.ReactNode;
  subTitle: string;
}

const ProjectCard = ({ renderShape, color, title, subTitle }: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "w-full h-fit md:h-72 xl:h-80 p-5 md:p-6 bg-white border border-black/25 hover:border-black/0 rounded-md md:rounded-lg flex md:flex-col justify-between items-end md:items-start group",
        color === "blue" && "hover:bg-blue",
        color === "green" && "hover:bg-green",
        color === "lime" && "hover:bg-lime",
      )}
    >
      <div>
        {renderShape({
          className: cn(
            "w-5 h-5 md:w-6 md:h-6 mb-2.5 md:mb-4",
            color === "blue" && "text-blue",
            color === "green" && "text-green",
            color === "lime" && "text-lime",
            "group-hover:text-white",
          ),
        })}
        <p className="text-lg md:text-xl font-semibold md:mb-4">{title}</p>
        <p className="text-sm font-normal opacity-60 hidden md:inline-block">{subTitle}</p>
      </div>

      <PlusCircle size={20} strokeWidth={1.5} className="opacity-60" />
    </div>
  );
};

export default ProjectCard;
