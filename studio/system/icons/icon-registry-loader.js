/* ==========================================================================
   ICON REGISTRY LOADER
   ========================================================================== */

import fs from "fs";
import path from "path";

const ROOT =
"/Users/artan/Documents/Neuroartan/control-center/registry/icons/public/assets";

function walk(directory, results = []) {

  const entries =
  fs.readdirSync(directory, {
    withFileTypes: true
  });

  for (const entry of entries) {

    const absolute =
    path.join(directory, entry.name);

    if (entry.isDirectory()) {
      walk(absolute, results);
      continue;
    }

    if (!entry.name.endsWith(".svg")) {
      continue;
    }

    results.push({
      id:
      path.relative(ROOT, absolute)
      .replace(".svg", "")
      .replaceAll(path.sep, "/"),

      absolutePath: absolute,

      category:
      path.dirname(
        path.relative(ROOT, absolute)
      ),

      file: entry.name
    });
  }

  return results;
}

export function loadIconRegistry() {
  return walk(ROOT);
}
