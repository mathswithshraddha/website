import { Lightbulb, Users, TrendingUp, Trophy, MessageCircle } from "lucide-react";

export default function MethodologySection() {
  const features = [
    {
      title: "Concept-First Clarity",
      description: "We dive deep into the 'why' before the 'how'. No rote memorization, just pure logical understanding.",
      icon: Lightbulb
    },
    {
      title: "Small Focused Batches",
      description: "Strictly limited to 12 students per batch to guarantee individualized attention and engagement.",
      icon: Users
    },
    {
      title: "Targeted Practice System",
      description: "Carefully curated problem sets that adapt to each student's learning curve, from basic to advanced.",
      icon: TrendingUp
    },
    {
      title: "Real-time Doubt Solving",
      description: "Immediate clarification during live interactive sessions to prevent knowledge gaps from compounding.",
      icon: MessageCircle
    },
    {
      title: "Competitive Exam Ready",
      description: "Specialized training integrated for competitive exams like Olympiads, SASMO, and IPM.",
      icon: Trophy
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6 tracking-tight">
            Our Proven Methodology
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
            A highly structured approach designed to transform math anxiety into mathematical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group relative border-t border-gray-200 pt-8 hover:border-accent transition-colors duration-300">
                <div className="mb-6 inline-flex">
                  <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
