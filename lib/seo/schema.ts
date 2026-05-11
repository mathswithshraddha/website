import { seoExams, seoLocations } from "@/data/seo/programmatic";
import type { BreadcrumbItem, PageFaq } from "@/lib/seo/content";
import type { SeoPageRecord } from "@/lib/seo/routes";
import { organization, SITE_NAME, SITE_URL } from "@/lib/seo/site";

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
    educationalCredentialAwarded: exam.family === "exam" ? exam.name : "Advanced maths enrichment",
  };
}

export function buildLocalBusinessSchema(record: SeoPageRecord) {
  if (!record.locationKey) return null;
  const location = seoLocations[record.locationKey];

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${SITE_NAME} - ${location.name}`,
    description: `Premium maths, olympiad, and mental maths coaching for families in ${location.name}.`,
    areaServed: location.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressRegion: location.state,
      addressCountry: "IN",
    },
    telephone: organization.telephone,
    url: `${SITE_URL}${record.pathname}`,
  };
}
