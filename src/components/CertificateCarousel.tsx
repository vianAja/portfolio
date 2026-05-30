"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { certificates, certificateIssuerColors, type Certificate } from "@/lib/certificates";

export default function CertificateCarousel() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollStep = useCallback(() => {
    if (!trackRef.current || isPaused) return;
    const el = trackRef.current;
    el.scrollLeft += 1;
    // Infinite loop: if we hit past midpoint, reset
    if (el.scrollLeft >= el.scrollWidth / 2) {
      el.scrollLeft = 0;
    }
  }, [isPaused]);

  useEffect(() => {
    autoRef.current = setInterval(scrollStep, 20);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [scrollStep]);

  // Drag-to-scroll
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    setIsPaused(true);
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
  };
  const onMouseUp = () => {
    isDragging.current = false;
    setIsPaused(false);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const onMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      setIsPaused(false);
    }
  };

  // Touch support
  const onTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    startX.current = e.touches[0].pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    isDragging.current = true;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const onTouchEnd = () => {
    isDragging.current = false;
    setIsPaused(false);
  };

  return (
    <section className="w-full bg-surface-container-lowest py-16 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-primary mb-2">
          Credentials
        </p>
        <h2 className="font-headline text-3xl font-bold text-white">
          Certificates & Achievements
        </h2>
      </div>

      {/* Carousel Track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-scroll cursor-grab active:cursor-grabbing select-none px-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Duplicate list for infinite loop effect */}
        {[...certificates, ...certificates].map((cert, i) => (
          <div
            key={i}
            onClick={() => setActiveCert(cert)}
            className="flex-shrink-0 w-72 group relative bg-surface-container-high rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_-10px_rgba(125,236,239,0.15)] cursor-pointer"
          >
            {/* Image (converted PNG) */}
            <div className="relative h-44 overflow-hidden">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover transition-transform duration-500"
                draggable={false}
                unoptimized
              />
              <div className="absolute inset-x-0 -bottom-1 h-3/4 bg-gradient-to-t from-surface-container-high to-transparent pointer-events-none" />
            </div>

            {/* Content */}
            <div className="p-5">
              <span className={`font-label text-[0.6rem] uppercase tracking-widest font-bold ${certificateIssuerColors[cert.issuer] ?? "text-primary"}`}>
                {cert.issuer}
              </span>
              <h3 className="font-headline text-sm font-bold text-white mt-1 mb-1 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="font-label text-xs text-on-surface-variant">{cert.year}</p>

              <div className="mt-3 flex items-center gap-1 text-primary font-label text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Details</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative bg-surface-container rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl border border-outline-variant/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-80 w-full bg-surface-container-high border-b border-white/5">
              <Image
                src={activeCert.image}
                alt={activeCert.title}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Modal Info */}
            <div className="p-6 flex flex-col gap-3">
              <div>
                <span className={`font-label text-[0.6rem] uppercase tracking-widest font-bold ${certificateIssuerColors[activeCert.issuer] ?? "text-primary"}`}>
                  {activeCert.issuer}
                </span>
                <h2 className="font-headline text-xl font-bold text-white mt-1">{activeCert.title}</h2>
                <p className="font-label text-sm text-on-surface-variant mt-1">{activeCert.year}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-2">
                {activeCert.link && (
                  <a
                    href={activeCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary font-label text-sm font-bold hover:bg-primary/20 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">verified</span>
                    Verify Online
                  </a>
                )}
                {activeCert.pdfFile && (
                  <a
                    href={activeCert.pdfFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-highest text-on-surface-variant font-label text-sm font-bold hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">file_open</span>
                    Open Original File
                  </a>
                )}
                <button
                  onClick={() => setActiveCert(null)}
                  className="ml-auto p-2 rounded-lg text-on-surface-variant hover:text-white hover:bg-surface-container-highest transition-colors"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
