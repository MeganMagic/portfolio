import { HTMLAttributes } from "react";

import cn from "classnames";

interface LogoProps extends HTMLAttributes<HTMLDivElement> {}

const Logo = ({ className, ...props }: LogoProps) => {
  // TODO: onClick 동작 추가
  // TODO: Button으로 변경, cursor 변경

  return (
    <div className={cn("relative group w-fit mt-2", className)} {...props}>
      <div className="absolute top-0 left-0 text-2xl xl:text-3xl font-extrabold group-hover:opacity-0">^.+</div>
      <div className="text-2xl xl:text-3xl font-bold opacity-0 group-hover:opacity-100">송진경</div>
    </div>
  );
};

export default Logo;
