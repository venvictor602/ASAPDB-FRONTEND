import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { ChoosingDatabaseSection } from "@/components/choosing-database-section";
import { WhyAsapDbaSection } from "@/components/why-asap-dba-section";
// import { PartnersLogosSection } from "@/components/partners-logos-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { OurSolutionsSection } from "@/components/our-solutions-section";
import { VideoCarouselSection } from "@/components/video-carousel-section";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export const metadata: Metadata = {
  title: "ASAP DBA - Expert Database Management Services | 24/7 Support",
  description:
    "Professional database management services for PostgreSQL, MySQL, MongoDB, and cloud databases. 24/7 monitoring, performance optimization, security, and seamless migrations. Trusted by businesses worldwide to keep databases fast, secure, and always available.",
  keywords: [
    "database management",
    "database administration",
    "database monitoring",
    "database optimization",
    "database security",
    "cloud database management",
    "PostgreSQL management",
    "MySQL administration",
    "MongoDB support",
    "AWS RDS management",
    "Azure database services",
    "Google Cloud SQL",
    "database migration services",
    "24/7 database support",
    "database performance tuning",
    "database backup and recovery",
    "managed database services",
    "database consulting",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ASAP DBA",
    title: "ASAP DBA - Expert Database Management Services | 24/7 Support",
    description:
      "Professional database management services for PostgreSQL, MySQL, MongoDB, and cloud databases. 24/7 monitoring, performance optimization, security, and seamless migrations. Trusted by businesses worldwide.",
    images: [
      {
        url: `${siteUrl}/assets/Asap-DBA_Logo.png`,
        width: 1200,
        height: 630,
        alt: "ASAP DBA - Expert Database Management Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@asapdba",
    creator: "@asapdba",
    title: "ASAP DBA - Expert Database Management Services | 24/7 Support",
    description:
      "Professional database management services for PostgreSQL, MySQL, MongoDB, and cloud databases. 24/7 monitoring, performance optimization, security, and seamless migrations.",
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ChoosingDatabaseSection />
      <WhyAsapDbaSection />
      <VideoCarouselSection />
      {/* <PartnersLogosSection /> */}
      <OurSolutionsSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
