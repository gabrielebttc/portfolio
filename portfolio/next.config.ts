import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  watchOptions: {
    usePolling: true,
    interval: 500,
  },
};

export default nextConfig;
