#!/usr/bin/env node

import { existsSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(process.cwd());

const ICON_ROOTS = [
  'control-center/registry/icons/source',
  'control-center/registry/icons/public/assets',
  'website/docs/registry/icons/public/assets',
].map((path) => resolve(ROOT, path));

const DUPLICATE_PATTERNS = [
  /\s\d+\.svg$/i,
  /\scopy\.svg$/i,
  /\(\d+\)\.svg$/i,
];

function walk(directory) {
  if (!existsSync(directory)) return [];

  const entries = readdirSync(directory, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    if (!entry.isFile()) return [];
    return [fullPath];
  });
}

function isDuplicateArtifact(filePath) {
  return DUPLICATE_PATTERNS.some((pattern) => pattern.test(filePath));
}

function getCanonicalCandidate(filePath) {
  return filePath
    .replace(/\s\d+\.svg$/i, '.svg')
    .replace(/\scopy\.svg$/i, '.svg')
    .replace(/\(\d+\)\.svg$/i, '.svg');
}

const duplicateArtifacts = ICON_ROOTS.flatMap((root) => walk(root))
  .filter((filePath) => filePath.toLowerCase().endsWith('.svg'))
  .filter(isDuplicateArtifact)
  .map((filePath) => ({
    filePath,
    canonicalCandidate: getCanonicalCandidate(filePath),
  }));

const verifiedDuplicates = duplicateArtifacts.filter(({ filePath, canonicalCandidate }) => (
  canonicalCandidate !== filePath && existsSync(canonicalCandidate) && statSync(canonicalCandidate).isFile()
));

const unsafeDuplicates = duplicateArtifacts.filter(({ filePath, canonicalCandidate }) => !(
  canonicalCandidate !== filePath && existsSync(canonicalCandidate) && statSync(canonicalCandidate).isFile()
));

if (!duplicateArtifacts.length) {
  console.log('Icon duplicate guard passed: no numbered or copy SVG artifacts found.');
  process.exit(0);
}

console.error('Icon duplicate guard failed. Duplicate SVG artifacts were found.');

if (verifiedDuplicates.length) {
  console.error('\nVerified duplicate artifacts with canonical originals:');
  verifiedDuplicates.forEach(({ filePath, canonicalCandidate }) => {
    console.error(`- ${filePath.replace(`${ROOT}/`, '')}`);
    console.error(`  canonical: ${canonicalCandidate.replace(`${ROOT}/`, '')}`);
  });
}

if (unsafeDuplicates.length) {
  console.error('\nDuplicate-looking artifacts without verified canonical originals:');
  unsafeDuplicates.forEach(({ filePath }) => {
    console.error(`- ${filePath.replace(`${ROOT}/`, '')}`);
  });
}

console.error('\nFix: remove duplicate artifacts only after verifying canonical originals exist.');
process.exit(1);