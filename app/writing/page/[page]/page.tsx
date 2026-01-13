// app/writing/page/[page]/page.tsx

import { redirect } from "next/navigation";
import type { Metadata } from "next";
import PageShell from "../../../_components/PageShell";
import YearsNav from "../../_components/YearsNav";
import TagPills from "../../_components/TagPills";
import { ArticlesList } from "../../_components/ArticlesList";
import { Pager } from "../../_components/Pager";

import {
  getAllArticles,
  getPagedArticles,
  getTagCounts,
  getTotalPages,
  getYears,
} from "../../_data/articles";

// Optional but nice: dynamic title per page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  const n = Number(page);

  return {
    title: Number.isFinite(n)
      ? `Writing — Page ${n} — Andrew J. Francis`
      : "Writing — Andrew J. Francis",
    description:
      "Essays on organizational structure, decision-making and how systems shape work under pressure.",
  };
}

export default async function WritingPagedIndex({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;

  const all = getAllArticles();
  const years = getYears();
  const counts = getTagCounts();

  const totalPages = getTotalPages(all.length);

  const raw = Number(page);

  // Never allow /writing/page/1
  if (!Number.isFinite(raw) || raw < 2) redirect("/writing");

  // If page exceeds total, redirect to last real page
  if (raw > totalPages)
    redirect(totalPages <= 1 ? "/writing" : `/writing/page/${totalPages}`);

  const currentPage = raw;
  const items = getPagedArticles(all, currentPage);

  const hrefForPage = (p: number) =>
    p <= 1 ? "/writing" : `/writing/page/${p}`;

  return (
    <PageShell>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
      </header>

      {/* Keep spacing consistent with /writing */}
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
