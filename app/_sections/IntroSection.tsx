import parse from "html-react-parser";

import SlideUpInView from "@/_components/SlideUpInView";
import prisma from "@/lib/prisma";

async function getIntro() {
  const response = await prisma.intro.findMany();
  return response;
}

export default async function IntroSection() {
  const intro = await getIntro();

  return (
    <section id="intro">
      <SlideUpInView>
        <h2>간단 자기소개</h2>
        <p className="section-title">안녕하세요, 저는 2년차 프론트엔드 개발자입니다.</p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {intro.map(({ id, title, detail }) => (
            <div key={`intro-card-${id}`} className="flex flex-col gap-1">
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-sm font-normal leading-normal text-foreground/80">{parse(detail)}</p>
            </div>
          ))}
        </div>
      </SlideUpInView>
    </section>
  );
}
