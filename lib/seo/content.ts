import {
  comparisonPages,
  grades,
  parentIntentPages,
  seoExams,
  seoLocations,
} from "@/data/seo/programmatic";
import { getLocationRoutes, getRelatedRoutes, getRegionForRecord, type SeoPageRecord } from "@/lib/seo/routes";

export interface ContentSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface PageLink {
  href: string;
  label: string;
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
  relatedLinks: PageLink[];
  trustPoints: string[];
  breadcrumbs: BreadcrumbItem[];
}

function gradeData(grade?: number) {
  return grade ? grades.find((item) => item.grade === grade) : undefined;
}

function buildExamFaqs(record: SeoPageRecord): PageFaq[] {
  const exam = record.examKey ? seoExams[record.examKey] : undefined;
  const location = record.locationKey ? seoLocations[record.locationKey] : undefined;

  if (!exam) return [];

  const gradeLabel = record.grade ? `Class ${record.grade}` : "your child's grade";
  const locationLabel = location ? ` in ${location.name}` : "";

  return [
    {
      question: `Is ${exam.name} suitable for ${gradeLabel} students${locationLabel}?`,
      answer: `Yes, if the child is comfortable with regular school maths and ready for more structured reasoning. We use grade-appropriate entry points so challenge feels productive rather than discouraging.`,
    },
    {
      question: `How is Maths with Shraddha different for ${exam.name} preparation?`,
      answer: `Our approach is concept-first, parent-aware, and small-batch. Instead of drilling only expected paper patterns, we build the mathematical habits that actually support long-term olympiad performance.`,
    },
    {
      question: `Can this programme be taken online${locationLabel}?`,
      answer: `Yes. The platform is designed for live online learning, which makes it suitable for families across Mumbai, India, and international locations without losing teacher interaction.`,
    },
    {
      question: `What should parents look for before enrolling in ${exam.name}?`,
      answer: exam.parentConcern,
    },
  ];
}

function buildLocalFaqs(record: SeoPageRecord): PageFaq[] {
  const location = record.locationKey ? seoLocations[record.locationKey] : undefined;
  if (!location) return [];

  return [
    {
      question: `Do students from ${location.name} attend online or offline classes?`,
      answer: `Both models can work well. Families around Mumbai often prefer live online batches for consistency and commute savings, while still wanting the accountability and feedback of a premium teaching relationship.`,
    },
    {
      question: `What kind of maths support do parents in ${location.name} usually ask for?`,
      answer: location.parentContext,
    },
    {
      question: `How do I know whether my child needs tuition or enrichment?`,
      answer: `If the issue is weak school understanding, foundation support comes first. If the child is already keeping up but needs depth, confidence, or olympiad readiness, enrichment is usually the better fit.`,
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
      question: `Which is better for long-term mathematical development: ${left.name} or ${right.name}?`,
      answer: `That depends on the child's current fluency and temperament. ${left.name} may fit children ready for ${left.learningOutcome.toLowerCase()}, while ${right.name} may fit children who first need ${right.learningOutcome.toLowerCase()}.`,
    },
    {
      question: `Should parents choose based on brand familiarity alone?`,
      answer: `No. The right choice should depend on learning goals, challenge readiness, and whether the child needs fluency, structured school alignment, or deeper non-routine problem solving.`,
    },
  ];
}

function buildParentIntentFaqs(record: SeoPageRecord): PageFaq[] {
  const page = parentIntentPages.find((item) => item.slug === record.parentIntentSlug);
  if (!page) return [];

  return [
    {
      question: `Who is this guidance most useful for?`,
      answer: `This page is designed for ${page.audience}. It is meant to help parents make a clearer, lower-noise decision rather than chase generic rankings or marketing claims.`,
    },
    {
      question: `Can one programme solve every maths goal at once?`,
      answer: `Usually no. Strong maths development depends on matching the child to the right balance of fluency, conceptual depth, and challenge level.`,
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
      `Parents comparing ${left.name} and ${right.name} are usually trying to avoid the wrong type of challenge at the wrong stage.`,
      `This guide focuses on fit, learning outcomes, and what each route develops over time so the decision becomes more educational than promotional.`,
    ];
  }

  if (record.kind === "parent-intent") {
    const parentIntent = parentIntentPages.find((item) => item.slug === record.parentIntentSlug);
    return parentIntent
      ? [
          `${parentIntent.title} is a high-intent search because parents are already looking for a serious next step, not just general tuition.`,
          `This page answers that intent with practical guidance on readiness, programme fit, and how to develop stronger mathematical thinking without overscheduling the child.`,
        ]
      : [];
  }

  if (record.kind === "international" && exam) {
    return [
      `${region.parentProfile} ${exam.overview}`,
      `For families in ${region.name}, the goal is not just access to an online class but access to a consistent, premium ${region.spelling} learning environment that respects timezone, pace, and long-term growth.`,
    ];
  }

  if (record.kind === "local" && location) {
    return [
      `${location.parentContext}`,
      `Maths with Shraddha combines olympiad-style thinking, arithmetic fluency, and live online teaching for families in ${location.name} who want more than generic tuition.`,
    ];
  }

  if (exam) {
    const locationLine = location ? ` for families in ${location.name}` : "";
    const gradeLine = grade ? ` around the ${grade.learningStage} stage` : "";
    return [
      `${exam.overview} This page is designed${locationLine} to help parents understand what serious preparation should actually look like${gradeLine}.`,
      `${exam.parentConcern} At Maths with Shraddha, we position ${exam.name} as part of a broader enrichment journey, not a one-off exam sprint.`,
    ];
  }

  return [];
}

export function buildSeoLandingContent(record: SeoPageRecord): SeoLandingContent {
  const exam = record.examKey ? seoExams[record.examKey] : undefined;
  const location = record.locationKey ? seoLocations[record.locationKey] : undefined;
  const region = getRegionForRecord(record);
  const grade = gradeData(record.grade);

  const title =
    record.kind === "exam-city-grade" && exam && location && record.grade
      ? `${exam.name} for Class ${record.grade} Students in ${location.name}`
      : record.kind === "exam-grade" && exam && record.grade
        ? `${exam.name} for Class ${record.grade}`
        : record.kind === "exam-city" && exam && location
          ? `${exam.name} in ${location.name}`
          : record.kind === "local" && location
            ? record.localTopic === "olympiad-coaching"
              ? `Olympiad Coaching in ${location.name}`
              : record.localTopic === "mental-maths-classes"
                ? `Mental Maths Classes in ${location.name}`
                : `Maths Classes in ${location.name}`
            : record.kind === "comparison"
              ? comparisonPages.find((item) => item.slug === record.comparisonSlug)?.title ?? "Maths Comparison Guide"
              : record.kind === "parent-intent"
                ? parentIntentPages.find((item) => item.slug === record.parentIntentSlug)?.title ?? "Maths Parent Guide"
                : record.kind === "international" && exam
                  ? `${exam.name} for Families in ${region.name}`
                  : exam?.name ?? "Maths with Shraddha";

  const eyebrow =
    record.kind === "international"
      ? `Premium online ${region.spelling} enrichment for ${region.name}`
      : location
        ? `Premium ${location.name}, ${location.state} maths enrichment`
        : exam
          ? `Parent-focused ${exam.name} guidance`
          : `Maths with Shraddha SEO landing page`;

  const keyPoints = exam
    ? [
        `Best suited to ${exam.bestFor[0]}.`,
        exam.learningOutcome,
        record.grade && grade ? `For ${grade.label} learners in the ${grade.learningStage} stage.` : "Built around small-batch, teacher-led guidance.",
      ]
    : [
        "Small-batch live online teaching",
        "Olympiad, mental maths, and enrichment pathways",
        "India-first platform with international readiness",
      ];

  const sections: ContentSection[] = [];

  if (exam) {
    sections.push({
      title: `What parents should understand about ${exam.name}`,
      paragraphs: [
        exam.parentConcern,
        `The strongest programmes do not only teach question types. They help students understand why a method works, how to choose between strategies, and how to recover when a problem looks unfamiliar.`,
      ],
      bullets: exam.bestFor,
    });

    sections.push({
      title: `${exam.name} syllabus and thinking skills`,
      paragraphs: [
        `${exam.name} preparation should cover both content and thinking habits. Content gives the child the raw tools. Thinking habits determine whether those tools can be applied under exam or enrichment conditions.`,
      ],
      bullets: exam.syllabusThemes.map((theme) => `${theme} with explanation-led practice`),
    });

    sections.push({
      title: `Preparation roadmap${record.grade ? ` for Class ${record.grade}` : ""}`,
      paragraphs: [
        grade
          ? `${grade.label} students typically need a balanced plan that respects their school load while still creating room for deliberate challenge.`
          : "A strong roadmap starts with diagnostic clarity, then moves into guided practice, review, and confidence-building application.",
      ],
      bullets: exam.preparationSteps,
    });
  }

  if (location) {
    sections.push({
      title: `Why families in ${location.name} choose premium ${region.spelling} support`,
      paragraphs: [
        location.parentContext,
        `For many families in ${location.name}, live online delivery is not a compromise. It is often the cleanest way to access strong teaching, consistent routines, and meaningful parent visibility without the friction of travel-heavy schedules.`,
      ],
      bullets: [
        "Smaller batch learning than typical mass-market tuition",
        "Clear communication with parents about readiness and next steps",
        "Useful for school support, olympiad ambition, and advanced enrichment",
      ],
    });
  }

  if (record.kind === "international") {
    sections.push({
      title: `How the programme is adapted for ${region.name}`,
      paragraphs: [
        `${region.parentProfile} Our international structure keeps the programme online-first, live, and discussion-heavy rather than worksheet-heavy.`,
        `This matters especially for globally mobile families who need a reliable ${region.programmeSpelling} that can continue across school systems and time zones.`,
      ],
      bullets: [
        `Timezone-aware live classes for ${region.name}`,
        `${region.spelling === "maths" ? "Maths" : "Math"} language and spelling adapted for local expectations`,
        "A premium enrichment pathway for ambitious or gifted learners",
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
          `This comparison should not be reduced to easy versus hard. Parents need to ask what kind of mathematical development each route emphasizes and what the child is ready to absorb well.`,
          `In this case, the real decision is about ${comparison.parentIntent}.`,
        ],
        bullets: [
          `${left.name}: ${left.learningOutcome}`,
          `${right.name}: ${right.learningOutcome}`,
          "Choose the programme that solves the next real learning bottleneck.",
        ],
      });
    }
  }

  if (record.kind === "parent-intent") {
    sections.push({
      title: "How to make a good decision without following hype",
      paragraphs: [
        "Parents in this stage usually need clarity, not more lists. The best choice depends on whether the child needs confidence, fluency, broader challenge, or long-term olympiad structure.",
        "A premium maths programme should make that diagnosis explicit instead of promising every benefit to every family.",
      ],
      bullets: [
        "Check whether the child needs foundation work or enrichment.",
        "Prefer structured weekly support to last-minute crash preparation.",
        "Use teacher feedback, not only scores, to judge progress.",
      ],
    });
  }

  const relatedLinks = [
    ...getRelatedRoutes(record),
    ...(record.locationKey ? getLocationRoutes(record.locationKey) : []),
    ...(exam
      ? exam.relatedExams.slice(0, 2).map((relatedExamKey) => ({
          href: `/${seoExams[relatedExamKey].onlineLabel}`,
          label: `${seoExams[relatedExamKey].name} online`,
        }))
      : []),
  ].slice(0, 8);

  const trustPoints = [
    "30+ years of mathematics teaching experience",
    "Small-batch teaching with parent-sensitive guidance",
    "Olympiad, mental maths, and enrichment pathways under one brand",
    "Online-first structure suitable for India and international students",
  ];

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
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

  return {
    eyebrow,
    title,
    summary: buildSummary(record),
    keyPoints,
    sections,
    faqs,
    relatedLinks,
    trustPoints,
    breadcrumbs,
  };
}
