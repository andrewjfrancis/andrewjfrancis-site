// app/writing/_data/articles.ts

import { TAGS, type Tag, type TagSlug } from "./tags";

export type ArticleSource = "medium" | "local";
export type ArticleKind = "orientation";

export type Article = {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  year: number;
  excerpt: string;
  source: ArticleSource;
  kind?: ArticleKind;

  externalUrl?: string;
  slug?: string;
  tags?: Tag[];

  pinned?: boolean; // optional legacy convenience
  pinOrder?: number; // real control
};

export const PAGE_SIZE = 10;

export const ARTICLES_REAL: Article[] = [
  {
    id: "2026-04-17-01",
    title: "What systems make safe",
    date: "2026-04-17",
    year: 2026,
    excerpt:
      "Systems determine what behavior is safe, shaping action not through intent but through exposure and protection.",
    source: "local",
    slug: "what-systems-make-safe",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-04-14-01",
    title: "What systems make recognizable",
    date: "2026-04-14",
    year: 2026,
    excerpt:
      "Systems shape what is visible and how evaluation occurs, determining what can be reliably recognized over time.",
    source: "local",
    slug: "what-systems-make-recognizable",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-04-10-01",
    title: "When unmeasured work becomes harder to recognize",
    date: "2026-04-10",
    year: 2026,
    excerpt:
      "When measurement determines what is visible, work that is not measured becomes harder to recognize, shaping what is acknowledged and acted upon.",
    source: "local",
    slug: "when-unmeasured-work-becomes-harder-to-recognize",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-04-07-01",
    title: "When measurement defines what can be judged",
    date: "2026-04-07",
    year: 2026,
    excerpt:
      "When measurement defines what is visible, it shapes what can be judged, making judgment more reliable where work is measured and less reliable where it is not.",
    source: "local",
    slug: "when-measurement-defines-what-can-be-judged",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-04-05-01",
    title: "When measurement replaces judgment",
    date: "2026-04-05",
    year: 2026,
    excerpt:
      "When measurement becomes the primary way work is evaluated, judgment narrows to what can be counted, and behavior adapts accordingly.",
    source: "local",
    slug: "when-measurement-replaces-judgment",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-04-03-01",
    title: "When work is easiest before it is visible",
    date: "2026-04-03",
    year: 2026,
    excerpt:
      "Work feels easier before it becomes visible, not because it is simpler, but because it carries less exposure.",
    source: "local",
    slug: "when-work-is-easiest-before-it-is-visible",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-03-31-01",
    title: "When validation follows commitment",
    date: "2026-03-31",
    year: 2026,
    excerpt:
      "Validation does not always determine direction. When commitment forms first, validation becomes constrained by what is already in motion.",
    source: "local",
    slug: "when-validation-follows-commitment",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-03-29-01",
    title: "When work becomes harder to stop once it is visible",
    date: "2026-03-29",
    year: 2026,
    excerpt:
      "Work does not persist because it is correct. It persists because stopping it becomes more costly than continuing it.",
    source: "local",
    slug: "when-work-becomes-harder-to-stop-once-it-is-visible",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-03-27-01",
    title: "When work becomes real when it is visible",
    date: "2026-03-27",
    year: 2026,
    excerpt:
      "Work is not treated as real when it begins. It becomes real when it becomes visible.",
    source: "local",
    slug: "when-work-becomes-real-when-it-is-visible",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-03-24-01",
    title: "When work gets questioned",
    date: "2026-03-24",
    year: 2026,
    excerpt:
      "Work is not questioned when it is most uncertain. It is questioned when continuing it becomes more costly than challenging it.",
    source: "local",
    slug: "when-work-gets-questioned",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-03-22-01",
    title: "When commitment makes validation costly",
    date: "2026-03-22",
    year: 2026,
    excerpt:
      "As work becomes visible and commitment forms around it, the cost of questioning it increases, making validation less likely to alter direction.",
    source: "local",
    slug: "when-commitment-makes-validation-costly",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-03-20-01",
    title: "When signaling becomes safer than progress",
    date: "2026-03-20",
    year: 2026,
    excerpt:
      "When outcomes are uncertain and exposure is high, signaling progress becomes safer than producing it.",
    source: "local",
    slug: "when-signaling-becomes-safer-than-progress",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-03-15-01",
    title: "Authority determines who gets to frame the decision",
    date: "2026-03-15",
    year: 2026,
    excerpt:
      "Organizations often assume that decisions form through the strength of an argument or the clarity of a proposal. In reality the ability to frame a decision early depends heavily on authority. The same framing attempt can create momentum when it comes from one group and resistance when it comes from another.",
    source: "local",
    slug: "authority-determines-who-gets-to-frame-the-decision",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-03-13-01",
    title: "Decisions form before disagreement appears",
    date: "2026-03-13",
    year: 2026,
    excerpt:
      "In many organizations disagreement does not disappear. It simply arrives too late. Decisions often begin forming before they are exposed to meaningful challenge. By the time critique appears the structural momentum of the decision already exists.",
    source: "local",
    slug: "decisions-form-before-disagreement-appears",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-03-10-01",
    title: "Protection produces silence",
    date: "2026-03-10",
    year: 2026,
    excerpt:
      "Organizations often interpret silence as agreement or alignment. In reality silence frequently emerges as a form of protection. When speaking up increases exposure without increasing influence individuals learn that withholding critique is safer than offering it.",
    source: "local",
    slug: "protection-produces-silence",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-03-08-01",
    title: "Protection changes exposure",
    date: "2026-03-08",
    year: 2026,
    excerpt:
      "Organizations train behavior not only through authority and incentives but through what they protect. When a person, initiative or narrative becomes protected, enforcement weakens around it. That shift alters exposure and behavior adapts accordingly.",
    source: "local",
    slug: "protection-changes-exposure",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-03-06-01",
    title: "Clarity does not create authority",
    date: "2026-03-06",
    year: 2026,
    excerpt:
      "Clear communication cannot substitute for structural authority. When decision rights are ambiguous, organizations often attempt to compensate with better messaging, documentation and alignment — but clarity does not alter exposure.",
    source: "local",
    slug: "clarity-does-not-create-authority",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-03-03-01",
    title: "Strategy without boundary change is narrative",
    date: "2026-03-03",
    year: 2026,
    excerpt:
      "Strategy alters behavior only when it changes boundaries. Without boundary change, strategy remains narrative.",
    source: "local",
    slug: "strategy-without-boundary-change-is-narrative",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Strategy",
      "Work",
    ],
  },
  {
    id: "2026-03-01-01",
    title: "Alignment is often compensation",
    date: "2026-03-01",
    year: 2026,
    excerpt:
      "When decision boundaries are unstable, alignment expands not as collaboration but as a mechanism for diffusing exposure.",
    source: "local",
    slug: "alignment-is-often-compensation",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-02-27-01",
    title: "Escalation trains dependency",
    date: "2026-02-27",
    year: 2026,
    excerpt:
      "When escalation becomes the primary mechanism for resolving risk, organizations train people to transfer exposure upward rather than resolve uncertainty locally.",
    source: "local",
    slug: "escalation-trains-dependency",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-02-24-01",
    title: "What survives enforcement becomes culture",
    date: "2026-02-24",
    year: 2026,
    excerpt:
      "Culture does not stabilize around what is declared — it stabilizes around what is consistently enforced.",
    source: "local",
    slug: "what-survives-enforcement-becomes-culture",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-02-22-01",
    title: "Constraints determine what becomes safe",
    date: "2026-02-22",
    year: 2026,
    excerpt:
      "Constraints do not limit behavior — they determine which behaviors are safe to repeat.",
    source: "local",
    slug: "constraints-determine-what-becomes-safe",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
  },
  {
    id: "2026-02-20-01",
    title: "Incentives are enforcement, not motivation",
    date: "2026-02-20",
    year: 2026,
    excerpt:
      "Incentives are not tools for motivation — they are enforcement structures that shape behavior through consequence, regardless of stated values or intent.",
    source: "local",
    slug: "incentives-are-enforcement-not-motivation",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Work",
    ],
    pinned: true,
    pinOrder: 1,
  },
  {
    id: "2026-02-18-01",
    title: "When authority is ambiguous, defensibility becomes the skill",
    date: "2026-02-18",
    year: 2026,
    excerpt:
      "When authority is unstable and decisions do not hold, individuals rationally optimize for defensibility rather than correctness.",
    source: "local",
    slug: "when-authority-is-ambiguous-defensibility-becomes-the-skill",
    tags: [
      "Authority & Accountability",
      "Governance",
      "Organizational Design",
      "Systems Thinking",
      "Work",
    ],
  },
  {
    id: "2026-02-15-01",
    title: "Organizations don’t move slowly — they move reversibly",
    date: "2026-02-15",
    year: 2026,
    excerpt:
      "Organizations appear slow when decisions reopen and reset accumulated work.",
    source: "local",
    slug: "organizations-dont-move-slowly-they-move-reversibly",
    tags: [
      "Authority & Accountability",
      "Decision Architecture",
      "Organizational Design",
    ],
  },
  {
    id: "2026-02-13-01",
    title: "Execution is downstream of decision order",
    date: "2026-02-13",
    year: 2026,
    excerpt:
      "Execution exposes whether decisions were resolved in the right order.",
    source: "local",
    slug: "execution-is-downstream-of-decision-order",
    tags: [
      "Authority & Accountability",
      "Decision Architecture",
      "Organizational Design",
    ],
  },
  {
    id: "2026-02-10-01",
    title: "Stable constraints create autonomy",
    date: "2026-02-10",
    year: 2026,
    excerpt:
      "Autonomy is not freedom from constraint — it is the downstream effect of constraints that are stable enough to act within without seeking permission.",
    source: "local",
    slug: "stable-constraints-create-autonomy",
    tags: [
      "Authority & Accountability",
      "Decision Architecture",
      "Organizational Design",
    ],
  },
  {
    id: "2026-02-08-01",
    title: "Decision rights are upstream infrastructure",
    date: "2026-02-08",
    year: 2026,
    excerpt:
      "Decision rights are not a leadership trait — they are upstream infrastructure that determines whether execution can safely proceed.",
    source: "local",
    slug: "decision-rights-are-upstream-infrastructure",
    tags: [
      "Authority & Accountability",
      "Decision Architecture",
      "Organizational Design",
    ],
  },
  {
    id: "2026-02-06-01",
    title: "Coordination is what happens when decision flow breaks",
    date: "2026-02-06",
    year: 2026,
    excerpt:
      "Coordination is not a sign of alignment — it is the structural compensation that emerges when decisions do not hold and authority cannot enforce closure.",
    source: "local",
    slug: "coordination-is-what-happens-when-decision-flow-breaks",
    tags: [
      "Authority & Accountability",
      "Decision Architecture",
      "Organizational Design",
    ],
  },
  {
    id: "2026-02-01-01",
    title: "Momentum is a system property",
    date: "2026-02-01",
    year: 2026,
    excerpt:
      "Momentum is not effort or urgency — it is the downstream result of authority that holds and decisions that do not reopen.",
    source: "local",
    slug: "momentum-is-a-system-property",
    tags: [
      "Authority & Accountability",
      "Decision Architecture",
      "Organizational Design",
    ],
  },
  {
    id: "2026-01-30-01",
    title: "Incentives train behavior more than intent",
    date: "2026-01-30",
    year: 2026,
    excerpt:
      "People adapt to what the system punishes and protects, so an organization’s real values are revealed through consequences, not messaging.",
    source: "local",
    slug: "incentives-train-behavior-more-than-intent",
    tags: ["Authority & Accountability", "Governance", "Organizational Design"],
  },
  {
    id: "2026-01-27-01",
    title: "Alignment is a tax on missing authority",
    date: "2026-01-27",
    year: 2026,
    excerpt:
      "Alignment work expands when authority is unclear because coordination becomes the substitute for decision rights and closure.",
    source: "local",
    slug: "alignment-is-a-tax-on-missing-authority",
    tags: ["Authority & Accountability", "Governance", "Organizational Design"],
  },
  {
    id: "2026-01-25-01",
    title: "Closure is a system property",
    date: "2026-01-25",
    year: 2026,
    excerpt:
      "Decisions are not real because they were discussed — they are real because they hold, creating constraints other work can reliably build on.",
    source: "local",
    slug: "closure-is-a-system-property",
    tags: ["Authority & Accountability", "Governance", "Organizational Design"],
  },
  {
    id: "2026-01-23-01",
    title: "Approval is not decision-making",
    date: "2026-01-23",
    year: 2026,
    excerpt:
      "Approval looks like governance, but it arrives too late to prevent decision conflict, so teams learn that movement is unsafe without permission.",
    source: "local",
    slug: "approval-is-not-decision-making",
    tags: ["Authority & Accountability", "Governance", "Organizational Design"],
  },
  {
    id: "2026-01-19-01",
    title: "The rule only existed after someone broke it",
    date: "2026-01-19",
    year: 2026,
    excerpt:
      "Governance often becomes visible only after failure, when decisions collide and authority has to be clarified retroactively.",
    source: "local",
    slug: "the-rule-only-existed-after-someone-broke-it",
    tags: ["Authority & Accountability", "Governance", "Organizational Design"],
  },
  {
    id: "2026-01-17-01",
    title: "Escalation is how unclear authority reveals itself",
    date: "2026-01-17",
    year: 2026,
    excerpt:
      "Escalation is rarely a people problem — it is the predictable behavior of a system where decision authority is unclear, unstable or unsafe to use.",
    source: "local",
    slug: "escalation-is-how-unclear-authority-reveals-itself",
    tags: ["Authority & Accountability", "Governance", "Organizational Design"],
  },
  {
    id: "2026-01-15-01",
    title: "Governance is how organizations decide who decides",
    date: "2026-01-15",
    year: 2026,
    excerpt:
      "Governance is not oversight or bureaucracy — it is the system that determines who has authority to decide and what happens when decisions collide.",
    source: "local",
    slug: "governance-is-how-organizations-decide-who-decides",
    tags: ["Authority & Accountability", "Governance", "Organizational Design"],
  },
  {
    id: "2026-01-13-01",
    title: "This site is an archive, not a feed",
    date: "2026-01-13",
    year: 2026,
    excerpt:
      "A short orientation to how this writing works — and what it avoids.",
    source: "local",
    kind: "orientation",
    slug: "this-site-is-an-archive-not-a-feed",
    pinned: true,
    pinOrder: 0,
  },
  {
    id: "2026-01-09-01",
    title: "When responsibility is assigned without authority",
    date: "2026-01-09",
    year: 2026,
    excerpt:
      "Organizations routinely assign responsibility without granting authority, creating accountability that appears rigorous but is structurally impossible to fulfill.",
    source: "local",
    slug: "when-responsibility-is-assigned-without-authority",
    tags: ["Authority & Accountability", "Governance", "Organizational Design"],
  },
  {
    id: "2026-01-08-01",
    title: "Urgency is not a strategy",
    date: "2026-01-08",
    year: 2026,
    excerpt:
      "Organizational urgency often substitutes for clarity, rewarding visible motion while quietly degrading decision quality.",
    source: "local",
    slug: "urgency-is-not-a-strategy",
    tags: ["Complexity", "Organizational Design", "Systems Thinking"],
  },
  {
    id: "2026-01-05-01",
    title: "Most strategy fails before execution even starts",
    date: "2026-01-05",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "local",
    slug: "most-strategy-fails-before-execution-even-starts",
    tags: ["Decision Architecture", "Strategy", "Systems Thinking"],
  },
];

export const ARTICLES_TEST: Article[] = [
  {
    id: "2026-01-13-TEST",
    title: "Markdown Kitchen Sink (Styling Test)",
    date: "2026-01-13",
    year: 2026,
    excerpt:
      "This is a large, faded subhead used to test how the excerpt renders and wraps on mobile.",
    source: "local",
    slug: "markdown-kitchen-sink",
    tags: ["Work"],
  },
  {
    id: "TEST-2028-02-21-01",
    title: "This is the latest article — fake headline",
    date: "2028-02-21",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Systems Thinking", "Decision Architecture"],
  },
  {
    id: "TEST-2028-02-20-01",
    title: "10 - 2028",
    date: "2028-02-20",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Systems Thinking", "Complexity"],
  },
  {
    id: "TEST-2028-02-19-01",
    title: "9 - 2028",
    date: "2028-02-19",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Work", "Complexity"],
  },
  {
    id: "TEST-2028-02-10-01",
    title: "8 - 2028",
    date: "2028-02-10",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Authority & Accountability", "Governance"],
  },
  {
    id: "TEST-2028-02-09-01",
    title: "7 - 2028",
    date: "2028-02-09",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Organizational Design", "Governance"],
  },
  {
    id: "TEST-2028-02-08-01",
    title: "6 - 2028",
    date: "2028-02-08",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Systems Thinking", "Complexity"],
  },
  {
    id: "TEST-2028-02-07-01",
    title: "5 - 2028",
    date: "2028-02-07",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Work", "Complexity"],
  },
  {
    id: "TEST-2028-02-06-01",
    title: "4 - 2028",
    date: "2028-02-06",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Authority & Accountability", "Governance"],
  },
  {
    id: "TEST-2028-02-05-01",
    title: "3 - 2028",
    date: "2028-02-05",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Organizational Design", "Governance"],
  },
  {
    id: "TEST-2028-02-04-01",
    title: "2 - 2028",
    date: "2028-02-04",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Systems Thinking", "Complexity"],
  },
  {
    id: "TEST-2028-02-03-01",
    title: "1 - 2028",
    date: "2028-02-03",
    year: 2028,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Work", "Complexity"],
  },
  {
    id: "TEST-2027-02-02-01",
    title: "7 - 2027",
    date: "2027-02-02",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Authority & Accountability", "Governance"],
  },
  {
    id: "TEST-2027-02-01-01",
    title: "6 - 2027",
    date: "2027-02-01",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Organizational Design", "Governance"],
  },
  {
    id: "TEST-2027-01-28-01",
    title: "5 - 2027",
    date: "2027-01-28",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Systems Thinking", "Complexity"],
  },
  {
    id: "TEST-2027-01-27-01",
    title: "4 - 2027",
    date: "2027-01-27",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Work", "Complexity"],
  },
  {
    id: "TEST-2027-01-26-01",
    title: "3 - 2027",
    date: "2027-01-26",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Decision Architecture"],
  },
  {
    id: "TEST-2027-01-25-01",
    title: "2 - 2027",
    date: "2027-01-25",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Authority & Accountability", "Governance"],
  },
  {
    id: "TEST-2027-01-24-01",
    title: "1 -2027",
    date: "2027-01-24",
    year: 2027,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Organizational Design", "Governance"],
  },
  {
    id: "TEST-2026-01-13-01",
    title: "8",
    date: "2026-01-13",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Systems Thinking", "Complexity"],
  },
  {
    id: "TEST-2026-01-12-01",
    title: "7",
    date: "2026-01-12",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Work", "Complexity"],
  },
  {
    id: "TEST-2026-01-11-01",
    title: "6",
    date: "2026-01-11",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Decision Architecture"],
  },
  {
    id: "TEST-2026-01-10-01",
    title: "5",
    date: "2026-01-10",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Authority & Accountability", "Governance"],
  },
  {
    id: "TEST-2026-01-09-01",
    title: "4",
    date: "2026-01-09",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Organizational Design", "Governance"],
  },
  {
    id: "TEST-2026-01-08-01",
    title: "3",
    date: "2026-01-08",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    pinned: true,
    pinOrder: 2,
    tags: ["Systems Thinking", "Decision Architecture"],
  },
  {
    id: "TEST-2026-01-07-01",
    title: "2",
    date: "2026-01-07",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    tags: ["Systems Thinking", "Decision Architecture"],
  },
  {
    id: "TEST-2026-01-05-01",
    title: "Most strategy fails before execution even starts",
    date: "2026-01-05",
    year: 2026,
    excerpt:
      "Most organizational failures blamed on execution are actually caused by decisions being made in the wrong order.",
    source: "medium",
    externalUrl:
      "https://medium.com/@andrewjfrancis/most-strategy-fails-before-execution-even-starts-1033992be80e",
    pinned: true,
    pinOrder: 1,
    tags: ["Systems Thinking", "Decision Architecture"],
  },
];

// Choose active dataset (flip this line whenever you want)
export const ARTICLES: Article[] = ARTICLES_REAL;
// export const ARTICLES: Article[] = ARTICLES_TEST;

// ---------- helpers (deterministic, boring, correct)

export function getAllArticles(): Article[] {
  return [...ARTICLES].sort((a, b) => {
    // --- pinned first, ordered by pinOrder when present ---
    const aPinned = typeof a.pinOrder === "number" || a.pinned === true;
    const bPinned = typeof b.pinOrder === "number" || b.pinned === true;

    if (aPinned !== bPinned) return aPinned ? -1 : 1;

    if (aPinned && bPinned) {
      const ao = typeof a.pinOrder === "number" ? a.pinOrder : 9999;
      const bo = typeof b.pinOrder === "number" ? b.pinOrder : 9999;
      if (ao !== bo) return ao - bo;
    }

    // date desc
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;

    // stable tie-breakers
    if (a.title !== b.title) return a.title.localeCompare(b.title);
    return a.id.localeCompare(b.id);
  });
}

export function getLatestArticle() {
  const all = getAllArticles();

  // exclude pinned from "Latest" on home
  const nonPinned = all.filter((a) => !a.pinned);

  // pick most recent (assumes your data already sorts newest-first;
  // if not, we can sort by date)
  return nonPinned[0] ?? null;
}

export function getAllArticlesChronological(): Article[] {
  return [...ARTICLES].sort((a, b) => {
    // date desc
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;

    // stable tie-breakers
    if (a.title !== b.title) return a.title.localeCompare(b.title);
    return a.id.localeCompare(b.id);
  });
}

export function getTotalPages(count: number): number {
  return Math.max(1, Math.ceil(count / PAGE_SIZE));
}

export function getPagedArticles<T>(items: T[], page: number): T[] {
  const safePage = Math.max(1, Math.floor(page));
  const start = (safePage - 1) * PAGE_SIZE;
  return items.slice(start, start + PAGE_SIZE);
}

export function isTag(value: string): value is Tag {
  return TAGS.some((t) => t.id === value);
}

export function getTagById(tag: Tag) {
  return TAGS.find((t) => t.id === tag)!;
}

export function getArticlesByTag(tag: Tag): Article[] {
  return getAllArticlesChronological().filter((a) => a.tags?.includes(tag));
}

export function getTagCounts(): Map<TagSlug, number> {
  const slugById = new Map<Tag, TagSlug>(
    TAGS.map((t) => [t.id, t.slug] as [Tag, TagSlug]),
  );

  const counts = new Map<TagSlug, number>(
    TAGS.map((t) => [t.slug, 0] as [TagSlug, number]),
  );

  for (const a of getAllArticles()) {
    for (const id of a.tags ?? []) {
      const slug = slugById.get(id);
      if (!slug) continue;
      counts.set(slug, (counts.get(slug) ?? 0) + 1);
    }
  }

  return counts;
}

export function getYears(): number[] {
  const years = new Set(getAllArticles().map((a) => a.year));
  return Array.from(years).sort((a, b) => b - a);
}

export function getArticlesByYear(year: number): Article[] {
  return getAllArticlesChronological().filter((a) => a.year === year);
}

export function getArticleHref(a: Article): string {
  if (a.source === "local") {
    if (!a.slug) return "/writing";
    return `/writing/essays/${a.slug}`;
  }
  return a.externalUrl ?? "#";
}

export function isExternalArticle(a: Article): boolean {
  return a.source !== "local";
}
