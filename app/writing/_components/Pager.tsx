import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

function defaultHrefForPage(page: number) {
  return page <= 1 ? "/writing" : `/writing/page/${page}`;
}

function getWindow(current: number, total: number) {
  // Wider window (like before):
  // - Always show 1 and total
  // - Show ~5 around current when possible (current-2 .. current+2)
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages = new Set<number>();
  pages.add(1);
  pages.add(total);

  for (let p = current - 2; p <= current + 2; p++) {
    if (p >= 1 && p <= total) pages.add(p);
  }

  return Array.from(pages).sort((a, b) => a - b);
}

function PagerButton({
  href,
  children,
  disabled,
}: {
  href?: string;
  children: ReactNode;
  disabled?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-md border no-underline transition " +
    "px-2.5 py-2 text-sm " +
    "hover:bg-muted";

  if (disabled) {
    return (
      <span
        className={
          base +
          " text-muted-foreground opacity-60 pointer-events-none select-none"
        }
      >
        {children}
      </span>
    );
  }

  return (
    <Link href={href!} className={base + " text-foreground"}>
      {children}
    </Link>
  );
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
      {/* Mobile:
          Row 1: numbers (spans both columns)
          Row 2: Prev (left) + Next (right)

          Desktop (sm+):
          Single row: Prev | numbers | Next
      */}
      <div className="grid grid-cols-2 items-center gap-3 sm:grid-cols-[auto,1fr,auto]">
        {/* Numbers */}
        <div className="pageNumbers no-scrollbar col-span-2 -mx-2 px-2 flex items-center gap-1 justify-start overflow-x-auto whitespace-nowrap sm:col-span-1 sm:col-start-2 sm:justify-center">
          {windowPages.map((p, idx) => {
            const prev = windowPages[idx - 1];
            const needsDots = prev !== undefined && p - prev > 1;

            return (
              <span key={p} className="flex items-center gap-1">
                {needsDots ? (
                  <span className="px-1.5 text-sm text-muted-foreground">
                    …
                  </span>
                ) : null}

                {p === safeCurrent ? (
                  <span
                    aria-current="page"
                    className="inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2.5 text-sm font-semibold text-foreground"
                  >
                    {p}
                  </span>
                ) : (
                  <Link
                    href={hrefForPage(p)}
                    className="inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2.5 text-sm no-underline text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {p}
                  </Link>
                )}
              </span>
            );
          })}
        </div>

        {/* Prev */}
        <div className="justify-self-start sm:col-start-1 sm:row-start-1">
          <PagerButton
            href={prevPage ? hrefForPage(prevPage) : undefined}
            disabled={!prevPage}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Previous
          </PagerButton>
        </div>

        {/* Next */}
        <div className="justify-self-end sm:col-start-3 sm:row-start-1">
          <PagerButton
            href={nextPage ? hrefForPage(nextPage) : undefined}
            disabled={!nextPage}
          >
            Next
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </PagerButton>
        </div>
      </div>
    </nav>
  );
}
