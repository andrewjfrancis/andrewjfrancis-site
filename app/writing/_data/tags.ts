/**
 * Canonical tag definitions for the Writing section.
 *
 * These tags are NOT for SEO.
 * They describe the intellectual terrain of the work.
 *
 * Source: Cognitive Lab synthesis + author intent
 */

export type Tag =
  | "Systems Thinking"
  | "Organizational Design"
  | "Decision Architecture"
  | "Strategy"
  | "Authority & Accountability"
  | "Governance"
  | "Work"
  | "Complexity";

export type TagSlug =
  | "systems-thinking"
  | "organizational-design"
  | "decision-architecture"
  | "strategy"
  | "authority-accountability"
  | "governance"
  | "work"
  | "complexity";

export const TAGS: {
  id: Tag;
  slug: TagSlug;
  description: string;
}[] = [
  {
    id: "Systems Thinking",
    slug: "systems-thinking",
    description:
      "A lens for understanding how outcomes emerge from interactions, feedback loops, and incentives — not from individual actions in isolation.",
  },
  {
    id: "Organizational Design",
    slug: "organizational-design",
    description:
      "How structure, authority, and decision flow shape behavior — independent of culture, intent or personality.",
  },
  {
    id: "Decision Architecture",
    slug: "decision-architecture",
    description:
      "How decisions are framed, constrained, and ordered upstream — long before execution makes the consequences visible.",
  },
  {
    id: "Strategy",
    slug: "strategy",
    description:
      "Strategy understood as the ordering of decisions — not a plan, a vision statement or a set of goals.",
  },
  {
    id: "Authority & Accountability",
    slug: "authority-accountability",
    description:
      "How authority and accountability are aligned — or separated — and what happens when responsibility is assigned without control.",
  },
  {
    id: "Governance",
    slug: "governance",
    description:
      "The formal and informal rules — escalation paths, controls, and constraints — that determine how organizations behave under pressure.",
  },
  {
    id: "Work",
    slug: "work",
    description:
      "The lived reality of how work actually gets done — including the invisible effort required to compensate for unclear decisions and structure.",
  },
  {
    id: "Complexity",
    slug: "complexity",
    description:
      "Acknowledging non-linearity, ambiguity, and why simple solutions routinely fail in complex systems.",
  },
];

// ---------- URL helpers (slug <-> Tag)

// Use the canonical slug table (do NOT derive slugs from tag text)
export function tagToSlug(tag: Tag): TagSlug {
  return (TAGS.find((t) => t.id === tag)?.slug ??
    "systems-thinking") as TagSlug;
}

export function tagFromSlug(slug: string): Tag | null {
  const norm = slug.trim().toLowerCase();
  const found = TAGS.find((t) => t.slug === norm);
  return found ? found.id : null;
}

export function getTagMeta(tag: Tag) {
  const found = TAGS.find((t) => t.id === tag);
  return (
    found ?? {
      id: tag,
      slug: tagToSlug(tag),
      description: "",
    }
  );
}
