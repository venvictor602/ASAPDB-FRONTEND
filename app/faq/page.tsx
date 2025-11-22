import type { Metadata } from "next";
import { FaqSection } from "@/components/faq-section";
import { Navigation } from "@/components/navigation";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | ASAP DBA",
  description:
    "Find answers to common questions about our database management services, including platform support, response times, migrations, security, backups, and query optimization.",
  keywords: [
    "database management FAQ",
    "database administration questions",
    "database support FAQ",
    "database migration FAQ",
    "database security FAQ",
    "database management help",
    "database support questions",
  ],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/faq`,
    siteName: "ASAP DBA",
    title: "FAQ - Frequently Asked Questions | ASAP DBA",
    description:
      "Find answers to common questions about our database management services, including platform support, response times, migrations, security, backups, and query optimization.",
    images: [
      {
        url: `${siteUrl}/assets/Asap-DBA_Logo.png`,
        width: 1200,
        height: 630,
        alt: "ASAP DBA FAQ - Frequently Asked Questions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Frequently Asked Questions | ASAP DBA",
    description:
      "Find answers to common questions about our database management services, including platform support, response times, migrations, security, backups, and query optimization.",
    images: [`${siteUrl}/assets/Asap-DBA_Logo.png`],
  },
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FaqSection />
    </div>
  );
}
