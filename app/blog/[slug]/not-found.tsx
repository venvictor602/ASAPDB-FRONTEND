import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
          Post Not Found
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl mb-8 max-w-md">
          The blog post you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>
      <Footer />
    </div>
  );
}
