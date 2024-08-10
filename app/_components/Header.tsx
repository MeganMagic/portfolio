"use client";

import { ArrowUpRight } from "react-feather";

import cn from "classnames";
import { HTMLMotionProps, motion } from "framer-motion";
import Link from "next/link";

import Logo from "./Logo";
import { useSectionWatch } from "./SectionWatcher";

interface HeaderProps extends HTMLMotionProps<"header"> {}

const navItems = [
  { label: "기술", id: "skill" },
  { label: "경력", id: "experience" },
  { label: "프로젝트 상세", id: "project" },
  { label: "블로그", id: "blog" },
  { label: "Github", id: "Github", link: "https://github.com/MeganMagic" },
];

const Header = ({ className, ...props }: HeaderProps) => {
  const { activeId } = useSectionWatch();

  return (
    <motion.header
      className={cn(
        className,
        "w-full max-w-2xl h-16 px-6 md:px-8 sm:pr-4 md:pr-6 bg-dark/5 backdrop-blur-lg rounded-full",
        "flex justify-between items-center sticky top-4 z-50",
        "dark:bg-light/10 ",
      )}
      {...props}
    >
      <Link className="no-underline" href="#top">
        <Logo />
      </Link>

      <ul className="gap-2 items-center list-none p-0 indent-0 hidden sm:flex">
        {navItems.map(({ label, id, link }) => (
          <Link key={`header-item-${id}`} href={link ?? `#${id}`} target={link && "_blank"} className="no-underline">
            <li
              className={cn(
                "px-4 py-2 rounded-full flex gap-0.5 items-center transition-colors",
                activeId === id && "bg-light dark:bg-dark",
              )}
            >
              <span className="text-sm md:text-base font-medium whitespace-nowrap">{label}</span>
              {link && <ArrowUpRight className="w-5 h-5 stroke-[1.5] relative -top-0.5" />}
            </li>
          </Link>
        ))}
      </ul>
    </motion.header>
  );
};

export default Header;
