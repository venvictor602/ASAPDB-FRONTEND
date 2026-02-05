"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Feature, Benefit } from "@/lib/api/services-api";
import { useGetServiceByIdQuery } from "@/lib/api/services-api";

interface ServiceDetailPageProps {
  service: {
    id: string;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    features: Feature[];
    benefits: Benefit[];
  };
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
      <section className="relative py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] bg-linear-to-b from-gray-50 to-white">
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
                <Link href={`/contact?serviceId=${service.id}`}>
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
              className="mb-16"
            >
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black leading-tight mb-4">
                Key Features of {service.title}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
              {service.features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 lg:p-10 rounded-2xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-5 mb-4">
                      <div className="shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-linear-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center font-bold text-lg lg:text-xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-black  leading-tight">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg font-normal text-gray-700 leading-relaxed pl-0 md:pl-0">
                      {feature.description}
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
              className="mb-16"
            >
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black leading-tight mb-4">
                Benefits of {service.title}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-black mb-4 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-base sm:text-lg font-normal text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
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
              <Link href={`/contact?serviceId=${service.id}`}>
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
