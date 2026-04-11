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
        className="flex items-center justify-between sm:justify-start gap-4 bg-surface-container-highest text-white w-full px-6 py-3 rounded-lg border border-outline-variant/20 hover:border-primary transition-all font-body text-sm shadow-sm"
      >
        <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-outline-variant text-[1.125rem]">filter_list</span>
            <span className="font-bold">{activeLabel}</span>
        </div>
        <span className={`material-symbols-outlined text-outline-variant transition-transform ${isOpen ? "rotate-180" : ""}`}>
          expand_more
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 sm:right-auto sm:left-0 mt-2 w-full sm:w-64 bg-surface-container-high border border-outline-variant/20 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col py-2">
          {categories.map(({ label, count, value }) => (
            <Link
              key={label}
              onClick={() => setIsOpen(false)}
              className={`group flex items-center justify-between px-6 py-3 hover:bg-surface-container-highest transition-colors ${
                (selectedCategory || "") === value
                  ? "text-primary bg-primary/5"
                  : "text-on-surface hover:text-white"
              }`}
              href={
                value
                  ? `/blog?category=${value}${currentSearch ? "&search=" + encodeURIComponent(currentSearch) : ""}`
                  : `/blog${currentSearch ? "?search=" + encodeURIComponent(currentSearch) : ""}`
              }
            >
              <span className="font-body text-sm font-medium">{label}</span>
              <span className="font-label text-[0.65rem] bg-surface-container px-2 py-0.5 rounded text-on-surface-variant group-hover:bg-primary group-hover:text-on-primary-container transition-colors">
                {String(count).padStart(2, "0")}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
