import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { getAllTimelines } from "@/lib/timeline";
import { getAllProjects } from "@/lib/projects";
import Link from "next/link";

export const metadata = {
  title: "My Timeline | Kinetic Portfolio",
  description: "A Journey of Kinetic Growth. Mapping my technical milestones.",
};

export default function TimelinePage() {
  const timelines = getAllTimelines();
  const projects = getAllProjects();
  const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));

  return (
    <>
      <NavBar active="Timeline" />

      {/* Hero / Background Typography */}
      <header className="relative pt-32 pb-16 overflow-hidden">
        <ScrollReveal className="absolute top-20 left-1/2 w-full text-center pointer-events-none select-none z-0" style={{ transform: "translateX(-50%)" }}>
          <h1 className="text-[12rem] md:text-[20rem] font-headline font-bold text-outline leading-none tracking-tighter uppercase opacity-30">
            Timeline
          </h1>
        </ScrollReveal>
        <ScrollReveal className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block font-label text-[0.6875rem] uppercase tracking-[0.2em] text-primary mb-4">
            Professional Arc
          </span>
          <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tight mb-6">
            A Journey of <span className="text-primary">Najwan</span>
          </h2>
          <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed">
            Mapping the technical milestones, educational foundations, and architectural breakthroughs that define my creative trajectory.
          </p>
        </ScrollReveal>
      </header>

      {/* Timeline Section */}
      <main className="relative py-12 max-w-7xl mx-auto px-8">
        <div className="relative timeline-track min-h-[800px]">
          {timelines.map((timeline, index) => {
            // Alternate left/right based on index (even = right side, odd = left side)
            const isRight = index % 2 === 0;
            const relatedProjects = (timeline.meta.projects ?? [])
              .map((slug) => projectsBySlug.get(slug))
              .filter((project): project is NonNullable<(typeof projects)[number]> => Boolean(project));

            return (
              <ScrollReveal 
                key={timeline.meta.id}
                className={`relative mb-16 md:flex ${isRight ? "justify-end" : "justify-start"} w-full group`}
              >
                <div className={`md:w-1/2 ${isRight ? "pl-0 md:pl-10 relative" : "pr-0 md:pr-10 relative text-right"}`}>
                  
                  {/* Mobile Date */}
                  <div className={`md:hidden flex items-center mb-4 ml-10 ${isRight ? "" : "text-left"}`}>
                    <span className="font-label text-primary font-bold">{timeline.meta.displayDate}</span>
                  </div>

                  <div className={`flex items-center ${isRight ? "" : "justify-end"}`}>
                    {/* Connector line for right items */}
                    {isRight && <div className="hidden md:block connector-line absolute left-0"></div>}

                    {/* Card container */}
                    <div className={`glass-card p-6 rounded-xl border border-outline-variant/15 transition-all duration-300 group-hover:border-primary/40 ${isRight ? "group-hover:translate-x-2" : "group-hover:-translate-x-2 text-left"} w-full`}>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="material-symbols-outlined text-primary p-2 bg-surface-container-highest rounded-lg">
                          {timeline.meta.icon}
                        </span>
                        <div>
                          <h3 className="font-headline text-xl font-bold">{timeline.meta.title}</h3>
                          {timeline.meta.company && (
                             <p className="text-primary-container text-xs font-medium uppercase">{timeline.meta.company}</p>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                        {timeline.content}
                      </p>

                      {timeline.meta.image && (
                        <div className="aspect-video rounded-lg overflow-hidden mb-4">
                          <img 
                            alt={timeline.meta.title}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                            src={timeline.meta.image}
                          />
                        </div>
                      )}

                      {timeline.meta.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {timeline.meta.tags.map(tag => (
                            <span key={tag} className="bg-surface-container-highest px-3 py-1 rounded text-[0.625rem] font-label text-on-surface-variant">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {relatedProjects.length > 0 && (
                        <div className="mt-5 pt-4 border-t border-outline-variant/15">
                          <p className="font-label text-[0.625rem] uppercase tracking-[0.12em] text-outline-variant mb-2">
                            Related Projects
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {relatedProjects.map((project) => (
                              <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="px-3 py-1.5 rounded-md text-[0.6875rem] font-label uppercase tracking-[0.08em] bg-primary/10 text-primary hover:bg-primary hover:text-on-primary-container transition-colors"
                              >
                                {project.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Connector line for left items */}
                    {!isRight && <div className="hidden md:block connector-line absolute right-0"></div>}
                  </div>

                  {/* Desktop Date */}
                  <div className={`absolute top-1/2 -translate-y-1/2 hidden md:block z-20 w-[170px] ${isRight ? "left-[-205px] text-right" : "right-[-205px] text-left"}`}>
                    <span className="inline-block font-label text-primary font-bold whitespace-nowrap text-sm bg-surface/90 border border-primary/30 rounded-md px-2.5 py-1 backdrop-blur-sm">
                      {timeline.meta.displayDate}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </main>

      {/* Marquee Texture Section */}
      <section className="py-24 overflow-hidden select-none pointer-events-none opacity-20">
        <ScrollReveal className="flex whitespace-nowrap gap-12 text-8xl font-headline font-bold text-outline kinetic-marquee">
          <span className="marquee-text font-headline font-bold uppercase tracking-widest">ARCHITECTURAL INTEGRITY • TECHNICAL MASTERY • KINETIC FLOW • ARCHITECTURAL INTEGRITY • TECHNICAL MASTERY • KINETIC FLOW</span>
        </ScrollReveal>
      </section>

      <Footer />
    </>
  );
}
