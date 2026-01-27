import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false, // Disable react compiler to avoid SWC issues
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"],
    } : false,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
