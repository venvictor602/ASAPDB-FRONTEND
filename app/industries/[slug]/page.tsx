import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { IndustryDetailPage } from "@/components/industry-detail-page";
import { getIndustryBySlug, getAllIndustries } from "@/lib/industries-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export async function generateStaticParams() {
  const industries = getAllIndustries();
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const industry = getIndustryBySlug(resolvedParams.slug);

  if (!industry) {
    return {
      title: "Industry Not Found | ASAP DBA",
    };
  }

  return {
    title: `${industry.title} Database Solutions | ASAP DBA`,
    description: industry.longDescription,
    keywords: [
      `${industry.title.toLowerCase()} database solutions`,
      `${industry.title.toLowerCase()} database management`,
      ...industry.challenges.map((c) => c.toLowerCase()),
      ...industry.solutions.map((s) => s.toLowerCase()),
      "database management",
      "database administration",
      industry.slug,
    ],
    alternates: {
      canonical: `${siteUrl}/industries/${industry.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${siteUrl}/industries/${industry.slug}`,
      siteName: "ASAP DBA",
      title: `${industry.title} Database Solutions | ASAP DBA`,
      description: industry.longDescription,
      images: [
        {
          url: `${siteUrl}${industry.image}`,
          width: 1200,
          height: 630,
          alt: `${industry.title} Database Solutions`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@asapdba",
      creator: "@asapdba",
      title: `${industry.title} Database Solutions | ASAP DBA`,
      description: industry.longDescription,
      images: [`${siteUrl}${industry.image}`],
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
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const industry = getIndustryBySlug(resolvedParams.slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <Navigation backgroundColor="white" />
      <IndustryDetailPage industry={industry} />
      <Footer />
    </>
  );
}
