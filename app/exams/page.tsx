import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Trophy, Award, Building, CheckCircle, BookOpen, Users, Target, Lightbulb, GraduationCap, Calendar, Brain } from "lucide-react";
import Link from "next/link";
import { examsData, whyOlympiads, ourApproach, batchTimeline, statsData, examCards } from "@/data/exams";
import CTASection from "@/components/exams/CTASection";
import UrgencyBadge from "@/components/UrgencyBadge";

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
      <section className="relative pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden bg-primary text-white relative shadow-2xl py-20 px-4">
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

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
              <div className="inline-block px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-bold mb-8 shadow-lg">
                Expert Olympiad Coaching in Mumbai & Online
              </div>
              <UrgencyBadge tone="dark" className="mb-8" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-8 leading-tight">
                Mathematics Olympiad & Competitive <span className="text-accent">Exam Preparation</span><br className="hidden md:block" />
                <span className="text-lg md:text-xl font-normal text-white/80">(Grades 2-9)</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
                Prepare for top national and international maths exams with structured guidance, conceptual clarity, and personalized teaching from expert educators.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <Link href="/enquire" className="w-full sm:w-auto bg-accent text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all">
                  Book Free Trial for June Batch
                </Link>
                <a href="https://wa.me/919969174811" className="w-full sm:w-auto bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Reserve Your Seat for June
                </a>
              </div>
              <p className="text-sm text-white/70 font-medium">Only a few seats per batch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Olympiads Matter */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16">
            <h2 className="bg-orange text-white px-8 py-3 rounded-full text-3xl font-heading font-bold mb-4 shadow-md">Why Maths Olympiads Matter</h2>
            <p className="text-lg text-primary font-medium max-w-2xl mx-auto text-center">
              Mathematics olympiads do more than test calculation - they build thinking skills that last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyOlympiads.map((item, index) => {
              const whyIcons = [Lightbulb, Target, Users, Trophy];
              const IconComponent = whyIcons[index] || Lightbulb;
              return (
                <div key={index} className="bg-white rounded-[2rem] border-4 border-white p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600 font-medium">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exams We Cover */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16">
            <h2 className="bg-primary text-white px-8 py-3 rounded-full text-3xl font-heading font-bold mb-4 shadow-md">Exams We Cover</h2>
            <p className="text-lg text-primary font-medium max-w-2xl mx-auto text-center">
              Comprehensive preparation for all major national and international maths olympiads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {examCards.map((exam, index) => (
              <Link 
                key={index} 
                href={exam.link}
                className="group bg-white border-4 border-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image src={exam.logo} alt={exam.name} fill className="object-contain" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary group-hover:text-accent transition-colors">
                      {exam.name}
                    </h3>
                  </div>
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
                <p className="text-gray-600 font-medium mb-4">{exam.description}</p>
                <div className="flex items-center text-accent font-bold group-hover:translate-x-2 transition-transform">
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
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-primary text-white py-20 px-4 sm:px-6 lg:px-8 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center mb-16">
            <h2 className="bg-white/20 backdrop-blur-md px-8 py-3 rounded-full text-3xl font-heading font-bold mb-4 shadow-md text-white border border-white/30">Our Approach</h2>
            <p className="text-lg text-white/90 font-medium max-w-2xl mx-auto text-center">
              A structured, concept-first methodology designed for olympiad success.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourApproach.map((item, index) => {
              const IconComponent = approachIcons[index] || Brain;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                  <p className="text-white/80 font-medium">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Batch Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16">
            <h2 className="bg-green text-white px-8 py-3 rounded-full text-3xl font-heading font-bold mb-4 shadow-md">Batch Timeline</h2>
            <p className="text-lg text-primary font-medium max-w-2xl mx-auto text-center">
              A systematic preparation schedule designed for exam success.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-0">
            {batchTimeline.map((item, index) => (
              <div key={index} className="flex-1 relative w-full">
                <div className="flex sm:flex-col items-center gap-4 sm:gap-0">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg flex-shrink-0 ${index === 0 ? 'bg-accent text-white' : 'bg-white border-4 border-accent text-accent'}`}>
                    {index + 1}
                  </div>
                  <div className="sm:mt-4 text-left sm:text-center">
                    <div className="text-lg font-heading font-bold text-primary">{item.month}</div>
                    <div className="text-accent font-bold uppercase text-sm tracking-wider my-1">{item.phase}</div>
                    <div className="text-sm text-gray-600 font-medium">{item.description}</div>
                  </div>
                </div>
                {index < batchTimeline.length - 1 && (
                  <div className="hidden sm:block absolute top-8 left-1/2 w-full h-1 bg-gray-200 rounded-full -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16">
            <h2 className="bg-primary text-white px-8 py-3 rounded-full text-3xl font-heading font-bold mb-4 shadow-md">Why Parents Trust Us</h2>
            <p className="text-lg text-primary font-medium max-w-2xl mx-auto text-center">
              Join thousands of families who have transformed their child's mathematical journey.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => {
              const statIcons = [Users, Trophy, Building, CheckCircle];
              const IconComponent = statIcons[index] || Users;
              return (
                <div key={index} className="text-center bg-white rounded-[2rem] border-4 border-white p-6 shadow-xl hover:-translate-y-1 transition-transform">
                  <div className="bg-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-orange" />
                  </div>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
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
