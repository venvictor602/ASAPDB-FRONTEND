import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Database Experts | ASAP DBA",
  description:
    "Contact ASAP DBA for professional database management services. Reach out via email, phone, or our contact form. We're available 24/7 to help with database administration, migrations, optimization, and support. Get a free consultation today.",
  keywords: [
    "contact ASAP DBA",
    "database management contact",
    "database support contact",
    "database consultation",
    "database services inquiry",
    "database expert contact",
    "database support team",
    "database management help",
    "database services quote",
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/contact`,
    siteName: "ASAP DBA",
    title: "Contact Us - Get in Touch with Database Experts | ASAP DBA",
    description:
      "Contact ASAP DBA for professional database management services. Reach out via email, phone, or our contact form. We're available 24/7 to help with your database needs.",
    images: [
      {
        url: `${siteUrl}/assets/Asap-DBA_Logo.png`,
        width: 1200,
        height: 630,
        alt: "ASAP DBA Contact - Get in Touch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@asapdba",
    creator: "@asapdba",
    title: "Contact Us - Get in Touch with Database Experts | ASAP DBA",
    description:
      "Contact ASAP DBA for professional database management services. We're available 24/7 to help with database administration, migrations, optimization, and support.",
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
