import { Lightbulb, PenTool, ClipboardCheck, TrendingUp, ArrowRight, ArrowDown } from "lucide-react";

export default function TeachingApproach() {
  const steps = [
    {
      id: 1,
      title: "Concept Clarity",
      description: "Breaking down complex topics into simple, relatable ideas.",
      icon: Lightbulb
    },
    {
      id: 2,
      title: "Targeted Practice",
      description: "Applying concepts to a variety of problems, from basic to advanced.",
      icon: PenTool
    },
    {
      id: 3,
      title: "Testing & Evaluation",
      description: "Regular assessments to identify strengths and areas for growth.",
      icon: ClipboardCheck
    },
    {
      id: 4,
      title: "Personalized Improvement",
      description: "Customized feedback and revision to ensure mastery of the topic.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-6">
            Our Proven Teaching Approach
          </h2>
          <p className="text-gray-600 text-lg">
            A systematic 4-step framework designed to build confidence and guarantee results.
          </p>
        </div>

        <div className="relative">


          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center relative">

                  
                  <div className="w-20 h-20 bg-white border-4 border-gray-50 rounded-full shadow-lg flex items-center justify-center mb-6 relative z-10 hover:border-accent/30 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {step.id}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-3 bg-white px-2">{step.title}</h3>
                  <p className="text-gray-600 bg-white px-2">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
