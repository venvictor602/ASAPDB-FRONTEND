import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export const metadata: Metadata = {
  title: "Blog - Database Management Insights & Best Practices | ASAP DBA",
  description:
    "Stay updated with expert database management insights, practical tips, and industry trends. Learn about performance optimization, security best practices, cloud migrations, and database administration from our experienced team.",
  keywords: [
    "database blog",
    "database management articles",
    "database performance tips",
    "database security best practices",
    "cloud database migration",
    "database optimization guides",
    "PostgreSQL tips",
    "MySQL best practices",
    "MongoDB tutorials",
    "database administration guides",
    "database monitoring tips",
    "database backup strategies",
  ],
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/blog`,
    siteName: "ASAP DBA",
    title: "Blog - Database Management Insights & Best Practices | ASAP DBA",
    description:
      "Stay updated with expert database management insights, practical tips, and industry trends. Learn about performance optimization, security best practices, cloud migrations, and database administration.",
    images: [
      {
        url: `${siteUrl}/assets/Asap-DBA_Logo.png`,
        width: 1200,
        height: 630,
        alt: "ASAP DBA Blog - Database Management Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@asapdba",
    creator: "@asapdba",
    title: "Blog - Database Management Insights & Best Practices | ASAP DBA",
    description:
      "Stay updated with expert database management insights, practical tips, and industry trends. Learn about performance optimization, security, migrations, and more.",
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

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
