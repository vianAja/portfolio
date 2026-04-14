import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import TimelineCards from "./TimelineCards";

export const metadata = {
  title: "My Timeline | Kinetic Portfolio",
  description: "A Journey of Kinetic Growth. Mapping my technical milestones.",
};

export default function TimelinePage() {
  return (
    <>
      <NavBar active="Timeline" />

      {/* Hero / Background Typography */}
      <header className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
          <h1 className="text-[12rem] md:text-[20rem] font-headline font-bold text-outline leading-none tracking-tighter uppercase opacity-30">
            Timeline
          </h1>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block font-label text-[0.6875rem] uppercase tracking-[0.2em] text-primary mb-4">
            Professional Arc
          </span>
          <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tight mb-6">
            A Journey of <span className="text-primary">Kinetic</span> Growth
          </h2>
          <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed">
            Mapping the technical milestones, educational foundations, and architectural breakthroughs that define my creative trajectory.
          </p>
        </div>
      </header>

      {/* Timeline Section */}
      <main className="relative py-12 max-w-7xl mx-auto px-8">
        <TimelineCards>
          {/* Entry 1: Education (Right) - Chronological Start */}
          <div className="relative mb-16 md:flex justify-end w-full group glass-card-wrapper">
            <div className="md:w-1/2 pl-0 md:pl-10 relative">
              <div className="md:hidden flex items-center mb-4 ml-10">
                <span className="font-label text-primary font-bold">2016 - 2020</span>
              </div>
              <div className="flex items-center">
                <div className="hidden md:block connector-line absolute left-0"></div>
                <div className="glass-card p-6 rounded-xl border border-outline-variant/15 transition-all duration-300 group-hover:border-primary/40 group-hover:translate-x-2 w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-primary p-2 bg-surface-container-highest rounded-lg" data-icon="school">school</span>
                    <div>
                      <h3 className="font-headline text-xl font-bold">B.S. Computer Science</h3>
                      <p className="text-primary-container text-xs font-medium uppercase">MIT RESEARCH</p>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                    Specialized in Computational Design and Artificial Intelligence. Graduated with Honors. Published thesis on 'Kinetic UI Systems in Low-Latency Environments'.
                  </p>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img 
                      alt="Modern university library with sleek architectural lines" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz0c34ogb3OSbq0HjPzHBOtLErSUmhNIHFc28v_3OcNTVFpsv9uldBWnGVH8qJYNWtAxBJkaVjWpNF1O3ZEkXVyvzEHVZBjcrS7KEtWOth_sbDIiNh-MQRRJxz08xjzYx90HcMN_VXj8duJlQ08tuHzQ9kWHG4SdR6yreAcc5e2B89J8H7D3ZifSeR050VKl648vecKQqipdg4JyTzw4Zm6Mr-AeaNT9Ej2YbWhs856ysHIlplE2T7atVOzDblLIpl3S3zSVqUB1GK"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[-130px] hidden md:block text-right w-[100px]">
                <span className="font-label text-primary font-bold whitespace-nowrap text-sm">2016 - 2020</span>
              </div>
            </div>
          </div>

          {/* Entry 2: Full Stack Engineer (Left) */}
          <div className="relative mb-16 md:flex justify-start w-full group glass-card-wrapper">
            <div className="md:w-1/2 pr-0 md:pr-10 relative text-right">
              <div className="md:hidden flex items-center mb-4 ml-10 text-left">
                <span className="font-label text-primary font-bold">2020 - 2022</span>
              </div>
              <div className="flex items-center justify-end">
                <div className="glass-card p-6 rounded-xl border border-outline-variant/15 transition-all duration-300 group-hover:border-primary/40 group-hover:-translate-x-2 text-left w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-primary p-2 bg-surface-container-highest rounded-lg" data-icon="terminal">terminal</span>
                    <div>
                      <h3 className="font-headline text-xl font-bold">Full Stack Engineer</h3>
                      <p className="text-primary-container text-xs font-medium uppercase">NEURAL ARCHITECTS</p>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                    Developed high-fidelity UI/UX frameworks for AI-driven analytics dashboards. Integrated complex Three.js visualizations with real-time sensor data.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-surface-container-highest px-3 py-1 rounded text-[0.625rem] font-label text-on-surface-variant">TYPESCRIPT</span>
                    <span className="bg-surface-container-highest px-3 py-1 rounded text-[0.625rem] font-label text-on-surface-variant">NODE.JS</span>
                    <span className="bg-surface-container-highest px-3 py-1 rounded text-[0.625rem] font-label text-on-surface-variant">REACT</span>
                  </div>
                </div>
                <div className="hidden md:block connector-line absolute right-0"></div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-[-130px] hidden md:block text-left w-[100px]">
                <span className="font-label text-primary font-bold whitespace-nowrap text-sm">2020 - 2022</span>
              </div>
            </div>
          </div>

          {/* Entry 3: Project Aegis (Right) */}
          <div className="relative mb-16 md:flex justify-end w-full group glass-card-wrapper">
            <div className="md:w-1/2 pl-0 md:pl-10 relative">
              <div className="md:hidden flex items-center mb-4 ml-10">
                <span className="font-label text-primary font-bold">OCT 2022</span>
              </div>
              <div className="flex items-center">
                <div className="hidden md:block connector-line absolute left-0"></div>
                <div className="glass-card p-6 rounded-xl border border-outline-variant/15 transition-all duration-300 group-hover:border-primary/40 group-hover:translate-x-2 w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-primary p-2 bg-surface-container-highest rounded-lg" data-icon="bolt">bolt</span>
                    <div>
                      <h3 className="font-headline text-xl font-bold">Project 'Aegis' Launch</h3>
                      <p className="text-primary-container text-xs font-medium uppercase">OPEN SOURCE CONTRIBUTION</p>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                    Released an end-to-end encrypted telemetry protocol that gained 5,000+ stars on GitHub within the first month.
                  </p>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img 
                      alt="Abstract visualization of data flowing through digital nodes" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-41N79vusOZmUBx47HV2Fr670b5OU1RitJl3Ws2uBy8aYdSSCXT_GXJPSwgX9PvQogqmYU7Tk5q5XpPxgxWjXsQooiwrttUgGoITQWk4stqGuhUJyk0nfgxwzvSoJ6e3MjEjxez93jXfN-DyxRqTNodCUN-NFRKtnnw4rqI9aY8uxueo_BwIUV2RcZUCLDwnyGtCq8tIMHSdFnJene96oO3wV4xkWVum10hyFsqDhNlHwGk-DOCFV7Q0w7l3x99ZW5IooOkaJLDQf"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[-130px] hidden md:block text-right w-[100px]">
                <span className="font-label text-primary font-bold whitespace-nowrap text-sm">OCT 2022</span>
              </div>
            </div>
          </div>

          {/* Entry 4: Senior Systems Architect (Left) - Present */}
          <div className="relative mb-16 md:flex justify-start w-full group glass-card-wrapper">
            <div className="md:w-1/2 pr-0 md:pr-10 relative text-right">
              <div className="md:hidden flex items-center mb-4 ml-10 text-left">
                <span className="font-label text-primary font-bold">2023 - PRESENT</span>
              </div>
              <div className="flex items-center justify-end">
                <div className="glass-card p-6 rounded-xl border border-outline-variant/15 transition-all duration-300 group-hover:border-primary/40 group-hover:-translate-x-2 text-left w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-primary p-2 bg-surface-container-highest rounded-lg" data-icon="work">work</span>
                    <div>
                      <h3 className="font-headline text-xl font-bold">Senior Systems Architect</h3>
                      <p className="text-primary-container text-xs font-medium uppercase">CYBERDYN LABS</p>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                    Leading the development of distributed real-time data pipelines and core neural-network optimization engines. Orchestrating a team of 12 engineers.
                  </p>
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                      alt="Modern server room hardware cabinets" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8bqyMK_x55qYtrsludgjc7lT3H21SOABOAfvHaxTwFzWxsNXlDBn0roQEOGvHwvAiCiL-a-CgPVvZNkqXPyr7shr8sZT7JKo7p_A4_riwgHiTJFbn2zy1nWcnj26ZjGI7-Npw65V07vKafPq6bOKKwjVAfsJf0b-hrAduDRN3OHBupAOBjD2EbYMzMgW4kpZb133oa-m6EZ6DHqiN_PTUBnXLIf0rT6fZ40JOXhIikUVAZUOOTYqVO3SzvWHmNuxPkpdSSL9Z9cSc"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-surface-container-highest px-3 py-1 rounded text-[0.625rem] font-label text-on-surface-variant">RUST</span>
                    <span className="bg-surface-container-highest px-3 py-1 rounded text-[0.625rem] font-label text-on-surface-variant">KUBERNETES</span>
                    <span className="bg-surface-container-highest px-3 py-1 rounded text-[0.625rem] font-label text-on-surface-variant">GOLANG</span>
                  </div>
                </div>
                <div className="hidden md:block connector-line absolute right-0"></div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-[-130px] hidden md:block text-left w-[100px]">
                <span className="font-label text-primary font-bold whitespace-nowrap text-sm">PRESENT</span>
              </div>
            </div>
          </div>
        </TimelineCards>
      </main>

      {/* Marquee Texture Section */}
      <section className="py-24 overflow-hidden select-none pointer-events-none opacity-20">
        <div className="flex whitespace-nowrap gap-12 text-8xl font-headline font-bold text-outline kinetic-marquee">
          <span className="marquee-text font-headline font-bold uppercase tracking-widest">ARCHITECTURAL INTEGRITY • TECHNICAL MASTERY • KINETIC FLOW • ARCHITECTURAL INTEGRITY • TECHNICAL MASTERY • KINETIC FLOW</span>
        </div>
      </section>

      <Footer />
    </>
  );
}
