"use client";

import { motion } from "framer-motion";

export function AboutMissionVisionHero() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden bg-[#0A1635]"
      style={{
        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), 
                          radial-gradient(circle at 80% 70%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
                          url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='mesh'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.01' numOctaves='2' result='noise'/%3E%3CfeDisplacementMap in='SourceGraphic' in2='noise' scale='50' xChannelSelector='R' yChannelSelector='G'/%3E%3C/filter%3E%3C/defs%3E%3Cg filter='url(%23mesh)'%3E%3Cpath d='M0 0h1000v1000H0z' fill='none'/%3E%3Cg stroke='%233b82f6' stroke-width='0.5' stroke-opacity='0.1'%3E%3Cpath d='M0 100h1000M0 200h1000M0 300h1000M0 400h1000M0 500h1000M0 600h1000M0 700h1000M0 800h1000M0 900h1000'/%3E%3Cpath d='M100 0v1000M200 0v1000M300 0v1000M400 0v1000M500 0v1000M600 0v1000M700 0v1000M800 0v1000M900 0v1000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-12 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[20px] md:text-[30px] lg:text-[40px] font-semibold text-white mb-8 tracking-tight uppercase"
        >
          ABOUT ASAP DBA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[16px] md:text-[18px] lg:text-[20px] text-[#F5F6F7] max-w-3xl mx-auto leading-relaxed"
        >
          At ASAP DBA, our mission and vision guide everything we do—from how we
          support our clients to how we design resilient, high-performance
          database solutions.
        </motion.p>
      </div>
    </section>
  );
}
