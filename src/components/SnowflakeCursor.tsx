"use client";

import { useEffect } from "react";
import { bubbleCursor } from "cursor-effects";

export default function SnowflakeCursor() {
  useEffect(() => {
    // Keep desktop-only and respect reduced motion users.
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isCoarsePointer) return;

    const effect = bubbleCursor({
      element: document.body,
    });

    return () => {
      effect.destroy();
    };
  }, []);

  return null;
}
