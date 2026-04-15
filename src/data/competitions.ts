export interface CompetitionEntry {
  id: string;
  title: string;
  organizer: string;
  level: string;
  year: string;
  result: string;
  description: string;
  skills: string[];
  certificateUrl?: string;
}

export const competitions: CompetitionEntry[] = [
  {
    id: "lks-cloud-2025-kendal",
    title: "LKS Cloud Computing",
    organizer: "Dinas Pendidikan Kabupaten Kendal",
    level: "Regional",
    year: "2025",
    result: "2nd Place",
    description:
      "Completed hands-on cloud architecture and troubleshooting scenarios focused on reliability, networking, and secure infrastructure delivery.",
    skills: ["Cloud Architecture", "Linux", "Troubleshooting"],
    certificateUrl:
      "/assets/sertif/lks-cloud-computing/Sertifikat LKS Cloud Computing 2025 Kab Kendal Juara 2.pdf",
  },
  {
    id: "lks-cloud-2024-prov",
    title: "LKS Cloud Computing",
    organizer: "Provincial Skills Competition",
    level: "Provincial",
    year: "2024",
    result: "Participant",
    description:
      "Participated in end-to-end deployment scenarios including compute, storage, and observability tasks under strict time constraints.",
    skills: ["Kubernetes", "Monitoring", "Automation"],
    certificateUrl:
      "/assets/sertif/lks-cloud-computing/Sertifikat Peserta LKS Cloud Computing Provinsi 2024.pdf",
  },
];
