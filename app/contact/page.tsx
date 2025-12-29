"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  X,
  ChevronDown,
  Check,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const servicesList = [
  "Database Administration Services",
  "Data Migration & Upgrades",
  "Cloud Infrastructure Services",
  "Security & Compliance",
  "Performance Optimization",
  "Managed Services",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "Other",
    services: [] as string[],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  const toggleService = (service: string) => {
    if (formData.services.includes(service)) {
      setFormData({
        ...formData,
        services: formData.services.filter((s) => s !== service),
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, service],
      });
    }
  };

  const removeService = (serviceToRemove: string) => {
    setFormData({
      ...formData,
      services: formData.services.filter((s) => s !== serviceToRemove),
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Check if form is valid
  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.subject.trim() !== "" &&
    formData.message.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "Other",
        services: [],
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation backgroundColor="white" />

      {/* Hero Section */}
      <section className="bg-white py-[40px] sm:py-[60px] md:py-[80px] lg:py-[100px]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4"
          >
            <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-semibold text-[#48484A] leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[64px]">
              Get in Touch
            </h1>
            <p className="text-[#606060] text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
              Got questions about database management? We&apos;re here to help.
              Drop us a line and let&apos;s talk about how we can support your
              business.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[#48484A] mb-6">
                  Contact Information
                </h2>
                <p className="text-[#606060] text-sm sm:text-base font-normal leading-relaxed mb-8">
                  We&apos;re here 24/7 to help with your database needs. Pick
                  whichever way works best for you—email, phone, or the form
                  below.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#101010] rounded-[8px] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#48484A] text-base sm:text-lg font-semibold mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:contact@asapdba.com"
                      className="text-[#606060] text-sm sm:text-base font-normal hover:text-[#101010] transition-colors"
                    >
                      contact@asapdba.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#101010] rounded-[8px] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#48484A] text-base sm:text-lg font-semibold mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+2349072211222"
                      className="text-[#606060] text-sm sm:text-base font-normal hover:text-[#101010] transition-colors"
                    >
                      +234 907 221 1222
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#101010] rounded-[8px] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#48484A] text-base sm:text-lg font-semibold mb-1">
                      Opening Hours
                    </h3>
                    <p className="text-[#606060] text-sm sm:text-base font-normal">
                      Sun - Sat, 24/7
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#101010] rounded-[8px] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#48484A] text-base sm:text-lg font-semibold mb-1">
                      Location
                    </h3>
                    <p className="text-[#606060] text-sm sm:text-base font-normal">
                      Remote - Worldwide Service
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-slate-100 rounded-[16px] p-6 sm:p-8 md:p-10">
                <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[#48484A] mb-6">
                  Send us a Message
                </h2>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-[8px] text-green-800 text-sm sm:text-base">
                    Thank you! Your message has been sent successfully.
                    We&apos;ll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-[8px] text-red-800 text-sm sm:text-base">
                    Something went wrong. Please try again later.
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[#48484A] text-sm sm:text-base font-semibold mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-[#E8E8E8] rounded-[8px] px-4 py-3 text-[#48484A] text-sm sm:text-base focus:outline-none focus:border-[#101010] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[#48484A] text-sm sm:text-base font-semibold mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-[#E8E8E8] rounded-[8px] px-4 py-3 text-[#48484A] text-sm sm:text-base focus:outline-none focus:border-[#101010] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[#48484A] text-sm sm:text-base font-semibold mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#E8E8E8] rounded-[8px] px-4 py-3 text-[#48484A] text-sm sm:text-base focus:outline-none focus:border-[#101010] transition-colors"
                        placeholder="+234 907 221 1222"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[#48484A] text-sm sm:text-base font-semibold mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#E8E8E8] rounded-[8px] px-4 py-3 text-[#48484A] text-sm sm:text-base focus:outline-none focus:border-[#101010] transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-[#48484A] text-sm sm:text-base font-semibold mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-[#E8E8E8] rounded-[8px] px-4 py-3 text-[#48484A] text-sm sm:text-base focus:outline-none focus:border-[#101010] transition-colors"
                    >
                      {servicesList.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="relative" ref={servicesDropdownRef}>
                    <label
                      htmlFor="services"
                      className="block text-[#48484A] text-sm sm:text-base font-semibold mb-2"
                    >
                      Services (Select multiple if needed)
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full bg-white border border-[#E8E8E8] rounded-[8px] px-4 py-3 text-left text-[#48484A] text-sm sm:text-base focus:outline-none focus:border-[#101010] transition-colors flex items-center justify-between"
                    >
                      <span className="text-[#606060]">
                        {formData.services.length === 0
                          ? "Select services..."
                          : `${formData.services.length} service${
                              formData.services.length > 1 ? "s" : ""
                            } selected`}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-[#48484A] transition-transform ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute z-10 w-full mt-2 bg-white border border-[#E8E8E8] rounded-[8px] shadow-lg max-h-[240px] overflow-y-auto">
                        {servicesList.map((service) => {
                          const isSelected =
                            formData.services.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`w-full px-4 py-3 text-left text-sm sm:text-base transition-colors flex items-center gap-3 hover:bg-gray-50 ${
                                isSelected
                                  ? "bg-gray-50 text-[#101010]"
                                  : "text-[#48484A]"
                              }`}
                            >
                              <div
                                className={`w-5 h-5 border-2 rounded flex items-center justify-center shrink-0 ${
                                  isSelected
                                    ? "bg-[#101010] border-[#101010]"
                                    : "border-[#E8E8E8]"
                                }`}
                              >
                                {isSelected && (
                                  <Check className="w-3 h-3 text-white" />
                                )}
                              </div>
                              <span className="flex-1">{service}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                    {formData.services.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {formData.services.map((service) => (
                          <span
                            key={service}
                            className="inline-flex items-center gap-1.5 bg-[#101010] text-white px-3 py-1.5 rounded-[6px] text-xs sm:text-sm font-medium"
                          >
                            {service}
                            <button
                              type="button"
                              onClick={() => removeService(service)}
                              className="hover:bg-white/20 rounded-full p-0.5 transition-colors"
                              aria-label={`Remove ${service}`}
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[#48484A] text-sm sm:text-base font-semibold mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-white border border-[#E8E8E8] rounded-[8px] px-4 py-3 text-[#48484A] text-sm sm:text-base focus:outline-none focus:border-[#101010] transition-colors resize-none"
                      placeholder="Tell us about your database management needs..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    whileHover={
                      isFormValid && !isSubmitting ? { scale: 1.02 } : {}
                    }
                    whileTap={
                      isFormValid && !isSubmitting ? { scale: 0.98 } : {}
                    }
                    className="w-full bg-[#101010] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-[8px] font-semibold text-sm sm:text-base hover:bg-[#262626] transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
