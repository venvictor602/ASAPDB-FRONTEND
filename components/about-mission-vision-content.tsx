"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const missionPoints = [
  "Ensure maximum database uptime",
  "Prevent issues before they happen",
  "Deliver dependable, expert DBA support",
  "Protect business-critical data",
];

const visionPoints = [
  "Set global standards for DBA excellence",
  "Support modern, cloud-first infrastructures",
  "Enable businesses to scale with confidence",
  "Build long-term technology partnerships",
];

export function AboutMissionVisionContent() {
  return (
    <div className="py-24 space-y-32 bg-white overflow-hidden">
      {/* Our Mission */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8"
          >
            <h2 className="text-2xl font-bold text-[#48484A]">Our Mission</h2>
            <p className="text-sm font-normal text-[#48484A] leading-relaxed">
              To help businesses run faster, safer, and more reliably by
              providing expert database management, proactive monitoring, and
              secure infrastructure support. We exist to remove the complexity
              of database operations so teams can focus on building products,
              serving customers, and growing their business. Through continuous
              optimization and hands-on expertise, we ensure data systems remain
              available, secure, and scalable at all times.
            </p>
            <ul className="space-y-4">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#48484A]" />
                  <span className="text-sm font-normal text-[#48484A]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[400px]"
          >
            <div className="h-full w-full relative rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/assets/Mission.png"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="container mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[400px] order-2 lg:order-1"
          >
            <div className="h-full w-full relative rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/assets/Vision.png"
                alt="Our Vision"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8 order-1 lg:order-2"
          >
            <h2 className="text-2xl font-bold text-[#48484A]">Our Vision</h2>
            <p className="text-sm font-normal text-[#48484A] leading-relaxed">
              To become the most trusted database management partner for growing
              and enterprise-level organizations worldwide. We envision a future
              where businesses never worry about database downtime, data loss,
              or performance issues. ASAP DBA aims to set the standard for
              proactive database care, helping organizations scale confidently
              in a cloud-driven world.
            </p>
            <ul className="space-y-4">
              {visionPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#48484A]" />
                  <span className="text-sm font-normal text-[#48484A]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
