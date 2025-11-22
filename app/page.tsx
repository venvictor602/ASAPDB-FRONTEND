import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { DatabaseManagementSection } from "@/components/database-management-section";
import { FaqSection } from "@/components/faq-section";
import { BlogSection } from "@/components/blog-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <DatabaseManagementSection />
      <BlogSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
