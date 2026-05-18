"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Category {
  label: string;
  count: number;
  value: string;
}

export default function CategoryDropdown({
  categories,
  selectedCategory,
  currentSearch,
}: {
  categories: Category[];
  selectedCategory?: string;
  currentSearch?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeLabel = categories.find(c => c.value === (selectedCategory || ""))?.label || "All Streams";

  return (
    <div className="relative shrink-0 w-full sm:w-auto" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-4 bg-surface-container-low text-on-surface w-full px-4 py-3 rounded-xl border border-outline-variant/25 hover:border-primary transition-all font-body text-sm shadow-sm"
      >
        <div className="flex items-center gap-3 min-w-0">
            <span className="font-medium truncate">{activeLabel}</span>
        </div>
        <span className={`material-symbols-outlined text-outline transition-transform ${isOpen ? "rotate-180" : ""}`}>
          keyboard_arrow_down
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 sm:right-auto sm:left-0 mt-2 w-full sm:w-72 bg-surface-container-lowest border border-outline-variant/25 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col py-2">
          {categories.map(({ label, count, value }) => (
            <Link
              key={label}
              onClick={() => setIsOpen(false)}
              className={`group flex items-center justify-between gap-3 px-4 py-3 hover:bg-surface-container-low transition-colors ${
                (selectedCategory || "") === value
                  ? "text-primary bg-primary/5"
                  : "text-on-surface"
              }`}
              href={
                value
                  ? `/blog?category=${value}${currentSearch ? "&search=" + encodeURIComponent(currentSearch) : ""}`
                  : `/blog${currentSearch ? "?search=" + encodeURIComponent(currentSearch) : ""}`
              }
            >
              <div className="min-w-0">
                <span className="font-body text-sm font-medium truncate">
                  {label} <span className="text-on-surface-variant">({count})</span>
                </span>
              </div>
              {(selectedCategory || "") === value ? (
                <span className="material-symbols-outlined text-base text-primary">check</span>
              ) : null}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
