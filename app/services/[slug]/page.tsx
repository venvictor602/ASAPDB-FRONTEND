import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { getServiceBySlug, getAllServices } from "@/lib/services-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    return {
      title: "Service Not Found | ASAP DBA",
    };
  }

  return {
    title: `${service.title} | ASAP DBA`,
    description: service.longDescription,
    keywords: [
      service.title.toLowerCase(),
      ...service.features.map((f) => f.toLowerCase()),
      ...service.benefits.map((b) => b.toLowerCase()),
      "database management",
      "database administration",
      "database services",
      service.slug,
    ],
    alternates: {
      canonical: `${siteUrl}/services/${service.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${siteUrl}/services/${service.slug}`,
      siteName: "ASAP DBA",
      title: `${service.title} | ASAP DBA`,
      description: service.longDescription,
      images: [
        {
          url: `${siteUrl}${service.image}`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@asapdba",
      creator: "@asapdba",
      title: `${service.title} | ASAP DBA`,
      description: service.longDescription,
      images: [`${siteUrl}${service.image}`],
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

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navigation backgroundColor="white" />
      <ServiceDetailPage service={service} />
      <Footer />
    </>
  );
}

