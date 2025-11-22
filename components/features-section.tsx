"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FeaturesSection() {
  return (
    <section className="bg-slate-100 py-[20px] sm:py-[30px] md:py-[40px] lg:py-[50px]">
      <div className="container mx-auto max-w-7xl px-4 lg:px-0 space-y-[32px]">
        <div className="text-center space-y-[32px]">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 sm:mb-6"
          >
            <span className="text-[#48484A] font-semibold text-[20px] bg-white p-[10px] sm:p-[15px] rounded-full">
              Built for reliability
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] xl:text-[56px] font-normal text-[#48484A] leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[70px] max-w-[650px] mx-auto"
          >
            Don&apos;t let database issues slow down your business
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[16px] p-[10px] sm:p-[20px] shadow-sm hover:shadow-md transition-shadow space-y-[32px]"
          >
            <div className="">
              <Image
                src="/assets/K8s Operator.png"
                alt="Proactive Monitoring"
                width={100}
                height={100}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className=" space-y-[16px]">
              <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#48484A] leading-[32px]">
                Proactive Monitoring
              </h3>
              <p className="text-[#48484A] text-[14px] sm:text-[16px] font-normal leading-[24px]">
                Real-time insights, alerts, and automated checks ensure your
                databases stay healthy 24/7.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[16px] p-[10px] sm:p-[20px] shadow-sm hover:shadow-md transition-shadow space-y-[32px]"
          >
            <div className="">
              <Image
                src="/assets/K8s Operator-2.png"
                alt="Proactive Monitoring"
                width={100}
                height={100}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className=" space-y-[16px]">
              <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#48484A] leading-[32px]">
                Performance Optimization
              </h3>
              <p className="text-[#48484A] text-[14px] sm:text-[16px] font-normal leading-[24px]">
                Identify bottlenecks, tune queries, and scale effortlessly for
                peak performance.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[16px] p-[10px] sm:p-[20px] shadow-sm hover:shadow-md transition-shadow space-y-[32px]"
          >
            <div className="">
              <Image
                src="/assets/Developer Tools.png"
                alt="Proactive Monitoring"
                width={100}
                height={100}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className=" space-y-[16px]">
              <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#48484A] leading-[32px]">
                Enterprise-Grade Security
              </h3>
              <p className="text-[#48484A] text-[14px] sm:text-[16px] font-normal leading-[24px]">
                Continuous backups, encryption, and threat protection for
                complete peace of mind.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
