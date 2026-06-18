/**
 * Runtime Icon Exporter
 * Generates runtime icon manifests.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { iconRegistry }
from "../../core/icon-registry.js";

const MODULE_DIR =
  path.dirname(
    fileURLToPath(import.meta.url)
  );

const OUTPUT =
  path.resolve(
    MODULE_DIR,
    "..",
    "..",
    "manifests",
    "icon-manifest.json"
  );

export class RuntimeIconExporter {
  export() {
    const resolved =
      OUTPUT;

    fs.mkdirSync(
      path.dirname(resolved),
      { recursive: true }
    );

    fs.writeFileSync(
      resolved,
      JSON.stringify(
        iconRegistry.export(),
        null,
        2
      )
    );

    return resolved;
  }
}

export const runtimeIconExporter =
  new RuntimeIconExporter();
