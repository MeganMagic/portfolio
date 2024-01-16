import Shape1 from "@/assets/shape-variant-1.svg";
import Shape2 from "@/assets/shape-variant-2.svg";
import Shape3 from "@/assets/shape-variant-3.svg";
import Shape4 from "@/assets/shape-variant-4.svg";
import Shape5 from "@/assets/shape-variant-5.svg";
import Shape6 from "@/assets/shape-variant-6.svg";
import Shape7 from "@/assets/shape-variant-7.svg";
import Shape8 from "@/assets/shape-variant-8.svg";
import ProjectCard from "@/components/ProjectCard";
import SlideUpInView from "@/components/SlideUpInView";

const ProjectSection = () => {
  return (
    <SlideUpInView>
      <section id="project">
        <h2>프로젝트 상세</h2>
        <p className="section-title">주요 프로젝트의 세부 사항을 확인해보세요</p>

        <div className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ProjectCard
            renderShape={options => <Shape1 {...options} />}
            color="green"
            title={
              <>
                코드스테이츠 웹사이트
                <br />
                개발 및 유지보수
              </>
            }
            subTitle="정기적으로 부트캠프 랜딩페이지를 업데이트하고, 페이지 및 컴포넌트를 리뉴얼했습니다."
          />

          <ProjectCard
            renderShape={options => <Shape2 {...options} />}
            color="lime"
            title={<>티끌 MVP 모델(ver.0) 개발</>}
            subTitle={`공유 가계부 플랫폼 "티끌"의 MVP 모델을 설계하고, 디자인하고, 프론트엔드를 개발했습니다.`}
          />

          <ProjectCard
            renderShape={options => <Shape3 {...options} />}
            color="blue"
            title={
              <>
                {" "}
                코드스테이츠
                <br />
                통합 로그인 개발
              </>
            }
            subTitle="한 번의 로그인으로 코드스테이츠의 여러 서비스를 이용할 수 있는 통합 로그인 서비스의 프론트엔드를 개발했습니다."
          />

          <ProjectCard
            renderShape={options => <Shape4 {...options} />}
            color="green"
            title={
              <>
                {" "}
                코드스테이츠 블로그 <br />
                개발 및 검색엔진 최적화
              </>
            }
            subTitle="기존 Wordpress로 운영하던 블로그를 Wordpress를 어드민으로 활용하는 자체 블로그로 개발했습니다."
          />

          <ProjectCard
            renderShape={options => <Shape5 {...options} />}
            color="lime"
            title={
              <>
                코드스테이츠 웹사이트 <br />
                성능 최적화 프로젝트
              </>
            }
            subTitle="팀의 프론트엔드 개발자들과 성능 최적화 스터디 진행 후, 학습한 방법을 웹사이트에 적용했습니다."
          />

          <ProjectCard
            renderShape={options => <Shape6 {...options} />}
            color="blue"
            title={
              <>
                코드스테이츠 웹사이트 <br />
                디자인 시스템 개발 프로젝트
              </>
            }
            subTitle="랜딩페이지 개발 시 리소스를 줄이고 통일된 사용자 경험을 제공하기 위해, 디자인 시스템을 개발했습니다."
          />

          <ProjectCard
            renderShape={options => <Shape7 {...options} />}
            color="green"
            title={
              <>
                수강생 지원 및 선발 <br />
                어드민 시스템
                <br />
                MVP 모델 개발
              </>
            }
            subTitle="부트캠프 수강을 희망하는 사용자가 지원서를 제출하고, 이를 관리자가 확인하고 수강생을 선발할 수 있는 어드민 시스템을 개발했습니다."
          />

          <ProjectCard
            renderShape={options => <Shape8 {...options} />}
            color="lime"
            title={
              <>
                수강생 지원 및 선발 <br />
                어드민 시스템
                <br /> 자동 심사(ver.2) 개발
              </>
            }
            subTitle="관리자가 심사 기준을 설정하고, 설정된 기준에 맞춰 지원서를 일관적으로 자동 심사할 수 있는 기능을 개발했습니다."
          />
        </div>
      </section>
    </SlideUpInView>
  );
};

export default ProjectSection;
