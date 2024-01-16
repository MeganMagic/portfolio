import ExpCard from "@/components/ExpCard";

const ExperienceSection = () => {
  return (
    <section>
      <h2>업무 및 프로젝트 경험</h2>
      <p className="section-title">
        스타트업, 외주, 프로젝트 등 다양한 업무를 경험했습니다.
      </p>

      <div className="flex flex-col gap-12">
        <ExpCard
          id={0}
          period="2023 - 현재"
          onGoing
          title={
            <>
              가계부 공유 플랫폼 개발 프로젝트 <em>“티끌”</em>
            </>
          }
          items={[
            "React, TypeScript 기반의 SPA 개발. 모바일 / 데스크탑 대응 반응형 웹사이트 개발",
            "Redux 이용하여 클라이언트 상태 관리, React-Query 이용하여 서버 상태 관리 구현",
            `React-hook-form 활용하여 form 상태 관리 및 validation 구현`,
            `Figma 활용 유저 스토리 및 와이어프레임 작성, UI/UX 디자인`,
          ]}
          links={[
            {
              label: "Figma",
              href: "https://www.figma.com/file/ak0eHSwx6SW3cYfR9MdPmG/High-Fidelity?type=design&node-id=197-138&mode=design",
            },
            {
              label: "Github",
              href: "https://github.com/kdh-92/Tiggle",
            },
          ]}
        />

        <ExpCard
          id={1}
          period="2022 - 2023"
          title={
            <>
              IT 교육 부트캠프 스타트업 <em>“코드스테이츠”</em>
            </>
          }
          subTitle="Internal System Product팀, Frontend-Engineer"
          items={[
            "회사 홈페이지, 교육 관리 시스템(LMS) 개발 및 유지보수 (React.js, Next.js, Typescript 기반)",
            "어드민 시스템 MVP 모델 개발, ver.2까지 제품 고도화 (React.js, Typescript 기반)",
            "블로그 개발 및 검색엔진 최적화 작업 (유입트래픽 25.6% 상승)",
            "성능 최적화 TF, 디자인 시스템 TF 참여",
            "통합 로그인 시스템 개발, 제품 간 통합 로그인 상태관리 구현 ",
          ]}
          links={[
            {
              label: "웹사이트",
              href: "https://www.codestates.com/",
            },
            {
              label: "코드스테이츠 블로그",
              href: "https://www.codestates.com/blog",
            },
          ]}
        />

        <ExpCard
          id={2}
          period="2021.11 - 12"
          title={
            <>
              맹학교 미술 수업용 회화 작품 3D 프린팅 파일 아카이빙 프로젝트{" "}
              <br className="md:hidden" />
              <em>“Touch Art Archive”</em>
            </>
          }
          items={[
            "React, JavaScript(ES6) 기반의 SPA 개발. Carousel UI 구현",
            "Redux 이용하여 클라이언트 언어 상태 관리, 다언어 기능 구현",
            "Meta data, robots.txt, sitemap.xml 작성 등 기초적인 검색엔진최적화 작업",
          ]}
          links={[
            {
              label: "웹사이트",
              href: "http://touchartarchive.com/",
            },
            {
              label: "소개 영상",
              href: "https://youtu.be/o4dXz-8OKkk",
            },
          ]}
        />

        <ExpCard
          id={3}
          period="2021.09 - 11"
          title={
            <>
              자율주행 물류 로봇 회사 <em>“스탠다드 로봇”</em> 홈페이지 제작
              외주
            </>
          }
          subTitle="외주 UI/UX 디자이너 및 Frontend 개발자"
          items={[
            "React, JavaScript(ES6) 기반의 SPA 개발. Carousel UI 구현",
            "Redux 이용하여 클라이언트 언어 상태 관리, 다언어 기능 구현",
            "Meta data, robots.txt, sitemap.xml 작성 등 기초적인 검색엔진최적화 작업",
          ]}
        />

        <ExpCard
          id={4}
          period="2020 - 2021"
          title={
            <>
              서강대학교 Art&Technology 전공의 연간 학생 전시{" "}
              <br className="md:hidden" />
              <em>“Art&Technology Conference 2020”</em>
            </>
          }
          items={[
            "React, JavaScript(ES6) 기반의 SPA 개발. Carousel UI 구현",
            "Redux 이용하여 클라이언트 언어 상태 관리, 다언어 기능 구현",
            "Meta data, robots.txt, sitemap.xml 작성 등 기초적인 검색엔진최적화 작업",
          ]}
          links={[
            {
              label: "웹사이트",
              href: "https://www.atcbackup.meganmagic.com/",
            },
            {
              label: "Github",
              href: "https://github.com/MeganMagic/atc2020-refac-1",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
