import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Najwan Octavian Gerrard — Cloud & DevOps Engineer",
  description:
    "Jr. Cloud Infrastructure & DevOps Engineer. Spesialisasi OpenStack, Kubernetes, Ansible, dan AWS. Saat ini di PT Boer Technology. Lihat CV dan proyek saya.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/logo-portfolio.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
