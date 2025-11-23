"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function DatabaseManagementSection() {
  return (
    <section
      className="py-[20px] sm:py-[35px] md:py-[50px] lg:py-[64px] xl:py-[80px]"
      style={{ backgroundColor: "var(--section-bg-secondary)" }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-[32px]">
        {/* Top Section */}
        <div className="space-y-[32px]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-[10px] rounded-full py-[8px] px-[12px]"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--border-color)",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          >
            <Image
              src="/assets/Asap-Mini Logo.svg"
              alt="ASAP DBA Logo"
              width={14}
              height={14}
              className="w-full max-w-[14px] h-auto object-contain"
              loading="lazy"
            />
            <span
              className="text-sm sm:text-base font-normal"
              style={{ color: "var(--text-secondary)" }}
            >
              Expert Support · 24/7 Reliability
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[32px] md:text-[39px] font-semibold leading-[40px] md:leading-[48px]"
            style={{ color: "var(--text-primary)" }}
          >
            Database Management Made Simple for Your Entire Organization
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[14px] md:text-[16px] font-normal leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            From startups to Fortune 500 companies, we simplify database
            management for everyone. No technical jargon, no headaches—just
            reliable solutions that scale with your business.
          </motion.p>

          {/* CTA Button */}
          <Link href="/services">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer px-[20px] py-[10px] rounded-[8px] font-semibold text-[14px] sm:text-base flex items-center gap-2 transition-colors"
              style={{
                backgroundColor: "var(--button-primary-bg)",
                color: "var(--button-primary-text)",
              }}
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[16px] lg:gap-[20px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full space-y-4 sm:space-y-5 rounded-[16px] p-[10px] transition-colors"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--card-border)",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
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
              <h3
                className="text-base sm:text-lg md:text-[20px] font-semibold leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Performance Optimization
              </h3>
              <p
                className="text-sm sm:text-[15px] md:text-base font-normal leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We dig into your database to find what&apos;s causing slowdowns,
                then fix it. Faster queries, better performance, happier users.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full space-y-4 sm:space-y-5 rounded-[16px] p-[10px] transition-colors"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--card-border)",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
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
              <h3
                className="text-base sm:text-lg md:text-[20px] font-semibold leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                24/7 Monitoring & Support
              </h3>
              <p
                className="text-sm sm:text-[15px] md:text-base font-normal leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We&apos;re always watching. When something goes wrong, we know
                about it immediately and jump in to fix it—even at 2 AM.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full space-y-4 sm:space-y-5 rounded-[16px] p-[10px] transition-colors"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--card-border)",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
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
              <h3
                className="text-base sm:text-lg md:text-[20px] font-semibold leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Automated Backups & Recovery
              </h3>
              <p
                className="text-sm sm:text-[15px] md:text-base font-normal leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Your data is backed up automatically, and we can restore it fast
                if disaster strikes. Business continuity isn&apos;t
                optional—it&apos;s essential.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="w-full space-y-4 sm:space-y-5 rounded-[16px] p-[10px] transition-colors"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--card-border)",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
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
              <h3
                className="text-base sm:text-lg md:text-[20px] font-semibold leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Cloud Database Management
              </h3>
              <p
                className="text-sm sm:text-[15px] md:text-base font-normal leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Whether you&apos;re on AWS, Azure, or Google Cloud, we&apos;ve
                got you covered. We handle migrations, setup, and day-to-day
                management across all major platforms.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
