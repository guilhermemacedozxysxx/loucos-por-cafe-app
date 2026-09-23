import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "z58avo7iib.ufs.sh",
      },
    ],
  },
};

export default nextConfig;