import Link from "next/link";
import type { Article } from "../_data/articles";
import { TAGS, type Tag } from "../_data/tags";
import { Pin } from "lucide-react";

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

function uniq<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

export function ArticlesList({
  items,
  emptyTitle = "No articles yet.",
  emptyBody = "This archive will fill automatically as you publish.",
  showTagsLegend = false,
}: {
  items: Article[];
  emptyTitle?: string;
  emptyBody?: string;

  // Optional: show canonical tags list (with disabled states) under the cards.
  showTagsLegend?: boolean;
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

  // Compute which canonical tags are actually used in this render set
  // (so you can intentionally leave some tags off and see “disabled”.)
  const used = new Set<Tag>();
  for (const a of items) {
    for (const t of a.tags ?? []) used.add(t);
  }

  return (
    <div className="mt-6 space-y-6">
      <ul className="space-y-4">
        {items.map((a) => {
          const isPinned = Boolean(a.pinned);

          return (
            <li
              key={a.id}
              className="rounded-lg border p-6 transition-colors hover:bg-muted/40"
            >
              {/* Top row: title + pinned badge */}
              <div className="flex items-center justify-between gap-4">
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

                {isPinned ? (
                  <span className="shrink-0 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                    <Pin className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Pinned</span>
                  </span>
                ) : null}
              </div>

              {/* Meta row */}
              <p className="mt-2 text-sm text-foreground/70">
                {formatDate(a.date)} ·{" "}
                {a.source === "medium" ? "Medium" : "Local"}
              </p>

              {/* Excerpt */}
              <p className="mt-3 text-base leading-7 text-foreground/80">
                {a.excerpt}
              </p>

              {/* Tags row (horizontal scroll) */}
              {a.tags && a.tags.length > 0 ? (
                <ul className="mt-4 flex gap-2 overflow-x-auto whitespace-nowrap no-scrollbar">
                  {a.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border px-3 py-1 text-sm text-muted-foreground"
                      title={TAGS.find((t) => t.id === tag)?.description ?? tag}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>

      {/* Canonical tags list (enabled/disabled) */}
      {showTagsLegend ? (
        <section className="rounded-lg border p-5">
          <p className="text-sm font-semibold text-foreground">Tags</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Canonical tag set for the archive. Disabled tags aren’t used (yet).
          </p>

          <ul className="mt-4 flex gap-2 overflow-x-auto whitespace-nowrap no-scrollbar">
            {TAGS.map((t) => {
              const enabled = used.has(t.id);

              return (
                <li key={t.id}>
                  <span
                    title={t.description}
                    className={
                      "inline-flex items-center rounded-full border px-3 py-1 text-sm " +
                      (enabled
                        ? "text-foreground/80"
                        : "text-muted-foreground opacity-50")
                    }
                  >
                    {t.id}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
