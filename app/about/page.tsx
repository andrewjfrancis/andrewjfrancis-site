import PageShell from "../_components/PageShell";

export default function AboutPage() {
  return (
    <PageShell>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="text-base text-muted-foreground">
          Placeholder for now — we’ll paste your finalized “About” copy here and
          tune the structure without over-designing it.
        </p>
      </header>

      <hr className="my-10" />

      <div className="space-y-6 text-base leading-7">
        <p>This site exists to make organizational structure visible.</p>

        <p>
          Most writing about work focuses on people — motivation, behavior,
          leadership style, culture. This work focuses on systems instead: how
          decisions are ordered, how authority is assigned, how responsibility
          is distributed, and how those choices shape what people can
          realistically do.
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
          decisions create downstream consequences, and why capable people fail
          inside poorly designed systems.
        </p>

        <p>
          If these essays resonate, it’s likely because you’ve lived inside the
          structures being described. <em>Recognition is the goal.</em> Agreement is optional.
        </p>

        <p>
          If you want to follow along or see what I’m thinking about between
          essays, I’m on LinkedIn.
        </p>
      </div>
    </PageShell>
  );
}
