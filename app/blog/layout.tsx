import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.com";

export const metadata: Metadata = {
  title: "Blog - Database Management Insights | ASAP DBA",
  description:
    "Stay updated with database management insights, best practices, and industry trends. Learn about performance optimization, security, migrations, and cloud database management.",
  keywords: [
    "database blog",
    "database management articles",
    "database performance tips",
    "database security best practices",
    "cloud database migration",
    "database optimization guides",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/blog`,
    siteName: "ASAP DBA",
    title: "Blog - Database Management Insights | ASAP DBA",
    description:
      "Stay updated with database management insights, best practices, and industry trends. Learn about performance optimization, security, migrations, and cloud database management.",
    images: [
      {
        url: `${siteUrl}/assets/Asap-Dba hero Image.png`,
        width: 1200,
        height: 630,
        alt: "ASAP DBA Blog - Database Management Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Database Management Insights | ASAP DBA",
    description:
      "Stay updated with database management insights, best practices, and industry trends. Learn about performance optimization, security, migrations, and cloud database management.",
    images: [`${siteUrl}/assets/Asap-Dba hero Image.png`],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
