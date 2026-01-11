import Link from "next/link";
import type { Article } from "../_data/articles";

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export function ArticlesList({
  items,
  emptyTitle = "No articles yet.",
  emptyBody = "This archive will fill automatically as you publish.",
}: {
  items: Article[];
  emptyTitle?: string;
  emptyBody?: string;
}) {
  if (items.length === 0) {
    return (
      <ul className="mt-6 space-y-4">
        <li className="rounded-lg border p-6">
          <p className="text-base font-semibold">{emptyTitle}</p>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            {emptyBody}
          </p>
        </li>
      </ul>
    );
  }

  return (
    <ul className="mt-6 space-y-4">
      {items.map((a, i) => {
        // Use index as a tie-breaker because you intentionally duplicate items for pagination testing.
        // (React keys must be unique per list render.)
        const stable =
          a.externalUrl ?? (a.slug ? `/writing/${a.year}/${a.slug}` : a.title);

        return (
          <li key={a.id} className="rounded-lg border p-6">
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

            <p className="mt-3 text-base leading-7 text-foreground/70">
              {a.excerpt}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
