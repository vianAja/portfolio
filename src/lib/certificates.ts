export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
  pdfFile: string;
  link?: string;
  featured?: boolean;
}

export const certificates: Certificate[] = [
  {
    id: "aws-cp",
    title: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    year: "2024",
    image: "/assets/sertif/aws-certificate/aws-certified-cloud-practitioner.png",
    pdfFile: "/api/cert/aws-cp",
    link: "https://www.credly.com/badges/2f2a6e67-4390-4bed-b902-cd24c4f74bca/public_url",
    featured: true,
  },
  {
    id: "aws-genai",
    title: "AWS Educate Introduction to Generative AI",
    issuer: "AWS",
    year: "2024",
    image: "/assets/sertif/aws-certificate/aws-educate-introduction-to-generative-ai-training-.png",
    pdfFile: "/api/cert/aws-genai",
    link: "https://www.credly.com/badges/a6f10957-1a80-41a4-9075-b05f930139e8/public_url",
  },
  {
    id: "aws-restart",
    title: "AWS re/Start Graduate",
    issuer: "AWS",
    year: "2024",
    image: "/assets/sertif/aws-certificate/aws-re-start-graduate.png",
    pdfFile: "/api/cert/aws-restart",
    link: "https://www.credly.com/badges/8bdf060c-bbf9-4b55-8aad-11fab80a7c71/public_url",
    featured: true,
  },
  {
    id: "lf-lfs101",
    title: "Introduction to Linux LFS101",
    issuer: "Linux Foundation",
    year: "2024",
    image: "/assets/sertif/linux-foundations/LFS101.webp",
    pdfFile: "/api/cert/lf-lfs101",
    link: "https://www.credly.com/badges/481cc9c8-1400-4243-aa12-626073039df9/public_url",
  },
  {
    id: "lf-lfel1012",
    title: "Secure AI/ML-Driven Software Development (LFEL1012)",
    issuer: "Linux Foundation",
    year: "2024",
    image: "/assets/sertif/linux-foundations/LFEL1012.webp",
    pdfFile: "/api/cert/lf-lfel1012",
    link: "https://www.credly.com/badges/e12b0066-1408-4ebd-9399-0fa815cc8474/public_url",
    featured: true,
  },
  {
    id: "rt-ccep",
    title: "Certified Cybersecurity Educator Professional (CCEP)",
    issuer: "Redteam Leaders",
    year: "2024",
    image: "/assets/sertif/redteam-leaders/certified CCEP.png",
    pdfFile: "/api/cert/rt-ccep",
    link: "https://courses.redteamleaders.com/exam-completion/17bd590f7a50921c",
  },
  {
    id: "rt-crtom",
    title: "Certified Red Team Operations Manager (CRTOM)",
    issuer: "Redteam Leaders",
    year: "2024",
    image: "/assets/sertif/redteam-leaders/certified CRTOM.png",
    pdfFile: "/api/cert/rt-crtom",
    link: "https://courses.redteamleaders.com/exam-completion/4e479657e2f8c7d1",
    featured: true,
  },
  {
    id: "rt-ctiga",
    title: "Certified Threat Intelligence & Governance Analyst (CTIGA)",
    issuer: "Redteam Leaders",
    year: "2024",
    image: "/assets/sertif/redteam-leaders/certified CTIGA.png",
    pdfFile: "/api/cert/rt-ctiga",
    link: "https://courses.redteamleaders.com/exam-completion/b12f1d747a75307c",
  },
  ...[
    {
      title: "Linux System Administration",
      id: "8aa79917-b598-48bc-af9f-d083e75ad882",
      img: "Certificate Fundamental Linux Adinusa",
      apiId: "adi-linux",
    },
    {
      title: "Monitoring with Prometheus",
      id: "6da87b25-9b62-4480-ab81-a33dca5fca01",
      img: "Certificate Prometheus Adinusa",
      apiId: "adi-prom",
    },
    {
      title: "Getting Started with ELK Stack",
      id: "b11dc352-e3c0-441a-9fb3-589e46ea1f51",
      img: "Certificate ELK Stack Adinusa",
      apiId: "adi-elk",
    },
    {
      title: "GitLab Administration",
      id: "312b560b-411d-4732-a277-1af3552eddbe",
      img: "Certificate GitLab Adinusa",
      apiId: "adi-git",
    },
    {
      title: "Kubernetes Cluster Administration",
      id: "8c642d16-5d8d-4240-ae04-e1676dd3f54f",
      img: "Certificate Kubernetes Adinusa",
      apiId: "adi-kube",
    },
    {
      title: "OpenStack Administration Multi Node",
      id: "b418e5a9-14a6-4dfb-af80-a1175979559d",
      img: "Certificate OpenStack Adinusa",
      apiId: "adi-open",
    },
    {
      title: "Ceph Administration",
      id: "b5e0e2b8-7661-4c13-b394-3cedc5f37f14",
      img: "Certificate Ceph Adinusa",
      apiId: "adi-ceph",
    },
    {
      title: "Automation with Ansible",
      id: "0bdb48d3-7594-4257-93e8-5727703799c1",
      img: "Certificate Automation with Ansible Adinusa",
      apiId: "adi-ans",
    },
    {
      title: "Docker Fundamental",
      id: "3e1ace76-c1df-4f47-81e6-88cf6f5812f2",
      img: "Certificate Docker Fundamental Adinusa",
      apiId: "adi-dock",
    },
  ].map((cert) => ({
    id: cert.apiId,
    title: cert.title,
    issuer: "Adinusa",
    year: "2024",
    image: `/assets/sertif/Adinusa/${cert.img}.webp`,
    pdfFile: `/api/cert/${cert.apiId}`,
    link: `https://adinusa.id/course/publisher/show/${cert.id}`,
    featured: cert.apiId === "adi-kube" || cert.apiId === "adi-ans",
  })),
  ...[
    {
      title: "Mengenal Model Regresi Linear Pada Python",
      img: "Certificate Mengenal Model Regresi Linear Pada Python",
      path: "DQLABMDNP1KRFCWK",
      apiId: "dq-regresi",
    },
    {
      title: "Pengantar Machine Learning dengan Python",
      img: "Certificate Pengantar Machine Learning dengan Python",
      path: "DQLABPMLP1QPEQBP",
      apiId: "dq-ml",
    },
    {
      title: "Exploratory Data Analysis with Python for Beginner",
      img: "Certificate Exploratory Data Analysis with Python for Beginner",
      path: "DQLABINTP1SQDRVI/NONTRACK",
      apiId: "dq-eda",
    },
  ].map((cert) => ({
    id: cert.apiId,
    title: cert.title,
    issuer: "DqLab",
    year: "2024",
    image: `/assets/sertif/DqLabs/${cert.img}.webp`,
    pdfFile: `/api/cert/${cert.apiId}`,
    link: `https://academy.dqlab.id/Certificate_check/result/${cert.path}#mycertificate`,
  })),
  {
    id: "lks-2025",
    title: "Cloud Computing - Juara 2 Kabupaten",
    issuer: "LKS Provinsi Jawa Tengah",
    year: "2025",
    image: "/assets/sertif/lks-cloud-computing/Sertifikat LKS Cloud Computing 2025 Kab Kendal Juara 2.webp",
    pdfFile: "/api/cert/lks-2025",
    featured: true,
  },
  {
    id: "lks-2024",
    title: "Cloud Computing - Peserta Provinsi",
    issuer: "LKS Provinsi Jawa Tengah",
    year: "2024",
    image: "/assets/sertif/lks-cloud-computing/Sertifikat Peserta LKS Cloud Computing Provinsi 2024.webp",
    pdfFile: "/api/cert/lks-2024",
  },
];

export const certificateIssuerColors: Record<string, string> = {
  AWS: "text-orange-400",
  Adinusa: "text-sky-400",
  "Linux Foundation": "text-yellow-400",
  "LKS Provinsi Jawa Tengah": "text-green-400",
  "Redteam Leaders": "text-red-400",
  DqLab: "text-violet-400",
};

export const featuredCertificates = certificates.filter((certificate) => certificate.featured);
