import { Gothic_A1 } from "next/font/google";

import { OverlayProvider } from "@/util/useOverlay";

import type { Metadata } from "next";

import "./globals.css";

const inter = Gothic_A1({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "송진경 | 프론트엔드 개발자",
  description:
    "프론트엔드 개발자 송진경입니다. 모던 웹 프레임워크를 이용한 개발에 능숙하며, 제품의 성장을 목표로 개발합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OverlayProvider>{children}</OverlayProvider>
      </body>
    </html>
  );
}
