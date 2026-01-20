"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "LEPTONS MULTICONCEPT",
    logo: "/assets/leptons-logo.png", // Placeholder - replace with actual logo
    placeholder: "LEPTONS",
  },
  {
    name: "FIXAM",
    logo: "/assets/fixam-logo.png", // Placeholder - replace with actual logo
    placeholder: "FIXAM",
  },
  {
    name: "POWERKITS",
    logo: "/assets/powerkits-logo.png", // Placeholder - replace with actual logo
    placeholder: "POWERKITS",
  },
  {
    name: "AugSekIT",
    logo: "/assets/augsekit-logo.png", // Placeholder - replace with actual logo
    placeholder: "AugSekIT",
  },
  {
    name: "neocloud TECHNOLOGIES",
    logo: "/assets/neocloud-logo.png", // Placeholder - replace with actual logo
    placeholder: "neocloud",
  },
  {
    name: "=C=",
    logo: "/assets/c-logo.png", // Placeholder - replace with actual logo
    placeholder: "=C=",
  },
  {
    name: "JbBrothers",
    logo: "/assets/jbbrothers-logo.png", // Placeholder - replace with actual logo
    placeholder: "JbBrothers",
  },
  {
    name: "CHAI",
    logo: "/assets/chai-logo.png", // Placeholder - replace with actual logo
    placeholder: "CHAI",
  },
];

export function PartnersLogosSection() {
  // Duplicate the array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="bg-white py-[40px] sm:py-[60px] border-t border-gray-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden"
        >
          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-8 md:gap-12">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-16 md:h-20"
                >
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={60}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                    />
                  ) : (
                    <div className="px-6 py-3 bg-gray-100 rounded-lg flex items-center justify-center min-w-[120px]">
                      <span className="text-gray-600 font-semibold text-sm md:text-base">
                        {partner.placeholder}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
