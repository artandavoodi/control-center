/**
 * Runtime Token Exporter
 */

import fs from "fs";
import path from "path";

import { tokenCompiler }
from "../../compiler/token-compiler.js";

export class RuntimeTokenExporter {
  export(outputPath) {
    const compiled =
      tokenCompiler.compile();

    const resolved =
      path.resolve(outputPath);

    fs.writeFileSync(
      resolved,
      compiled.runtime
    );

    return resolved;
  }
}

export const runtimeTokenExporter =
  new RuntimeTokenExporter();
