"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What database platforms do you support?",
    answer:
      "We work with all the major database platforms—PostgreSQL, MySQL, MongoDB, Redis, Oracle, SQL Server, and cloud databases on AWS RDS, Google Cloud SQL, and Azure Database. Whether you're using relational or NoSQL databases, we've got the expertise to help.",
  },
  {
    question: "How quickly can you respond to database issues?",
    answer:
      "We monitor your databases 24/7, so we know when something's wrong immediately. For critical issues, we respond within 15 minutes. Non-critical issues get handled within 2-4 hours during business hours. Response times depend on your service tier.",
  },
  {
    question: "Do you handle database migrations?",
    answer:
      "Absolutely. We handle all kinds of migrations—upgrading database versions, moving between platforms (like MySQL to PostgreSQL), and migrating to the cloud. We plan everything carefully, test thoroughly, and execute with minimal downtime. Your data stays safe throughout.",
  },
  {
    question: "What security measures do you implement?",
    answer:
      "Security is a top priority. We use encryption for data at rest and in transit, run regular security audits, implement strict access controls, and maintain automated backups. We also help you meet compliance requirements like SOC 2, GDPR, and HIPAA. Every database access is logged and monitored.",
  },
  {
    question: "How do you handle database backups?",
    answer:
      "We set up automated daily backups with point-in-time recovery, so you can restore to any moment you need. Backups are stored in multiple secure locations, and we customize retention policies based on your requirements. We regularly test our restore procedures to make sure everything works when you need it.",
  },
  {
    question: "Can you help optimize slow queries?",
    answer:
      "Yes, that's one of our specialties. We analyze your queries, find what's causing the slowdown, and fix it through better indexing, query optimization, and database tuning. You'll get detailed reports showing what we found and how we improved it, plus recommendations for keeping things fast.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-[20px] sm:py-[35px] md:py-[50px] lg:py-[64px] xl:py-[80px]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4"
          >
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-semibold text-black leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[64px]">
              Frequently Asked Questions
            </h2>
            <p className="text-black text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
              Find answers to common questions about our database management
              services
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-[#E8E8E8] rounded-[16px] overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-black text-base sm:text-lg md:text-xl font-semibold leading-relaxed pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-black shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                    <p className="text-black text-sm sm:text-base font-normal leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12 sm:mt-16"
          >
            <p className="text-black text-sm sm:text-base mb-4 sm:mb-6">
              Still have questions?
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2563eb] cursor-pointer text-white px-6 py-3 sm:px-8 sm:py-4 rounded-[8px] font-semibold text-sm sm:text-base hover:bg-[#1d4ed8] transition-colors"
              >
                Contact Our Team
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
