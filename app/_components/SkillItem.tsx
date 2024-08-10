import cn from "classnames";
import Image from "next/image";

interface SkillItemProps {
  size?: "md" | "sm";
  label: string;
  imageUrl: string;
}

// md = 48px;
// sm = 32px;

const SkillItem = ({ size = "md", label, imageUrl }: SkillItemProps) => {
  return (
    <div className={cn("relative group", size === "md" && "w-12 h-12", size === "sm" && "w-8 h-8")}>
      <Image
        className="rounded-md shadow-md"
        fill={true}
        src={imageUrl}
        alt={label}
        sizes={
          size === "md"
            ? "(max-width: 640px) 13vw, (max-width: 768px) 8vw, 6vw"
            : size === "sm"
              ? "(max-width: 640px) 9vw, (max-width: 768px) 5vw, 4vw"
              : undefined
        }
      />
      <p className="absolute -bottom-1 translate-y-full left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-foreground/75 text-background rounded text-xs md:text-sm text-center whitespace-nowrap font-normal invisible group-hover:visible">
        {label}
      </p>
    </div>
  );
};

export default SkillItem;
