/**
 * Explicit Corporate Service URLs.
 * slug segment MUST match keys on `serviceData` in `@/lib/data/services/index.ts`.
 */
export const CORPORATE_SERVICE_NAV_ITEMS = [
  {
    name: "Charge Creation, Modification & Satisfaction",
    path: "/services/charge-creation-modification-and-satisfaction",
  },
  {
    name: "Share Allotment & Transfer",
    path: "/services/share-allotment-and-transfer",
  },
  {
    name: "Right Issue / Private Placement",
    path: "/services/right-issue-private-placement",
  },
  {
    name: "Buy-Back of Shares",
    path: "/services/buy-back-of-shares",
  },
  {
    name: "Issue of Preference Shares / Convertible Debentures",
    path: "/services/issue-of-preference-shares-convertible-debentures",
  },
  {
    name: "Reduction of Share Capital",
    path: "/services/reduction-of-share-capital",
  },
  {
    name: "ESOP Structuring and Implementation",
    path: "/services/esop-structuring-and-implementation",
  },
  { name: "XBRL Filing", path: "/services/xbrl-filing" },
] as const;
