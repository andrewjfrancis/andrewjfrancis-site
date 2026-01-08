import Link from "next/link";

export default function YearsNav({
  years,
  mode,
}: {
  years: number[];
  mode: "all" | "year";
}) {
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

      {years.map((y, idx) => (
        <span key={y}>
          <Link className="underline underline-offset-4" href={`/writing/${y}`}>
            {y}
          </Link>
          {idx < years.length - 1 ? " · " : ""}
        </span>
      ))}
    </div>
  );
}
