import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  Brain,
  CheckCircle2,
  Clock,
  Globe2,
  GraduationCap,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/seo/JsonLd";
import { buildBasicPageMetadata } from "@/lib/seo/metadata";
import { SITE_NAME, SITE_URL, instructorProfile, organization } from "@/lib/seo/site";

const pagePath = "/competitive-exam-classes-mumbai";
const pageUrl = `${SITE_URL}${pagePath}`;

export const metadata = buildBasicPageMetadata({
  path: pagePath,
  title: "Competitive Exam Classes in Mumbai",
  description:
    "Competitive exam classes in Mumbai for Grades 1-10. Olympiad, SASMO, SOF IMO, mental maths and aptitude coaching by Shraddha Panchal.",
  keywords: [
    "Competitive Exam Classes in Mumbai",
    "Maths Olympiad Coaching Mumbai",
    "Olympiad Classes Mumbai",
    "Mental Maths Classes Mumbai",
    "SASMO Coaching Mumbai",
    "Competitive Maths Classes Mumbai",
    "Online Olympiad Coaching Mumbai",
    "Best Maths Coaching for Olympiads in Mumbai",
    "International Maths Competition Preparation Mumbai",
  ],
});

const exams = [
  {
    title: "SOF IMO Preparation",
    icon: Trophy,
    href: "/exams/sof",
    copy:
      "Students learn the concepts, question types, and reasoning patterns needed for the Science Olympiad Foundation International Mathematics Olympiad. The focus is not only on solving past-style questions, but on understanding why a method works, how to choose the right strategy, and how to handle unfamiliar problems calmly.",
  },
  {
    title: "SASMO Coaching",
    icon: Globe2,
    href: "/exams/sasmo",
    copy:
      "SASMO rewards flexible thinking, number sense, pattern recognition, and non-routine problem solving. Our training helps children move beyond school textbook comfort and build the confidence to approach Singapore and Asian Schools Math Olympiad problems step by step.",
  },
  {
    title: "Mental Maths Training",
    icon: Brain,
    href: "/exams/mental-maths",
    copy:
      "Mental maths classes strengthen speed, accuracy, working memory, and numerical confidence. Students practise calculation strategies, estimation, tables, fractions, percentages, and arithmetic shortcuts while still learning the logic behind each technique.",
  },
  {
    title: "Scholarship and Aptitude Exams",
    icon: GraduationCap,
    href: "/courses",
    copy:
      "For scholarship tests, aptitude assessments, and school-level competitive exams, students need clarity in arithmetic, geometry, logical reasoning, data handling, and word problems. We build these foundations through structured practice and regular feedback.",
  },
  {
    title: "Problem Solving Competitions",
    icon: Target,
    href: "/olympiads",
    copy:
      "Many students enjoy challenge rounds, inter-school contests, maths quizzes, and advanced worksheets. We train them to read questions carefully, identify hidden information, test cases, draw diagrams, and present solutions with discipline.",
  },
  {
    title: "International Mathematics Competitions",
    icon: Award,
    href: "/international",
    copy:
      "For families looking at international mathematics competition preparation in Mumbai or online, the programme introduces students to richer problem types, global contest expectations, and the academic habits required for long-term excellence.",
  },
];

const reasons = [
  "30+ years of mathematics teaching experience led by Shraddha Panchal",
  "Concept-first coaching for Grade 1 to Grade 10 students",
  "Small-batch learning with personal attention and parent communication",
  "Preparation for SOF IMO, SASMO, mental maths, scholarship, and aptitude exams",
  "Online learning designed for Mumbai families who want quality without commute pressure",
  "A balanced method that develops accuracy, reasoning, confidence, and exam readiness",
];

const areas = [
  "Kandivali",
  "Borivali",
  "Malad",
  "Goregaon",
  "Andheri",
  "Powai",
  "Vile Parle",
  "Dadar",
  "Thane",
  "Navi Mumbai",
];

const successStories = [
  {
    title: "From fast mistakes to careful reasoning",
    copy:
      "A Grade 5 student from the western suburbs was quick with calculations but lost marks in multi-step Olympiad questions. After focused work on reading, diagramming, and checking assumptions, the child became more patient with long questions and started explaining solutions clearly.",
  },
  {
    title: "A hesitant learner building mental maths confidence",
    copy:
      "One parent came to us because their child avoided oral calculations and felt anxious when timed. The programme began with number bonds, tables, estimation, and friendly speed drills. Over time, the student started participating actively and became more comfortable with competitive maths practice.",
  },
  {
    title: "A high-performing student needing deeper challenge",
    copy:
      "Some children already score well in school maths but need enrichment that stretches their thinking. For such students, we add non-routine puzzles, SASMO-style reasoning, advanced word problems, and international contest exposure so ability is converted into disciplined problem solving.",
  },
];

const internalLinks = [
  { href: "/exams/sof", label: "SOF IMO coaching" },
  { href: "/exams/sasmo", label: "SASMO preparation" },
  { href: "/exams/mental-maths", label: "Mental maths classes" },
  { href: "/olympiads", label: "Olympiad maths hub" },
  { href: "/courses", label: "Grade 1-10 maths programmes" },
  { href: "/international", label: "International student batches" },
  { href: "/testimonials", label: "Parent testimonials" },
  { href: "/enquire", label: "Book a free trial" },
];

const faqs = [
  {
    question: "Which are the best competitive exam classes in Mumbai for maths?",
    answer:
      "The best competitive exam classes in Mumbai for maths should combine concept clarity, Olympiad-style problem solving, mental maths fluency, regular feedback, and parent communication. Maths With Shraddha offers structured online and small-batch coaching for Grade 1 to Grade 10 students preparing for SOF IMO, SASMO, mental maths, scholarship, aptitude, and other competitive maths exams.",
  },
  {
    question: "Do you offer Maths Olympiad coaching in Mumbai?",
    answer:
      "Yes. Maths With Shraddha offers Maths Olympiad coaching for Mumbai students through live online classes and focused enrichment programmes. Students work on logical reasoning, number sense, geometry, patterns, word problems, and exam-style practice for competitions such as SOF IMO and SASMO.",
  },
  {
    question: "Is the programme suitable for Grade 1 to Grade 10 students?",
    answer:
      "Yes. The programme supports students from Grade 1 to Grade 10. Younger students build number sense, confidence, and mental maths fluency, while older students work on deeper reasoning, advanced problem solving, and exam-specific preparation.",
  },
  {
    question: "Do you provide SASMO coaching in Mumbai?",
    answer:
      "Yes. SASMO coaching is available for Mumbai families through Maths With Shraddha. The training focuses on Singapore-style problem solving, pattern recognition, logical reasoning, arithmetic depth, geometry thinking, and strategies for non-routine questions.",
  },
  {
    question: "How is SOF IMO preparation different from regular school maths?",
    answer:
      "SOF IMO preparation goes beyond textbook exercises. Students need to solve reasoning-based questions, application problems, higher-order thinking questions, and timed practice sets. Our classes connect school concepts with Olympiad-level problem solving so children understand both the method and the reasoning.",
  },
  {
    question: "Are the classes online or offline for Mumbai students?",
    answer:
      "The programme is designed to serve Mumbai families through high-quality online coaching, with small-batch attention, live explanation, guided practice, and parent updates. This helps students from Kandivali, Borivali, Malad, Goregaon, Andheri, Powai, Vile Parle, Dadar, Thane, and Navi Mumbai learn without long commute time.",
  },
  {
    question: "Do you teach mental maths along with Olympiad preparation?",
    answer:
      "Yes. Mental maths is an important part of competitive maths training. Students learn calculation strategies, estimation, number patterns, tables, fractions, percentages, and speed techniques while continuing to build conceptual understanding.",
  },
  {
    question: "Can my child join if they are good at school maths but new to Olympiads?",
    answer:
      "Yes. Many students join after doing well in school maths but before formal Olympiad exposure. We first strengthen foundations, then gradually introduce Olympiad question types, reasoning methods, and timed practice so the child is challenged without being overwhelmed.",
  },
  {
    question: "Can my child join if they are not confident in maths?",
    answer:
      "Yes. Competitive maths classes are not only for toppers. A child who lacks confidence often needs clear explanation, patient repetition, and success with smaller problem-solving steps. The programme helps such students build accuracy, reduce fear, and participate more actively.",
  },
  {
    question: "How do parents know whether their child is improving?",
    answer:
      "Parents receive feedback through class observations, practice performance, confidence changes, and discussion of learning priorities. The goal is to help parents understand whether the child needs stronger calculation fluency, better conceptual clarity, improved reading of word problems, or more advanced challenge.",
  },
  {
    question: "Do you prepare students for scholarship and aptitude examinations?",
    answer:
      "Yes. Students preparing for scholarship and aptitude examinations work on arithmetic, reasoning, logic, geometry, data handling, speed, and accuracy. The exact plan depends on the grade, current level, and target exam.",
  },
  {
    question: "What makes Maths With Shraddha different from regular tuition?",
    answer:
      "Regular tuition often focuses on school exams and homework support. Maths With Shraddha is built for enrichment and competitive maths readiness. The programme develops conceptual clarity, mental maths, problem-solving habits, Olympiad exposure, and independent thinking under an experienced maths educator.",
  },
  {
    question: "How do I book a free trial for competitive exam classes in Mumbai?",
    answer:
      "You can book a free trial by submitting the enquiry form or contacting Maths With Shraddha on WhatsApp. The trial helps parents understand the teaching style, class fit, and recommended learning path for the child.",
  },
];

function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization"],
    name: SITE_NAME,
    url: pageUrl,
    telephone: organization.telephone,
    email: organization.email,
    image: `${SITE_URL}/MWS_NOBG2.png`,
    description:
      "Maths With Shraddha provides competitive maths, Olympiad, SASMO, SOF IMO, mental maths, scholarship, and aptitude exam coaching for Grade 1 to Grade 10 students in Mumbai and online.",
    address: {
      "@type": "PostalAddress",
      addressLocality: organization.address.locality,
      addressRegion: organization.address.region,
      addressCountry: organization.address.country,
    },
    areaServed: [
      "Mumbai",
      "Kandivali",
      "Borivali",
      "Malad",
      "Goregaon",
      "Andheri",
      "Powai",
      "Vile Parle",
      "Dadar",
      "Thane",
      "Navi Mumbai",
    ],
    founder: {
      "@type": "Person",
      name: instructorProfile.name,
      jobTitle: instructorProfile.jobTitle,
      description: instructorProfile.description,
    },
    priceRange: "$$",
    sameAs: [SITE_URL],
  };
}

function courseSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Competitive Exam Classes in Mumbai",
    description:
      "A concept-first competitive maths programme for Grade 1 to Grade 10 students preparing for SOF IMO, SASMO, mental maths, scholarship exams, aptitude tests, and international mathematics competitions.",
    provider: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    educationalLevel: "Grade 1 to Grade 10",
    inLanguage: "en",
    courseMode: "Online",
    areaServed: "Mumbai",
    teaches: [
      "Olympiad maths",
      "SOF IMO preparation",
      "SASMO preparation",
      "Mental maths",
      "Logical reasoning",
      "Aptitude mathematics",
      "Scholarship exam maths",
      "International mathematics competition preparation",
    ],
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
  };
}

function webPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Competitive Exam Classes in Mumbai",
    description:
      "Parent-focused guide to competitive maths, Olympiad, SASMO, SOF IMO, mental maths, scholarship, and aptitude exam coaching for Mumbai students.",
    url: pageUrl,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: [
      "Competitive Exam Classes in Mumbai",
      "Maths Olympiad Coaching Mumbai",
      "SASMO Coaching Mumbai",
      "Mental Maths Classes Mumbai",
    ],
  };
}

export default function CompetitiveExamClassesMumbaiPage() {
  const schemas = [webPageSchema(), localBusinessSchema(), courseSchema(), faqSchema()];

  return (
    <>
      <JsonLd data={schemas} />
      <main className="flex min-h-screen flex-col bg-background overflow-x-hidden">
        <Navbar />

        <section className="relative pt-32 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(240,139,73,0.18),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(161,190,91,0.18),transparent_30%)]" />
          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-primary shadow-sm mb-6">
                <MapPin className="h-4 w-4 text-orange" />
                Mumbai-focused online maths enrichment for Grades 1-10
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-black text-primary leading-tight max-w-4xl">
                Competitive Exam Classes in Mumbai for Olympiad, SASMO, SOF IMO and Mental Maths
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                Maths With Shraddha helps Mumbai students build the mathematical thinking needed for competitive
                exams, Olympiads, mental maths, scholarship tests, aptitude assessments, and international maths
                competitions. The programme is designed for parents who want more than marks: stronger reasoning,
                sharper accuracy, calmer exam confidence, and a child who can enjoy challenging problems.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/enquire"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-white font-bold shadow-lg hover:bg-primary/90 transition-colors"
                >
                  Book a Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="https://wa.me/919969174811?text=Hi%20Shraddha%20Ma'am%2C%20I%20am%20looking%20for%20competitive%20exam%20classes%20in%20Mumbai."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-white font-bold shadow-lg hover:bg-[#1ebd5c] transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp for Guidance
                </a>
              </div>
              <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-3xl">
                {[
                  ["30+ years", "teaching experience"],
                  ["Grade 1-10", "structured maths enrichment"],
                  ["SOF IMO, SASMO", "and mental maths focus"],
                ].map(([stat, label]) => (
                  <div key={stat} className="rounded-2xl bg-white/90 p-4 shadow-md">
                    <p className="text-2xl font-black text-primary">{stat}</p>
                    <p className="text-sm font-medium text-gray-600">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] bg-white p-5 md:p-7 shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-background">
                  <Image
                    src="/Shraddha Mam.jpg"
                    alt="Shraddha Panchal teaching competitive maths to students"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {["Concept clarity", "Exam strategy", "Parent updates", "Small batches"].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl bg-background px-3 py-3 text-sm font-bold text-primary">
                      <CheckCircle2 className="h-4 w-4 text-green" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-black uppercase tracking-wide text-orange mb-3">Why It Matters</p>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-primary mb-6">
              Why Competitive Maths Training Matters
            </h2>
            <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
              <p>
                Competitive mathematics is different from routine school maths. In school, a child may know the chapter,
                remember the formula, and still struggle when a problem is asked in an unfamiliar way. Olympiad and
                aptitude questions test interpretation, logic, numerical flexibility, and the ability to connect ideas
                across topics. That is why the right competitive exam classes in Mumbai should not feel like extra
                homework. They should train a child to think.
              </p>
              <p>
                Parents often notice the need for enrichment when their child is either scoring well but not feeling
                challenged, or working hard but losing marks in word problems and tricky reasoning questions. Both
                situations require a different teaching approach. A confident student needs depth, variety, and
                disciplined competition practice. A hesitant student needs patient concept repair, smaller wins, and a
                teacher who can remove fear without lowering expectations.
              </p>
              <p>
                At Maths With Shraddha, competitive maths training is built around conceptual clarity, mental agility,
                problem-solving habits, and exam temperament. Students learn how to break down a question, choose a
                method, verify an answer, and explain the reasoning. This approach supports SOF IMO preparation, SASMO
                coaching, mental maths fluency, scholarship exam readiness, and broader logical reasoning skills that
                help children beyond any one test.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mb-10">
              <p className="text-sm font-black uppercase tracking-wide text-orange mb-3">Exam Coverage</p>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-primary mb-5">
                Exams We Prepare Students For
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The programme is suitable for parents searching for Maths Olympiad coaching in Mumbai, Olympiad classes
                in Mumbai, SASMO coaching in Mumbai, mental maths classes in Mumbai, and competitive maths classes that
                build durable academic confidence. Each exam has its own style, but the foundation is the same: clear
                concepts, accurate calculation, logical reading, and consistent practice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {exams.map((exam) => {
                const Icon = exam.icon;
                return (
                  <article key={exam.title} className="rounded-[1.5rem] border border-gray-100 bg-background p-6 shadow-sm">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-heading font-black text-primary mb-3">{exam.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-5">{exam.copy}</p>
                    <Link href={exam.href} className="inline-flex items-center gap-2 font-bold text-orange hover:text-primary transition-colors">
                      Explore this path
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
            <div className="lg:sticky lg:top-32">
              <p className="text-sm font-black uppercase tracking-wide text-orange mb-3">Parent Trust</p>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-primary mb-5">
                Why Parents Across Mumbai Choose Maths With Shraddha
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Families do not choose competitive exam coaching only because an exam is approaching. They choose it
                because they want their child to become more independent with maths. That means fewer careless mistakes,
                better stamina with multi-step questions, stronger memory for methods, and a healthier attitude toward
                academic challenge.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-heading font-black text-primary mb-4">
                  Experienced guidance with a clear academic lens
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Shraddha Panchal brings over 30 years of teaching experience to the classroom. That experience matters
                  because competitive maths is not just a collection of worksheets. A teacher must understand why a child
                  is stuck: weak tables, poor reading, shaky fractions, formula dependency, lack of confidence, or
                  insufficient exposure to non-routine problems. The class plan is shaped by those learning needs.
                </p>
              </div>
              <div className="rounded-[2rem] bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-heading font-black text-primary mb-4">
                  A balanced programme for confidence and challenge
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Some students need stronger fundamentals before they are ready for Olympiad depth. Others need more
                  challenging material because regular school work feels too easy. Maths With Shraddha balances both
                  needs through concept revision, mental maths practice, reasoning questions, speed drills, and
                  competition-style problem sets. The aim is not to rush a child into difficulty, but to prepare them for
                  it intelligently.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {reasons.map((reason) => (
                  <div key={reason} className="rounded-2xl bg-white p-5 shadow-sm flex gap-3">
                    <ShieldCheck className="h-5 w-5 text-green flex-none mt-1" />
                    <p className="font-medium text-gray-700">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-white/70 mb-3">Mumbai Reach</p>
              <h2 className="text-3xl md:text-5xl font-heading font-black mb-5">Areas Served in Mumbai</h2>
              <p className="text-lg text-white/85 leading-relaxed">
                Maths With Shraddha serves Mumbai families through online Olympiad coaching and competitive maths
                enrichment that removes the commute barrier without reducing academic seriousness. Parents from the
                western suburbs, central Mumbai, Thane, and Navi Mumbai often prefer online learning because children can
                attend focused classes after school without losing time in traffic.
              </p>
              <p className="mt-5 text-lg text-white/85 leading-relaxed">
                This page is not built as separate doorway content for every locality. The teaching model is Mumbai-wide:
                one strong academic programme, live interaction, consistent practice, and parent communication for
                families looking for the best maths coaching for Olympiads in Mumbai.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {areas.map((area) => (
                <div key={area} className="rounded-2xl bg-white/10 border border-white/15 px-4 py-4 font-bold text-center">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-[2rem] bg-white p-6 shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-background">
                <Image
                  src="/Maths with Shraddha Students Gallery 10. .jpg"
                  alt="Students learning maths with Maths With Shraddha"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-orange mb-3">Online Learning</p>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-primary mb-5">
                Online Learning Experience for Mumbai Families
              </h2>
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>
                  Online Olympiad coaching in Mumbai works best when it is not treated as a passive video class. Students
                  need live questioning, visible working, guided correction, and opportunities to explain their thinking.
                  Our classes are designed around interaction. A child is encouraged to speak, solve, ask, attempt, and
                  learn from mistakes.
                </p>
                <p>
                  The format is especially helpful for parents who want rigorous coaching but cannot manage repeated
                  travel from Kandivali to Andheri, Powai to Dadar, or Thane to the western suburbs. Children can use that
                  saved time for practice, rest, reading, or schoolwork. For competitive maths, consistency often matters
                  more than commute-heavy intensity.
                </p>
                <p>
                  Students receive structured practice across arithmetic, logical reasoning, geometry, patterns, number
                  theory basics, fractions, percentages, measurement, data interpretation, and word problems. The
                  classroom tone stays warm but focused, so children associate mathematics with effort, curiosity, and
                  progress rather than fear.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mb-10">
              <p className="text-sm font-black uppercase tracking-wide text-orange mb-3">Results That Matter</p>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-primary mb-5">
                Student Success Stories
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Success in competitive maths is not measured only by a medal or rank. Those outcomes matter, but the
                deeper signs are equally important: a child starts reading questions more carefully, stops giving up too
                quickly, explains a method with confidence, and begins to enjoy mathematical challenge.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {successStories.map((story) => (
                <article key={story.title} className="rounded-[1.5rem] bg-background p-7 shadow-sm">
                  <Sparkles className="h-7 w-7 text-orange mb-4" />
                  <h3 className="text-2xl font-heading font-black text-primary mb-3">{story.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{story.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-black uppercase tracking-wide text-orange mb-3">Academic Method</p>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-primary mb-6">
              How We Build Competitive Maths Readiness
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: BookOpenCheck,
                  title: "Foundation before speed",
                  copy:
                    "Speed without understanding creates careless errors. Students first learn the concept, then practise efficient methods, mental calculation, and timed accuracy.",
                },
                {
                  icon: Brain,
                  title: "Reasoning before memorisation",
                  copy:
                    "Olympiad classes must train children to ask why. We use patterns, diagrams, examples, counterexamples, and guided questioning to build reasoning.",
                },
                {
                  icon: Clock,
                  title: "Practice with review",
                  copy:
                    "Practice only helps when mistakes are studied. Students learn to identify whether an error came from reading, calculation, concept confusion, or rushed thinking.",
                },
                {
                  icon: Users,
                  title: "Parent communication",
                  copy:
                    "Parents receive practical guidance on progress and fit. This helps families make better decisions about exams, practice volume, and long-term enrichment.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.5rem] bg-white p-7 shadow-md">
                    <Icon className="h-8 w-8 text-orange mb-4" />
                    <h3 className="text-2xl font-heading font-black text-primary mb-3">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-white">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-black uppercase tracking-wide text-orange mb-3">Internal Resources</p>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-primary mb-5">
              Helpful Maths With Shraddha Pages for Parents
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Parents researching competitive maths classes often need to compare exam types, understand the difference
              between mental maths and Olympiad maths, and decide whether their child needs a broad enrichment programme
              or exam-specific coaching. These pages are useful next steps.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-gray-100 bg-background px-4 py-4 font-bold text-primary hover:border-orange hover:text-orange transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-black uppercase tracking-wide text-orange mb-3">Questions Parents Ask</p>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-primary mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl bg-white p-6 shadow-sm">
                  <summary className="cursor-pointer list-none text-xl font-heading font-black text-primary flex items-start justify-between gap-4">
                    {faq.question}
                    <span className="mt-1 rounded-full bg-background px-3 py-1 text-sm text-orange group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 bg-primary text-white">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm font-black uppercase tracking-wide text-white/70 mb-3">Start With Clarity</p>
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-6">
              Help Your Child Build the Maths Confidence Competitive Exams Demand
            </h2>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mx-auto mb-8">
              If you are searching for competitive exam classes in Mumbai, Maths Olympiad coaching, SASMO coaching,
              online Olympiad coaching, or mental maths classes for your child, start with a trial session and a clear
              recommendation. We will help you understand the right learning path based on your child&apos;s grade,
              confidence, current level, and goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/enquire"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-8 py-4 text-white font-black shadow-lg hover:bg-orange/90 transition-colors"
              >
                Book Free Trial
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/919969174811?text=Hi%20Shraddha%20Ma'am%2C%20please%20guide%20me%20for%20competitive%20maths%20classes%20in%20Mumbai."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-primary font-black shadow-lg hover:bg-background transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
