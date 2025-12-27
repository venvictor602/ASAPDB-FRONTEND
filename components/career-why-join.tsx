"use client";

import { motion } from "framer-motion";
import { Users, Target, Zap, Heart } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work with talented professionals in a supportive, inclusive environment where your ideas matter.",
  },
  {
    icon: Target,
    title: "Impact-Driven Work",
    description:
      "Make a real difference by helping businesses optimize their database infrastructure and achieve their goals.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description:
      "Stay at the forefront of technology with access to the latest tools, training, and cutting-edge projects.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description:
      "We value your well-being with flexible schedules, remote work options, and generous time off.",
  },
];

export function CareerWhyJoin() {
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
            Why Join ASAP DBA?
          </h2>
          <p className="text-[18px] text-gray-700 max-w-3xl mx-auto">
            We&apos;re building a team of exceptional professionals who are
            passionate about databases and technology.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-[20px] sm:text-[22px] font-bold text-black mb-3">
                  {value.title}
                </h3>
                <p className="text-[16px] text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

