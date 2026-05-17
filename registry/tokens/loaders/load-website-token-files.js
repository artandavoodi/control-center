/**
 * Canonical Website Token Loader
 * Extracts authoritative tokens from
 * Neuroartan website token architecture.
 */

import fs from "fs";
import path from "path";

import { tokenRegistry }
from "../core/token-registry.js";

const TOKEN_ROOT =
"/Users/artan/Documents/Neuroartan/website/docs/assets/css/core/01-tokens";

function walk(dir) {
  const entries =
    fs.readdirSync(
      dir,
      { withFileTypes: true }
    );

  return entries.flatMap(
    (entry) => {
      const resolved =
        path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return walk(resolved);
      }

      return resolved;
    }
  );
}

const files = walk(TOKEN_ROOT);

for (const file of files) {
  if (!file.endsWith(".css")) {
    continue;
  }

  const content =
    fs.readFileSync(
      file,
      "utf-8"
    );

  const matches =
    [...content.matchAll(
      /--([a-zA-Z0-9-_]+)\s*:\s*([^;]+);/g
    )];

  for (const match of matches) {
    const [, key, value] = match;

    tokenRegistry.register(
      key.trim(),
      value.trim()
    );
  }
}

console.log(
  `\n[Canonical Website Tokens Loaded] ${tokenRegistry.inspect().totalTokens} tokens\n`
);
