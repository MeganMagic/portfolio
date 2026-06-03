// Static portfolio data — hand-maintained.
// (Originally migrated from a Prisma/Postgres DB; the generation pipeline has been retired.)

import type { Intro } from "./types";

const intros: Intro[] = [
  {
    id: 1,
    title: "모던 프론트엔드 개발",
    detail:
      "React.js를 이용한 프론트엔드 개발경험이 있으며, Javascript(ES6), typescript에 능숙합니다. Next.js와 더불어 핵심적인 React library 활용 경험이 있습니다.",
    blobUrl: "/assets/intros/feature1.png",
  },
  {
    id: 2,
    title: "웹사이트 개선 및 최적화",
    detail:
      "웹사이트를 개발하고 유지보수하면서, 웹사이트의 성능을 측정하고 개선했습니다.<br/>또, 검색엔진 최적화 작업을 통해 유입 트래픽을 6개월간 25.6% 증가시킨 경험이 있습니다.",
    blobUrl: "/assets/intros/feature2.png",
  },
  {
    id: 3,
    title: "커뮤니케이션 및 협업",
    detail:
      "Github 이용한 협업 경험이 있으며, Jira, Slack, Notion 등의 협업 도구 사용 경험도 있습니다.<br/>기획, 디자인, 총무 등 다양한 직무 경험을 기반으로 다른 직군과 원활한 커뮤니케이션이 가능합니다.",
    blobUrl: "/assets/intros/feature3.png",
  },
];

export default intros;
