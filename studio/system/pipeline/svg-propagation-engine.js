/* ==========================================================================
   SVG PROPAGATION ENGINE
   ========================================================================== */

import fs from "fs";
import path from "path";

const MANIFEST =
"/Users/artan/Documents/Neuroartan/control-center/studio/registry/icons/icons.manifest.json";

const WEBSITE_OUTPUT =
"/Users/artan/Documents/Neuroartan/website/docs/assets/icons/system";

function ensure(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
}

const manifest =
JSON.parse(
  fs.readFileSync(MANIFEST, "utf8")
);

for (const icon of manifest) {

  const target =
  path.join(
    WEBSITE_OUTPUT,
    `${icon.id}.svg`
  );

  ensure(path.dirname(target));

  fs.copyFileSync(
    icon.absolutePath,
    target
  );
}

console.log(
  `[Studio] Propagated ${manifest.length} SVG assets`
);
