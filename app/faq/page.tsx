import type { Metadata } from "next";
import { FaqSection } from "@/components/faq-section";
import { Navigation } from "@/components/navigation";

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
  ],
  openGraph: {
    title: "FAQ - Frequently Asked Questions | ASAP DBA",
    description:
      "Find answers to common questions about our database management services.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "FAQ - Frequently Asked Questions | ASAP DBA",
    description:
      "Find answers to common questions about our database management services.",
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
