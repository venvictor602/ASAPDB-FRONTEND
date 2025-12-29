"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Search } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a1628] flex flex-col">
      <Navigation backgroundColor="white" />

      {/* Main Content */}
      <main className="grow relative overflow-hidden">
        {/* Dark Background with Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom, #0a1628 0%, #1e293b 50%, #0f172a 100%),
              url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%232563eb' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")
            `,
            backgroundSize: "cover, 80px 80px",
            backgroundPosition: "center",
          }}
        />

        {/* Glowing dots effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-30 blur-sm animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-20 blur-sm animate-pulse delay-1000" />
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-25 blur-sm animate-pulse delay-2000" />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-[80px] sm:py-[100px] lg:py-[120px]">
          <div className="text-center space-y-8">
            {/* 404 Number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <h1 className="text-[120px] sm:text-[150px] md:text-[180px] lg:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 leading-none">
                404
              </h1>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-white leading-tight"
            >
              Page Not Found
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved. Let&apos;s get you back on track.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/20"
                >
                  <Home className="w-5 h-5" />
                  Go Home
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-semibold text-base hover:bg-white/20 transition-colors"
                >
                  <Search className="w-5 h-5" />
                  Explore Services
                </motion.button>
              </Link>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-12 border-t border-white/10"
            >
              <p className="text-white/60 text-sm mb-4">Quick Links:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/blog"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/services"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="/career"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  Career
                </Link>
                <Link
                  href="/projects"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
