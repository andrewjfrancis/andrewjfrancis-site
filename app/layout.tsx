import type { Metadata } from "next";
import Link from "next/link";
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

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
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
              <Link href="/" className="text-lg font-semibold tracking-tight">
                Andrew J. Francis
              </Link>

              <nav className="flex items-center gap-6" aria-label="Primary">
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
