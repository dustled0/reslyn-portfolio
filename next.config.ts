import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/reslyn-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
