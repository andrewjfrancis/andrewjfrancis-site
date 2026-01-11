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
  tags?: string[];
};

export const PAGE_SIZE = 3; // pick your number (10 is great)

export const ARTICLES: Article[] = [
  {
    id: "2028-02-21-01",
    title: "11 - 2028",
    date: "2028-02-21",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2028-02-20-01",
    title: "10 - 2028",
    date: "2028-02-20",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2028-02-19-01",
    title: "9 - 2028",
    date: "2028-02-19",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2028-02-10-01",
    title: "8 - 2028",
    date: "2028-02-10",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2028-02-09-01",
    title: "7 - 2028",
    date: "2028-02-09",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2028-02-08-01",
    title: "6 - 2028",
    date: "2028-02-08",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2028-02-07-01",
    title: "5 - 2028",
    date: "2028-02-07",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2028-02-06-01",
    title: "4 - 2028",
    date: "2028-02-06",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2028-02-05-01",
    title: "3 - 2028",
    date: "2028-02-05",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2028-02-04-01",
    title: "2 - 2028",
    date: "2028-02-04",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2028-02-03-01",
    title: "1 - 2028",
    date: "2028-02-03",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2027-02-02-01",
    title: "7 - 2027",
    date: "2027-02-02",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2027-02-01-01",
    title: "6 - 2027",
    date: "2027-02-01",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2027-01-28-01",
    title: "5 - 2027",
    date: "2027-01-28",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2027-01-27-01",
    title: "4 - 2027",
    date: "2027-01-27",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2027-01-26-01",
    title: "3 - 2027",
    date: "2027-01-26",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2027-01-25-01",
    title: "2 - 2027",
    date: "2027-01-25",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2027-01-24-01",
    title: "1 -2027",
    date: "2027-01-24",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2026-01-13-01",
    title: "8",
    date: "2026-01-13",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2026-01-12-01",
    title: "7",
    date: "2026-01-12",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2026-01-11-01",
    title: "6",
    date: "2026-01-11",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2026-01-10-01",
    title: "5",
    date: "2026-01-10",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2026-01-09-01",
    title: "4",
    date: "2026-01-09",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2026-01-08-01",
    title: "3",
    date: "2026-01-08",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2026-01-07-01",
    title: "2",
    date: "2026-01-07",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
  {
    id: "2026-01-06-01",
    title: "Most strategy fails before execution even starts",
    date: "2026-01-06",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
  },
];

// ---------- helpers (deterministic, boring, correct)

export function getAllArticles(): Article[] {
  return [...ARTICLES].sort((a, b) => {
    // date desc
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;
    // stable tie-breakers
    if (a.title !== b.title) return a.title.localeCompare(b.title);
    return a.id.localeCompare(b.id);
  });
}

export function getYears(): number[] {
  const years = new Set(getAllArticles().map((a) => a.year));
  return Array.from(years).sort((a, b) => b - a);
}

export function getArticlesByYear(year: number): Article[] {
  return getAllArticles().filter((a) => a.year === year);
}

export function getTotalPages(count: number): number {
  return Math.max(1, Math.ceil(count / PAGE_SIZE));
}

export function getPagedArticles<T>(items: T[], page: number): T[] {
  const safePage = Math.max(1, Math.floor(page));
  const start = (safePage - 1) * PAGE_SIZE;
  return items.slice(start, start + PAGE_SIZE);
}
