/**
 * Control Center Token Synchronization Pipeline
 * Compiles canonical website token sources and exports runtime adapters.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

import { tokenRegistry }
from "./core/token-registry.js";

import { cssTokenExporter }
from "./exporters/css/css-token-exporter.js";

import { runtimeTokenExporter }
from "./exporters/runtime/runtime-token-exporter.js";

import { swiftTokenExporter }
from "./exporters/swift/swift-token-exporter.js";

const MODULE_DIR =
  path.dirname(
    fileURLToPath(import.meta.url)
  );

const CONTROL_CENTER_ROOT =
  path.resolve(
    MODULE_DIR,
    "..",
    ".."
  );

const NEUROARTAN_ROOT =
  path.resolve(
    CONTROL_CENTER_ROOT,
    ".."
  );

const WEBSITE_TOKEN_ROOT =
  path.join(
    NEUROARTAN_ROOT,
    "website",
    "docs",
    "assets",
    "css",
    "core",
    "01-tokens"
  );

const LEGACY_CONTROL_CENTER_TOKEN_MIRROR =
  path.join(
    MODULE_DIR,
    "source",
    "website"
  );

const MANIFEST_ROOT =
  path.join(
    MODULE_DIR,
    "manifests"
  );

const TOKEN_PATTERN =
  /--([a-zA-Z0-9-_]+)\s*:\s*([^;]+);/g;

const IMPORT_PATTERN =
  /@import\s+url\(['"]?([^'")]+)['"]?\);/g;

function walk(dir) {
  const entries =
    fs.readdirSync(
      dir,
      { withFileTypes: true }
    );

  return entries.flatMap(
    (entry) => {
      if (entry.name === ".DS_Store") {
        return [];
      }

      const resolved =
        path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return walk(resolved);
      }

      return resolved;
    }
  );
}

function baseTokenSource(css) {
  let output = "";
  let index = 0;

  while (index < css.length) {
    const rest =
      css.slice(index);

    const scopedMatch =
      rest.match(/^@(media|container|supports)\b/);

    if (!scopedMatch) {
      output += css[index];
      index += 1;
      continue;
    }

    const blockStart =
      css.indexOf("{", index);

    if (blockStart === -1) {
      break;
    }

    let depth = 0;
    let cursor = blockStart;

    while (cursor < css.length) {
      if (css[cursor] === "{") {
        depth += 1;
      }

      if (css[cursor] === "}") {
        depth -= 1;

        if (depth === 0) {
          cursor += 1;
          break;
        }
      }

      cursor += 1;
    }

    index = cursor;
  }

  return output;
}

function rootTokenSource(css) {
  const source =
    baseTokenSource(css);

  let output = "";
  let index = 0;

  while (index < source.length) {
    const rootIndex =
      source.indexOf(":root", index);

    if (rootIndex === -1) {
      break;
    }

    const blockStart =
      source.indexOf("{", rootIndex);

    if (blockStart === -1) {
      break;
    }

    let depth = 0;
    let cursor = blockStart;

    while (cursor < source.length) {
      if (source[cursor] === "{") {
        depth += 1;
      }

      if (source[cursor] === "}") {
        depth -= 1;

        if (depth === 0) {
          output += source.slice(blockStart + 1, cursor);
          index = cursor + 1;
          break;
        }
      }

      cursor += 1;
    }

    if (cursor >= source.length) {
      break;
    }
  }

  return output;
}

function orderedTokenFiles(root) {
  const entry =
    path.join(
      root,
      "00-tokens-all.css"
    );

  const allFiles =
    walk(root)
      .filter((file) => file.endsWith(".css"))
      .sort();

  if (!fs.existsSync(entry)) {
    return allFiles;
  }

  const content =
    fs.readFileSync(
      entry,
      "utf-8"
    );

  const imported =
    [...content.matchAll(IMPORT_PATTERN)]
      .map((match) => path.resolve(root, match[1]))
      .filter((file) => fs.existsSync(file));

  const seen =
    new Set(imported);

  return [
    ...imported,
    ...allFiles.filter((file) => !seen.has(file) && file !== entry)
  ];
}

function registerTokenFile(file, state) {
  const content =
    fs.readFileSync(
      file,
      "utf-8"
    );

  const matches =
    rootTokenSource(content).matchAll(TOKEN_PATTERN);

  for (const match of matches) {
    const [, key, value] = match;
    const tokenKey =
      key.trim();
    const tokenValue =
      value.trim();

    if (state.values.has(tokenKey)) {
      const previousValue =
        state.values.get(tokenKey);

      if (previousValue !== tokenValue) {
        state.overrides.push({
          token: tokenKey,
          previousValue,
          tokenValue,
          file
        });
      }
    }

    state.values.set(
      tokenKey,
      tokenValue
    );

    tokenRegistry.register(
      tokenKey,
      tokenValue
    );
  }
}

export function syncTokens() {
  if (!fs.existsSync(WEBSITE_TOKEN_ROOT)) {
    throw new Error(
      `Website token root not found: ${WEBSITE_TOKEN_ROOT}`
    );
  }

  fs.rmSync(
    LEGACY_CONTROL_CENTER_TOKEN_MIRROR,
    {
      recursive: true,
      force: true
    }
  );

  fs.mkdirSync(
    MANIFEST_ROOT,
    { recursive: true }
  );

  const state = {
    values: new Map(),
    overrides: []
  };

  const files =
    orderedTokenFiles(WEBSITE_TOKEN_ROOT);

  for (const file of files) {
    registerTokenFile(
      file,
      state
    );
  }

  const coreManifest =
    path.join(
      MANIFEST_ROOT,
      "core-tokens.generated.json"
    );

  fs.writeFileSync(
    coreManifest,
    JSON.stringify(
      tokenRegistry.export(),
      null,
      2
    )
  );

  const cssManifest =
    cssTokenExporter.export(
      path.join(
        MANIFEST_ROOT,
        "tokens.css"
      )
    );

  const controlCenterCSSManifest =
    cssTokenExporter.export(
      path.join(
        MANIFEST_ROOT,
        "control-center.tokens.css"
      )
    );

  const runtimeManifest =
    runtimeTokenExporter.export(
      path.join(
        MANIFEST_ROOT,
        "runtime-tokens.json"
      )
    );

  const swiftManifest =
    swiftTokenExporter.export(
      path.join(
        MANIFEST_ROOT,
        "DSCTokens.generated.swift"
      )
    );

  return {
    source: WEBSITE_TOKEN_ROOT,
    files: files.length,
    tokens: state.values.size,
    overrides: state.overrides,
    manifests: {
      coreManifest,
      cssManifest,
      controlCenterCSSManifest,
      runtimeManifest,
      swiftManifest
    }
  };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result =
    syncTokens();

  console.log(
    "\n[Control Center Tokens Synchronized]\n"
  );

  console.log(
    `Source files: ${result.files}`
  );

  console.log(
    `Registered tokens: ${result.tokens}`
  );

  if (result.overrides.length > 0) {
    console.warn(
      `Cascade token overrides: ${result.overrides.length}`
    );
  }

  console.log(
    result.manifests
  );
}
