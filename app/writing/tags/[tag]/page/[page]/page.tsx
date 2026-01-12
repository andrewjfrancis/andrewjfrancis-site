// app/writing/tags/[tag]/page/[page]/page.tsx

import { notFound } from "next/navigation";
import PageShell from "../../../../../_components/PageShell";
import { ArticlesList } from "../../../../_components/ArticlesList";
import { Pager } from "../../../../_components/Pager";

import { tagFromSlug, getTagMeta } from "../../../../_data/tags";
import {
  getArticlesByTag,
  getPagedArticles,
  getTotalPages,
} from "../../../../_data/articles";

type Props = {
  params: Promise<{
    tag: string;
    page: string;
  }>;
};

export default async function TagPagePaginated({ params }: Props) {
  const { tag: tagSlug, page } = await params;

  const tag = tagFromSlug(tagSlug);
  if (!tag) notFound();

  const pageNum = Number(page);
  if (!Number.isInteger(pageNum) || pageNum < 2) notFound(); // <-- NOTE: 2+ only

  const all = getArticlesByTag(tag);
  const totalPages = getTotalPages(all.length);

  if (pageNum > totalPages) notFound();

  const items = getPagedArticles(all, pageNum);
  const meta = getTagMeta(tag);

  const hrefForPage = (p: number) =>
    p <= 1 ? `/writing/tags/${tagSlug}` : `/writing/tags/${tagSlug}/page/${p}`;

  return (
    <PageShell>
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">{meta.id}</h1>

        {meta.description ? (
          <p className="text-base leading-7 text-muted-foreground">
            {meta.description}
          </p>
        ) : null}
      </header>

      <hr className="my-10" />

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
