import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { AboutWhyDbaHero } from "@/components/about-why-dba-hero";
import { AboutWhyDbaCoreValue } from "@/components/about-why-dba-core-value";
// import { PartnersLogosSection } from "@/components/partners-logos-section";
import { AboutWhyDbaInHouseTeam } from "@/components/about-why-dba-in-house-team";
import { Footer } from "@/components/footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export const metadata: Metadata = {
  title: "Why ASAP DBA - Expert Database Management Team | ASAP DBA",
  description:
    "Discover why ASAP DBA is the trusted choice for database management. Learn about our expert team, 24/7 support, proactive monitoring, and commitment to keeping your databases fast, secure, and always available.",
  keywords: [
    "why ASAP DBA",
    "database management company",
    "expert database administrators",
    "24/7 database support",
    "database management team",
    "database administration experts",
    "proactive database monitoring",
    "database management services",
    "trusted database partner",
    "database management expertise",
  ],
  alternates: {
    canonical: `${siteUrl}/about/why-asap-dba`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/about/why-asap-dba`,
    siteName: "ASAP DBA",
    title: "Why ASAP DBA - Expert Database Management Team | ASAP DBA",
    description:
      "Discover why ASAP DBA is the trusted choice for database management. Learn about our expert team, 24/7 support, and proactive monitoring.",
    images: [
      {
        url: `${siteUrl}/assets/Asap-DBA_Logo.png`,
        width: 1200,
        height: 630,
        alt: "Why ASAP DBA - Expert Database Management Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@asapdba",
    creator: "@asapdba",
    title: "Why ASAP DBA - Expert Database Management Team | ASAP DBA",
    description:
      "Discover why ASAP DBA is the trusted choice for database management. Expert team, 24/7 support, and proactive monitoring.",
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

export default function WhyAsapDbaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation backgroundColor="white" />
      <AboutWhyDbaHero />
      <AboutWhyDbaCoreValue />
      {/* <PartnersLogosSection /> */}
      <AboutWhyDbaInHouseTeam />
      <Footer />
    </main>
  );
}
