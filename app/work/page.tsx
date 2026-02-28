// app/work/page.tsx

import type { Metadata } from "next";
import PageShell from "../_components/PageShell";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "../_lib/pageMetadata";
import { Separator } from "@/components/ui/separator";

const title = "Work";
const description =
  "Applied structural analysis for organizations where execution slows because decisions do not hold.";
const url = "/work";

export const metadata: Metadata = pageMetadata({ title, description, url });

export default function WorkPage() {
  return (
    <PageShell>
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight leading-tight">
          Work
        </h1>
        <p className="text-base font-medium leading-8 text-muted-foreground">
          This is applied structural analysis of decision flow.
        </p>
        <p className="text-base font-medium leading-8 text-muted-foreground">
          The same lens used in the essays is available in direct engagements.
        </p>
      </header>

      <hr className="my-10" />

      <div className="space-y-6 text-base leading-7">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">
            What This Involves
          </h2>
          <p>I work with organizations where execution slows despite effort.</p>
          <p>
            Not because people lack urgency, but because decisions do not hold.
          </p>
          <p>
            Most breakdowns attributed to culture, talent or communication are
            structural. Authority is unclear. Constraints shift. Coordination
            expands to compensate for missing closure.
          </p>
          <p>
            I diagnose where decision flow breaks and why work cannot safely
            compound.
          </p>
        </section>

        <Separator />

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">
            Engagement Structure
          </h2>
          <p>Engagements are structured and time-bound.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Executive and stakeholder interviews</li>
            <li>Decision-flow mapping across functions</li>
            <li>Structural synthesis written in clear language</li>
            <li>Direct briefing to leadership</li>
          </ul>
          <p>The work is diagnostic.</p>
          <p>It clarifies what is structurally happening.</p>
        </section>

        <Separator />

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Scope</h2>
          <ul className="list-none space-y-1">
            <li>I do not run workshops.</li>
            <li>I do not implement change programs.</li>
            <li>I do not provide culture transformation plans.</li>
          </ul>
          <p>I analyze decision architecture and closure durability.</p>
        </section>

        <Separator />

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
          <p>
            <a
              href="https://www.linkedin.com/in/andrewjfrancis"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              LinkedIn{" "}
              <ArrowUpRight
                className="inline-block align-baseline relative top-[1px] h-4 w-4 opacity-60"
                aria-hidden="true"
              />
            </a>{" "}
            is the most reliable way to reach me.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
