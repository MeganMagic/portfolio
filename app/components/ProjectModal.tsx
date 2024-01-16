import { X } from "react-feather";

import cn from "classnames";

interface ProjectModalProps {
  renderShape: (options: { className: string }) => React.ReactNode;
  color: "blue" | "green" | "lime";
  title: React.ReactNode;
  detail: {
    period: string;
    member: string;
    skills: React.ReactNode[];
  };
  description: {
    title: string;
    items?: string[];
  }[];
}

const ProjectModal = ({ renderShape, color, title, detail, description }: ProjectModalProps) => {
  return (
    <div className="w-full md:w-[540px] p-6 md:p-9 border border-black/25 rounded-lg md:rounded-xl relative">
      <div className="mb-9 md:mb-16 flex flex-col md:flex-row gap-4 md:gap-7">
        {renderShape({
          className: cn(
            "w-9 h-9 md:w-16 md:h-16",
            color === "blue" && "text-blue",
            color === "green" && "text-green",
            color === "lime" && "text-lime",
          ),
        })}
        <p className="text-2xl md:text-3xl font-semibold">{title}</p>
      </div>

      <div className="border-t border-black/25 pt-4 text-sm md:text-base grid grid-cols-[72px_auto] md:grid-cols-[108px_auto] gap-y-3 md:gap-y-4 mb-8 md:mb-10">
        <p className="font-semibold">작업 기간</p>
        <p className="font-normal">{detail.period}</p>
        <p className="font-semibold">참여 인원</p>
        <p className="font-normal">{detail.member}</p>
        <p className="font-semibold">기술 스택</p>
        <div className="font-normal flex gap-1 flex-wrap">
          {detail.skills.map((skill, index) => (
            <p key={`skill-${index}`}>
              {skill}
              {index !== detail.skills.length - 1 && ","}
            </p>
          ))}
        </div>
      </div>

      <div className="desc border-t border-black/25 pt-4 text-sm md:text-base font-normal">
        <ol className="list-decimal list-inside">
          {description.map((desc, index) => (
            <li key={`desc-${index}`} className="mb-5 last:mb-0">
              <span className="underline">{desc.title}</span>

              {desc.items && (
                <ul className="pt-1 list-disc list-inside pl-6 -indent-4">
                  {desc.items.map((item, itemIndex) => (
                    <li key={`desc-${index}-${itemIndex}`} className="mb-1 last:mb-0">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
      <X
        className="absolute top-5 right-5 md:top-8 md:right-8 w-6 h-6 md:w-8 md:h-8 opacity-45 hover:opacity-60 active:opacity-75"
        strokeWidth={1.5}
      />
    </div>
  );
};

export default ProjectModal;
