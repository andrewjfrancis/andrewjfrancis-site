// app/writing/_data/articles.ts

import { TAGS, type Tag, type TagSlug } from "./tags";

export type ArticleSource = "medium" | "local";

export type Article = {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  year: number;
  excerpt: string;
  source: ArticleSource;

  externalUrl?: string;
  slug?: string;
  tags?: Tag[];

  pinned?: boolean; // optional legacy convenience
  pinOrder?: number; // real control
};

export const PAGE_SIZE = 5;

export const ARTICLES_REAL: Article[] = [
  {
    id: "2026-01-23-01",
    title: "Approval is not decision-making",
    date: "2026-01-23",
    year: 2026,
    excerpt:
      "Approval looks like governance, but it arrives too late to prevent decision conflict, so teams learn that movement is unsafe without permission.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/approval-is-not-decision-making-a2d62fd6a9de",
    tags: ["Organizational Design", "Authority & Accountability", "Governance"],
  },
  {
    id: "2026-01-19-01",
    title: "The rule only existed after someone broke it",
    date: "2026-01-19",
    year: 2026,
    excerpt:
      "Governance often becomes visible only after failure, when decisions collide and authority has to be clarified retroactively.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/the-rule-only-existed-after-someone-broke-it-9c6408ba7de1",
    tags: ["Organizational Design", "Authority & Accountability", "Governance"],
  },
  {
    id: "2026-01-17-01",
    title: "Escalation is how unclear authority reveals itself",
    date: "2026-01-17",
    year: 2026,
    excerpt:
      "Escalation is rarely a people problem — it is the predictable behavior of a system where decision authority is unclear, unstable or unsafe to use.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/escalation-is-how-unclear-authority-reveals-itself-754ec45bd3ab",
    tags: ["Organizational Design", "Authority & Accountability", "Governance"],
  },
  {
    id: "2026-01-15-01",
    title: "Governance is how organizations decide who decides",
    date: "2026-01-15",
    year: 2026,
    excerpt:
      "Governance is not oversight or bureaucracy — it is the system that determines who has authority to decide and what happens when decisions collide.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/governance-is-how-organizations-decide-who-decides-50f81fb8cb62",
    tags: ["Organizational Design", "Authority & Accountability", "Governance"],
  },
  {
    id: "2026-01-13-01",
    title: "This site is an archive, not a feed",
    date: "2026-01-13",
    year: 2026,
    excerpt:
      "A short orientation to how this writing works — and what it avoids.",
    source: "local",
    slug: "this-site-is-an-archive-not-a-feed",
    pinned: true,
    pinOrder: 0,
    tags: ["Work"],
  },
  {
    id: "2026-01-09-01",
    title: "When responsibility is assigned without authority",
    date: "2026-01-09",
    year: 2026,
    excerpt:
      "Organizations routinely assign responsibility without granting authority, creating accountability that appears rigorous but is structurally impossible to fulfill.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/when-responsibility-is-assigned-without-authority-bc716b305531",
    tags: ["Organizational Design", "Authority & Accountability", "Governance"],
  },
  {
    id: "2026-01-08-01",
    title: "Urgency is not a strategy",
    date: "2026-01-08",
    year: 2026,
    excerpt:
      "Organizational urgency often substitutes for clarity, rewarding visible motion while quietly degrading decision quality.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/urgency-is-not-a-strategy-95671798f0ac",
    tags: ["Systems Thinking", "Organizational Design", "Complexity"],
  },
  {
    id: "2026-01-05-01",
    title: "Most strategy fails before execution even starts",
    date: "2026-01-05",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Systems Thinking", "Decision Architecture", "Strategy"],
  },
];

export const ARTICLES_TEST: Article[] = [
  {
    id: "2026-01-13-TEST",
    title: "Markdown Kitchen Sink (Styling Test)",
    date: "2026-01-13",
    year: 2026,
    excerpt:
      "This is a large, faded subhead used to test how the excerpt renders and wraps on mobile.",
    source: "local",
    slug: "markdown-kitchen-sink",
    tags: ["Work"],
  },
  {
    id: "TEST-2028-02-21-01",
    title: "This is the latest article — fake headline",
    date: "2028-02-21",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Systems Thinking", "Decision Architecture"],
  },
  {
    id: "TEST-2028-02-20-01",
    title: "10 - 2028",
    date: "2028-02-20",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Systems Thinking", "Complexity"],
  },
  {
    id: "TEST-2028-02-19-01",
    title: "9 - 2028",
    date: "2028-02-19",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Work", "Complexity"],
  },
  {
    id: "TEST-2028-02-10-01",
    title: "8 - 2028",
    date: "2028-02-10",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Authority & Accountability", "Governance"],
  },
  {
    id: "TEST-2028-02-09-01",
    title: "7 - 2028",
    date: "2028-02-09",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Organizational Design", "Governance"],
  },
  {
    id: "TEST-2028-02-08-01",
    title: "6 - 2028",
    date: "2028-02-08",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Systems Thinking", "Complexity"],
  },
  {
    id: "TEST-2028-02-07-01",
    title: "5 - 2028",
    date: "2028-02-07",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Work", "Complexity"],
  },
  {
    id: "TEST-2028-02-06-01",
    title: "4 - 2028",
    date: "2028-02-06",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Authority & Accountability", "Governance"],
  },
  {
    id: "TEST-2028-02-05-01",
    title: "3 - 2028",
    date: "2028-02-05",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Organizational Design", "Governance"],
  },
  {
    id: "TEST-2028-02-04-01",
    title: "2 - 2028",
    date: "2028-02-04",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Systems Thinking", "Complexity"],
  },
  {
    id: "TEST-2028-02-03-01",
    title: "1 - 2028",
    date: "2028-02-03",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Work", "Complexity"],
  },
  {
    id: "TEST-2027-02-02-01",
    title: "7 - 2027",
    date: "2027-02-02",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Authority & Accountability", "Governance"],
  },
  {
    id: "TEST-2027-02-01-01",
    title: "6 - 2027",
    date: "2027-02-01",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Organizational Design", "Governance"],
  },
  {
    id: "TEST-2027-01-28-01",
    title: "5 - 2027",
    date: "2027-01-28",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Systems Thinking", "Complexity"],
  },
  {
    id: "TEST-2027-01-27-01",
    title: "4 - 2027",
    date: "2027-01-27",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Work", "Complexity"],
  },
  {
    id: "TEST-2027-01-26-01",
    title: "3 - 2027",
    date: "2027-01-26",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Decision Architecture"],
  },
  {
    id: "TEST-2027-01-25-01",
    title: "2 - 2027",
    date: "2027-01-25",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Authority & Accountability", "Governance"],
  },
  {
    id: "TEST-2027-01-24-01",
    title: "1 -2027",
    date: "2027-01-24",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Organizational Design", "Governance"],
  },
  {
    id: "TEST-2026-01-13-01",
    title: "8",
    date: "2026-01-13",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Systems Thinking", "Complexity"],
  },
  {
    id: "TEST-2026-01-12-01",
    title: "7",
    date: "2026-01-12",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Work", "Complexity"],
  },
  {
    id: "TEST-2026-01-11-01",
    title: "6",
    date: "2026-01-11",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Decision Architecture"],
  },
  {
    id: "TEST-2026-01-10-01",
    title: "5",
    date: "2026-01-10",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Authority & Accountability", "Governance"],
  },
  {
    id: "TEST-2026-01-09-01",
    title: "4",
    date: "2026-01-09",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Organizational Design", "Governance"],
  },
  {
    id: "TEST-2026-01-08-01",
    title: "3",
    date: "2026-01-08",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    pinned: true,
    pinOrder: 2,
    tags: ["Systems Thinking", "Decision Architecture"],
  },
  {
    id: "TEST-2026-01-07-01",
    title: "2",
    date: "2026-01-07",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Systems Thinking", "Decision Architecture"],
  },
  {
    id: "TEST-2026-01-05-01",
    title: "Most strategy fails before execution even starts",
    date: "2026-01-05",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    pinned: true,
    pinOrder: 1,
    tags: ["Systems Thinking", "Decision Architecture"],
  },
];

// Choose active dataset (flip this line whenever you want)
export const ARTICLES: Article[] = ARTICLES_REAL;
// export const ARTICLES: Article[] = ARTICLES_TEST;

// ---------- helpers (deterministic, boring, correct)

export function getAllArticles(): Article[] {
  return [...ARTICLES].sort((a, b) => {
    // --- pinned first, ordered by pinOrder when present ---
    const aPinned = typeof a.pinOrder === "number" || a.pinned === true;
    const bPinned = typeof b.pinOrder === "number" || b.pinned === true;

    if (aPinned !== bPinned) return aPinned ? -1 : 1;

    if (aPinned && bPinned) {
      const ao = typeof a.pinOrder === "number" ? a.pinOrder : 9999;
      const bo = typeof b.pinOrder === "number" ? b.pinOrder : 9999;
      if (ao !== bo) return ao - bo;
    }

    // date desc
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;

    // stable tie-breakers
    if (a.title !== b.title) return a.title.localeCompare(b.title);
    return a.id.localeCompare(b.id);
  });
}

export function getLatestArticle() {
  const all = getAllArticles();

  // exclude pinned from "Latest" on home
  const nonPinned = all.filter((a) => !a.pinned);

  // pick most recent (assumes your data already sorts newest-first;
  // if not, we can sort by date)
  return nonPinned[0] ?? null;
}

export function getTotalPages(count: number): number {
  return Math.max(1, Math.ceil(count / PAGE_SIZE));
}

export function getPagedArticles<T>(items: T[], page: number): T[] {
  const safePage = Math.max(1, Math.floor(page));
  const start = (safePage - 1) * PAGE_SIZE;
  return items.slice(start, start + PAGE_SIZE);
}

export function isTag(value: string): value is Tag {
  return TAGS.some((t) => t.id === value);
}

export function getTagById(tag: Tag) {
  return TAGS.find((t) => t.id === tag)!;
}

export function getArticlesByTag(tag: Tag): Article[] {
  return getAllArticles().filter((a) => a.tags?.includes(tag));
}

export function getTagCounts(): Map<TagSlug, number> {
  const slugById = new Map<Tag, TagSlug>(
    TAGS.map((t) => [t.id, t.slug] as [Tag, TagSlug]),
  );

  const counts = new Map<TagSlug, number>(
    TAGS.map((t) => [t.slug, 0] as [TagSlug, number]),
  );

  for (const a of getAllArticles()) {
    for (const id of a.tags ?? []) {
      const slug = slugById.get(id);
      if (!slug) continue;
      counts.set(slug, (counts.get(slug) ?? 0) + 1);
    }
  }

  return counts;
}

export function getYears(): number[] {
  const years = new Set(getAllArticles().map((a) => a.year));
  return Array.from(years).sort((a, b) => b - a);
}

export function getArticlesByYear(year: number): Article[] {
  return getAllArticles().filter((a) => a.year === year);
}

export function getArticleHref(a: Article): string {
  if (a.source === "local") {
    if (!a.slug) return "/writing";
    return `/writing/essays/${a.slug}`;
  }
  return a.externalUrl ?? "#";
}

export function isExternalArticle(a: Article): boolean {
  return a.source !== "local";
}
