/**
 * Runtime Icon Exporter
 * Generates runtime icon manifests.
 */

import fs from "fs";
import path from "path";

import { iconRegistry }
from "../../core/icon-registry.js";

const OUTPUT =
"./registry/icons/manifests/icon-manifest.json";

export class RuntimeIconExporter {
  export() {
    const resolved =
      path.resolve(OUTPUT);

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
