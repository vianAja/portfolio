"use client";

import { useEffect } from "react";
import { characterCursor } from "cursor-effects";

export default function SnowflakeCursor() {
  useEffect(() => {
    // Keep desktop-only and respect reduced motion users.
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isCoarsePointer) return;

    const effect = characterCursor({
      element: document.body,
      characters: ["❄️"],
      colors: ["#7DECEF", "#5ED0D3", "#AEEFF3"],
    });

    return () => {
      effect.destroy();
    };
  }, []);

  return null;
}
