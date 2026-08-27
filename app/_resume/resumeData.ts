import blogs from "@/data/blogs";
import educations from "@/data/educations";
import experiences from "@/data/experiences";
import intros from "@/data/intros";
import projects from "@/data/projects";
import skills from "@/data/skills";
import type { Locale } from "@/i18n/routing";

import { toLines, toPlain } from "./text";

// The site is the origin source; the resume is a narrower view of it.
// `blogs` is intentionally unused here — referenced so the omission is explicit.
void blogs;

/**
 * Tuning knobs for length. Phase 1 renders everything so the real volume is
 * visible; content curation (and the A4 x2 target) is phase 2 — lower these
 * numbers to compress, and nothing else needs to change.
 */
export const LIMITS = {
  projects: Number.POSITIVE_INFINITY,
  projectPoints: Number.POSITIVE_INFINITY,
  experienceItems: Number.POSITIVE_INFINITY,
} as const;

const SKILL_CATEGORY_ORDER = ["FRONTEND", "FRONTEND_LIBRARY", "ENV", "DESIGN", "ETC"] as const;

export interface ResumeData {
  locale: Locale;
  name: string;
  contact: { email: string; phone: string; github: string };
  summary: { title: string; lines: string[] }[];
  experience: { title: string; subTitle: string[]; period: string; items: string[] }[];
  projects: { title: string; company: string; period: string; summary: string; points: string[]; stack: string[] }[];
  skills: { category: string; items: string[] }[];
  education: { title: string; subTitle: string; period: string; items: string[] }[];
  certification: { title: string; subTitle: string; period: string; items: string[] }[];
}

const NAMES: Record<Locale, string> = { ko: "송진경", en: "Jin-kyeong Song" };

/** Public on the site already (OutroSection); kept here so the PDF has one source. */
const EMAIL = "sjk.mari@gmail.com";
const GITHUB = "github.com/MeganMagic";

export function buildResumeData(locale: Locale): ResumeData {
  const phone = process.env.RESUME_PHONE;

  // Fail loudly: a missing value would otherwise ship a resume with a blank
  // contact field and only be noticed after someone downloaded it.
  if (!phone) {
    throw new Error("RESUME_PHONE is not configured");
  }

  const localeEducations = educations[locale];

  return {
    locale,
    name: NAMES[locale],
    contact: { email: EMAIL, phone, github: GITHUB },

    summary: intros[locale].map(intro => ({
      title: intro.title,
      lines: toLines(intro.detail),
    })),

    experience: experiences[locale]
      .filter(exp => exp.category === "WORK")
      .sort((a, b) => a.index - b.index)
      .map(exp => ({
        title: exp.title,
        subTitle: exp.sub_title ? toLines(exp.sub_title) : [],
        period: exp.period,
        items: exp.items.map(toPlain).slice(0, LIMITS.experienceItems),
      })),

    projects: projects[locale].slice(0, LIMITS.projects).map(project => ({
      title: project.title,
      company: project.company,
      period: project.period,
      summary: toPlain(project.summary),
      points: project.points.map(toPlain).slice(0, LIMITS.projectPoints),
      stack: project.stack,
    })),

    // `skills` is a flat, locale-independent list; group it for a compact block.
    skills: SKILL_CATEGORY_ORDER.map(category => ({
      category,
      items: skills.filter(skill => skill.category === category).map(skill => skill.item),
    })).filter(group => group.items.length > 0),

    education: localeEducations
      .filter(edu => edu.category === "EDUCATION")
      .map(edu => ({
        title: edu.title,
        subTitle: toPlain(edu.sub_title),
        period: edu.period,
        items: [],
      })),

    certification: localeEducations
      .filter(edu => edu.category === "CERTIFICATION")
      .map(edu => ({
        title: edu.title,
        subTitle: toPlain(edu.sub_title),
        period: edu.period,
        items: [],
      })),
  };
}
