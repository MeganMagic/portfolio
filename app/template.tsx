"use client";

import { OverlayProvider } from "@toss/use-overlay";

export default function Template({ children }: { children: React.ReactNode }) {
  return <OverlayProvider>{children}</OverlayProvider>;
}
