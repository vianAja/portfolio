import { readFileSync } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const certMappings: Record<string, string> = {
  // AWS Certificates
  "aws-cp": "/assets/sertif/aws-certificate/AWS Certified Cloud Practitioner certificate.pdf",
  "aws-genai": "/assets/sertif/aws-certificate/aws-educate-introduction-to-generative-ai-training-.png",
  "aws-restart": "/assets/sertif/aws-certificate/aws-re-start-graduate.png",
  // Linux Foundation
  "lf-lfs101": "/assets/sertif/linux-foundations/LFS101.pdf",
  "lf-lfel1012": "/assets/sertif/linux-foundations/LFEL1012.pdf",
  // Redteam Leaders
  "rt-ccep": "/assets/sertif/redteam-leaders/certified CCEP.pdf",
  "rt-crtom": "/assets/sertif/redteam-leaders/certified CRTOM.pdf",
  "rt-ctiga": "/assets/sertif/redteam-leaders/certified CTIGA.pdf",
  // LKS
  "lks-2025": "/assets/sertif/lks-cloud-computing/Sertifikat LKS Cloud Computing 2025 Kab Kendal Juara 2.pdf",
  "lks-2024": "/assets/sertif/lks-cloud-computing/Sertifikat Peserta LKS Cloud Computing Provinsi 2024.pdf",
  // Adinusa
  "adi-linux": "/assets/sertif/Adinusa/Certificate Fundamental Linux Adinusa.webp",
  "adi-prom": "/assets/sertif/Adinusa/Certificate Prometheus Adinusa.webp",
  "adi-elk": "/assets/sertif/Adinusa/Certificate ELK Stack Adinusa.webp",
  "adi-git": "/assets/sertif/Adinusa/Certificate GitLab Adinusa.webp",
  "adi-kube": "/assets/sertif/Adinusa/Certificate Kubernetes Adinusa.webp",
  "adi-open": "/assets/sertif/Adinusa/Certificate OpenStack Adinusa.webp",
  "adi-ceph": "/assets/sertif/Adinusa/Certificate Ceph Adinusa.webp",
  "adi-ans": "/assets/sertif/Adinusa/Certificate Automation with Ansible Adinusa.webp",
  "adi-dock": "/assets/sertif/Adinusa/Certificate Docker Fundamental Adinusa.webp",
  // DqLabs
  "dq-regresi": "/assets/sertif/DqLabs/Certificate Mengenal Model Regresi Linear Pada Python.pdf",
  "dq-ml": "/assets/sertif/DqLabs/Certificate Pengantar Machine Learning dengan Python.pdf",
  "dq-eda": "/assets/sertif/DqLabs/Certificate Exploratory Data Analysis with Python for Beginner.pdf",
};

export async function GET(request: Request, context: any) {
  const params = await context.params;
  const id = params?.id;

  if (!id || !certMappings[id]) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const filePath = certMappings[id];
  const fullPath = path.join(process.cwd(), "public", filePath);

  try {
    const fileBuffer = readFileSync(fullPath);
    const ext = path.extname(fullPath).toLowerCase();
    
    let contentType = "application/octet-stream";
    if (ext === ".pdf") contentType = "application/pdf";
    if (ext === ".png") contentType = "image/png";
    if (ext === ".webp") contentType = "image/webp";
    if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `inline; filename="certificate-${id}${ext}"`,
      },
    });
  } catch (error) {
    return new NextResponse("File Not Found", { status: 404 });
  }
}
