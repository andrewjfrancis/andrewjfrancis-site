import type { Metadata } from "next";
import Link from "next/link";
import * as React from "react";
import type { ComponentPropsWithoutRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { NavLink } from "./_components/NavLink";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrew J. Francis",
  description: "Personal site for writing and systems thinking.",
};

const NAV = [
  { href: "/", label: "Home" },
  { href: "/now", label: "Now" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

type ExternalLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
};

function ExternalLink({
  href,
  className = "",
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 no-underline hover:opacity-90 ${className}`}
      {...props}
    >
      <span className="text-foreground">{children}</span>
      <ArrowUpRight
        className="h-4 w-4 text-muted-foreground opacity-70"
        aria-hidden="true"
      />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <header className="border-b">
            <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
              <Link
                href="/"
                className="text-base font-semibold tracking-tight no-underline hover:opacity-80"
              >
                Andrew J. Francis
              </Link>

              <nav className="nav" aria-label="Primary">
                {NAV.map((item) => (
                  <NavLink key={item.href} href={item.href}>
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </header>

          <main className="main">{children}</main>

          <footer className="footer">
            <div className="container">
              <div className="footerLinks">
                <ExternalLink href="https://www.linkedin.com/in/andrewjfrancis">
                  LinkedIn
                </ExternalLink>
                <ExternalLink href="https://medium.com/@andrewjfrancis">
                  Medium
                </ExternalLink>
                <ExternalLink href="https://github.com/andrewjfrancis">
                  GitHub
                </ExternalLink>
              </div>

              <div className="small">
                © {new Date().getFullYear()} — Andrew J. Francis
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
