import type { Metadata } from "next";
import { MessageCircle, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { examsData } from "@/data/exams";
import CTASection from "@/components/exams/CTASection";
import FAQSection from "@/components/exams/FAQSection";
import UrgencyBadge from "@/components/UrgencyBadge";

export const metadata: Metadata = {
  title: "SOF Olympiad Preparation | IMO & NSO Coaching in Mumbai & India",
  description: "Expert SOF olympiad coaching for IMO. Complete preparation with mock tests and personalized attention in Mumbai. Book free trial today.",
  keywords: "SOF olympiad preparation, IMO exam coaching, SOF maths syllabus, olympiad foundation classes, IMO preparation Mumbai, online SOF coaching India",
};

const exam = examsData[1];

const faqs = [
  {
    question: "What is SOF?",
    answer: "SOF stands for Science Olympiad Foundation, which conducts India's largest school-level olympiad program. It includes the International Mathematics Olympiad (IMO), International Science Olympiad (NSO), International English Olympiad (IEO), and more."
  },
  {
    question: "When does SOF IMO registration open?",
    answer: "SOF IMO registration typically opens in July and the exam is conducted in December. However, exact dates vary each year. Schools usually register through their respective chapters."
  },
  {
    question: "What is the exam pattern for SOF IMO?",
    answer: "SOF IMO has two levels. Level 1 consists of 50 multiple-choice questions. Questions test application-based understanding rather than rote memorization. Level 2 is for top performers from Level 1."
  },
  {
    question: "Who is eligible for SOF Olympiads?",
    answer: "Students in Grades 1-12 are eligible for SOF olympiads. Each olympiad has specific criteria for different grade levels, from Primary 1 (Grade 1) to Class 12."
  },
  {
    question: "How does Maths with Shraddha help in SOF preparation?",
    answer: "We provide structured SOF preparation with focus on application-based learning, regular mock tests, chapter-wise practice, and expert guidance on tackling multiple-choice questions effectively."
  }
];

export default function SOFPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
              India's Largest School-Level Olympiad Program
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
              SOF Olympiad Preparation <span className="text-accent">(IMO)</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
              {exam.fullDescription}
            </p>
            <UrgencyBadge tone="dark" className="mb-6" />

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <Link href="/enquire" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl text-center">
                Book Free Trial for June Batch
              </Link>
              <a href="https://wa.me/919969174811" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Reserve Your Seat for June
              </a>
            </div>
            <p className="-mt-10 mb-16 text-sm text-gray-300">Only a few seats per batch</p>
          </div>
        </div>
      </section>

      {/* What is SOF */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What is SOF?</h2>
              <p className="text-lg text-gray-600 mb-6">
                <span className="font-semibold text-primary">{exam.fullForm}</span> is India&apos;s largest organization conducting school-level olympiads, reaching over 1 million students annually across 800+ cities and 40+ countries.
              </p>
              <p className="text-gray-600 mb-6">
                The SOF olympiads test conceptual understanding and application skills. Unlike regular school exams, these olympiads require students to apply what they have learned to new and unique situations.
              </p>
              <p className="text-gray-600">
                Achieving recognition in SOF olympiads not only builds academic confidence but also provides valuable certificates and scholarship opportunities for top performers. It is an excellent starting point for students planning to attempt higher-level olympiads.
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">SOF IMO Syllabus</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The syllabus is based on the school curriculum with emphasis on application.
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
              Most students face these difficulties when preparing for SOF olympiads. We help overcome them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exam.challenges.map((challenge, index) => (
              <div key={index} className="flex items-start bg-gray-50 rounded-xl p-6">
                <XCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">{challenge}</h3>
                  <p className="text-gray-600 text-sm">Our structured approach helps students develop strong conceptual clarity and problem-solving techniques.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of SOF Olympiads</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Why every student should consider appearing for SOF olympiads.
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
              Our proven methodology for SOF success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Concept Clarity</h3>
              <p className="text-gray-600">Every topic is taught with focus on application-based understanding.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Personalized Attention</h3>
              <p className="text-gray-600">Small batch sizes ensure individual attention and guidance.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Mock Tests</h3>
              <p className="text-gray-600">Regular mock tests simulate the real exam environment.</p>
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
              Our systematic preparation schedule ensures complete syllabus coverage.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            <div className="flex-1 text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <div className="text-lg font-bold text-primary">June</div>
              <div className="text-accent font-semibold">Foundation</div>
              <div className="text-sm text-gray-500 mt-1">Core concepts begin</div>
            </div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-accent text-accent flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <div className="text-lg font-bold text-primary">July-August</div>
              <div className="text-accent font-semibold">Deepening</div>
              <div className="text-sm text-gray-500 mt-1">Application focus</div>
            </div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-accent text-accent flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <div className="text-lg font-bold text-primary">September</div>
              <div className="text-accent font-semibold">Completion</div>
              <div className="text-sm text-gray-500 mt-1">Full syllabus done</div>
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
        headline="Start Your SOF Olympiad Preparation Today"
        subheadline="Join thousands of students who have achieved recognition in SOF through our expert guidance."
      />
    </>
  );
}
