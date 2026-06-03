"use client";

import { useState } from "react";

import type { Project, Skill } from "@/data/types";

import ProjectCard from "./ProjectCard";
import CTAButton from "../buttons/CTAButton";

type OmittedProject = Pick<Project, "id" | "title" | "sub_title"> & {
  skills: Skill[];
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
      {hasNext && <CTAButton className="md:col-span-2 xl:col-span-3 mx-auto" label="더 보기" onClick={showMore} />}
    </div>
  );
};

export default ProjectCards;
