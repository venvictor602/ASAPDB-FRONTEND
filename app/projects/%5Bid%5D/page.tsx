import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ProjectDetailsContent } from "@/components/project-details-content";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

// Note: In Next.js 13+ with App Router, params is an object, but it's often passed as a Promise in some configurations.
// However, for static params or standard dynamic routes, this is the common way.
// We'll use the ID to generate metadata for better SEO.

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = params;

  // Since we are fetching data on the client side in ProjectDetailsContent,
  // we could fetch it here too for metadata if we wanted.
  // For now, we'll use a generic title that includes the ID or a placeholder.

  return {
    title: `Project Details | ASAP DBA`,
    description:
      "Explore detailed database solutions and project success stories from ASAP DBA.",
  };
}

export default function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { id } = params;

  return (
    <>
      <Navigation backgroundColor="white" />
      <main className="min-h-screen">
        <ProjectDetailsContent id={id} />
      </main>
      <Footer />
    </>
  );
}
