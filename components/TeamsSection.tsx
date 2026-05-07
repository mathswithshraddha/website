import Image from "next/image";

export default function TeamsSection() {
  const team = [
    {
      name: "Shraddha Panchal",
      role: "Founder & Lead Educator",
      image: "/IMAGE2.png",
      description: "With over 30 years of teaching experience, Shraddha brings unparalleled expertise and passion to conceptual mathematics education.",
    },
    {
      name: "Amit Panchal",
      role: "Academic Mentor",
      image: "/team/amitsir.jpg",
      description: "Dedicated to guiding students through complex mathematical concepts and ensuring every student reaches their full potential.",
    },
    {
      name: "Krupa Mam",
      role: "Academic Mentor & Co-Ordinator",
      image: "/team/krupamam.jpg",
      description: "Providing personalized attention and expert support to help students excel in their olympiad journey.",
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-background flex flex-col items-center">
      <div className="bg-yellow text-white px-6 sm:px-12 py-4 rounded-full text-2xl md:text-4xl font-heading font-bold mb-12 shadow-lg text-center">
        Our Team
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {team.map((member, i) => (
          <div key={i} className="bg-white rounded-[2.5rem] p-8 shadow-xl flex flex-col items-center text-center border-4 border-white hover:border-yellow/50 transition-colors">
            <div className="w-40 h-40 relative rounded-full overflow-hidden mb-6 bg-primary/5 shadow-inner border-4 border-white">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2">{member.name}</h3>
            <p className="text-orange font-bold text-lg mb-4 uppercase tracking-wider">{member.role}</p>
            <p className="text-gray-600 font-medium leading-relaxed">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
