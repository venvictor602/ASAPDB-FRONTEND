"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ChoosingDatabaseSection() {
  return (
    <section className="bg-white py-[40px] sm:py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold text-black leading-[40px] sm:leading-[48px] md:leading-[56px] lg:leading-[64px]">
              Choosing the right database
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal text-gray-700 leading-[24px] sm:leading-[28px] md:leading-[32px]">
                Managing enterprise-class databases is complex. From selecting
                the right solution from a vast array of open and closed-source
                options to ensuring optimal performance, security, and
                scalability, the challenges are numerous. Each database system
                has its own strengths, and choosing the wrong one can lead to
                significant technical debt and operational headaches.
              </p>

              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal text-gray-700 leading-[24px] sm:leading-[28px] md:leading-[32px]">
                We specialize in NoSQL databases and understand the nuances of
                handling complex, unstructured data at scale. Our expertise
                helps enterprises make strategic decisions about their database
                infrastructure, ensuring they choose solutions that align with
                their business goals and technical requirements.
              </p>
            </div>
          </motion.div>

          {/* Right Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-[700px] lg:max-w-[800px] aspect-square">
              {/* Circular Database Diagram */}
              <Image
                src="/assets/tech-pile.png"
                alt="Database Diagram"
                width={800}
                height={800}
                className="w-full h-full object-contain"
                quality={90}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
