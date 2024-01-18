import SlideUpInView from "@/components/SlideUpInView";

const IntroSection = () => {
  return (
    <section id="intro">
      <SlideUpInView>
        <h2>간단 자기소개</h2>
        <p className="section-title">안녕하세요, 저는 2년차 프론트엔드 개발자입니다.</p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {[
            {
              title: "WHAT",
              detail: (
                <>
                  저는 스타트업과 여러 프로젝트에서 <span className="text-primary">TypeScript</span>와
                  <span className="text-primary">React.js</span>를 이용해 웹 프론트엔드를 개발했습니다. 또, 아키텍처
                  적용, 성능 최적화, 검색엔진 최적화 등의 작업을 하며 코드를 개선한 경험도 있습니다.
                </>
              ),
            },
            {
              title: "HOW",
              detail: (
                <>
                  저는 개발을 할 때 <span className="text-primary">제품의 성장</span>을 가장 중요하게 생각합니다. 사용자
                  경험 개선, 검색엔진 최적화, 테스트 코드 작성 등 제품의 성장에 기여할 수 있는 다양한 요소를 고려하며
                  개발합니다. 회사 블로그의 검색엔진 최적화 작업을 통해 자연 유입 트래픽을 25.6% 증가시키고, 경쟁사의
                  트래픽을 추월하는 성과를 내기도 했습니다.
                </>
              ),
            },
            {
              title: "GROWTH",
              detail: (
                <>
                  개발자로서 더 성장하기 위해, 저는 <span className="text-primary">토이 프로젝트</span>를 꾸준히
                  진행하고 있습니다. 토이 프로젝트를 개발하면서 어려웠던 기술, 새로운 기술을 탐구하고 배워나가며
                  성장하고 있습니다. 현재는 작년 여름부터 4명의 팀원과 함께 시작한 프로젝트를 하고 있으며, 협업 및 운영
                  경험도 함께 쌓고 있습니다.
                </>
              ),
            },
          ].map(({ title, detail }) => (
            <div key={`intro-card-${title}`} className="flex flex-col gap-1">
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-sm font-normal leading-normal text-foreground/80">{detail}</p>
            </div>
          ))}
        </div>
      </SlideUpInView>
    </section>
  );
};

export default IntroSection;
