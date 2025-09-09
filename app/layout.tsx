import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Gothic_A1 } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

import type { Metadata } from "next";

import "./globals.css";

const inter = Gothic_A1({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meganmagic.com"),
  title: "송진경 | 프론트엔드 개발자",
  description:
    "프론트엔드 개발자 송진경의 포트폴리오입니다. React, Typescript, Next.js 기반의 웹 프론트엔드를 개발합니다.",
  keywords: ["프론트엔드", "프론트엔드 개발자", "프론트엔드 개발자 포트폴리오"],
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout(props: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextIntlClientProvider>
          {props.children}
          {props.modal}
          <div id="modal-root" />
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
