export type ExamKey =
  | "sof-imo"
  | "sasmo"
  | "ipm"
  | "mental-maths"
  | "olympiad-maths"
  | "singapore-maths"
  | "online-maths-enrichment";

export type RegionKey = "in" | "sg" | "ae" | "us" | "uk" | "ca" | "au";
export type LocationKey =
  | "mumbai"
  | "thane"
  | "navi-mumbai"
  | "borivali"
  | "kandivali"
  | "malad"
  | "goregaon"
  | "andheri"
  | "powai"
  | "dadar"
  | "pune"
  | "nashik";

export interface SeoExam {
  key: ExamKey;
  slug: string;
  name: string;
  shortName: string;
  family: "exam" | "programme";
  primaryPage: string;
  minGrade: number;
  maxGrade: number;
  citySuffix: "coaching" | "classes" | "training";
  onlineLabel: string;
  overview: string;
  parentConcern: string;
  learningOutcome: string;
  syllabusThemes: string[];
  bestFor: string[];
  preparationSteps: string[];
  faqAngles: string[];
  relatedExams: ExamKey[];
}

export interface SeoLocation {
  key: LocationKey;
  slug: string;
  name: string;
  state: string;
  regionLabel: string;
  nearby: LocationKey[];
  parentContext: string;
}

export interface SeoRegion {
  key: RegionKey;
  code: string;
  name: string;
  locale: string;
  spelling: "maths" | "math";
  programmeSpelling: "program" | "programme";
  timezone: string;
  parentProfile: string;
}

export interface ComparisonPage {
  slug: string;
  title: string;
  leftExam: ExamKey;
  rightExam: ExamKey;
  parentIntent: string;
}

export interface ParentIntentPage {
  slug: string;
  title: string;
  focus: ExamKey | "calculation-speed" | "mental-maths-benefits";
  audience: string;
}

export const grades = Array.from({ length: 10 }, (_, index) => {
  const grade = index + 1;
  return {
    grade,
    label: `Class ${grade}`,
    studentAge: grade <= 2 ? "6-8 years" : grade <= 5 ? "8-11 years" : "11-15 years",
    learningStage:
      grade <= 2
        ? "foundational number sense"
        : grade <= 5
          ? "pattern building and structured reasoning"
          : "higher-order problem solving and competition readiness",
  };
});

export const seoExams: Record<ExamKey, SeoExam> = {
  "sof-imo": {
    key: "sof-imo",
    slug: "sof-imo",
    name: "SOF IMO",
    shortName: "SOF IMO",
    family: "exam",
    primaryPage: "/exams/sof",
    minGrade: 1,
    maxGrade: 10,
    citySuffix: "coaching",
    onlineLabel: "online-sof-imo-coaching",
    overview:
      "SOF IMO is a school-aligned olympiad that rewards conceptual clarity, application, and disciplined solving habits.",
    parentConcern:
      "Parents usually choose SOF IMO preparation when they want stronger school maths performance along with a first serious olympiad experience.",
    learningOutcome:
      "Students build confidence with word problems, logical reasoning, and level-based olympiad practice without losing touch with school maths.",
    syllabusThemes: ["number systems", "arithmetic", "geometry", "measurement", "reasoning", "data handling"],
    bestFor: [
      "students beginning olympiad maths",
      "parents seeking structured academic stretch beyond school",
      "families preparing for competitive exam habits early",
    ],
    preparationSteps: [
      "Strengthen grade-level school concepts before chasing advanced tricks.",
      "Introduce olympiad-style MCQs, higher-order reasoning, and timed practice gradually.",
      "Use mock tests to train accuracy, stamina, and error review before exam season.",
    ],
    faqAngles: ["eligibility", "pattern", "difficulty", "how to prepare"],
    relatedExams: ["sasmo", "ipm", "mental-maths"],
  },
  sasmo: {
    key: "sasmo",
    slug: "sasmo",
    name: "SASMO",
    shortName: "SASMO",
    family: "exam",
    primaryPage: "/exams/sasmo",
    minGrade: 2,
    maxGrade: 9,
    citySuffix: "classes",
    onlineLabel: "online-sasmo-coaching",
    overview:
      "SASMO is a globally respected singapore-style maths olympiad that tests non-routine thinking, elegance, and mathematical maturity.",
    parentConcern:
      "Parents typically consider SASMO when a child is ready for more challenging, internationally benchmarked problem solving.",
    learningOutcome:
      "Students learn how to reason through unfamiliar questions, communicate solutions, and think beyond procedural school maths.",
    syllabusThemes: ["number theory", "algebra", "geometry", "combinatorics", "logical reasoning"],
    bestFor: [
      "gifted or high-potential maths learners",
      "families interested in singapore maths style enrichment",
      "students aiming for international olympiad exposure",
    ],
    preparationSteps: [
      "Build conceptual fluency with arithmetic, fractions, ratio, and structured reasoning.",
      "Practice non-routine olympiad questions that require explanation instead of guesswork.",
      "Use post-test reviews to identify whether mistakes came from concepts, logic, or time management.",
    ],
    faqAngles: ["syllabus", "non-routine problems", "international recognition", "training plan"],
    relatedExams: ["sof-imo", "singapore-maths", "olympiad-maths"],
  },
  ipm: {
    key: "ipm",
    slug: "ipm",
    name: "IPM",
    shortName: "IPM",
    family: "exam",
    primaryPage: "/exams/ipm",
    minGrade: 1,
    maxGrade: 8,
    citySuffix: "training",
    onlineLabel: "international-maths-olympiad-training",
    overview:
      "IPM focuses on arithmetic fluency, mental agility, and speed with accuracy under exam conditions.",
    parentConcern:
      "Parents usually ask about IPM when a child is conceptually comfortable but still slow, hesitant, or dependent on written working for basic operations.",
    learningOutcome:
      "Students become faster and more precise with calculation, pattern recognition, and exam composure.",
    syllabusThemes: ["number sense", "arithmetic operations", "speed maths", "pattern recognition", "mental strategies"],
    bestFor: [
      "students who need stronger calculation fluency",
      "parents who want arithmetic confidence before harder olympiads",
      "children who freeze in timed maths tests",
    ],
    preparationSteps: [
      "Automate essential arithmetic facts and number bonds.",
      "Train mental strategies for multiplication, division, fractions, and approximation.",
      "Use timed drills only after accuracy is stable to avoid rushed habits.",
    ],
    faqAngles: ["speed building", "mental calculation", "timed tests", "suitability"],
    relatedExams: ["mental-maths", "sof-imo"],
  },
  "mental-maths": {
    key: "mental-maths",
    slug: "mental-maths",
    name: "Mental Maths",
    shortName: "Mental Maths",
    family: "programme",
    primaryPage: "/exams/mental-maths",
    minGrade: 1,
    maxGrade: 8,
    citySuffix: "classes",
    onlineLabel: "mental-maths-classes-online",
    overview:
      "Mental maths training develops fluency, confidence, working memory, and faster everyday numerical thinking.",
    parentConcern:
      "Parents often explore mental maths when a child understands concepts but still counts on fingers, avoids numbers, or lacks calculation confidence.",
    learningOutcome:
      "Students learn efficient strategies, better concentration, and cleaner number sense that support both school maths and olympiad maths.",
    syllabusThemes: ["number sense", "arithmetic fluency", "speed calculation", "patterns", "logic"],
    bestFor: [
      "students who need stronger speed and confidence",
      "parents comparing abacus alternatives",
      "children preparing for olympiads, scholarships, or enrichment programmes",
    ],
    preparationSteps: [
      "Improve number sense before teaching speed shortcuts.",
      "Introduce verbal reasoning and mental calculation routines in short, regular blocks.",
      "Connect speed work back to school maths and olympiad questions so the skill transfers.",
    ],
    faqAngles: ["benefits", "abacus alternative", "age suitability", "online learning"],
    relatedExams: ["ipm", "sof-imo", "olympiad-maths"],
  },
  "olympiad-maths": {
    key: "olympiad-maths",
    slug: "olympiad-maths",
    name: "Olympiad Maths",
    shortName: "Olympiad Maths",
    family: "programme",
    primaryPage: "/exams",
    minGrade: 2,
    maxGrade: 10,
    citySuffix: "coaching",
    onlineLabel: "international-maths-olympiad-training",
    overview:
      "Olympiad maths preparation combines depth, reasoning, creativity, and disciplined practice across multiple competition pathways.",
    parentConcern:
      "Families searching for olympiad maths usually want a long-term enrichment path rather than short-term exam drilling.",
    learningOutcome:
      "Students become more independent solvers, more resilient with challenge, and more prepared for future STEM competitions.",
    syllabusThemes: ["advanced arithmetic", "algebraic thinking", "geometry", "combinatorics", "logic"],
    bestFor: [
      "ambitious learners who enjoy challenge",
      "families seeking serious maths enrichment",
      "students preparing for national and international olympiads",
    ],
    preparationSteps: [
      "Map the right olympiad track based on grade, maturity, and current fluency.",
      "Build weekly routines around concept study, guided solving, and review.",
      "Use cross-exam practice to develop transfer, not just paper familiarity.",
    ],
    faqAngles: ["which olympiad", "grade suitability", "long-term planning", "school balance"],
    relatedExams: ["sof-imo", "sasmo", "mental-maths"],
  },
  "singapore-maths": {
    key: "singapore-maths",
    slug: "singapore-maths",
    name: "Singapore Maths",
    shortName: "Singapore Maths",
    family: "programme",
    primaryPage: "/international",
    minGrade: 1,
    maxGrade: 8,
    citySuffix: "classes",
    onlineLabel: "singapore-maths-program-for-kids",
    overview:
      "Singapore maths emphasizes mastery, bar modelling, visual reasoning, and deep understanding over rote acceleration.",
    parentConcern:
      "Parents drawn to singapore maths usually want a child who can explain ideas clearly and solve word problems with structure.",
    learningOutcome:
      "Students develop strong model-based reasoning, flexible strategies, and confidence with complex multi-step questions.",
    syllabusThemes: ["number bonds", "bar models", "fractions", "problem solving", "reasoning"],
    bestFor: [
      "global families familiar with singapore-style curricula",
      "homeschooling parents seeking depth",
      "students ready for advanced enrichment beyond worksheets",
    ],
    preparationSteps: [
      "Train visual modelling and precise mathematical language.",
      "Sequence topics so understanding compounds instead of fragmenting.",
      "Use problem sets that force transfer from one model to another.",
    ],
    faqAngles: ["how singapore maths works", "difference from school maths", "online suitability", "problem-solving"],
    relatedExams: ["sasmo", "olympiad-maths", "mental-maths"],
  },
  "online-maths-enrichment": {
    key: "online-maths-enrichment",
    slug: "online-maths-enrichment",
    name: "Online Maths Enrichment",
    shortName: "Online Maths Enrichment",
    family: "programme",
    primaryPage: "/international",
    minGrade: 1,
    maxGrade: 10,
    citySuffix: "classes",
    onlineLabel: "online-maths-enrichment",
    overview:
      "Online maths enrichment gives ambitious students structured challenge, live teaching, and an academic peer group without geography limiting options.",
    parentConcern:
      "These searches usually come from parents who have outgrown generic tuition and want a premium, challenge-based learning environment.",
    learningOutcome:
      "Students receive consistent stretch, better mathematical communication, and a programme that can travel with the family across countries.",
    syllabusThemes: ["reasoning", "competition maths", "enrichment projects", "mental fluency", "multi-step problem solving"],
    bestFor: [
      "international families",
      "parents of gifted or curious learners",
      "students needing more challenge than school provides",
    ],
    preparationSteps: [
      "Assess whether the child needs foundation support, olympiad readiness, or deeper enrichment.",
      "Place the child in a batch with the right pace and discussion level.",
      "Track growth through structured review rather than only marks.",
    ],
    faqAngles: ["global timing", "live classes", "fit for gifted students", "curriculum depth"],
    relatedExams: ["singapore-maths", "sasmo", "olympiad-maths"],
  },
};

export const seoLocations: Record<LocationKey, SeoLocation> = {
  mumbai: {
    key: "mumbai",
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    regionLabel: "Mumbai Metropolitan Region",
    nearby: ["thane", "navi-mumbai", "powai", "andheri"],
    parentContext: "Parents in Mumbai typically compare premium local coaching with online batches that reduce travel and preserve consistency through school terms.",
  },
  thane: {
    key: "thane",
    slug: "thane",
    name: "Thane",
    state: "Maharashtra",
    regionLabel: "Mumbai Metropolitan Region",
    nearby: ["mumbai", "navi-mumbai", "powai"],
    parentContext: "Families in Thane often want stronger olympiad support without compromising school schedules or long weekday commutes.",
  },
  "navi-mumbai": {
    key: "navi-mumbai",
    slug: "navi-mumbai",
    name: "Navi Mumbai",
    state: "Maharashtra",
    regionLabel: "Mumbai Metropolitan Region",
    nearby: ["mumbai", "thane"],
    parentContext: "Navi Mumbai parents usually look for disciplined programmes with measurable progress and flexible online access.",
  },
  borivali: {
    key: "borivali",
    slug: "borivali",
    name: "Borivali",
    state: "Maharashtra",
    regionLabel: "Western Suburbs",
    nearby: ["kandivali", "malad", "goregaon"],
    parentContext: "Borivali parents often search for nearby maths coaching that goes beyond board-style tuition and focuses on long-term reasoning.",
  },
  kandivali: {
    key: "kandivali",
    slug: "kandivali",
    name: "Kandivali",
    state: "Maharashtra",
    regionLabel: "Western Suburbs",
    nearby: ["borivali", "malad", "goregaon"],
    parentContext: "Families in Kandivali generally want a strong after-school routine with conceptual teaching and visible academic confidence.",
  },
  malad: {
    key: "malad",
    slug: "malad",
    name: "Malad",
    state: "Maharashtra",
    regionLabel: "Western Suburbs",
    nearby: ["kandivali", "goregaon", "borivali"],
    parentContext: "Malad searches often come from parents evaluating whether competitive maths can be taught rigorously without overwhelming the child.",
  },
  goregaon: {
    key: "goregaon",
    slug: "goregaon",
    name: "Goregaon",
    state: "Maharashtra",
    regionLabel: "Western Suburbs",
    nearby: ["malad", "andheri", "kandivali"],
    parentContext: "Goregaon families tend to look for premium mathematics programmes that balance stretch with steady mentoring.",
  },
  andheri: {
    key: "andheri",
    slug: "andheri",
    name: "Andheri",
    state: "Maharashtra",
    regionLabel: "Western Suburbs",
    nearby: ["goregaon", "powai", "dadar"],
    parentContext: "Andheri parents often prefer live online maths options that preserve access to top-quality coaching despite heavy local travel time.",
  },
  powai: {
    key: "powai",
    slug: "powai",
    name: "Powai",
    state: "Maharashtra",
    regionLabel: "Central Suburbs",
    nearby: ["mumbai", "thane", "andheri"],
    parentContext: "Powai searches often come from academically ambitious families looking for serious enrichment, olympiad pathways, and small-batch teaching.",
  },
  dadar: {
    key: "dadar",
    slug: "dadar",
    name: "Dadar",
    state: "Maharashtra",
    regionLabel: "Central Mumbai",
    nearby: ["mumbai", "andheri", "powai"],
    parentContext: "Dadar parents usually compare legacy tuition options with modern enrichment models that build reasoning instead of rote repetition.",
  },
  pune: {
    key: "pune",
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    regionLabel: "Western Maharashtra",
    nearby: ["mumbai", "nashik"],
    parentContext: "Pune families often search for intellectually challenging maths coaching that matches the city's strong academic culture.",
  },
  nashik: {
    key: "nashik",
    slug: "nashik",
    name: "Nashik",
    state: "Maharashtra",
    regionLabel: "North Maharashtra",
    nearby: ["pune", "mumbai"],
    parentContext: "Parents in Nashik typically value access to premium online maths enrichment that may not be available locally at the right depth.",
  },
};

export const seoRegions: Record<RegionKey, SeoRegion> = {
  in: {
    key: "in",
    code: "in",
    name: "India",
    locale: "en-IN",
    spelling: "maths",
    programmeSpelling: "programme",
    timezone: "Asia/Kolkata",
    parentProfile: "Indian families often balance school achievement, olympiad preparation, and long-term competitive exam readiness.",
  },
  sg: {
    key: "sg",
    code: "sg",
    name: "Singapore",
    locale: "en-SG",
    spelling: "maths",
    programmeSpelling: "programme",
    timezone: "Asia/Singapore",
    parentProfile: "Singapore parents and Indian-origin families usually expect conceptual depth, precise reasoning, and strong word-problem performance.",
  },
  ae: {
    key: "ae",
    code: "ae",
    name: "UAE",
    locale: "en-AE",
    spelling: "maths",
    programmeSpelling: "programme",
    timezone: "Asia/Dubai",
    parentProfile: "Families in the UAE often need premium online maths batches aligned to local evening schedules and international school expectations.",
  },
  us: {
    key: "us",
    code: "us",
    name: "USA",
    locale: "en-US",
    spelling: "math",
    programmeSpelling: "program",
    timezone: "America/New_York",
    parentProfile: "US-based families typically search for online enrichment that feels more rigorous than standard classroom math and supports gifted learners.",
  },
  uk: {
    key: "uk",
    code: "uk",
    name: "UK",
    locale: "en-GB",
    spelling: "maths",
    programmeSpelling: "programme",
    timezone: "Europe/London",
    parentProfile: "UK families often value a reasoning-first approach that helps children discuss method, not just produce an answer.",
  },
  ca: {
    key: "ca",
    code: "ca",
    name: "Canada",
    locale: "en-CA",
    spelling: "math",
    programmeSpelling: "program",
    timezone: "America/Toronto",
    parentProfile: "Canadian families commonly look for online math enrichment that remains structured, calm, and appropriately challenging.",
  },
  au: {
    key: "au",
    code: "au",
    name: "Australia",
    locale: "en-AU",
    spelling: "maths",
    programmeSpelling: "programme",
    timezone: "Australia/Sydney",
    parentProfile: "Australian families often want live online maths teaching that strengthens confidence while stretching able students meaningfully.",
  },
};

export const comparisonPages: ComparisonPage[] = [
  {
    slug: "sasmo-vs-sof-imo",
    title: "SASMO vs SOF IMO",
    leftExam: "sasmo",
    rightExam: "sof-imo",
    parentIntent: "which olympiad better fits a child who is ready for structured challenge but may not need the same level of non-routine depth yet",
  },
  {
    slug: "abacus-vs-mental-maths",
    title: "Abacus vs Mental Maths",
    leftExam: "mental-maths",
    rightExam: "ipm",
    parentIntent: "which approach builds durable number sense instead of isolated drill habits",
  },
  {
    slug: "vedic-maths-vs-abacus",
    title: "Vedic Maths vs Abacus",
    leftExam: "mental-maths",
    rightExam: "ipm",
    parentIntent: "which route fits a child who needs speed with understanding rather than mechanical repetition alone",
  },
];

export const parentIntentPages: ParentIntentPage[] = [
  {
    slug: "best-maths-olympiad-for-class-3",
    title: "Best Maths Olympiad for Class 3",
    focus: "sof-imo",
    audience: "parents of students entering structured olympiad maths for the first time",
  },
  {
    slug: "how-to-prepare-for-sof-imo",
    title: "How to Prepare for SOF IMO",
    focus: "sof-imo",
    audience: "parents planning an organised olympiad routine at home",
  },
  {
    slug: "mental-maths-benefits-for-kids",
    title: "Mental Maths Benefits for Kids",
    focus: "mental-maths-benefits",
    audience: "parents trying to decide whether mental maths is a worthwhile long-term skill",
  },
  {
    slug: "how-to-improve-calculation-speed-for-kids",
    title: "How to Improve Calculation Speed for Kids",
    focus: "calculation-speed",
    audience: "parents whose children understand maths but solve too slowly",
  },
  {
    slug: "how-to-prepare-for-sasmo",
    title: "How to Prepare for SASMO",
    focus: "sasmo",
    audience: "families considering international olympiad maths seriously",
  },
  {
    slug: "best-online-maths-enrichment-program-for-kids",
    title: "Best Online Maths Enrichment Program for Kids",
    focus: "online-maths-enrichment",
    audience: "parents looking for premium, discussion-led online maths learning",
  },
];
