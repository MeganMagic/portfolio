import Link from "next/link";

import SlideUpInView from "@/_components/SlideUpInView";
import Shape from "@/assets/shape-chevron-down.svg";

const OutroSection = () => {
  return (
    <section className="py-20 md:py-24">
      <SlideUpInView>
        <p className="text-center text-2xl md:text-3xl font-semibold leading-normal md:leading-normal mb-4 md:mb-6">
          감사합니다
          <br />
          더 궁금한 점이 있다면
          <br />
          편하게 연락주세요
        </p>

        <div className="w-72 md:w-80 mx-auto grid grid-cols-3 text-sm md:text-base gap-2 md:gap-3 p-6 md:p-8 rounded-2xl bg-dark/5 dark:bg-light/10">
          <p className="font-semibold">전화번호</p>
          <p className="col-span-2">010.3215.4462</p>

          <p className="font-semibold">이메일</p>
          <p className="col-span-2">sjk.mari@gmail.com</p>

          <p className="font-semibold">Github</p>
          <Link href="https://github.com/MeganMagic" target="_blank" className="col-span-2">
            <p>@MeganMagic</p>
          </Link>
        </div>
      </SlideUpInView>
    </section>
  );
};

export default OutroSection;
