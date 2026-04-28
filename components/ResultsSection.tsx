import { Trophy, ArrowRight, TrendingUp } from "lucide-react";

export default function ResultsSection() {
  const studentResults = [
    {
      name: "Aarav M.",
      school: "Bombay Scottish",
      achievement: "62% → 94%",
      exam: "SOF",
    },
    {
      name: "Rhea K.",
      school: "Dhirubhai Ambani",
      achievement: "Gold Medal",
      exam: "SASMO 2023",
    },
    {
      name: "Kabir S.",
      school: "JBCN International",
      achievement: "Top 1% Globally",
      exam: "SOF IMO",
    },
    {
      name: "Ananya P.",
      school: "Aditya Birla",
      achievement: "71% → 92%",
      exam: "SOF",
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl md:text-4xl font-heading font-bold mb-6">
            Exceptional Students. Tangible Results.
          </h2>
          <p className="text-gray-600 text-lg">
            Our systematic approach consistently transforms average performers into top scorers and Olympiad champions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {studentResults.map((student, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all group hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {student.achievement.includes("→") ? (
                  <TrendingUp className="w-6 h-6 text-green-600" />
                ) : (
                  <Trophy className="w-6 h-6 text-accent" />
                )}
              </div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">{student.exam}</div>
              <div className="text-2xl font-black text-primary mb-2 font-heading">{student.achievement}</div>
              <div className="h-px w-full bg-gray-100 my-4"></div>
              <div className="font-bold text-gray-800">{student.name}</div>
              <div className="text-sm text-gray-500">{student.school}</div>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Want to see your child&apos;s name here?</h3>
            <p className="text-gray-300">Join the 80%+ of our students who clear rigorous Olympiad selection rounds.</p>
            <p className="mt-3 text-sm text-gray-400">Next batch starts in June 2026 with only a few seats per batch.</p>
          </div>
          <a href="https://wa.me/919969174811?text=Hi%20Shraddha%20Ma'am%2C%20I'm%20interested%20in%20a%20free%20trial." target="_blank" rel="noopener noreferrer" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition-all flex items-center shadow-lg whitespace-nowrap">
            Reserve Your Seat for June <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
