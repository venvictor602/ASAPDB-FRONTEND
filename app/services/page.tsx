import type { Metadata } from "next";
import { ServicesOverviewSection } from "@/components/services-overview-section";
import { ServicesHeroSection } from "@/components/services-hero-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export const metadata: Metadata = {
  title: "Our Services - Database Management Solutions | ASAP DBA",
  description:
    "Comprehensive database management services including 24/7 administration, seamless migrations, cloud infrastructure setup, enterprise security, performance optimization, and fully managed database services. Expert solutions trusted by businesses worldwide.",
  keywords: [
    "database administration services",
    "database migration services",
    "cloud database management",
    "database security services",
    "database performance optimization",
    "managed database services",
    "database management solutions",
    "database support services",
    "PostgreSQL administration",
    "MySQL management",
    "MongoDB support",
    "AWS database services",
    "Azure database management",
    "database consulting",
    "database monitoring services",
    "database backup services",
  ],
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/services`,
    siteName: "ASAP DBA",
    title: "Our Services - Database Management Solutions | ASAP DBA",
    description:
      "Comprehensive database management services including 24/7 administration, seamless migrations, cloud infrastructure setup, enterprise security, performance optimization, and fully managed database services.",
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
    site: "@asapdba",
    creator: "@asapdba",
    title: "Our Services - Database Management Solutions | ASAP DBA",
    description:
      "Comprehensive database management services including 24/7 administration, seamless migrations, cloud infrastructure setup, enterprise security, and performance optimization.",
    images: [`${siteUrl}/assets/Asap-DBA_Logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        <ServicesHeroSection />
        <ServicesOverviewSection />
        <WhyChooseUsSection />
        <Footer />
      </div>
    </>
  );
}
