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
  swiftIdentifier(name) {
    const normalized =
      String(name)
        .replace(/[^a-zA-Z0-9_]/g, "_")
        .replace(/_+/g, "_")
        .replace(/^_+|_+$/g, "");

    if (!normalized) {
      return "icon";
    }

    if (/^[0-9]/.test(normalized)) {
      return `icon_${normalized}`;
    }

    return normalized;
  }

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
`  static let ${this.swiftIdentifier(name)} = "${name}"`
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
