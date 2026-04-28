"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is the batch size for the classes?",
      answer: "We strictly maintain a small batch size of 12 students maximum. This ensures that every child receives personalized attention and no one gets left behind in understanding core concepts."
    },
    {
      question: "Do you offer both online and offline classes?",
      answer: "Yes, we offer both modes. Offline classes are held at our Kanjurmarg East center, providing a highly focused traditional environment. Online classes are live and interactive, accessible to students across India and internationally."
    },
    {
      question: "How do you track and report student progress?",
      answer: "We conduct regular assessments and provide detailed feedback to parents. You'll receive consistent updates on your child's conceptual understanding, test performance, and areas of improvement."
    },
    {
      question: "How is your teaching method different from school?",
      answer: "Schools often have to rush to complete the syllabus, which leads to rote memorization. We focus heavily on the 'Why' before the 'How'. Our concept-first approach builds logical reasoning, making students independent thinkers rather than just exam-passers."
    },
    {
      question: "What are the fees for the programs?",
      answer: "Our fees vary depending on the grade and the specific program (Regular curriculum vs. Olympiad preparation). We discuss the exact fee structure during our parent consultation after understanding your child's specific needs."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary text-3xl md:text-4xl font-heading font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Got questions? We&apos;ve got answers. If you don&apos;t see your question here, feel free to chat with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-lg text-primary">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-accent shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
