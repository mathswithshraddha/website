import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import { resourceArticles } from "@/data/resources";
import { buildBasicPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildBasicPageMetadata({
  path: "/resources",
  title: "Maths Resources for Parents",
  description:
    "Educational guides on olympiad maths, mental maths, singapore maths, and enrichment decisions for ambitious families.",
});

export const revalidate = 86400;

export default function ResourcesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-primary text-white px-6 py-12 md:px-10 md:py-16 shadow-2xl">
          <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold mb-6">
            Topical authority hub
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold max-w-4xl">
            Parent Guides on Olympiad Maths, Mental Maths, and Enrichment
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/90">
            This section supports thoughtful parents with educational guidance, not doorway copy. Each article helps
            families make better decisions about advanced maths learning.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourceArticles.map((article) => (
            <article key={article.slug} className="rounded-[2rem] bg-white p-8 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-3">{article.audience}</p>
              <h2 className="text-2xl font-heading font-bold text-primary mb-3">{article.title}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{article.description}</p>
              <Link
                href={`/resources/${article.slug}`}
                className="inline-flex rounded-full bg-primary px-5 py-3 text-white font-bold hover:bg-primary/90 transition-colors"
              >
                Read guide
              </Link>
            </article>
          ))}
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
