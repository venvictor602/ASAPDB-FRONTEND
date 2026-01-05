"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Loader2,
} from "lucide-react";
import { useSubscribeMutation } from "@/lib/api/contact-api";
import {
  useGetServicesQuery,
  useGetIndustriesQuery,
} from "@/lib/api/services-api";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribe, { isLoading: isSubmitting }] = useSubscribeMutation();

  // Fetch services and industries from API
  const { data: servicesData } = useGetServicesQuery({ page: 1 });
  const { data: industriesData } = useGetIndustriesQuery({ page: 1 });

  const services = servicesData?.services || [];
  const industries = industriesData?.industries || [];

  // Don't render footer if no services and no industries
  if (services.length === 0 && industries.length === 0) {
    return null;
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    try {
      await subscribe({ email }).unwrap();
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
    } catch {
      toast.error("Failed to subscribe. Please try again.");
    }
  };

  return (
    <footer className="bg-[#122453] text-white pt-20 pb-10">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1.8fr] gap-12 lg:gap-8 items-start mb-20">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/Asap-Logo White.svg"
                alt="ASAP DBA Logo"
                width={131}
                height={32}
                priority
                quality={90}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-[#FFFFFF] text-sm leading-relaxed max-w-xs">
              ASAP DBA is a premier database management platform that connects
              businesses with expert support and high-performance solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-4">
              {["Blog", "Career", "Projects", "FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-[#FFFFFF] hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#FFFFFF]" />
                </div>
                <a
                  href="tel:08167000077"
                  className="text-[#FFFFFF] hover:text-white text-sm transition-colors"
                >
                  08167000077
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#FFFFFF]" />
                </div>
                <a
                  href="mailto:Contact@asapdba.com"
                  className="text-[#FFFFFF] hover:text-white text-sm transition-colors"
                >
                  Contact@asapdba.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#FFFFFF]" />
                </div>
                <a
                  href="tel:08167000077"
                  className="text-[#FFFFFF] hover:text-white text-sm transition-colors"
                >
                  08167000077
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="space-y-6">
            <p className="text-[#FFFFFF] text-sm leading-relaxed">
              Sign up for our newsletter and join the growing ASAP DBA
              community.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email address here ..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="w-full bg-[#E5E7EB] border-none rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 text-sm focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#3B82F6] cursor-pointer hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-sm transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white mb-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
            <span className="text-[#FFFFFF]">© 2023 asap dba</span>
            <Link
              href="/terms"
              className="text-[#FFFFFF] hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-[#FFFFFF] hover:text-white transition-colors"
            >
              Privacy & Cookies policy
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {[
              { Icon: Facebook, href: "#", label: "Facebook" },
              {
                Icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    {...props}
                  >
                    <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.133m1.442-1.306L20 4" />
                  </svg>
                ),
                href: "#",
                label: "X",
              },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Instagram, href: "#", label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-10 h-10 rounded-lg bg-[#3B82F6] flex items-center justify-center hover:bg-blue-600 transition-all border border-blue-400/20"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
