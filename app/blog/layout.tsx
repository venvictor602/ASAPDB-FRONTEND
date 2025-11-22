import type { Metadata } from "next";

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
  openGraph: {
    title: "Blog - Database Management Insights | ASAP DBA",
    description:
      "Stay updated with database management insights, best practices, and industry trends.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Database Management Insights | ASAP DBA",
    description:
      "Stay updated with database management insights, best practices, and industry trends.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
