import { redirect } from "next/navigation";

/**
 * Shared guard for paged routes.
 * - Never allow page < 2 (because page 1 collapses to the base route)
 * - If totalPages <= 1, paged route should never render
 * - If page is too large, redirect to the last real page so URL matches content
 *
 * Returns the safe page number (>= 2 and <= totalPages).
 */
export function resolvePagedRouteOrRedirect({
  pageParam,
  totalPages,
  baseHref,
  hrefForPage,
}: {
  pageParam: string;
  totalPages: number;
  baseHref: string; // e.g. "/writing" or `/writing/${year}`
  hrefForPage: (p: number) => string;
}): number {
  // If everything fits on one page, this paged route should not exist.
  if (totalPages <= 1) redirect(baseHref);

  const raw = Number(pageParam);

  // Never allow /page/1 (or anything invalid)
  if (!Number.isFinite(raw) || raw < 2) redirect(baseHref);

  // Clamp too-large pages to last page
  const safe = Math.min(raw, totalPages);

  // If clamped, redirect so URL matches the content
  if (safe !== raw) redirect(hrefForPage(safe));

  return safe;
}
