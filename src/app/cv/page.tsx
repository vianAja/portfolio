import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { cvDownloadUrl, cvPreviewUrl } from "@/lib/cv";

export const metadata = {
  title: "CV | NAJWAN",
  description: "Curriculum Vitae Najwan Octavian Gerrard",
};

export default function CvPage() {
  return (
    <>
      <NavBar active="Home" />
      <main className="pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto space-y-8">
        <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface">
            Curriculum Vitae Najwan
          </h1>
          <a
            href={cvDownloadUrl}
            download
            className="inline-flex items-center gap-2 rounded-md border border-outline-variant/30 bg-surface-container-low px-5 py-3 font-label text-sm font-semibold uppercase tracking-[0.08em] text-primary transition hover:bg-surface-container-high"
          >
            Download PDF
            <span className="material-symbols-outlined text-base">download</span>
          </a>
        </section>

        <section className="overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
          <iframe
            src={cvPreviewUrl}
            title="CV Preview"
            className="h-[78vh] min-h-[720px] w-full"
            allow="autoplay"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
