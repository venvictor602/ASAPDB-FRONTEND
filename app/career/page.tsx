import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CareerHero } from "@/components/career-hero";
import { CareerWhyJoin } from "@/components/career-why-join";
import { CareerOpenPositions } from "@/components/career-open-positions";
import { CareerBenefits } from "@/components/career-benefits";
import { CareerApplicationProcess } from "@/components/career-application-process";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export const metadata: Metadata = {
  title: "Careers - Join Our Team | ASAP DBA",
  description:
    "Join ASAP DBA and build your career with a team of passionate database experts. Explore open positions, benefits, and growth opportunities.",
  keywords: [
    "database administrator jobs",
    "cloud engineer careers",
    "database consultant jobs",
    "remote database jobs",
    "database administration careers",
    "tech jobs",
    "database engineering jobs",
  ],
  alternates: {
    canonical: `${siteUrl}/career`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/career`,
    siteName: "ASAP DBA",
    title: "Careers - Join Our Team | ASAP DBA",
    description:
      "Join ASAP DBA and build your career with a team of passionate database experts. Explore open positions, benefits, and growth opportunities.",
    images: [
      {
        url: `${siteUrl}/assets/Asap-DBA_Logo.png`,
        width: 1200,
        height: 630,
        alt: "ASAP DBA Careers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@asapdba",
    creator: "@asapdba",
    title: "Careers - Join Our Team | ASAP DBA",
    description:
      "Join ASAP DBA and build your career with a team of passionate database experts.",
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

export default function CareerPage() {
  return (
    <>
      <Navigation backgroundColor="white" />
      <div className="min-h-screen bg-white">
        <CareerHero />
        <CareerWhyJoin />
        <CareerOpenPositions />
        <CareerBenefits />
        <CareerApplicationProcess />
      </div>
      <Footer />
    </>
  );
}
