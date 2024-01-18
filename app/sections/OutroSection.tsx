import Shape from "@/assets/shape-chevron-down.svg";
import SlideUpInView from "@/components/SlideUpInView";

const OutroSection = () => {
  return (
    <section className="py-20 md:py-24">
      <SlideUpInView>
        <p className="text-2xl md:text-4xl font-semibold leading-normal md:leading-normal mb-4 md:mb-6">
          감사합니다
          <br />
          더 궁금한 점이 있다면
          <br />
          편하게 연락주세요
        </p>

        <Shape className="w-16 text-point mb-10 md:mb-16 xl:w-24 xl:rotate-90 xl:mb-0" />
        <div className="hidden xl:block h-[calc(100vh_-_580px)]" />

        <div className="grid grid-cols-[108px_auto] text-sm md:text-base gap-2 md:gap-3 xl:hidden">
          <p className="text-base md:text-lg font-semibold col-span-2 mb-2">Contact</p>

          <p className="font-semibold">전화번호</p>
          <p>010.3215.4462</p>

          <p className="font-semibold">이메일</p>
          <p>sjk.mari@gmail.com</p>

          <p className="font-semibold">Github</p>
          <p>@MeganMagic</p>
        </div>
      </SlideUpInView>
    </section>
  );
};

export default OutroSection;
