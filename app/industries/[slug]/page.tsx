import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { IndustryDetailPage } from "@/components/industry-detail-page";
import {
  fetchAllIndustries,
  fetchIndustryById,
  transformIndustry,
} from "@/lib/api/server-helpers";
import type { IndustryAPI } from "@/lib/api/services-api";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export async function generateStaticParams() {
  const industries = await fetchAllIndustries();
  return industries.map((industry: IndustryAPI) => ({
    slug: industry.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const industryId = parseInt(resolvedParams.slug);

  if (isNaN(industryId)) {
    return {
      title: "Industry Not Found | ASAP DBA",
    };
  }

  const apiIndustry = await fetchIndustryById(industryId);

  if (!apiIndustry) {
    return {
      title: "Industry Not Found | ASAP DBA",
    };
  }

  const industry = transformIndustry(apiIndustry);

  return {
    title: `${industry.name} Database Solutions | ASAP DBA`,
    description: industry.description,
    keywords: [
      `${industry.name.toLowerCase()} database solutions`,
      `${industry.name.toLowerCase()} database management`,
      ...industry.commonChallenges.map((c: { title: string }) =>
        c.title.toLowerCase()
      ),
      ...industry.solutionsList.map((s: { title: string }) =>
        s.title.toLowerCase()
      ),
      "database management",
      "database administration",
    ],
    alternates: {
      canonical: `${siteUrl}/industries/${industryId}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${siteUrl}/industries/${industryId}`,
      siteName: "ASAP DBA",
      title: `${industry.name} Database Solutions | ASAP DBA`,
      description: industry.description,
      images: [
        {
          url: industry.image || `${siteUrl}/assets/Asap-DBA_Logo.png`,
          width: 1200,
          height: 630,
          alt: `${industry.name} Database Solutions`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@asapdba",
      creator: "@asapdba",
      title: `${industry.name} Database Solutions | ASAP DBA`,
      description: industry.description,
      images: [industry.image || `${siteUrl}/assets/Asap-DBA_Logo.png`],
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
  const industryId = parseInt(resolvedParams.slug);

  if (isNaN(industryId)) {
    notFound();
  }

  const apiIndustry = await fetchIndustryById(industryId);

  if (!apiIndustry) {
    notFound();
  }

  const industry = transformIndustry(apiIndustry);

  // Transform to match component interface
  const industryForComponent = {
    id: industry.id.toString(),
    slug: industryId.toString(),
    title: industry.name,
    description: industry.description,
    longDescription: industry.description,
    image: industry.image || "/assets/Image1.png",
    challenges: industry.commonChallenges.map(
      (c: { title: string }) => c.title
    ),
    solutions: industry.solutionsList.map((s: { title: string }) => s.title),
  };

  return (
    <>
      <Navigation backgroundColor="white" />
      <IndustryDetailPage industry={industryForComponent} />
      <Footer />
    </>
  );
}
