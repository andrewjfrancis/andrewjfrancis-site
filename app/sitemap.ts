// app/sitemap.ts
import type { MetadataRoute } from "next";
import {
  ARTICLES,
  getAllArticles,
  getTotalPages,
  getYears,
  getArticlesByYear,
  getTagCounts,
  getPagedArticles,
  getArticlesByTag,
} from "./writing/_data/articles";
import { tagFromSlug } from "./writing/_data/tags";
import { STATIC_LASTMOD, toUTCDate } from "./_lib/staticLastmod";

const SITE = "https://andrewjfrancis.com";

function maxIso(items: { date: string }[]): string | null {
  if (items.length === 0) return null;
  let max = items[0]?.date ?? null;
  for (const it of items) {
    if (!max || it.date > max) max = it.date;
  }
  return max;
}

function pageLastMod(items: { date: string }[]): Date {
  const iso = maxIso(items);
  return iso ? toUTCDate(iso) : new Date(0);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // ---------- Static pages ----------
  // Home changes when either:
  // - you edit the home page content (STATIC_LASTMOD.home), OR
  // - the "latest" article shown on home changes (newest article overall)
  const all = getAllArticles();
  const latestArticleDate = pageLastMod(all);
  const homeStaticDate = toUTCDate(STATIC_LASTMOD.home);
  const homeLastMod =
    latestArticleDate.getTime() > homeStaticDate.getTime()
      ? latestArticleDate
      : homeStaticDate;

  routes.push({ url: `${SITE}/`, lastModified: homeLastMod });
  routes.push({
    url: `${SITE}/now`,
    lastModified: toUTCDate(STATIC_LASTMOD.now),
  });
  routes.push({
    url: `${SITE}/about`,
    lastModified: toUTCDate(STATIC_LASTMOD.about),
  });

  // ---------- Writing index ----------
  // /writing (page 1)
  routes.push({
    url: `${SITE}/writing`,
    lastModified: pageLastMod(getPagedArticles(all, 1)),
  });

  // /writing/page/[page] (page 2+)
  const totalWritingPages = getTotalPages(all.length);
  for (let page = 2; page <= totalWritingPages; page++) {
    routes.push({
      url: `${SITE}/writing/page/${page}`,
      lastModified: pageLastMod(getPagedArticles(all, page)),
    });
  }

  // ---------- Tags index ----------
  // This page lists counts across the whole archive, so it changes when any article set changes.
  routes.push({
    url: `${SITE}/writing/tags`,
    lastModified: pageLastMod(all),
  });

  // ---------- Year pages ----------
  for (const year of getYears()) {
    const yearItems = getArticlesByYear(year);
    const yearPages = getTotalPages(yearItems.length);

    // /writing/[year] (page 1)
    routes.push({
      url: `${SITE}/writing/${year}`,
      lastModified: pageLastMod(getPagedArticles(yearItems, 1)),
    });

    // /writing/[year]/page/[page] (page 2+)
    for (let page = 2; page <= yearPages; page++) {
      routes.push({
        url: `${SITE}/writing/${year}/page/${page}`,
        lastModified: pageLastMod(getPagedArticles(yearItems, page)),
      });
    }
  }

  // ---------- Tag pages ----------
  const tagCounts = getTagCounts(); // Map<tagSlug, count>
  for (const [tagSlug, count] of tagCounts.entries()) {
    if (count <= 0) continue;

    const tagId = tagFromSlug(tagSlug);
    if (!tagId) continue;

    const tagItems = getArticlesByTag(tagId);
    const tagPages = getTotalPages(tagItems.length);

    // /writing/tags/[tag] (page 1)
    routes.push({
      url: `${SITE}/writing/tags/${tagSlug}`,
      lastModified: pageLastMod(getPagedArticles(tagItems, 1)),
    });

    // /writing/tags/[tag]/page/[page] (page 2+)
    for (let page = 2; page <= tagPages; page++) {
      routes.push({
        url: `${SITE}/writing/tags/${tagSlug}/page/${page}`,
        lastModified: pageLastMod(getPagedArticles(tagItems, page)),
      });
    }
  }

  // ---------- Local essays ----------
  for (const a of ARTICLES) {
    if (a.source !== "local" || !a.slug) continue;

    routes.push({
      url: `${SITE}/writing/essays/${a.slug}`,
      lastModified: toUTCDate(a.date),
    });
  }

  return routes;
}
