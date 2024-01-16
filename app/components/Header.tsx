"use client";

import { forwardRef, useCallback, useState } from "react";
import { Menu } from "react-feather";

import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import LangSelect from "./LangSelect";
import Logo from "./Logo";

interface HeaderProps extends React.ComponentPropsWithoutRef<"header"> {}
type HeaderRef = React.ComponentPropsWithRef<"header">["ref"];

const Header = forwardRef(({ className, ...props }: HeaderProps, ref: HeaderRef) => {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <header
      className={cn(
        className,
        "w-full h-16 border-b bg-white border-b-gray-400 flex justify-between items-center sticky top-0 z-50",
      )}
      ref={ref}
      {...props}
    >
      <Link className="no-underline" href="#top">
        <Logo />
      </Link>

      <button className="menu" onClick={toggle}>
        <Menu strokeWidth={1.5} />
      </button>

      <AnimatePresence initial={false}>{open && <HeaderNavigation />}</AnimatePresence>
    </header>
  );
});

export default Header;

const HeaderNavigation = () => {
  return (
    <motion.div
      layout
      className={"bg-white w-full py-4 border-b border-b-gray-400 absolute top-[calc(100%_+_1px)] overflow-hidden"}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto", transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col text-xs gap-3 text-black/80">
          <p className="text-sm font-extrabold">Contents</p>
          {[
            { label: "간단 자기소개", id: "intro" },
            { label: "업무 및 프로젝트 경험", id: "experience" },
            { label: "프로젝트 상세", id: "project" },
            { label: "블로그", id: "blog" },
            { label: "기술", id: "skills" },
            { label: "교육", id: "education" },
          ].map((data, index) => (
            <Link key={`nav-${index}`} href={`#${data.id}`} className="grid grid-cols-[32px_auto] no-underline">
              <p className="font-semibold">{String(index + 1).padStart(2, "0")}</p>
              <p className="font-normal">{data.label}</p>
            </Link>
          ))}
        </div>

        <div className="controller flex gap-3 justify-end">
          <LangSelect />
        </div>
      </div>
    </motion.div>
  );
};
