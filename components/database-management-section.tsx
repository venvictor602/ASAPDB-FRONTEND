"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function DatabaseManagementSection() {
  return (
    <section className="bg-[#101010] py-[20px] sm:py-[30px] md:py-[40px] lg:py-[64px]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-[32px]">
        {/* Top Section */}
        <div className="space-y-[32px]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-[10px] bg-[#262626] border border-[#484848] rounded-full py-[8px] px-[12px]"
          >
            <Image
              src="/assets/Asap-Mini Logo.svg"
              alt="ASAP DBA Logo"
              width={14}
              height={14}
              className="w-full max-w-[14px] h-auto object-contain"
              loading="lazy"
            />
            <span className="text-[#D8D8D8] text-sm sm:text-base font-normal">
              Expert Support · 24/7 Reliability
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[32px] md:text-[39px] font-semibold text-white leading-[40px] md:leading-[48px]"
          >
            Database Management Made Simple for Your Entire Organization
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-[14px] md:text-[16px] font-normal leading-relaxed"
          >
            Whether you&apos;re a growing business or an established enterprise,
            we provide clear, reliable, and scalable database solutions that
            remove complexity and boost performance.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#131313] px-[20px] py-[10px] rounded-[8px] font-semibold text-[14px] sm:text-base flex items-center gap-2 hover:bg-gray-100 transition-colors"
          >
            Learn More
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[16px] lg:gap-[20px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#262626] w-full border border-[#48484A] space-y-4 sm:space-y-5 rounded-[16px] p-[10px] hover:bg-[#222222] transition-colors"
          >
            <Image
              src="/assets/Network Configurations Icon.svg"
              alt="Performance Optimization icon"
              width={60}
              height={60}
              className="w-full h-auto object-contain max-w-[50px] sm:max-w-[60px]"
              loading="lazy"
            />
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-white text-base sm:text-lg md:text-[20px] font-semibold leading-tight">
                Performance Optimization
              </h3>
              <p className="text-[#A1A1A1] text-sm sm:text-[15px] md:text-base font-normal leading-relaxed">
                Identify slow queries, fix bottlenecks, and fine-tune your
                database for maximum speed and stability.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#262626] w-full border border-[#48484A] space-y-4 sm:space-y-5 rounded-[16px] p-[10px] hover:bg-[#222222] transition-colors"
          >
            <Image
              src="/assets/div.framer-1kce91c.svg"
              alt="24/7 Monitoring & Support icon"
              width={60}
              height={60}
              className="w-full h-auto object-contain max-w-[50px] sm:max-w-[60px]"
              loading="lazy"
            />
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-white text-base sm:text-lg md:text-[20px] font-semibold leading-tight">
                24/7 Monitoring & Support
              </h3>
              <p className="text-[#A1A1A1] text-sm sm:text-[15px] md:text-base font-normal leading-relaxed">
                Real-time health checks, alerts, and expert intervention the
                moment an issue arises.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#262626] w-full border border-[#48484A] space-y-4 sm:space-y-5 rounded-[16px] p-[10px] hover:bg-[#222222] transition-colors"
          >
            <Image
              src="/assets/div.framer-o1njyo.svg"
              alt="Automated Backups & Recovery icon"
              width={60}
              height={60}
              className="w-full h-auto object-contain max-w-[50px] sm:max-w-[60px]"
              loading="lazy"
            />
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-white text-base sm:text-lg md:text-[20px] font-semibold leading-tight">
                Automated Backups & Recovery
              </h3>
              <p className="text-[#A1A1A1] text-sm sm:text-[15px] md:text-base font-normal leading-relaxed">
                Scheduled backups, disaster recovery planning, and rapid
                restoration to keep your business running.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-[#262626] w-full border border-[#48484A] space-y-4 sm:space-y-5 rounded-[16px] p-[10px] hover:bg-[#222222] transition-colors"
          >
            <Image
              src="/assets/Container Settings Icon.svg"
              alt="Cloud Database Management icon"
              width={60}
              height={60}
              className="w-full h-auto object-contain max-w-[50px] sm:max-w-[60px]"
              loading="lazy"
            />
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-white text-base sm:text-lg md:text-[20px] font-semibold leading-tight">
                Cloud Database Management
              </h3>
              <p className="text-[#A1A1A1] text-sm sm:text-[15px] md:text-base font-normal leading-relaxed">
                Full support for AWS, Azure, and Google Cloud — including
                migrations, setup, and daily operations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
