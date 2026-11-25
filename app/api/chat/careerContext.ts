// Builds the career context the chat model is allowed to answer from.
// Reuses the same static data the portfolio renders, so the bot never drifts
// from what the site says.

import blogs from "@/data/blogs";
import educations from "@/data/educations";
import experiences from "@/data/experiences";
import intros from "@/data/intros";
import projects from "@/data/projects";
import skills from "@/data/skills";

const stripHtml = (text: string) => text.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, "");

const bullets = (items: string[]) => items.map(item => `  - ${stripHtml(item)}`).join("\n");

function buildCareerContext(): string {
  const intro = intros.ko.map(i => `### ${i.title}\n${stripHtml(i.detail)}`).join("\n\n");

  const work = experiences.ko
    .map(
      e =>
        `### ${e.title} (${e.period}) — ${stripHtml(e.sub_title ?? "")} [${e.category === "WORK" ? "업무" : "프로젝트"}]\n${bullets(e.items)}`,
    )
    .join("\n\n");

  const cases = projects.ko
    .map(
      p =>
        `### ${p.title} — ${p.company} (${p.period})\n${p.summary}\n${bullets(p.points)}\n  - 기술: ${p.stack.join(", ")}`,
    )
    .join("\n\n");

  const skillList = skills
    .filter(s => s.items.length > 0)
    .map(s => `- ${s.category}: ${s.items.join(" / ")}`)
    .join("\n");

  const education = educations.ko
    .map(e => `- ${e.title} ${e.sub_title} (${e.period})${e.items.length ? `\n${bullets(e.items)}` : ""}`)
    .join("\n");

  const blogList = blogs.ko.map(b => `- ${b.title} (${b.date})`).join("\n");

  return [
    "# 송진경 — 프론트엔드 개발자",
    "## 핵심 역량",
    intro,
    "## 경력",
    work,
    "## 주요 프로젝트 상세",
    cases,
    "## 기술 스택",
    skillList,
    "## 학력 및 어학",
    education,
    "## 블로그 글",
    blogList,
  ].join("\n\n");
}

export const careerContext = buildCareerContext();
