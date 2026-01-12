import type { Metadata } from "next";
import PageShell from "../_components/PageShell";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Andrew J. Francis",
  description:
    "How I think about organizations, structure and decision-making, and why this writing exists.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="text-base leading-7 font-semibold text-muted-foreground">
          This is not a personal bio.
        </p>
        <p className="text-base leading-7 text-muted-foreground">
          It’s a statement of intent about the work collected here and the lens
          through which it’s written.
        </p>
      </header>

      <hr className="my-10" />

      <div className="space-y-6 text-base leading-7">
        <p>This site exists to make organizational structure visible.</p>

        <p>
          Most writing about work focuses on people — motivation, behavior,
          leadership style and culture. This work focuses on systems instead:
          how decisions are ordered, how authority is assigned, how
          responsibility is distributed and how those choices shape what people
          can realistically do.
        </p>

        <p>
          The essays here do not offer solutions or frameworks. They are not
          intended to be prescriptive. Their purpose is diagnostic.
        </p>

        <p>
          Many organizational failures feel personal to the people inside them.
          Effort increases. Frustration accumulates. Confidence erodes. What
          often goes unexamined is whether the system itself could ever have
          worked as designed.
        </p>

        <p>
          I write to surface those structural conditions — not to assign blame
          and not to restore comfort. If something here feels exposing, that
          reaction belongs to the reader, not the work.
        </p>

        <p>
          This is not a blog about productivity or leadership tips. It is an
          archive of patterns: how organizations behave under pressure, how
          decisions create downstream consequences and why capable people fail
          inside poorly designed systems.
        </p>

        <p>
          If these essays resonate, it’s likely because you’ve lived inside the
          structures being described. <em>Recognition is the goal.</em>{" "}
          Agreement is optional.
        </p>

        <p>
          If you want to follow along or see what I’m thinking about between
          essays, I’m on{" "}
          <a
            href="https://www.linkedin.com/in/andrewjfrancis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline underline-offset-4"
          >
            LinkedIn
            <ArrowUpRight
              className="relative top-[1px] h-4 w-4 opacity-60"
              aria-hidden="true"
            />
          </a>
          .
        </p>
      </div>
    </PageShell>
  );
}
