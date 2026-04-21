import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import { getAllBlogPosts } from "@/lib/blog";

export default function Home() {
  const featuredProjects = getAllProjects().slice(0, 3);
  const recentPosts = getAllBlogPosts().slice(0, 3);

  return (
    <>
      <NavBar active="Home" />

      <main className="pt-28 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto space-y-28">
        <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-end pt-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-label text-primary text-xs md:text-sm font-semibold tracking-[0.16em] uppercase">
                Portfolio
              </p>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-[5rem] font-extrabold leading-[1.04] tracking-[-0.02em] text-on-surface">
                Najwan Octavian Gerrard.
              </h1>
            </div>

            <p className="font-body text-lg md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-2xl">
              Building scalable cloud systems and elegant interfaces with a quiet, editorial approach.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/projects"
                className="bg-primary text-on-primary px-7 py-3.5 rounded-md font-label text-sm font-semibold uppercase tracking-[0.08em]"
              >
                View Work
              </Link>
              <Link
                href="/blog"
                className="text-primary hover:bg-surface-container-high px-6 py-3.5 rounded-md font-label text-sm font-semibold uppercase tracking-[0.08em] transition-colors"
              >
                Read Essays
              </Link>
            </div>
          </div>

          <div className="w-full max-w-lg lg:ml-auto bg-gradient-to-br from-primary/10 to-secondary-container/25 rounded-2xl p-8 md:p-10 border border-outline-variant/30">
            <p className="font-headline text-5xl font-extrabold text-primary">05+</p>
            <p className="font-label mt-1 text-xs uppercase tracking-[0.16em] text-on-surface-variant">
              Years of Craft
            </p>
            <p className="mt-8 text-on-surface-variant leading-relaxed">
              Cloud architecture, automation workflows, and DevOps practices for robust production systems.
            </p>
          </div>
        </section>

        <section className="space-y-10">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface">Core Competencies</h2>
            <p className="text-on-surface-variant">A focused stack shaped for resilience, speed, and maintainability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Engineering",
                points: ["AWS & GCP", "Kubernetes", "Infrastructure as Code"],
              },
              {
                title: "Platform & DevOps",
                points: ["CI/CD pipelines", "Monitoring stack", "Security hardening"],
              },
              {
                title: "Software Delivery",
                points: ["Next.js + TypeScript", "API integration", "Performance optimization"],
              },
            ].map((item) => (
              <div key={item.title} className="bg-surface-container-lowest p-7 rounded-xl border border-outline-variant/30">
                <h3 className="font-headline text-xl font-semibold text-on-surface mb-5">{item.title}</h3>
                <ul className="space-y-3 text-on-surface-variant text-sm">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10" id="projects">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface">Selected Works</h2>
              <p className="text-on-surface-variant">Recent projects focused on practical impact and production readiness.</p>
            </div>
            <Link href="/projects" className="text-primary font-label text-sm uppercase tracking-[0.12em]">
              View All Projects
            </Link>
          </div>

          <div className="space-y-5">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block bg-surface-container-lowest rounded-xl p-6 md:p-8 border border-outline-variant/25 hover:bg-tertiary-fixed/35 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                  <div className="space-y-3 max-w-3xl">
                    <h3 className="font-headline text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-on-surface-variant line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-label uppercase tracking-[0.08em] text-primary bg-primary/5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-3xl text-primary/70">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-10" id="blog">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface">Selected Essays</h2>
              <p className="text-on-surface-variant">Thoughts on architecture, cloud systems, and delivery process.</p>
            </div>
            <Link href="/blog" className="text-primary font-label text-sm uppercase tracking-[0.12em]">
              Explore Blog
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/25 hover:bg-surface-container-low transition-colors"
              >
                <time className="text-xs uppercase tracking-[0.12em] text-on-surface-variant">{post.date}</time>
                <h3 className="font-headline text-xl font-bold text-on-surface mt-4 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-on-surface-variant line-clamp-3">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
