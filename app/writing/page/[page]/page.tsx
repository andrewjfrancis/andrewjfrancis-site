// app/writing/page/[page]/page.tsx

import type { Metadata } from "next";
import { redirect } from "next/navigation";
import PageShell from "../../../_components/PageShell";
import YearsNav from "../../_components/YearsNav";
import TagPills from "../../_components/TagPills";
import { ArticlesList } from "../../_components/ArticlesList";
import { Pager } from "../../_components/Pager";
import { pageMetadata } from "../../../_lib/pageMetadata";

import {
  getAllArticles,
  getPagedArticles,
  getTagCounts,
  getTotalPages,
  getYears,
} from "../../_data/articles";

type Props = {
  params: Promise<{ page: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;

  const all = getAllArticles();
  const totalPages = getTotalPages(all.length);

  const pageNum = Number(page);
  if (!Number.isInteger(pageNum) || pageNum < 2) return {};

  // if invalid, let the page redirect; metadata can be blank
  if (pageNum > totalPages) return {};

  const title = `Writing (Page ${pageNum})`;
  const description =
    "An archive of essays on systems, structure, and decision architecture — organized by tags and years.";
  const url = `/writing/page/${pageNum}`;

  return pageMetadata({ title, description, url });
}

export default async function WritingPagedIndex({ params }: Props) {
  const { page } = await params;

  const all = getAllArticles();
  const years = getYears();
  const counts = getTagCounts();
  const totalPages = getTotalPages(all.length);

  const raw = Number(page);

  if (!Number.isFinite(raw) || raw < 2) redirect("/writing");
  if (raw > totalPages)
    redirect(totalPages <= 1 ? "/writing" : `/writing/page/${totalPages}`);

  const currentPage = raw;
  const items = getPagedArticles(all, currentPage);

  const hrefForPage = (p: number) =>
    p <= 1 ? "/writing" : `/writing/page/${p}`;

  return (
    <PageShell>
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight leading-tight">
          Writing
        </h1>
      </header>

      <hr className="my-6" />

      <section className="space-y-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Browse by tag
          </p>
          <TagPills
            counts={counts}
            totalArticles={all.length}
            className="pt-2"
          />
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Browse by year
          </p>
          <YearsNav years={years} mode="all" />
        </div>
      </section>

      <Pager
        className="my-6"
        currentPage={currentPage}
        totalPages={totalPages}
        hrefForPage={hrefForPage}
      />
      <ArticlesList items={items} />
      <Pager
        className="my-6"
        currentPage={currentPage}
        totalPages={totalPages}
        hrefForPage={hrefForPage}
      />
    </PageShell>
  );
}
