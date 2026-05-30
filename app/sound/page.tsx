// app/sound/page.tsx

import type { Metadata } from "next";
import PageShell from "../_components/PageShell";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "../_lib/pageMetadata";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const title = "Sound";
const description =
  "Music, composition and sound design projects by Andrew J. Francis.";
const url = "/sound";

export const metadata: Metadata = pageMetadata({ title, description, url });

export default function SoundPage() {
  return (
    <PageShell>
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight leading-tight">
          Sound
        </h1>

        <div className="max-w-2xl space-y-4 text-base leading-7 text-muted-foreground">
          <p>Music as adjacent exploration.</p>

          <p>
            The same interest in structure exists here, but expressed through
            texture, tension, movement and release instead of language.
          </p>
        </div>

        <Image
          src="/sound/traffic-begins-cover.png"
          alt="Album artwork for Traffic Begins"
          width={1200}
          height={1200}
          className="w-full max-w-md rounded-xl"
          loading="eager"
        />
      </header>

      <hr className="my-10" />

      <Card>
        <CardHeader>
          <CardTitle>Traffic Begins</CardTitle>
          <CardDescription>Released May 29, 2026</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Atmospheric downtempo instrumental exploring movement, tension and
            release.
          </p>

          <div className="mt-6 space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">
              Listen
            </h3>

            <ul className="space-y-1">
              {[
                [
                  "Apple Music",
                  "https://music.apple.com/us/album/traffic-begins/6772880292?i=6772880293",
                ],
                [
                  "Spotify",
                  "https://open.spotify.com/track/2dIUYExmWLAkEWewdgPlUP",
                ],
                [
                  "YouTube Music",
                  "https://music.youtube.com/playlist?list=OLAK5uy_niy5td4eK2DqQhnjDD6KIStgtPIVXt3sk&si=oOJwVdxlGVpEsHou",
                ],
                ["Amazon Music", "https://music.amazon.com/tracks/B0H2TVC337"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    {label} <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <hr className="my-8" />

      <section className="space-y-4">
        <div>
          <p className="mt-4 text-muted-foreground">
            Also available on Deezer and other streaming services. Search for{" "}
            <strong>Andrew J. Francis</strong> if your preferred platform is not
            listed above.
          </p>
        </div>
      </section>

      <hr className="my-8" />

      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Experiments</h2>
          <p className="mt-1 text-muted-foreground">
            Works in progress, sketches and alternate versions.
          </p>
        </div>

        <a
          href="https://soundcloud.com/andrewjfrancis"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:underline"
        >
          SoundCloud <ArrowUpRight className="h-3 w-3" />
        </a>
      </section>
    </PageShell>
  );
}
