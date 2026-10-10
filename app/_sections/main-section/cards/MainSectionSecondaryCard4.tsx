import MainProfile from "@/assets/main-secondary-profile-2.svg";

/**
 * Shapes for ID Card
 */
const MainSectionSecondaryCard4: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Lines */}
      <div className="w-full h-[50vh] px-6 flex flex-row justify-between">
        <div className="w-[10px] h-full bg-white/30 shadow-[inset_0_-4px_4px_-1px_rgb(var(--color-primary))]" />
        <div className="w-[10px] h-full bg-white/30 shadow-[inset_0_-4px_4px_-1px_rgb(var(--color-primary))]" />
      </div>

      {/* Card */}
      <div
        className="
          w-[220px] h-[300px] p-2 rounded
          bg-white/30 shadow-[8px_2px_2px_-1px_rgba(0,0,0,0.15)]
        "
      >
        <div className="w-full h-full bg-white/50 rounded relative">
          {/* Adornment */}
          <div className="w-2/3 h-3/4 absolute bottom-0 left-0 bg-primary/20 rounded-tr-full" />

          {/* Profile Image */}
          <div className="absolute bottom-0 right-0 overflow-hidden">
            <MainProfile />
          </div>

          {/* Text */}
          <div className="p-4 flex flex-col gap-3 text-primary-dark">
            {/* Company Logo */}
            <div className="w-12 h-3 rounded-full bg-primary/50" />
            <div>
              <p className="text-sm font-bold">송진경</p>
              <p className="text-sm">Jinkyong Song</p>
            </div>
            <div className="opacity/50">
              <p className="text-xs">Development Team</p>
              <p className="text-xs">Frontend engineer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSectionSecondaryCard4;
