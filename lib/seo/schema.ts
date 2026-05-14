import { seoExams, seoLocations } from "@/data/seo/programmatic";
import type { BreadcrumbItem, PageFaq } from "@/lib/seo/content";
import type { SeoPageRecord } from "@/lib/seo/routes";
import { instructorProfile, organization, SITE_NAME, SITE_URL } from "@/lib/seo/site";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: organization.name,
    url: organization.url,
    email: organization.email,
    telephone: organization.telephone,
    areaServed: organization.areaServed,
    address: {
      "@type": "PostalAddress",
      addressLocality: organization.address.locality,
      addressRegion: organization.address.region,
      addressCountry: organization.address.country,
    },
    founder: {
      "@type": "Person",
      name: instructorProfile.name,
      jobTitle: instructorProfile.jobTitle,
    },
    knowsAbout: [
      "Olympiad maths coaching",
      "Mental maths training",
      "Online maths enrichment",
      "SASMO preparation",
      "SOF IMO preparation",
    ],
  };
}

export function buildInstructorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: instructorProfile.name,
    description: instructorProfile.description,
    jobTitle: instructorProfile.jobTitle,
    worksFor: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function buildFaqSchema(faqs: PageFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildWebPageSchema(record: SeoPageRecord, title: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${SITE_URL}${record.pathname}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: record.examKey ? seoExams[record.examKey].name : SITE_NAME,
  };
}

export function buildCourseSchema(record: SeoPageRecord) {
  if (!record.examKey) return null;

  const exam = seoExams[record.examKey];

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${exam.name} Preparation`,
    description: exam.overview,
    provider: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: "en",
    teaches: exam.syllabusThemes,
    educationalCredentialAwarded: exam.family === "exam" ? exam.name : "Advanced maths enrichment",
  };
}

export function buildTutoringServiceSchema(record: SeoPageRecord) {
  const location = record.locationKey ? seoLocations[record.locationKey] : undefined;
  const exam = record.examKey ? seoExams[record.examKey] : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: exam ? `${exam.name} Coaching` : `${SITE_NAME} Maths Coaching`,
    description: exam?.overview ?? "Premium maths, olympiad, and mental maths coaching.",
    provider: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: location ? [location.name, location.state] : organization.areaServed,
    serviceType: "Maths tutoring and olympiad coaching",
    telephone: organization.telephone,
    url: `${SITE_URL}${record.pathname}`,
  };
}
