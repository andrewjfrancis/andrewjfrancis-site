"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function JumpToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 200);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border bg-background/90 px-3 py-2 text-sm text-foreground shadow-sm backdrop-blur hover:bg-muted"
      aria-label="Jump to top"
      title="Jump to top"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
      <span className="hidden sm:inline">Back to top</span>
    </button>
  );
}
