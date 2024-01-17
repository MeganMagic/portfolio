"use client";

import Shape1 from "@/assets/shape-variant-1.svg";
import Shape2 from "@/assets/shape-variant-2.svg";
import Shape3 from "@/assets/shape-variant-3.svg";
import Shape4 from "@/assets/shape-variant-4.svg";
import Shape5 from "@/assets/shape-variant-5.svg";
import Shape6 from "@/assets/shape-variant-6.svg";
import Shape7 from "@/assets/shape-variant-7.svg";
import Shape8 from "@/assets/shape-variant-8.svg";
import SlideUpInView from "@/components/SlideUpInView";
import ProjectCard from "@/components/project/ProjectCard";
import data from "@/data/project";

const ProjectSection = () => {
  return (
    <section id="project">
      <SlideUpInView>
        <h2>프로젝트 상세</h2>
        <p className="section-title">주요 프로젝트의 세부 사항을 확인해보세요</p>

        <div className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ProjectCard id={0} renderShape={options => <Shape1 {...options} />} color="green" project={data[0]} />
          <ProjectCard id={1} renderShape={options => <Shape2 {...options} />} color="lime" project={data[1]} />
          <ProjectCard id={2} renderShape={options => <Shape3 {...options} />} color="blue" project={data[2]} />
          <ProjectCard id={3} renderShape={options => <Shape4 {...options} />} color="green" project={data[3]} />
          <ProjectCard id={4} renderShape={options => <Shape5 {...options} />} color="lime" project={data[4]} />
          <ProjectCard id={5} renderShape={options => <Shape6 {...options} />} color="blue" project={data[5]} />
          <ProjectCard id={6} renderShape={options => <Shape7 {...options} />} color="green" project={data[6]} />
          <ProjectCard id={7} renderShape={options => <Shape8 {...options} />} color="lime" project={data[7]} />
        </div>
      </SlideUpInView>
    </section>
  );
};

export default ProjectSection;
