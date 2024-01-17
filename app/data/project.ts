import { Project } from "@/components/project/types";

type ProjectData = Project[];

const data: ProjectData = [
  {
    title: `코드스테이츠 웹사이트\n개발 및 유지보수`,
    subTitle: "정기적으로 부트캠프 랜딩페이지를 업데이트하고, 페이지 및 컴포넌트를 리뉴얼했습니다.",
    info: {
      period: "2022.04 ~ 2023.08 (상시 업무)",
      member: "5명 (FE 5)",
      skills: ["Next.js", "TypeScript", "Styled-components", "AWS CodePipeline"],
    },
    description: [
      {
        title: "부트캠프 모집 일정에 맞춰 정기적으로 반응형 랜딩페이지 개발",
        items: [
          "Mobile / Tablet / Desktop 사이즈에 대응",
          "Notion Api 활용해 일부 값을 REST API로 받아와 사용함. (변경이 잦은 데이터 한정)",
        ],
      },
      {
        title: "사용자 유입 및 부트캠프 지원율 향상을 위한 마케팅 도구 설정",
        items: [
          `그로스 마케터와 주 1회 정기회의를 가짐. 가설에 맞춰 사용자 행동 추적을 위한 코드 작성\n(Hackle AB 테스트 및 GA4 이벤트 사용)`,
          "Meta data 관리, dynamic sitemap 작성, Heading tag 구조 정리 등 검색엔진 최적화 개선 작업 진행",
        ],
      },
      {
        title: "Github을 이용한 협업 및 업무 효율화",
        items: [
          "Pull Request를 통해 동료 프론트엔드 개발자와 코드 리뷰",
          "Git-flow 브랜치 전략 사용. (관리 비용의 증가로 추후 trunk-base flow로 변경)",
          "Github workflow 이용하여 테스트, 빌드, 배포 과정 자동화",
        ],
      },
    ],
    links: [{ label: "코드스테이츠 홈페이지", forwardLink: "https://www.codestates.com" }],
  },
  {
    title: `티끌 MVP 모델(ver.0) 개발`,
    subTitle: `공유 가계부 플랫폼 "티끌"의 MVP 모델을 설계하고, 디자인하고, 프론트엔드를 개발했습니다.`,
    info: {
      period: "2023.08 ~ (진행 중)",
      member: "4명 (FE 2, BE 2)",
      skills: ["React.js", "TypeScript", "Redux", "React-hook-form", "React-Query", "Figma"],
    },
    description: [
      {
        title: "티끌 UI/UX 디자인",
        items: [
          "기획 아이디어를 기반으로 사용자 스토리, 와이어 프레임 작성",
          "Figma 이용하여 반응형 웹서비스 UI 디자인",
          "Figma-Token 활용하여 Figma Library의 값을 Github과 연동",
        ],
      },
      {
        title: "거래 상세보기 페이지, 거래 생성/수정하기 페이지 페이지, 프로필 수정하기 페이지 개발",
        items: [
          "거래 조회/수정/삭제 기능 구현, 프로필 조회/수정 기능 구현",
          "이미지 업로드 및 미리보기 기능을 제공하는 useUpload hook 작성",
          "form 상태 관리 및 validation 구현 (React-hook-form 이용)",
        ],
      },
      {
        title: "내 거래 모아보기 페이지 개발, 거래 필터링 기능 구현",
        items: [
          "Context를 통해 컴포넌트의 form 상태 관리 (React-hook-form의 formContext 이용)",
          "BottomSheet, Popover, Modal 등 Overlay Components 구현",
        ],
      },
      {
        title: "로그인 상태 관리 로직 작성",
        items: [
          "로그인 완료 후 기존 페이지로 돌아가도록 하는 continueUrl 상태관리 구현 (Redux, Redux-persist 활용)",
          "로그인 여부 및 로그인 관련 메소드 제공하는 useLogin hook 작성",
          "페이지 진입 전 로그인 여부를 확인하고 props에 profile을 전달하는 withAuth HOC 작성",
        ],
      },
    ],
    links: [
      {
        label: "티끌 Figma",
        forwardLink:
          "https://www.figma.com/file/ak0eHSwx6SW3cYfR9MdPmG/High-Fidelity?type=design&node-id=197-138&mode=design",
      },
      { label: "티끌 Github", forwardLink: "https://github.com/kdh-92/Tiggle" },
    ],
  },
  {
    title: `코드스테이츠\n통합 로그인 개발`,
    subTitle:
      "한 번의 로그인으로 코드스테이츠의 여러 서비스를 이용할 수 있는 통합 로그인 서비스의 프론트엔드를 개발했습니다.",
    info: {
      period: "2023.04 ~ 2023.08",
      member: "5명 (PM 1, PD 1, FE 2, BE 1)",
      skills: ["Next.js", "TypeScript", "Storybook", "zustand", "React-hook-form", "jest", "react-testing-library"],
    },
    description: [
      {
        title: "마이페이지 개발",
        items: [
          "사용자 정보 조회, 수정 기능 개발",
          "이메일, 전화번호 변경시 인증 과정 구현. 유효성 검사 과정에 대한 단위 테스트 코드 작성",
          "UI 리뷰 및 QA를 위해 페이지 단위 Storybook 코드 작성 (msw 연결, Chromatic 이용해 배포)",
        ],
      },
      {
        title: "통합 로그인 상태 관리 개발",
        items: [
          "localStorage의 통합 로그인 토큰을 서로 다른 도메인의 페이지에서 접근할 수 있도록 구현\n(cross-storage 라이브러리 사용)",
          "로그인 완료 후 기존 페이지로 돌아가도록 하는 continueUrl 상태관리 구현 (zustand, localStorage 활용)",
          "로그인이 필요한 페이지 접근시 로그인 여부 및 토큰 유효성을 확인하는 HOC 작성",
        ],
      },
      {
        title: "레거시 서비스 코드 관리",
        items: [
          "레거시 서비스에 통합 로그인 과정 연결 (신규 서비스 개발 이전까지 활용할 목적)",
          "미사용 코드 삭제. 유관부서에 사용 여부  및 계획 확인 후 진행",
          "절대 경로 적용, Craco 이용하여 webpack alias 수정",
        ],
      },
    ],
  },
  {
    title: `코드스테이츠 블로그\n개발 및 검색엔진 최적화`,
    subTitle: "기존 Wordpress로 운영하던 블로그를 Wordpress를 어드민으로 활용하는 자체 블로그로 개발했습니다.",
    info: {
      period: "2022.07 ~ 2022.09",
      member: "5명 (PM 1, PD 1, FE 1, 콘텐츠 마케터 1, 마케팅 컨설턴트 1)",
      skills: ["Next.js", "TypeScript", "Styled-components", "GraphQL"],
    },
    description: [
      {
        title: "Wordpress API 이용하여 홈페이지 내부에 블로그 구축",
        items: [
          "Wordpress API의 over fetch 문제를 해결하기 위해, 플러그인은 이용해 GraphQL 방식으로 통신",
          "기존 wordpress blog 주소 redirection 설정. 정규표현식을 이용하여 하위 경로 분석, 대응되는 페이지로 이동",
        ],
      },
      {
        title: "검색엔진 최적화 개선 작업",
        items: [
          "Server Side Rendering 방식으로 구현 및 각 콘텐츠마다 Slug Url 부여",
          "non-www 페이지로 접근시, www으로 리다이렉션",
          "Meta data 관리, Heading tag 구조 관리, Img 태그에 alt text 입력, 페이지 이동시 a 태그 사용 지향 등 작업",
          "8개월 간 자연 유입 트래픽 25.6% 증가, 경쟁사 트래픽 추월",
        ],
      },
    ],
    links: [{ label: "코드스테이츠 블로그", forwardLink: "https://www.codestates.com/blog" }],
  },
  {
    title: `코드스테이츠 웹사이트\n성능 최적화 프로젝트`,
    subTitle: "팀의 프론트엔드 개발자들과 성능 최적화 스터디 진행 후, 학습한 방법을 웹사이트에 적용했습니다.",
    info: {
      period: "2023.05 ~ 2023.07",
      member: "5명 (FE 5)",
      skills: ["Next.js", "TypeScript"],
    },
    description: [
      {
        title: "프론트엔드 성능 개선 스터디 진행",
        items: ["<프론트엔드 성능 최적화 가이드> 책으로 한 달 동안 업무 외 시간에 스터디 진행"],
      },
      {
        title: "성능 개선 계획 수립",
        items: [
          "성능 개선 정도를 확인 할 수 있는 지표 선정 (Chrome LightHouse 점수 선택)",
          "학습한 내용을 기반으로 현재 홈페이지에서 진행할 수 있는 성능 개선 과제 목록 작성. 이후 스터디원끼리 과제 분담",
        ],
      },
      {
        title: "성능 개선 작업 진행",
        items: [
          "JS 번들 사이즈 감소: lodash, framer 등 라이브러리 최적화, 날짜 관련 라이브러리를 momet에서 dayjs로 변경, import 방식 변경 등)",
          "애니메이션 최적화: reflow, repaint를 발생시키는 애니메이션 삭제 또는 수정, Intersection Observer 이용하여 스크롤 이벤트 부하 감소)",
          "이미지 사이즈 최적화 및 지연로딩 적용",
          "2개월 간 LightHouse 점수 11% 증가",
        ],
      },
    ],
  },
  {
    title: `코드스테이츠 웹사이트\n디자인 시스템 개발 프로젝트`,
    subTitle: "랜딩페이지 개발 시 리소스를 줄이고 통일된 사용자 경험을 제공하기 위해, 디자인 시스템을 개발했습니다.",
    info: {
      period: "2023.02 ~ 2023.04",
      member: "3명 (FE 2, PD 1)",
      skills: ["Next.js", "TypeScript", "Storybook"],
    },
    description: [
      {
        title: "컴포넌트 재활용성 및 확장성을 위해 Atomic Design Pattern 적용",
        items: ["디자이너와 주기적으로 회의하며, 컴포넌트의 단계, 이름, 변수 등을 Figma와 코드를 일치 시킴"],
      },
      {
        title: "Storybook 설치 및 Configuration 작업 진행",
        items: ["최신 배포된 Storybook ver.7(작업일 기준)의 주요 변경 사항 정리하여 공유, 예시 코드 작성"],
      },
      {
        title: "선언적 컴포넌트 작성",
        items: [
          "Toast 컴포넌트를 띄우는 과정을 추상화하여, 토스트 노출 이벤트를 trigger하는 ‘useToast’ 함수 작성",
          "Zustand, React Portal 이용. 오픈소스 UI 라이브러리 코드 분석하여 참고",
        ],
      },
    ],
    links: [
      {
        label: "[블로그] 선언적 토스트 컴포넌트 만들기",
        forwardLink: "https://velog.io/@mari/declarative-programming-with-toast-component",
      },
    ],
  },
  {
    title: `수강생 지원 및 선발\n어드민 시스템\nMVP 모델 개발`,
    subTitle:
      "부트캠프 수강을 희망하는 사용자가 지원서를 제출하고, 이를 관리자가 확인하고 수강생을 선발할 수 있는 어드민 시스템을 개발했습니다.",
    info: {
      period: "2022.04 ~ 2022.06",
      member: "6명 (PM 1, PD 1, BE 1, FE 3)",
      skills: ["React.js", "TypeScript", "Sass", "Storybook", "GraphQL", "Apollo-client"],
    },
    description: [
      {
        title: "질문지 조회, 생성, 수정, 삭제 기능 구현",
      },
      {
        title: "질문지 수정 시 자동 저장 기능 개발",
        items: [
          "n초마다 작업 내용을 Local Storage에 저장, 정상적인 방법으로 페이지 이탈 시 LocalStorage의 내용 삭제. 페이지 진입 시 Local Storage에 내용이 있는 경우, 자동 저장 내용 불러오기 여부를 물어보는 Modal 노출",
          "React Ref 이용하여 SetInterval의 Callback 함수의 state 값 업데이트",
        ],
      },
      {
        title: "공용 컴포넌트 개발 (Button, Select, Input, Checkbox, modal 등)",
      },
    ],
  },
  {
    title: `수강생 지원 및 선발\n어드민 시스템\n자동 심사(ver.2) 개발`,
    subTitle:
      "관리자가 심사 기준을 설정하고, 설정된 기준에 맞춰 지원서를 일관적으로 자동 심사할 수 있는 기능을 개발했습니다.",
    info: {
      period: "2022.09 ~ 2023.02",
      member: "7명 (PM 1, PD 1, BE 1, FE 4)",
      skills: ["React.js", "TypeScript", "Sass", "Zustand", "React-query"],
    },
    description: [
      {
        title: "서버 언어 및 통신 방법 변경에 따른, 데이터 통신 관련 코드 리팩토링",
        items: [
          "통신 방식이 GraphQL에서 REST APIs로 변경되어, Apollo-Client를 React-Query로, Apollo Codegen을 Openapi-typescript-codegen(api 통신 함수 자동 생성, api 데이터의 타입 정의 자동 생성)로 대체",
          "위 라이브러리 설치 후 configuration 작업 담당. 팀원들에게 간단한 사용 방법 및 예시 코드 정리하여 공유",
        ],
      },
      {
        title: "심사 기준 에디터 개발",
        items: [
          "중첩된 Form Field 배열 UI 구현, zustand 이용하여 각 기준의 상태 관리",
          `각 심사 기준을 Logic이라는 타입의 Object로 store에 저장, Logic에 대한 CRUD 기능을 하는 dispatcher를 작성\n(immer.js 활용하여 불변성 보장하며 Object의 값 수정)`,
        ],
      },
    ],
  },
];

export default data;
