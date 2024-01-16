import { forwardRef } from "react";

import cn from "classnames";

import LangSelect from "./LangSelect";
import Logo from "./Logo";

interface NavigationProps extends React.ComponentPropsWithoutRef<"nav"> {}

type NavRef = React.ComponentPropsWithRef<"nav">["ref"];

const Navigation = forwardRef(({ className, ...props }: NavigationProps, ref: NavRef) => {
  return (
    <nav className={cn(className, "w-full h-screen min-h-[550px] sticky top-0 flex-col")} ref={ref} {...props}>
      <div className="h-20  flex items-center">
        <Logo />
      </div>

      <div className="grid grid-cols-[24px_auto] text-xs gap-3 pt-4 mb-12 text-black/80 border-t border-t-black/25">
        <p className="col-span-2 text-sm font-extrabold">Contents</p>

        <p className="font-semibold">01</p>
        <p className="font-normal">간단 자기소개</p>

        <p className="font-semibold">02</p>
        <p className="font-normal">업무 및 프로젝트 경험</p>

        <p className="font-semibold">03</p>
        <p className="font-normal">프로젝트 상세</p>

        <p className="font-semibold">04</p>
        <p className="font-normal">블로그</p>

        <p className="font-semibold">05</p>
        <p className="font-normal">기술</p>

        <p className="font-semibold">06</p>
        <p className="font-normal">교육</p>
      </div>

      <div className="grid grid-cols-[60px_auto] text-xs gap-3 pt-4 text-black/80 border-t border-t-black/25">
        <p className="col-span-2 text-sm font-extrabold">Contact</p>

        <p className="font-semibold">전화번호</p>
        <p className="font-normal">010.3215.4462</p>

        <p className="font-semibold">이메일</p>
        <p className="font-normal">sjk.mari@gmail.com</p>

        <p className="font-semibold">Github</p>
        <p className="font-normal">@MeganMagic</p>
      </div>

      <div className="absolute bottom-0 w-full py-4 border-t border-t-black/25 ">
        <LangSelect />
        {/* <div>night mode</div> */}
      </div>
    </nav>
  );
});

export default Navigation;
