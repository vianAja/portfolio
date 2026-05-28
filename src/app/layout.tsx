import type { Metadata } from "next";
import { manrope, spaceGrotesk } from "./fonts";
import "./globals.css";

const siteUrl = "https://najwan.my.id";

export const metadata: Metadata = {
  title: "Najwan Octavian Gerrard — Cloud & DevOps Engineer",
  description:
    "Jr. Cloud Infrastructure & DevOps Engineer. Spesialisasi OpenStack, Kubernetes, Ansible, dan AWS. Saat ini di PT Boer Technology. Lihat CV dan proyek saya.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Najwan Octavian Gerrard — Cloud & DevOps Engineer",
    description:
      "Jr. Cloud Infrastructure & DevOps Engineer. Spesialisasi OpenStack, Kubernetes, Ansible, dan AWS. Saat ini di PT Boer Technology. Lihat CV dan proyek saya.",
    url: siteUrl,
    siteName: "Najwan Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Najwan Octavian Gerrard — Cloud & DevOps Engineer",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Najwan Octavian Gerrard — Cloud & DevOps Engineer",
    description:
      "Jr. Cloud Infrastructure & DevOps Engineer. Spesialisasi OpenStack, Kubernetes, Ansible, dan AWS. Saat ini di PT Boer Technology. Lihat CV dan proyek saya.",
    images: ["/opengraph-image"],
  },
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
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
