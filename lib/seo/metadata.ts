import type { Metadata } from "next";
import { parentIntentPages, seoExams, seoLocations } from "@/data/seo/programmatic";
import { getRegionForRecord } from "@/lib/seo/routes";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, siteDescription } from "@/lib/seo/site";
import type { SeoPageRecord } from "@/lib/seo/routes";

function compact(parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" | ");
}

export function buildSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${SITE_NAME} | Premium Olympiad & Mental Maths Programmes`,
      template: `%s | ${SITE_NAME}`,
    },
    description: siteDescription,
    applicationName: SITE_NAME,
    alternates: {
      canonical: SITE_URL,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: SITE_NAME,
      url: SITE_URL,
      title: `${SITE_NAME} | Premium Olympiad & Mental Maths Programmes`,
      description: siteDescription,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_NAME,
      description: siteDescription,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function buildProgrammaticMetadata(record: SeoPageRecord): Metadata {
  const exam = record.examKey ? seoExams[record.examKey] : undefined;
  const location = record.locationKey ? seoLocations[record.locationKey] : undefined;
  const region = getRegionForRecord(record);
  const parentIntent = record.parentIntentSlug
    ? parentIntentPages.find((page) => page.slug === record.parentIntentSlug)
    : undefined;

  const canonical = `${SITE_URL}${record.pathname}`;

  const title =
    record.kind === "exam-city-grade" && exam && location && record.grade
      ? `${exam.name} for Class ${record.grade} in ${location.name}`
      : record.kind === "exam-grade" && exam && record.grade
        ? `${exam.name} for Class ${record.grade}`
        : record.kind === "exam-city" && exam && location
          ? `${exam.name} in ${location.name}`
          : record.kind === "local" && location
            ? compact([
                record.localTopic === "olympiad-coaching"
                  ? `Olympiad Coaching in ${location.name}`
                  : record.localTopic === "mental-maths-classes"
                    ? `Mental Maths Classes in ${location.name}`
                    : `Maths Classes in ${location.name}`,
                "Premium Small-Batch Coaching",
              ])
            : record.kind === "comparison"
              ? record.comparisonSlug?.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
              : record.kind === "parent-intent" && parentIntent
                ? parentIntent.title
                : exam
                  ? `${exam.name} Online Programme`
                  : SITE_NAME;

  const description =
    record.kind === "exam-city-grade" && exam && location && record.grade
      ? `Parent-focused ${exam.name} preparation for Class ${record.grade} students in ${location.name}, with concept-first coaching, olympiad guidance, and live online support.`
      : record.kind === "exam-grade" && exam && record.grade
        ? `Understand whether ${exam.name} is right for Class ${record.grade} students, what to prepare, and how Maths with Shraddha supports steady olympiad growth.`
        : record.kind === "exam-city" && exam && location
          ? `Explore ${exam.name} coaching for students in ${location.name}. Structured preparation, parent guidance, and premium maths mentoring for ambitious learners.`
          : record.kind === "local" && location
            ? `Premium maths coaching for families in ${location.name}, ${location.state}. Olympiad maths, mental maths, and online enrichment with small-batch mentoring.`
            : record.kind === "comparison"
              ? `A parent-friendly comparison page to help you understand fit, difficulty, and long-term learning outcomes before choosing a maths enrichment path.`
              : record.kind === "parent-intent" && parentIntent
                ? `${parentIntent.title} explained for parents, with practical guidance on fit, preparation, and long-term maths development.`
                : exam
                  ? `${exam.overview} Learn how Maths with Shraddha supports premium, concept-led maths enrichment.`
                  : siteDescription;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        [region.locale]: canonical,
        "x-default": canonical,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "article",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
