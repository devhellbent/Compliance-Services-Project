#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");

const navFile = read("src/lib/data/services/compliance/corporate-service-nav.ts");
const extFile = read("src/lib/data/services/compliance/extended-compliance-services.ts");
const indexFile = read("src/lib/data/services/index.ts");

const extractPaths = (source, constName) => {
  const blockRegex = new RegExp(
    `export const ${constName} = \\[(.*?)\\] as const;`,
    "s"
  );
  const block = source.match(blockRegex)?.[1] ?? "";
  return [...block.matchAll(/path:\s*"([^"]+)"/g)].map((m) => m[1]);
};

const toKey = (servicePath) => servicePath.replace(/^\/services\//, "");

const extractObjectKeys = (source, objectName) => {
  const blockRegex = new RegExp(`export const ${objectName}[^=]*= \\{(.*?)\\};`, "s");
  const block = source.match(blockRegex)?.[1] ?? "";
  return [...block.matchAll(/^\s*"([^"]+)":/gm)].map((m) => m[1]);
};

const keysFromObject = [
  ...[...indexFile.matchAll(/^\s*"([^"]+)":/gm)].map((m) => m[1]),
  ...extractObjectKeys(extFile, "EXTRA_COMPLIANCE_PAGES"),
];

const allCompliancePaths = [
  ...extractPaths(navFile, "CORPORATE_SERVICE_NAV_ITEMS"),
  ...extractPaths(extFile, "SEBI_COMPLIANCE_NAV_ITEMS"),
  ...extractPaths(extFile, "AUDIT_DUE_DILIGENCE_NAV_ITEMS"),
  ...extractPaths(extFile, "CORPORATE_RESTRUCTURING_NAV_ITEMS"),
];

const pathSet = new Set();
const duplicatePaths = [];
for (const p of allCompliancePaths) {
  if (pathSet.has(p)) duplicatePaths.push(p);
  pathSet.add(p);
}

const complianceKeys = allCompliancePaths.map(toKey);
const missingKeys = complianceKeys.filter((k) => !keysFromObject.includes(k));

if (duplicatePaths.length || missingKeys.length) {
  console.error("Compliance mapping validation failed.");
  if (duplicatePaths.length) {
    console.error("Duplicate compliance paths:");
    for (const p of duplicatePaths) console.error(` - ${p}`);
  }
  if (missingKeys.length) {
    console.error("Missing serviceData keys:");
    for (const k of missingKeys) console.error(` - ${k}`);
  }
  process.exit(1);
}

console.log("Compliance mapping validation passed.");
console.log(`Checked ${allCompliancePaths.length} compliance paths.`);
