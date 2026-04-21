"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar({ active }: { active?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-surface border-b border-outline-variant/25">
      <div className="flex justify-between items-center px-6 md:px-8 py-5 max-w-7xl mx-auto">
        <Link href="/" className="text-xl md:text-2xl font-extrabold tracking-tight text-on-surface font-headline">
          NAJWAN
        </Link>

        <div className="hidden md:flex items-center gap-7 font-headline tracking-tight text-sm uppercase font-semibold">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={`pb-1 transition-colors ${
                active === label
                  ? "text-primary border-b-2 border-primary"
                  : "text-on-surface/55 hover:text-primary"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/"
            className="bg-primary text-on-primary px-5 py-2.5 rounded-md font-label text-xs tracking-[0.12em]"
          >
            HOME
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-on-surface flex items-center justify-center p-2"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">{isMenuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-6 py-6 border-t border-outline-variant/25 bg-surface-container-lowest">
          <div className="flex flex-col gap-5">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-headline tracking-tight uppercase text-xl ${
                  active === label ? "text-primary" : "text-on-surface/70"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 bg-primary text-on-primary font-label uppercase text-center py-3 rounded-lg font-semibold text-sm"
            >
              Home
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
