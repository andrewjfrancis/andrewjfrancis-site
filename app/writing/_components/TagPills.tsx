// app/writing/_components/TagPills.tsx
import Link from "next/link";
import { TAGS, type TagSlug } from "../_data/tags";

export default function TagPills({
  counts,
  totalArticles,
  activeSlug,
  showAll = true,
  allHref = "/writing",
  className = "",
}: {
  counts: Map<TagSlug, number>;
  totalArticles: number;
  activeSlug?: TagSlug;
  showAll?: boolean;
  allHref?: string;
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm";
  const countCls = "text-xs text-muted-foreground";
  const activeCls = "border-foreground/30 text-foreground";
  const inactiveCls =
    "text-foreground/80 hover:bg-muted/40 no-underline hover:no-underline visited:text-foreground/80";

  return (
    <nav className={className}>
      <ul className="flex gap-2 overflow-x-auto whitespace-nowrap no-scrollbar">
        {showAll ? (
          <li>
            {/* Active when no activeSlug (i.e. you're on /writing “all essays”) */}
            {!activeSlug ? (
              <span className={`${base} ${activeCls}`}>
                <span>All</span>
                <span className={countCls}>{totalArticles}</span>
              </span>
            ) : (
              <Link href={allHref} className={`${base} ${inactiveCls}`}>
                <span>All</span>
                <span className={countCls}>{totalArticles}</span>
              </Link>
            )}
          </li>
        ) : null}

        {TAGS.map((t) => {
          const count = counts.get(t.slug) ?? 0;
          const isActive = t.slug === activeSlug;
          const isDisabled = count === 0;

          const disabledCls =
            "opacity-50 text-muted-foreground cursor-not-allowed";

          const pillClass =
            base +
            " " +
            (isDisabled ? disabledCls : isActive ? activeCls : inactiveCls);

          const label = (
            <>
              <span>{t.id}</span>
              <span className={countCls}>{count}</span>
            </>
          );

          if (isDisabled || isActive) {
            return (
              <li key={t.slug}>
                <span className={pillClass} title={t.description}>
                  {label}
                </span>
              </li>
            );
          }

          return (
            <li key={t.slug}>
              <Link
                href={`/writing/tags/${t.slug}`}
                className={pillClass}
                title={t.description}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
