"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Service } from "@/lib/services-data";
import { useGetServiceByIdQuery } from "@/lib/api/services-api";

interface ServiceDetailPageProps {
  service: Service;
}

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  // Client-side API call to see it in Network tab - fetches all services and filters by ID
  const serviceId = parseInt(service.id);
  const { data: clientService } = useGetServiceByIdQuery(serviceId, {
    skip: isNaN(serviceId),
  });

  // Log for debugging
  useEffect(() => {
    if (clientService) {
      console.log(
        "Service fetched from client (filtered from all services):",
        clientService
      );
    }
  }, [clientService]);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold text-black leading-tight">
                {service.title}
              </h1>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] font-normal text-gray-700 leading-relaxed">
                {service.longDescription}
              </p>
              <div className="pt-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex cursor-pointer items-center gap-2 bg-[#2563eb] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/20"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Only show if features exist */}
      {service.features && service.features.length > 0 && (
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
                Key Features
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-[16px] sm:text-[18px] font-medium text-gray-900 leading-relaxed">
                      {feature}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section - Only show if benefits exist */}
      {service.benefits && service.benefits.length > 0 && (
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
                Benefits
              </h2>
              <p className="text-[18px] text-gray-700 max-w-3xl mx-auto">
                Discover how our {service.title.toLowerCase()} can transform
                your database operations
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-[16px] sm:text-[18px] font-semibold text-gray-900">
                      {benefit}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-[60px] sm:py-[80px] md:py-[100px] bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-[18px] text-gray-700 max-w-2xl mx-auto">
              Contact us today to learn how our {service.title.toLowerCase()}{" "}
              can help your business achieve better database performance and
              reliability.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex cursor-pointer items-center gap-2 bg-[#2563eb] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/20"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
