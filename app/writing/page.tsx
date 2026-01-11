import PageShell from "../_components/PageShell";
import YearsNav from "./_components/YearsNav";
import { ArticlesList } from "./_components/ArticlesList";
import { Pager } from "./_components/Pager";
import {
  getAllArticles,
  getPagedArticles,
  getTotalPages,
  getYears,
} from "./_data/articles";

export default function WritingIndexPage() {
  console.log("HIT /writing (page.tsx)");

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
        <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
        <p className="text-base text-muted-foreground">
          Articles and notes. Mostly links out to Medium, organized here so the
          archive stays coherent.
        </p>
      </header>

      <hr className="my-10" />

      <YearsNav years={years} mode="all" />

      <Pager
        className="my-6"
        currentPage={currentPage}
        totalPages={totalPages}
        hrefForPage={hrefForPage}
      />

      <ArticlesList items={items} />
      {/* <ArticlesList items={items} showTagsLegend /> */}

      <Pager
        className="my-6"
        currentPage={currentPage}
        totalPages={totalPages}
        hrefForPage={hrefForPage}
      />
    </PageShell>
  );
}
