import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import { getAllBlogPosts } from "@/lib/blog";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const featuredProjects = getAllProjects().slice(0, 2);
  const recentPosts = getAllBlogPosts().slice(0, 3);
  const technicalSkills = [
    {
      category: "Cloud",
      icon: "cloud",
      description: "Platform and infrastructure orchestration across private and public cloud systems.",
      items: ["OpenStack", "Kubernetes", "Ceph", "AWS", "Traefik"],
    },
    {
      category: "Automation",
      icon: "settings_suggest",
      description: "Provisioning, deployment, and release automation for repeatable delivery pipelines.",
      items: ["Ansible", "Terraform", "Jenkins", "AWS CloudFormation", "GitLab CI/CD"],
    },
    {
      category: "Containerization",
      icon: "deployed_code",
      description: "Lightweight packaging for portable workloads and reliable application delivery.",
      items: ["Docker"],
    },
    {
      category: "Monitoring",
      icon: "monitoring",
      description: "Observability stacks to track system health, logs, and performance signals.",
      items: ["ELK Stack", "Grafana", "Prometheus"],
    },
    {
      category: "Networking",
      icon: "lan",
      description: "Core network fundamentals for connectivity, segmentation, and secure traffic flow.",
      items: ["Routing", "Switching", "Subnetting", "Firewalls"],
    },
    {
      category: "Scripting",
      icon: "terminal",
      description: "Shell-first tooling for automation, configuration, and operational scripting.",
      items: ["Linux", "Bash", "YAML"],
    },
    {
      category: "Database",
      icon: "database",
      description: "Relational and NoSQL storage systems for applications, analytics, and cloud services.",
      items: ["MySQL", "PostgreSQL", "MongoDB", "AWS RDS", "AWS DynamoDB"],
    },
    {
      category: "Programming",
      icon: "code",
      description: "General-purpose programming for automation, data processing, and solution building.",
      items: ["Python"],
    },
    {
      category: "Internet of Things (IoT)",
      icon: "memory",
      description: "Device-level prototyping with sensors and embedded development workflows.",
      items: ["Arduino", "Sensor"],
    },
    {
      category: "Data Science & Analytics",
      icon: "query_stats",
      description: "Practical analysis workflows from EDA and statistics to entry-level machine learning.",
      items: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "SQL (SELECT, GROUP BY, Functions)",
        "Statistics for Data Science",
        "Exploratory Data Analysis (EDA)",
        "Machine Learning",
      ],
    },
  ];

  return (
    <>
      <NavBar active="Home" />

      <main className="pt-28 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto space-y-28">
        <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-6">
          <div className="relative z-10 grid w-full grid-cols-1 items-center gap-10 md:grid-cols-12">
            <ScrollReveal className="md:col-span-4 relative flex justify-center md:justify-start">
              <div className="relative h-72 w-72 overflow-hidden rounded-xl bg-surface-container-high shadow-lg transition-all duration-500 will-change-transform hover:scale-[1.03] hover:border hover:border-primary/30 hover:shadow-2xl md:h-96 md:w-96">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-full w-full object-cover"
                  alt="Najwan Octavian portrait"
                  src="/homepage-furina.webp"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>
              <div className="absolute -z-10 left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
            </ScrollReveal>

            <ScrollReveal className="md:col-span-8">
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
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section
          className="rounded-[2rem] border border-[#223047] bg-[#111827] px-6 py-10 shadow-[0_22px_48px_rgba(17,24,39,0.12)] md:px-8 md:py-12"
          id="skills"
        >
          <div className="mb-10 max-w-3xl space-y-4">
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-white">
              Technical Skills
            </h2>
            <p className="text-base leading-8 text-slate-300 md:text-lg">
              A compact view of the cloud, infrastructure, automation, data, and scripting tools I
              use most often in practical work.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {technicalSkills.map((skill) => (
              <article
                key={skill.category}
                className="rounded-[1.6rem] border border-[#2b3952] bg-[#162133] p-6 shadow-[0_12px_32px_rgba(8,15,28,0.22)] transition duration-200 hover:-translate-y-0.5 hover:border-[#37517a]"
              >
                <div className="mb-5 flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <span className="material-symbols-outlined text-[1.45rem]">{skill.icon}</span>
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-headline text-xl font-semibold leading-tight tracking-tight text-white">
                      {skill.category}
                    </h3>
                    <p className="text-sm leading-7 text-slate-300">{skill.description}</p>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2.5">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[#2c3a50] bg-[#1d2940] px-3.5 py-1.5 text-xs font-medium leading-5 text-slate-200 md:text-[0.82rem]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
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
