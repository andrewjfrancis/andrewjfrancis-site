// app/writing/_data/series.ts

import type { Article } from "./articles";
import { ARTICLES } from "./articles";

export type SeriesStatus = "upcoming" | "in-progress" | "complete";

export type Series = {
  title: string;
  slug: string;
  description: string;
  showPill?: boolean;
  status: SeriesStatus;

  /**
   * Ordered list of Article IDs (NOT slugs).
   * Series pages will render in this exact order.
   */
  essayIds: string[];
};

export const SERIES: Series[] = [
  {
    title: "Upcoming",
    slug: "upcoming",
    description: "Future series — not yet published, but already taking shape.",
    status: "upcoming",
    showPill: true,
    essayIds: [],
  },
  {
    title: "What Systems Train",
    slug: "what-systems-train",
    description:
      "How organizational structures shape behavior over time through constraints, incentives, and enforcement — independent of intent or culture.",
    status: "in-progress",
    showPill: true,
    essayIds: [
      "2026-02-18-01",
      "2026-02-20-01",
      "2026-02-22-01",
      "2026-02-24-01",
      "2026-02-27-01",
      "2026-03-01-01",
    ],
  },
  {
    title: "Decision Flow",
    slug: "decision-flow",
    description:
      "How organizations create momentum when decision rights are clear, constraints are stable and coordination becomes the result of structure — not the substitute for it.",
    status: "complete",
    essayIds: [
      "2026-02-01-01",
      "2026-02-06-01",
      "2026-02-08-01",
      "2026-02-10-01",
      "2026-02-13-01",
      "2026-02-15-01",
    ],
  },
  {
    title: "Authority & Closure",
    slug: "authority-and-closure",
    description:
      "A structural foundation on how organizations decide, how authority holds and why closure — not discussion — is the property that makes decisions real.",
    status: "complete",
    essayIds: [
      "2026-01-05-01",
      "2026-01-08-01",
      "2026-01-09-01",
      "2026-01-15-01",
      "2026-01-17-01",
      "2026-01-19-01",
      "2026-01-23-01",
      "2026-01-25-01",
      "2026-01-27-01",
      "2026-01-30-01",
    ],
  },
];

export function getSeriesBySlug(slug: string): Series | null {
  return SERIES.find((s) => s.slug === slug) ?? null;
}

export function getSeriesEssayCount(series: Series): number {
  return series.essayIds.length;
}

export function getSeriesArticles(series: Series): Article[] {
  const byId = new Map(ARTICLES.map((a) => [a.id, a] as const));

  // Preserve series-defined order; drop missing IDs (but this should be empty)
  return series.essayIds.map((id) => byId.get(id)).filter(Boolean) as Article[];
}

export function getSeriesLastModified(series: Series): string | null {
  const items = getSeriesArticles(series);
  if (items.length === 0) return null;

  // lastmod should reflect the newest item in the series
  return items.reduce(
    (acc, a) => (a.date > acc ? a.date : acc),
    items[0]!.date,
  );
}

export function getSeriesGroups() {
  const upcoming = SERIES.filter((s) => s.status === "upcoming");
  const inProgress = SERIES.filter((s) => s.status === "in-progress");
  const complete = SERIES.filter((s) => s.status === "complete");

  // World-class default ordering:
  // - Upcoming first (not linked typically)
  // - In-progress next (most recent content first)
  // - Complete last (most recent content first)
  const byNewest = (a: Series, b: Series) => {
    const ad = getSeriesLastModified(a) ?? "0000-00-00";
    const bd = getSeriesLastModified(b) ?? "0000-00-00";
    return ad < bd ? 1 : ad > bd ? -1 : a.title.localeCompare(b.title);
  };

  return {
    upcoming: [...upcoming].sort((a, b) => a.title.localeCompare(b.title)),
    inProgress: [...inProgress].sort(byNewest),
    complete: [...complete].sort(byNewest),
  };
}

export type SeriesRef = { slug: string; title: string };

/**
 * Derive series membership from SERIES -> essay IDs.
 * - No duplicate seriesSlug stored on Article
 * - Skips "upcoming" series
 * - Assumes each essay belongs to at most one series
 */
export function getSeriesForArticleId(articleId: string): SeriesRef | null {
  for (const s of SERIES) {
    if (s.status === "upcoming") continue;

    // Adjust this line to match your series shape:
    // If your series stores essay IDs under `essays`, this is correct.
    // If it's `items` or `essayIds`, change accordingly.
    const ids = s.essayIds ?? [];
    if (ids.includes(articleId)) {
      return { slug: s.slug, title: s.title };
    }
  }

  return null;
}
