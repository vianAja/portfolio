"use client";

import { useEffect, useRef } from "react";

type ScrollRevealProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLElement> & {
    as?: React.ElementType;
  }
>;

export default function ScrollReveal({
  children,
  className = "",
  as,
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const Component = as ?? "div";

  useEffect(() => {
    if (!ref.current) return;

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
            
            if (rect.top < 0) {
              el.classList.add("opacity-0", "-translate-y-16");
            } else {
              el.classList.add("opacity-0", "translate-y-16");
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    // Initial classes
    ref.current.classList.add("transition-all", "duration-1000", "ease-out", "opacity-0", "translate-y-16");
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Component ref={ref as never} className={className} {...props}>
      {children}
    </Component>
  );
}
