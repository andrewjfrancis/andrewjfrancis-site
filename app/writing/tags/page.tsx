import Link from "next/link";
import PageShell from "../../_components/PageShell";
import { TAGS } from "../_data/tags";
import { getArticlesByTag } from "../_data/articles";

export default function TagsIndexPage() {
  return (
    <PageShell>
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">Tags</h1>

        <p className="text-base leading-7 text-muted-foreground">
          These tags describe the structural patterns explored across the
          writing — not topics in the abstract, but recurring conditions that
          shape how work actually functions inside organizations.
        </p>

        <p className="text-base leading-7 text-muted-foreground">
          They’re meant to help you navigate by recognition rather than
          interest, surfacing essays that examine the same underlying dynamics
          from different angles.
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
                  ({count})
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
