/* ==========================================================================
   SVG WATCH RUNTIME
   ========================================================================== */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const ROOT =
"/Users/artan/Documents/Neuroartan/control-center/registry/icons/public/assets";

function rebuild() {

  console.log(
    "[Studio] Rebuilding icon manifest..."
  );

  execSync(
    "node /Users/artan/Documents/Neuroartan/control-center/studio/system/manifests/build-icon-manifest.js",
    { stdio: "inherit" }
  );

  console.log(
    "[Studio] Propagating SVG assets..."
  );

  execSync(
    "node /Users/artan/Documents/Neuroartan/control-center/studio/system/pipeline/svg-propagation-engine.js",
    { stdio: "inherit" }
  );

  console.log(
    "[Studio] Runtime propagation complete."
  );
}

fs.watch(
  ROOT,
  {
    recursive: true
  },
  (eventType, filename) => {

    if (!filename?.endsWith(".svg")) {
      return;
    }

    console.log(
      `[Studio] Change detected: ${filename}`
    );

    rebuild();
  }
);

console.log(
  "[Studio] SVG watcher active."
);
