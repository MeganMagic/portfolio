"use client";

import { PlusCircle } from "react-feather";

import cn from "classnames";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  id: number;
  title: string;
  subTitle: string;
}

const ProjectCard = ({ id, title, subTitle }: ProjectCardProps) => {
  return (
    <Link className="no-underline" href={`/project/${id}`} passHref scroll={false}>
      <div
        id={`project-card-${id}`}
        className={cn(
          "w-full h-fit md:h-72 xl:h-80 p-5 md:p-6 bg-background border border-foreground/15 hover:border-foreground/0 rounded-md md:rounded-lg flex md:flex-col justify-between items-end md:items-start group",
          id % 3 === 0 && "hover:bg-blue",
          id % 3 === 1 && "hover:bg-green",
          id % 3 === 2 && "hover:bg-lime",
        )}
      >
        <div className="text-left">
          <div className="mb-2.5 md:mb-4">
            <Image
              className="group-hover:hidden"
              src={`/assets/shape-variant-${id}.svg`}
              alt="shape"
              width={20}
              height={20}
            />
            <Image
              className="hidden group-hover:block"
              src={`/assets/shape-variant-${id}-invert.svg`}
              alt="shape"
              width={20}
              height={20}
            />
          </div>
          <p className=" text-lg md:text-xl font-semibold md:mb-4 no-underline!important">{parse(title)}</p>
          <p className="text-sm font-normal opacity-60 hidden md:inline-block">{subTitle}</p>
        </div>

        <PlusCircle size={20} strokeWidth={1.5} className="text-foreground/60" />
      </div>
    </Link>
  );
};

export default ProjectCard;
