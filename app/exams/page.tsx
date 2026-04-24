import type { Metadata } from "next";
import { MessageCircle, Trophy, Award, Building, CheckCircle, BookOpen, Users, Target, Lightbulb, GraduationCap, Calendar, Brain } from "lucide-react";
import Link from "next/link";
import { examsData, whyOlympiads, ourApproach, batchTimeline, statsData, examCards } from "@/data/exams";
import CTASection from "@/components/exams/CTASection";

export const metadata: Metadata = {
  title: "Maths Olympiad Coaching | Grades 2-9 Preparation in Mumbai & India",
  description: "Expert maths olympiad coaching for SASMO, SOF, IPM & Mental Maths. Best olympiad classes for kids in Mumbai. Book free trial today.",
  keywords: "maths olympiad coaching, maths olympiad classes for kids, olympiad maths preparation, maths tuition, online maths classes, best maths teacher, maths classes in Mumbai, maths olympiad coaching in India",
  openGraph: {
    title: "Maths Olympiad Coaching | Grades 2-9 Preparation",
    description: "Expert maths olympiad coaching for SASMO, SOF, IPM & Mental Maths. Best olympiad classes for kids in Mumbai.",
  }
};

const approachIcons = [Brain, Target, GraduationCap, Calendar];

export default function ExamsPage() {
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
              Expert Olympiad Coaching in Mumbai & Online
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
              Mathematics Olympiad & Competitive <span className="text-accent">Exam Preparation</span><br className="hidden md:block" />
              <span className="text-lg md:text-xl font-normal text-gray-300">(Grades 2-9)</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
              Prepare for top national and international maths exams with structured guidance, conceptual clarity, and personalized teaching from expert educators.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <a href="#free-trial" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl">
                Book Free Trial
              </a>
              <a href="https://wa.me/919819123456" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Olympiads Matter */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Maths Olympiads Matter</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mathematics olympiads do more than test calculation - they build thinking skills that last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyOlympiads.map((item, index) => {
              const whyIcons = [Lightbulb, Target, Users, Trophy];
              const IconComponent = whyIcons[index] || Lightbulb;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exams We Cover */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Exams We Cover</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive preparation for all major national and international maths olympiads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {examCards.map((exam, index) => (
              <Link 
                key={index} 
                href={exam.link}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-accent hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                    {exam.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(10)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-6 rounded-sm ${i < exam.difficulty ? 'bg-accent' : 'bg-gray-200'}`}
                        style={{ height: `${16 + (i % 3) * 2}px` }}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{exam.description}</p>
                <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A structured, concept-first methodology designed for olympiad success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourApproach.map((item, index) => {
              const IconComponent = approachIcons[index] || Brain;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Batch Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Batch Timeline</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic preparation schedule designed for exam success.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            {batchTimeline.map((item, index) => (
              <div key={index} className="flex-1 relative">
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold ${index === 0 ? 'bg-accent text-white' : 'bg-white border-2 border-accent text-accent'}`}>
                    {index + 1}
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-lg font-bold text-primary">{item.month}</div>
                    <div className="text-accent font-semibold">{item.phase}</div>
                    <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                  </div>
                </div>
                {index < batchTimeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Parents Trust Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of families who have transformed their child's mathematical journey.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => {
              const statIcons = [Users, Trophy, Building, CheckCircle];
              const IconComponent = statIcons[index] || Users;
              return (
                <div key={index} className="text-center">
                  <IconComponent className="w-10 h-10 text-accent mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
}