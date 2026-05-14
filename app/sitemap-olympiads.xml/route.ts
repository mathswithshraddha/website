import { buildSitemapXml, getSitemapEntries } from "@/lib/seo/sitemap";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildSitemapXml(getSitemapEntries("olympiads")), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
