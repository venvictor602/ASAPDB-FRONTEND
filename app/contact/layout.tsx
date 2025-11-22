import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | ASAP DBA",
  description:
    "Contact ASAP DBA for professional database management services. Get in touch via email, phone, or our contact form. We're available 24/7 to assist with your database needs.",
  keywords: [
    "contact ASAP DBA",
    "database management contact",
    "database support contact",
    "database consultation",
    "database services inquiry",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/contact`,
    siteName: "ASAP DBA",
    title: "Contact Us - Get in Touch | ASAP DBA",
    description:
      "Contact ASAP DBA for professional database management services. Get in touch via email, phone, or our contact form. We're available 24/7.",
    images: [
      {
        url: `${siteUrl}/assets/Asap-DBA_Logo.png`,
        width: 1200,
        height: 630,
        alt: "ASAP DBA Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get in Touch | ASAP DBA",
    description:
      "Contact ASAP DBA for professional database management services. Get in touch via email, phone, or our contact form.",
    images: [`${siteUrl}/assets/Asap-DBA_Logo.png`],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
