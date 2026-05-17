/* ==========================================================================
   TOKEN CSS GENERATOR
   Canonical Website Token Mapping
   ========================================================================== */

import fs from "fs";

const INPUT =
"/Users/artan/Documents/Neuroartan/control-center/studio/registry/tokens/core-tokens.json";

const OUTPUT =
"/Users/artan/Documents/Neuroartan/website/docs/assets/css/system/generated-tokens.css";

const tokens =
JSON.parse(
  fs.readFileSync(INPUT, "utf8")
);

const map = {
  "color.surface-primary": "--surface-1",
  "color.surface-secondary": "--surface-2",
  "color.text-primary": "--text-color",
  "color.text-secondary": "--text-secondary-color",

  "radius.panel": "--radius-dialog",
  "radius.button": "--radius-lg",

  "spacing.section": "--section-padding-y",
  "spacing.panel-padding": "--spacing-lg",

  "motion.fast": "--duration-fast",
  "motion.medium": "--duration-slow"
};

function get(object, path) {
  return path.split(".").reduce(
    (accumulator, key) =>
      accumulator?.[key],
    object
  );
}

let css =
`/* ==========================================================================
   GENERATED CONTROL CENTER TOKEN OVERRIDES
   SINGLE TOKEN AUTHORITY ONLY
   ========================================================================== */

:root {\n`;

for (const [source, target] of Object.entries(map)) {

  const value = get(tokens, source);

  if (value === undefined) {
    continue;
  }

  css += `  ${target}: ${value};\n`;
}

css += "}\n";

fs.writeFileSync(
  OUTPUT,
  css
);

console.log(
  "[Studio] Canonical token overrides generated."
);
