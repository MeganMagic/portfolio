import { renderToBuffer } from "@react-pdf/renderer";

import ResumeDocument from "@/_resume/ResumeDocument";
import { registerFonts } from "@/_resume/fonts";
import { filenameFor, pdfHeaders, resolveLocale, stampFor } from "@/_resume/responseSpec";
import { buildResumeData } from "@/_resume/resumeData";

import type { NextApiRequest, NextApiResponse } from "next";

/**
 * Lives in the Pages Router on purpose: the App Router compiles server code
 * against Next's bundled React 19, while @react-pdf's reconciler binds to the
 * project's React 18 — the two don't recognise each other's elements. Move this
 * to app/api/resume/route.tsx once the project is on React 19.
 *
 * POST-only: crawlers and scrapers issue GET, so this keeps the resume — and the
 * contact details only it carries — out of search indexes and bulk-collected
 * datasets without putting a form in a visitor's way. Unlike an App Router route
 * handler, a Pages Router handler receives every method, so the guard is manual.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const locale = resolveLocale((req.body as { locale?: unknown } | undefined)?.locale);
    const stamp = stampFor(new Date());

    registerFonts();

    const data = buildResumeData(locale);
    const buffer = await renderToBuffer(<ResumeDocument data={data} generatedAt={stamp} />);

    for (const [header, value] of Object.entries(pdfHeaders(filenameFor(locale, stamp), buffer.length))) {
      res.setHeader(header, value);
    }

    res.status(200).send(buffer);
  } catch (error) {
    // Never surface the original error: it can carry the values being rendered.
    console.error("[api/resume] render failed:", error instanceof Error ? error.message : "unknown error");
    res.status(500).json({ error: "Failed to generate resume" });
  }
}
