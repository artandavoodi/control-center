/**
 * Control Center Registry Synchronization Pipeline
 * Rebuilds canonical token and icon runtime outputs.
 */

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

function syncIcons() {
  const registryState =
    iconCompiler.load();

  return {
    icons: registryState.totalIcons,
    manifests: {
      publicAssets: publicIconExporter.export(),
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
