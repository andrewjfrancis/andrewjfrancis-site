import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-16">
      {/* HERO */}
      <header className="hero">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Andrew J. Francis
        </h1>

        <p className="text-base leading-7 text-muted-foreground sm:text-lg">
          Human-centered systems and decision architecture. Writing about how
          structure shapes execution.{" "}
          <em>
            Making organizational structure visible — especially where it
            quietly fails.
          </em>
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
              Building a durable writing system and a personal writing practice.
              Shipping under constraints. Keeping it boring and correct.
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
              Writing lives here. Most essays link out to Medium.
            </p>
          </div>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Latest</p>
                <p className="text-base leading-7">
                  <a
                    href="https://medium.com/@andrewjfrancis/when-responsibility-is-assigned-without-authority-bc716b305531"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold inline-flex items-center gap-1 underline underline-offset-4"
                  >
                    When responsibility is assigned without authority
                    <ArrowUpRight
                      className="relative top-[1px] h-4 w-4 opacity-60"
                      aria-hidden="true"
                    />
                  </a>
                  <br></br>
                  Organizations routinely assign responsibility without granting
                  authority, creating accountability that appears rigorous but
                  is structurally impossible to fulfill.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/writing"
                  className="text-sm font-medium underline underline-offset-4"
                >
                  Browse all writing
                </Link>{" "}
                <a
                  href="https://medium.com/@andrewjfrancis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium inline-flex items-center gap-1 underline underline-offset-4"
                >
                  Medium
                  <ArrowUpRight
                    className="relative top-[1px] h-4 w-4 opacity-60"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </Card>
        </section>

        <Separator />

        {/* ABOUT */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight">About</h2>
            <p className="text-sm text-muted-foreground">
              A brief orientation to how I think about organizations, structure
              and why this writing exists.
            </p>
          </div>

          <Card className="p-6">
            <p className="text-base leading-7">
              How I think about systems, structure and work — and why this
              writing exists. Not a résumé. Not a list of services. A statement
              of perspective and boundaries.
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
