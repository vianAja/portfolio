import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact - Najwan Octavian",
  description: "Get in touch with Najwan Octavian Gerrard",
};

export default function ContactPage() {
  return (
    <>
      <NavBar active="Contact" />

      <main className="min-h-screen pt-32 pb-24 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-6 animate-fade-in-up">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-on-surface-variant font-body text-xl max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or just want to say hi? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            {/* Direct Action Section */}
            <div className="md:col-span-7">
              <div className="h-full rounded-2xl border border-outline-variant/20 bg-surface-container-low p-8 md:p-10 flex flex-col justify-center text-center md:text-left">
                <p className="font-label text-[0.6875rem] uppercase tracking-[0.16em] text-primary mb-3">
                  Direct Contact
                </p>
                <h3 className="font-headline text-3xl font-bold text-on-surface mb-4">
                  Let&apos;s talk through the fastest channel.
                </h3>
                <p className="font-body text-on-surface-variant leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
                  For recruitment, collaboration, or technical discussions, WhatsApp and email are the quickest ways to reach me.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 md:justify-start">
                  <a
                    href="https://wa.me/62895414361074"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-label text-sm font-semibold uppercase tracking-[0.08em] text-on-primary transition-all hover:shadow-[0_0_20px_rgba(125,236,239,0.3)]"
                  >
                    <span className="material-symbols-outlined text-lg">chat</span>
                    Chat via WhatsApp
                  </a>
                  <a
                    href="mailto:najwanoctavian@gmail.com"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-outline-variant/30 bg-surface-container-high px-6 py-4 font-label text-sm font-semibold uppercase tracking-[0.08em] text-primary transition-colors hover:bg-surface-container-highest"
                  >
                    <span className="material-symbols-outlined text-lg">mail</span>
                    Kirim Email
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="md:col-span-5 md:col-start-8">
              <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] pointer-events-none"></div>
                
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-8">Contact Information</h3>
                
                <ul className="space-y-8">
                  <li className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">location_on</span>
                    </div>
                    <div>
                      <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">Address</p>
                      <p className="text-on-surface font-body leading-relaxed">kaliwungu south, Kendal, <br /> Central Java, Indonesia</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">call</span>
                    </div>
                    <div>
                      <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">Phone</p>
                      <a href="tel:+62895414361074" className="text-on-surface font-body hover:text-primary transition-colors">+62 8954 1436 1074</a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">mail</span>
                    </div>
                    <div>
                      <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">Email</p>
                      <a href="mailto:najwanoctavian@gmail.com" className="text-on-surface font-body hover:text-primary transition-colors break-all">najwanoctavian@gmail.com</a>
                    </div>
                  </li>
                </ul>

                {/* Social Links from Header/Footer logic could go here if needed */}
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
