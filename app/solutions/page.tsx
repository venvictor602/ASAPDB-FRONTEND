import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SolutionsHero } from "@/components/solutions-hero";
import { SolutionsOverviewSection } from "@/components/solutions-overview-section";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export const metadata: Metadata = {
  title: "Database Solutions - Performance, Security & Scalability | ASAP DBA",
  description:
    "Comprehensive database solutions including performance optimization, 24/7 monitoring, automated backups, cloud management, security, and scalability. Expert solutions for modern businesses.",
  keywords: [
    "database solutions",
    "performance optimization",
    "database monitoring",
    "backup and recovery",
    "cloud database management",
    "database security",
    "database scalability",
    "database consulting",
  ],
  alternates: {
    canonical: `${siteUrl}/solutions`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/solutions`,
    siteName: "ASAP DBA",
    title: "Database Solutions - Performance, Security & Scalability | ASAP DBA",
    description:
      "Comprehensive database solutions including performance optimization, 24/7 monitoring, automated backups, cloud management, security, and scalability.",
    images: [
      {
        url: `${siteUrl}/assets/Asap-DBA_Logo.png`,
        width: 1200,
        height: 630,
        alt: "ASAP DBA Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@asapdba",
    creator: "@asapdba",
    title: "Database Solutions - Performance, Security & Scalability | ASAP DBA",
    description:
      "Comprehensive database solutions for modern businesses. Performance, security, and scalability.",
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

export default function SolutionsPage() {
  return (
    <>
      <Navigation backgroundColor="white" />
      <div className="min-h-screen bg-white">
        <SolutionsHero />
        <SolutionsOverviewSection />
      </div>
      <Footer />
    </>
  );
}

