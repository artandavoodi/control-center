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

function syncArtanLivePublicIconMirror() {
  if (!fs.existsSync(CONTROL_CENTER_PUBLIC_ICON_ASSETS)) {
    throw new Error(
      `Missing Control Center public icon assets: ${CONTROL_CENTER_PUBLIC_ICON_ASSETS}`
    );
  }

  fs.rmSync(
    ARTAN_LIVE_PUBLIC_ICON_ASSETS,
    {
      recursive: true,
      force: true
    }
  );

  fs.mkdirSync(
    ARTAN_LIVE_PUBLIC_ICON_ASSETS,
    {
      recursive: true
    }
  );

  fs.cpSync(
    CONTROL_CENTER_PUBLIC_ICON_ASSETS,
    ARTAN_LIVE_PUBLIC_ICON_ASSETS,
    {
      recursive: true
    }
  );

  return countFiles(ARTAN_LIVE_PUBLIC_ICON_ASSETS);
}

function syncIcons() {
  const registryState =
    iconCompiler.load();

  const publicAssets =
    publicIconExporter.export();

  const artanLivePublicAssets =
    syncArtanLivePublicIconMirror();

  return {
    icons: registryState.totalIcons,
    manifests: {
      publicAssets,
      artanLivePublicAssets,
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
