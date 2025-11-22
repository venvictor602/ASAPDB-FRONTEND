import type { Metadata } from "next";
import { ServicesSection } from "@/components/services-section";
import { ServicesHeroSection } from "@/components/services-hero-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export const metadata: Metadata = {
  title: "Services - Database Management Solutions | ASAP DBA",
  description:
    "Comprehensive database management services including administration, migrations, cloud infrastructure, security, performance optimization, and managed services. Trusted by businesses worldwide.",
  keywords: [
    "database administration services",
    "database migration services",
    "cloud database management",
    "database security services",
    "database performance optimization",
    "managed database services",
    "database management solutions",
    "database support services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/services`,
    siteName: "ASAP DBA",
    title: "Services - Database Management Solutions | ASAP DBA",
    description:
      "Comprehensive database management services including administration, migrations, cloud infrastructure, security, performance optimization, and managed services. Trusted by businesses worldwide.",
    images: [
      {
        url: `${siteUrl}/assets/Asap-DBA_Logo.png`,
        width: 1200,
        height: 630,
        alt: "ASAP DBA Services - Database Management Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Database Management Solutions | ASAP DBA",
    description:
      "Comprehensive database management services including administration, migrations, cloud infrastructure, security, performance optimization, and managed services. Trusted by businesses worldwide.",
    images: [`${siteUrl}/assets/Asap-DBA_Logo.png`],
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen  bg-white">
        <ServicesHeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <Footer />
      </div>
    </>
  );
}
