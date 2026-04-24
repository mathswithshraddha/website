export interface Exam {
  slug: string;
  name: string;
  shortName: string;
  fullForm: string;
  description: string;
  fullDescription: string;
  conductingBody: string;
  eligibility: string;
  pattern: string;
  difficulty: number;
  difficultyNote: string;
  registrationTimeline: string;
  keyTopics: string[];
  benefits: string[];
  challenges: string[];
  heroTitle: string;
  heroSubheadline: string;
}

export const examsData: Exam[] = [
  {
    slug: "sasmo",
    name: "SASMO",
    shortName: "SASMO",
    fullForm: "Singapore and Asian Schools Math Olympiad",
    description: "International maths olympiad from Singapore testing conceptual understanding and problem-solving skills.",
    fullDescription: "The Singapore and Asian Schools Math Olympiad (SASMO) is one of the largest Maths Olympiads in Asia, open to students from Primary 2 to Secondary 4. It tests not just calculation ability but conceptual understanding, logical thinking, and creative problem-solving. SASMO awards Gold, Silver, and Bronze medals, with top performers invited to international camps.",
    conductingBody: "Singapore Mathematical Society",
    eligibility: "Students in Grades 2-9 (Primary 2 to Secondary 2)",
    pattern: "25 questions: 15 multiple choice + 10 non-routine (45 minutes)",
    difficulty: 7,
    difficultyNote: "Moderate to High - requires strong conceptual clarity and exposure to non-routine problems",
    registrationTimeline: "January to March (exact dates vary yearly)",
    keyTopics: ["Arithmetic & Number Theory", "Algebra", "Geometry", "Combinatorics", "Logical Reasoning"],
    benefits: [
      "International recognition and certification",
      "Strong conceptual foundation for higher mathematics",
      " Develops creative problem-solving skills",
      "Opens doors to international math camps and competitions"
    ],
    challenges: [
      "Lack of conceptual clarity in advanced topics",
      "Limited exposure to non-routine problem types",
      "Time management under exam pressure",
      "Difficulty bridging school math and olympiad math"
    ],
    heroTitle: "SASMO Exam Preparation in Mumbai & Online",
    heroSubheadline: "Complete guidance for Singapore and Asian Schools Math Olympiad with structured coaching and mock tests."
  },
  {
    slug: "sof",
    name: "SOF Olympiads",
    shortName: "SOF",
    fullForm: "Science Olympiad Foundation",
    description: "India's largest school-level olympiad program including IMO, NSO, and IMO for maths excellence.",
    fullDescription: "The Science Olympiad Foundation (SOF) conducts India's largest school-level olympiad program, including the International Mathematics Olympiad (IMO). SOF olympiads are conducted in 800+ cities across 40+ countries, reaching over 1 million students annually. The exams test conceptual understanding and application skills.",
    conductingBody: "Science Olympiad Foundation (SOF)",
    eligibility: "Students in Grades 1-12",
    pattern: "Multiple choice: 50 questions (Level 1), 20 questions (Level 2) - Varies by grade",
    difficulty: 5,
    difficultyNote: "Moderate - focuses on school curriculum with application-based questions",
    registrationTimeline: "July to October for IMO (exact dates vary yearly)",
    keyTopics: ["Number Systems", "Algebra Basics", "Geometry", "Measurement", "Data Handling"],
    benefits: [
      " India-level recognition and credentials",
      "Strengthens school math performance",
      "Builds exam confidence and temperament",
      "Scholarship opportunities for top performers"
    ],
    challenges: [
      "Understanding application-based questions",
      "Managing time across different topics",
      "Building speed and accuracy",
      "Transitioning from rote to conceptual learning"
    ],
    heroTitle: "SOF Olympiad Preparation (IMO, NSO, IEO)",
    heroSubheadline: "Expert coaching for Science Olympiad Foundation exams including International Mathematics Olympiad."
  },
  {
    slug: "ipm",
    name: "IPM",
    shortName: "IPM",
    fullForm: "International Pingala's Math",
    description: "Annual math competition focused on arithmetic fluency and mental math excellence.",
    fullDescription: "International Pingala's Math (IPM) is an annual mathematics competition that focuses on arithmetic fluency, calculation speed, and mental math skills. It is conducted in two rounds - the qualifier and the final - testing students' mathematical agility and precision under time pressure.",
    conductingBody: "International Pingala's Math Society",
    eligibility: "Students in Grades 1-8",
    pattern: "Online test: 50-100 questions based on arithmetic and mental math (30-60 minutes)",
    difficulty: 4,
    difficultyNote: "Easy to Moderate - focuses on speed and accuracy in arithmetic operations",
    registrationTimeline: "August to November (exact dates vary yearly)",
    keyTopics: ["Arithmetic Operations", "Number Sense", "Speed Calculations", "Mental Math Tricks", "Pattern Recognition"],
    benefits: [
      "Enhances calculation speed and accuracy",
      "Builds mental math proficiency",
      "Strengths arithmetic foundation",
      "Improves confidence in number handling"
    ],
    challenges: [
      "Building mental calculation speed",
      "Accuracy under time pressure",
      "Memorizing shortcuts and tricks",
      "Managing stress during timed tests"
    ],
    heroTitle: "IPM Maths Preparation & Coaching",
    heroSubheadline: "Master arithmetic and mental math with speed training and precision exercises."
  },
  {
    slug: "mental-maths",
    name: "Mental Maths",
    shortName: "Mental Maths",
    fullForm: "Mental Mathematics Training Program",
    description: "Speed math training program for brain development and quick calculation abilities.",
    fullDescription: "Our Mental Mathematics Training Program is designed to develop quick calculation abilities, strengthen working memory, and enhance cognitive development. Through structured practice with Vedic math techniques, abacus methods, and logical shortcuts, students develop the ability to solve complex calculations mentally.",
    conductingBody: "Maths with Shraddha",
    eligibility: "Students in Grades 2-9",
    pattern: "Weekly sessions with progressive difficulty and timed practice",
    difficulty: 3,
    difficultyNote: "Easy to Moderate - accessible to all levels with regular practice",
    registrationTimeline: "Ongoing enrollment throughout the year",
    keyTopics: ["Vedic Math Techniques", "Abacus Methods", "Quick Mental Calculations", "Number Sense", "Cognitive Math Games"],
    benefits: [
      "Develops lightning-fast calculation speed",
      "Enhances working memory and concentration",
      " Builds brain-body coordination",
      "Creates lifelong numerical confidence"
    ],
    challenges: [
      "Overcoming dependency on written calculations",
      "Building mental stamina",
      "Learning and applying shortcuts",
      "Maintaining accuracy at speed"
    ],
    heroTitle: "Mental Maths Classes for Kids (Grades 2-9)",
    heroSubheadline: "Speed math training for brain development with proven techniques and personalized attention."
  }
];

export const examCards = examsData.map(exam => ({
  slug: exam.slug,
  name: exam.shortName,
  fullName: exam.name,
  description: exam.description,
  difficulty: exam.difficulty,
  link: `/exams/${exam.slug}`
}));

export const whyOlympiads = [
  {
    title: "Logical Thinking Development",
    description: "Olympiad preparation develops structured logical thinking that extends beyond mathematics to all academic areas.",
    icon: "Brain"
  },
  {
    title: "Problem-Solving Skills",
    description: "Students learn multiple approaches to problem-solving, building flexibility and creativity in tackling complex questions.",
    icon: "Lightbulb"
  },
  {
    title: "Competitive Exam Readiness",
    description: "Regular olympiad exposure prepares students for entrance exams like JEE, NEET, and other competitive assessments.",
    icon: "Target"
  },
  {
    title: "Confidence Building",
    description: "Achieving recognition in olympiads builds unshakeable academic confidence and a growth mindset.",
    icon: "Trophy"
  }
];

export const ourApproach = [
  {
    title: "Concept-First Teaching",
    description: "Every topic begins with clear conceptual understanding before moving to application.",
    icon: "BookOpen"
  },
  {
    title: "Adaptive Learning",
    description: "Our teaching adapts to each student's pace, strengths, and areas for improvement.",
    icon: "Cpu"
  },
  {
    title: "Olympiad-Level Practice",
    description: "Access to curated problems from past olympiad papers and expert-designed question banks.",
    icon: "Pencil"
  },
  {
    title: "Personalized Attention",
    description: "Small batch sizes ensure every student receives individual attention and guidance.",
    icon: "Users"
  }
];

export const batchTimeline = [
  { month: "June", phase: "Foundation Building", description: "Core concepts and fundamentals" },
  { month: "July-August", phase: "Concept Deepening", description: "Advanced topics and problem-solving" },
  { month: "September", phase: "Syllabus Completion", description: "Full syllabus coverage" },
  { month: "October-November", phase: "Practice & Revision", description: "Mock tests and thorough revision" },
  { month: "December", phase: "Final Preparation", description: "Last-minute tips and exam strategy" }
];

export const statsData = [
  { value: "2000+", label: "Students Taught", icon: "Users" },
  { value: "80%+", label: "Olympiad Success Rate", icon: "Award" },
  { value: "50+", label: "Schools Represented", icon: "Building" },
  { value: "100%", label: "Concept Clarity", icon: "CheckCircle" }
];