import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { DatabaseManagementSection } from "@/components/database-management-section";
import { BlogSection } from "@/components/blog-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.com";

export const metadata: Metadata = {
  title: "ASAP DBA - Database Management Services | 24/7 Database Support",
  description:
    "Professional database management services for PostgreSQL, MySQL, MongoDB, and cloud databases. 24/7 monitoring, performance optimization, security, and migrations. Trusted by businesses worldwide.",
  keywords: [
    "database management",
    "database administration",
    "database monitoring",
    "database optimization",
    "database security",
    "cloud database",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "AWS RDS",
    "database migration",
    "24/7 database support",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ASAP DBA",
    title: "ASAP DBA - Database Management Services | 24/7 Database Support",
    description:
      "Professional database management services for PostgreSQL, MySQL, MongoDB, and cloud databases. 24/7 monitoring, performance optimization, security, and migrations.",
    images: [
      {
        url: `${siteUrl}/assets/Asap-Dba hero Image.png`,
        width: 1200,
        height: 630,
        alt: "ASAP DBA - Database Management Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASAP DBA - Database Management Services | 24/7 Database Support",
    description:
      "Professional database management services for PostgreSQL, MySQL, MongoDB, and cloud databases. 24/7 monitoring, performance optimization, security, and migrations.",
    images: [`${siteUrl}/assets/Asap-Dba hero Image.png`],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <DatabaseManagementSection />
      <BlogSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
