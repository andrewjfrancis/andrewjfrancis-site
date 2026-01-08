import Link from "next/link";

export function Pager({
  prevHref,
  nextHref,
  className,
}: {
  prevHref?: string | null;
  nextHref?: string | null;
  className?: string;
}) {
  return (
    <div className={className ?? "pager"}>
      {prevHref ? <Link href={prevHref}>← Previous</Link> : <span />}
      {nextHref ? <Link href={nextHref}>Next →</Link> : <span />}
    </div>
  );
}
