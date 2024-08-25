import React from "react";

import ExpCard from "@/_components/ExpCard";
import SectionWatcher from "@/_components/SectionWatcher";
import SlideUpInView from "@/_components/SlideUpInView";
import prisma from "@/lib/prisma";
import { parsePrismaJSON } from "@/utils/parsePrisma";

async function getSkills(ids: number[]) {
  const response = await prisma.skill.findMany({
    where: { OR: ids.map(id => ({ id })) },
    orderBy: { category: "asc" },
  });
  return response;
}

async function getExperience() {
  const experiences = await prisma.experience.findMany({ orderBy: { index: "asc" } });

  const expWithSkills = await Promise.all(
    experiences.map(async ({ skill_ids, ...exp }) => {
      const skills = await getSkills(skill_ids);
      return { ...exp, skills };
    }),
  );

  return expWithSkills.map(({ links, ...res }) => ({
    links: links.map(link => parsePrismaJSON<{ href: string; label: string }>(link)),
    ...res,
  }));
}

export default async function ExperienceSection() {
  const data = await getExperience();

  const works = data.filter(({ category }) => category === "WORK");
  const projects = data.filter(({ category }) => category === "PROJECT");

  return (
    <SectionWatcher id="experience">
      <SlideUpInView>
        <h2 className="section-eyebrow">경력 사항</h2>
        <p className="section-title">
          다양한 업무와 프로젝트를 통해
          <br />
          경험과 노하우를 쌓고 있습니다.
        </p>

        {[
          { title: "업무 경험", data: works },
          { title: "프로젝트", data: projects },
        ].map(({ title, data }) => (
          <React.Fragment key={`exp-${title}`}>
            <div className="flex gap-4 items-center md:max-w-[768px] mx-auto mt-12 mb-8">
              <div className="w-full h-[1px] bg-gradient-to-l from-foreground/15" />
              <p className="flex-shrink-0 text-xs md:text-sm text-foreground/50">{title}</p>
              <div className="w-full h-[1px] bg-gradient-to-r from-foreground/15" />
            </div>

            <div className="flex flex-col gap-8 md:gap-10">
              {data.map(props => (
                <ExpCard key={`exp-${title}-card-${props.id}`} {...props} />
              ))}
            </div>
          </React.Fragment>
        ))}
      </SlideUpInView>
    </SectionWatcher>
  );
}
