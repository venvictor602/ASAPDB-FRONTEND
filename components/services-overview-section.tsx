"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { useGetServicesQuery } from "@/lib/api/services-api";

export function ServicesOverviewSection() {
  const { data, isLoading } = useGetServicesQuery({ page: 1 });
  const services = data?.services || [];

  return (
    <section className="bg-white py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black leading-tight mb-4">
            Our Services
          </h2>
          <p className="text-[18px] text-gray-700 max-w-3xl mx-auto">
            Comprehensive database and cloud solutions tailored to your business
            needs
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No services available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group"
              >
                {/* Image */}
                <div className="relative w-full h-[200px] sm:h-[240px] overflow-hidden">
                  <Image
                    src={service.image || "/assets/image1.png"}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4 flex flex-col grow">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-black leading-tight">
                    {service.name}
                  </h3>
                  <p className="text-[15px] sm:text-[16px] font-normal text-gray-700 leading-relaxed grow">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base hover:text-blue-700 transition-colors group/link mt-2"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
