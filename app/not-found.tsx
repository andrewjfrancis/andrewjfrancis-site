import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">
        This page does not exist.
      </h1>

      <p className="mt-4 text-base leading-7">
        Either the link is broken, the page was removed, or someone is
        aggressively testing edge cases.
      </p>

      <p className="mt-2 text-base leading-7 text-muted-foreground">
        (Which, if that’s you: noted.)
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Link href="/" className="underline underline-offset-4">
          Go home
        </Link>

        <Link href="/writing" className="underline underline-offset-4">
          Go to writing
        </Link>
      </div>
    </main>
  );
}
