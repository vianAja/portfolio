"use client";

import { useEffect, useRef } from "react";

export default function TimelineCards({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          const rect = entry.boundingClientRect;
          
          if (entry.isIntersecting) {
            // Visible in viewport
            el.classList.remove("opacity-0", "translate-y-16", "-translate-y-16");
            el.classList.add("opacity-100", "translate-y-0");
          } else {
            // Leaving viewport
            el.classList.remove("opacity-100", "translate-y-0");
            
            // If the element is above the viewport, translate up (-translate-y-16)
            // If the element is below the viewport, translate down (translate-y-16)
            if (rect.top < 0) {
              el.classList.add("opacity-0", "-translate-y-16");
            } else {
              el.classList.add("opacity-0", "translate-y-16");
            }
          }
        });
      },
      {
        threshold: 0.1, // Trigger when at least 10% is visible
        rootMargin: "-10% 0px -10% 0px" // Add some margin so the effect happens within the viewport
      }
    );

    // Find all glass-card elements inside the container and observe them
    const cards = containerRef.current.querySelectorAll(".glass-card-wrapper");
    cards.forEach((card) => {
      // Add initial classes for transition
      card.classList.add("transition-all", "duration-1000", "ease-out", "opacity-0", "translate-y-16");
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative timeline-track min-h-[800px]">
      {children}
    </div>
  );
}
