/* ==========================================================================
   TOKEN WATCH RUNTIME
   ========================================================================== */

import fs from "fs";
import { execSync } from "child_process";

const ROOT =
"/Users/artan/Documents/Neuroartan/control-center/studio/registry/tokens";

function rebuild() {

  console.log(
    "[Studio] Rebuilding canonical tokens..."
  );

  execSync(
    "node /Users/artan/Documents/Neuroartan/control-center/studio/system/tokens/token-css-generator.js",
    { stdio: "inherit" }
  );

  console.log(
    "[Studio] Token propagation complete."
  );
}

fs.watch(
  ROOT,
  {
    recursive: true
  },
  (eventType, filename) => {

    if (!filename?.endsWith(".json")) {
      return;
    }

    console.log(
      `[Studio] Token change detected: ${filename}`
    );

    rebuild();
  }
);

console.log(
  "[Studio] Token watcher active."
);
