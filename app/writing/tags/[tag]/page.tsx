// app/writing/tags/[tag]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "../../../_components/PageShell";
import { ArticlesList } from "../../_components/ArticlesList";
import { Pager } from "../../_components/Pager";
import TagPills from "../../_components/TagPills";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag: tagSlug } = await params;
  const tag = tagFromSlug(tagSlug);

  if (!tag) {
    return {
      title: "Writing — Andrew J. Francis",
    };
  }

  const meta = getTagMeta(tag);

  return {
    title: `Writing — ${meta.id} — Andrew J. Francis`,
  };
}

export default async function TagDetailPage({ params }: Props) {
  const { tag: tagSlug } = await params;

  const tag = tagFromSlug(tagSlug);
  if (!tag) notFound();

  const meta = getTagMeta(tag);
  const activeSlug = meta.slug;

  // Counts for tag nav (global, across all years)
  const counts = getTagCounts();

  // Current tag page data (page 1)
  const totalArticles = getAllArticles().length;
  const all = getArticlesByTag(tag);
  const currentPage = 1;
  const totalPages = getTotalPages(all.length);
  const items = getPagedArticles(all, currentPage);

  const hrefForPage = (p: number) =>
    p <= 1 ? `/writing/tags/${tagSlug}` : `/writing/tags/${tagSlug}/page/${p}`;

  return (
    <PageShell>
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          Writing — {meta.id}
        </h1>

        {meta.description ? (
          <p className="text-base leading-7 text-muted-foreground">
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
