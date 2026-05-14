import { buildSitemapXml, getSitemapEntries } from "@/lib/seo/sitemap";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildSitemapXml(getSitemapEntries("blogs")), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
