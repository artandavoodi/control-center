/**
 * Swift Icon Exporter
 * Generates Swift icon registry bindings.
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
    "IconRegistry.generated.swift"
  );

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
      OUTPUT;

    fs.mkdirSync(
      path.dirname(resolved),
      { recursive: true }
    );

    fs.writeFileSync(
      resolved,
      swift
    );

    return resolved;
  }
}

export const swiftIconExporter =
  new SwiftIconExporter();
