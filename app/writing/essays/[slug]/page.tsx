// app/writing/essays/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "../../../_components/PageShell";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { readEssaySource } from "../../_lib/essays";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ from?: string }>;
};

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
      <div className="mb-6">
        <Link
          href={from}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {backLabel}
        </Link>
      </div>

      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          {frontmatter.title}
        </h1>

        {frontmatter.excerpt ? (
          <p className="text-2xl leading-9 text-muted-foreground sm:text-2xl sm:leading-10">
            {frontmatter.excerpt}
          </p>
        ) : null}
      </header>

      <hr className="my-6" />

      <article className="space-y-4 text-base leading-7">{rendered}</article>

      <div className="mt-10">
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
