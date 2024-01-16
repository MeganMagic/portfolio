import SkillCard from "@/components/SkillCard";

import ShapeFront from "@/assets/shape-frontend.svg";
import ShapeEnv from "@/assets/shape-env.svg";
import ShapeDesign from "@/assets/shape-design.svg";
import ShapeSparkle from "@/assets/shape-sparkle.svg";

const SkillSection = () => {
  return (
    <section>
      <h2>기술</h2>
      <p className="section-title">
        업무와 프로젝트를 하면서 다음과 같은 기술을 사용했습니다
      </p>

      <div className="cards flex flex-col gap-8 md:gap-10">
        <SkillCard
          color="blue"
          renderShape={options => <ShapeFront {...options} />}
          title="프론트엔드"
          items={[
            "HTML, CSS, JavaScript, TypeScript, React.js, Next.js",
            "Redux, Zustand, React-Query, Styled-Components, React-hook-form",
            "Jest, React-Testing-Library, Storybook",
          ]}
        />

        <SkillCard
          color="green"
          renderShape={options => <ShapeEnv {...options} />}
          title="환경 및 배포"
          items={[
            "Webpack, babel",
            "Git workflow",
            "AWS CodePipeline, AWS Amplify",
          ]}
        />

        <SkillCard
          color="lime"
          renderShape={options => <ShapeDesign {...options} />}
          title="그래픽 편집"
          items={["Adobe Photoshop, Illustrator, Premiere Pro", "Figma"]}
        />

        <SkillCard
          color="gray"
          renderShape={options => <ShapeSparkle {...options} />}
          title="기타"
          items={["Swift", "C, Python, Java"]}
        />
      </div>
    </section>
  );
};

export default SkillSection;
