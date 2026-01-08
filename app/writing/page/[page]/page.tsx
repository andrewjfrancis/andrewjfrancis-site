import Link from "next/link";
import PageShell from "../../../_components/PageShell";
import YearsNav from "../../_components/YearsNav";
import { Pager } from "../../_components/Pager";
import { getAllArticles, getYears } from "../../_data/articles";

const PAGE_SIZE = 12;

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function WritingPagedIndex({
  params,
}: {
  params: { page: string };
}) {
  const pageNum = Number(params.page);
  const page = Number.isFinite(pageNum) && pageNum > 1 ? pageNum : 2;

  const all = getAllArticles();
  const years = getYears();

  const totalPages = Math.max(1, Math.ceil(all.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);

  const start = (safePage - 1) * PAGE_SIZE;
  const items = all.slice(start, start + PAGE_SIZE);

  const prevHref =
    safePage === 2 ? "/writing" : `/writing/page/${safePage - 1}`;
  const nextHref =
    safePage < totalPages ? `/writing/page/${safePage + 1}` : null;

  return (
    <PageShell>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
        <p className="text-base text-muted-foreground">
          Page {safePage} of {totalPages}.
        </p>
      </header>

      <hr className="my-10" />

      <YearsNav years={years} mode="all" />

      {/* Top pager */}
      <Pager className="pager my-6" prevHref={prevHref} nextHref={nextHref} />

      <ul className="mt-6 space-y-4">
        {items.map((a) => (
          <li key={`${a.date}-${a.title}`} className="rounded-lg border p-6">
            <p className="text-base font-semibold">
              {a.source === "medium" && a.externalUrl ? (
                <a
                  className="underline underline-offset-4"
                  href={a.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {a.title}
                </a>
              ) : (
                <Link
                  className="underline underline-offset-4"
                  href={`/writing/${a.year}/${a.slug}`}
                >
                  {a.title}
                </Link>
              )}
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              {formatDate(a.date)} ·{" "}
              {a.source === "medium" ? "Medium" : "Local"}
            </p>

            <p className="mt-3 text-base leading-7 text-muted-foreground">
              {a.excerpt}
            </p>
          </li>
        ))}
      </ul>

      {/* Bottom pager */}
      <Pager className="pager my-6" prevHref={prevHref} nextHref={nextHref} />
    </PageShell>
  );
}
