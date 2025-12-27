"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutWhyDbaHero() {
  return (
    <section className="relative py-[80px] sm:py-[100px] md:py-[120px] lg:py-[140px] overflow-hidden bg-[#0a1628]">
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

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="bg-white/10 backdrop-blur-md text-white/80 px-4 py-1.5 rounded-full text-sm font-medium border border-white/10">
              Expert Support · 24/7 Reliability
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold text-white leading-tight"
          >
            Why ASAP DBA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[18px] sm:text-[20px] md:text-[22px] text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Because your databases deserve expert care, 24/7. We combine deep
            database expertise, proactive monitoring, and enterprise-grade
            security to keep your systems fast, secure, and always available.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/20"
              >
                Speak With an Expert
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
