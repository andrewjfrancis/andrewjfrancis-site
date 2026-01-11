import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-16">
      {/* HERO */}
      <header className="hero">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Andrew J. Francis
        </h1>

        <p className="text-base leading-7 text-muted-foreground sm:text-lg">
          Human-centered systems & decision architecture. Writing about how
          structure shapes execution.
        </p>
      </header>

      <div className="mt-10 space-y-10 sm:mt-12">
        <Separator />

        {/* NOW */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight">Now</h2>
            <p className="text-sm text-muted-foreground">
              A living snapshot — updated as priorities change.
            </p>
          </div>

          <Card className="p-6">
            <p className="text-base leading-7">
              Building Aira and a durable writing system. Shipping under
              constraints. Keeping it boring and correct.
            </p>

            <div className="mt-4">
              <Link
                href="/now"
                className="text-sm font-medium underline underline-offset-4"
              >
                Read the Now page
              </Link>
            </div>
          </Card>
        </section>

        <Separator />

        {/* WRITING */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight">Writing</h2>
            <p className="text-sm text-muted-foreground">
              Articles live here, with links out to Medium when relevant.
            </p>
          </div>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Latest</p>
                <p className="text-base leading-7">
                  No posts here yet — this section will list the most recent
                  articles once we add MDX.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/writing"
                  className="text-sm font-medium underline underline-offset-4"
                >
                  Browse all writing
                </Link>

                <a
                  href="https://medium.com/@andrewjfrancis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium underline underline-offset-4"
                >
                  Read on Medium
                </a>
              </div>
            </div>
          </Card>
        </section>

        <Separator />

        {/* WORK */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight">Work</h2>
            <p className="text-sm text-muted-foreground">
              What I build, what I care about, and what I avoid.
            </p>
          </div>

          <Card className="p-6">
            <p className="text-base leading-7">
              This will become a compact “what I do / how I work” section with
              clear non-goals.
            </p>

            <div className="mt-4">
              <Link
                href="/about"
                className="text-sm font-medium underline underline-offset-4"
              >
                Read the About page
              </Link>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}
