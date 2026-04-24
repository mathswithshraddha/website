import { Focus, CheckCircle2 } from "lucide-react";

export default function FounderApproach() {
  const steps = [
    "Evaluates each student individually",
    "Uses adaptive, tailored assessments",
    "Identifies core strengths and conceptual gaps",
    "Designs a learning path specific to the child"
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-primary text-3xl md:text-5xl font-bold mb-6">
              Every Child Learns Differently
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We completely reject the one-size-fits-all model of teaching. A classroom should adapt to the student, not the other way around. By understanding how a child naturally processes information, we can make mathematics intuitive for them.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-primary text-xl mb-6 flex items-center">
                <Focus className="w-6 h-6 text-accent mr-3" />
                The Individualized Framework
              </h3>
              <ul className="space-y-4">
                {steps.map((step, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mr-4" />
                    <span className="text-gray-700 text-lg">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-3xl p-8 aspect-square flex flex-col justify-center">
                   <div className="text-4xl font-bold text-primary mb-2">No</div>
                   <div className="text-xl text-gray-600">Rushed timelines</div>
                </div>
                <div className="bg-accent/5 rounded-3xl p-8 aspect-square flex flex-col justify-center translate-y-8">
                   <div className="text-4xl font-bold text-accent mb-2">No</div>
                   <div className="text-xl text-gray-600">Rote learning</div>
                </div>
                <div className="bg-gray-100 rounded-3xl p-8 aspect-square flex flex-col justify-center">
                   <div className="text-4xl font-bold text-gray-800 mb-2">Yes</div>
                   <div className="text-xl text-gray-600">Patient guidance</div>
                </div>
                <div className="bg-primary text-white rounded-3xl p-8 aspect-square flex flex-col justify-center translate-y-8">
                   <div className="text-4xl font-bold text-white mb-2">Yes</div>
                   <div className="text-xl text-gray-200">Conceptual depth</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
