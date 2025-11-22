"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="bg-slate-100 py-[40px] sm:py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-semibold text-[#48484A] text-center mb-[20px] sm:mb-[30px] md:mb-[40px] leading-[30px] sm:leading-[36px] md:leading-[40px] lg:leading-[48px]"
          >
            Ready to take ASAP DBA for a spin?
          </motion.h2>

          {/* CTA Cards */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Schedule a Call Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-[16px] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <h3 className="text-[#48484A] text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                Schedule a call
              </h3>
              <p className="text-[#606060] text-sm sm:text-base font-normal leading-relaxed mb-6 sm:mb-8 flex-grow">
                We are gladly helping companies to get started.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#101010] text-white px-6 py-3 rounded-[8px] font-semibold text-sm sm:text-base hover:bg-[#262626] transition-colors inline-flex items-center justify-center gap-2"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Browse Services Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-[16px] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <h3 className="text-[#48484A] text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                Browse our Services
              </h3>
              <p className="text-[#606060] text-sm sm:text-base font-normal leading-relaxed mb-6 sm:mb-8 flex-grow">
                We have made it as easy as possible to try ASAP DBA
              </p>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#101010] text-white px-6 py-3 rounded-[8px] font-semibold text-sm sm:text-base hover:bg-[#262626] transition-colors inline-flex items-center justify-center gap-2"
                >
                  Our Services
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
