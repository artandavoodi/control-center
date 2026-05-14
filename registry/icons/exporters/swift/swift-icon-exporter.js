/**
 * Swift Icon Exporter
 * Generates Swift icon registry bindings.
 */

import fs from "fs";
import path from "path";

import { iconRegistry }
from "../../core/icon-registry.js";

const OUTPUT =
"./registry/icons/manifests/IconRegistry.generated.swift";

export class SwiftIconExporter {
  export() {
    const icons =
      iconRegistry.export();

    const entries =
      Object.keys(icons);

    const swift = [
      "import Foundation",
      "",
      "enum DSCIconRegistry {",
      ...entries.map(
        (name) =>
`  static let ${name.replace(/-/g, "_")} = "${name}"`
      ),
      "}"
    ].join("\n");

    const resolved =
      path.resolve(OUTPUT);

    fs.writeFileSync(
      resolved,
      swift
    );

    return resolved;
  }
}

export const swiftIconExporter =
  new SwiftIconExporter();
