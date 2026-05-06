import Image from "next/image";

export default function TeamsSection() {
  const team = [
    {
      name: "Shraddha Panchal",
      role: "Founder & Lead Educator",
      image: "/IMAGE2.png", // Using the existing image of Shraddha Mam
      description: "With over 30 years of teaching experience, Shraddha brings unparalleled expertise and passion to conceptual mathematics education.",
    },
    // Adding placeholder for another team member if they have one, or just showcasing her as the core team
    {
      name: "Expert Support Team",
      role: "Academic Mentors",
      image: "/MWS_NOBG.png", // Fallback to logo or generic avatar
      description: "Our dedicated support team ensures every student gets the personalized attention they need to excel in their olympiad journey.",
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-background flex flex-col items-center">
      <div className="bg-yellow text-primary px-6 sm:px-12 py-4 rounded-full text-2xl md:text-4xl font-heading font-bold mb-12 shadow-lg text-center">
        Our Team
      </div>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
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
