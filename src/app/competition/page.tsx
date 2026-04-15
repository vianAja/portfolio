import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { competitions } from "@/data/competitions";

export const metadata = {
  title: "Competition | NAJWAN",
  description: "A record of competitions, results, and technical focus areas.",
};

export default function CompetitionPage() {
  return (
    <>
      <NavBar active="Competition" />
      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-8 mb-20 relative overflow-hidden">
          <ScrollReveal className="flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-primary mb-4 block">
                Achievement Track
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-[-0.04em] leading-none text-white">
                Competition<br />
                <span className="text-primary">Journey</span>
              </h1>
            </div>
            <p className="hidden lg:block max-w-sm text-on-surface-variant font-body text-sm leading-relaxed italic text-right">
              A focused timeline of competitions that shaped my practical cloud and engineering execution.
            </p>
          </ScrollReveal>
          <div className="absolute -bottom-10 -right-20 opacity-5 select-none pointer-events-none">
            <span className="font-headline text-[12rem] font-bold uppercase text-white">
              AWARDS
            </span>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {competitions.map((competition) => (
              <ScrollReveal
                key={competition.id}
                className="group rounded-2xl border border-outline-variant/15 bg-surface-container-high p-7 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <p className="font-label text-[0.625rem] uppercase tracking-[0.14em] text-outline-variant mb-2">
                      {competition.level} • {competition.year}
                    </p>
                    <h2 className="font-headline text-2xl font-bold text-white leading-tight">
                      {competition.title}
                    </h2>
                    <p className="text-primary text-xs uppercase tracking-wider mt-1">
                      {competition.organizer}
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-md bg-primary/15 px-3 py-1.5 font-label text-[0.6875rem] uppercase tracking-wide text-primary">
                    {competition.result}
                  </span>
                </div>

                <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                  {competition.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {competition.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-surface-container-highest px-3 py-1 rounded text-[0.625rem] font-label uppercase tracking-[0.1em] text-on-surface-variant"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {competition.certificateUrl ? (
                  <a
                    href={competition.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-headline text-sm border-b-2 border-primary/20 pb-0.5 hover:border-primary transition-all"
                  >
                    View Certificate
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-outline text-sm">
                    Certificate not available
                  </span>
                )}
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
