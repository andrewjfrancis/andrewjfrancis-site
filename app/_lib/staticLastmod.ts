// app/_lib/staticLastmod.ts
/**
 * Manual last-mod dates for truly static pages.
 * Update these ONLY when you edit that page’s content.
 *
 * Format: YYYY-MM-DD
 */
export const STATIC_LASTMOD = {
  home: "2026-05-19",
  engagements: "2026-04-10",
  about: "2026-04-03",
  now: "2026-04-23",
} as const;

export function toUTCDate(iso: string): Date {
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return new Date(0);
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);
  return new Date(Date.UTC(y, mo - 1, d));
}
