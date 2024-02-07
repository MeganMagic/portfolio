import Image from "next/image";

const MainSection = () => {
  return (
    <div id="main" className="w-full pt-16 pb-24 flex flex-col gap-10 md:gap-16">
      <h1>
        프론트엔드 개발자
        <br />
        <em>송진경</em> 입니다.
      </h1>

      <div className="w-full h-32 md:h-48 relative">
        <Image
          className="object-contain object-left"
          src="/assets/hero-image.png"
          alt="triangle, circle, and rectangle"
          fill
          priority
        />
      </div>
    </div>
  );
};

export default MainSection;
