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

  // Duplicate the array multiple times to ensure the marquee is long enough for ultra-wide screens
  const duplicatedSchools = [...schools, ...schools, ...schools, ...schools];

  return (
    <section className="py-16 w-full flex flex-col items-center">
        <div className="bg-primary text-white px-6 sm:px-12 py-3 sm:py-4 rounded-3xl sm:rounded-full text-xl sm:text-2xl md:text-4xl font-heading font-bold mb-12 shadow-lg text-center mx-4 sm:mx-0 max-w-[90%] sm:max-w-none">
          Trusted by Parents from Top Schools
        </div>

      <div className="relative flex overflow-hidden py-8 group w-full">
        <div className="flex-none animate-marquee hover:[animation-play-state:paused] whitespace-nowrap flex">
          {duplicatedSchools.map((school, index) => (
            <div
              key={index}
              className="flex-none flex items-center space-x-4 px-6 py-4 mx-4 bg-white rounded-[2rem] border-4 border-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
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
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
