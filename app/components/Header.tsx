"use client";

import { forwardRef, useCallback, useState } from "react";
import { Menu } from "react-feather";

import cn from "classnames";

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
      <Logo />

      <button className="menu" onClick={toggle}>
        <Menu strokeWidth={1.5} />
      </button>

      <nav className={cn(open ? "block border-b border-b-gray-400" : "hidden", "absolute top-full w-full py-4 ")}>
        <div>contents</div>
        <div>contact</div>
        <div>controller</div>
      </nav>
    </header>
  );
});

export default Header;
