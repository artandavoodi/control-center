/**
 * Swift Token Exporter
 */

import fs from "fs";
import path from "path";

import { tokenCompiler }
from "../../compiler/token-compiler.js";

export class SwiftTokenExporter {
  export(outputPath) {
    const compiled =
      tokenCompiler.compile();

    const resolved =
      path.resolve(outputPath);

    fs.writeFileSync(
      resolved,
      compiled.swift
    );

    return resolved;
  }
}

export const swiftTokenExporter =
  new SwiftTokenExporter();
