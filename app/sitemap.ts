import projects from "@/data/projects";
import { routing } from "@/i18n/routing";

import type { MetadataRoute } from "next";

const BASE_URL = "https://www.meganmagic.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Project ids are locale-independent; use one locale's list to enumerate them.
  const projectIds = projects.ko.map(({ id }) => id);

  return routing.locales.flatMap(locale => [
    {
      url: `${BASE_URL}/${locale}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    ...projectIds.map(id => ({
      url: `${BASE_URL}/${locale}/project/${id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]);
}
