import { UserCheck, SplitSquareHorizontal, Settings2, BrainCircuit, Trophy } from "lucide-react";

export default function FounderDifferentiator() {
  const differentiators = [
    {
      title: "Personalized Attention",
      description: "Every student's learning pace is respected and nurtured individually.",
      icon: UserCheck
    },
    {
      title: "Simplifying Complexity",
      description: "Breaking down the most intimidating mathematical theorems into simple logic.",
      icon: SplitSquareHorizontal
    },
    {
      title: "Adaptive Teaching",
      description: "Modifying teaching styles based on the student's unique capability and grasping power.",
      icon: Settings2
    },
    {
      title: "Long-Term Retention",
      description: "Building mental models that ensure concepts stay with the child for a lifetime.",
      icon: BrainCircuit
    },
    {
      title: "Olympiad Foundations",
      description: "Integrating high-level logical reasoning into everyday learning to prepare for global stages.",
      icon: Trophy
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl md:text-5xl font-bold mb-6">
            Why Parents Trust Her Approach
          </h2>
          <p className="text-gray-600 text-lg">
            A methodology designed not just to cover the syllabus, but to uncover the student's true potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow bg-gray-50/50 group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
