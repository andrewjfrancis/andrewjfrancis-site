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
        "text-sm",
        "underline-offset-4",
        isActive
          ? "font-semibold underline"
          : "text-muted-foreground hover:underline",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
