import { Globe } from "react-feather";

const LangSelect = () => {
  return (
    <div className="flex items-center gap-1">
      <Globe className="w-4 h-4 text-black opacity-45" />
      <select className="text-xs font-semibold">
        <option>한국어</option>
        <option>영어</option>
      </select>
    </div>
  );
};

export default LangSelect;
