import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ajgudjvdtsqccvknmeng.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
    qualities: [75, 85, 90],
  },
  // Production optimizations
  productionBrowserSourceMaps: false, // Disable source maps in production
  compress: true, // Enable compression
  poweredByHeader: false, // Remove X-Powered-By header
};

export default nextConfig;
