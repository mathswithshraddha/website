import { Trophy, Star, Medal, CheckCircle } from "lucide-react";

export default function ResultsSection() {
  const exams = ["SASMO", "SOF", "IPM"];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-6">
            Proven Results & Achievements
          </h2>
          <p className="text-gray-600 text-lg">
            Our systematic approach has consistently produced top-tier results in competitive exams globally.
          </p>
        </div>

        <div className="bg-primary rounded-3xl p-8 md:p-12 text-white shadow-xl mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="w-full md:w-1/2">
              <div className="flex items-center space-x-4 mb-6">
                <Trophy className="w-10 h-10 text-accent" />
                <h3 className="text-3xl font-bold">80%+ Selection Rate</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Over 80% of our students who enroll in our specialized Olympiad training programs clear the rigorous selection rounds of top international mathematics competitions.
              </p>
              <div className="flex flex-wrap gap-3">
                {exams.map((exam, i) => (
                  <span key={i} className="px-4 py-2 bg-white/10 rounded-full border border-white/20 text-sm font-semibold tracking-wider">
                    {exam}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/10 text-center">
                <Medal className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm text-gray-300">Medals Won</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/10 text-center">
                <Star className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">Top 1%</div>
                <div className="text-sm text-gray-300">Global Ranking</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
