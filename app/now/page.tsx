import type { Metadata } from "next";
import PageShell from "../_components/PageShell";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Now — Andrew J. Francis",
  description:
    "A living snapshot of current focus, working constraints and non-goals.",
};

export default function NowPage() {
  return (
    <PageShell>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Now</h1>
        <p className="text-base text-muted-foreground">
          Right now I’m building a durable writing practice and the simplest
          systems around it. The goal is steady output under constraint —
          correct, low-maintenance and repeatable.
        </p>
      </header>

      <hr className="my-10" />

      <section className="space-y-3">
        <header>
          <h2 className="text-xl font-semibold tracking-tight">
            What I’m doing now
          </h2>
          <p className="text-sm text-muted-foreground">
            The current focus of the work and what I’m building toward.
          </p>
        </header>

        <Card className="p-6">
          <h3 className="text-base font-semibold">Current focus</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7">
            <li>Writing regularly and expanding the archive.</li>
            <li>Building simple systems that support that pace.</li>
            <li>Keeping scope small and shipping what holds up.</li>
          </ul>
        </Card>
      </section>

      <hr className="my-10" />

      <section className="space-y-3">
        <header>
          <h2 className="text-xl font-semibold tracking-tight">
            How I’m working
          </h2>
          <p className="text-sm text-muted-foreground">
            The operating principles I’m keeping stable as the work compounds.
          </p>
        </header>

        <Card className="p-6">
          <h3 className="text-base font-semibold">Constraints I’m honoring</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7">
            <li>Clarity over novelty.</li>
            <li>Small surface area.</li>
            <li>Durability over speed.</li>
            <li>Simple defaults; fewer knobs.</li>
            <li>No “strategy theater.”</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-base font-semibold">Non-goals</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7">
            <li>Performative optimization.</li>
            <li>Complexity disguised as sophistication.</li>
            <li>Anything that can’t be maintained quietly.</li>
          </ul>
        </Card>
      </section>
    </PageShell>
  );
}
