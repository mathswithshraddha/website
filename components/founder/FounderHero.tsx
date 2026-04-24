import Image from "next/image";

export default function FounderHero() {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-primary text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-large" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-large)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-5/12">
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-auto lg:h-[600px] w-full max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="/Shraddha Mam.jpg"
                alt="Mrs. Shraddha Panchal"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h2 className="text-2xl font-bold mb-1">Mrs. Shraddha Panchal</h2>
                <p className="text-gray-300 font-light">Founder & Lead Educator</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
              More Than Teaching Maths  <span className="text-accent">Shaping How Children Think</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              With over 2000+ students taught and a consistent 80%+ olympiad success rate, Mrs. Shraddha Panchal focuses on building deep understanding and lifelong problem-solving ability.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              <span className="font-semibold text-white px-3 py-1 bg-white/10 rounded-full text-sm">B.Com</span>
              <span className="font-semibold text-white px-3 py-1 bg-white/10 rounded-full text-sm">B.Ed</span>
              <span className="font-semibold text-white px-3 py-1 bg-white/10 rounded-full text-sm" title="Cambridge International Diploma for Teachers and Trainers">CIDTT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
