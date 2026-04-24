import { Handshake, Activity, MessageCircle, HeartHandshake } from "lucide-react";

export default function FounderParentConnection() {
  const points = [
    {
      title: "Transparent Progress Tracking",
      description: "You will always know exactly how your child is performing, where they excel, and where they need support.",
      icon: Activity
    },
    {
      title: "Honest Feedback",
      description: "Open, constructive conversations about your child's mathematical journey without sugarcoating or unnecessary alarm.",
      icon: MessageCircle
    },
    {
      title: "Collaborative Support",
      description: "Guidance on how you can create an encouraging environment at home that reinforces what they learn in class.",
      icon: HeartHandshake
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-20 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/3">
              <Handshake className="w-16 h-16 text-accent mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Partnership With Parents
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Education is a triangle involving the student, the teacher, and the parents. We ensure you are actively involved and informed every step of the way.
              </p>
            </div>
            
            <div className="w-full lg:w-2/3">
              <div className="space-y-8">
                {points.map((point, i) => {
                  const Icon = point.icon;
                  return (
                    <div key={i} className="flex items-start bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="bg-white/10 p-3 rounded-xl mr-6">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                        <p className="text-gray-300">{point.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
