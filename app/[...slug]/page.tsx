import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import SeoLandingPage from "@/components/seo/SeoLandingPage";
import { buildSeoLandingContent } from "@/lib/seo/content";
import { buildProgrammaticMetadata } from "@/lib/seo/metadata";
import { getSeoPageRecordBySegments, programmaticSeoRoutes } from "@/lib/seo/routes";
import {
  buildBreadcrumbSchema,
  buildCourseSchema,
  buildFaqSchema,
  buildInstructorSchema,
  buildTutoringServiceSchema,
  buildWebPageSchema,
} from "@/lib/seo/schema";

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 86400;

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

function getRecordOr404(segments: string[]) {
  const record = getSeoPageRecordBySegments(segments);
  if (!record) notFound();
  return record;
}

export async function generateStaticParams() {
  return programmaticSeoRoutes.map((route) => ({
    slug: route.segments,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const record = getRecordOr404(slug);
  return buildProgrammaticMetadata(record);
}

export default async function ProgrammaticSeoPage({ params }: PageProps) {
  const { slug } = await params;
  const record = getRecordOr404(slug);
  const content = buildSeoLandingContent(record);
  const metadata = buildProgrammaticMetadata(record);
  const description =
    typeof metadata.description === "string" ? metadata.description : "Premium maths enrichment guidance.";

  const schemas = [
    buildWebPageSchema(record, content.title, description),
    buildBreadcrumbSchema(content.breadcrumbs),
    buildFaqSchema(content.faqs),
    buildCourseSchema(record),
    buildTutoringServiceSchema(record),
    buildInstructorSchema(),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <SeoLandingPage content={content} />
    </>
  );
}
