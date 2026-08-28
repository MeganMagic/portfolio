"use client";

import { useState } from "react";
import { Download } from "react-feather";

import { useLocale, useTranslations } from "next-intl";

import CTAButton from "./CTAButton";

/** Prefers the RFC 5987 `filename*` form, falling back to plain `filename`. */
const parseFilename = (header: string | null, fallback: string) => {
  if (!header) return fallback;

  const utf8 = header.match(/filename\*=UTF-8''([^;]+)/i);
  if (utf8) {
    try {
      return decodeURIComponent(utf8[1]);
    } catch {
      // fall through to the ASCII form
    }
  }

  return header.match(/filename="([^"]+)"/i)?.[1] ?? fallback;
};

const ResumeDownloadButton = () => {
  const t = useTranslations("Main");
  const locale = useLocale();
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleDownload = async () => {
    if (pending) return;

    setPending(true);
    setFailed(false);

    try {
      // POST, not a plain link: the endpoint is deliberately GET-less.
      const response = await fetch("/api/resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale }),
      });

      if (!response.ok) throw new Error(`status ${response.status}`);

      const blob = await response.blob();
      const filename = parseFilename(response.headers.get("Content-Disposition"), "resume.pdf");
      const url = URL.createObjectURL(blob);

      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = filename;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(url);
    } catch {
      setFailed(true);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <CTAButton
        label={pending ? t("resumeDownloading") : t("resumeDownload")}
        suffix={!pending && <Download className="w-4 h-4" />}
        onClick={handleDownload}
        disabled={pending}
        aria-busy={pending}
      />
      {failed && <p className="text-xs text-foreground/50">{t("resumeDownloadFailed")}</p>}
    </div>
  );
};

export default ResumeDownloadButton;
