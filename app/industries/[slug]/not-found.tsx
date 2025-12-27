import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function IndustryNotFound() {
  return (
    <>
      <Navigation backgroundColor="white" />
      <div className="min-h-screen bg-white flex items-center justify-center py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-[64px] sm:text-[80px] md:text-[96px] font-bold text-blue-600 mb-4">
            404
          </h1>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black mb-4">
            Industry Not Found
          </h2>
          <p className="text-[18px] text-gray-700 mb-8 max-w-2xl mx-auto">
            The industry page you&apos;re looking for doesn&apos;t exist or has
            been moved. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <button className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/20">
                View Our Services
              </button>
            </Link>
            <Link href="/">
              <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-base border-2 border-gray-300 hover:border-gray-400 transition-colors">
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
