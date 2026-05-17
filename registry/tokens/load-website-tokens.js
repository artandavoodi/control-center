/**
 * Website Token Loader
 * Imports canonical website tokens into
 * DSC runtime authority.
 */

import fs from "fs";

import { tokenRegistry }
from "./core/token-registry.js";

const WEBSITE_TOKEN_DIR =
  "/Users/artan/Documents/Neuroartan/website/docs/assets/css/core/01-tokens";

const tokenFiles = [
  "color.tokens.css",
  "typography.tokens.css",
  "spacing.tokens.css",
  "radius.tokens.css",
  "shadow.tokens.css",
  "interaction.tokens.css",
  "motion.tokens.css",
  "zindex.tokens.css",
  "layout.tokens.css",
  "control.tokens.css",
  "overlay.tokens.css",
  "navigation.tokens.css",
  "feedback.tokens.css",
  "data.tokens.css",
  "editor.tokens.css"
];

let allTokenMatches = [];

for (const file of tokenFiles) {
  const filePath = `${WEBSITE_TOKEN_DIR}/${file}`;
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const matches = [...content.matchAll(/--([a-zA-Z0-9-_]+)\s*:\s*([^;]+);/g)];
    allTokenMatches.push(...matches);
  } catch (error) {
    console.log(`Skipping ${file}: ${error.message}`);
  }
}

for (const match of allTokenMatches) {
  const [, key, value] = match;

  tokenRegistry.register(
    key.trim(),
    value.trim()
  );
}

console.log(
  "\n[Website Tokens Loaded]\n"
);

console.table(
  tokenRegistry.inspect()
);
