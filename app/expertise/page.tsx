import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { ExpertiseHero } from "@/components/expertise-hero";
import { ExpertiseServicesTabs } from "@/components/expertise-services-tabs";
import { ExpertiseWhyAsapDba } from "@/components/expertise-why-asap-dba";
import { ExpertiseRelatedServices } from "@/components/expertise-related-services";
import { Footer } from "@/components/footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export const metadata: Metadata = {
  title: "Expertise - Database & Cloud Solutions | ASAP DBA",
  description:
    "Explore ASAP DBA's expertise in database management, cloud solutions, and enterprise database services. Learn about our comprehensive solutions for performance optimization, security, scalability, and 24/7 monitoring.",
  keywords: [
    "database expertise",
    "database management expertise",
    "cloud database solutions",
    "database administration expertise",
    "database optimization expertise",
    "enterprise database solutions",
    "database consulting expertise",
    "database management services",
    "database performance expertise",
    "cloud infrastructure expertise",
  ],
  alternates: {
    canonical: `${siteUrl}/expertise`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/expertise`,
    siteName: "ASAP DBA",
    title: "Expertise - Database & Cloud Solutions | ASAP DBA",
    description:
      "Explore ASAP DBA's expertise in database management, cloud solutions, and enterprise database services. Comprehensive solutions for performance, security, and scalability.",
    images: [
      {
        url: `${siteUrl}/assets/Asap-DBA_Logo.png`,
        width: 1200,
        height: 630,
        alt: "ASAP DBA Expertise - Database & Cloud Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@asapdba",
    creator: "@asapdba",
    title: "Expertise - Database & Cloud Solutions | ASAP DBA",
    description:
      "Explore ASAP DBA's expertise in database management, cloud solutions, and enterprise database services.",
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

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation backgroundColor="transparent" />
      <ExpertiseHero />
      <ExpertiseServicesTabs />
      <ExpertiseWhyAsapDba />
      <ExpertiseRelatedServices />
      <Footer />
    </main>
  );
}
