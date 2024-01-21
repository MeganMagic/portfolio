import SkillCard from "@/_components/SkillCard";
import SlideUpInView from "@/_components/SlideUpInView";
import ShapeDesign from "@/assets/shape-design.svg";
import ShapeEnv from "@/assets/shape-env.svg";
import ShapeFront from "@/assets/shape-frontend.svg";
import ShapeSparkle from "@/assets/shape-sparkle.svg";
import prisma from "@/lib/prisma";

async function getSkills() {
  const frontend = await prisma.skill.findUniqueOrThrow({ where: { id: 1, category: "FRONTEND" } });
  const env = await prisma.skill.findUniqueOrThrow({ where: { id: 2, category: "ENV" } });
  const design = await prisma.skill.findUniqueOrThrow({ where: { id: 3, category: "DESIGN" } });
  const etc = await prisma.skill.findUniqueOrThrow({ where: { id: 4, category: "ETC" } });
  return {
    frontend,
    env,
    design,
    etc,
  };
}

export default async function SkillSection() {
  const skills = await getSkills();

  return (
    <section id="skill">
      <SlideUpInView>
        <h2>기술</h2>
        <p className="section-title">업무와 프로젝트를 하면서 다음과 같은 기술을 사용했습니다</p>

        <div className="cards flex flex-col gap-8 md:gap-10">
          <SkillCard
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
          />
        </div>
      </SlideUpInView>
    </section>
  );
}
