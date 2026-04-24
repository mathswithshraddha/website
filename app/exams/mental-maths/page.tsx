import type { Metadata } from "next";
import { MessageCircle, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { examsData } from "@/data/exams";
import CTASection from "@/components/exams/CTASection";
import FAQSection from "@/components/exams/FAQSection";

export const metadata: Metadata = {
  title: "Mental Maths Classes for Kids | Speed Math Training in Mumbai",
  description: "Expert mental maths classes for kids in Mumbai and online. Speed math training with Vedic math, abacus methods. Book free trial today.",
  keywords: "mental maths classes for kids, speed maths training, brain development maths, mental math training, vedic maths, abacus maths, speed calculation, mental math coach",
};

const exam = examsData[3];

const faqs = [
  {
    question: "What is Mental Maths?",
    answer: "Mental Maths is a training program designed to develop quick calculation abilities, strengthen working memory, and enhance cognitive development. It uses techniques like Vedic math, abacus methods, and logical shortcuts to help students solve calculations mentally."
  },
  {
    question: "At what age should children start Mental Maths?",
    answer: "Children can start Mental Maths training from Grade 2 (around 7-8 years old). The earlier they start, the better their mental calculation abilities will develop. However, students of all ages can benefit from mental math training."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most students show significant improvement within 2-3 months of regular practice. However, becoming proficient at mental calculations requires consistent practice over 6-12 months for mastery."
  },
  {
    question: "What techniques are used in Mental Maths training?",
    answer: "We use a combination of Vedic math techniques, abacus methods, number sense development, shortcuts, and cognitive math games to build mental calculation speed and accuracy."
  },
  {
    question: "How does Maths with Shraddha help in Mental Maths training?",
    answer: "We provide structured mental math training with weekly sessions, progressive difficulty, personalized attention, and regular practice exercises to help students develop lightning-fast calculation abilities."
  }
];

export default function MentalMathsPage() {
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
              Speed Math Training for Brain Development
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
              Mental Maths Classes for <span className="text-accent">Kids</span>
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

      {/* What is Mental Maths */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What is Mental Maths?</h2>
              <p className="text-lg text-gray-600 mb-6">
                <span className="font-semibold text-primary">{exam.fullForm}</span> is a comprehensive training program designed to develop quick calculation abilities, strengthen working memory, and enhance cognitive development in children.
              </p>
              <p className="text-gray-600 mb-6">
                Unlike traditional mathematics that relies heavily on written calculations, mental maths trains the brain to perform complex calculations instantly. This builds not just mathematical ability but also concentration, memory, and overall cognitive function.
              </p>
              <p className="text-gray-600">
                Our program uses proven techniques including Vedic math, abacus methods, logical shortcuts, and cognitive math games to help students develop the ability to solve complex calculations mentally.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-6">Program Details</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1" />
                  <div>
                    <div className="font-semibold text-primary">Program Type</div>
                    <div className="text-gray-600">Structured Training Program</div>
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
                    <div className="font-semibold text-primary">Format</div>
                    <div className="text-gray-600">{exam.pattern}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1" />
                  <div>
                    <div className="font-semibold text-primary">Enrollment</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What We Cover</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive training in mental calculation techniques.
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
              Most students face these difficulties when learning mental maths. We help overcome them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exam.challenges.map((challenge, index) => (
              <div key={index} className="flex items-start bg-gray-50 rounded-xl p-6">
                <XCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">{challenge}</h3>
                  <p className="text-gray-600 text-sm">Our training methods help students overcome these challenges through progressive practice.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Mental Maths</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Why every child should learn mental maths.
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
              Our proven mental maths training methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.756 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Vedic Math Techniques</h3>
              <p className="text-gray-600">Learn ancient Indian techniques for lightning-fast calculations.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Cognitive Development</h3>
              <p className="text-gray-600">Build memory, concentration, and problem-solving skills.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Speed & Accuracy</h3>
              <p className="text-gray-600">Develop lightning-fast calculation abilities.</p>
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
              Our systematic training program progression.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            <div className="flex-1 text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <div className="text-lg font-bold text-primary">Month 1</div>
              <div className="text-accent font-semibold">Foundation</div>
              <div className="text-sm text-gray-500 mt-1">Basic techniques</div>
            </div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-accent text-accent flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <div className="text-lg font-bold text-primary">Month 2-3</div>
              <div className="text-accent font-semibold">Building</div>
              <div className="text-sm text-gray-500 mt-1">Speed introduction</div>
            </div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-accent text-accent flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <div className="text-lg font-bold text-primary">Month 4-5</div>
              <div className="text-accent font-semibold">Advancing</div>
              <div className="text-sm text-gray-500 mt-1">Complex problems</div>
            </div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-accent text-accent flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <div className="text-lg font-bold text-primary">Month 6+</div>
              <div className="text-accent font-semibold">Mastery</div>
              <div className="text-sm text-gray-500 mt-1">Speed optimization</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <CTASection 
        headline="Start Your Mental Maths Journey Today"
        subheadline="Give your child the gift of lightning-fast calculation abilities and cognitive development."
      />
    </>
  );
}