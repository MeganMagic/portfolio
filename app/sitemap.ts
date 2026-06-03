import projects from "@/data/projects";

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectSites: MetadataRoute.Sitemap = projects.map(({ id }) => ({
    url: `https://www.meganmagic.com/project/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://www.meganmagic.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectSites,
  ];
}
