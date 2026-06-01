import { buildSitemapXml } from "@/lib/seo/sitemap";
import { SEO_LASTMOD, SITE_URL } from "@/lib/seo/site";

export const dynamic = "force-static";

export function GET() {
  return new Response(
    buildSitemapXml([
      {
        url: `${SITE_URL}/competitive-exam-classes-mumbai`,
        lastmod: SEO_LASTMOD,
        changefreq: "weekly",
        priority: 1.0,
      },
    ]),
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
}
