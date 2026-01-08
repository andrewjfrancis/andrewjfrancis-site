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
        <p>
          (We’ll keep this page calm, scannable, and consistent with your
          LinkedIn narrative — same truth, better layout.)
        </p>
      </div>
    </PageShell>
  );
}
