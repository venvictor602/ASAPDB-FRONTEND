"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, MessageSquare } from "lucide-react";

export function Footer() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", { firstName, email });
    setFirstName("");
    setEmail("");
  };

  return (
    <footer className="bg-[#101010] text-white">
      {/* Top Section */}
      <div className="bg-[#262626] rounded-t-[16px] md:rounded-t-[24px]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support & Contact */}
            <div>
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                Support & Contact
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
                <li>Opening Hours: Sun - Sat, 24/7</li>
                <li>
                  <a
                    href="tel:+2349072211222"
                    className="hover:text-white transition-colors"
                  >
                    +234 907 221 1222
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@asapdba.com"
                    className="hover:text-white transition-colors"
                  >
                    contact@asapdba.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Illustration Placeholder */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-32 h-32 bg-[#1A1A1A] rounded-lg flex items-center justify-center">
                <MessageSquare className="w-16 h-16 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#101010] py-8 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Logo and Social Media */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-[#101010] font-bold text-xl">X</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold text-white">
                  ASAP DBA
                </span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#262626] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#262626] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#262626] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://slack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#262626] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors"
                  aria-label="Slack"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-[#262626] rounded-[16px] p-6 sm:p-8">
              <p className="text-white text-sm sm:text-base font-normal mb-4 sm:mb-6 leading-relaxed">
                Sign up for our newsletter and join the growing ASAP DBA
                community.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3 sm:space-y-4">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-[#1A1A1A] border border-[#48484A] rounded-[8px] px-4 py-3 text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:border-white transition-colors"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#1A1A1A] border border-[#48484A] rounded-[8px] px-4 py-3 text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-[#101010] px-6 py-3 rounded-[8px] font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm sm:text-base text-gray-400">
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

