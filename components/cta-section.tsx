"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className=" py-[20px] sm:py-[35px] md:py-[50px] lg:py-[64px] xl:py-[80px]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-semibold text-black text-start mb-[20px] sm:mb-[30px] md:mb-[40px] leading-[30px] sm:leading-[36px] md:leading-[40px] lg:leading-[48px]"
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
              <h3 className="text-[#1e293b] text-xl sm:text-2xl font-semibold">
                Schedule a call
              </h3>
              <p className="text-black text-sm sm:text-base font-normal leading-relaxed">
                Let&apos;s talk about how we can help your business. Schedule a
                call and we&apos;ll discuss your database needs.
              </p>
            </div>
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#2563eb] cursor-pointer text-white p-[10px] rounded-[8px] font-semibold text-sm sm:text-base hover:bg-[#1d4ed8] transition-colors inline-flex items-center justify-center gap-2"
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
              <h3 className="text-[#1e293b] text-xl sm:text-2xl font-semibold">
                Browse our Services
              </h3>
              <p className="text-black text-sm sm:text-base font-normal leading-relaxed">
                Explore our services and see how we can help your business.
                Getting started is simple.
              </p>
            </div>
            <Link href="/services" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#2563eb] cursor-pointer text-white p-[10px] rounded-[8px] font-semibold text-sm sm:text-base hover:bg-[#1d4ed8] transition-colors inline-flex items-center justify-center gap-2"
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
