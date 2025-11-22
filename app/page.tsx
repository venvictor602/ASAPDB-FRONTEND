import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { DatabaseManagementSection } from "@/components/database-management-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <DatabaseManagementSection />
    </div>
  );
}
