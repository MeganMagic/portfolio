import { routing } from "@/i18n/routing";

import type { MetadataRoute } from "next";

const BASE_URL = "https://www.meganmagic.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Single-page portfolio: one entry per locale.
  return routing.locales.map(locale => ({
    url: `${BASE_URL}/${locale}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 1,
  }));
}
