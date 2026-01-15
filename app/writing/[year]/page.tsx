// app/writing/[year]/page.tsx

import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import PageShell from "../../_components/PageShell";
import YearsNav from "../_components/YearsNav";
import { ArticlesList } from "../_components/ArticlesList";
import { Pager } from "../_components/Pager";
import { pageMetadata } from "../../_lib/pageMetadata";

import {
  getArticlesByYear,
  getPagedArticles,
  getTotalPages,
  getYears,
} from "../_data/articles";

type Props = {
  params: Promise<{ year: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year } = await params;

  const yearNum = Number(year);
  if (!Number.isInteger(yearNum)) return {};

  const years = getYears();
  if (!years.includes(yearNum)) return {};

  const allForYear = getArticlesByYear(yearNum);
  const totalPages = getTotalPages(allForYear.length);

  const title = `Writing — ${yearNum}`;
  const description =
    totalPages <= 1
      ? `Essays from ${yearNum}, organized chronologically.`
      : `Essays from ${yearNum}, organized chronologically (page 1 of ${totalPages}).`;

  const url = `/writing/${yearNum}`;

  return pageMetadata({ title, description, url });
}

export default async function WritingYearPage({ params }: Props) {
  const { year } = await params;

  const yearNum = Number(year);

  // Invalid year in URL -> go back to Writing index.
  if (!Number.isInteger(yearNum)) redirect("/writing");

  const years = getYears();

  // Year not in archive -> 404.
  if (!years.includes(yearNum)) notFound();

  const allForYear = getArticlesByYear(yearNum);
  const totalPages = getTotalPages(allForYear.length);
  const items = getPagedArticles(allForYear, 1);

  const hrefForPage = (p: number) =>
    p <= 1 ? `/writing/${yearNum}` : `/writing/${yearNum}/page/${p}`;

  return (
    <PageShell>
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight leading-tight">
          Writing — {yearNum}
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
