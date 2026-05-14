/**
 * Website Token Loader
 * Imports canonical website tokens into
 * DSC runtime authority.
 */

import fs from "fs";

import { tokenRegistry }
from "./core/token-registry.js";

const WEBSITE_TOKEN_FILE =
"/Users/artan/Documents/Neuroartan/website/docs/assets/css/core/00-core-all.css";

const content =
  fs.readFileSync(
    WEBSITE_TOKEN_FILE,
    "utf-8"
  );

const tokenMatches =
  [...content.matchAll(
    /--([a-zA-Z0-9-_]+)\s*:\s*([^;]+);/g
  )];

for (const match of tokenMatches) {
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
