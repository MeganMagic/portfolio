import Shape from "@/assets/shape-sparkle.svg";

const EducationSection = () => {
  return (
    <section>
      <h2>교육</h2>
      <p className="section-title">교육 사항</p>

      <div className="cards flex flex-col gap-8 md:gap-10">
        <div className="card text-sm md:text-base flex flex-col gap-3 md:grid md:grid-cols-[128px_auto] md:items-start">
          <div className="flex items-center gap-2">
            <Shape className="text-black/30" />
            <p className="text-black/60">2016-2023</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-base md:text-lg font-semibold">서강대학교</p>
            <p className="text-black/60 font-normal">Art & Technology 전공, 융합소프트웨어 복수전공</p>
            <ul className="list-disc list-inside -indent-5 pl-6">
              <li className="mb-2 last:mb-0">
                웹 프로그래밍 기초, 이미지 프로세싱 및 인터렉티브 미디어 프로그래밍 학습
                <br />
                기초 디자인 및 UI/UX 디자인 학습
              </li>
              <li className="mb- last:mb-0">
                C, Java, 자료구조, 알고리즘 등 기초 CS 지식 학습
                <br />
                Python, R, 빅데이터 프로그래밍, 코퍼스 언어학 등 데이터 프로그래밍 학습
              </li>
            </ul>
          </div>
        </div>

        <div className="card text-sm md:text-base flex flex-col gap-3 md:grid md:grid-cols-[128px_auto] md:items-start">
          <div className="flex items-center gap-2">
            <Shape className="text-black/30" />
            <p className="text-black/60">2013 - 2016</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-base md:text-lg font-semibold">한국디지털미디어고등학교</p>
            <p className="text-black/60 font-normal">디지털콘텐츠과 </p>
            <ul className="list-disc list-inside -indent-5 pl-6">
              <li className="mb-2 last:mb-0">
                컴퓨터 그래픽, 3D 모델링, 영상 편집, 컴퓨터 음악 등 디지털 콘텐츠 제작 기술 교육
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
