"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  // Check if form is valid
  const isFormValid = firstName.trim() !== "" && email.trim() !== "";

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    // Handle newsletter subscription
    console.log("Subscribe:", { firstName, email });
    setFirstName("");
    setEmail("");
  };

  return (
    <footer className="bg-[#1e3a5f] text-white py-[40px] md:py-[80px] space-y-[40px] md:space-y-[80px]">
      {/* Top Section */}
      <div className=" bg-[#2563eb] rounded-[16px] max-w-7xl sm:mx-auto mx-2 p-4 sm:p-6 lg:p-[45px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-start gap-8 sm:gap-12">
          {/* Quick Links */}
          <div className=" space-y-[16px]">
            <h3 className="text-white text-lg sm:text-xl font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-3 sm:space-y-[16px] font-normal">
              <li>
                <Link
                  href="/services"
                  className="text-[#FFFFFF] transition-colors text-sm sm:text-base"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-[#FFFFFF] transition-colors text-sm sm:text-base"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[#FFFFFF] transition-colors text-sm sm:text-base"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-[#FFFFFF] transition-colors text-sm sm:text-base"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div className=" space-y-[16px] font-normal">
            <h3 className="text-white text-lg sm:text-xl font-semibold">
              Support & Contact
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-[#FFFFFF] text-sm sm:text-base font-normal">
              <li className="">Opening Hours: Sun - Sat, 24/7</li>
              <li>
                <a href="tel:+2349072211222" className=" transition-colors">
                  +234 907 221 1222
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@asapdba.com"
                  className=" transition-colors"
                >
                  contact@asapdba.com
                </a>
              </li>
            </ul>
          </div>

          {/* Illustration Placeholder */}
          <div className="hidden md:block">
            <Image
              src="/assets/one 1.png"
              alt="ASAP DBA"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              loading="lazy"
              quality={90}
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-start">
            {/* Logo and Social Media */}
            <div className="space-y-[20px] sm:space-y-[24px]">
              <div className="">
                <Image
                  src="/assets/Asap-Logo White.svg"
                  alt="ASAP DBA Logo"
                  width={100}
                  height={100}
                  loading="lazy"
                  quality={90}
                />
              </div>
              <div className="flex items-center gap-[5px] sm:gap-[8px]">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Image
                    src="/assets/Facebook.svg"
                    alt="Facebook"
                    width={20}
                    height={20}
                    loading="lazy"
                    className="max-w-[50px] w-full max-h-[50px] "
                    quality={90}
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Image
                    src="/assets/X.svg"
                    alt="Twitter"
                    width={20}
                    height={20}
                    loading="lazy"
                    quality={90}
                    className="max-w-[50px] w-full max-h-[50px] "
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/assets/Linkedin.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    loading="lazy"
                    quality={90}
                    className="max-w-[50px] w-full max-h-[50px] "
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Slack"
                >
                  <Image
                    src="/assets/Insta.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    loading="lazy"
                    quality={90}
                    className="max-w-[50px] w-full max-h-[50px] "
                  />
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-[#2563eb] rounded-[24px] p-[20px] sm:p-[24px] space-y-[24px] col-span-2">
              <p className="text-white text-sm sm:text-base font-normal leading-relaxed">
                Sign up for our newsletter and join the growing ASAP DBA
                community.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col md:flex-row gap-3 sm:gap-4"
              >
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-white border border-[#93c5fd] rounded-[8px] px-4 py-3 text-[#1e3a5f] placeholder-[#93c5fd] text-sm sm:text-base focus:outline-none focus:border-[#2563eb] transition-colors flex-1"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border border-[#93c5fd] rounded-[8px] px-4 py-3 text-[#1e3a5f] placeholder-[#93c5fd] text-sm sm:text-base focus:outline-none focus:border-[#2563eb] transition-colors flex-1"
                  required
                />
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="bg-white text-[#2563eb] px-6 py-3 rounded-[8px] font-semibold text-sm sm:text-base hover:bg-[#f0f5ff] transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#3b82f6] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-white font-normal">
            <p>© 2024 ASAP DBA. All rights reserved.</p>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy & Cookies policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
