import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Navigation } from "@/components/navigation";

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-[60px] sm:py-[80px] lg:py-[100px]">
        <div className="text-center space-y-6">
          <h1 className="text-[72px] sm:text-[96px] md:text-[120px] font-semibold text-[#48484A] leading-none">
            404
          </h1>
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold text-[#48484A]">
            Blog Post Not Found
          </h2>
          <p className="text-[#606060] text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            The blog post you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#101010] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-[8px] font-semibold text-sm sm:text-base hover:bg-[#262626] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              Back to Blog
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#48484A] border border-[#E8E8E8] px-6 py-3 sm:px-8 sm:py-4 rounded-[8px] font-semibold text-sm sm:text-base hover:border-gray-400 transition-colors"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
