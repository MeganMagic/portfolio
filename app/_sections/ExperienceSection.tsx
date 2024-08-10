import ExpCard from "@/_components/ExpCard";
import SectionWatcher from "@/_components/SectionWatcher";
import SlideUpInView from "@/_components/SlideUpInView";
import prisma from "@/lib/prisma";
import { parsePrismaJSON } from "@/utils/parsePrisma";

async function getExperience() {
  const response = await prisma.experience.findMany({ orderBy: { index: "asc" } });

  return response.map(({ links, sub_title, is_active, ...res }) => ({
    subTitle: sub_title ?? undefined,
    onGoing: is_active ?? false,
    links: links.map(link => parsePrismaJSON<{ href: string; label: string }>(link)),
    ...res,
  }));
}

export default async function ExperienceSection() {
  const data = await getExperience();

  return (
    <SectionWatcher id="experience">
      <SlideUpInView>
        <h2>업무 및 프로젝트 경험</h2>
        <p className="section-description">스타트업, 외주, 프로젝트 등 다양한 업무를 경험했습니다.</p>
        <div className="flex flex-col gap-16 md:gap-20">
          {data.map(props => (
            <ExpCard key={`exp-card-${props.id}`} {...props} />
          ))}
        </div>
      </SlideUpInView>
    </SectionWatcher>
  );
}
