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
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 animate-fade-in-up">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-on-surface-variant font-body text-xl max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or just want to say hi? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            {/* Form Section */}
            <div className="md:col-span-7">
              <h3 className="font-headline text-2xl font-bold text-white mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-surface-container-high border border-outline-variant/20 rounded-xl px-6 py-4 text-white placeholder:text-outline-variant focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-body"
                    placeholder="Your firstname"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-surface-container-high border border-outline-variant/20 rounded-xl px-6 py-4 text-white placeholder:text-outline-variant focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-body"
                    placeholder="Your email address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full bg-surface-container-high border border-outline-variant/20 rounded-xl px-6 py-4 text-white placeholder:text-outline-variant focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-body"
                    placeholder="Your subject of this message"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full bg-surface-container-high border border-outline-variant/20 rounded-xl px-6 py-4 text-white placeholder:text-outline-variant focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-body resize-y"
                    placeholder="Write us something"
                    required
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(125,236,239,0.3)] transition-all flex items-center justify-center w-full md:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="md:col-span-5 md:col-start-8">
              <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] pointer-events-none"></div>
                
                <h3 className="font-headline text-2xl font-bold text-white mb-8">Contact Information</h3>
                
                <ul className="space-y-8">
                  <li className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">location_on</span>
                    </div>
                    <div>
                      <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">Address</p>
                      <p className="text-white font-body leading-relaxed">kaliwungu south, Kendal, <br /> Central Java, Indonesia</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">call</span>
                    </div>
                    <div>
                      <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">Phone</p>
                      <a href="tel:+62895414361074" className="text-white font-body hover:text-primary transition-colors">+62 8954 1436 1074</a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">mail</span>
                    </div>
                    <div>
                      <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">Email</p>
                      <a href="mailto:najwanoctavian@gmail.com" className="text-white font-body hover:text-primary transition-colors break-all">najwanoctavian@gmail.com</a>
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
