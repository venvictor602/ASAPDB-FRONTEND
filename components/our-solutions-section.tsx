"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    title: "Performance Optimization",
    description:
      "Identify slow queries, fix bottlenecks, and fine-tune your database for maximum speed and stability.",
    icon: "grid",
    href: "/solutions/performance-optimization",
  },
  {
    title: "24/7 Monitoring & Support",
    description:
      "Real-time health checks, alerts, and expert intervention the moment an issue arises.",
    icon: "cross",
    href: "/solutions/monitoring-support",
  },
  {
    title: "Automated Backups & Recovery",
    description:
      "Scheduled backups, disaster recovery planning, and rapid restoration to keep your business running.",
    icon: "zigzag",
    href: "/solutions/backups-recovery",
  },
  {
    title: "Cloud Database Management",
    description:
      "Full support for AWS, Azure, and Google Cloud — including migrations, setup, and daily operations.",
    icon: "diamonds",
    href: "/solutions/cloud-management",
  },
];

// Dot Pattern Icons matching the image
const GridIcon = () => (
  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="4" height="4" rx="1" fill="#60A5FA" />
      <rect x="8" y="2" width="4" height="4" rx="1" fill="#60A5FA" />
      <rect x="14" y="2" width="4" height="4" rx="1" fill="#60A5FA" />
      <rect x="2" y="8" width="4" height="4" rx="1" fill="#60A5FA" />
      <rect x="8" y="8" width="4" height="4" rx="1" fill="#60A5FA" />
      <rect x="14" y="8" width="4" height="4" rx="1" fill="#60A5FA" />
      <rect x="2" y="14" width="4" height="4" rx="1" fill="#60A5FA" />
      <rect x="8" y="14" width="4" height="4" rx="1" fill="#60A5FA" />
      <rect x="14" y="14" width="4" height="4" rx="1" fill="#60A5FA" />
      <rect
        x="2"
        y="20"
        width="4"
        height="4"
        rx="1"
        fill="#60A5FA"
        opacity="0.4"
      />
      <rect
        x="8"
        y="20"
        width="4"
        height="4"
        rx="1"
        fill="#60A5FA"
        opacity="0.4"
      />
      <rect
        x="14"
        y="20"
        width="4"
        height="4"
        rx="1"
        fill="#60A5FA"
        opacity="0.4"
      />
    </svg>
  </div>
);

const CrossIcon = () => (
  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="10"
        y="2"
        width="4"
        height="4"
        rx="1"
        fill="#F87171"
        opacity="0.4"
      />
      <rect x="10" y="8" width="4" height="4" rx="1" fill="#F87171" />
      <rect x="10" y="14" width="4" height="4" rx="1" fill="#F87171" />
      <rect
        x="10"
        y="20"
        width="4"
        height="4"
        rx="1"
        fill="#F87171"
        opacity="0.4"
      />
      <rect x="4" y="11" width="4" height="4" rx="1" fill="#F87171" />
      <rect x="16" y="11" width="4" height="4" rx="1" fill="#F87171" />
    </svg>
  </div>
);

const ZigzagIcon = () => (
  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="6" width="4" height="4" rx="1" fill="#F472B6" />
      <rect x="9" y="11" width="4" height="4" rx="1" fill="#F472B6" />
      <rect x="14" y="16" width="4" height="4" rx="1" fill="#F472B6" />
      <rect x="19" y="11" width="4" height="4" rx="1" fill="#F472B6" />
      <rect x="14" y="6" width="4" height="4" rx="1" fill="#F472B6" />
      <rect x="9" y="2" width="4" height="4" rx="1" fill="#F472B6" />
    </svg>
  </div>
);

const DiamondsIcon = () => (
  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="10" y="4" width="4" height="4" rx="1" fill="#34D399" />
      <rect x="4" y="10" width="4" height="4" rx="1" fill="#34D399" />
      <rect x="16" y="10" width="4" height="4" rx="1" fill="#34D399" />
      <rect x="10" y="16" width="4" height="4" rx="1" fill="#34D399" />
      <rect
        x="10"
        y="10"
        width="4"
        height="4"
        rx="1"
        fill="#34D399"
        opacity="0.3"
      />
    </svg>
  </div>
);

const getIcon = (iconType: string) => {
  switch (iconType) {
    case "grid":
      return <GridIcon />;
    case "cross":
      return <CrossIcon />;
    case "zigzag":
      return <ZigzagIcon />;
    case "diamonds":
      return <DiamondsIcon />;
    default:
      return <GridIcon />;
  }
};

export function OurSolutionsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0A0D17] overflow-hidden">
      {/* Background Mesh/Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="container mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <span className="bg-white/10 backdrop-blur-md text-white/80 px-4 py-1.5 rounded-full text-sm font-medium border border-white/10">
                Expert Support · 24/7 Reliability
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Our Solutions
            </h2>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
              Accelerate your transformation and achieve the business outcomes
              that will modernize and scale your business to success.
            </p>

            <Link href="/solutions">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-[#3B82F6] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#2563EB] transition-all shadow-lg shadow-blue-500/20"
              >
                Learn more
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Grid - Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <div className="space-y-6">
              {solutions.slice(0, 2).map((solution, index) => (
                <SolutionCard key={index} solution={solution} index={index} />
              ))}
            </div>
            <div className="space-y-6 md:mt-12">
              {solutions.slice(2, 4).map((solution, index) => (
                <SolutionCard
                  key={index + 2}
                  solution={solution}
                  index={index + 2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SolutionCardProps {
  solution: {
    title: string;
    description: string;
    icon: string;
    href: string;
  };
  index: number;
}

function SolutionCard({ solution, index }: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-[#131926]/60 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300"
    >
      <div className="mb-6">{getIcon(solution.icon)}</div>

      <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>

      <p className="text-white/60 leading-relaxed mb-6">
        {solution.description}
      </p>

      <Link
        href={solution.href}
        className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors group/link"
      >
        View full case study
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
