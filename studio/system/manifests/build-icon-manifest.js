/* ==========================================================================
   BUILD ICON MANIFEST
   ========================================================================== */

import fs from "fs";

import {
  loadIconRegistry
}
from "../icons/icon-registry-loader.js";

const OUTPUT =
"/Users/artan/Documents/Neuroartan/control-center/studio/registry/icons/icons.manifest.json";

const icons =
loadIconRegistry();

fs.writeFileSync(
  OUTPUT,
  JSON.stringify(icons, null, 2)
);

console.log(
  `[Studio] Icon manifest built: ${icons.length} icons`
);
