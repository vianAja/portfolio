import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { certificates, certificateIssuerColors } from "@/lib/certificates";

export const metadata = {
  title: "Certificates - Najwan Octavian Gerrard",
  description: "A complete list of certificates and professional achievements for Najwan Octavian Gerrard.",
};

export default function CertificatesPage() {
  const issuers = [...new Set(certificates.map((certificate) => certificate.issuer))];
  const years = [...new Set(certificates.map((certificate) => certificate.year))].sort((a, b) => Number(b) - Number(a));

  return (
    <>
      <NavBar active="Certificates" />

      <main className="px-6 pb-24 pt-28 md:px-12 lg:px-20">
        <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <ScrollReveal className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-[0.7rem] font-label font-semibold uppercase tracking-[0.16em] text-primary">
              <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_6px_rgba(61,92,89,0.12)]" />
              Verified Learning Journey
            </div>

            <div className="space-y-4">
              <p className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                Certificates
              </p>
              <h1 className="max-w-4xl font-headline text-4xl font-bold leading-tight tracking-[-0.03em] text-on-surface md:text-6xl">
                Certificates
              </h1>
              <p className="max-w-2xl font-body text-base leading-relaxed text-on-surface-variant md:text-lg">
                A complete archive of the credentials and certifications I have earned across cloud, automation, Linux, data, and security.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="grid gap-4 sm:grid-cols-3">
            <article className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-5 shadow-[0_16px_40px_rgba(26,28,28,0.05)]">
              <p className="font-label text-[0.65rem] uppercase tracking-[0.16em] text-on-surface-variant">
                Total
              </p>
              <p className="mt-3 font-headline text-4xl font-bold tracking-tight text-on-surface">
                {certificates.length}
              </p>
              <p className="mt-2 text-sm text-on-surface-variant">Certificate entries</p>
            </article>

            <article className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-5 shadow-[0_16px_40px_rgba(26,28,28,0.05)]">
              <p className="font-label text-[0.65rem] uppercase tracking-[0.16em] text-on-surface-variant">
                Issuers
              </p>
              <p className="mt-3 font-headline text-4xl font-bold tracking-tight text-on-surface">
                {issuers.length}
              </p>
              <p className="mt-2 text-sm text-on-surface-variant">Organizations represented</p>
            </article>

            <article className="rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-5 shadow-[0_16px_40px_rgba(26,28,28,0.05)]">
              <p className="font-label text-[0.65rem] uppercase tracking-[0.16em] text-on-surface-variant">
                Latest Year
              </p>
              <p className="mt-3 font-headline text-4xl font-bold tracking-tight text-on-surface">
                {years[0]}
              </p>
              <p className="mt-2 text-sm text-on-surface-variant">Most recent credential year</p>
            </article>
          </ScrollReveal>
        </section>

        <section className="mx-auto mt-14 max-w-7xl space-y-6">
          <ScrollReveal className="flex flex-wrap gap-3">
            {issuers.map((issuer) => (
              <span
                key={issuer}
                className="rounded-full border border-outline-variant/30 bg-surface-container-low px-4 py-2 text-[0.68rem] font-label uppercase tracking-[0.12em] text-on-surface-variant"
              >
                {issuer}
              </span>
            ))}
          </ScrollReveal>
        </section>

        <section className="mx-auto mt-16 max-w-7xl space-y-6">
          <ScrollReveal className="space-y-3">
            <p className="font-label text-[0.7rem] uppercase tracking-[0.16em] text-primary">
              Complete List
            </p>
            <h2 className="border-b border-primary/50 pb-4 font-headline text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
              All certificates
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {certificates.map((certificate) => (
              <ScrollReveal key={certificate.id}>
                <article className="flex flex-col gap-4 rounded-[1.35rem] border border-outline-variant/28 bg-surface-container-lowest p-5 shadow-[0_18px_44px_rgba(26,28,28,0.05)] transition duration-300 hover:border-primary/30 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`font-label text-[0.63rem] font-bold uppercase tracking-[0.18em] ${certificateIssuerColors[certificate.issuer] ?? "text-primary"}`}>
                        {certificate.issuer}
                      </span>
                      <span className="text-xs uppercase tracking-[0.12em] text-on-surface-variant">
                        {certificate.year}
                      </span>
                    </div>
                    <h3 className="font-headline text-lg font-bold leading-snug tracking-tight text-on-surface">
                      {certificate.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href={certificate.pdfFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-2 text-[0.68rem] font-label font-semibold uppercase tracking-[0.12em] text-primary transition duration-300 hover:-translate-y-0.5 hover:bg-primary/16"
                    >
                      <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-0.5">
                        file_open
                      </span>
                      Open
                    </a>

                    {certificate.link ? (
                      <a
                        href={certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 rounded-full border border-outline-variant/35 px-3 py-2 text-[0.68rem] font-label font-semibold uppercase tracking-[0.12em] text-on-surface transition duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:text-primary"
                      >
                        <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-0.5">
                          verified
                        </span>
                        Verify
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/30 px-3 py-2 text-[0.68rem] font-label font-semibold uppercase tracking-[0.12em] text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm">workspace_premium</span>
                        Internal Record
                      </span>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
