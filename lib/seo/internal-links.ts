import { resourceArticles } from "@/data/resources";
import { comparisonPages, parentIntentPages, seoExams, seoLocations } from "@/data/seo/programmatic";
import { getRouteByPath, type SeoPageRecord } from "@/lib/seo/routes";

export interface InternalPageLink {
  href: string;
  label: string;
}

export interface InternalLinkSection {
  title: string;
  links: InternalPageLink[];
}

function appendIfIndexable(links: InternalPageLink[], href: string, label: string) {
  if (href.startsWith("/resources") || href === "/resources" || href === "/locations" || href === "/olympiads") {
    links.push({ href, label });
    return;
  }

  if (href.startsWith("/exams") || href === "/international" || href === "/courses") {
    links.push({ href, label });
    return;
  }

  if (getRouteByPath(href)) {
    links.push({ href, label });
  }
}

export function getInternalLinkSections(record: SeoPageRecord): InternalLinkSection[] {
  const sections: InternalLinkSection[] = [];

  if (record.locationKey) {
    const nearbyLinks: InternalPageLink[] = [];
    for (const nearbyKey of seoLocations[record.locationKey].nearby) {
      appendIfIndexable(
        nearbyLinks,
        `/maths-classes-in-${seoLocations[nearbyKey].slug}`,
        `Maths classes in ${seoLocations[nearbyKey].name}`,
      );
    }

    if (nearbyLinks.length) {
      sections.push({
        title: "Nearby Cities",
        links: nearbyLinks.slice(0, 4),
      });
    }
  }

  if (record.examKey) {
    const exam = seoExams[record.examKey];
    const relatedPrograms: InternalPageLink[] = [];

    for (const relatedExamKey of exam.relatedExams) {
      appendIfIndexable(
        relatedPrograms,
        seoExams[relatedExamKey].primaryPage,
        `${seoExams[relatedExamKey].name} programme`,
      );
    }

    appendIfIndexable(relatedPrograms, "/olympiads", "Olympiad programmes hub");
    appendIfIndexable(relatedPrograms, "/resources", "Parent resources hub");

    sections.push({
      title: "Related Programmes",
      links: relatedPrograms.slice(0, 5),
    });
  }

  const parentExplore: InternalPageLink[] = [];
  for (const page of parentIntentPages.slice(0, 3)) {
    appendIfIndexable(parentExplore, `/${page.slug}`, page.title);
  }
  for (const page of comparisonPages.slice(0, 2)) {
    appendIfIndexable(parentExplore, `/${page.slug}`, page.title);
  }
  for (const article of resourceArticles.slice(0, 2)) {
    appendIfIndexable(parentExplore, `/resources/${article.slug}`, article.title);
  }

  sections.push({
    title: "Parents Also Explore",
    links: parentExplore.slice(0, 6),
  });

  return sections.filter((section) => section.links.length > 0);
}

export function getFooterLinkSections(): InternalLinkSection[] {
  return [
    {
      title: "Popular Locations",
      links: [
        { href: "/maths-classes-in-mumbai", label: "Maths classes in Mumbai" },
        { href: "/maths-classes-in-ahmedabad", label: "Maths classes in Ahmedabad" },
        { href: "/maths-classes-in-delhi", label: "Maths classes in Delhi" },
        { href: "/maths-classes-in-bengaluru", label: "Maths classes in Bengaluru" },
      ],
    },
    {
      title: "Olympiad Programmes",
      links: [
        { href: "/exams/sof", label: "SOF IMO preparation" },
        { href: "/exams/sasmo", label: "SASMO preparation" },
        { href: "/international-maths-olympiad-training", label: "Olympiad maths training" },
        { href: "/online-sasmo-coaching", label: "Online SASMO coaching" },
      ],
    },
    {
      title: "Planning Hubs",
      links: [
        { href: "/locations", label: "Locations hub" },
        { href: "/olympiads", label: "Olympiad hub" },
        { href: "/resources", label: "Parent resources" },
        { href: "/international", label: "International students" },
      ],
    },
  ];
}
