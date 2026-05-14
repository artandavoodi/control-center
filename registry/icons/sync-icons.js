/**
 * Neuroartan Icon Synchronization Pipeline
 * Canonical SVG propagation authority.
 */

import { iconCompiler }
from "./compiler/icon-compiler.js";

import { runtimeIconExporter }
from "./exporters/runtime/runtime-icon-exporter.js";

import { swiftIconExporter }
from "./exporters/swift/swift-icon-exporter.js";

console.log(
  "\n[Loading SVG Registry]\n"
);

console.table(
  iconCompiler.load()
);

console.log(
  "\n[Exporting Runtime Manifest]\n"
);

console.log(
  runtimeIconExporter.export()
);

console.log(
  "\n[Exporting Swift Registry]\n"
);

console.log(
  swiftIconExporter.export()
);

console.log(
  "\n[Icon Synchronization Complete]\n"
);
