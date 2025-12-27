"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavigationProps {
  backgroundColor?: "transparent" | "white" | string;
}

const menuItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { label: "Why ASAP DBA", href: "/about/why-asap-dba" },
      { label: "Our Mission & Vision", href: "/about/mission-vision" },
    ],
  },
  {
    label: "Service",
    href: "/services",
    hasDropdown: true,
    hasTwoColumns: true,
    dropdownItems: [
      { label: "Cloud Services & Solution", href: "/services/cloud" },
      {
        label: "Enterprise Software & Application",
        href: "/services/enterprise",
      },
      { label: "Low code/ No Code Development", href: "/services/low-code" },
      { label: "Advisory & Consulting", href: "/services/consulting" },
      { label: "Managed Services", href: "/services/managed" },
      { label: "Security", href: "/services/security" },
    ],
  },
  {
    label: "Industries",
    href: "#",
    hasDropdown: true,
    hasTwoColumns: true,
    dropdownItems: [
      { label: "Health Care", href: "/industries/healthcare" },
      { label: "EdTech", href: "/industries/edtech" },
      { label: "FinTech", href: "/industries/fintech" },
      { label: "LegalTech", href: "/industries/legaltech" },
      { label: "Retail", href: "/industries/retail" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/career" },
  { label: "Solutions", href: "/solutions" },
];

export function Navigation({
  backgroundColor = "transparent",
}: NavigationProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      let clickedInsideDropdown = false;

      Object.keys(dropdownRefs.current).forEach((key) => {
        if (
          dropdownRefs.current[key] &&
          dropdownRefs.current[key]?.contains(target)
        ) {
          clickedInsideDropdown = true;
        }
      });

      // Only close if clicking outside all dropdowns
      if (!clickedInsideDropdown) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdowns and mobile menu when pathname changes
  useEffect(() => {
    // Defer state updates to avoid cascading renders
    const timeoutId = setTimeout(() => {
      setOpenDropdown(null);
      setIsMobileMenuOpen(false);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  // Determine background color class
  const getBackgroundClass = () => {
    if (backgroundColor === "transparent") {
      return "bg-transparent";
    } else if (backgroundColor === "white") {
      return "bg-white";
    }
    return "";
  };

  // Determine text color based on background
  const getTextColor = () => {
    if (backgroundColor === "white") {
      return "text-black";
    }
    return "text-white";
  };

  // Determine border color based on background
  const getBorderColor = () => {
    if (backgroundColor === "white") {
      return "border-[#E8E8E8]";
    }
    return "border-none";
  };

  return (
    <div className="w-full sticky top-0 z-50" style={{ position: "sticky" }}>
      {/* Navigation Bar */}
      <nav
        className={`relative w-full border ${getBorderColor()} ${getBackgroundClass()}`}
        style={{
          backgroundColor:
            backgroundColor === "transparent"
              ? "rgba(15, 23, 42, 0.8)"
              : backgroundColor !== "white" && backgroundColor !== "transparent"
                ? backgroundColor
                : undefined,
          backgroundImage:
            backgroundColor === "transparent"
              ? `linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%),
                 url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%232563eb' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
              : backgroundColor !== "white" && backgroundColor !== "transparent"
                ? `linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%),
                   url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%232563eb' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
                : undefined,
        }}
      >
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/Asap DBA blue.svg"
                alt="ASAP DBA Logo"
                width={131}
                height={32}
                priority
                quality={90}
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                const hasDropdown = "hasDropdown" in item && item.hasDropdown;

                return (
                  <div key={item.label} className="relative">
                    {hasDropdown ? (
                      <div
                        ref={(el) => {
                          dropdownRefs.current[item.label] = el;
                        }}
                        className="relative"
                      >
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className={`flex items-center gap-1 text-[16px] ${getTextColor()} leading-[24px] transition-colors hover:opacity-80 ${
                            isActive ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              openDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openDropdown === item.label && (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className={`absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2 ${
                              "hasTwoColumns" in item && item.hasTwoColumns
                                ? "min-w-[400px]"
                                : "min-w-[200px]"
                            }`}
                          >
                            {"hasTwoColumns" in item && item.hasTwoColumns ? (
                              <div className="grid grid-cols-2 gap-0">
                                {item.dropdownItems?.map(
                                  (dropdownItem, index) => {
                                    const midPoint = Math.ceil(
                                      (item.dropdownItems?.length || 0) / 2
                                    );
                                    const isFirstColumn = index < midPoint;
                                    return (
                                      <Link
                                        key={dropdownItem.href}
                                        href={dropdownItem.href}
                                        onClick={() => setOpenDropdown(null)}
                                        className={`block px-4 py-2 text-black text-sm hover:bg-gray-50 transition-colors ${
                                          isFirstColumn
                                            ? "border-r border-gray-100"
                                            : ""
                                        }`}
                                      >
                                        {dropdownItem.label}
                                      </Link>
                                    );
                                  }
                                )}
                              </div>
                            ) : (
                              <>
                                {item.dropdownItems?.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.href}
                                    href={dropdownItem.href}
                                    onClick={() => setOpenDropdown(null)}
                                    className="block px-4 py-2 text-black text-sm hover:bg-gray-50 transition-colors"
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                ))}
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`text-[16px] ${getTextColor()} leading-[24px] transition-colors hover:opacity-80 ${
                          isActive ? "font-semibold" : "font-normal"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Desktop Contact Button */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <button
                  className={`${
                    backgroundColor === "white"
                      ? "bg-[#2563eb] text-white"
                      : "bg-[#2563eb] text-white"
                  } cursor-pointer px-4 py-2 rounded-[8px] hover:bg-[#1d4ed8] transition-colors font-semibold text-[16px] leading-[24px]`}
                >
                  Contact
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden p-2 ${getTextColor()} hover:opacity-80 transition-colors`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 cursor-pointer" />
              ) : (
                <Menu className="w-6 h-6 cursor-pointer" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden absolute top-full left-0 right-0 ${
              backgroundColor === "white" ? "bg-white" : "bg-[#1e293b]"
            } border-t ${getBorderColor()} shadow-lg z-50 overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "max-h-[600px] opacity-100 mt-0"
                : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <div className="px-4 pt-4 pb-4 space-y-3">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                const hasDropdown = "hasDropdown" in item && item.hasDropdown;

                return (
                  <div key={item.label}>
                    {hasDropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className={`w-full flex items-center justify-between text-[16px] ${getTextColor()} leading-[24px] transition-colors py-2 ${
                            isActive ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              openDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openDropdown === item.label && (
                          <div className="pl-4 space-y-2 mt-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                onClick={() => {
                                  setOpenDropdown(null);
                                  setIsMobileMenuOpen(false);
                                }}
                                className={`block text-[14px] ${getTextColor()} opacity-80 leading-[20px] transition-colors py-1`}
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block text-[16px] ${getTextColor()} leading-[24px] transition-colors py-2 ${
                          isActive ? "font-semibold" : "font-normal"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
              <Link href="/contact" className="block pt-2">
                <button
                  className={`w-full ${
                    backgroundColor === "white"
                      ? "bg-[#2563eb] text-white"
                      : "bg-[#2563eb] text-white"
                  } cursor-pointer p-[10px] rounded-[8px] hover:bg-[#1d4ed8] transition-colors font-semibold text-[16px] leading-[24px]`}
                >
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
