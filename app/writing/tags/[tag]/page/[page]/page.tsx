// app/writing/tags/[tag]/page/[page]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "../../../../../_components/PageShell";
import { ArticlesList } from "../../../../_components/ArticlesList";
import { Pager } from "../../../../_components/Pager";
import TagPills from "../../../../_components/TagPills";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string; page: string }>;
}): Promise<Metadata> {
  const { tag: tagSlug, page } = await params;
  const n = Number(page);

  const tag = tagFromSlug(tagSlug);
  if (!tag) {
    return { title: "Writing — Andrew J. Francis" };
  }

  const meta = getTagMeta(tag);

  if (Number.isFinite(n)) {
    return {
      title: `Writing — ${meta.id} — Page ${n} — Andrew J. Francis`,
    };
  }

  return {
    title: `Writing — ${meta.id} — Andrew J. Francis`,
  };
}

export default async function TagPagePaginated({ params }: Props) {
  const { tag: tagSlug, page } = await params;

  const tag = tagFromSlug(tagSlug);
  if (!tag) notFound();

  const pageNum = Number(page);
  if (!Number.isInteger(pageNum) || pageNum < 2) notFound(); // 2+ only

  // Tag meta (safe, canonical slug lives here)
  const meta = getTagMeta(tag);
  const activeSlug = meta.slug;

  // Tag nav counts + total articles for the "All" pill
  const counts = getTagCounts();
  const totalArticles = getAllArticles().length;

  // Page data
  const all = getArticlesByTag(tag);
  const totalPages = getTotalPages(all.length);
  if (pageNum > totalPages) notFound();

  const items = getPagedArticles(all, pageNum);

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
