// app/sitemap.ts
import type { MetadataRoute } from "next";
import {
  ARTICLES,
  getAllArticles,
  getTotalPages,
  getYears,
  getArticlesByYear,
  getTagCounts,
} from "./writing/_data/articles";

const SITE = "https://andrewjfrancis.com";

function toUTCDate(iso: string): Date {
  // iso = YYYY-MM-DD
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return new Date(0);
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);
  return new Date(Date.UTC(y, mo - 1, d));
}

function getLatestContentDate(): Date {
  const all = getAllArticles();
  const maxIso = all.reduce<string | null>((acc, a) => {
    if (!acc) return a.date;
    return a.date > acc ? a.date : acc;
  }, null);

  return maxIso ? toUTCDate(maxIso) : new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const latest = getLatestContentDate();

  // ---- Core pages (don’t "change" on every deploy) ----
  const routes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: latest },
    { url: `${SITE}/now`, lastModified: latest },
    { url: `${SITE}/writing`, lastModified: latest },
    { url: `${SITE}/writing/tags`, lastModified: latest },
    { url: `${SITE}/about`, lastModified: latest },
  ];

  // ---- Writing index pagination (/writing/page/[page]) ----
  const all = getAllArticles();
  const totalWritingPages = getTotalPages(all.length);

  for (let page = 2; page <= totalWritingPages; page++) {
    routes.push({
      url: `${SITE}/writing/page/${page}`,
      lastModified: latest,
    });
  }

  // ---- Year pages (/writing/[year] and /writing/[year]/page/[page]) ----
  for (const year of getYears()) {
    const yearItems = getArticlesByYear(year);
    const yearPages = getTotalPages(yearItems.length);

    routes.push({
      url: `${SITE}/writing/${year}`,
      lastModified: latest,
    });

    for (let page = 2; page <= yearPages; page++) {
      routes.push({
        url: `${SITE}/writing/${year}/page/${page}`,
        lastModified: latest,
      });
    }
  }

  // ---- Tag pages (/writing/tags/[tag] and /writing/tags/[tag]/page/[page]) ----
  // getTagCounts() returns TagSlug -> count
  const tagCounts = getTagCounts();
  for (const [tagSlug, count] of tagCounts.entries()) {
    if (count <= 0) continue;

    const tagPages = getTotalPages(count);

    routes.push({
      url: `${SITE}/writing/tags/${tagSlug}`,
      lastModified: latest,
    });

    for (let page = 2; page <= tagPages; page++) {
      routes.push({
        url: `${SITE}/writing/tags/${tagSlug}/page/${page}`,
        lastModified: latest,
      });
    }
  }

  // ---- Local essays (/writing/essays/[slug]) ----
  const localEssays = ARTICLES.filter(
    (a) => a.source === "local" && a.slug
  ).map((a) => ({
    url: `${SITE}/writing/essays/${a.slug}`,
    lastModified: toUTCDate(a.date),
  }));

  return [...routes, ...localEssays];
}
