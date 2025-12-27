"use client";

import { motion } from "framer-motion";
import { benefits } from "@/lib/career-data";

export function CareerBenefits() {
  return (
    <section className="py-[60px] sm:py-[80px] md:py-[100px] bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black leading-tight mb-4">
            Benefits & Perks
          </h2>
          <p className="text-[18px] text-gray-700 max-w-3xl mx-auto">
            We offer comprehensive benefits to support your health, well-being,
            and professional growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-black mb-2">
                {benefit.title}
              </h3>
              <p className="text-[15px] sm:text-[16px] text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
