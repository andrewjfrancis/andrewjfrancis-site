// app/layout.tsx

import type { Metadata } from "next";
import Link from "next/link";
import * as React from "react";
import type { ComponentPropsWithoutRef } from "react";
import Script from "next/script";
import { ArrowUpRight } from "lucide-react";
import { NavLink } from "./_components/NavLink";
import JumpToTop from "./_components/JumpToTop";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://andrewjfrancis.com"),
  title: "Andrew J. Francis — Systems, Structure, Decision Architecture",
  description:
    "Writing about organizational structure, decision-making and how systems shape work.",
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
      <Script
        src="https://plausible.io/js/pa-ZDlKsw_UIVm6qSC-RqZXn.js"
        strategy="afterInteractive"
      />
      <Script id="plausible-init" strategy="afterInteractive">
        {`
          window.plausible=window.plausible||function(){
            (plausible.q=plausible.q||[]).push(arguments)
          };
          plausible.init=plausible.init||function(i){plausible.o=i||{}};
          plausible.init();
        `}
      </Script>

      <body>
        <div className="shell">
          <header className="border-b">
            <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
              <Link
                href="/"
                className="text-foreground visited:text-foreground hover:text-foreground/80 no-underline"
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
        <JumpToTop />
      </body>
    </html>
  );
}
