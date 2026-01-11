import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

function defaultHrefForPage(page: number) {
  // We do not expose /writing/page/1
  return page <= 1 ? "/writing" : `/writing/page/${page}`;
}

function getWindow(current: number, total: number) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages = new Set<number>();
  pages.add(1);
  pages.add(total);

  for (let p = current - 2; p <= current + 2; p++) {
    if (p >= 1 && p <= total) pages.add(p);
  }

  return Array.from(pages).sort((a, b) => a - b);
}

export function Pager({
  currentPage,
  totalPages,
  className,
  hrefForPage = defaultHrefForPage,
}: {
  currentPage: number;
  totalPages: number;
  className?: string;
  hrefForPage?: (page: number) => string;
}) {
  const safeCurrent = Math.min(Math.max(currentPage, 1), totalPages);
  const prevPage = safeCurrent > 1 ? safeCurrent - 1 : null;
  const nextPage = safeCurrent < totalPages ? safeCurrent + 1 : null;

  const windowPages = getWindow(safeCurrent, totalPages);

  return (
    <nav className={className ?? "pager"} aria-label="Pagination">
      <div className="flex items-center justify-between gap-4">
        {/* Prev */}
        {prevPage ? (
          <Link
            href={hrefForPage(prevPage)}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm no-underline text-foreground hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Previous
          </Link>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-muted-foreground opacity-60">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Previous
          </span>
        )}

        {/* Numbers */}
        <div className="flex items-center gap-1">
          {windowPages.map((p, idx) => {
            const prev = windowPages[idx - 1];
            const needsDots = prev !== undefined && p - prev > 1;

            return (
              <span key={p} className="flex items-center gap-1">
                {needsDots ? (
                  <span className="px-2 text-sm text-muted-foreground">…</span>
                ) : null}

                {p === safeCurrent ? (
                  <span
                    aria-current="page"
                    className="inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-3 text-sm font-semibold text-foreground"
                  >
                    {p}
                  </span>
                ) : (
                  <Link
                    href={hrefForPage(p)}
                    className="inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-3 text-sm no-underline text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    {p}
                  </Link>
                )}
              </span>
            );
          })}
        </div>

        {/* Next */}
        {nextPage ? (
          <Link
            href={hrefForPage(nextPage)}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm no-underline text-foreground hover:bg-muted"
          >
            Next
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-muted-foreground opacity-60">
            Next
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        )}
      </div>
    </nav>
  );
}
