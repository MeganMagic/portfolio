/**
 * Shapes for Folder
 */
const MainSectionSecondaryCard3: React.FC = () => {
  return (
    <div className="relative w-[280px] h-[200px]">
      {/* Folder Back */}
      <div
        className="
          w-[82%] h-[95%] relative top-[5%] rounded-lg
          bg-gradient-to-b from-primary-light to-primary-dark
        "
      />

      {/* Folder Inner */}
      <div
        className="
          w-[73%] h-[90%] bg-[#DAECFF] rounded-lg
          absolute top-0 left-[5%]"
      />

      {/* Folder Cover (svg) */}
      <div>
        <svg
          width="275"
          height="169"
          className="absolute bottom-0"
          viewBox="0 0 275 169"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-primary-light"

            d="M42.3905 5.87761C43.3458 2.40576 46.5029 0 50.1038 0L118.53 0C119.626 0 120.71 0.225072 121.715 0.661261L159.233 16.9429C160.238 17.3791 161.322 17.6042 162.418 17.6042L266.68 17.6042C272.061 17.6042 275.907 22.8095 274.327 27.9531L232.74 163.349C231.708 166.708 228.606 169 225.093 169H8.00458C2.72209 169 -1.1102 163.971 0.291241 158.878L42.3905 5.87761Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default MainSectionSecondaryCard3;
