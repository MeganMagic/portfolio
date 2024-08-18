import { Download } from "react-feather";

import Link from "next/link";

const DownloadButton = () => {
  const downloadUrl = process.env.NEXT_PUBLIC_RESUME_DOWNLOAD_URL;

  return (
    <Link href={downloadUrl ?? "#"} target="_blank" className="no-underline">
      <button className="px-5 py-2 bg-foreground/5 rounded-lg flex items-center gap-2 hover:bg-foreground/10 transition-colors">
        <p className="text-foreground/65 font-semibold text-base md:text-sm tracking-tight">이력서 다운로드</p>
        <Download className="text-foreground/65 w-4 h-4" />
      </button>
    </Link>
  );
};

export default DownloadButton;
