import MainProfile from "@/assets/main-secondary-profile.svg";

/**
 * Shapes for Mobile profile
 */
const MainSectionSecondaryCard1 = () => {
  return (
    <div className="w-[270px] h-[480px] bg-white/15 p-2 rounded-2xl shadow-sm relative">
      {/* Content */}
      <div className="w-full h-full bg-white/10 rounded-xl relative flex flex-col py-10 items-center gap-5 overflow-hidden">
        {/* Mobile UI Mock */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[64px] h-[12px] rounded-full bg-primary" />

        {/* Profile Image */}
        <div className=" flex-shrink-0 flex flex-col items-center gap-2">
          <div className="w-[120px] h-[120px] rounded-xl bg-white/20 overflow-hidden">
            <MainProfile />
          </div>
          <div className="flex flex-col gap-[2px] items-center">
            <p className="text-sm text-white/75 font-semibold">송진경</p>
            <p className="text-sm text-white/40">@MeganMagic</p>
            <p className="text-xs text-white/40">Enginnering Quality & Growth</p>
          </div>
        </div>

        {/* Posts */}
        <div className="px-5 w-full flex flex-col gap-2.5">
          <div className="bg-white/20 rounded-lg w-full h-[160px] p-3 flex flex-col gap-3">
            <div className="w-1/2 h-4 bg-white/20 rounded-lg" />
            <div className="w-9/12 h-4 bg-white/20 rounded-lg" />
            <div className="w-9/12 h-4 bg-white/20 rounded-lg" />
            <div className="w-5/12 h-4 bg-white/20 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSectionSecondaryCard1;
