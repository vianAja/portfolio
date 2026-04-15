"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  image: string; // The PNG thumbnail to display
  pdfFile: string; // The obfuscated API URL to download/open the original
  link: string; // External verification
}

const certificates: Certificate[] = [
  // AWS Certificates
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    year: "2024",
    image: "/assets/sertif/aws-certificate/aws-certified-cloud-practitioner.png",
    pdfFile: "/api/cert/aws-cp",
    link: "https://www.credly.com/badges/2f2a6e67-4390-4bed-b902-cd24c4f74bca/public_url",
  },
  {
    title: "AWS Educate Introduction to Generative AI",
    issuer: "AWS",
    year: "2024",
    image: "/assets/sertif/aws-certificate/aws-educate-introduction-to-generative-ai-training-.png",
    pdfFile: "/api/cert/aws-genai",
    link: "https://www.credly.com/badges/a6f10957-1a80-41a4-9075-b05f930139e8/public_url",
  },
  {
    title: "AWS re/Start Graduate",
    issuer: "AWS",
    year: "2024",
    image: "/assets/sertif/aws-certificate/aws-re-start-graduate.png",
    pdfFile: "/api/cert/aws-restart",
    link: "https://www.credly.com/badges/8bdf060c-bbf9-4b55-8aad-11fab80a7c71/public_url",
  },
  // Linux Foundation
  {
    title: "Introduction to Linux LFS101",
    issuer: "Linux Foundation",
    year: "2024",
    image: "/assets/sertif/linux-foundations/LFS101.png",
    pdfFile: "/api/cert/lf-lfs101",
    link: "https://www.credly.com/badges/481cc9c8-1400-4243-aa12-626073039df9/public_url",
  },
  {
    title: "Secure AI/ML-Driven Software Development (LFEL1012)",
    issuer: "Linux Foundation",
    year: "2024",
    image: "/assets/sertif/linux-foundations/LFEL1012.png",
    pdfFile: "/api/cert/lf-lfel1012",
    link: "https://www.credly.com/badges/e12b0066-1408-4ebd-9399-0fa815cc8474/public_url",
  },
  // Redteam Leaders
  {
    title: "Certified Cybersecurity Educator Professional (CCEP)",
    issuer: "Redteam Leaders",
    year: "2024",
    image: "/assets/sertif/redteam-leaders/certified CCEP.png",
    pdfFile: "/api/cert/rt-ccep",
    link: "https://courses.redteamleaders.com/exam-completion/17bd590f7a50921c",
  },
  {
    title: "Certified Red Team Operations Manager (CRTOM)",
    issuer: "Redteam Leaders",
    year: "2024",
    image: "/assets/sertif/redteam-leaders/certified CRTOM.png",
    pdfFile: "/api/cert/rt-crtom",
    link: "https://courses.redteamleaders.com/exam-completion/4e479657e2f8c7d1",
  },
  {
    title: "Certified Threat Intelligence & Governance Analyst (CTIGA)",
    issuer: "Redteam Leaders",
    year: "2024",
    image: "/assets/sertif/redteam-leaders/certified CTIGA.png",
    pdfFile: "/api/cert/rt-ctiga",
    link: "https://courses.redteamleaders.com/exam-completion/b12f1d747a75307c",
  },
  // Adinusa
  ...[
    { title: "Linux System Administration", id: "8aa79917-b598-48bc-af9f-d083e75ad882", img: "Certificate Fundamental Linux Adinusa", apiId: "adi-linux" },
    { title: "Monitoring with Prometheus", id: "6da87b25-9b62-4480-ab81-a33dca5fca01", img: "Certificate Prometheus Adinusa", apiId: "adi-prom" },
    { title: "Getting Started with ELK Stack", id: "b11dc352-e3c0-441a-9fb3-589e46ea1f51", img: "Certificate ELK Stack Adinusa", apiId: "adi-elk" },
    { title: "GitLab Administration", id: "312b560b-411d-4732-a277-1af3552eddbe", img: "Certificate GitLab Adinusa", apiId: "adi-git" },
    { title: "Kubernetes Cluster Administration", id: "8c642d16-5d8d-4240-ae04-e1676dd3f54f", img: "Certificate Kubernetes Adinusa", apiId: "adi-kube" },
    { title: "OpenStack Administration Multi Node", id: "b418e5a9-14a6-4dfb-af80-a1175979559d", img: "Certificate OpenStack Adinusa", apiId: "adi-open" },
    { title: "Ceph Administration", id: "b5e0e2b8-7661-4c13-b394-3cedc5f37f14", img: "Certificate Ceph Adinusa", apiId: "adi-ceph" },
    { title: "Automation with Ansible", id: "0bdb48d3-7594-4257-93e8-5727703799c1", img: "Certificate Automation with Ansible Adinusa", apiId: "adi-ans" },
    { title: "Docker Fundamental", id: "3e1ace76-c1df-4f47-81e6-88cf6f5812f2", img: "Certificate Docker Fundamental Adinusa", apiId: "adi-dock" },
  ].map((cert) => ({
    title: cert.title,
    issuer: "Adinusa",
    year: "2024",
    image: `/assets/sertif/Adinusa/${cert.img}.png`,
    pdfFile: `/api/cert/${cert.apiId}`,
    link: `https://adinusa.id/course/publisher/show/${cert.id}`,
  })),
  // DqLabs (Selective)
  ...[
    { title: "Mengenal Model Regresi Linear Pada Python", img: "Certificate Mengenal Model Regresi Linear Pada Python", p: "DQLABMDNP1KRFCWK", apiId: "dq-regresi" },
    { title: "Pengantar Machine Learning dengan Python", img: "Certificate Pengantar Machine Learning dengan Python", p: "DQLABPMLP1QPEQBP", apiId: "dq-ml" },
    { title: "Exploratory Data Analysis with Python for Beginner", img: "Certificate Exploratory Data Analysis with Python for Beginner", p: "DQLABINTP1SQDRVI/NONTRACK", apiId: "dq-eda" },
  ].map((cert) => ({
    title: cert.title,
    issuer: "DqLab",
    year: "2024",
    image: `/assets/sertif/DqLabs/${cert.img}.png`,
    pdfFile: `/api/cert/${cert.apiId}`,
    link: `https://academy.dqlab.id/Certificate_check/result/${cert.p}#mycertificate`,
  })),
  // LKS
  {
    title: "Cloud Computing – Juara 2 Kabupaten",
    issuer: "LKS Provinsi Jawa Tengah",
    year: "2025",
    image: "/assets/sertif/lks-cloud-computing/Sertifikat LKS Cloud Computing 2025 Kab Kendal Juara 2.png",
    pdfFile: "/api/cert/lks-2025",
    link: "#",
  },
  {
    title: "Cloud Computing – Peserta Provinsi",
    issuer: "LKS Provinsi Jawa Tengah",
    year: "2024",
    image: "/assets/sertif/lks-cloud-computing/Sertifikat Peserta LKS Cloud Computing Provinsi 2024.png",
    pdfFile: "/api/cert/lks-2024",
    link: "#",
  },
];

// Icon map for issuers
const issuerColors: Record<string, string> = {
  AWS: "text-orange-400",
  Adinusa: "text-sky-400",
  "Linux Foundation": "text-yellow-400",
  "LKS Provinsi Jawa Tengah": "text-green-400",
  "Redteam Leaders": "text-red-400",
  DqLab: "text-purple-400",
};

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
              <span className={`font-label text-[0.6rem] uppercase tracking-widest font-bold ${issuerColors[cert.issuer] ?? "text-primary"}`}>
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
                <span className={`font-label text-[0.6rem] uppercase tracking-widest font-bold ${issuerColors[activeCert.issuer] ?? "text-primary"}`}>
                  {activeCert.issuer}
                </span>
                <h2 className="font-headline text-xl font-bold text-white mt-1">{activeCert.title}</h2>
                <p className="font-label text-sm text-on-surface-variant mt-1">{activeCert.year}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-2">
                {activeCert.link !== "#" && (
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
