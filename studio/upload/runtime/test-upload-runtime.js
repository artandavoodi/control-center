/**
 * Test Upload Runtime
 * Validates intelligent SVG ingestion.
 */

import fs from "fs";
import path from "path";

import { svgUploadOrchestrator }
from "./svg-upload-orchestrator.js";

const ICON_ROOT =
"/Users/artan/Documents/Neuroartan/control-center/registry/icons/source";

function findFirstSVG(dir) {
  const entries =
    fs.readdirSync(
      dir,
      { withFileTypes: true }
    );

  for (const entry of entries) {
    const resolved =
      path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const nested =
        findFirstSVG(resolved);

      if (nested) {
        return nested;
      }

      continue;
    }

    if (resolved.endsWith(".svg")) {
      return resolved;
    }
  }

  return null;
}

const TEST_ICON =
  findFirstSVG(ICON_ROOT);

if (!TEST_ICON) {
  throw new Error(
    "No SVG icons found in registry source."
  );
}

const result =
  svgUploadOrchestrator.upload({
    sourceFile: TEST_ICON,
    category: "runtime",
    name: "runtime-activity"
  });

console.log(
  "\n[SVG Upload Runtime Test]\n"
);

console.table(result);
