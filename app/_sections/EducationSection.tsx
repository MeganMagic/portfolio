import parse from "html-react-parser";

import SlideUpInView from "@/_components/SlideUpInView";
import Shape from "@/assets/shape-sparkle.svg";
import prisma from "@/lib/prisma";

async function getEducations() {
  const response = await prisma.education.findMany();
  return response.map(({ sub_title, ...res }) => ({ subTitle: sub_title, ...res }));
}

export default async function EducationSection() {
  const educations = await getEducations();

  return (
    <section id="education">
      <SlideUpInView>
        <h2>교육</h2>

        <div className="cards flex flex-col gap-12 md:gap-16">
          {educations.map(({ id, period, title, subTitle, items }) => (
            <div
              key={`edu-card-${id}`}
              className="card text-sm md:text-base flex flex-col gap-3 md:grid md:grid-cols-[128px_auto] md:items-start"
            >
              <div className="flex items-center gap-2">
                <Shape className="text-foreground/30" />
                <p className="text-foreground/60">{period}</p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-base md:text-lg font-semibold">{title}</p>
                  <p className="text-foreground/60 font-normal">{subTitle}</p>
                </div>

                <ul className="list-disc list-inside -indent-5 pl-6">
                  {items.map((item, index) => (
                    <li key={`edu-card-item-${index}`} className="mb-2 last:mb-0">
                      {parse(item)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </SlideUpInView>
    </section>
  );
}
