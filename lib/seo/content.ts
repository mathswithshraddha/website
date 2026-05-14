import { resourceArticles } from "@/data/resources";
import {
  comparisonPages,
  grades,
  parentIntentPages,
  seoExams,
  seoLocations,
} from "@/data/seo/programmatic";
import { getInternalLinkSections, type InternalLinkSection } from "@/lib/seo/internal-links";
import { getRegionForRecord, type SeoPageRecord } from "@/lib/seo/routes";
import { credibilitySignals, instructorProfile, testimonialThemes } from "@/lib/seo/site";

export interface ContentSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface PageFaq {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export interface SeoLandingContent {
  eyebrow: string;
  title: string;
  summary: string[];
  keyPoints: string[];
  sections: ContentSection[];
  faqs: PageFaq[];
  linkSections: InternalLinkSection[];
  trustPoints: string[];
  instructorPoints: string[];
  testimonialHighlights: string[];
  breadcrumbs: BreadcrumbItem[];
}

function gradeData(grade?: number) {
  return grade ? grades.find((item) => item.grade === grade) : undefined;
}

function getTitle(record: SeoPageRecord) {
  const exam = record.examKey ? seoExams[record.examKey] : undefined;
  const location = record.locationKey ? seoLocations[record.locationKey] : undefined;
  const region = getRegionForRecord(record);

  if (record.kind === "exam-city-grade" && exam && location && record.grade) {
    return `${exam.name} for Class ${record.grade} Students in ${location.name}`;
  }

  if (record.kind === "exam-grade" && exam && record.grade) {
    return `${exam.name} for Class ${record.grade}`;
  }

  if (record.kind === "exam-city" && exam && location) {
    return `${exam.name} in ${location.name}`;
  }

  if (record.kind === "local" && location) {
    if (record.localTopic === "olympiad-coaching") return `Olympiad Coaching in ${location.name}`;
    if (record.localTopic === "mental-maths-classes") return `Mental Maths Classes in ${location.name}`;
    return `Maths Classes in ${location.name}`;
  }

  if (record.kind === "comparison") {
    return comparisonPages.find((page) => page.slug === record.comparisonSlug)?.title ?? "Maths Comparison Guide";
  }

  if (record.kind === "parent-intent") {
    return parentIntentPages.find((page) => page.slug === record.parentIntentSlug)?.title ?? "Maths Parent Guide";
  }

  if (record.kind === "international" && exam) {
    return `${exam.name} for Families in ${region.name}`;
  }

  return exam?.name ?? "Maths with Shraddha";
}

function buildExamFaqs(record: SeoPageRecord): PageFaq[] {
  const exam = record.examKey ? seoExams[record.examKey] : undefined;
  const location = record.locationKey ? seoLocations[record.locationKey] : undefined;

  if (!exam) return [];

  const locationLabel = location ? ` in ${location.name}` : "";
  const gradeLabel = record.grade ? `Class ${record.grade}` : "the right grade";

  return [
    {
      question: `Is ${exam.name} suitable for ${gradeLabel} students${locationLabel}?`,
      answer: `Yes, if the child is comfortable with regular school maths and ready for structured stretch. We treat entry level, pacing, and confidence differently for each grade instead of teaching every student as if they are already olympiad-ready.`,
    },
    {
      question: `How is Maths with Shraddha different for ${exam.name} preparation?`,
      answer: exam.curriculumDifferentiator,
    },
    {
      question: `Can students outside ${location?.name ?? "Mumbai"} join live?`,
      answer: `Yes. The programme is designed as a live, online-first model, so families in India and international locations can join without losing teacher interaction or parent visibility.`,
    },
    {
      question: `What do parents usually worry about before enrolling in ${exam.name}?`,
      answer: exam.parentTrustCopy,
    },
  ];
}

function buildLocalFaqs(record: SeoPageRecord): PageFaq[] {
  const location = record.locationKey ? seoLocations[record.locationKey] : undefined;
  if (!location) return [];

  return [
    {
      question: `Why do families in ${location.name} choose online maths coaching instead of only local tuition?`,
      answer: `${location.commuteReality} Families usually stay when the teaching quality, structure, and teacher feedback feel materially better than nearby generic tuition.`,
    },
    {
      question: `What kind of maths support do parents in ${location.name} usually ask for?`,
      answer: location.parentContext,
    },
    {
      question: `How do I know if my child needs olympiad coaching or foundational maths support?`,
      answer: `The right answer depends on whether the bottleneck is calculation fluency, conceptual understanding, or challenge readiness. We position the child before deciding whether the next step should be mental maths, school support, or olympiad training.`,
    },
  ];
}

function buildComparisonFaqs(record: SeoPageRecord): PageFaq[] {
  const comparison = comparisonPages.find((page) => page.slug === record.comparisonSlug);
  if (!comparison) return [];

  const left = seoExams[comparison.leftExam];
  const right = seoExams[comparison.rightExam];

  return [
    {
      question: `Which builds stronger long-term mathematical development: ${left.name} or ${right.name}?`,
      answer: `That depends on the child's current bottleneck. ${left.name} is stronger when the child is ready for ${left.learningOutcome.toLowerCase()}, while ${right.name} is stronger when the child first needs ${right.learningOutcome.toLowerCase()}.`,
    },
    {
      question: `Should parents choose based on familiarity or medals alone?`,
      answer: `No. The better decision comes from fit, challenge readiness, and whether the child currently needs fluency, application, or more non-routine reasoning.`,
    },
  ];
}

function buildParentIntentFaqs(record: SeoPageRecord): PageFaq[] {
  const page = parentIntentPages.find((item) => item.slug === record.parentIntentSlug);
  if (!page) return [];

  return [
    {
      question: `Who is this guidance most useful for?`,
      answer: `This page is written for ${page.audience}. It aims to reduce noise and help parents make a better academic decision, not just compare marketing claims.`,
    },
    {
      question: `Can one maths programme solve every goal at once?`,
      answer: `Usually no. A strong maths pathway works because the child is matched to the right next need: fluency, confidence, conceptual depth, or olympiad challenge.`,
    },
  ];
}

function buildSummary(record: SeoPageRecord) {
  const exam = record.examKey ? seoExams[record.examKey] : undefined;
  const location = record.locationKey ? seoLocations[record.locationKey] : undefined;
  const region = getRegionForRecord(record);
  const grade = gradeData(record.grade);

  if (record.kind === "comparison") {
    const comparison = comparisonPages.find((page) => page.slug === record.comparisonSlug);
    if (!comparison) return [];
    const left = seoExams[comparison.leftExam];
    const right = seoExams[comparison.rightExam];

    return [
      `Parents comparing ${left.name} and ${right.name} are usually trying to avoid choosing the wrong kind of challenge at the wrong stage.`,
      `This guide focuses on fit, long-term learning outcomes, and how each route changes the child's mathematical habits over time.`,
    ];
  }

  if (record.kind === "parent-intent") {
    const page = parentIntentPages.find((item) => item.slug === record.parentIntentSlug);
    return page
      ? [
          `${page.title} is a high-intent search because the parent is already looking for a serious next step, not generic tuition.`,
          `This page answers that intent with guidance on readiness, programme fit, and how to build stronger mathematical thinking without overscheduling the child.`,
        ]
      : [];
  }

  if (record.kind === "international" && exam) {
    return [
      `${region.parentProfile} ${region.localHook}`,
      `${exam.overview} For families in ${region.name}, the real value is access to a consistent, premium ${region.spelling} learning environment that can travel across school systems and time zones.`,
    ];
  }

  if (location && exam) {
    return [
      `${exam.overview} Families in ${location.name} usually want more than city-swapped tuition copy; they want to know whether the programme genuinely fits their child's current stage and schedule.`,
      `${location.parentContext} ${grade ? `${grade.label} learners are typically in the ${grade.learningStage} stage, so the work has to be pitched with that maturity in mind.` : exam.parentConcern}`,
    ];
  }

  if (location) {
    return [
      `${location.parentContext}`,
      `${location.differentiation} The strongest pages for ${location.name} should help parents decide between school support, mental maths, and olympiad coaching rather than collapsing those goals into one generic promise.`,
    ];
  }

  if (exam) {
    return [
      `${exam.overview} This page is designed for parents who want a more educational view of ${exam.name}, not just a brochure-style description.`,
      `${exam.parentConcern} At Maths with Shraddha, ${exam.name} is positioned as part of a broader enrichment journey instead of a one-off exam sprint.`,
    ];
  }

  return [];
}

function getCitySpecificAngle(record: SeoPageRecord) {
  if (!record.locationKey) return null;

  if (record.locationKey === "mumbai") {
    return {
      title: "Why Mumbai pages need a different message",
      paragraphs: [
        "Mumbai families are rarely just searching for a nearby tutor. They are usually weighing teaching quality against commute fatigue, school pressure, and whether the class can genuinely justify a premium commitment.",
        "That is why the Mumbai pages lean into academic credibility, parent visibility, and a realistic online-first model that protects consistency across South Mumbai, Powai, and the western suburbs.",
      ],
      bullets: [
        "Strong fit for high-expectation school families",
        "Better alternative to travel-heavy weekday tuition",
        "Useful when parents want olympiad depth without schedule chaos",
      ],
    };
  }

  if (record.locationKey === "ahmedabad") {
    return {
      title: "What Ahmedabad parents usually optimise for",
      paragraphs: [
        "Ahmedabad families often prioritise disciplined structure, concept clarity, and visible academic return over brand noise. They want to know that the teacher is serious, the batch is purposeful, and the child will actually become more confident and more accurate.",
        "The Ahmedabad pages therefore position Maths with Shraddha as a premium but calm academic system, not as a flashy mass-market coaching product.",
      ],
      bullets: [
        "Concept-led work with disciplined weekly routines",
        "Good fit for parents comparing school excellence and olympiad stretch",
        "Stronger positioning than generic tuition or worksheet-heavy edtech",
      ],
    };
  }

  if (record.locationKey === "delhi") {
    return {
      title: "How Delhi positioning differs from other cities",
      paragraphs: [
        "Delhi and NCR parents are often evaluating the programme against a very crowded coaching market. The real decision is not whether another class exists, but whether this class offers smaller-batch rigour, stronger reasoning, and more thoughtful guidance than scale-heavy coaching systems.",
        "The Delhi pages therefore stress quality control, batch standards, and a discussion-led style that feels intentionally different from factory-style preparation.",
      ],
      bullets: [
        "Built for families comparing against large coaching brands",
        "Smaller-batch reasoning support instead of mass instruction",
        "Useful for children managing school pressure plus olympiad ambition",
      ],
    };
  }

  return null;
}

function buildSections(record: SeoPageRecord): ContentSection[] {
  const sections: ContentSection[] = [];
  const exam = record.examKey ? seoExams[record.examKey] : undefined;
  const location = record.locationKey ? seoLocations[record.locationKey] : undefined;
  const grade = gradeData(record.grade);
  const region = getRegionForRecord(record);

  if (exam) {
    sections.push({
      title: `What parents should understand about ${exam.name}`,
      paragraphs: [
        exam.parentConcern,
        exam.parentTrustCopy,
      ],
      bullets: exam.bestFor,
    });

    sections.push({
      title: `${exam.name} curriculum fit and learning design`,
      paragraphs: [
        exam.curriculumDifferentiator,
        `The strongest programmes do not only teach question types. They show students why a method works, how to choose between strategies, and how to recover when a problem looks unfamiliar.`,
      ],
      bullets: exam.syllabusThemes.map((theme) => `${theme} with explanation-led practice`),
    });

    sections.push({
      title: `Preparation roadmap${grade ? ` for ${grade.label}` : ""}`,
      paragraphs: [
        grade
          ? `${grade.label} students are usually in the ${grade.learningStage} stage, so the plan has to balance school load, confidence, and deliberate challenge.`
          : "A strong roadmap starts with diagnostic clarity, then moves into guided practice, review, and confidence-building application.",
        `For ${exam.name}, consistency matters more than rush. Weekly review, explanation, and error correction are usually what separate durable progress from short-lived score spikes.`,
      ],
      bullets: exam.preparationSteps,
    });
  }

  if (location) {
    sections.push({
      title: `Why this page is genuinely about ${location.name}`,
      paragraphs: [
        `${location.differentiation} Families searching around ${location.landmarks.slice(0, 2).join(" and ")} are often comparing convenience, batch quality, and whether the teaching will actually stretch the child.`,
        `${location.commuteReality}`,
      ],
      bullets: [
        `Common school ecosystem: ${location.schoolSignals.join(", ")}`,
        `Local landmarks and catchments: ${location.landmarks.join(", ")}`,
        `Regional context: ${location.regionLabel}`,
      ],
    });
  }

  const citySpecificAngle = getCitySpecificAngle(record);
  if (citySpecificAngle) {
    sections.push(citySpecificAngle);
  }

  if (record.kind === "international") {
    sections.push({
      title: `How the programme is adapted for ${region.name}`,
      paragraphs: [
        `${region.localHook}`,
        `This matters especially for globally mobile families who need a reliable ${region.programmeSpelling} that can continue across school systems and time zones.`,
      ],
      bullets: [
        `Timezone-aware live classes for ${region.name}`,
        `${region.spelling === "maths" ? "Maths" : "Math"} language adapted to local expectations`,
        "A premium enrichment pathway for ambitious and gifted learners",
      ],
    });
  }

  if (record.kind === "comparison") {
    const comparison = comparisonPages.find((item) => item.slug === record.comparisonSlug);
    if (comparison) {
      const left = seoExams[comparison.leftExam];
      const right = seoExams[comparison.rightExam];
      sections.push({
        title: `How to compare ${left.name} and ${right.name} properly`,
        paragraphs: [
          `This comparison should not collapse into easy versus hard. Parents need to ask what kind of mathematical development each route emphasises and what the child is ready to absorb well.`,
          `In this case, the real decision is about ${comparison.parentIntent}.`,
        ],
        bullets: [
          `${left.name}: ${left.learningOutcome}`,
          `${right.name}: ${right.learningOutcome}`,
          "Choose the route that solves the next real learning bottleneck.",
        ],
      });
    }
  }

  if (record.kind === "parent-intent") {
    sections.push({
      title: "How to make a good decision without following hype",
      paragraphs: [
        "Parents at this stage usually need clarity, not more lists. The best next step depends on whether the child needs confidence, fluency, broader challenge, or a long-term olympiad structure.",
        "A premium maths programme should make that diagnosis explicit instead of promising every benefit to every family.",
      ],
      bullets: [
        "Check whether the child needs foundation work or enrichment.",
        "Prefer structured weekly support to last-minute crash preparation.",
        "Use teacher feedback, not only marks, to judge progress.",
      ],
    });
  }

  const relatedArticle = resourceArticles.find((article) => article.relatedExams.includes(record.examKey ?? "sof-imo"));
  if (relatedArticle) {
    sections.push({
      title: "Useful next reading for parents",
      paragraphs: [
        `Families on this page often also read ${relatedArticle.title.toLowerCase()} because it answers the broader decision-making questions around programme fit, challenge level, and long-term maths growth.`,
      ],
      bullets: [`Read next: ${relatedArticle.title}`],
    });
  }

  return sections;
}

export function buildSeoLandingContent(record: SeoPageRecord): SeoLandingContent {
  const exam = record.examKey ? seoExams[record.examKey] : undefined;
  const location = record.locationKey ? seoLocations[record.locationKey] : undefined;
  const region = getRegionForRecord(record);

  const title = getTitle(record);
  const eyebrow =
    record.kind === "international"
      ? `Premium online ${region.spelling} enrichment for ${region.name}`
      : location
        ? `Premium ${location.name}, ${location.state} maths enrichment`
        : exam
          ? `Parent-focused ${exam.name} guidance`
          : "Maths with Shraddha";

  const keyPoints = exam
    ? [
        exam.learningOutcome,
        record.grade ? `Designed for Class ${record.grade} learners with stage-appropriate challenge.` : "Built around small-batch, teacher-led guidance.",
        location ? `Locally framed for families in ${location.name}, not a generic city-swap template.` : "Designed for high-intent parents comparing serious maths pathways.",
      ]
    : [
        "Small-batch live online teaching",
        "Olympiad, mental maths, and enrichment pathways",
        "India-first platform with international readiness",
      ];

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
    ...(record.locationKey ? [{ name: "Locations", href: "/locations" }] : []),
    ...(record.kind === "international" ? [{ name: "International", href: "/international" }] : []),
    ...(exam ? [{ name: exam.name, href: exam.primaryPage }] : []),
    { name: title, href: record.pathname },
  ];

  const faqs =
    record.kind === "comparison"
      ? buildComparisonFaqs(record)
      : record.kind === "parent-intent"
        ? buildParentIntentFaqs(record)
        : record.kind === "local"
          ? buildLocalFaqs(record)
          : buildExamFaqs(record);

  const instructorPoints = [
    instructorProfile.experience,
    "Direct teaching philosophy centered on conceptual clarity, fluency, and problem solving",
    "Strong fit for parents who want honest academic positioning before batch placement",
  ];

  return {
    eyebrow,
    title,
    summary: buildSummary(record),
    keyPoints,
    sections: buildSections(record),
    faqs,
    linkSections: getInternalLinkSections(record),
    trustPoints: credibilitySignals,
    instructorPoints,
    testimonialHighlights: testimonialThemes,
    breadcrumbs,
  };
}
