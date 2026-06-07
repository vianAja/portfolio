"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/competition", label: "Competition" },
  { href: "/blog", label: "Blog" },
  { href: "/timeline", label: "Timeline" },
  { href: "/contact", label: "Contact" },
];

const homeLinks = [
  { href: "https://portfolio-najwan.pages.dev/", label: "Simple" },
  { href: "https://home.najwan.my.id/", label: "Dark-themes" },
  { href: "https://najwan.my.id/", label: "Minimalist" },
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
          <div className="relative group">
            <span className="inline-flex cursor-default items-center gap-2 font-headline tracking-tighter uppercase text-sm text-gray-400 transition-colors group-hover:text-white">
              Home
              <span className="material-symbols-outlined text-lg">expand_more</span>
            </span>
            <div className="pointer-events-none invisible absolute right-0 top-full mt-3 min-w-52 translate-y-2 rounded-2xl border border-white/10 bg-[#121416]/95 p-2 opacity-0 shadow-[0_18px_44px_rgba(0,0,0,0.32)] backdrop-blur-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {homeLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="block rounded-xl px-4 py-3 font-headline text-sm uppercase tracking-tighter text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
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
            <div className="flex flex-col gap-3 border-b border-white/10 pb-6">
              <span className="font-headline tracking-tighter uppercase text-sm text-gray-500">
                Home
              </span>
              {homeLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-headline tracking-tighter uppercase text-xl text-white/90"
                >
                  {label}
                </Link>
              ))}
            </div>
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
          </div>
        </div>
      )}
    </nav>
  );
}
