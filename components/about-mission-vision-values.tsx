"use client";

import { motion } from "framer-motion";
import { Headphones, Users, ShieldCheck, Handshake } from "lucide-react";

const coreValues = [
  {
    icon: Headphones,
    title: "Reliability",
    description:
      "We prioritize uptime, stability, and consistency in everything we manage.",
  },
  {
    icon: Users,
    title: "Proactivity",
    description: "We don't wait for problems—we anticipate and prevent them.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Data protection and compliance are at the core of our operations.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We work as an extension of our clients' teams, not just a service provider.",
  },
];

export function AboutMissionVisionValues() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[20px] md:text-[24px] font-semibold text-[#48484A] mb-16"
        >
          Our Core Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start text-left hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <value.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-[20px] font-semibold text-[#48484A] mb-3 leading-tight">
                {value.title}
              </h3>
              <p className="text-sm font-normal text-[#48484A] leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
