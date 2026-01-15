import type { Metadata } from "next";

type PageMetaArgs = {
  title: string; // IMPORTANT: no "— Andrew J. Francis" here
  description?: string;
  url: string; // relative path like "/writing/tags/systems-thinking"
  type?: "website" | "article";
};

const DEFAULT_DESC =
  "Writing about organizational structure, decision-making and how systems shape work.";

const OG_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Andrew J. Francis",
};

export function pageMetadata({
  title,
  description,
  url,
  type = "website",
}: PageMetaArgs): Metadata {
  const desc = description?.trim() ? description : DEFAULT_DESC;

  return {
    title,
    description: desc,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description: desc,
      url, // metadataBase in app/layout.tsx makes this absolute
      type,
      siteName: "Andrew J. Francis",
      images: [OG_IMAGE],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [OG_IMAGE.url],
    },
  };
}
