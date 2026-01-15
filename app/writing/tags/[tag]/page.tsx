// app/writing/tags/[tag]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "../../../_components/PageShell";
import { ArticlesList } from "../../_components/ArticlesList";
import { Pager } from "../../_components/Pager";
import TagPills from "../../_components/TagPills";

import { pageMetadata } from "../../../_lib/pageMetadata";
import { tagFromSlug, getTagMeta } from "../../_data/tags";
import {
  getAllArticles,
  getArticlesByTag,
  getPagedArticles,
  getTotalPages,
  getTagCounts,
} from "../../_data/articles";

type Props = {
  params: Promise<{ tag: string }>;
};

// ✅ Metadata for tag landing page (page 1) — using helper
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag: tagSlug } = await params;

  const tag = tagFromSlug(tagSlug);
  if (!tag) return {};

  const meta = getTagMeta(tag);

  // IMPORTANT: don't include "— Andrew J. Francis" because layout.tsx adds it via title.template
  const title = `Writing — ${meta.id}`;
  const description =
    meta.description ?? "Essays organized by recurring structural patterns.";
  const url = `/writing/tags/${meta.slug}`;

  return pageMetadata({ title, description, url });
}

export default async function TagDetailPage({ params }: Props) {
  const { tag: tagSlug } = await params;

  const tag = tagFromSlug(tagSlug);
  if (!tag) notFound();

  // Canonical meta (slug + display id)
  const meta = getTagMeta(tag);
  const activeSlug = meta.slug;

  // Counts for tag nav (global, across all tags)
  const counts = getTagCounts();
  const totalArticles = getAllArticles().length;

  // Current tag page data (page 1)
  const all = getArticlesByTag(tag);
  const currentPage = 1;
  const totalPages = getTotalPages(all.length);
  const items = getPagedArticles(all, currentPage);

  // IMPORTANT: use activeSlug (canonical), not the raw param
  const hrefForPage = (p: number) =>
    p <= 1
      ? `/writing/tags/${activeSlug}`
      : `/writing/tags/${activeSlug}/page/${p}`;

  return (
    <PageShell>
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight leading-tight">
          Writing — {meta.id}
        </h1>

        {meta.description ? (
          <p className="text-base font-medium leading-8 text-muted-foreground">
            {meta.description}
          </p>
        ) : null}
      </header>

      <hr className="my-6" />

      <TagPills
        counts={counts}
        totalArticles={totalArticles}
        activeSlug={activeSlug}
        className="pt-2"
      />

      <Pager
        className="my-6"
        currentPage={currentPage}
        totalPages={totalPages}
        hrefForPage={hrefForPage}
      />

      <ArticlesList
        items={items}
        emptyTitle="No essays for this tag yet."
        emptyBody="Writing in this area will appear here as it’s published."
      />

      <Pager
        className="my-6"
        currentPage={currentPage}
        totalPages={totalPages}
        hrefForPage={hrefForPage}
      />
    </PageShell>
  );
}
