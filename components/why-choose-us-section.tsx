"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Certified DBA experts",
  "Fast response time",
  "Scalable solutions for any business size",
  "Transparent communication and reporting",
];

// Technology logos - using available ones and placeholders for others
const technologies = [
  { name: "MySQL", src: null, placeholder: "MySQL" },
  { name: "PostgreSQL", src: null, placeholder: "PostgreSQL" },
  { name: "Redis", src: null, placeholder: "Redis" },
  { name: "MongoDB", src: null, placeholder: "MongoDB" },
  { name: "AWS", src: "/assets/Aws.svg", placeholder: null },
  { name: "Azure", src: "/assets/Azure.svg", placeholder: null },
  { name: "Google Cloud", src: "/assets/Google Cloud.svg", placeholder: null },
  { name: "Oracle", src: "/assets/Oracle.svg", placeholder: null },
  { name: "Kubernetes", src: null, placeholder: "K8s" },
  { name: "Docker", src: null, placeholder: "Docker" },
  { name: "Python", src: null, placeholder: "Python" },
  { name: "Node.js", src: null, placeholder: "Node" },
  { name: "Java", src: null, placeholder: "Java" },
  { name: "Ruby", src: null, placeholder: "Ruby" },
  { name: "Go", src: null, placeholder: "Go" },
  { name: ".NET", src: null, placeholder: ".NET" },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-slate-100 py-[40px] sm:py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Heading */}
            <h2 className="text-[30px] sm:text-[35px] md:text-[40px] font-semibold text-[#1C1819] leading-[40px] sm:leading-[48px] md:leading-[56px]">
              Why Choose Us
            </h2>

            {/* Description */}
            <p className="text-[14px] md:text-[16px] font-normal text-[#48484A] leading-[24px] sm:leading-[28px] md:leading-[32px]">
              We are not just service providers—we&apos;re long-term partners
              invested in your growth.
            </p>

            {/* Benefits List */}
            <ul className="space-y-[12px] sm:space-y-[16px]">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-[14px] md:text-[16px] font-normal text-[#4F4F4F] leading-[24px] sm:leading-[28px]">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Technology Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="">
              <Image
                src="/assets/Figure → tech-pile-logos-min-1024x770.png.png"
                alt="Why Choose Us"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
