"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="bg-slate-100 py-[40px] sm:py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-semibold text-[#48484A] text-start mb-[20px] sm:mb-[30px] md:mb-[40px] leading-[30px] sm:leading-[36px] md:leading-[40px] lg:leading-[48px]"
        >
          Ready to go for a spin?
        </motion.h2>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-0">
          {/* Schedule a Call Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white space-y-[40px] md:rounded-tl-[16px] md:rounded-bl-[16px] md:border-r border-[#E8E8E8] rounded-[16px] md:rounded-none p-[20px] sm:py-[43px] sm:px-[40px] shadow-sm hover:shadow-md transition-shadow flex flex-col w-full"
          >
            <div className=" space-y-[20px]">
              <h3 className="text-[#101010] text-xl sm:text-2xl font-semibold">
                Schedule a call
              </h3>
              <p className="text-[#606060] text-sm sm:text-base font-normal leading-relaxed">
                We are gladly helping companies to get started.
              </p>
            </div>
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#101010] cursor-pointer text-white p-[10px] rounded-[8px] font-semibold text-sm sm:text-base hover:bg-[#262626] transition-colors inline-flex items-center justify-center gap-2"
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
            className="bg-white space-y-[40px] rounded-[16px] md:rounded-none md:rounded-tr-[16px] md:rounded-br-[16px] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col w-full"
          >
            <div className=" space-y-[20px]">
              <h3 className="text-[#101010] text-xl sm:text-2xl font-semibold">
                Browse our Services
              </h3>
              <p className="text-[#606060] text-sm sm:text-base font-normal leading-relaxed">
                We have made it as easy as possible to try ASAP DBA
              </p>
            </div>
            <Link href="/services" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#101010] cursor-pointer text-white p-[10px] rounded-[8px] font-semibold text-sm sm:text-base hover:bg-[#262626] transition-colors inline-flex items-center justify-center gap-2"
              >
                Our Services
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
