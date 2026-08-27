import type { Locale } from "@/i18n/routing";

// Resume-only copy. Deliberately kept out of messages/*.json: next-intl ships
// namespaces to the client, and none of this is ever rendered in the browser.
export const labels: Record<Locale, Record<string, string>> = {
  ko: {
    role: "프론트엔드 개발자",
    summary: "핵심 역량",
    experience: "경력",
    projects: "주요 프로젝트",
    skills: "기술 스택",
    education: "학력",
    certification: "교육 · 자격",
    stack: "사용 기술",
    email: "이메일",
    phone: "연락처",
    github: "Github",
    generatedAt: "발급일",
    page: "쪽",
  },
  en: {
    role: "Frontend Developer",
    summary: "Core Strengths",
    experience: "Experience",
    projects: "Selected Projects",
    skills: "Tech Stack",
    education: "Education",
    certification: "Training & Certifications",
    stack: "Stack",
    email: "Email",
    phone: "Phone",
    github: "Github",
    generatedAt: "Issued",
    page: "Page",
  },
};

export const skillCategoryLabels: Record<Locale, Record<string, string>> = {
  ko: {
    FRONTEND: "Frontend",
    FRONTEND_LIBRARY: "Library · Tooling",
    ENV: "환경 · 인프라",
    DESIGN: "디자인",
    ETC: "기타",
  },
  en: {
    FRONTEND: "Frontend",
    FRONTEND_LIBRARY: "Library · Tooling",
    ENV: "Environment · Infra",
    DESIGN: "Design",
    ETC: "Etc",
  },
};
