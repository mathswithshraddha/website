import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/admin/", "/internal/", "/private/"],
    },
    sitemap: [`${SITE_URL}/sitemap-index.xml`],
    host: SITE_URL,
  };
}
