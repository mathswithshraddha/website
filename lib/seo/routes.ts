import {
  comparisonPages,
  grades,
  parentIntentPages,
  seoExams,
  seoLocations,
  seoRegions,
  type ComparisonPage,
  type ExamKey,
  type LocationKey,
  type ParentIntentPage,
  type RegionKey,
} from "@/data/seo/programmatic";

export type SeoPageKind =
  | "exam-city"
  | "exam-grade"
  | "exam-city-grade"
  | "parent-intent"
  | "comparison"
  | "local"
  | "online"
  | "international";

export interface SeoPageRecord {
  pathname: string;
  segments: string[];
  kind: SeoPageKind;
  examKey?: ExamKey;
  locationKey?: LocationKey;
  grade?: number;
  regionKey?: RegionKey;
  localTopic?: "maths-classes" | "olympiad-coaching" | "mental-maths-classes";
  parentIntentSlug?: ParentIntentPage["slug"];
  comparisonSlug?: ComparisonPage["slug"];
}

const topCityGradeLocations: LocationKey[] = ["mumbai", "thane", "borivali", "kandivali", "pune"];
const cityLocations = Object.keys(seoLocations) as LocationKey[];

function createRecord(pathname: string, record: Omit<SeoPageRecord, "pathname" | "segments">): SeoPageRecord {
  const segments = pathname.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
  return {
    pathname,
    segments,
    ...record,
  };
}

function createExamCityRoutes() {
  const targetedExams: ExamKey[] = ["sof-imo", "sasmo", "ipm", "mental-maths", "olympiad-maths"];
  return targetedExams.flatMap((examKey) => {
    const exam = seoExams[examKey];
    return cityLocations.map((locationKey) =>
      createRecord(`/${exam.slug}-${exam.citySuffix}-${seoLocations[locationKey].slug}`, {
        kind: "exam-city",
        examKey,
        locationKey,
      }),
    );
  });
}

function createExamGradeRoutes() {
  const targetedExams: ExamKey[] = ["sof-imo", "sasmo", "mental-maths", "ipm"];
  return targetedExams.flatMap((examKey) => {
    const exam = seoExams[examKey];
    return grades
      .filter((grade) => grade.grade >= exam.minGrade && grade.grade <= exam.maxGrade)
      .map((grade) =>
        createRecord(`/${exam.slug}-class-${grade.grade}`, {
          kind: "exam-grade",
          examKey,
          grade: grade.grade,
        }),
      );
  });
}

function createExamCityGradeRoutes() {
  const targetedExams: ExamKey[] = ["sof-imo", "sasmo", "mental-maths"];
  return targetedExams.flatMap((examKey) => {
    const exam = seoExams[examKey];
    return topCityGradeLocations.flatMap((locationKey) =>
      grades
        .filter((grade) => grade.grade >= exam.minGrade && grade.grade <= exam.maxGrade)
        .map((grade) =>
          createRecord(`/${exam.slug}-class-${grade.grade}-${seoLocations[locationKey].slug}`, {
            kind: "exam-city-grade",
            examKey,
            grade: grade.grade,
            locationKey,
          }),
        ),
    );
  });
}

function createLocalRoutes() {
  return cityLocations.flatMap((locationKey) => {
    const slug = seoLocations[locationKey].slug;
    return [
      createRecord(`/maths-classes-in-${slug}`, {
        kind: "local",
        locationKey,
        localTopic: "maths-classes",
      }),
      createRecord(`/olympiad-coaching-in-${slug}`, {
        kind: "local",
        locationKey,
        localTopic: "olympiad-coaching",
      }),
      createRecord(`/mental-maths-classes-in-${slug}`, {
        kind: "local",
        locationKey,
        localTopic: "mental-maths-classes",
      }),
    ];
  });
}

function createOnlineRoutes() {
  const onlineRoutes: Array<{ pathname: string; examKey: ExamKey }> = [
    { pathname: "/online-sasmo-coaching", examKey: "sasmo" },
    { pathname: "/online-maths-enrichment", examKey: "online-maths-enrichment" },
    { pathname: "/international-maths-olympiad-training", examKey: "olympiad-maths" },
    { pathname: "/singapore-maths-program-for-kids", examKey: "singapore-maths" },
  ];

  return onlineRoutes.map((item) =>
    createRecord(item.pathname, {
      kind: "online",
      examKey: item.examKey,
    }),
  );
}

function createParentIntentRoutes() {
  return parentIntentPages.map((page) =>
    createRecord(`/${page.slug}`, {
      kind: "parent-intent",
      parentIntentSlug: page.slug,
      examKey: typeof page.focus === "string" && page.focus in seoExams ? (page.focus as ExamKey) : undefined,
    }),
  );
}

function createComparisonRoutes() {
  return comparisonPages.map((page) =>
    createRecord(`/${page.slug}`, {
      kind: "comparison",
      comparisonSlug: page.slug,
      examKey: page.leftExam,
    }),
  );
}

function createInternationalRoutes() {
  const routes: Array<{ regionKey: RegionKey; slug: string; examKey: ExamKey }> = [
    { regionKey: "sg", slug: "sasmo-training", examKey: "sasmo" },
    { regionKey: "ae", slug: "mental-maths-online", examKey: "mental-maths" },
    { regionKey: "us", slug: "online-math-enrichment", examKey: "online-maths-enrichment" },
    { regionKey: "uk", slug: "olympiad-maths-classes", examKey: "olympiad-maths" },
    { regionKey: "ca", slug: "gifted-math-program", examKey: "online-maths-enrichment" },
    { regionKey: "au", slug: "competitive-maths-training", examKey: "olympiad-maths" },
  ];

  return routes.map((route) =>
    createRecord(`/${route.regionKey}/${route.slug}`, {
      kind: "international",
      regionKey: route.regionKey,
      examKey: route.examKey,
    }),
  );
}

export const programmaticSeoRoutes: SeoPageRecord[] = [
  ...createExamCityRoutes(),
  ...createExamGradeRoutes(),
  ...createExamCityGradeRoutes(),
  ...createParentIntentRoutes(),
  ...createComparisonRoutes(),
  ...createLocalRoutes(),
  ...createOnlineRoutes(),
  ...createInternationalRoutes(),
];

const routeMap = new Map(programmaticSeoRoutes.map((route) => [route.pathname, route]));

export function getSeoPageRecordBySegments(segments: string[] = []) {
  const pathname = `/${segments.join("/")}`;
  return routeMap.get(pathname) ?? null;
}

export function getRelatedRoutes(record: SeoPageRecord) {
  if (record.examKey) {
    const exam = seoExams[record.examKey];
    const relatedExamRoutes = exam.relatedExams.slice(0, 3).map((relatedExamKey) => ({
      href: seoExams[relatedExamKey].primaryPage,
      label: `${seoExams[relatedExamKey].name} programme`,
    }));

    const relatedResources = [
      {
        href: "/resources",
        label: "Maths enrichment guides",
      },
      ...relatedExamRoutes,
    ];

    return relatedResources;
  }

  return [{ href: "/resources", label: "Parent resources" }];
}

export function getLocationRoutes(locationKey: LocationKey) {
  return seoLocations[locationKey].nearby.map((nearbyKey) => ({
    href: `/maths-classes-in-${seoLocations[nearbyKey].slug}`,
    label: `Maths classes in ${seoLocations[nearbyKey].name}`,
  }));
}

export function getRegionForRecord(record: SeoPageRecord) {
  return record.regionKey ? seoRegions[record.regionKey] : seoRegions.in;
}
