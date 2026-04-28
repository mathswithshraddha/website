import Image from "next/image";

export default function SchoolsSection() {
  const schools = [
    { name: "Dhirubhai Ambani International School", logo: "/logo/dais.jpeg" },
    { name: "Aditya Birla World Academy", logo: "/logo/adityabirla.svg" },
    { name: "JBCN International School", logo: "/logo/jbcn.jpeg" },
    { name: "Campion School", logo: "/logo/campion.png" },
    { name: "Bombay Scottish School", logo: "/logo/bombay-scottish.jpeg" },
    { name: "Oberoi International School", logo: "/logo/oberoi.png" },
    { name: "Cathedral & John Connon", logo: "/logo/cj-logo.png" },
    { name: "Podar International School", logo: "/logo/podar.jpeg" },
    { name: "Hill Spring International School", logo: "/logo/hill-spring-logo.svg" },
  ];

  // Duplicate the array to create a seamless infinite scrolling loop
  const duplicatedSchools = [...schools, ...schools];

  return (
    <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
            Trusted by Students from Top Schools
          </h2>
          <p className="text-gray-500">
            Our students consistently perform at the highest levels across Mumbai&apos;s most competitive curriculums.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden group py-4">
        <div className="animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
          {duplicatedSchools.map((school, index) => (
            <div 
              key={index} 
              className="flex-none flex items-center space-x-4 px-6 py-3 mx-3 bg-gray-50 hover:bg-white rounded-xl border border-gray-200 hover:border-accent/30 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="w-16 h-12 sm:w-20 sm:h-14 relative flex-shrink-0 mix-blend-multiply">
                <Image 
                  src={school.logo} 
                  alt={`${school.name} logo`} 
                  fill
                  sizes="(max-width: 640px) 64px, 80px"
                  className="object-contain"
                />
              </div>
              <span className="font-semibold text-gray-700 text-sm sm:text-base">
                {school.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Fade gradients at the edges for smooth entry/exit */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
