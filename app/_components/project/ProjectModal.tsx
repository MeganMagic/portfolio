import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

import prisma from "@/lib/prisma";
import { parsePrismaJSON } from "@/utils/parsePrisma";

interface ProjectModalProps {
  id: number;
}

async function getProjectById(id: number) {
  const responseProject = await prisma.project.findUniqueOrThrow({ where: { id } });
  const responseItems = await prisma.projectItem.findMany({ where: { projectId: id } });

  const { links, ...res } = responseProject;
  return {
    links: links.map(link => parsePrismaJSON<{ href: string; label: string }>(link)),
    items: responseItems.map(({ title, content }) => ({ title, content })),
    ...res,
  };
}

export default async function ProjectModal({ id }: ProjectModalProps) {
  const { title, member, period, skills, links, items } = await getProjectById(id);

  return (
    <>
      <div id="project-modal-header" className="flex flex-col gap-3 md:gap-4 mb-10 md:mb-16">
        <div className="relative w-8 md:w-12 h-8 md:h-12">
          <Image className="object-contain" src={`/assets/shape-variant-${id}.svg`} fill alt="shape" />
        </div>

        <p className="text-xl md:text-2xl font-semibold leading-normal break-keep">{parse(title)}</p>
        <div className="text-sm md:text-base font-normal">
          <p className="mb-1">{period}</p>
          <p>참여인원 {member}</p>
        </div>
      </div>

      <div id="project-modal-content" className="flex flex-col gap-8 md:gap-12">
        <div className="text-sm md:text-base flex flex-col gap-2">
          <p className="font-semibold text-base md:text-lg">기술 스택</p>
          <p>{skills.join(", ")}</p>
        </div>

        <div className="text-sm md:text-base flex flex-col gap-2">
          <p className="font-semibold text-base md:text-lg">상세 내용</p>
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
              </li>
            ))}
          </ol>
        </div>

        {links && links.length > 0 && (
          <div className="text-sm md:text-base flex flex-col gap-2">
            <p className="font-semibold text-base md:text-lg">관련 링크</p>
            <ul className="text-foreground/80">
              {links.map((link, index) => (
                <li key={`project-link-${index}`} className="mb-2">
                  <Link href={link.href} target="_blacnk">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
