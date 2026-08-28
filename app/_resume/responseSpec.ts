import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

/**
 * Router-agnostic pieces of the resume response.
 *
 * The heavy lifting lives in ResumeDocument/resumeData; everything here is pure
 * so the route file stays a thin adapter. That keeps the Pages Router handler
 * swappable for an App Router route handler once the project moves to React 19
 * (see the React 19 / @react-pdf reconciler mismatch that put it here).
 */

const FILENAME_BASE: Record<Locale, string> = {
  ko: "송진경_이력서",
  en: "Jin-kyeong-Song_Resume",
};

export const resolveLocale = (input: unknown): Locale =>
  routing.locales.includes(input as Locale) ? (input as Locale) : routing.defaultLocale;

/** YYYY-MM, used in both the filename and the PDF footer. */
export const stampFor = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

export const filenameFor = (locale: Locale, stamp: string) => `${FILENAME_BASE[locale]}_${stamp}.pdf`;

/**
 * RFC 5987 / 6266: an ASCII fallback plus a UTF-8 form, so a Korean filename
 * survives browsers that ignore `filename*`.
 */
export const contentDisposition = (filename: string) => {
  const ascii = filename.replace(/[^\x20-\x7E]/g, "_").replace(/"/g, "");
  return `attachment; filename="${ascii}"; filename*=UTF-8''${encodeURIComponent(filename)}`;
};

export const pdfHeaders = (filename: string, byteLength: number) => ({
  "Content-Type": "application/pdf",
  "Content-Length": String(byteLength),
  "Content-Disposition": contentDisposition(filename),
  // Belt and braces alongside robots.txt, in case the URL is ever linked.
  "X-Robots-Tag": "noindex, noarchive, nosnippet",
  "Cache-Control": "no-store",
});
