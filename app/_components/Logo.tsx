import { HTMLAttributes } from "react";

import cn from "classnames";

interface LogoProps extends HTMLAttributes<HTMLDivElement> {}

const Logo = ({ className, ...props }: LogoProps) => {
  // TODO: onClick 동작 추가
  // TODO: Button으로 변경, cursor 변경

  return (
    <div className={cn("relative", className)} {...props}>
      <div className="shape flex gap-2.5">
        <div className="w-4 h-4 rounded-full bg-blue" />
        <div className="w-4 h-4 rounded-full bg-green" />
        <div className="w-4 h-4 rounded-full bg-lime" />
      </div>
    </div>
  );
};

export default Logo;
