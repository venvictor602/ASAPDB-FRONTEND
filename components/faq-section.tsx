"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Link } from "lucide-react";

const faqs = [
  {
    question: "What database platforms do you support?",
    answer:
      "We support all major database platforms including PostgreSQL, MySQL, MongoDB, Redis, Oracle, SQL Server, and cloud-native databases on AWS RDS, Google Cloud SQL, and Azure Database. Our team has expertise across both relational and NoSQL databases.",
  },
  {
    question: "How quickly can you respond to database issues?",
    answer:
      "Our 24/7 monitoring system provides real-time alerts, and our team responds to critical issues within 15 minutes. For non-critical issues, we typically respond within 2-4 hours during business hours. All clients receive priority support based on their service tier.",
  },
  {
    question: "Do you handle database migrations?",
    answer:
      "Yes, we specialize in database migrations including version upgrades, platform migrations (e.g., MySQL to PostgreSQL), and cloud migrations. We plan, test, and execute migrations with minimal downtime, ensuring data integrity throughout the process.",
  },
  {
    question: "What security measures do you implement?",
    answer:
      "We implement enterprise-grade security including encryption at rest and in transit, regular security audits, access controls, automated backups, and compliance with industry standards like SOC 2, GDPR, and HIPAA. All database access is logged and monitored.",
  },
  {
    question: "How do you handle database backups?",
    answer:
      "We configure automated daily backups with point-in-time recovery capabilities. Backups are stored in multiple locations with retention policies tailored to your needs. We test restore procedures regularly to ensure backup integrity and quick recovery times.",
  },
  {
    question: "Can you help optimize slow queries?",
    answer:
      "Absolutely. Our team analyzes query performance, identifies bottlenecks, and optimizes slow queries through indexing strategies, query rewriting, and database tuning. We provide detailed performance reports and recommendations for ongoing improvements.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-[40px] sm:py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4"
          >
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-semibold text-[#48484A] leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[64px]">
              Frequently Asked Questions
            </h2>
            <p className="text-[#606060] text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
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
                  <h3 className="text-[#48484A] text-base sm:text-lg md:text-xl font-semibold leading-relaxed pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-[#48484A] flex-shrink-0 transition-transform duration-300 ${
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
                    <p className="text-[#606060] text-sm sm:text-base font-normal leading-relaxed">
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
            <p className="text-[#606060] text-sm sm:text-base mb-4 sm:mb-6">
              Still have questions?
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#101010] cursor-pointer text-white px-6 py-3 sm:px-8 sm:py-4 rounded-[8px] font-semibold text-sm sm:text-base hover:bg-[#262626] transition-colors"
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
