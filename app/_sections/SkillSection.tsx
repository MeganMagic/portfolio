import cn from "classnames";

import SectionWatcher from "@/_components/SectionWatcher";
import SkillItem from "@/_components/SkillItem";
import SlideUpInView from "@/_components/SlideUpInView";
import ShapeDesign from "@/assets/shape-design.svg";
import ShapeEnv from "@/assets/shape-env.svg";
import ShapeFront from "@/assets/shape-frontend.svg";
import ShapeSparkle from "@/assets/shape-sparkle.svg";
import prisma from "@/lib/prisma";

async function getSkills() {
  const frontend = await prisma.skill.findMany({ where: { category: "FRONTEND" } });
  const library = await prisma.skill.findMany({ where: { category: "FRONTEND_LIBRARY" } });
  const env = await prisma.skill.findMany({ where: { category: "ENV" } });
  const design = await prisma.skill.findMany({ where: { category: "DESIGN" } });
  return {
    frontend,
    library,
    env,
    design,
  };
}

export default async function SkillSection() {
  const skills = await getSkills();

  return (
    <SectionWatcher id="skill">
      <SlideUpInView>
        <h2>기술 스택 및 도구</h2>
        <p className="section-description">업무와 프로젝트를 하면서 다음과 같은 기술을 사용했습니다</p>

        <div className="flex flex-col gap-10 md:gap-14 items-center">
          {[
            {
              title: "프론트엔드",
              skills: skills.frontend,
              renderShape: (_cn: string) => <ShapeFront className={cn(_cn, "text-blue")} />,
            },
            {
              title: "프론트엔드 라이브러리",
              skills: skills.library,
              renderShape: (_cn: string) => <ShapeSparkle className={cn(_cn, "text-green")} />,
            },
            {
              title: "환경 및 배포",
              skills: skills.env,
              renderShape: (_cn: string) => <ShapeEnv className={cn(_cn, "text-lime")} />,
            },
            {
              title: "디자인",
              skills: skills.design,
              renderShape: (_cn: string) => <ShapeDesign className={cn(_cn, "text-gray-400 dark:text-gray-500")} />,
            },
          ].map(({ title, skills, renderShape }) => (
            <div key={`skills-${title}`} className="flex flex-col gap-3 items-center">
              <div className="title flex gap-1.5 items-center">
                {renderShape("w-4 h-4")}
                <p className="text-sm md:text-base text-foreground/60 font-semibold">{title}</p>
              </div>
              <div className="skills flex gap-3 flex-wrap justify-center sm:px-12 md:max-w-[540px]">
                {skills.map(skill => (
                  <SkillItem key={`skill-item-${skill.id}`} label={skill.item} imageUrl={skill.blobUrl} />
                ))}
              </div>
            </div>
          ))}
          {/* <SkillCard
            color="blue"
            renderShape={options => <ShapeFront {...options} />}
            title="프론트엔드"
            items={skills.frontend.items}
          />

          <SkillCard
            color="green"
            renderShape={options => <ShapeEnv {...options} />}
            title="환경 및 배포"
            items={skills.env.items}
          />

          <SkillCard
            color="lime"
            renderShape={options => <ShapeDesign {...options} />}
            title="그래픽 편집"
            items={skills.design.items}
          />

          <SkillCard
            color="gray"
            renderShape={options => <ShapeSparkle {...options} />}
            title="기타"
            items={skills.etc.items}
          /> */}
        </div>
      </SlideUpInView>
    </SectionWatcher>
  );
}
