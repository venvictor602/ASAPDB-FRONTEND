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
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/**",
      },
      // API & media assets served from the deployed domain
      {
        protocol: "https",
        hostname: "asapdb.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Production optimizations
  productionBrowserSourceMaps: false, // Disable source maps in production
  compress: true, // Enable compression
  poweredByHeader: false, // Remove X-Powered-By header
};

export default nextConfig;
