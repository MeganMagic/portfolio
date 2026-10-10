import React from "react";

import classNames from "classnames";

/**
 * Shapes for Resume paper
 */
const MainSectionSecondaryCard2: React.FC = () => {
  return (
    <div
      className="
        w-[400px] h-[400px] rotate-90 relative
        bg-gradient-to-t from-primary to-white/90
      "
    >
      {/* Content */}
      <div className="p-4 text-primary">
        <p className="text-lg text-center font-bold mb-2">Resume</p>

        {/* block 1 */}
        <div className="w-full px-2 py-1 text-md font-bold">Personal Detail</div>
        <div className="flex flex-row text-xs border-t-2 border-primary mb-5">
          {/* profile image */}
          <div className="w-1/3 h-[stretch] bg-primary/20 border-b border-primary/50" />

          <div className="w-full grid grid-cols-[1fr_2fr]">
            {[
              { key: "name", label: "Name", value: "Jinkyong Song" },
              { key: "birth", label: "Birth", value: "199X.00.00" },
              { key: "email", label: "Email", value: "sjk.mari@gmail.com" },
              { key: "phone", label: "Phone", value: "010-1234-5678" },
            ].map(({ key, label, value }) => (
              <React.Fragment key={key}>
                <div className="px-2 py-1 bg-primary/10 text-left border-b border-primary/50">{label}</div>
                <div className="px-2 py-1 text-left border-b border-primary/50">{value}</div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* block 2 */}
        <div className="w-full px-2 py-1 text-md font-bold">Work Experience</div>
        <div className="w-full border-t-2 border-primary grid grid-cols-[auto_auto_2fr] text-xs">
          {[
            { key: "thead", label: "Company", period: "Period", role: "Role" },
            { key: "elice", label: "Elice", period: "2025.04 -", role: "Platform Div. Front-end" },
            { key: "visang", label: "Visang", period: "2024.03 - 2025.04", role: "Software development" },
            { key: "coz", label: "Codestates", period: "2022.04 ~ 2023.08", role: "Internal system. Front-end" },
            { key: "other", label: "Some company", period: "2020.08 ~ 2021.12", role: "Front-end development" },
          ].map(({ key, ...columns }) => (
            <React.Fragment key={key}>
              {Object.entries(columns).map(([column, value]) => (
                <div
                  key={`${key}-${column}`}
                  className={classNames(
                    "px-2 py-1 border-b border-primary",
                    key === "thead" && "bg-primary/10 font-bold",
                  )}
                >
                  {value}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSectionSecondaryCard2;
