export type ExamKey =
  | "sof-imo"
  | "sasmo"
  | "ipm"
  | "mental-maths"
  | "olympiad-maths"
  | "singapore-maths"
  | "online-maths-enrichment";

export type RegionKey =
  | "in"
  | "sg"
  | "ae"
  | "qa"
  | "np"
  | "lk"
  | "be"
  | "us"
  | "uk";

export type LocationKey =
  | "mumbai"
  | "thane"
  | "borivali"
  | "powai"
  | "pune"
  | "ahmedabad"
  | "delhi"
  | "bengaluru"
  | "hyderabad"
  | "chennai"
  | "kolkata";

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
  curriculumDifferentiator: string;
  parentTrustCopy: string;
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
  landmarks: string[];
  schoolSignals: string[];
  commuteReality: string;
  differentiation: string;
  seoTier: "core" | "supporting";
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
  localHook: string;
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
    curriculumDifferentiator:
      "The programme works best when school concepts are converted into application-heavy reasoning instead of staying as chapter-wise repetition.",
    parentTrustCopy:
      "For first-time olympiad families, SOF IMO needs calm structure, diagnostic feedback, and a teacher who can translate school maths into olympiad language without causing overload.",
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
    curriculumDifferentiator:
      "SASMO preparation must spend more time on non-routine reasoning, explanation, and error analysis than on chapter completion alone.",
    parentTrustCopy:
      "Families comparing SASMO options usually want serious olympiad depth, but still need a teacher who can stage difficulty carefully instead of jumping straight to impossible papers.",
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
    curriculumDifferentiator:
      "IPM preparation has to prioritise fluent number processing, clean working habits, and accuracy under speed, not only harder theory.",
    parentTrustCopy:
      "Parents choose IPM support when they want speed to improve without replacing understanding with mechanical drill.",
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
    curriculumDifferentiator:
      "Strong mental maths teaching should improve number sense, flexibility, and confidence, not just train shortcut recall.",
    parentTrustCopy:
      "Parents comparing abacus, vedic maths, and mental maths often want proof that the programme will help school work and olympiad readiness rather than staying isolated from real maths.",
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
    curriculumDifferentiator:
      "Olympiad maths should be mapped as a progression path, with clear transitions from school fluency to higher-order reasoning and cross-exam transfer.",
    parentTrustCopy:
      "Parents looking for olympiad coaching usually need someone to decide whether the child needs foundation support, exam-specific preparation, or a deeper reasoning pathway first.",
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
    curriculumDifferentiator:
      "The teaching difference is not only harder worksheets; it is a more visual, structured approach to how children think through multi-step problems.",
    parentTrustCopy:
      "Singapore maths parents usually want disciplined reasoning and better word-problem structure, especially when school maths feels too procedural.",
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
    curriculumDifferentiator:
      "The real quality signal is live teaching depth, batch fit, and feedback quality, not the number of worksheets or recorded lessons.",
    parentTrustCopy:
      "Parents looking globally need a programme that can adapt to school systems, time zones, and different learner profiles without diluting rigour.",
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
    nearby: ["thane", "powai", "borivali", "pune"],
    parentContext:
      "Parents in Mumbai usually compare premium coaching quality, commute load, and whether the programme can support both school maths and olympiad ambition without burning out the child. Many are balancing ambitious school expectations, multiple activities, and the reality that weekday travel can quietly destroy consistency.",
    landmarks: ["BKC", "South Mumbai schools", "Western Line suburbs", "Powai-Hiranandani catchment"],
    schoolSignals: ["Bombay Scottish", "Campion", "JBCN", "DAIS", "Oberoi International"],
    commuteReality:
      "In Mumbai, commute time itself shapes retention and consistency, so many families actively prefer a live online batch that feels premium enough to replace travel-heavy tuition. The page should clearly acknowledge that South Mumbai, Powai, and Western suburb families are often solving for quality plus time, not quality alone.",
    differentiation:
      "Mumbai pages need to speak to ambitious families who want strong teaching, clear parent visibility, and a route from school maths into olympiads. The tone should feel premium, time-aware, and credible for parents used to comparing high-standard options.",
    seoTier: "core",
  },
  thane: {
    key: "thane",
    slug: "thane",
    name: "Thane",
    state: "Maharashtra",
    regionLabel: "Mumbai Metropolitan Region",
    nearby: ["mumbai", "powai", "pune"],
    parentContext:
      "Families in Thane often want stronger olympiad support without committing to long weekday travel toward South or Western Mumbai.",
    landmarks: ["Ghodbunder Road", "Hiranandani Estate", "Viviana Mall"],
    schoolSignals: ["local CBSE and ICSE schools", "Olympiad-ready school families"],
    commuteReality:
      "Thane families are highly schedule-sensitive, so premium online teaching with predictable weekly cadence is usually a stronger value proposition than city-centre travel.",
    differentiation:
      "Thane pages should emphasise disciplined enrichment, predictable routines, and reduced commute friction.",
    seoTier: "supporting",
  },
  borivali: {
    key: "borivali",
    slug: "borivali",
    name: "Borivali",
    state: "Maharashtra",
    regionLabel: "Western Suburbs",
    nearby: ["mumbai", "thane", "powai"],
    parentContext:
      "Borivali parents often search for premium maths coaching that goes beyond chapter-completion tuition and actually builds reasoning confidence.",
    landmarks: ["EsselWorld corridor", "Western suburbs school belt", "Link Road catchment"],
    schoolSignals: ["ICSE-heavy families", "students balancing school and olympiads"],
    commuteReality:
      "Borivali families often compare local convenience against access to better teaching quality elsewhere, making online-first delivery an easy decision when the teaching standard is clear.",
    differentiation:
      "Borivali pages need to sound like a premium alternative to routine neighbourhood tuition.",
    seoTier: "supporting",
  },
  powai: {
    key: "powai",
    slug: "powai",
    name: "Powai",
    state: "Maharashtra",
    regionLabel: "Central Suburbs",
    nearby: ["mumbai", "thane", "pune"],
    parentContext:
      "Powai searches often come from academically ambitious families looking for serious enrichment, olympiad pathways, and small-batch teaching.",
    landmarks: ["Hiranandani Gardens", "IIT Bombay corridor", "Powai Lake"],
    schoolSignals: ["international school families", "gifted learners needing stretch"],
    commuteReality:
      "Powai parents usually optimise for quality of teacher interaction rather than physical proximity alone.",
    differentiation:
      "Powai pages should lean into academic ambition, discussion-heavy learning, and premium batch placement.",
    seoTier: "supporting",
  },
  pune: {
    key: "pune",
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    regionLabel: "Western Maharashtra",
    nearby: ["mumbai", "ahmedabad", "hyderabad"],
    parentContext:
      "Pune families often search for intellectually challenging maths coaching that matches the city's academic culture and strong exam orientation.",
    landmarks: ["Aundh", "Baner", "Kothrud"],
    schoolSignals: ["CBSE and ICSE achievers", "parents comparing olympiad and JEE-foundation tracks"],
    commuteReality:
      "Pune pages should reflect that families want serious academics, but also expect flexible online access because students often juggle multiple enrichment activities.",
    differentiation:
      "Pune performs best with copy that balances depth, structure, and long-term competition readiness.",
    seoTier: "core",
  },
  ahmedabad: {
    key: "ahmedabad",
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    regionLabel: "Western India",
    nearby: ["pune", "mumbai", "delhi"],
    parentContext:
      "Ahmedabad parents often search for maths coaching that is concept-led, disciplined, and strong enough to support both school excellence and olympiad preparation. They are often less interested in flashy edtech branding and more interested in whether the teaching actually produces measurable academic growth.",
    landmarks: ["Satellite", "Bodakdev", "SG Highway", "Prahlad Nagar"],
    schoolSignals: ["strong CBSE/ICSE demand", "families considering olympiad plus scholarship prep", "parents seeking structured after-school discipline"],
    commuteReality:
      "Ahmedabad pages should speak to parents who are ready to choose online delivery if the academic standard is clearly above local generic tuition. What matters most here is disciplined structure, teacher seriousness, and visible academic return.",
    differentiation:
      "Ahmedabad is a priority city and should be treated as a core commercial market, not a filler location page. The message should emphasise structured routines, concept clarity, and premium teaching without unnecessary noise.",
    seoTier: "core",
  },
  delhi: {
    key: "delhi",
    slug: "delhi",
    name: "Delhi",
    state: "Delhi",
    regionLabel: "National Capital Region",
    nearby: ["ahmedabad", "kolkata", "chennai"],
    parentContext:
      "Delhi parents usually want credible academic rigour, clear differentiation from mass-market coaching, and a pathway that still respects school pressure. Many are comparing serious enrichment against the city's heavy coaching culture and want evidence that the programme is selective, thoughtful, and not just another volume-driven batch.",
    landmarks: ["South Delhi", "Dwarka", "Noida-Gurugram school corridor", "East Delhi school clusters"],
    schoolSignals: ["high-performing CBSE families", "students balancing olympiads with school intensity", "parents comparing against large coaching brands"],
    commuteReality:
      "NCR families often want premium teaching without citywide commute costs, making live online batches highly attractive when outcomes and mentoring are clear. The page should acknowledge that families are often choosing between scale-heavy coaching and smaller, discussion-led rigour.",
    differentiation:
      "Delhi pages should stress quality control, parent communication, structured challenge, and clear distance from factory-style coaching models.",
    seoTier: "core",
  },
  bengaluru: {
    key: "bengaluru",
    slug: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    regionLabel: "South India",
    nearby: ["hyderabad", "chennai", "pune"],
    parentContext:
      "Bengaluru families often search for enrichment that is more rigorous than school maths and more thoughtful than worksheet-heavy edtech.",
    landmarks: ["Whitefield", "Koramangala", "Indiranagar"],
    schoolSignals: ["international school parents", "STEM-oriented families"],
    commuteReality:
      "Traffic and overscheduled academic calendars make consistent live online coaching a strong fit for Bengaluru households.",
    differentiation:
      "Bengaluru pages should position Maths with Shraddha as a premium, teacher-led alternative to impersonal tech-led programmes.",
    seoTier: "core",
  },
  hyderabad: {
    key: "hyderabad",
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    regionLabel: "South India",
    nearby: ["bengaluru", "chennai", "pune"],
    parentContext:
      "Hyderabad parents commonly look for maths support that is academically serious, olympiad-aware, and still calm enough for younger learners.",
    landmarks: ["Gachibowli", "Jubilee Hills", "Kondapur"],
    schoolSignals: ["competitive families", "children needing challenge beyond school pace"],
    commuteReality:
      "Hyderabad pages should make it clear that premium online coaching can deliver structure and challenge without adding another physical commute.",
    differentiation:
      "Hyderabad responds well to copy focused on discipline, problem solving, and parent-visible progress.",
    seoTier: "core",
  },
  chennai: {
    key: "chennai",
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    regionLabel: "South India",
    nearby: ["bengaluru", "hyderabad", "delhi"],
    parentContext:
      "Chennai parents often prefer programmes with clear conceptual depth, steady weekly routines, and stronger mathematical communication.",
    landmarks: ["Adyar", "Anna Nagar", "OMR"],
    schoolSignals: ["strong school-maths families", "parents comparing olympiad depth and school alignment"],
    commuteReality:
      "Chennai pages should emphasise high teaching standards and reliable weekly structure over hype or noisy claims.",
    differentiation:
      "Chennai content should feel academically grounded, not sales-heavy.",
    seoTier: "core",
  },
  kolkata: {
    key: "kolkata",
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    regionLabel: "Eastern India",
    nearby: ["delhi", "chennai", "mumbai"],
    parentContext:
      "Kolkata families often value strong teachers, explanation-led maths, and a pathway that builds confidence before chasing higher-level olympiad depth.",
    landmarks: ["Salt Lake", "Ballygunge", "New Town"],
    schoolSignals: ["ICSE and CBSE families", "students seeking stronger reasoning habits"],
    commuteReality:
      "Kolkata pages should frame online coaching as a way to access premium olympiad teaching without relying on a narrow local tuition market.",
    differentiation:
      "Kolkata content should stress explanation quality, mathematical maturity, and trust.",
    seoTier: "core",
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
    parentProfile:
      "Indian families often balance school achievement, olympiad preparation, and long-term competitive exam readiness.",
    localHook:
      "India-focused pages should feel relevant to school pressure, olympiad timing, and the need for a premium teacher-led alternative to generic tuition.",
  },
  sg: {
    key: "sg",
    code: "sg",
    name: "Singapore",
    locale: "en-SG",
    spelling: "maths",
    programmeSpelling: "programme",
    timezone: "Asia/Singapore",
    parentProfile:
      "Singapore parents and Indian-origin families usually expect conceptual depth, precise reasoning, and strong word-problem performance.",
    localHook: "Singapore pages should highlight reasoning quality, precision, and fit for internationally benchmarked learners.",
  },
  ae: {
    key: "ae",
    code: "ae",
    name: "UAE",
    locale: "en-AE",
    spelling: "maths",
    programmeSpelling: "programme",
    timezone: "Asia/Dubai",
    parentProfile:
      "Families in the UAE often need premium online maths batches aligned to local evening schedules and international school expectations.",
    localHook: "UAE pages should emphasise timezone fit, live teaching, and continuity for expat and Indian families.",
  },
  qa: {
    key: "qa",
    code: "qa",
    name: "Qatar",
    locale: "en-QA",
    spelling: "maths",
    programmeSpelling: "programme",
    timezone: "Asia/Qatar",
    parentProfile:
      "Qatar-based families often want a serious online maths programme that stays stable around international school calendars and after-school schedules.",
    localHook: "Qatar pages should focus on premium online access, batch quality, and curriculum flexibility.",
  },
  np: {
    key: "np",
    code: "np",
    name: "Nepal",
    locale: "en-NP",
    spelling: "maths",
    programmeSpelling: "programme",
    timezone: "Asia/Kathmandu",
    parentProfile:
      "Nepal families typically value concept clarity, strong teaching relationships, and a visible academic return from enrichment.",
    localHook: "Nepal pages should speak to concept-led teaching, olympiad readiness, and premium online access beyond local tuition limits.",
  },
  lk: {
    key: "lk",
    code: "lk",
    name: "Sri Lanka",
    locale: "en-LK",
    spelling: "maths",
    programmeSpelling: "programme",
    timezone: "Asia/Colombo",
    parentProfile:
      "Sri Lankan families often look for academically disciplined maths support that improves reasoning and confidence without becoming overly mechanical.",
    localHook: "Sri Lanka pages should highlight calm rigour, live interaction, and school-plus-olympiad balance.",
  },
  be: {
    key: "be",
    code: "be",
    name: "Brussels",
    locale: "en-BE",
    spelling: "math",
    programmeSpelling: "program",
    timezone: "Europe/Brussels",
    parentProfile:
      "Brussels-based international families usually need portable online math enrichment that works across international schools and multilingual environments.",
    localHook: "Brussels pages should frame the offer as premium portable enrichment for international families.",
  },
  us: {
    key: "us",
    code: "us",
    name: "USA",
    locale: "en-US",
    spelling: "math",
    programmeSpelling: "program",
    timezone: "America/New_York",
    parentProfile:
      "US-based families typically search for online enrichment that feels more rigorous than standard classroom math and supports gifted learners.",
    localHook: "US pages should emphasise gifted enrichment, discussion quality, and challenge beyond classroom pace.",
  },
  uk: {
    key: "uk",
    code: "uk",
    name: "UK",
    locale: "en-GB",
    spelling: "maths",
    programmeSpelling: "programme",
    timezone: "Europe/London",
    parentProfile:
      "UK families often value a reasoning-first approach that helps children discuss method, not just produce an answer.",
    localHook: "UK pages should sound reasoning-led, structured, and academically calm.",
  },
};

export const comparisonPages: ComparisonPage[] = [
  {
    slug: "sasmo-vs-sof-imo",
    title: "SASMO vs SOF IMO",
    leftExam: "sasmo",
    rightExam: "sof-imo",
    parentIntent:
      "which olympiad better fits a child who is ready for structured challenge but may not need the same level of non-routine depth yet",
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
