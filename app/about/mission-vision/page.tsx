import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { AboutMissionVisionHero } from "@/components/about-mission-vision-hero";
import { AboutMissionVisionContent } from "@/components/about-mission-vision-content";
import { AboutMissionVisionValues } from "@/components/about-mission-vision-values";
import { Footer } from "@/components/footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export const metadata: Metadata = {
  title: "Our Mission & Vision - Database Management Excellence | ASAP DBA",
  description:
    "Learn about ASAP DBA's mission and vision. We're committed to providing exceptional database management services, empowering businesses with reliable, secure, and high-performing database infrastructure.",
  keywords: [
    "ASAP DBA mission",
    "ASAP DBA vision",
    "database management mission",
    "database administration vision",
    "database management values",
    "database management company values",
    "database management goals",
    "database management commitment",
  ],
  alternates: {
    canonical: `${siteUrl}/about/mission-vision`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/about/mission-vision`,
    siteName: "ASAP DBA",
    title: "Our Mission & Vision - Database Management Excellence | ASAP DBA",
    description:
      "Learn about ASAP DBA's mission and vision. We're committed to providing exceptional database management services and empowering businesses.",
    images: [
      {
        url: `${siteUrl}/assets/Asap-DBA_Logo.png`,
        width: 1200,
        height: 630,
        alt: "ASAP DBA Mission & Vision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@asapdba",
    creator: "@asapdba",
    title: "Our Mission & Vision - Database Management Excellence | ASAP DBA",
    description:
      "Learn about ASAP DBA's mission and vision. Committed to exceptional database management services.",
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

export default function MissionVisionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation backgroundColor="white" />
      <AboutMissionVisionHero />
      <AboutMissionVisionContent />
      <AboutMissionVisionValues />
      <Footer />
    </main>
  );
}
