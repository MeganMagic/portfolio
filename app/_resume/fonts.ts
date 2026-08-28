import path from "node:path";

import { Font } from "@react-pdf/renderer";

// Pretendard ships static OTFs in its npm package. Reading them from node_modules
// keeps the binaries out of git; next.config.js traces them into the deployed
// function via outputFileTracingIncludes.
const FONT_DIR = path.join(process.cwd(), "node_modules/pretendard/dist/public/static");

let registered = false;

export function registerFonts() {
  if (registered) return;

  Font.register({
    family: "Pretendard",
    fonts: [
      { src: path.join(FONT_DIR, "Pretendard-Regular.otf"), fontWeight: 400 },
      { src: path.join(FONT_DIR, "Pretendard-SemiBold.otf"), fontWeight: 600 },
      { src: path.join(FONT_DIR, "Pretendard-Bold.otf"), fontWeight: 700 },
    ],
  });

  // Korean doesn't hyphenate; the default English hyphenator splits words mid-syllable.
  Font.registerHyphenationCallback(word => [word]);

  registered = true;
}
