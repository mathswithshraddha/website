import type { Metadata } from "next";
import { MessageCircle, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { examsData } from "@/data/exams";
import CTASection from "@/components/exams/CTASection";
import FAQSection from "@/components/exams/FAQSection";

export const metadata: Metadata = {
  title: "IPM Maths Preparation | International Pingala's Math Coaching",
  description: "Expert IPM maths preparation in Mumbai and online. Master arithmetic and mental math with speed training. Book free trial today.",
  keywords: "IPM maths preparation, IPM syllabus, IPM coaching, International Pingala's Math, mental maths classes, speed maths training, arithmetic fluency",
};

const exam = examsData[2];

const faqs = [
  {
    question: "What is IPM?",
    answer: "IPM stands for International Pingala's Math, an annual mathematics competition focused on arithmetic fluency, calculation speed, and mental math skills. It tests students' mathematical agility and precision under time pressure."
  },
  {
    question: "When does IPM registration open?",
    answer: "IPM registration typically opens in August and the exam is conducted in November-January. Exact dates vary each year. Check with your school or visit the official IPM website for current year details."
  },
  {
    question: "What is the exam pattern for IPM?",
    answer: "IPM is conducted as an online test with 50-100 questions depending on the grade level. Students have 30-60 minutes to complete the test, which focuses heavily on speed and accuracy in arithmetic operations."
  },
  {
    question: "Who is eligible for IPM?",
    answer: "Students in Grades 1-8 are eligible for IPM. The competition is divided into different categories based on grade level."
  },
  {
    question: "How does Maths with Shraddha help in IPM preparation?",
    answer: "We provide specialized IPM preparation with focus on speed training, mental math techniques, regular practice tests, and time management strategies to help students excel in timed arithmetic tests."
  }
];

export default function IPMPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
              Annual Mathematics Competition for Arithmetic Excellence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
              IPM Maths Preparation in <span className="text-accent">Mumbai</span> & Online
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
              {exam.fullDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <Link href="#free-trial" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl">
                Book Free Trial
              </Link>
              <a href="https://wa.me/919819123456" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is IPM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What is IPM?</h2>
              <p className="text-lg text-gray-600 mb-6">
                <span className="font-semibold text-primary">{exam.fullForm}</span> is an annual mathematics competition that focuses on arithmetic fluency, calculation speed, and mental math skills.
              </p>
              <p className="text-gray-600 mb-6">
                Unlike traditional olympiads that test conceptual understanding, IPM specifically tests how quickly and accurately students can perform arithmetic operations. It is conducted in two rounds - a qualifier and the final.
              </p>
              <p className="text-gray-600">
                Doing well in IPM requires strong mental calculation abilities, quick recall of mathematical facts, and the ability to work accurately under time pressure. These skills are invaluable for all areas of mathematics and problem-solving.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-6">Key Details</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1" />
                  <div>
                    <div className="font-semibold text-primary">Conducting Body</div>
                    <div className="text-gray-600">{exam.conductingBody}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1" />
                  <div>
                    <div className="font-semibold text-primary">Eligibility</div>
                    <div className="text-gray-600">{exam.eligibility}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1" />
                  <div>
                    <div className="font-semibold text-primary">Exam Pattern</div>
                    <div className="text-gray-600">{exam.pattern}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1" />
                  <div>
                    <div className="font-semibold text-primary">Registration</div>
                    <div className="text-gray-600">{exam.registrationTimeline}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">IPM Syllabus</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The syllabus focuses on arithmetic operations and mental calculation speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {exam.keyTopics.map((topic, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-accent/5 transition-colors">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-primary">{topic}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Difficulty Scale */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Difficulty Level</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the challenge level helps in proper preparation planning.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Beginner</span>
                <span className="text-gray-600">Expert</span>
              </div>
              <div className="relative h-4 bg-gray-200 rounded-full mb-4">
                <div 
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full" 
                  style={{ width: `${exam.difficulty * 10}%` }}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-primary">{exam.difficulty}/10</div>
                <div className="text-gray-600">{exam.difficultyNote}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Common Challenges</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most students face these difficulties when preparing for IPM. We help overcome them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exam.challenges.map((challenge, index) => (
              <div key={index} className="flex items-start bg-gray-50 rounded-xl p-6">
                <XCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">{challenge}</h3>
                  <p className="text-gray-600 text-sm">Our specialized speed training helps students build mental calculation speed and accuracy.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of IPM</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Why every student should consider appearing for IPM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exam.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-200">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How Maths with Shraddha Helps</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our specialized IPM preparation methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Speed Techniques</h3>
              <p className="text-gray-600">Learn Vedic math and other speed calculation techniques.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Timed Practice</h3>
              <p className="text-gray-600">Regular timed practice sessions to build speed and accuracy.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Mock Tests</h3>
              <p className="text-gray-600">Full-length mock tests to simulate exam conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Batch Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Batch Timeline</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our systematic preparation schedule ensures complete coverage.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            <div className="flex-1 text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <div className="text-lg font-bold text-primary">June</div>
              <div className="text-accent font-semibold">Foundation</div>
              <div className="text-sm text-gray-500 mt-1">Basic operations</div>
            </div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-accent text-accent flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <div className="text-lg font-bold text-primary">July-August</div>
              <div className="text-accent font-semibold">Speed Building</div>
              <div className="text-sm text-gray-500 mt-1">Techniques</div>
            </div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-accent text-accent flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <div className="text-lg font-bold text-primary">September</div>
              <div className="text-accent font-semibold">Advanced</div>
              <div className="text-sm text-gray-500 mt-1">Complex problems</div>
            </div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-accent text-accent flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <div className="text-lg font-bold text-primary">Oct-Nov</div>
              <div className="text-accent font-semibold">Practice</div>
              <div className="text-sm text-gray-500 mt-1">Mocks & revision</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <CTASection 
        headline="Start Your IPM Preparation Today"
        subheadline="Master arithmetic and mental math with our specialized speed training program."
      />
    </>
  );
}