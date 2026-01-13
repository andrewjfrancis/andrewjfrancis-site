// app/sitemap.ts
import type { MetadataRoute } from "next";
import { ARTICLES } from "./writing/_data/articles";

const SITE = "https://andrewjfrancis.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: new Date() },
    { url: `${SITE}/now`, lastModified: new Date() },
    { url: `${SITE}/writing`, lastModified: new Date() },
    { url: `${SITE}/about`, lastModified: new Date() },
  ];

  const localEssays = ARTICLES.filter(
    (a) => a.source === "local" && a.slug
  ).map((a) => ({
    url: `${SITE}/writing/essays/${a.slug}`,
    lastModified: new Date(a.date + "T00:00:00"),
  }));

  return [...staticRoutes, ...localEssays];
}
