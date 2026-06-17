/**
 * Control Center Registry Synchronization Pipeline
 * Rebuilds canonical token and icon runtime outputs.
 */

import fs
from "node:fs";

import path
from "node:path";

import { fileURLToPath }
from "node:url";

import { syncTokens }
from "./tokens/sync-tokens.js";

import { iconCompiler }
from "./icons/compiler/icon-compiler.js";

import { publicIconExporter }
from "./icons/exporters/public/public-icon-exporter.js";

import { runtimeIconExporter }
from "./icons/exporters/runtime/runtime-icon-exporter.js";

import { swiftIconExporter }
from "./icons/exporters/swift/swift-icon-exporter.js";

const REGISTRY_ROOT =
  path.dirname(
    fileURLToPath(import.meta.url)
  );

const CONTROL_CENTER_ROOT =
  path.resolve(
    REGISTRY_ROOT,
    ".."
  );

const CONTROL_CENTER_PUBLIC_ICON_ASSETS =
  path.join(
    REGISTRY_ROOT,
    "icons",
    "public",
    "assets"
  );

const ARTAN_LIVE_PUBLIC_ICON_ASSETS =
  path.resolve(
    CONTROL_CENTER_ROOT,
    "..",
    "artan-live",
    "docs",
    "registry",
    "icons",
    "public",
    "assets"
  );

const WEBSITE_PUBLIC_ICON_ASSETS =
  path.resolve(
    CONTROL_CENTER_ROOT,
    "..",
    "website",
    "docs",
    "registry",
    "icons",
    "public",
    "assets"
  );

const DOCS_PUBLIC_PUBLIC_ICON_ASSETS =
  path.resolve(
    CONTROL_CENTER_ROOT,
    "..",
    "docs-public",
    "registry",
    "icons",
    "public",
    "assets"
  );

function countFiles(root) {
  if (!fs.existsSync(root)) {
    return 0;
  }

  let total = 0;

  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const entryPath =
      path.join(root, entry.name);

    if (entry.isDirectory()) {
      total +=
        countFiles(entryPath);
      continue;
    }

    if (entry.isFile()) {
      total += 1;
    }
  }

  return total;
}

function isDuplicateAssetName(fileName) {
  return /(?: copy(?: [0-9]+)?|-copy| [0-9]+)\.(svg|png|jpg|jpeg|webp|ico)$/i.test(fileName);
}

function listDuplicateAssetFiles(root) {
  if (!fs.existsSync(root)) {
    return [];
  }

  const duplicates = [];

  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const entryPath =
      path.join(root, entry.name);

    if (entry.isDirectory()) {
      duplicates.push(
        ...listDuplicateAssetFiles(entryPath)
      );
      continue;
    }

    if (entry.isFile() && isDuplicateAssetName(entry.name)) {
      duplicates.push(entryPath);
    }
  }

  return duplicates;
}

function assertNoDuplicateAssets(root, label) {
  const duplicates =
    listDuplicateAssetFiles(root);

  if (!duplicates.length) {
    return;
  }

  throw new Error(
    `${label} contains duplicate/copy asset files:\n${duplicates.join("\n")}`
  );
}

function replaceDirectory(sourceRoot, targetRoot) {
  const parentRoot =
    path.dirname(targetRoot);

  const temporaryRoot =
    `${targetRoot}.tmp-sync`;

  fs.rmSync(
    temporaryRoot,
    {
      recursive: true,
      force: true
    }
  );

  fs.mkdirSync(
    parentRoot,
    {
      recursive: true
    }
  );

  fs.cpSync(
    sourceRoot,
    temporaryRoot,
    {
      recursive: true,
      force: true
    }
  );

  assertNoDuplicateAssets(
    temporaryRoot,
    "Temporary public icon mirror"
  );

  fs.rmSync(
    targetRoot,
    {
      recursive: true,
      force: true
    }
  );

  fs.renameSync(
    temporaryRoot,
    targetRoot
  );
}

function syncPublicIconMirror(targetRoot, label) {
  if (!fs.existsSync(CONTROL_CENTER_PUBLIC_ICON_ASSETS)) {
    throw new Error(
      `Missing Control Center public icon assets: ${CONTROL_CENTER_PUBLIC_ICON_ASSETS}`
    );
  }

  assertNoDuplicateAssets(
    CONTROL_CENTER_PUBLIC_ICON_ASSETS,
    "Control Center public icon source"
  );

  replaceDirectory(
    CONTROL_CENTER_PUBLIC_ICON_ASSETS,
    targetRoot
  );

  assertNoDuplicateAssets(
    targetRoot,
    label
  );

  return countFiles(targetRoot);
}

function syncIcons() {
  const registryState =
    iconCompiler.load();

  const publicAssets =
    publicIconExporter.export();

  const websitePublicAssets =
    syncPublicIconMirror(
      WEBSITE_PUBLIC_ICON_ASSETS,
      "Website public icon mirror"
    );

  const artanLivePublicAssets =
    syncPublicIconMirror(
      ARTAN_LIVE_PUBLIC_ICON_ASSETS,
      "Artan.live public icon mirror"
    );

  const docsPublicPublicAssets =
    syncPublicIconMirror(
      DOCS_PUBLIC_PUBLIC_ICON_ASSETS,
      "Docs public icon mirror"
    );

  return {
    icons: registryState.totalIcons,
    manifests: {
      publicAssets,
      websitePublicAssets,
      artanLivePublicAssets,
      docsPublicPublicAssets,
      runtimeManifest: runtimeIconExporter.export(),
      swiftManifest: swiftIconExporter.export()
    }
  };
}

const tokenResult =
  syncTokens();

const iconResult =
  syncIcons();

console.log(
  "\n[Control Center Registry Synchronized]\n"
);

console.log({
  tokens: {
    sourceFiles: tokenResult.files,
    registered: tokenResult.tokens,
    overrides: tokenResult.overrides.length,
    manifests: tokenResult.manifests
  },
  icons: iconResult
});
