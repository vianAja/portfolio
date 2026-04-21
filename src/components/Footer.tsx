import Link from "next/link";

export default function Footer() {
  const links = [
    { label: "WhatsApp", href: "https://wa.me/62895414361074" },
    { label: "Email", href: "mailto:najwanoctavian@gmail.com" },
    { label: "GitHub", href: "https://github.com/vianAja" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/najwan-octa/" },
  ];

  return (
    <footer className="w-full py-16 mt-20 bg-surface-container-low">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-bold tracking-tight text-on-surface font-headline">
            NAJWAN
          </Link>
          <p className="font-body text-sm tracking-wide text-on-surface/50">
            © {new Date().getFullYear()} Najwan. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {links.map(({ label, href }) => (
            <a
              key={label}
              className="font-body text-sm tracking-wide text-on-surface/55 hover:text-primary transition-colors"
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
