import { MessageSquare, FileText, UserCheck, Users } from "lucide-react";

export default function AdmissionProcess() {
  const steps = [
    {
      id: 1,
      title: "Contact via WhatsApp",
      description: "Reach out to us to express your interest and get your initial queries answered.",
      icon: MessageSquare
    },
    {
      id: 2,
      title: "Share Academic Details",
      description: "Provide the student's current grade and any specific learning requirements.",
      icon: FileText
    },
    {
      id: 3,
      title: "Screening & Evaluation",
      description: "A brief interaction with Mrs. Shraddha to understand the student's baseline.",
      icon: UserCheck
    },
    {
      id: 4,
      title: "Batch Allocation",
      description: "Placement in the right batch to ensure optimal learning alongside peers.",
      icon: Users
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-6">
            Simple Admission Process
          </h2>
          <p className="text-gray-600 text-lg">
            We ensure every student is placed in an environment where they can thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative pt-12 mt-6">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                  {step.id}
                </div>
                <div className="flex justify-center mb-6">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary text-center mb-3">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
