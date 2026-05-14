import {
  comparisonPages,
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

export type SitemapGroup = "programs" | "locations" | "olympiads";

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
  indexable: boolean;
  qualityScore: number;
  sitemapGroup: SitemapGroup;
}

type RouteSeed = Omit<SeoPageRecord, "pathname" | "segments" | "indexable" | "qualityScore" | "sitemapGroup">;

const cityLocations = Object.keys(seoLocations) as LocationKey[];
const coreLocations: LocationKey[] = [
  "mumbai",
  "pune",
  "ahmedabad",
  "delhi",
  "bengaluru",
  "hyderabad",
  "chennai",
  "kolkata",
];
const supportingLocalLocations: LocationKey[] = ["thane", "powai"];
const highIntentExamCityLocations: LocationKey[] = coreLocations;
const highIntentCityGradeLocations: LocationKey[] = ["mumbai", "ahmedabad", "delhi"];
const examGradeTargets: Partial<Record<ExamKey, number[]>> = {
  "sof-imo": [3, 4, 5, 6],
  sasmo: [4, 5, 6],
  "mental-maths": [2, 3, 4],
  ipm: [2, 3, 4],
};
const cityGradeTargets: Partial<Record<ExamKey, number[]>> = {
  "sof-imo": [3, 4, 5],
  sasmo: [4, 5],
  "mental-maths": [2, 3, 4],
};

function createRawRecord(pathname: string, record: RouteSeed): SeoPageRecord {
  const segments = pathname.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
  const qualityScore = getQualityScore(record);

  return {
    pathname,
    segments,
    ...record,
    indexable: shouldIndexRoute(record),
    qualityScore,
    sitemapGroup: getSitemapGroup(record),
  };
}

function getSitemapGroup(record: RouteSeed): SitemapGroup {
  if (record.kind === "local" || record.kind === "exam-city" || record.kind === "exam-city-grade") {
    return "locations";
  }

  if (record.kind === "comparison" || record.kind === "parent-intent") {
    return "olympiads";
  }

  return "programs";
}

function getQualityScore(record: RouteSeed) {
  let score = 55;

  if (record.kind === "comparison" || record.kind === "parent-intent") score += 28;
  if (record.kind === "online" || record.kind === "international") score += 24;
  if (record.kind === "exam-grade") score += 18;
  if (record.kind === "exam-city") score += 14;
  if (record.kind === "local") score += 12;
  if (record.kind === "exam-city-grade") score += 10;

  if (record.locationKey) {
    score += seoLocations[record.locationKey].seoTier === "core" ? 12 : 6;
  }

  if (record.grade && [2, 3, 4, 5, 6].includes(record.grade)) {
    score += 6;
  }

  return score;
}

function shouldIndexRoute(record: RouteSeed) {
  if (record.kind === "comparison" || record.kind === "parent-intent" || record.kind === "online") {
    return true;
  }

  if (record.kind === "international") {
    return ["ae", "qa", "np", "lk", "be", "sg", "us", "uk"].includes(record.regionKey ?? "");
  }

  if (record.kind === "exam-city" && record.locationKey) {
    if (record.examKey === "olympiad-maths") {
      return ["mumbai", "ahmedabad", "delhi", "bengaluru", "pune"].includes(record.locationKey);
    }

    return highIntentExamCityLocations.includes(record.locationKey);
  }

  if (record.kind === "exam-grade" && record.examKey && record.grade) {
    return (examGradeTargets[record.examKey] ?? []).includes(record.grade);
  }

  if (record.kind === "exam-city-grade" && record.examKey && record.locationKey && record.grade) {
    return (
      highIntentCityGradeLocations.includes(record.locationKey) &&
      (cityGradeTargets[record.examKey] ?? []).includes(record.grade)
    );
  }

  if (record.kind === "local" && record.locationKey) {
    if (record.localTopic === "mental-maths-classes") {
      return ["mumbai", "pune", "ahmedabad", "delhi"].includes(record.locationKey);
    }

    if (record.localTopic === "olympiad-coaching") {
      return ["mumbai", "pune", "ahmedabad", "delhi", "bengaluru", "hyderabad"].includes(record.locationKey);
    }

    return [...highIntentExamCityLocations, ...supportingLocalLocations].includes(record.locationKey);
  }

  return false;
}

function createExamCityRoutes() {
  const targetedExams: ExamKey[] = ["sof-imo", "sasmo", "mental-maths", "olympiad-maths"];

  return targetedExams.flatMap((examKey) => {
    const exam = seoExams[examKey];
    return cityLocations.map((locationKey) =>
      createRawRecord(`/${exam.slug}-${exam.citySuffix}-${seoLocations[locationKey].slug}`, {
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
    const grades = examGradeTargets[examKey] ?? [];
    return grades.map((grade) =>
      createRawRecord(`/${seoExams[examKey].slug}-class-${grade}`, {
        kind: "exam-grade",
        examKey,
        grade,
      }),
    );
  });
}

function createExamCityGradeRoutes() {
  const targetedExams: ExamKey[] = ["sof-imo", "sasmo", "mental-maths"];

  return targetedExams.flatMap((examKey) =>
    highIntentCityGradeLocations.flatMap((locationKey) =>
      (cityGradeTargets[examKey] ?? []).map((grade) =>
        createRawRecord(`/${seoExams[examKey].slug}-class-${grade}-${seoLocations[locationKey].slug}`, {
          kind: "exam-city-grade",
          examKey,
          grade,
          locationKey,
        }),
      ),
    ),
  );
}

function createLocalRoutes() {
  return cityLocations.flatMap((locationKey) => {
    const slug = seoLocations[locationKey].slug;
    return [
      createRawRecord(`/maths-classes-in-${slug}`, {
        kind: "local",
        locationKey,
        localTopic: "maths-classes",
      }),
      createRawRecord(`/olympiad-coaching-in-${slug}`, {
        kind: "local",
        locationKey,
        localTopic: "olympiad-coaching",
      }),
      createRawRecord(`/mental-maths-classes-in-${slug}`, {
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
    createRawRecord(item.pathname, {
      kind: "online",
      examKey: item.examKey,
    }),
  );
}

function createParentIntentRoutes() {
  return parentIntentPages.map((page) =>
    createRawRecord(`/${page.slug}`, {
      kind: "parent-intent",
      parentIntentSlug: page.slug,
      examKey: typeof page.focus === "string" && page.focus in seoExams ? (page.focus as ExamKey) : undefined,
    }),
  );
}

function createComparisonRoutes() {
  return comparisonPages.map((page) =>
    createRawRecord(`/${page.slug}`, {
      kind: "comparison",
      comparisonSlug: page.slug,
      examKey: page.leftExam,
    }),
  );
}

function createInternationalRoutes() {
  const routes: Array<{ regionKey: RegionKey; slug: string; examKey: ExamKey }> = [
    { regionKey: "ae", slug: "online-maths-enrichment", examKey: "online-maths-enrichment" },
    { regionKey: "qa", slug: "olympiad-maths-program", examKey: "olympiad-maths" },
    { regionKey: "np", slug: "mental-maths-program", examKey: "mental-maths" },
    { regionKey: "lk", slug: "maths-enrichment-program", examKey: "online-maths-enrichment" },
    { regionKey: "be", slug: "brussels-math-enrichment", examKey: "online-maths-enrichment" },
    { regionKey: "sg", slug: "sasmo-training", examKey: "sasmo" },
    { regionKey: "us", slug: "online-math-enrichment", examKey: "online-maths-enrichment" },
    { regionKey: "uk", slug: "olympiad-maths-classes", examKey: "olympiad-maths" },
  ];

  return routes.map((route) =>
    createRawRecord(`/${route.regionKey}/${route.slug}`, {
      kind: "international",
      regionKey: route.regionKey,
      examKey: route.examKey,
    }),
  );
}

export const candidateProgrammaticSeoRoutes: SeoPageRecord[] = [
  ...createExamCityRoutes(),
  ...createExamGradeRoutes(),
  ...createExamCityGradeRoutes(),
  ...createParentIntentRoutes(),
  ...createComparisonRoutes(),
  ...createLocalRoutes(),
  ...createOnlineRoutes(),
  ...createInternationalRoutes(),
];

export const programmaticSeoRoutes = candidateProgrammaticSeoRoutes.filter((route) => route.indexable);

const routeMap = new Map(programmaticSeoRoutes.map((route) => [route.pathname, route]));

export function getSeoPageRecordBySegments(segments: string[] = []) {
  const pathname = `/${segments.join("/")}`;
  return routeMap.get(pathname) ?? null;
}

export function getRegionForRecord(record: SeoPageRecord) {
  return record.regionKey ? seoRegions[record.regionKey] : seoRegions.in;
}

export function getProgrammaticRoutesByGroup(group: SitemapGroup) {
  return programmaticSeoRoutes.filter((route) => route.sitemapGroup === group);
}

export function getRouteByPath(pathname: string) {
  return routeMap.get(pathname) ?? null;
}
