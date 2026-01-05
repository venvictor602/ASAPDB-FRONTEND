import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ServiceDetailPage } from "@/components/service-detail-page";
import {
  fetchAllServices,
  fetchServiceById,
  transformService,
} from "@/lib/api/server-helpers";
import type { ServiceAPI } from "@/lib/api/services-api";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export async function generateStaticParams() {
  const services = await fetchAllServices();
  return services.map((service: ServiceAPI) => ({
    slug: service.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const serviceId = parseInt(resolvedParams.slug);

  if (isNaN(serviceId)) {
    return {
      title: "Service Not Found | ASAP DBA",
    };
  }

  const apiService = await fetchServiceById(serviceId);

  if (!apiService) {
    return {
      title: "Service Not Found | ASAP DBA",
    };
  }

  const service = transformService(apiService);

  return {
    title: `${service.name} | ASAP DBA`,
    description: service.description,
    keywords: [
      service.name.toLowerCase(),
      "database management",
      "database administration",
      "database services",
    ],
    alternates: {
      canonical: `${siteUrl}/services/${serviceId}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${siteUrl}/services/${serviceId}`,
      siteName: "ASAP DBA",
      title: `${service.name} | ASAP DBA`,
      description: service.description,
      images: [
        {
          url: service.image || `${siteUrl}/assets/Asap-DBA_Logo.png`,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@asapdba",
      creator: "@asapdba",
      title: `${service.name} | ASAP DBA`,
      description: service.description,
      images: [service.image || `${siteUrl}/assets/Asap-DBA_Logo.png`],
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
  const serviceId = parseInt(resolvedParams.slug);

  if (isNaN(serviceId)) {
    notFound();
  }

  const apiService = await fetchServiceById(serviceId);

  if (!apiService) {
    notFound();
  }

  const service = transformService(apiService);

  // Transform to match component interface
  const serviceForComponent = {
    id: service.id.toString(),
    slug: serviceId.toString(),
    title: service.name,
    description: service.description,
    longDescription: service.description,
    image: service.image || "/assets/image1.png",
    features: Array.isArray(service.keyFeatures)
      ? service.keyFeatures.filter((f: string) => f && f.trim())
      : typeof service.keyFeatures === "string" && service.keyFeatures
        ? service.keyFeatures.split("\n").filter((f: string) => f.trim())
        : [],
    benefits: Array.isArray(service.benefits)
      ? service.benefits.filter((b: string) => b && b.trim())
      : typeof service.benefits === "string" && service.benefits
        ? service.benefits.split("\n").filter((b: string) => b.trim())
        : [],
  };

  return (
    <>
      <Navigation backgroundColor="white" />
      <ServiceDetailPage service={serviceForComponent} />
      <Footer />
    </>
  );
}
