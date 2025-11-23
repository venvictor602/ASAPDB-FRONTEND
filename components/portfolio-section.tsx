"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "WorkandShop",
    description:
      "Work and Shop is a platform for connecting users with skilled artisans, professionals, and businesses for various service needs. It also functions as a marketplace for essential items, work materials, and tools, streamlining the process of finding reliable professionals and purchasing supplies.",
    liveLink: "https://workandshop.com",
    image: "/assets/workandshop-mockup.png", // Placeholder - replace with actual image
    imageAlt: "WorkandShop - Hire Workmen & Shop for Items and Tools",
  },
  {
    id: 2,
    title: "Leptons Multiconcept",
    description:
      "Leptons Multiconcept Limited is a forward-thinking real estate development company focused on delivering comfort, value, and optimization. We specialize in creating innovative properties tailored to modern lifestyles, ensuring quality, affordability, and sustainable living. At Leptons, we don't just build homes—we craft experiences.",
    liveLink: "https://leptonsmulticoncept.com",
    image: "/assets/leptons-mockup.png", // Placeholder - replace with actual image
    imageAlt: "Leptons Multiconcept - Real Estate Development Company",
  },
];

export function PortfolioSection() {
  return (
    <section className="bg-white py-[20px] sm:py-[35px] md:py-[50px] lg:py-[64px] xl:py-[80px]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1; // Alternating layout
            const isFirst = index === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${
                  isFirst ? "" : "mt-8 sm:mt-12"
                }`}
              >
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`space-y-6 sm:space-y-8 ${isEven ? "md:order-2" : ""}`}
                >
                  <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#1e3a5f] leading-[40px] sm:leading-[48px] md:leading-[56px]">
                    {project.title}
                  </h2>

                  <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#1e3a5f] leading-[24px] sm:leading-[28px] md:leading-[32px]">
                    {project.description}
                  </p>

                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-6 py-[12px] sm:px-8 sm:py-[14px] rounded-[8px] font-semibold text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] hover:bg-[#1d4ed8] transition-colors cursor-pointer"
                  >
                    Visit live link
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                </motion.div>

                {/* Image/Visuals */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={`${isEven ? "md:order-1" : ""}`}
                >
                  <div className="relative w-full rounded-[16px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    {/* Placeholder for project mockup */}
                    <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        {/* Desktop Mockup */}
                        <div className="w-full max-w-[600px] bg-white rounded-lg shadow-xl mb-4 p-2">
                          <div className="bg-gray-100 rounded-t-lg h-8 flex items-center gap-2 px-3">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="bg-white rounded-b-lg p-4 h-48 flex items-center justify-center">
                            <p className="text-[#1e3a5f] text-sm font-medium text-center">
                              {project.imageAlt}
                            </p>
                          </div>
                        </div>

                        {/* Mobile Mockups */}
                        <div className="flex gap-4 justify-center">
                          <div className="w-32 bg-white rounded-lg shadow-xl p-1">
                            <div className="bg-gray-100 rounded-t-lg h-6 mb-1"></div>
                            <div className="bg-white rounded-b-lg h-40"></div>
                          </div>
                          <div className="w-32 bg-white rounded-lg shadow-xl p-1">
                            <div className="bg-gray-100 rounded-t-lg h-6 mb-1"></div>
                            <div className="bg-white rounded-b-lg h-40"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* If you have actual images, uncomment this and remove the placeholder above */}
                    {/* <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      quality={90}
                    /> */}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
