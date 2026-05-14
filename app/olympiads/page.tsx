import Link from "next/link";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import { comparisonPages, parentIntentPages, seoExams } from "@/data/seo/programmatic";
import { buildBasicPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildBasicPageMetadata({
  path: "/olympiads",
  title: "Olympiad Maths Hub",
  description:
    "Central hub for SOF IMO, SASMO, olympiad maths planning, comparison pages, and parent decision guides.",
});

const hubPrograms = ["sof-imo", "sasmo", "olympiad-maths", "mental-maths"] as const;

export default function OlympiadsHubPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <section className="pt-32 pb-12 px-4">
        <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-primary text-white px-6 py-12 md:px-10 md:py-16 shadow-2xl">
          <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold mb-6">
            Programme architecture hub
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold max-w-4xl">
            Olympiad Maths Programmes, Comparisons, and Parent Guides
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/90">
            This hub links the main olympiad programme pages, parent-intent articles, and comparison pages so Google
            can discover the cluster through strong contextual navigation rather than sitemap-only crawling.
          </p>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {hubPrograms.map((key) => (
            <article key={key} className="rounded-[2rem] bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-heading font-bold text-primary mb-3">{seoExams[key].name}</h2>
              <p className="text-gray-700 leading-relaxed mb-5">{seoExams[key].overview}</p>
              <Link href={seoExams[key].primaryPage} className="inline-flex rounded-full bg-primary px-5 py-3 text-white font-bold hover:bg-primary/90 transition-colors">
                Explore {seoExams[key].shortName}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="rounded-[2rem] bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-heading font-bold text-primary mb-5">Parents Also Compare</h2>
            <div className="space-y-3">
              {comparisonPages.map((page) => (
                <Link key={page.slug} href={`/${page.slug}`} className="block rounded-2xl border border-gray-100 px-4 py-4 text-primary font-medium hover:border-accent hover:text-accent transition-colors">
                  {page.title}
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-heading font-bold text-primary mb-5">Planning Guides</h2>
            <div className="space-y-3">
              {parentIntentPages.map((page) => (
                <Link key={page.slug} href={`/${page.slug}`} className="block rounded-2xl border border-gray-100 px-4 py-4 text-primary font-medium hover:border-accent hover:text-accent transition-colors">
                  {page.title}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
