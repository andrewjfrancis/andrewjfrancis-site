// app/writing/tags/page.tsx

import Link from "next/link";
import PageShell from "../../_components/PageShell";
import { TAGS } from "../_data/tags";
import { getArticlesByTag } from "../_data/articles";

export default function TagsIndexPage() {
  return (
    <PageShell>
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          Writing — Tags — Andrew J. Francis
        </h1>

        <p className="text-base leading-7 text-muted-foreground">
          These tags describe structural patterns that recur across the writing
          — conditions that shape how work functions inside organizations.
        </p>

        <p className="text-base leading-7 text-muted-foreground">
          Navigate by recognition rather than interest. Each tag surfaces essays
          that examine the same dynamics from different angles.
        </p>
      </header>

      <hr className="my-10" />

      <ul className="space-y-6">
        {TAGS.map((t) => {
          const count = getArticlesByTag(t.id).length;

          return (
            <li key={t.slug} className="space-y-1">
              <Link
                href={`/writing/tags/${t.slug}`}
                className="text-base font-semibold underline underline-offset-4"
              >
                {t.id}{" "}
                <span className="font-normal text-muted-foreground">
                  • {count}
                </span>
              </Link>

              <p className="text-sm leading-6 text-muted-foreground">
                {t.description}
              </p>
            </li>
          );
        })}
      </ul>
    </PageShell>
  );
}
