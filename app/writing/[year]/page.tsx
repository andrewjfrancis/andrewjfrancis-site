// app/writing/[year]/page.tsx

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
