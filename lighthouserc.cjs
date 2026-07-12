/**
 * Lighthouse CI — Core Web Vitals bütçeleri (mobil).
 * Google "good" eşikleri: LCP <= 2500ms, CLS <= 0.1, INP <= 200ms (lab proxy: TBT).
 * Prod build üzerinde (build + start) median-of-3 ile ölçülür.
 */
const PORT = 3100;
const BASE_URL = `http://localhost:${PORT}`;

const URLS = [`${BASE_URL}/`, `${BASE_URL}/rehber`];

const LCP_BUDGET_MS = 2500;
const INP_BUDGET_MS = 200; // TBT lab proxy
const CLS_BUDGET = 0.1;

module.exports = {
  ci: {
    collect: {
      startServerCommand: `npm run start -- --port ${PORT}`,
      startServerReadyPattern: "Ready in",
      startServerReadyTimeout: 120000,
      url: URLS,
      numberOfRuns: 3,
      settings: {
        onlyCategories: ["performance", "seo", "accessibility", "best-practices"],
      },
    },
    assert: {
      aggregationMethod: "median-run",
      assertions: {
        "largest-contentful-paint": ["error", { maxNumericValue: LCP_BUDGET_MS }],
        "cumulative-layout-shift": ["error", { maxNumericValue: CLS_BUDGET }],
        "total-blocking-time": ["error", { maxNumericValue: INP_BUDGET_MS }],
        "interaction-to-next-paint": ["warn", { maxNumericValue: INP_BUDGET_MS }],
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.95 }],
        "categories:accessibility": ["warn", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: "./.lighthouseci",
    },
  },
};
