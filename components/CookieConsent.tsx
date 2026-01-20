"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-6 right-6 z-[100] mx-auto max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/80 p-6 shadow-2xl backdrop-blur-xl md:p-8">
            {/* Background Gradient Effect */}
            <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 ring-1 ring-blue-400/30">
                  <Cookie className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Cookie Settings
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400 md:max-w-xl">
                    We use cookies to enhance your browsing experience, serve
                    personalized content, and analyze our traffic. By clicking{" "}
                    <span className="text-blue-400 font-medium">
                      "Accept All"
                    </span>
                    , you consent to our use of cookies.{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-blue-400 hover:underline underline-offset-4"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row md:w-auto">
                <button
                  onClick={handleDecline}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-95 md:w-auto"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="w-full rounded-xl bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 hover:shadow-blue-500/40 active:scale-95 md:w-auto"
                >
                  Accept All
                </button>
              </div>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-500 transition-colors hover:text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
