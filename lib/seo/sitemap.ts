import { resourceArticles } from "@/data/resources";
import { getProgrammaticRoutesByGroup } from "@/lib/seo/routes";
import { SEO_LASTMOD, SITE_URL } from "@/lib/seo/site";

export interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: number;
}

const staticEntriesByGroup: Record<"programs" | "locations" | "olympiads" | "blogs", SitemapEntry[]> = {
  programs: [
    { url: `${SITE_URL}/`, lastmod: SEO_LASTMOD, changefreq: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/courses`, lastmod: SEO_LASTMOD, changefreq: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/enquire`, lastmod: SEO_LASTMOD, changefreq: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/international`, lastmod: SEO_LASTMOD, changefreq: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/exams/mental-maths`, lastmod: SEO_LASTMOD, changefreq: "monthly", priority: 0.86 },
    { url: `${SITE_URL}/exams/ipm`, lastmod: SEO_LASTMOD, changefreq: "monthly", priority: 0.82 },
  ],
  locations: [
    { url: `${SITE_URL}/locations`, lastmod: SEO_LASTMOD, changefreq: "weekly", priority: 0.88 },
  ],
  olympiads: [
    { url: `${SITE_URL}/exams`, lastmod: SEO_LASTMOD, changefreq: "weekly", priority: 0.92 },
    { url: `${SITE_URL}/olympiads`, lastmod: SEO_LASTMOD, changefreq: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/exams/sof`, lastmod: SEO_LASTMOD, changefreq: "monthly", priority: 0.88 },
    { url: `${SITE_URL}/exams/sasmo`, lastmod: SEO_LASTMOD, changefreq: "monthly", priority: 0.88 },
  ],
  blogs: [
    { url: `${SITE_URL}/resources`, lastmod: SEO_LASTMOD, changefreq: "weekly", priority: 0.84 },
  ],
};

export function getSitemapEntries(group: "programs" | "locations" | "olympiads" | "blogs") {
  if (group === "blogs") {
    return [
      ...staticEntriesByGroup.blogs,
      ...resourceArticles.map((article) => ({
        url: `${SITE_URL}/resources/${article.slug}`,
        lastmod: SEO_LASTMOD,
        changefreq: "monthly" as const,
        priority: 0.76,
      })),
    ];
  }

  return [
    ...staticEntriesByGroup[group],
    ...getProgrammaticRoutesByGroup(group).map((route) => ({
      url: `${SITE_URL}${route.pathname}`,
      lastmod: SEO_LASTMOD,
      changefreq: route.kind === "comparison" || route.kind === "parent-intent" ? ("monthly" as const) : ("weekly" as const),
      priority:
        route.kind === "international" || route.kind === "online"
          ? 0.82
          : route.kind === "exam-city-grade"
            ? 0.8
            : route.kind === "exam-grade"
              ? 0.78
              : route.kind === "exam-city" || route.kind === "local"
                ? 0.75
                : 0.72,
    })),
  ];
}

export function buildSitemapXml(entries: SitemapEntry[]) {
  const urls = entries
    .map(
      (entry) => `<url><loc>${entry.url}</loc><lastmod>${entry.lastmod}</lastmod><changefreq>${entry.changefreq}</changefreq><priority>${entry.priority.toFixed(1)}</priority></url>`,
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
}

export function buildSitemapIndexXml() {
  const sitemaps = [
    `${SITE_URL}/sitemap-programs.xml`,
    `${SITE_URL}/sitemap-locations.xml`,
    `${SITE_URL}/sitemap-olympiads.xml`,
    `${SITE_URL}/sitemap-blogs.xml`,
  ]
    .map((url) => `<sitemap><loc>${url}</loc><lastmod>${SEO_LASTMOD}</lastmod></sitemap>`)
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemaps}</sitemapindex>`;
}
