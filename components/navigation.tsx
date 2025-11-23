"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  // { label: "Faq", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Portfolio", href: "/portfolio" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="border border-[#E8E8E8] max-w-[776px] md:mx-auto mx-[10px] rounded-[16px] p-[10px] mt-[10px] md:mt-[40px] relative">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="">
              <Image
                src="/assets/Asap-DBA_Logo.png"
                alt="ASAP DBA Logo"
                width={100}
                height={100}
                priority
                quality={90}
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[16px] text-black leading-[24px] transition-colors ${
                    isActive ? "font-semibold" : "font-normal"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-[#2563eb] cursor-pointer text-[white] p-[10px] rounded-[8px] hover:bg-[#1d4ed8] transition-colors font-semibold text-[16px] leading-[24px]">
                Contact
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-black hover:text-[#2563eb] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 cursor-pointer" />
            ) : (
              <Menu className="w-6 h-6 cursor-pointer" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Absolutely Positioned */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 rounded-b-lg shadow-lg z-50 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-[500px] opacity-100 mt-2"
              : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="px-4 pt-4 pb-2 space-y-3">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-[16px] text-black leading-[24px] transition-colors py-2 ${
                    isActive ? "font-semibold" : "font-normal"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact">
              <button className="w-full bg-[#101010] cursor-pointer text-[white] p-[10px] rounded-[8px] hover:bg-[#202020] transition-colors font-semibold text-[16px] leading-[24px] mt-4">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
