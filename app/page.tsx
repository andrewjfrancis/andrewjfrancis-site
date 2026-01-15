import Link from "next/link";
import { getLatestArticle } from "./writing/_data/articles";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function HomePage() {
  const latest = getLatestArticle();

  return (
    <main className="mx-auto w-full max-w-3xl px-6 pt-8 pb-12 sm:pt-10 sm:pb-16">
      {/* HERO */}
      <header className="relative overflow-hidden rounded-2xl bg-[#0B1E2D] text-white px-6 py-10 sm:px-10 sm:py-12">
        {/* Watermark (icon.svg, big + faint) */}
        <div className="pointer-events-none absolute -right-10 -top-10 rotate-12 opacity-[0.08]">
          <Image
            src="/icon.svg"
            alt=""
            width={420}
            height={420}
            className="h-64 w-64 sm:h-80 sm:w-80"
            priority
          />
        </div>

        <div className="relative flex items-start gap-4">
          {/* Small logo badge (like your screenshot) */}
          <div className="shrink-0 rounded-xl bg-primary-foreground/10 p-3 -ml-3 ring-1 ring-primary-foreground/15">
            <Image
              src="icon.svg"
              alt="AJF"
              width={44}
              height={44}
              className="h-11 w-11"
              priority
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Andrew J. Francis
            </h1>

            <p className="text-base leading-7 font-medium text-primary-foreground/85 sm:text-lg">
              Human-centered systems and decision architecture. Writing about
              how structure shapes execution.{" "}
              <em className="text-primary-foreground">
                Making organizational structure visible — especially where it
                quietly fails.
              </em>
            </p>
          </div>
        </div>
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
              {latest ? (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Latest</p>
                  <div className="space-y-2">
                    <a
                      href={latest.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-semibold underline underline-offset-4"
                    >
                      {latest.title}{" "}
                      <ArrowUpRight
                        className="inline-block align-baseline relative top-[1px] h-4 w-4 opacity-60"
                        aria-hidden="true"
                      />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>

                    {/* 👇 breathing room */}
                    <p className="text-sm text-muted-foreground">
                      {formatDate(latest.date)} ·{" "}
                      {latest.source === "medium" ? "Medium" : "Essay"}
                    </p>
                  </div>
                  <p className="text-base leading-7 text-muted-foreground">
                    {latest.excerpt}
                  </p>
                </div>
              ) : null}

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
