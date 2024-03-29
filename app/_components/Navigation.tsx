"use client";

import { forwardRef } from "react";

import cn from "classnames";
import Link from "next/link";

// import DarkModeSwitch from "./DarkModeSwitch";
// import LangSelect from "./LangSelect";
import Logo from "./Logo";

interface NavigationProps extends React.ComponentPropsWithoutRef<"nav"> {}

type NavRef = React.ComponentPropsWithRef<"nav">["ref"];

const Navigation = forwardRef(({ className, ...props }: NavigationProps, ref: NavRef) => {
  return (
    <nav className={cn(className, "w-full h-screen min-h-[550px] sticky top-0 flex-col")} ref={ref} {...props}>
      <div className="h-20  flex items-center">
        <Logo />
      </div>

      <div className="flex flex-col text-xs gap-3 pt-4 mb-12 text-foreground/80 border-t border-t-black/25 dark:border-t-white/25">
        <p className="text-sm font-extrabold">Contents</p>
        {[
          { label: "간단 자기소개", id: "intro" },
          { label: "업무 및 프로젝트 경험", id: "experience" },
          { label: "프로젝트 상세", id: "project" },
          { label: "블로그", id: "blog" },
          { label: "기술", id: "skill" },
          { label: "교육", id: "education" },
        ].map((data, index) => (
          <Link key={`nav-${index}`} href={`#${data.id}`} className="grid grid-cols-[32px_auto] no-underline">
            <p className="font-semibold">{String(index + 1).padStart(2, "0")}</p>
            <p className="font-normal">{data.label}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-[60px_auto] text-xs gap-3 pt-4 text-foreground/80 border-t border-t-black/25 dark:border-t-white/25">
        <p className="col-span-2 text-sm font-extrabold">Contact</p>

        <p className="font-semibold">전화번호</p>
        <p className="font-normal">010.3215.4462</p>

        <p className="font-semibold">이메일</p>
        <p className="font-normal">sjk.mari@gmail.com</p>

        <p className="font-semibold">Github</p>
        <Link href="https://github.com/MeganMagic" target="_blank">
          <p className="font-normal">@MeganMagic</p>
        </Link>
      </div>

      {/* <div className="absolute bottom-0 w-full py-4 border-t border-t-black/25 dark:border-t-white/25 flex flex-col gap-2">
        <DarkModeSwitch />
        <LangSelect />
      </div> */}
    </nav>
  );
});

export default Navigation;
