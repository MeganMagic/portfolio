"use client";

import { useState } from "react";

import { project, skill } from "@prisma/client";

import ProjectCard from "./ProjectCard";

type OmittedProject = Pick<project, "id" | "title" | "sub_title"> & {
  skills: skill[];
};

interface ProjectCardsProps {
  projects: OmittedProject[];
}

const ITEMS_TO_SHOW = 6;

const ProjectCards = ({ projects }: ProjectCardsProps) => {
  const [showIndex, setShowIndex] = useState(ITEMS_TO_SHOW);
  const hasNext = showIndex < projects.length;

  const showMore = () => {
    if (!hasNext) return;
    setShowIndex(showIndex + ITEMS_TO_SHOW);
  };

  return (
    <div className="cards grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
      {projects.slice(0, showIndex).map(props => (
        <ProjectCard key={`project-card-${props.id}`} {...props} />
      ))}
      {hasNext && (
        <button
          className="md:col-span-2 xl:col-span-3 mx-auto w-full md:w-60 h-10 md:h-10 px-5 bg-foreground/[0.07] hover:bg-foreground/10 rounded-lg flex gap-2 items-center justify-center"
          onClick={showMore}
        >
          <p className="text-sm md:text-base text-foreground/80 font-semibold">더 보기</p>
        </button>
      )}
    </div>
  );
};

export default ProjectCards;
