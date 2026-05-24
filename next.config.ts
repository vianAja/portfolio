import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "drive.google.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "ant.ncc.asia" },
      { protocol: "https", hostname: "btech.id" },
      { protocol: "https", hostname: "user-images.githubusercontent.com" },
      { protocol: "https", hostname: "miro.medium.com" },
      { protocol: "https", hostname: "juststickers.in" },
    ],
  },
};

export default nextConfig;
