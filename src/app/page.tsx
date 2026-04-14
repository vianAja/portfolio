import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CertificateCarousel from "@/components/CertificateCarousel";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import { getAllBlogPosts } from "@/lib/blog";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const featuredProjects = getAllProjects().slice(0, 2);
  const recentPosts = getAllBlogPosts().slice(0, 3);
  return (
    <>
      <NavBar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center px-8 pt-20 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <ScrollReveal className="md:col-span-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-surface-container-highest mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-[0.6875rem] font-label uppercase tracking-[0.1em] text-on-surface-variant">
                  Available for worldwide projects
                </span>
              </div>
              <h1 className="font-headline text-[3.5rem] md:text-[5rem] leading-[1] font-bold tracking-[-0.04em] mb-8">
                Najwan Octavian{" "}
                <span className="text-primary">Gerrard</span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-[1.6]">
                Passionate about{" "}
                <span className="text-white font-medium">Cloud Computing</span>,{" "}
                <span className="text-white font-medium">DevOps</span>, and{" "}
                <span className="text-white font-medium">Machine Learning</span>
                . Engineering scalable digital futures through high-performance architecture.
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(125,236,239,0.3)] transition-all"
                >
                  View Work
                </Link>
                <Link
                  href="/blog"
                  className="border border-outline-variant/20 text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-all"
                >
                  Read Blog
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal className="md:col-span-4 relative flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:border hover:border-primary/30 cursor-pointer shadow-lg bg-surface-container-high will-change-transform">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover"
                  alt="Najwan Octavian portrait"
                  src="/homepage-furina.webp"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
              </div>
              {/* Background ambient glow */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/5 rounded-full blur-[120px]"></div>
            </ScrollReveal>
          </div>
          {/* Kinetic Marquee Background */}
          <div className="absolute bottom-10 left-0 w-full kinetic-marquee opacity-20 pointer-events-none">
            <div className="marquee-text font-headline text-[8rem] font-bold uppercase tracking-widest whitespace-nowrap">
              SCALABLE ARCHITECTURE • CLOUD NATIVE • NEURAL NETWORKS • DEVOPS EXCELLENCE •
              SCALABLE ARCHITECTURE • CLOUD NATIVE •
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <ScrollReveal className="md:col-span-4">
                <h2 className="font-headline text-[1.75rem] font-bold tracking-tight mb-4 uppercase">
                  My Skills
                </h2>
                <div className="h-1 w-12 bg-primary mb-6"></div>
                <p className="text-on-surface-variant leading-relaxed">
                  A deep technical stack focused on automation, scalability, and intelligence. I
                  bridge the gap between heavy infrastructure and data-driven insights.
                </p>
              </ScrollReveal>
              <div className="md:col-span-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    { icon: "cloud", label: "AWS & GCP" },
                    { icon: "terminal", label: "Kubernetes" },
                    { icon: "psychology", label: "PyTorch" },
                    { icon: "settings_ethernet", label: "Terraform" },
                    { icon: "code", label: "Python" },
                    { icon: "database", label: "PostgreSQL" },
                    { icon: "data_object", label: "CI/CD" },
                    { icon: "security", label: "DevSecOps" },
                  ].map(({ icon, label }) => (
                    <ScrollReveal
                      key={label}
                      className="bg-surface-container-high p-6 rounded-xl hover:bg-surface-bright transition-all group"
                    >
                      <span className="material-symbols-outlined text-primary text-3xl mb-4 block">
                        {icon}
                      </span>
                      <h3 className="font-headline text-sm font-bold uppercase tracking-wider text-white">
                        {label}
                      </h3>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <ScrollReveal>
          <CertificateCarousel />
        </ScrollReveal>

        {/* Featured Projects */}
        <section id="projects" className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="flex justify-between items-end mb-16">
              <div>
                <span className="text-[0.6875rem] font-label uppercase tracking-[0.1em] text-primary">
                  Selected Portfolio
                </span>
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mt-2">
                  Featured Projects
                </h2>
              </div>
              <Link
                className="hidden md:flex items-center text-primary font-bold group"
                href="/projects"
              >
                View All Projects
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {featuredProjects.map((project, idx) => (
                <ScrollReveal 
                  key={project.slug} 
                  className={`group ${idx % 2 === 1 ? "mt-0 md:mt-24" : "block"}`}
                >
                  <Link href={`/projects/${project.slug}`} className="block h-full">
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
                      <div className="absolute inset-0 bg-surface/40 group-hover:bg-transparent transition-all"></div>
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tags.map(tag => (
                            <span key={tag} className="bg-surface-container-highest px-2 py-0.5 rounded-sm text-[0.6875rem] font-label uppercase text-on-surface-variant">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="font-headline text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-on-surface-variant max-w-md line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-3xl text-outline-variant group-hover:text-primary transition-colors mt-1">
                        north_east
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-24 px-8 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="mb-16 text-center">
              <h2 className="font-headline text-[1.75rem] font-bold tracking-tight uppercase mb-4">
                Recent Blog Posts
              </h2>
              <p className="text-on-surface-variant max-w-xl mx-auto">
                Thoughts on engineering, emerging tech, and architectural patterns.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <ScrollReveal
                  key={post.id}
                  className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 hover:border-primary/40 transition-all group "
                >
                  <time className="text-[0.6875rem] font-label uppercase text-on-surface-variant mb-4 block">
                    {post.date}
                  </time>
                  <h3 className="font-headline text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white border-b-2 border-primary/20 hover:border-primary transition-all pb-1"
                    href={`/blog/${post.id}`}
                  >
                    Read More
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
