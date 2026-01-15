// app/writing/essays/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageShell from "../../../_components/PageShell";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { readEssaySource } from "../../_lib/essays";
import { ArrowLeft } from "lucide-react";
import { pageMetadata } from "../../../_lib/pageMetadata";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ from?: string }>;
};

function formatDate(value: unknown) {
  let iso: string | null = null;

  if (typeof value === "string") iso = value;
  else if (value instanceof Date) iso = value.toISOString().slice(0, 10);

  if (!iso) return null;

  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return null;

  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);

  const dt = new Date(Date.UTC(year, month - 1, day));
  if (Number.isNaN(dt.getTime())) return null;

  return dt.toLocaleDateString(undefined, {
    timeZone: "UTC",
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

// ✅ Dynamic metadata for each essay page — using helper
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const data = readEssaySource(slug);
  if (!data) {
    // Page will 404 — keep metadata minimal.
    // IMPORTANT: do NOT add "— Andrew J. Francis" here; layout template appends it.
    return { title: "Essay" };
  }

  const { frontmatter } = data;

  const title =
    typeof frontmatter.title === "string" && frontmatter.title.trim()
      ? frontmatter.title.trim()
      : "Essay";

  const description =
    typeof frontmatter.excerpt === "string" && frontmatter.excerpt.trim()
      ? frontmatter.excerpt.trim()
      : "Essay in the writing archive.";

  const url = `/writing/essays/${slug}`;

  return pageMetadata({
    title,
    description,
    url,
    type: "article",
  });
}

export default async function EssayPage({ params, searchParams }: Props) {
  const { slug } = await params;

  const sp = (await searchParams) ?? {};
  const from =
    typeof sp.from === "string" && sp.from.startsWith("/")
      ? sp.from
      : "/writing";

  const data = readEssaySource(slug);
  if (!data) notFound();

  const { frontmatter, content } = data;

  const { content: rendered } = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  const backLabel = from === "/writing" ? "Back to Writing" : "Back to results";

  return (
    <PageShell>
      {/* Back link (top) */}
      <div className="mb-8">
        <Link
          href={from}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {backLabel}
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight leading-tight">
          {frontmatter.title}
        </h1>

        {frontmatter.excerpt ? (
          <p className="text-2xl leading-9 text-muted-foreground sm:text-2xl sm:leading-10">
            {frontmatter.excerpt}
          </p>
        ) : null}

        {(() => {
          const label = formatDate(frontmatter.date);
          return label ? (
            <p className="text-sm text-muted-foreground">{label} · Essay</p>
          ) : null;
        })()}
      </header>

      <hr className="my-8" />

      {/* MDX body */}
      <article className="essay">{rendered}</article>

      {/* Back link (bottom) */}
      <div className="mt-12">
        <Link
          href={from}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {backLabel}
        </Link>
      </div>
    </PageShell>
  );
}
