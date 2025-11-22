import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.com"
  ),
  title: {
    default: "ASAP DBA - Database Management Services | 24/7 Database Support",
    template: "%s | ASAP DBA",
  },
  description:
    "Professional database management services for PostgreSQL, MySQL, MongoDB, and cloud databases. 24/7 monitoring, performance optimization, security, and migrations. Trusted by businesses worldwide.",
  keywords: [
    "database management",
    "database administration",
    "database monitoring",
    "database optimization",
    "database security",
    "cloud database",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "AWS RDS",
    "database migration",
    "24/7 database support",
  ],
  authors: [{ name: "ASAP DBA" }],
  creator: "ASAP DBA",
  publisher: "ASAP DBA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/Asap-favico.svg",
    shortcut: "/Asap-favico.svg",
    apple: "/Asap-favico.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "ASAP DBA",
    title: "ASAP DBA - Database Management Services",
    description:
      "The smarter way to manage your databases 24/7. We ensure your databases stay fast, secure, and always available.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASAP DBA - Database Management Services",
    description:
      "The smarter way to manage your databases 24/7. We ensure your databases stay fast, secure, and always available.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ASAP DBA",
    description:
      "Professional database management services for PostgreSQL, MySQL, MongoDB, and cloud databases. 24/7 monitoring, performance optimization, security, and migrations.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.com"}/assets/Asap-DBA_Logo.png`,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${raleway.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
