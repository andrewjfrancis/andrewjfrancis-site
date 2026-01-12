// app/writing/[year]/page.tsx

import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import PageShell from "../../_components/PageShell";
import YearsNav from "../_components/YearsNav";
import { ArticlesList } from "../_components/ArticlesList";
import { Pager } from "../_components/Pager";
import {
  getArticlesByYear,
  getPagedArticles,
  getTotalPages,
  getYears,
} from "../_data/articles";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ year: string }>;
}): Promise<Metadata> {
  const { year } = await params;
  const y = Number(year);

  return {
    title: Number.isInteger(y)
      ? `Writing — ${y} — Andrew J. Francis`
      : "Writing — Andrew J. Francis",
    description:
      "Essays on organizational structure, decision-making, and how systems shape work under pressure.",
  };
}

export default async function WritingYearPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year: yearParam } = await params;

  const yearNum = Number(yearParam);

  // Invalid year in URL -> go back to Writing index.
  if (!Number.isInteger(yearNum)) redirect("/writing");

  const years = getYears();

  // Year not in archive -> 404.
  if (!years.includes(yearNum)) notFound();

  const year = yearNum;

  const allForYear = getArticlesByYear(year);
  const totalPages = getTotalPages(allForYear.length);
  const items = getPagedArticles(allForYear, 1);

  const hrefForPage = (p: number) =>
    p <= 1 ? `/writing/${year}` : `/writing/${year}/page/${p}`;

  return (
    <PageShell>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Writing — {year}
        </h1>
        <p className="text-base leading-7 text-muted-foreground">
          These essays examine how organizations function under pressure — how
          decisions are ordered, how authority is assigned and how
          responsibility is distributed. The focus is structural rather than
          personal: systems, incentives and design choices that shape behavior
          regardless of intent. The goal is not to offer solutions or
          frameworks, but to make patterns visible so they can be recognized for
          what they are.
        </p>
      </header>

      <hr className="my-10" />

      <YearsNav years={years} mode="year" />

      <Pager
        className="my-6"
        currentPage={1}
        totalPages={totalPages}
        hrefForPage={hrefForPage}
      />

      <ArticlesList items={items} />

      <Pager
        className="my-6"
        currentPage={1}
        totalPages={totalPages}
        hrefForPage={hrefForPage}
      />
    </PageShell>
  );
}
