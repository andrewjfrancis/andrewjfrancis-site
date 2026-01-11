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

export const TAGS: {
  id: Tag;
  description: string;
}[] = [
  {
    id: "Systems Thinking",
    description:
      "A lens for understanding how outcomes emerge from interactions, feedback loops, and incentives — not from individual actions in isolation.",
  },
  {
    id: "Organizational Design",
    description:
      "How structure, authority, and decision flow shape behavior — independent of culture, intent or personality.",
  },
  {
    id: "Decision Architecture",
    description:
      "How decisions are framed, constrained, and ordered upstream — long before execution makes the consequences visible.",
  },
  {
    id: "Strategy",
    description:
      "Strategy understood as the ordering of decisions — not a plan, a vision statement or a set of goals.",
  },
  {
    id: "Authority & Accountability",
    description:
      "How authority and accountability are aligned — or separated — and what happens when responsibility is assigned without control.",
  },
  {
    id: "Governance",
    description:
      "The formal and informal rules — escalation paths, controls, and constraints — that determine how organizations behave under pressure.",
  },
  {
    id: "Work",
    description:
      "The lived reality of how work actually gets done — including the invisible effort required to compensate for unclear decisions and structure.",
  },
  {
    id: "Complexity",
    description:
      "Acknowledging non-linearity, ambiguity, and why simple solutions routinely fail in complex systems.",
  },
];

export function isTag(value: string): value is Tag {
  return TAGS.some((t) => t.id === value);
}

export function getTagMeta(tag: Tag) {
  return TAGS.find((t) => t.id === tag)!;
}
