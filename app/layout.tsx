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

  // ✅ Default + template for browser titles
  title: {
    default: "Andrew J. Francis — Systems, Structure, Decision Architecture",
    template: "%s — Andrew J. Francis",
  },
  description:
    "Writing about organizational structure, decision-making and how systems shape work.",

  // ✅ Manifest + theme color
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",

  // ✅ Icons (served from /public)
  icons: {
    icon: [
      // Universal fallback first
      { url: "/favicon.ico" },

      // Helpful explicit sizes
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },

      // SVG favicon (some browsers use it, some ignore it)
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },

  // ✅ Windows tile support
  other: {
    "msapplication-config": "/browserconfig.xml",
  },

  // ✅ Site-wide default OG
  openGraph: {
    title: "Andrew J. Francis",
    description: "Systems, Structure, Decision Architecture",
    url: "https://andrewjfrancis.com",
    siteName: "Andrew J. Francis",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Andrew J. Francis",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Andrew J. Francis",
    description: "Systems, Structure, Decision Architecture",
    images: ["/opengraph-image.png"],
  },
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
        {/* Plausible analytics */}
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

        <div className="shell">
          <header className="border-b">
            <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
              <Link
                href="/"
                className="font-bold text-foreground visited:text-foreground hover:text-foreground/80 no-underline"
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
