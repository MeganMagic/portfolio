import Image from "next/image";

const MainSection = () => {
  return (
    <div className="w-full py-16 flex flex-col gap-10">
      <h1>
        프론트엔드 개발자
        <br />
        송진경 입니다.
      </h1>

      <div className="w-full h-32 md:h-48 xl:h-56 relative">
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
