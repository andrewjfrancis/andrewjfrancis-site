// app/now/page.tsx

import type { Metadata } from "next";
import PageShell from "../_components/PageShell";
import { Card } from "@/components/ui/card";
import { pageMetadata } from "../_lib/pageMetadata";

const title = "Now";
const description =
  "A living snapshot of current priorities, projects and intellectual focus.";
const url = "/now";

export const metadata: Metadata = pageMetadata({ title, description, url });

export default function NowPage() {
  return (
    <PageShell>
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight leading-tight">
          Now
        </h1>
        <p className="text-base font-medium leading-8 text-muted-foreground">
          Right now I’m building Aira — a system for interpreting communication
          and clarifying response.
        </p>

        <p className="text-base font-medium leading-8 text-muted-foreground">
          The focus is not generation, but correctness: outputs that identify
          signal, intent, and appropriate action in a way that holds.
        </p>
      </header>

      <hr className="my-10" />

      <section className="space-y-3">
        <header>
          <h2 className="text-xl font-semibold tracking-tight">
            What I’m doing now
          </h2>
          <p className="text-sm text-muted-foreground">
            Current focus and direction.
          </p>
        </header>

        <Card className="p-6">
          <h3 className="text-base font-semibold">Current focus</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7">
            <li>Tuning interpretation outputs for reliability</li>
            <li>Defining constraints that prevent overreach</li>
            <li>
              Building a system that can be used repeatedly without correction
            </li>
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
            Constraints guiding the work.
          </p>
        </header>

        <Card className="p-6">
          <h3 className="text-base font-semibold">Constraints I’m honoring</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7">
            <li>Clarity over novelty</li>
            <li>Small surface area</li>
            <li>Durability over speed</li>
            <li>Simple defaults; fewer knobs</li>
            <li>No interpretation beyond what can be supported</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-base font-semibold">Non-goals</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7">
            <li>Performative intelligence</li>
            <li>Overconfident outputs</li>
            <li>Systems that require constant correction</li>
            <li>Complexity without improved accuracy</li>
          </ul>
        </Card>
      </section>

      <hr className="my-10" />

      <section className="space-y-3">
        <header>
          <h2 className="text-xl font-semibold tracking-tight">
            Adjacent exploration
          </h2>
          <p className="text-sm text-muted-foreground">Non-system work.</p>
        </header>

        <Card className="p-6">
          <h3 className="text-base font-semibold">Current focus</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7">
            <li>Exploring ambient and atmospheric composition</li>
            <li>
              Developing intuition through repetition, timing and listening
            </li>
            <li>
              Studying how small structural changes alter emotional movement
            </li>
            <li>Capturing and evolving ideas without pressure toward output</li>
          </ul>
        </Card>
      </section>
    </PageShell>
  );
}
