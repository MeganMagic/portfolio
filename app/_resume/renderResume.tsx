import { renderToBuffer } from "@react-pdf/renderer";

import type { Locale } from "@/i18n/routing";

import ResumeDocument from "./ResumeDocument";
import { registerFonts } from "./fonts";
import { buildResumeData } from "./resumeData";

/**
 * Within a single deployment the rendered PDF is a pure function of
 * (locale, stamp): the content is compiled in from app/data and RESUME_PHONE is
 * fixed for the process, so nothing else can change the bytes. That makes a
 * process-lifetime memo safe by construction — a redeploy replaces the process
 * and drops the cache, which is exactly the invalidation we want.
 *
 * The stamp is part of the key because it is the one value that moves while a
 * warm instance is alive: an instance that survives a month boundary would
 * otherwise keep serving a PDF footered with the previous month.
 *
 * (A package.json version would add nothing here — it cannot change without a
 * new process, which already clears the cache.)
 */
const cache = new Map<string, Buffer>();

// In dev the cache would keep serving a stale PDF while app/data is being edited.
const cacheable = process.env.NODE_ENV === "production";

export async function renderResume(locale: Locale, stamp: string): Promise<Buffer> {
  const key = `${locale}:${stamp}`;

  if (cacheable) {
    const hit = cache.get(key);
    if (hit) return hit;
  }

  registerFonts();

  const buffer = await renderToBuffer(<ResumeDocument data={buildResumeData(locale)} generatedAt={stamp} />);

  if (cacheable) cache.set(key, buffer);

  return buffer;
}
