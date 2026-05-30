import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ScrollReveal from "@/components/ScrollReveal";
import { featuredCertificates } from "@/lib/certificates";
import { getAllBlogPosts } from "@/lib/blog";
import { getAllProjects } from "@/lib/projects";
import { getAllTimelines } from "@/lib/timeline";
import Image from "next/image";
import Link from "next/link";

function SocialIcon({ icon }: { icon: "github" | "email" | "whatsapp" | "linkedin" }) {
  if (icon === "github") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.51v-2c-2.94.64-3.56-1.25-3.56-1.25-.48-1.21-1.17-1.54-1.17-1.54-.95-.65.07-.64.07-.64 1.06.07 1.61 1.08 1.61 1.08.93 1.6 2.45 1.14 3.04.87.1-.67.37-1.14.67-1.41-2.35-.27-4.82-1.18-4.82-5.24 0-1.16.41-2.12 1.08-2.87-.11-.27-.47-1.37.1-2.85 0 0 .89-.29 2.91 1.1a10.1 10.1 0 0 1 5.3 0c2.02-1.39 2.91-1.1 2.91-1.1.57 1.48.21 2.58.1 2.85.67.75 1.08 1.71 1.08 2.87 0 4.07-2.48 4.97-4.85 5.23.38.33.72.99.72 2v2.97c0 .28.19.61.73.51A10.5 10.5 0 0 0 12 1.5Z" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M4.98 3.5A1.49 1.49 0 1 1 3.5 5 1.49 1.49 0 0 1 4.98 3.5ZM3.75 8.25h2.46V20.5H3.75Zm4.63 0h2.36v1.67h.03c.33-.62 1.14-1.28 2.34-1.28 2.5 0 2.96 1.64 2.96 3.78v8.08h-2.46v-7.16c0-1.71-.03-3.91-2.38-3.91-2.39 0-2.76 1.87-2.76 3.79v7.28H8.38Z" />
      </svg>
    );
  }

  if (icon === "email") {
    return <span className="material-symbols-outlined text-[1.05rem]">mail</span>;
  }

  return <span className="material-symbols-outlined text-[1.05rem]">chat</span>;
}

export default function Home() {
  const featuredProjects = getAllProjects().slice(0, 2);
  const recentPosts = getAllBlogPosts().slice(0, 3);
  const timelines = getAllTimelines().slice().reverse();
  const certificatePreview = featuredCertificates.slice(0, 4);
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
  const featuredSkills = [
    { label: "Kubernetes", icon: "hub", tone: "text-primary" },
    { label: "OpenShift", icon: "cloud", tone: "text-secondary" },
    { label: "Ansible", icon: "settings_suggest", tone: "text-primary" },
    { label: "Terraform", icon: "schema", tone: "text-primary" },
    { label: "AWS", icon: "cloud", tone: "text-secondary" },
    { label: "Python", icon: "terminal", tone: "text-primary" },
    { label: "CI/CD", icon: "sync_alt", tone: "text-primary" },
  ];
  const socialLinks = [
    { label: "GitHub", href: "https://github.com/vianAja", icon: "github" as const },
    { label: "Email", href: "mailto:najwanoctavian@gmail.com", icon: "email" as const },
    { label: "WhatsApp", href: "https://wa.me/62895414361074", icon: "whatsapp" as const },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/najwan-octa/", icon: "linkedin" as const },
  ];

  return (
    <>
      <NavBar active="Home" />

      <main className="mx-auto max-w-7xl space-y-20 px-6 pb-20 pt-24 md:px-12 lg:px-20">
        <section id="home" className="relative flex items-center overflow-hidden pb-4 pt-2 md:min-h-[56vh]">
          <div className="relative z-10 grid w-full grid-cols-1 items-center gap-10 md:grid-cols-12">
            <ScrollReveal className="relative flex justify-center md:col-span-4 md:justify-start">
              <div className="relative h-72 w-72 overflow-hidden rounded-[1.75rem] border border-primary/15 bg-surface-container-high shadow-[0_28px_60px_rgba(26,28,28,0.12)] transition-all duration-500 will-change-transform hover:scale-[1.02] hover:border-primary/35 md:h-96 md:w-80">
                <Image
                  className="object-cover"
                  alt="Najwan Octavian portrait"
                  src="/foto-profile.webp"
                  fill
                  priority
                  sizes="(min-width: 768px) 20rem, 18rem"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/14 via-transparent to-transparent" />
              </div>
              <div className="absolute left-1/2 top-1/2 -z-10 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/7 blur-[120px]" />
            </ScrollReveal>

            <ScrollReveal className="md:col-span-8">
              <div className="space-y-8 text-center md:text-left">
                <div className="space-y-4">
                  <p className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-primary md:text-sm">
                    Portfolio
                  </p>
                  <h1 className="font-headline text-5xl font-extrabold leading-[1.04] tracking-[-0.02em] text-on-surface md:text-7xl lg:text-[5rem]">
                    Najwan Octavian Gerrard.
                  </h1>
                  <p className="font-body text-sm text-on-surface-variant md:text-base">
                    Based in Kendal, Central Java · Open to remote
                  </p>
                </div>

                <p className="mx-auto max-w-2xl font-body text-lg font-light leading-relaxed text-on-surface-variant md:mx-0 md:text-2xl">
                  Building scalable cloud systems and elegant interfaces with a calm, structured, and delivery-focused approach.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-2 md:justify-start">
                  <Link
                    href="/cv"
                    className="rounded-full bg-primary px-7 py-3.5 font-label text-sm font-semibold uppercase tracking-[0.08em] text-on-primary transition hover:bg-primary-container hover:text-on-primary-container"
                  >
                    View CV
                  </Link>
                  <Link
                    href="/certificates"
                    className="rounded-full border border-outline-variant/35 bg-surface-container-lowest px-6 py-3.5 font-label text-sm font-semibold uppercase tracking-[0.08em] text-on-surface transition hover:border-primary/35 hover:text-primary"
                  >
                    View Certificates
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <ScrollReveal>
          <section id="about" className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
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
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span>Available for new opportunities</span>
              </div>

              <div className="grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-outline-variant/32 bg-surface-container-lowest px-4 py-3 text-[0.72rem] font-label font-semibold uppercase tracking-[0.12em] text-on-surface transition hover:-translate-y-0.5 hover:border-primary/35 hover:bg-primary/6 hover:text-primary"
                    aria-label={link.label}
                  >
                    <SocialIcon icon={link.icon} />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6 md:col-span-7">
              <div className="space-y-2">
                <p className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                  Experience
                </p>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface md:text-3xl">
                  Professional arc from education to training delivery.
                </h2>
              </div>

              <div className="relative overflow-hidden rounded-[1.75rem] border border-outline-variant/28 bg-surface-container-lowest p-6 shadow-[0_20px_50px_rgba(26,28,28,0.05)] md:p-8">
                <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary via-primary/45 to-primary/10" />

                <div className="space-y-7">
                  {timelines.map((timeline, index) => (
                    <article key={timeline.meta.id} className="relative pl-10">
                      <span
                        className={`absolute left-[0.4rem] top-1 h-4 w-4 rounded-full border border-primary/35 ${
                          index === 0
                            ? "bg-primary shadow-[0_0_0_7px_rgba(61,92,89,0.12)]"
                            : "bg-surface-container-low shadow-[0_0_0_7px_rgba(61,92,89,0.08)]"
                        }`}
                      />
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="font-label text-xs uppercase tracking-[0.14em] text-primary">
                            {timeline.meta.displayDate}
                          </p>
                          <span className="rounded-full bg-primary/8 px-2.5 py-1 text-[0.62rem] font-label uppercase tracking-[0.12em] text-primary">
                            {timeline.meta.company}
                          </span>
                        </div>
                        <h3 className="font-headline text-lg font-semibold tracking-tight text-on-surface">
                          {timeline.meta.title}
                        </h3>
                        <p className="max-w-2xl font-body text-sm leading-relaxed text-on-surface-variant md:text-[0.95rem]">
                          {timeline.content}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-8 pt-6">
                  <Link
                    href="/timeline"
                    className="inline-flex items-center gap-2 rounded-full border border-outline-variant/35 bg-surface-container-low px-4 py-3 text-[0.72rem] font-label font-semibold uppercase tracking-[0.12em] text-on-surface transition hover:border-primary/35 hover:text-primary"
                  >
                    Explore full experience
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <section id="skills" className="space-y-6">
          <div className="space-y-2 text-center md:text-left">
            <p className="font-label text-[0.6875rem] uppercase tracking-[0.13em] text-primary/85">
              Technical Profile
            </p>
            <h2 className="mx-auto max-w-3xl border-b border-primary/60 pb-4 font-headline text-3xl font-bold tracking-tight text-on-surface md:mx-0 md:text-4xl">
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

        <section id="certificates" className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="font-label text-[0.6875rem] uppercase tracking-[0.16em] text-primary">
                Credentials
              </p>
              <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
                Selected certificates and competition records.
              </h2>
              <p className="text-on-surface-variant">
                Ringkasan sertifikat utama yang paling relevan untuk cloud, automation, Linux, dan security.
              </p>
            </div>

            <Link
              href="/certificates"
              className="inline-flex items-center gap-2 font-label text-sm uppercase tracking-[0.12em] text-primary"
            >
              View all certificates
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {certificatePreview.map((certificate) => (
              <article
                key={certificate.id}
                className="group overflow-hidden rounded-[1.35rem] border border-outline-variant/25 bg-surface-container-lowest shadow-[0_18px_44px_rgba(26,28,28,0.05)] transition duration-300 hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-container">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
                </div>
                <div className="space-y-3 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-label text-[0.63rem] font-bold uppercase tracking-[0.18em] text-primary">
                      {certificate.issuer}
                    </span>
                    <span className="rounded-full bg-primary/8 px-2.5 py-1 text-[0.62rem] font-label uppercase tracking-[0.12em] text-primary">
                      {certificate.year}
                    </span>
                  </div>
                  <h3 className="font-headline text-lg font-bold leading-snug tracking-tight text-on-surface">
                    {certificate.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={certificate.pdfFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-2 text-[0.68rem] font-label font-semibold uppercase tracking-[0.12em] text-primary transition hover:bg-primary/16"
                    >
                      <span className="material-symbols-outlined text-sm">file_open</span>
                      Open
                    </a>
                    {certificate.link ? (
                      <a
                        href={certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/35 px-3 py-2 text-[0.68rem] font-label font-semibold uppercase tracking-[0.12em] text-on-surface transition hover:border-primary/35 hover:text-primary"
                      >
                        <span className="material-symbols-outlined text-sm">verified</span>
                        Verify
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
                Last Project
              </h2>
              <p className="text-on-surface-variant">
                The two most recent projects based on the dates defined in each project detail.
              </p>
            </div>
            <Link href="/projects" className="font-label text-sm uppercase tracking-[0.12em] text-primary">
              View All Projects
            </Link>
          </div>

          <div className="space-y-5">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block rounded-xl border border-outline-variant/25 bg-surface-container-lowest p-6 transition-colors hover:bg-tertiary-fixed/35 md:p-8"
              >
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                  <div className="max-w-3xl space-y-3">
                    <h3 className="font-headline text-2xl font-bold text-on-surface transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="line-clamp-2 text-on-surface-variant">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/5 px-3 py-1 text-xs font-label uppercase tracking-[0.08em] text-primary"
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

        <section id="blog" className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
                Selected Blogs
              </h2>
              <p className="text-on-surface-variant">
                Thoughts on architecture, cloud systems, and delivery process.
              </p>
            </div>
            <Link href="/blog" className="font-label text-sm uppercase tracking-[0.12em] text-primary">
              Explore Blogs
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group rounded-xl border border-outline-variant/25 bg-surface-container-lowest p-6 transition-colors hover:bg-surface-container-low"
              >
                <time className="text-xs uppercase tracking-[0.12em] text-on-surface-variant">
                  {post.date}
                </time>
                <h3 className="mt-4 mb-3 line-clamp-2 font-headline text-xl font-bold text-on-surface transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="line-clamp-3 text-sm text-on-surface-variant">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
