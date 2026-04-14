"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/timeline", label: "Timeline" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar({ active }: { active?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#121416]/60 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-white font-headline"
        >
          NAJWAN
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={`font-headline tracking-tighter uppercase text-sm transition-colors pb-0.5 ${
                active === label
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/"
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container font-headline tracking-tighter uppercase text-sm px-6 py-2 rounded-full font-bold hover:scale-95 transition-all duration-200 ml-4"
          >
            HOME
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white flex items-center justify-center p-2"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Tray */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#121416] border-b border-white/10 px-8 py-8 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-headline tracking-tighter uppercase text-2xl ${
                  active === label ? "text-primary" : "text-gray-400"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 bg-primary text-on-primary-container font-headline tracking-tighter uppercase text-center py-4 rounded-xl font-bold"
            >
              HOME
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
