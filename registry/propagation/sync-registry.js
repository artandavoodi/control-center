/**
 * Neuroartan Registry Propagation Engine
 * Unified cross-platform propagation authority.
 */

import "../tokens/loaders/load-website-token-files.js";

import { iconCompiler }
from "../icons/compiler/icon-compiler.js";

import { runtimeIconExporter }
from "../icons/exporters/runtime/runtime-icon-exporter.js";

import { swiftIconExporter }
from "../icons/exporters/swift/swift-icon-exporter.js";

import { tokenCompiler }
from "../tokens/compiler/token-compiler.js";

import { cssTokenExporter }
from "../tokens/exporters/css/css-token-exporter.js";

import { swiftTokenExporter }
from "../tokens/exporters/swift/swift-token-exporter.js";

import { runtimeTokenExporter }
from "../tokens/exporters/runtime/runtime-token-exporter.js";

console.log(
  "\n[Neuroartan Registry Propagation Started]\n"
);

/**
 * ICONS
 */

console.log(
  "\n[Loading SVG Registry]\n"
);

console.table(
  iconCompiler.load()
);

runtimeIconExporter.export();

swiftIconExporter.export();

/**
 * TOKENS
 */

console.log(
  "\n[Compiling Canonical Tokens]\n"
);

tokenCompiler.compile();

cssTokenExporter.export(
  "./registry/tokens/manifests/tokens.css"
);

swiftTokenExporter.export(
  "./registry/tokens/manifests/DSCTokens.generated.swift"
);

runtimeTokenExporter.export(
  "./registry/tokens/manifests/runtime-tokens.json"
);

console.log(
  "\n[Registry Propagation Complete]\n"
);
