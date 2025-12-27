"use client";

import { motion } from "framer-motion";
import { Database, Monitor, ShieldCheck, CloudLightning } from "lucide-react";

const teamServices = [
  {
    icon: Database,
    title: "Performance Optimization",
    description:
      "We fine-tune queries, indexes, and infrastructure to ensure your databases run at peak speed.",
  },
  {
    icon: Monitor,
    title: "24/7 Monitoring & Support",
    description:
      "Real-time monitoring and expert intervention to prevent downtime before it happens.",
  },
  {
    icon: ShieldCheck,
    title: "Automated Backups & Recovery",
    description:
      "Scheduled backups and rapid recovery plans to protect your business-critical data.",
  },
  {
    icon: CloudLightning,
    title: "Cloud Database Management",
    description:
      "End-to-end support for AWS, Azure, and Google Cloud databases.",
  },
];

export function AboutWhyDbaInHouseTeam() {
  return (
    <section className="py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black leading-tight">
            We act like your in-house DBA team
          </h2>
          <p className="text-[16px] sm:text-[18px] font-normal text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Hiring and maintaining an internal database team is expensive and
            time-consuming. ASAP DBA gives you instant access to certified
            specialists who understand your infrastructure, scale with your
            business, and work as an extension of your team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start text-left hover:shadow-xl hover:border-blue-200 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <service.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-[20px] sm:text-[22px] font-bold text-black mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-[16px] font-normal text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
