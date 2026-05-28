import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects";
import { getAllBlogPosts } from "@/lib/blog";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const featuredProjects = getAllProjects().slice(0, 2);
  const allBlogPosts = getAllBlogPosts();
  const recentPosts = allBlogPosts.slice(0, 3);
  const featuredSkills = [
    { label: "Kubernetes", icon: "hub", tone: "text-primary" },
    { label: "OpenShift", icon: "cloud", tone: "text-secondary" },
    { label: "Ansible", icon: "settings_suggest", tone: "text-primary" },
    { label: "Terraform", icon: "schema", tone: "text-primary" },
    { label: "AWS", icon: "cloud", tone: "text-secondary" },
    { label: "Python", icon: "terminal", tone: "text-primary" },
    { label: "CI/CD", icon: "sync_alt", tone: "text-primary" },
  ];
  const technicalSkills = [
    {
      category: "Cloud",
      icon: "cloud",
      items: ["OpenStack", "Kubernetes", "OpenShift", "Ceph", "AWS", "Traefik"],
    },
    {
      category: "Automation & CI/CD",
      icon: "settings_suggest",
      items: ["Ansible", "Terraform", "Jenkins", "CloudFormation", "GitLab CI/CD"],
    },
    {
      category: "Monitoring & Security",
      icon: "monitoring",
      items: ["ELK Stack", "Grafana", "Prometheus", "Wazuh"],
    },
    {
      category: "Networking",
      icon: "lan",
      items: ["Routing", "Switching", "Subnetting", "Firewalls"],
    },
    {
      category: "Database",
      icon: "database",
      items: ["MySQL", "PostgreSQL", "MongoDB", "AWS RDS", "DynamoDB", "Oracle DB"],
    },
    {
      category: "Dev & Scripting",
      icon: "terminal",
      items: ["Python", "Bash", "Linux", "YAML", "Docker", "Arduino"],
    },
    {
      category: "Data Science & Analytics",
      icon: "query_stats",
      items: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "SQL",
        "EDA",
        "Machine Learning",
        "Deep Learning",
        "Regression",
      ],
      centered: true,
    },
  ];

  return (
    <>
      <NavBar active="Home" />

      <main className="pt-24 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto space-y-20">
        <section id="home" className="relative flex items-center overflow-hidden pt-2 pb-2 md:min-h-[56vh]">
          <div className="relative z-10 grid w-full grid-cols-1 items-center gap-10 md:grid-cols-12">
            <ScrollReveal className="md:col-span-4 relative flex justify-center md:justify-start">
              <div className="relative h-72 w-72 overflow-hidden rounded-xl bg-surface-container-high shadow-lg transition-all duration-500 will-change-transform hover:scale-[1.03] hover:border hover:border-primary/30 hover:shadow-2xl md:h-96 md:w-96">
                <Image
                  className="object-cover"
                  alt="Najwan Octavian portrait"
                  src="/homepage-furina.webp"
                  fill
                  priority
                  sizes="(min-width: 768px) 24rem, 18rem"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>
              <div className="absolute -z-10 left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
            </ScrollReveal>

            <ScrollReveal className="md:col-span-8">
              <div className="space-y-8 text-center md:text-left">
                <div className="space-y-4">
                  <p className="font-label text-primary text-xs md:text-sm font-semibold tracking-[0.16em] uppercase">
                    Portfolio
                  </p>
                  <h1 className="font-headline text-5xl md:text-7xl lg:text-[5rem] font-extrabold leading-[1.04] tracking-[-0.02em] text-on-surface">
                    Najwan Octavian Gerrard.
                  </h1>
                  <p className="font-body text-sm md:text-base text-on-surface-variant">
                    Based in Kendal, Central Java · Open to remote
                  </p>
                </div>

                <p className="mx-auto max-w-2xl font-body text-lg md:mx-0 md:text-2xl text-on-surface-variant font-light leading-relaxed">
                  Building scalable cloud systems and elegant interfaces with a quiet, editorial approach.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-2 md:justify-start">
                  <Link
                    href="/cv"
                    className="bg-primary text-on-primary px-7 py-3.5 rounded-md font-label text-sm font-semibold uppercase tracking-[0.08em]"
                  >
                    View CV
                  </Link>
                  <Link
                    href="/blog"
                    className="text-primary hover:bg-surface-container-high px-6 py-3.5 rounded-md font-label text-sm font-semibold uppercase tracking-[0.08em] transition-colors"
                  >
                    Read Blogs
                  </Link>
                </div>

                <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-1 text-xs md:justify-start text-on-surface-variant">
                  <span>Atau hubungi langsung:</span>
                  <a
                    href="mailto:najwanoctavian@gmail.com"
                    className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">mail</span>
                    najwanoctavian@gmail.com
                  </a>
                  <span className="hidden sm:inline">·</span>
                  <a
                    href="https://wa.me/62895414361074"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span>
                    WhatsApp
                  </a>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <ScrollReveal>
          <section
            id="about"
            className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12"
          >
            <div className="space-y-6 md:col-span-5">
              <p className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                About
              </p>
              <div className="space-y-3">
                <h2 className="font-headline text-2xl font-bold leading-tight tracking-tight text-on-surface md:text-3xl">
                  <span className="block">Building cloud systems.</span>
                  <span className="block">Teaching what I learn.</span>
                </h2>
                <p className="max-w-xl font-body text-base leading-relaxed text-on-surface-variant md:text-lg">
                  Cloud Infrastructure &amp; DevOps engineer yang percaya bahwa infrastruktur yang baik harus bisa dijelaskan dengan sederhana. Setelah aktif di kompetisi LKS, kini membantu tim teknis PT Boer Technology dalam delivery pelatihan cloud dan automation.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3.5 py-2 text-sm font-medium text-green-700 dark:border-green-400/20 dark:bg-green-400/10 dark:text-green-300">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span>Available for new opportunities</span>
              </div>
            </div>

            <div className="space-y-6 md:col-span-7">
              <p className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                Experience
              </p>

              <div className="relative pl-5">
                <div className="absolute left-[0.5625rem] top-2 bottom-2 border-l border-dashed border-outline-variant/40" />

                <div className="space-y-6">
                  <article className="relative">
                    <span className="absolute left-[-1.4375rem] top-1.5 h-3 w-3 rounded-full border border-foreground bg-foreground" />
                    <p className="font-label text-xs uppercase tracking-[0.14em] text-on-surface-variant">
                      Okt 2025 – Sekarang
                    </p>
                    <h3 className="mt-1 font-headline text-sm font-medium text-on-surface">
                      Jr. Training Team · PT Boer Technology
                    </h3>
                    <p className="mt-1 max-w-2xl font-body text-sm leading-relaxed text-on-surface-variant">
                      Delivery pelatihan cloud, automation, dan infrastructure.
                    </p>
                  </article>

                  <article className="relative">
                    <span className="absolute left-[-1.4375rem] top-1.5 h-3 w-3 rounded-full border border-outline-variant/60 bg-surface-container-lowest" />
                    <p className="font-label text-xs uppercase tracking-[0.14em] text-on-surface-variant">
                      2024
                    </p>
                    <h3 className="mt-1 font-headline text-sm font-medium text-on-surface">
                      LKS Cloud Computing — Juara 1 Kabupaten
                    </h3>
                    <p className="mt-1 max-w-2xl font-body text-sm leading-relaxed text-on-surface-variant">
                      Kompetisi cloud computing tingkat kabupaten.
                    </p>
                  </article>

                  <article className="relative">
                    <span className="absolute left-[-1.4375rem] top-1.5 h-3 w-3 rounded-full border border-outline-variant/60 bg-surface-container-lowest" />
                    <p className="font-label text-xs uppercase tracking-[0.14em] text-on-surface-variant">
                      2023 – 2025
                    </p>
                    <h3 className="mt-1 font-headline text-sm font-medium text-on-surface">
                      SMK Negeri 4 Kendal
                    </h3>
                    <p className="mt-1 max-w-2xl font-body text-sm leading-relaxed text-on-surface-variant">
                      Fokus studi Cloud Infrastructure, DevOps, dan Machine Learning.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <section
          className="space-y-6"
          id="skills"
        >
          <div className="space-y-2 text-center md:text-left">
            <p className="font-label text-[0.6875rem] uppercase tracking-[0.13em] text-primary/85">
              Technical Profile
            </p>
            <h2 className="mx-auto max-w-3xl border-b border-primary/60 pb-4 font-headline text-3xl md:mx-0 md:text-4xl font-bold tracking-tight text-on-surface">
              Technical Skills
            </h2>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="font-label text-[0.6875rem] uppercase tracking-[0.14em] text-on-surface-variant">
                Featured Skills
              </p>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-7">
                {featuredSkills.map((skill) => (
                  <article
                    key={skill.label}
                    className="group rounded-xl border border-primary/15 bg-surface-container-lowest px-4 py-4 shadow-[0_8px_24px_rgba(26,28,28,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-surface-container-low"
                  >
                    <div className="flex items-start gap-3 md:flex-col md:gap-3">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-outline-variant/25 bg-primary/5 text-primary transition-colors group-hover:bg-primary/10">
                        <span className={`material-symbols-outlined text-[1.15rem] ${skill.tone}`}>
                          {skill.icon}
                        </span>
                      </span>
                      <div className="min-w-0">
                        <p className="font-headline text-sm font-semibold tracking-tight text-on-surface md:text-base">
                          {skill.label}
                        </p>
                        <p className="mt-1 text-[0.7rem] leading-snug text-on-surface-variant">
                          Core stack
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-label text-[0.6875rem] uppercase tracking-[0.14em] text-on-surface-variant">
                More Skills
              </p>
              <div className="overflow-hidden rounded-2xl border border-outline-variant/30 bg-outline-variant/30 shadow-[0_8px_24px_rgba(26,28,28,0.04)]">
                <div className="grid grid-cols-1 gap-px bg-outline-variant/30 md:grid-cols-2 xl:grid-cols-3">
                  {technicalSkills.map((skill) => (
                    <article
                      key={skill.category}
                      className={`bg-surface-container-lowest px-5 py-5 text-center transition hover:bg-surface-container-low md:text-left ${
                        skill.centered ? "xl:col-span-3 xl:flex xl:flex-col xl:items-center" : ""
                      }`}
                    >
                      <div className="mb-4 flex items-center justify-center gap-2 md:justify-start">
                        <span className="material-symbols-outlined text-base text-primary">
                          {skill.icon}
                        </span>
                        <h3 className="font-headline text-base font-semibold tracking-tight text-on-surface">
                          {skill.category}
                        </h3>
                      </div>

                      <ul className={`flex flex-wrap justify-center gap-2 md:justify-start ${skill.centered ? "xl:justify-center" : ""}`}>
                        {skill.items.map((item) => (
                          <li
                            key={item}
                            className={`rounded-md border px-2.5 py-1 text-[0.68rem] font-label tracking-[0.02em] ${
                              item === "OpenShift" ||
                              item === "Wazuh" ||
                              item === "Oracle DB" ||
                              item === "Deep Learning" ||
                              item === "Regression"
                                ? "border-secondary-container/80 bg-secondary-container/20 text-secondary"
                                : "border-outline-variant/80 bg-surface-container-lowest text-primary"
                            }`}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10" id="projects">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface">Last Project</h2>
              <p className="text-on-surface-variant">The two most recent projects based on the dates defined in each project detail.</p>
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
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface">Selected Blogs</h2>
              <p className="text-on-surface-variant">Thoughts on architecture, cloud systems, and delivery process.</p>
            </div>
            <Link href="/blog" className="text-primary font-label text-sm uppercase tracking-[0.12em]">
              Explore Blogs
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
