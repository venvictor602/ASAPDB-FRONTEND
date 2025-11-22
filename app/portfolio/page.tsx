import type { Metadata } from "next";
import { PortfolioSection } from "@/components/portfolio-section";
import { PortfolioHeroSection } from "@/components/portfolio-hero-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export const metadata: Metadata = {
  title: "Portfolio - Our Work & Projects | ASAP DBA",
  description:
    "Explore our portfolio of successful database management projects and solutions. See how we've helped businesses optimize their database infrastructure, improve performance, and achieve their goals.",
  keywords: [
    "database management portfolio",
    "database projects",
    "database solutions portfolio",
    "database administration projects",
    "database migration projects",
    "database optimization portfolio",
    "database management case studies",
    "database services portfolio",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/portfolio`,
    siteName: "ASAP DBA",
    title: "Portfolio - Our Work & Projects | ASAP DBA",
    description:
      "Explore our portfolio of successful database management projects and solutions. See how we've helped businesses optimize their database infrastructure, improve performance, and achieve their goals.",
    images: [
      {
        url: `${siteUrl}/assets/Asap-DBA_Logo.png`,
        width: 1200,
        height: 630,
        alt: "ASAP DBA Portfolio - Our Work & Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Our Work & Projects | ASAP DBA",
    description:
      "Explore our portfolio of successful database management projects and solutions. See how we've helped businesses optimize their database infrastructure, improve performance, and achieve their goals.",
    images: [`${siteUrl}/assets/Asap-DBA_Logo.png`],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        <PortfolioHeroSection />
        <PortfolioSection />
        <Footer />
      </div>
    </>
  );
}

