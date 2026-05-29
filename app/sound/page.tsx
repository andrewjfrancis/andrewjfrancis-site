// app/sound/page.tsx

import type { Metadata } from "next";
import PageShell from "../_components/PageShell";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "../_lib/pageMetadata";
import Image from "next/image";

const title = "Sound";
const description =
  "Music, composition and sound design projects by Andrew J. Francis.";
const url = "/sound";

export const metadata: Metadata = pageMetadata({ title, description, url });

export default function SoundPage() {
  return (
    <PageShell>
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight leading-tight">
          Sound
        </h1>

        <Image
          src="/sound/traffic-begins-cover.png"
          alt="Album artwork for [Track Name]"
          width={1200}
          height={1200}
          className="w-full max-w-md rounded-xl"
        />

        <p className="text-base font-medium leading-8 text-muted-foreground">
          Music, sound experiments and ongoing creative work.
        </p>
      </header>

      <hr className="my-10" />

      <div className="space-y-6 text-base leading-7">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Listen</h2>

          <p>
            I make music as a way to work with texture, pressure, release and
            atmosphere outside the systems language that shapes my writing.
          </p>

          <p>
            The current home for released and in-progress tracks is SoundCloud.
          </p>

          <p>
            <a
              href="https://soundcloud.com/andrewjfrancis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline underline-offset-4"
            >
              SoundCloud
              <ArrowUpRight
                className="relative top-[1px] h-4 w-4 opacity-60"
                aria-hidden="true"
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </p>
        </section>
      </div>
    </PageShell>
  );
}
