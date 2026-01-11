# Writing Pagination (All + Year)

## This doc explains routes + pagination behavior for app/writing.

## If you change routing, update this doc the same commit.

This site supports two distinct concepts:

1. All-writing pagination (the main, stable list)
2. Year archives (a filtered view by year)

Year archives can be paginated, but we are intentionally not implementing year pagination yet.

This document exists so future-you does not have to remember any of this.

---

## What exists today (implemented)

### 1) Main Writing index (All-writing)

- Route: `/writing`
- Purpose: stable list of the most recent articles
- Pagination: `/writing/page/2`, `/writing/page/3`, etc.

This is the default reading experience.

---

### 2) Year archive (filter view)

- Route: `/writing/[year]` (example: `/writing/2026`)
- Purpose: show everything published in that year
- Pagination: not implemented yet

This is a filter, not a primary index.

---

## Why year pagination is not implemented yet

We are delaying year pagination on purpose.

Reasons:
- Most years will not exceed one page for a while
- It adds routing complexity and UI surface area
- It creates more edge cases (first/last page, empty years)

Nothing about year pagination is difficult — it’s just unnecessary until volume demands it.

---

## Future implementation: Year pagination

When needed, we will add paginated year routes.

### Final URL pattern

- `/writing/2026` → year archive, page 1
- `/writing/2026/page/2`
- `/writing/2026/page/3`

Important rule:
- We do NOT expose `/writing/2026/page/1`.
- Page 1 collapses back to the clean year URL.

---

## Folder structure to add later

When implementing year pagination, create:

app/
  writing/
    [year]/
      page/
        [page]/
          page.tsx

This produces the route:

`/writing/:year/page/:page`

**Do not create /writing/[year]/page/1 links anywhere; page 1 collapses to /writing/[year].**

---

## Paging math (copy/paste ready)

Use the same logic already used for `/writing/page/[page]`.

```ts
const PAGE_SIZE = 3;

const pageNum = Number(params.page ?? "1");
const page = Number.isFinite(pageNum) && pageNum > 0 ? pageNum : 1;

const start = (page - 1) * PAGE_SIZE;
const items = yearItems.slice(start, start + PAGE_SIZE);

const totalPages = Math.max(1, Math.ceil(yearItems.length / PAGE_SIZE));
const hasPrev = page > 1;
const hasNext = page < totalPages;
```

---

## URL collapsing rule (very important)

Page 1 should never have a \/page/1` URL.`

Helper function:

```ts
function yearPageHref(year: number, page: number) {
  return page <= 1 ? `/writing/${year}` : `/writing/${year}/page/${page}`;
}
```

---

## Pager UI pattern (recommended)

Pager should appear both at the top and bottom.

Example:

```tsx
<div className="pager">
  {hasPrev ? <Link href={yearPageHref(year, page - 1)}>← Previous</Link> : <span />}
  {hasNext ? <Link href={yearPageHref(year, page + 1)}>Next →</Link> : <span />}
</div>
```
