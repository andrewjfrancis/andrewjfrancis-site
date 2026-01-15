// app/writing/tags/[tag]/page/[page]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "../../../../../_components/PageShell";
import { ArticlesList } from "../../../../_components/ArticlesList";
import { Pager } from "../../../../_components/Pager";
import TagPills from "../../../../_components/TagPills";

import { pageMetadata } from "../../../../../_lib/pageMetadata";
import { tagFromSlug, getTagMeta } from "../../../../_data/tags";
import {
  getAllArticles,
  getArticlesByTag,
  getPagedArticles,
  getTagCounts,
  getTotalPages,
} from "../../../../_data/articles";

type Props = {
  params: Promise<{
    tag: string;
    page: string;
  }>;
};

// Page 2+ only
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag: tagSlug, page } = await params;

  const tag = tagFromSlug(tagSlug);
  if (!tag) return {};

  const pageNum = Number(page);
  if (!Number.isInteger(pageNum) || pageNum < 2) return {};

  const meta = getTagMeta(tag);

  // Optional safety: if page is out of range, don't emit metadata.
  const all = getArticlesByTag(tag);
  const totalPages = getTotalPages(all.length);
  if (pageNum > totalPages) return {};

  const title = `Writing — ${meta.id} (Page ${pageNum})`;
  const description =
    meta.description ??
    "Essays organized by recurring structural patterns, navigable by tag.";
  const url = `/writing/tags/${meta.slug}/page/${pageNum}`;

  return pageMetadata({ title, description, url, type: "website" });
}

export default async function TagPagePaginated({ params }: Props) {
  const { tag: tagSlug, page } = await params;

  const tag = tagFromSlug(tagSlug);
  if (!tag) notFound();

  const pageNum = Number(page);
  if (!Number.isInteger(pageNum) || pageNum < 2) notFound();

  const meta = getTagMeta(tag);
  const activeSlug = meta.slug;

  const counts = getTagCounts();
  const totalArticles = getAllArticles().length;

  const all = getArticlesByTag(tag);
  const totalPages = getTotalPages(all.length);
  if (pageNum > totalPages) notFound();

  const items = getPagedArticles(all, pageNum);

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
        currentPage={pageNum}
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
        currentPage={pageNum}
        totalPages={totalPages}
        hrefForPage={hrefForPage}
      />
    </PageShell>
  );
}
