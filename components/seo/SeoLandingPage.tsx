import Link from "next/link";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import type { SeoLandingContent } from "@/lib/seo/content";

interface SeoLandingPageProps {
  content: SeoLandingContent;
}

export default function SeoLandingPage({ content }: SeoLandingPageProps) {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <section className="pt-32 pb-12 px-4">
        <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-primary text-white px-6 py-12 md:px-10 md:py-16 shadow-2xl">
          <div className="mb-6">
            <Breadcrumbs items={content.breadcrumbs} />
          </div>
          <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold tracking-wide mb-6">
            {content.eyebrow}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight max-w-4xl">
            {content.title}
          </h1>
          <div className="mt-6 max-w-3xl space-y-4 text-base md:text-lg text-white/90">
            {content.summary.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.keyPoints.map((point, index) => (
              <div key={index} className="rounded-3xl bg-white/10 border border-white/10 px-5 py-4">
                <p className="font-medium">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/enquire"
              className="inline-flex justify-center rounded-full bg-accent px-7 py-4 font-bold text-white shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              Book a Free Trial
            </Link>
            <a
              href="https://wa.me/919969174811?text=Hi%20Shraddha%20Ma'am%2C%20I%20want%20guidance%20for%20my%20child's%20maths%20programme."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full border border-white/30 px-7 py-4 font-bold text-white hover:bg-white/10 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.6fr_0.8fr] gap-8">
          <div className="space-y-8">
            {content.sections.map((section) => (
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
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {content.faqs.map((faq) => (
                  <article key={faq.question} className="rounded-2xl bg-white p-5 shadow-sm">
                    <h3 className="text-lg font-bold text-primary mb-2">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="rounded-[2rem] bg-white px-6 py-8 shadow-lg">
              <h2 className="text-xl font-heading font-bold text-primary mb-5">Why Parents Trust the Platform</h2>
              <ul className="space-y-4">
                {content.trustPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-gray-700">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-green shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2rem] bg-white px-6 py-8 shadow-lg">
              <h2 className="text-xl font-heading font-bold text-primary mb-5">Instructor Credibility</h2>
              <ul className="space-y-4">
                {content.instructorPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-gray-700">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2rem] bg-white px-6 py-8 shadow-lg">
              <h2 className="text-xl font-heading font-bold text-primary mb-5">What Parents Commonly Say</h2>
              <div className="space-y-4">
                {content.testimonialHighlights.map((point) => (
                  <blockquote key={point} className="rounded-2xl bg-gray-50 px-4 py-4 text-gray-700 leading-relaxed">
                    {point}
                  </blockquote>
                ))}
              </div>
            </section>

            {content.linkSections.map((section) => (
              <section key={section.title} className="rounded-[2rem] bg-white px-6 py-8 shadow-lg">
                <h2 className="text-xl font-heading font-bold text-primary mb-5">{section.title}</h2>
                <div className="space-y-3">
                  {section.links.map((link) => (
                    <Link
                      key={`${section.title}-${link.href}`}
                      href={link.href}
                      className="block rounded-2xl border border-gray-100 px-4 py-4 text-primary font-medium hover:border-accent hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </aside>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
