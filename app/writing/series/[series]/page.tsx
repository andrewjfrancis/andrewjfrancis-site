// app/writing/series/[series]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import PageShell from "../../../_components/PageShell";
import { pageMetadata } from "../../../_lib/pageMetadata";
import { ArticlesList } from "../../_components/ArticlesList";
import StatusPill from "../../_components/StatusPill";
import { pluralize } from "../../../_lib/pluralize";
import {
  getSeriesArticles,
  getSeriesBySlug,
  getSeriesEssayCount,
} from "../../_data/series";

type Props = {
  params: Promise<{ series: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { series: slug } = await params;
  const s = getSeriesBySlug(slug);
  if (!s || s.status === "upcoming") return {};

  return pageMetadata({
    title: `Writing — Series — ${s.title}`,
    description: s.description,
    url: `/writing/series/${s.slug}`,
  });
}

function BackToAllSeries({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Link
        href="/writing/series"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to all series
      </Link>
    </div>
  );
}

export default async function SeriesDetailPage({ params }: Props) {
  const { series: slug } = await params;

  const s = getSeriesBySlug(slug);
  if (!s || s.status === "upcoming") notFound();

  const items = getSeriesArticles(s);
  const count = getSeriesEssayCount(s);

  return (
    <PageShell>
      {/* Top back link */}
      <BackToAllSeries className="mb-8" />

      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Writing — Series — {s.title}
        </h1>

        <p className="text-base leading-7 text-muted-foreground">
          {s.description}
        </p>

        <div className="flex items-center gap-2">
          {count > 0 ? (
            <p className="text-sm text-muted-foreground">
              {count} {pluralize(count, "Essay")}
            </p>
          ) : null}

          {s.status === "in-progress" ? (
            <StatusPill label="In progress" />
          ) : null}
        </div>
      </header>

      <hr className="my-6" />

      {/* IMPORTANT: preserve series order; no pin badge here */}
      <ArticlesList items={items} showPinnedBadge={false} />

      {/* Bottom back link (give it air) */}
      <BackToAllSeries className="mt-12" />
    </PageShell>
  );
}
