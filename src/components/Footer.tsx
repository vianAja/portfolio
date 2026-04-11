import Link from "next/link";

export default function Footer() {
  const links = [
    { label: "WhatsApp", href: "https://wa.me/62895414361074" },
    { label: "Email", href: "mailto:najwanoctavian@gmail.com" },
    { label: "GitHub", href: "https://github.com/vianAja" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/najwan-octa/" },
  ];
  return (
    <footer className="w-full py-12 mt-20 bg-[#1a1c1e]">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-headline font-bold text-[#5ED0D3] text-xl">
            <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-white font-headline"
        >
          NAJWAN
        </Link>
          </span>
          <p className="font-body text-sm tracking-wide text-gray-500">
            © {new Date().getFullYear()} Najwan. All rights reserved.
          </p>
        </div>
        <div className="flex gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              className="font-body text-sm tracking-wide text-gray-500 hover:text-[#5ED0D3] transition-colors relative group"
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {label}
              <span className="absolute bottom-[-2px] left-1/2 w-0 h-[1px] bg-[#5ED0D3] transition-all group-hover:w-full group-hover:left-0" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
