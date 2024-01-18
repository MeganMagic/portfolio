import cn from "classnames";
import Link from "next/link";

import { Project } from "./types";
import Modal, { OverlayProps } from "../Modal";

interface ProjectModalProps extends OverlayProps, Omit<Project, "subTitle"> {
  renderShape: (options: { className: string }) => React.ReactNode;
  color: "blue" | "green" | "lime";
}

const ProjectModal = ({
  isOpen,
  close,
  renderShape,
  color,
  title,
  info: { member, period, skills },
  description,
  links,
}: ProjectModalProps) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <div id="project-modal-header" className="flex flex-col gap-3 md:gap-4 mb-10 md:mb-16">
        {renderShape({
          className: cn(
            "w-8 h-8 md:w-12 md:h-12",
            color === "blue" && "text-blue",
            color === "green" && "text-green",
            color === "lime" && "text-lime",
          ),
        })}
        <p className="text-xl md:text-2xl font-semibold leading-normal break-keep">{title}</p>
        <div className="text-sm md:text-base font-normal">
          <p className="mb-1">{period}</p>
          <p>참여인원 {member}</p>
        </div>
      </div>
      <div id="project-modal-content" className="flex flex-col gap-8 md:gap-12">
        <div className="text-sm md:text-base flex flex-col gap-2">
          <p className="font-semibold text-base md:text-lg">기술 스택</p>
          <p>{skills.join(", ")}</p>
        </div>

        <div className="text-sm md:text-base flex flex-col gap-2">
          <p className="font-semibold text-base md:text-lg">상세 내용</p>
          <ol className="list-decimal break-keep">
            {description.map((desc, index) => (
              <li key={`project-desc-${index}`} className="mb-6 md:mb-8 last:mb-0">
                <span>{desc.title}</span>
                <div className="w-0.5 h-2" />
                {desc.items && (
                  <ul className="text-foreground/80 marker:text-foreground/60">
                    {desc.items?.map((item, itemIndex) => (
                      <li key={`project-desc-${index}-${itemIndex}`} className="mb-1 last:mb-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>

        {links && (
          <div className="text-sm md:text-base flex flex-col gap-2">
            <p className="font-semibold text-base md:text-lg">관련 링크</p>
            <ul className="text-foreground/80">
              {links.map((link, index) => (
                <li key={`project-link-${index}`} className="mb-2">
                  <Link href={link.forwardLink} target="_blacnk">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ProjectModal;
