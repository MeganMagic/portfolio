import FeatureItems from "@/_components/FeatureItems";
import SlideUpInView from "@/_components/SlideUpInView";
import intros from "@/data/intros";

export default function IntroSection() {
  return (
    <section id="intro">
      <SlideUpInView>
        <p className="section-eyebrow">핵심 역량</p>
        <p className="section-title">유연하게 소통하고 견고하게 개발합니다.</p>
        <FeatureItems features={intros} />
      </SlideUpInView>
    </section>
  );
}
