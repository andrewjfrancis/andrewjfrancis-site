import Link from "next/link";
import PageShell from "../../_components/PageShell";
import YearsNav from "../_components/YearsNav";
import { getArticlesByYear, getYears } from "../_data/articles";

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function WritingYearPage({
  params,
}: {
  params: { year: string };
}) {
  const yearNum = Number(params.year);
  const year = Number.isFinite(yearNum) ? yearNum : 2026;

  const years = getYears();
  const items = getArticlesByYear(year);

  return (
    <PageShell>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Writing — {year}
        </h1>
        <p className="text-base text-muted-foreground">
          Year archive. The main “Writing” page stays stable; years are a
          filter.
        </p>
      </header>

      <hr className="my-10" />

      <YearsNav years={years} mode="year" />

      <ul className="mt-6 space-y-4">
        {items.length === 0 ? (
          <li className="rounded-lg border p-6">
            <p className="text-base font-semibold">No articles yet.</p>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              This archive will fill automatically as you publish.
            </p>
          </li>
        ) : (
          items.map((a) => (
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
          ))
        )}
      </ul>
    </PageShell>
  );
}
