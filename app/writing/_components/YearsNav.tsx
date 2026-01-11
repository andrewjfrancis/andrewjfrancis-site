"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function YearsNav({
  years,
  mode,
}: {
  years: number[];
  mode: "all" | "year";
}) {
  const pathname = usePathname();

  return (
    <div className="text-sm text-muted-foreground">
      {mode === "year" ? (
        <>
          <Link className="underline underline-offset-4" href="/writing">
            All
          </Link>
          {" · "}
        </>
      ) : (
        <>Years: </>
      )}

      {years.map((y, idx) => {
        const isActive = pathname === `/writing/${y}`;

        return (
          <span key={y}>
            <Link
              href={`/writing/${y}`}
              className={
                isActive
                  ? "font-semibold text-foreground"
                  : "underline underline-offset-4"
              }
              aria-current={isActive ? "page" : undefined}
            >
              {y}
            </Link>
            {idx < years.length - 1 ? " · " : ""}
          </span>
        );
      })}
    </div>
  );
}
