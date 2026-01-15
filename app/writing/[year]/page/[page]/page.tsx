// app/writing/[year]/page/[page]/page.tsx

import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import PageShell from "../../../../_components/PageShell";
import YearsNav from "../../../_components/YearsNav";
import { ArticlesList } from "../../../_components/ArticlesList";
import { Pager } from "../../../_components/Pager";
import { pageMetadata } from "../../../../_lib/pageMetadata";

import {
  getArticlesByYear,
  getPagedArticles,
  getTotalPages,
  getYears,
} from "../../../_data/articles";

type Props = {
  params: Promise<{ year: string; page: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year, page } = await params;

  const yearNum = Number(year);
  const pageNum = Number(page);

  if (!Number.isInteger(yearNum)) return {};
  if (!Number.isInteger(pageNum) || pageNum < 2) return {};

  const years = getYears();
  if (!years.includes(yearNum)) return {};

  const allForYear = getArticlesByYear(yearNum);
  const totalPages = getTotalPages(allForYear.length);

  // If this route shouldn't exist, don't emit metadata.
  if (totalPages <= 1) return {};
  if (pageNum > totalPages) return {};

  const title = `Writing — ${yearNum} (Page ${pageNum})`;
  const description = `Essays from ${yearNum}, organized chronologically. Page ${pageNum} of ${totalPages}.`;
  const url = `/writing/${yearNum}/page/${pageNum}`;

  return pageMetadata({ title, description, url });
}

export default async function WritingYearPagedPage({ params }: Props) {
  const { year, page } = await params;

  const yearNum = Number(year);

  // Invalid year -> go back to Writing index.
  if (!Number.isInteger(yearNum)) redirect("/writing");

  const years = getYears();

  // Unknown year -> 404.
  if (!years.includes(yearNum)) notFound();

  const allForYear = getArticlesByYear(yearNum);
  const totalPages = getTotalPages(allForYear.length);

  // If the year fits on one page, this route should not exist.
  if (totalPages <= 1) redirect(`/writing/${yearNum}`);

  const rawPage = Number(page);

  // Never allow /page/1 (or garbage)
  if (!Number.isInteger(rawPage) || rawPage < 2)
    redirect(`/writing/${yearNum}`);

  // Clamp too-large pages to last page
  const safePage = Math.min(rawPage, totalPages);

  // If clamped, redirect so URL matches content
  if (safePage !== rawPage) redirect(`/writing/${yearNum}/page/${safePage}`);

  const items = getPagedArticles(allForYear, safePage);

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
        currentPage={safePage}
        totalPages={totalPages}
        hrefForPage={hrefForPage}
      />

      <ArticlesList items={items} />

      <Pager
        className="my-6"
        currentPage={safePage}
        totalPages={totalPages}
        hrefForPage={hrefForPage}
      />
    </PageShell>
  );
}
