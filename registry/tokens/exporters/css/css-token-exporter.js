/**
 * CSS Token Exporter
 */

import fs from "fs";
import path from "path";

import { tokenCompiler }
from "../../compiler/token-compiler.js";

export class CSSTokenExporter {
  export(outputPath) {
    const compiled =
      tokenCompiler.compile();

    const resolved =
      path.resolve(outputPath);

    fs.writeFileSync(
      resolved,
      compiled.css
    );

    return resolved;
  }
}

export const cssTokenExporter =
  new CSSTokenExporter();
