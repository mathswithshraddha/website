import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { resourceArticles } from "@/data/resources";
import { seoExams } from "@/data/seo/programmatic";
import { buildBasicPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo/schema";

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 86400;

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getArticle(slug: string) {
  return resourceArticles.find((article) => article.slug === slug) ?? null;
}

export async function generateStaticParams() {
  return resourceArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return buildBasicPageMetadata({
    path: `/resources/${article.slug}`,
    title: article.title,
    description: article.description,
  });
}

export default async function ResourceArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: article.title, href: `/resources/${article.slug}` },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <JsonLd data={[buildBreadcrumbSchema(breadcrumbs), buildFaqSchema(article.faqs)]} />
      <Navbar />

      <section className="pt-32 pb-10 px-4">
        <div className="max-w-4xl mx-auto rounded-[2.5rem] bg-white px-6 py-10 md:px-10 md:py-12 shadow-xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mt-6 text-sm font-bold uppercase tracking-wide text-accent">{article.audience}</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-primary">{article.title}</h1>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">{article.description}</p>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {article.sections.map((section) => (
            <article key={section.title} className="rounded-[2rem] bg-white px-6 py-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">{section.title}</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              {section.bullets?.length ? (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-gray-700">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}

          <section className="rounded-[2rem] bg-gray-50 px-6 py-8 shadow-sm">
            <h2 className="text-2xl font-heading font-bold text-primary mb-5">FAQs</h2>
            <div className="space-y-4">
              {article.faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] bg-white px-6 py-8 shadow-lg">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">Explore Related Pages</h2>
            <div className="flex flex-wrap gap-3">
              {article.relatedExams.map((exam) => (
                <Link
                  key={exam}
                  href={seoExams[exam].primaryPage}
                  className="rounded-full border border-gray-200 px-4 py-2 font-medium text-primary hover:border-accent hover:text-accent transition-colors"
                >
                  Related to {seoExams[exam].name}
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
