"use client";

import { motion } from "framer-motion";
import { FileText, MessageSquare, Users, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Apply",
    description: "Submit your application and resume through our portal or email.",
  },
  {
    icon: MessageSquare,
    title: "Initial Screening",
    description: "We'll review your application and may reach out for a brief phone call.",
  },
  {
    icon: Users,
    title: "Interview",
    description: "Meet with our team to discuss your experience and learn about the role.",
  },
  {
    icon: CheckCircle2,
    title: "Offer",
    description: "If it's a good fit, we'll extend an offer and welcome you to the team!",
  },
];

export function CareerApplicationProcess() {
  return (
    <section className="py-[60px] sm:py-[80px] md:py-[100px] bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black leading-tight mb-4">
            Application Process
          </h2>
          <p className="text-[18px] text-gray-700 max-w-3xl mx-auto">
            Our hiring process is straightforward and designed to help us get to
            know each other.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-[20px] font-bold text-black mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[15px] sm:text-[16px] text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 z-0" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

