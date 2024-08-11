"use client";
import { useState } from "react";

import { Category, skill } from "@prisma/client";
import cn from "classnames";
import { motion, useMotionValue } from "framer-motion";

// import ShapeDesign from "@/assets/shape-design.svg";
// import ShapeEnv from "@/assets/shape-env.svg";
// import ShapeFront from "@/assets/shape-frontend.svg";
// import ShapeSparkle from "@/assets/shape-sparkle.svg";

import SkillItem from "./SkillItem";

interface SkillItemsProps {
  skills: skill[];
}
const SkillItems = ({ skills }: SkillItemsProps) => {
  const [activeCategory, setActiveCategory] = useState<string>();

  const activeCategoryX = useMotionValue(0);
  const activeCategoryWidth = useMotionValue(0);

  const handleCategoryClick = (e: React.MouseEvent, category: Category) => {
    if (activeCategory === category) {
      setActiveCategory(undefined);
      activeCategoryX.set(0);
      activeCategoryWidth.set(0);
    } else {
      setActiveCategory(category);
      if (e.currentTarget.parentElement) {
        const targetRect = (e.currentTarget as Element).getBoundingClientRect();
        const containerRect = e.currentTarget.parentElement.getBoundingClientRect();

        const x = targetRect.x - containerRect.x;
        const width = targetRect.width;
        activeCategoryX.set(x);
        activeCategoryWidth.set(width);
      }
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center">
      <nav className="bg-gray-100 p-1.5 rounded-full flex items-center relative">
        {[
          { name: "프론트엔드", value: Category.FRONTEND },
          { name: "라이브러리", value: Category.FRONTEND_LIBRARY },
          { name: "환경 및 배포", value: Category.ENV },
          { name: "디자인", value: Category.DESIGN },
        ].map(({ name, value }) => (
          <button
            key={`nav-item-${value}`}
            className={cn(
              "text-xs md:text-base font-medium text-gray-400 px-3 py-1 rounded-full",
              activeCategory === value && " text-gray-700",
            )}
            onClickCapture={e => handleCategoryClick(e, value)}
          >
            <p className="relative z-10">{name}</p>
          </button>
        ))}
        <motion.div
          className="absolute bg-background z-0 rounded-full top-1.5 bottom-1.5 left-0 transition-all"
          animate={{ opacity: activeCategory ? 1 : 0 }}
          style={{ x: activeCategoryX, width: activeCategoryWidth }}
          transition={{ duration: 0.5, type: "spring", stiffness: 700, damping: 30 }}
        />
      </nav>
      <div className="flex flex-wrap gap-4 max-w-96">
        {skills.map(skill => (
          <SkillItem
            key={`skill-item-${skill.id}`}
            label={skill.item}
            imageUrl={skill.blobUrl}
            isActive={!activeCategory || activeCategory === skill.category}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillItems;
