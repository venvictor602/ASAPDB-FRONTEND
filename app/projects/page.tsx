import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ProjectsHero } from "@/components/projects-hero";
import { ProjectsOverviewSection } from "@/components/projects-overview-section";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export const metadata: Metadata = {
  title: "Database Projects & Success Stories | ASAP DBA",
  description:
    "Explore real-world database projects and success stories. See how we've helped clients optimize performance, migrate to the cloud, and scale their database infrastructure.",
  keywords: [
    "database projects",
    "database case studies",
    "database success stories",
    "database portfolio",
    "database optimization projects",
    "cloud migration projects",
    "database consulting projects",
  ],
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/projects`,
    siteName: "ASAP DBA",
    title: "Database Projects & Success Stories | ASAP DBA",
    description:
      "Real-world database solutions delivered for clients across various industries.",
    images: [
      {
        url: `${siteUrl}/assets/Asap-DBA_Logo.png`,
        width: 1200,
        height: 630,
        alt: "ASAP DBA Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@asapdba",
    creator: "@asapdba",
    title: "Database Projects & Success Stories | ASAP DBA",
    description:
      "Real-world database solutions delivered for clients across various industries.",
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

export default function ProjectsPage() {
  return (
    <>
      <Navigation backgroundColor="white" />
      <div className="min-h-screen bg-white">
        <ProjectsHero />
        <ProjectsOverviewSection />
      </div>
      <Footer />
    </>
  );
}
