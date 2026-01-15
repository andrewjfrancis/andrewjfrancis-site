// app/writing/page.tsx

import type { Metadata } from "next";
import PageShell from "../_components/PageShell";
import YearsNav from "./_components/YearsNav";
import { ArticlesList } from "./_components/ArticlesList";
import { Pager } from "./_components/Pager";
import TagPills from "./_components/TagPills";
import { pageMetadata } from "../_lib/pageMetadata";

import {
  getAllArticles,
  getPagedArticles,
  getTagCounts,
  getTotalPages,
  getYears,
} from "./_data/articles";

const title = "Writing"; // IMPORTANT: no "— Andrew J. Francis"
const description =
  "An archive of essays on systems, structure, and decision architecture — organized by tags and years.";
const url = "/writing";

export const metadata: Metadata = pageMetadata({ title, description, url });

export default function WritingIndexPage() {
  const counts = getTagCounts();

  const all = getAllArticles();
  const years = getYears();

  const currentPage = 1;
  const totalPages = getTotalPages(all.length);
  const items = getPagedArticles(all, currentPage);

  const hrefForPage = (p: number) =>
    p <= 1 ? "/writing" : `/writing/page/${p}`;

  return (
    <PageShell>
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight leading-tight">
          Writing
        </h1>
        <p className="text-base font-medium leading-8 text-muted-foreground">
          These essays examine how organizations function under pressure — how
          decisions are ordered, authority is assigned and responsibility is
          distributed. The focus is structural rather than personal: systems,
          incentives and design choices that shape behavior regardless of
          intent. The goal is not to offer solutions or frameworks, but to make
          patterns visible so they can be recognized for what they are.
        </p>
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
