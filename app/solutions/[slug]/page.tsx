import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SolutionDetailPage } from "@/components/solution-detail-page";
import { getSolutionBySlug, getAllSolutions } from "@/lib/solutions-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export async function generateStaticParams() {
  const solutions = getAllSolutions();
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const solution = getSolutionBySlug(resolvedParams.slug);

  if (!solution) {
    return {
      title: "Solution Not Found | ASAP DBA",
    };
  }

  return {
    title: `${solution.title} | Database Solutions | ASAP DBA`,
    description: solution.longDescription,
    keywords: [
      solution.title.toLowerCase(),
      ...solution.features.map((f) => f.toLowerCase()),
      ...solution.benefits.map((b) => b.toLowerCase()),
      ...solution.useCases.map((u) => u.toLowerCase()),
      "database solutions",
      "database management",
      "database administration",
      solution.slug,
    ],
    alternates: {
      canonical: `${siteUrl}/solutions/${solution.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${siteUrl}/solutions/${solution.slug}`,
      siteName: "ASAP DBA",
      title: `${solution.title} | Database Solutions | ASAP DBA`,
      description: solution.longDescription,
      images: [
        {
          url: `${siteUrl}${solution.image}`,
          width: 1200,
          height: 630,
          alt: solution.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@asapdba",
      creator: "@asapdba",
      title: `${solution.title} | Database Solutions | ASAP DBA`,
      description: solution.longDescription,
      images: [`${siteUrl}${solution.image}`],
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

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const solution = getSolutionBySlug(resolvedParams.slug);

  if (!solution) {
    notFound();
  }

  return (
    <>
      <Navigation backgroundColor="white" />
      <SolutionDetailPage solution={solution} />
      <Footer />
    </>
  );
}

