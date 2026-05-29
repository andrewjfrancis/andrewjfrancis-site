// app/writing/series/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageShell from "../../_components/PageShell";
import { pluralize } from "../../_lib/pluralize";
import StatusPill from "../_components/StatusPill";
import { pageMetadata } from "../../_lib/pageMetadata";
import { getSeriesGroups, getSeriesEssayCount } from "../_data/series";

const title = "Writing — Series";
const description =
  "Series are essay sequences that trace one structural problem across multiple angles, in a deliberate order.";
const url = "/writing/series";

export const metadata: Metadata = pageMetadata({ title, description, url });

export default function SeriesIndexPage() {
  const groups = getSeriesGroups();

  return (
    <PageShell>
      <div className="mb-8">
        <Link
          href="/writing"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Writing
        </Link>
      </div>
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          Writing — Series
        </h1>

        <p className="text-base leading-7 text-muted-foreground">
          Series are deliberate sequences. Each one traces the same structural
          dynamic across multiple essays — not a feed, but a causal chain.
        </p>
      </header>

      <hr className="my-10" />

      {/* Upcoming (not linked) */}
      {groups.upcoming.length > 0 ? (
        <section className="space-y-4">
          <ul className="space-y-6">
            {groups.upcoming.map((s) => (
              <li key={s.slug} className="space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-base font-semibold">{s.title}</p>
                  {s.showPill ? <StatusPill label="Upcoming" /> : null}
                </div>

                <p className="text-sm leading-6 text-muted-foreground">
                  {s.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* In progress */}
      {groups.inProgress.length > 0 ? (
        <>
          <hr className="my-10" />
          <section className="space-y-4">
            <ul className="space-y-6">
              {groups.inProgress.map((s) => {
                const count = getSeriesEssayCount(s);

                return (
                  <li key={s.slug} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/writing/series/${s.slug}?from=${encodeURIComponent("/writing/series")}`}
                        className="text-base font-semibold underline underline-offset-4"
                      >
                        {s.title}
                      </Link>
                      {count > 0 ? (
                        <span className="text-sm text-muted-foreground">
                          • {count} {pluralize(count, "Essay")}
                        </span>
                      ) : null}
                      <StatusPill label="In progress" />
                    </div>

                    <p className="text-sm leading-6 text-muted-foreground">
                      {s.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
        </>
      ) : null}

      {/* Complete */}
      {groups.complete.length > 0 ? (
        <>
          <hr className="my-10" />
          <section className="space-y-4">
            <ul className="space-y-6">
              {groups.complete.map((s) => {
                const count = getSeriesEssayCount(s);

                return (
                  <li key={s.slug} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/writing/series/${s.slug}?from=${encodeURIComponent("/writing/series")}`}
                        className="text-base font-semibold underline underline-offset-4"
                      >
                        {s.title}
                      </Link>

                      {count > 0 ? (
                        <span className="text-sm text-muted-foreground">
                          • {count} {pluralize(count, "Essay")}
                        </span>
                      ) : null}
                    </div>

                    <p className="text-sm leading-6 text-muted-foreground">
                      {s.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
          <hr className="my-10" />
        </>
      ) : null}
      <div className="mt-12">
        <Link
          href="/writing"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Writing
        </Link>
      </div>
    </PageShell>
  );
}
