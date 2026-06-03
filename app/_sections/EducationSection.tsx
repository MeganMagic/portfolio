import EducationCard from "@/_components/EducationCard";
import SlideUpInView from "@/_components/SlideUpInView";
import educations from "@/data/educations";

export default function EducationSection() {
  const educationItems = educations.filter(d => d.category === "EDUCATION");
  const certifications = educations.filter(d => d.category === "CERTIFICATION");

  return (
    <section id="education">
      <SlideUpInView>
        <h2 className="section-eyebrow mb-6 md:mb-8">교육 및 어학</h2>

        <div className="flex flex-col gap-8 md:gap-10">
          {educationItems.map(data => (
            <EducationCard key={`edu-card-${data.id}`} {...data} />
          ))}
          <div className="w-full max-w-[600px] h-[1px] mx-auto my-3 md:my-5 bg-gradient-to-r from-foreground/0 via-foreground/15 to-foreground/0" />
          {certifications.map(data => (
            <EducationCard key={`edu-card-${data.id}`} {...data} />
          ))}
        </div>
      </SlideUpInView>
    </section>
  );
}
