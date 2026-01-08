import PageShell from "../_components/PageShell";

export default function NowPage() {
  return (
    <PageShell>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Now</h1>
        <p className="text-base text-muted-foreground">
          A living snapshot — updated as priorities change.
        </p>
      </header>

      <section className="mt-10 space-y-6">
        <p className="text-base leading-7">
          Building Aira and a durable writing system. Shipping under
          constraints. Keeping it boring and correct.
        </p>

        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h2 className="text-base font-semibold">Work (v1)</h2>
          <p className="mt-3 text-base leading-7">
            I’m building small, correct systems that can survive real-world
            constraints — including time, attention, and organizational noise.
          </p>

          <h3 className="mt-6 text-base font-semibold">
            Constraints I’m honoring
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7">
            <li>Clarity over novelty.</li>
            <li>Small surface area.</li>
            <li>Durability over speed.</li>
            <li>No “strategy theater.”</li>
          </ul>

          <h3 className="mt-6 text-base font-semibold">Non-goals</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7">
            <li>Performative optimization.</li>
            <li>Complexity disguised as sophistication.</li>
            <li>Anything that can’t be maintained quietly.</li>
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
