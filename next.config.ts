import type { NextConfig } from "next";
import path from "path";

interface NextConfigWithTurbopack extends NextConfig {
  turbopack?: {
    root?: string;
    [key: string]: unknown;
  };
}

const nextConfig: NextConfigWithTurbopack = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
