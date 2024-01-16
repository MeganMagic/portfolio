import Link from "next/link";
import Shape from "@/assets/shape-sparkle.svg";
import cn from "classnames";

interface ExpCardProps {
  id: number;
  period: string;
  onGoing?: boolean;
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  items: string[];
  links?: { label: string; href: string }[];
}

const ExpCard = ({
  id,
  period,
  onGoing,
  title,
  subTitle,
  items,
  links,
}: ExpCardProps) => {
  return (
    <div className="card">
      <div className="flex gap-2.5 items-center mb-4">
        <Shape className={cn(onGoing ? "text-blue" : "opacity-30")} />
        <p className="text-sm md:text-base font-normal opacity-60">{period}</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-base font-semibold ">{title}</p>
          {subTitle && (
            <p className="text-xs md:text-sm font-normal opacity-60">
              {subTitle}
            </p>
          )}
        </div>

        <ul className="list-disc list-inside -indent-5 pl-6">
          {items.map((data, index) => (
            <li
              key={`exp-${id}-item-${index}`}
              className="text-sm md:text-base font-normal mb-1 last:mb-0"
            >
              {data}
            </li>
          ))}
        </ul>

        {links && (
          <div className="flex gap-1 text-xs md:text-sm opacity-60">
            <p>관련 링크: </p>
            {links.map((link, index) => (
              <div key={`exp-${id}-link-${index}`}>
                <Link href={link.href} target="_blank">
                  {link.label}
                </Link>
                {index !== links.length - 1 && ","}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpCard;
