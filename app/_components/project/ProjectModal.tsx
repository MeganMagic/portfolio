import cn from "classnames";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import projects from "@/data/projects";
import skills from "@/data/skills";
import type { Locale } from "@/i18n/routing";

import SkillItem from "../skill/SkillItem";

interface ProjectModalProps {
  id: number;
}

function getProjectById(id: number, locale: Locale) {
  const project = projects[locale].find(p => p.id === id);
  if (!project) {
    notFound();
  }

  const projectSkills = project.skill_ids
    .map(skillId => skills.find(s => s.id === skillId))
    .filter((s): s is (typeof skills)[number] => Boolean(s))
    .sort((a, b) => a.category.localeCompare(b.category));

  const items = [...project.items].sort((a, b) => (a.row_number ?? 0) - (b.row_number ?? 0));

  return {
    ...project,
    skills: projectSkills,
    items,
  };
}

export default function ProjectModal({ id }: ProjectModalProps) {
  const t = useTranslations("Project");
  const locale = useLocale() as Locale;
  const { title, sub_title, member, period, skills: projectSkills, links, items } = getProjectById(id, locale);

  const skillsElement = (
    <ul className="p-0 flex gap-2 list-none flex-wrap">
      {projectSkills.map(({ id: skillId, item, blobUrl }) => (
        <li key={`project-info-skill-${skillId}`} className="indent-0">
          <SkillItem size="xs" label={item} imageUrl={blobUrl} />
        </li>
      ))}
    </ul>
  );

  const linksElement = (
    <div className="flex gap-2">
      {links.map(({ href, label }) => (
        <Link key={`link-${label}`} href={href}>
          {label}
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <div id="project-modal-header" className="flex flex-col gap-3 md:gap-6">
        <div className="relative w-8 md:w-12 h-8 md:h-12">
          <Image className="object-contain" src={`/assets/shape-variant-${id % 9}.svg`} fill alt="shape" />
        </div>

        <p className="text-xl md:text-2xl font-semibold leading-normal break-keep mb-4">{parse(title)}</p>

        <div className="flex gap-6 flex-wrap">
          {[
            { title: t("modal.description"), content: parse(sub_title), isFull: true },
            {
              title: t("modal.techStack"),
              content: skillsElement,
              isFull: true,
            },
            { title: t("modal.members"), content: member },
            { title: t("modal.period"), content: period },
            ...(links.length ? [{ title: t("modal.links"), content: linksElement }] : []),
          ].map(({ title, content, isFull }) => (
            <div key={`project-info-${title}`} className={cn("flex flex-col gap-1", isFull && "w-full")}>
              <p className="text-sm font-medium text-foreground/50">{title}</p>
              <div className="text-sm font-semibold text-foreground/80">{content}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[1px] min-h-[1px] bg-foreground/10 my-10 md:my-12" />

      <div id="project-modal-content" className="text-sm md:text-base flex flex-col gap-2">
        <p className="font-semibold text-base md:text-lg">{t("modal.details")}</p>
        <ol className="list-decimal break-keep">
          {items.map((item, index) => (
            <li key={`project-item-${index}`} className="mb-6 md:mb-8 last:mb-0">
              <span>{item.title}</span>
              <div className="w-0.5 h-2" />
              {item.content && (
                <ul className="text-foreground/80 marker:text-foreground/60">
                  {item.content.map((text, contentIndex) => (
                    <li key={`project-desc-${index}-${contentIndex}`} className="mb-1 last:mb-0">
                      {text}
                    </li>
                  ))}
                </ul>
              )}
              {item.blobUrl && (
                <div
                  className={cn(
                    "relative w-full  mt-4",
                    item.image_ratio === "SQUARE"
                      ? "h-[312px] md:h-[602px]"
                      : item.image_ratio === "PORTRAIT"
                        ? "h-[468px] md:h-[903px]"
                        : "h-52 md:h-96",
                  )}
                >
                  <Image className="object-contain object-left-top" fill src={item.blobUrl} alt={item.title} />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
