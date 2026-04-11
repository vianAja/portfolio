import { getAllProjects } from "@/lib/projects";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Projects | NAJWAN",
  description: "All projects by Najwan Octavian Gerrard",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <NavBar active="Projects" />
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-8 mb-20 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-primary mb-4 block">
                Selected Work
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-[-0.04em] leading-none text-white">
                ALL<br />
                <span className="text-primary">PROJECTS</span>
              </h1>
            </div>
            <div className="hidden lg:block text-right max-w-xs">
              <p className="text-on-surface-variant font-body text-sm leading-relaxed italic">
                {projects.length} project{projects.length !== 1 ? "s" : ""} spanning Cloud,
                DevOps, and Machine Learning. Each one built with precision and care.
              </p>
            </div>
          </div>
          {/* Background text */}
          <div className="absolute -bottom-10 -right-20 opacity-5 select-none pointer-events-none">
            <span className="font-headline text-[12rem] font-bold uppercase text-white">
              WORK
            </span>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-8">
          {projects.length === 0 ? (
            <div className="text-center py-32">
              <span className="material-symbols-outlined text-6xl text-outline mb-4 block">
                folder_open
              </span>
              <p className="text-on-surface-variant font-body text-lg">
                No projects found. Add <code className="text-primary bg-surface-container-high px-2 py-1 rounded text-sm">.md</code> files to the{" "}
                <code className="text-primary bg-surface-container-high px-2 py-1 rounded text-sm">/docs</code> folder.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {projects.map((project, idx) => (
                <div
                  key={project.slug}
                  className={`group ${idx % 2 === 1 ? "mt-0 md:mt-24" : ""}`}
                >
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden rounded-xl bg-surface-container-high relative mb-6">
                    {project.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                        alt={project.title}
                        src={project.image}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-6xl text-outline">
                          code_blocks
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-surface/40 group-hover:bg-transparent transition-all" />
                  </div>

                  {/* Meta */}
                  <div className="flex items-start justify-between">
                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-surface-container-highest px-2 py-0.5 rounded-sm text-[0.6875rem] font-label uppercase text-on-surface-variant"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link href={`/projects/${project.slug}`}>
                        <h2 className="font-headline text-2xl font-bold text-white mb-2 hover:text-primary transition-colors">
                          {project.title}
                        </h2>
                      </Link>
                      <p className="text-on-surface-variant max-w-md text-sm leading-relaxed">
                        {project.description}
                      </p>
                      {project.date && (
                        <p className="text-outline text-xs font-label uppercase tracking-widest mt-3">
                          {project.date}
                        </p>
                      )}
                      <div className="flex items-center gap-4 mt-4">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="text-primary font-headline text-sm font-bold border-b-2 border-primary/20 hover:border-primary transition-all pb-0.5"
                        >
                          Read More
                        </Link>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-outline hover:text-primary transition-colors flex items-center gap-1 text-sm"
                          >
                            <span className="material-symbols-outlined text-base">
                              open_in_new
                            </span>
                            View Project
                          </a>
                        )}
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-3xl text-outline-variant group-hover:text-primary transition-colors mt-1">
                      north_east
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
