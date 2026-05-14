import Link from "next/link";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";
import { seoLocations } from "@/data/seo/programmatic";
import { buildBasicPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildBasicPageMetadata({
  path: "/locations",
  title: "Maths Coaching Locations",
  description:
    "Explore city-specific maths, olympiad, and mental maths pages for Mumbai, Ahmedabad, Delhi, Bengaluru, Pune, and other priority locations.",
});

const featuredCities = Object.values(seoLocations)
  .filter((location) => location.seoTier === "core")
  .sort((left, right) => left.name.localeCompare(right.name));

export default function LocationsHubPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <section className="pt-32 pb-12 px-4">
        <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-primary text-white px-6 py-12 md:px-10 md:py-16 shadow-2xl">
          <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold mb-6">
            Local discovery hub
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold max-w-4xl">
            Maths, Olympiad, and Mental Maths Coaching by Location
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/90">
            These pages are built for high-intent city searches and linked back into the main programme architecture so
            parents can move from a city query to the right learning path.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredCities.map((location) => (
            <article key={location.key} className="rounded-[2rem] bg-white p-8 shadow-lg">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-3">{location.regionLabel}</p>
              <h2 className="text-2xl font-heading font-bold text-primary mb-3">{location.name}</h2>
              <p className="text-gray-700 leading-relaxed mb-5">{location.parentContext}</p>
              <p className="text-sm text-gray-500 mb-6">Landmarks: {location.landmarks.join(", ")}</p>
              <div className="flex flex-wrap gap-3">
                <Link href={`/maths-classes-in-${location.slug}`} className="rounded-full border border-gray-200 px-4 py-2 font-medium text-primary hover:border-accent hover:text-accent transition-colors">
                  Maths classes
                </Link>
                <Link href={`/olympiad-coaching-in-${location.slug}`} className="rounded-full border border-gray-200 px-4 py-2 font-medium text-primary hover:border-accent hover:text-accent transition-colors">
                  Olympiad coaching
                </Link>
                <Link href={`/sof-imo-coaching-${location.slug}`} className="rounded-full border border-gray-200 px-4 py-2 font-medium text-primary hover:border-accent hover:text-accent transition-colors">
                  SOF IMO
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
