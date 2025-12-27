"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Cloud,
  ArrowRight,
} from "lucide-react";

const bulletPoints = [
  { icon: Zap, text: "24/7 proactive monitoring & alerting" },
  { icon: CheckCircle2, text: "Zero-downtime migrations & upgrades" },
  { icon: ShieldCheck, text: "Expert DBAs across cloud & on-prem" },
  { icon: Cloud, text: "Secure backups & disaster recovery" },
];

export function ExpertiseCoreValue() {
  return (
    <section className="py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black leading-tight">
                Your databases deserve more than basic support
              </h2>

              <p className="text-[16px] sm:text-[18px] font-normal text-gray-700 leading-relaxed">
                ASAP DBA helps businesses stay online, secure, and fast by
                managing their databases with expert care. We don&apos;t wait
                for problems to happen — we prevent them through proactive
                monitoring, performance optimization, and best-practice
                security.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <h3 className="text-[20px] sm:text-[24px] font-semibold text-black">
                What We Deliver
              </h3>
              <ul className="grid gap-4">
                {bulletPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <point.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-[16px] sm:text-[18px] font-normal text-gray-700 leading-relaxed pt-1">
                      {point.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-lg font-semibold text-base transition-all shadow-lg shadow-blue-500/20 group flex items-center gap-2 w-fit"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/assets/Why-choose-us.png"
              alt="Expertise Core Value"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
