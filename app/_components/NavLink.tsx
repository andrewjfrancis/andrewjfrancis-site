"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // exact match for now (simple + correct)
  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={[
        "underline-offset-4",
        isActive
          ? "text-foreground font-semibold text-base" // active: darker + slightly bigger
          : "text-sm text-muted-foreground hover:text-foreground hover:underline", // inactive: smaller + hover affordance
        // prevent visited styling from doing weird shit in nav
        "visited:text-inherit",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
