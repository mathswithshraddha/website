import type { ExamKey } from "@/data/seo/programmatic";

export interface ResourceArticle {
  slug: string;
  title: string;
  description: string;
  audience: string;
  relatedExams: ExamKey[];
  sections: Array<{
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "best-maths-olympiads-for-class-3-students",
    title: "Best Maths Olympiads for Class 3 Students",
    description:
      "A parent-focused guide to choosing the right first olympiad for Class 3 students, including SOF IMO, SASMO readiness, and how to avoid overload.",
    audience: "Parents of Class 3 students evaluating a first olympiad pathway.",
    relatedExams: ["sof-imo", "sasmo", "olympiad-maths"],
    sections: [
      {
        title: "What parents should optimise for in Class 3",
        paragraphs: [
          "Class 3 is early enough to build healthy competition habits but still young enough that the wrong programme can turn maths into performance pressure. The first priority should be confidence with concepts, word problems, and mathematical language.",
          "For most students, the best first olympiad is not the hardest paper. It is the one that stretches the child while still leaving room for curiosity, discussion, and visible wins.",
        ],
        bullets: [
          "Choose conceptual challenge over aggressive drilling.",
          "Favour regular weekly routines over short bursts before an exam.",
          "Use olympiads to develop reasoning, not just medals.",
        ],
      },
      {
        title: "How SOF IMO and SASMO fit differently",
        paragraphs: [
          "SOF IMO is usually the more natural first step because it stays closer to school maths while still asking students to apply ideas in unfamiliar ways. It helps parents see whether a child enjoys problem solving before moving further up the enrichment ladder.",
          "SASMO becomes a stronger fit when a child already enjoys puzzles, handles multi-step questions calmly, and is ready for more non-routine thinking.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Class 3 too early for olympiad maths?",
        answer:
          "No. Class 3 can be an excellent age to begin if the focus stays on reasoning, confidence, and joyful challenge rather than heavy exam pressure.",
      },
      {
        question: "Should a Class 3 student start with SASMO or SOF IMO?",
        answer:
          "For most children, SOF IMO is the more natural first step. SASMO suits students who already show unusual comfort with non-routine problems.",
      },
    ],
  },
  {
    slug: "benefits-of-mental-maths-training",
    title: "Benefits of Mental Maths Training",
    description:
      "Why mental maths matters beyond speed, including concentration, number sense, confidence, and better transfer into olympiad and school maths.",
    audience: "Parents deciding whether mental maths adds real value.",
    relatedExams: ["mental-maths", "ipm", "sof-imo"],
    sections: [
      {
        title: "Mental maths is not only about speed",
        paragraphs: [
          "Good mental maths training develops number sense. Children learn to estimate, decompose numbers, and choose efficient paths instead of reaching for written working immediately.",
          "That matters because slow, effortful calculation drains working memory. When fluency improves, students have more mental space left for reasoning and problem solving.",
        ],
      },
      {
        title: "Why it supports school and olympiad maths",
        paragraphs: [
          "In school maths, stronger fluency reduces careless errors and helps children keep pace with multi-step questions. In olympiad maths, it prevents basic arithmetic from becoming the bottleneck inside harder problems.",
        ],
        bullets: [
          "More confidence with arithmetic",
          "Less avoidance of word problems",
          "Better concentration during timed practice",
        ],
      },
    ],
    faqs: [
      {
        question: "Does mental maths help weak students or only advanced students?",
        answer:
          "It helps both. Struggling students gain confidence and efficiency, while advanced students gain the fluency needed to think deeper without getting stuck in basic arithmetic.",
      },
      {
        question: "Is mental maths better than endless worksheets?",
        answer:
          "Usually yes, if the training is conceptual. Worksheets alone can build repetition, but mental maths builds strategy, flexibility, and confidence in numbers.",
      },
    ],
  },
  {
    slug: "how-to-prepare-for-sasmo-at-home",
    title: "How to Prepare for SASMO at Home",
    description:
      "A practical home-preparation roadmap for SASMO, covering non-routine practice, parent support, and when expert guidance becomes useful.",
    audience: "Parents supporting SASMO preparation at home.",
    relatedExams: ["sasmo", "singapore-maths", "olympiad-maths"],
    sections: [
      {
        title: "Start with depth, not volume",
        paragraphs: [
          "SASMO rewards students who can reason carefully through unfamiliar questions. That means one thoughtfully reviewed worksheet is more valuable than a large packet completed mechanically.",
          "At home, parents should focus on helping children explain why an approach works instead of only checking whether the final answer is correct.",
        ],
      },
      {
        title: "Build a weekly rhythm",
        paragraphs: [
          "A useful SASMO week usually includes concept revision, a small set of non-routine problems, and one review conversation about mistakes. The goal is to make reflection part of practice.",
        ],
        bullets: [
          "Review one core concept each week.",
          "Solve a short set of olympiad-style problems without rushing.",
          "Discuss alternative methods and what made a question difficult.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can a parent prepare a child for SASMO without being a maths expert?",
        answer:
          "Yes, up to a point. Parents can build routine, discussion habits, and consistency, but advanced non-routine problem solving usually benefits from expert guidance.",
      },
      {
        question: "How much weekly practice is enough for SASMO?",
        answer:
          "That depends on the child's level, but consistent weekly problem solving and review matters more than occasional marathon sessions.",
      },
    ],
  },
  {
    slug: "why-singapore-maths-improves-problem-solving",
    title: "Why Singapore Maths Improves Problem Solving",
    description:
      "A clear explanation of why singapore maths works so well for reasoning, bar modelling, and transfer into higher-level problem solving.",
    audience: "Parents comparing singapore maths with standard school approaches.",
    relatedExams: ["singapore-maths", "sasmo", "online-maths-enrichment"],
    sections: [
      {
        title: "Singapore maths teaches structure",
        paragraphs: [
          "Many children struggle with problem solving because they see each word problem as a separate event. Singapore maths helps them identify patterns and structures that repeat across question types.",
          "Bar modelling, visual representation, and careful sequencing make abstract ideas more accessible and more transferable.",
        ],
      },
      {
        title: "Why that matters for enrichment",
        paragraphs: [
          "Children who understand structure solve unfamiliar problems more calmly. They are less likely to depend on memorised templates and more likely to adapt when a question changes shape.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is singapore maths only for students in singapore schools?",
        answer:
          "No. The underlying reasoning methods can benefit students across many school systems, especially those who need stronger problem-solving habits.",
      },
      {
        question: "Does singapore maths help olympiad preparation?",
        answer:
          "Yes. It is not the same as olympiad training, but it creates many of the habits that olympiad learners need: representation, reasoning, and careful explanation.",
      },
    ],
  },
  {
    slug: "best-online-maths-enrichment-programs",
    title: "Best Online Maths Enrichment Programs",
    description:
      "What thoughtful parents should look for in a premium online maths enrichment programme, from live teaching quality to cohort fit and long-term progression.",
    audience: "Global families comparing online maths enrichment options.",
    relatedExams: ["online-maths-enrichment", "singapore-maths", "olympiad-maths"],
    sections: [
      {
        title: "Avoid the most common mistake",
        paragraphs: [
          "The biggest mistake is choosing an online maths programme based only on syllabus coverage or the number of worksheets. Real enrichment depends on the quality of live discussion, teacher feedback, and batch placement.",
        ],
      },
      {
        title: "What premium quality looks like",
        paragraphs: [
          "A strong programme should feel calm, rigorous, and personalised. Children should be expected to think, justify, and revisit mistakes instead of racing through superficial tasks.",
        ],
        bullets: [
          "Live teaching, not only recorded lessons",
          "Small enough batches for meaningful interaction",
          "A clear progression path across grades and challenge levels",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I know if an online enrichment batch is the right level?",
        answer:
          "The right batch feels stretching but not chaotic. A good provider will assess fluency, reasoning habits, and maturity before recommending placement.",
      },
      {
        question: "Can online maths enrichment work for younger children?",
        answer:
          "Yes, if the sessions are live, interactive, age-appropriate, and focused on discussion rather than passive screen time.",
      },
    ],
  },
  {
    slug: "stem-skills-through-olympiad-maths",
    title: "STEM Skills Through Olympiad Maths",
    description:
      "How olympiad maths supports long-term STEM readiness by building rigorous reasoning, resilience, and abstraction.",
    audience: "Parents thinking beyond marks toward long-term STEM capability.",
    relatedExams: ["olympiad-maths", "sof-imo", "sasmo"],
    sections: [
      {
        title: "Why olympiad maths matters beyond the exam",
        paragraphs: [
          "Olympiad maths teaches students how to stay with a difficult problem, test ideas, and recover from dead ends. Those habits are core to future STEM work, whether in mathematics, coding, or science research.",
          "The value is not only in medal outcomes. It is in the child's growing relationship with challenge.",
        ],
      },
      {
        title: "The specific habits it builds",
        paragraphs: [
          "Strong olympiad teaching helps students reason precisely, communicate clearly, and recognise when a problem needs a fresh representation or simpler sub-case.",
        ],
        bullets: [
          "Pattern recognition",
          "Persistence with difficult work",
          "Comfort with abstraction",
          "Mathematical communication",
        ],
      },
    ],
    faqs: [
      {
        question: "Does olympiad maths help children who do not want to become mathematicians?",
        answer:
          "Yes. The biggest benefits are reasoning, resilience, and disciplined thinking, which transfer widely across STEM and academic work.",
      },
      {
        question: "Can olympiad maths hurt confidence if it is too hard?",
        answer:
          "It can, which is why level-appropriate guidance matters. Good programmes challenge students without making them feel constantly behind.",
      },
    ],
  },
];
