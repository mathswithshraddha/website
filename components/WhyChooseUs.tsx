import { UserCheck, Lightbulb, TrendingUp, Trophy, Puzzle } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Personalized Attention",
      description: "Small batch sizes (limited to 12 students) and individualized focus ensure no student is left behind.",
      icon: UserCheck
    },
    {
      title: "Concept-First Teaching",
      description: "We dive deep into the 'why' before the 'how', ensuring strong foundational clarity.",
      icon: Lightbulb
    },
    {
      title: "Adaptive Learning",
      description: "Our approach tailors the difficulty and pace to match each student's unique learning curve.",
      icon: TrendingUp
    },
    {
      title: "Olympiad-Focused",
      description: "Specialized training for competitive exams like SASMO, SOF, and IPM.",
      icon: Trophy
    },
    {
      title: "Cognitive Skill Development",
      description: "Building critical thinking and logical reasoning that extends far beyond mathematics.",
      icon: Puzzle
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-6">
            Why Choose Maths with Shraddha?
          </h2>
          <p className="text-gray-600 text-lg">
            Our unique methodology is designed to transform math anxiety into mathematical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-8 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all group bg-gray-50/50">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
