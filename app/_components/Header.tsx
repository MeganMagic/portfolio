"use client";

import { useEffect, useState } from "react";
import { GitHub, Menu, X } from "react-feather";

import cn from "classnames";
import { useAnimate, stagger } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

import useOnClickOutside from "@/utils/useOnClickOutside";

import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import { useSectionWatch } from "./SectionWatcher";
import ThemeToggle from "./ThemeToggle";

type HeaderProps = React.HTMLAttributes<HTMLHeadElement>;

const GITHUB_URL = "https://github.com/MeganMagic";

const navItems = [
  { key: "skill", id: "skill" },
  { key: "experience", id: "experience" },
  { key: "project", id: "project" },
  { key: "blog", id: "blog" },
] as const;

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

const Header = ({ className, ...props }: HeaderProps) => {
  const t = useTranslations("Header");
  const { activeId } = useSectionWatch();

  const [isExpanded, setIsExpanded] = useState(false);
  const [scope, animate] = useAnimate();

  const toggleMobileMenu = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    animate([
      [
        ".mobile-menu",
        { clipPath: isExpanded ? "inset(0% 0% 0% 0% round 16px)" : "inset(0% 10% 100% 90% round 16px)" },
        { type: "spring", bounce: 0, duration: 0.5 },
      ],
      [
        ".mobile-menu-item",
        { opacity: isExpanded ? 1 : 0 },
        { duration: 0.2, delay: isExpanded ? staggerMenuItems : 0, at: "-0.2" },
      ],
    ]);
  }, [isExpanded]);

  useOnClickOutside(scope, () => setIsExpanded(false));

  return (
    <header className="w-full sticky top-4 z-50 px-3 sm:px-0" {...props} ref={scope}>
      <div
        className={cn(
          className,
          "w-full h-12 md:h-14 pl-4 md:pl-5 pr-2 md:pr-3 bg-foreground/[0.07] backdrop-blur-lg rounded-full",
          "flex justify-between items-center gap-2 md:gap-3",
          "dark:bg-light/10",
        )}
      >
        <Link className="no-underline flex items-center gap-2.5 md:gap-3 shrink-0" href="#top">
          <Logo />
          <p className="text-sm md:text-base whitespace-nowrap leading-none">
            <span className="font-extrabold text-foreground">{t("name")}</span>
            <span className="font-normal text-foreground/45"> | {t("role")}</span>
          </p>
        </Link>

        <ul className="hidden md:flex gap-0.5 lg:gap-1 items-center list-none p-0 indent-0 m-0">
          {navItems.map(({ key, id }) => (
            <Link key={`header-item-${id}`} href={`#${id}`} className="no-underline">
              <li
                className={cn(
                  "px-3 py-1.5 rounded-full flex items-center transition-colors",
                  activeId === id && "bg-background",
                )}
              >
                <span
                  className={cn(
                    "text-xs lg:text-sm font-semibold whitespace-nowrap",
                    activeId === id ? "text-foreground" : "text-foreground/60",
                  )}
                >
                  {t(`nav.${key}`)}
                </span>
              </li>
            </Link>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-foreground/55 hover:text-foreground transition-colors"
            >
              <GitHub className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </Link>
          </div>

          <button
            type="button"
            className="block md:hidden text-foreground/70"
            onClick={toggleMobileMenu}
            aria-label={t(isExpanded ? "closeMenu" : "openMenu")}
            aria-expanded={isExpanded}
          >
            {isExpanded ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "mobile-menu",
          "absolute top-14 left-1 right-1",
          "h-fit px-5 py-4 mt-2 flex flex-col md:hidden indent-0",
          "bg-foreground/[0.07] backdrop-blur-lg rounded-2xl dark:bg-light/10",
          isExpanded ? "pointer-events-auto" : "pointer-events-none",
        )}
        style={{ clipPath: "inset(0% 50% 100% 50% round 10px)" }}
      >
        <ul className="flex flex-col list-none p-0 m-0 indent-0">
          {navItems.map(({ key, id }) => (
            <Link
              key={`header-item-m-${id}`}
              href={`#${id}`}
              className={cn("mobile-menu-item", "no-underline")}
              onClick={() => setIsExpanded(false)}
            >
              <li className="py-2.5 text-base font-semibold whitespace-nowrap text-foreground/80">{t(`nav.${key}`)}</li>
            </Link>
          ))}
        </ul>

        <div className="mobile-menu-item flex items-center justify-between gap-3 pt-4 mt-2 border-t border-foreground/10">
          <LanguageSwitcher variant="inline" />
          <div className="flex items-center gap-5">
            <ThemeToggle />
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-foreground/55 hover:text-foreground transition-colors"
            >
              <GitHub className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
