import Image from "next/image";
import Link from "next/link";

interface CoreStoryProps {
  isShort?: boolean;
}

export default function CoreStory({ isShort = false }: CoreStoryProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-[2.5rem] transform -rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-2 shadow-xl">
                <div className="rounded-2xl bg-white overflow-hidden relative aspect-[4/3] w-full">
                  <Image
                    src="/Shraddha Mam.jpg"
                    alt="Shraddha Panchal, Founder of Maths with Shraddha"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-primary text-3xl md:text-4xl font-heading font-bold mb-6">
              Mrs. Shraddha Panchal
            </h2>
            <p className="text-sm md:text-base font-semibold text-accent mb-5 leading-relaxed">
              B.Com., B.Ed. and CIDTT (Cambridge International Diploma for Teachers and Trainers)
            </p>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              I have been teaching mathematics since 1991, and over the years I noticed the same pattern again and again:
              smart kids were losing their confidence simply because they were taught to memorize steps instead of understanding the logic.
              I started Maths with Shraddha to change that.
            </p>

            {!isShort && (
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                When a child finally understands "why" a formula works, the fear of math disappears completely. My goal is not just to improve grades, but to build independent logical thinkers who approach any problem with confidence.
              </p>
            )}

            {isShort && (
              <Link href="/about" className="inline-flex items-center text-accent font-bold hover:text-primary transition-colors text-lg">
                Read My Full Story <span className="ml-2">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
