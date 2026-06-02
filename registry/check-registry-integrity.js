/**
 * Control Center Registry Integrity Gate
 * Verifies canonical sources, generated icon exports, and registry artifacts.
 */

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const MODULE_DIR =
  path.dirname(
    fileURLToPath(import.meta.url)
  );

const CONTROL_CENTER_ROOT =
  path.resolve(
    MODULE_DIR,
    ".."
  );

const WEBSITE_ROOT =
  path.resolve(
    CONTROL_CENTER_ROOT,
    "..",
    "website"
  );

const WEBSITE_TOKEN_ROOT =
  path.join(
    WEBSITE_ROOT,
    "docs",
    "assets",
    "css",
    "core",
    "01-tokens"
  );

const LEGACY_CONTROL_CENTER_TOKEN_MIRROR =
  path.join(
    MODULE_DIR,
    "tokens",
    "source",
    "website"
  );

const ICON_SOURCE_ROOT =
  path.join(
    MODULE_DIR,
    "icons",
    "source"
  );

const CONTROL_CENTER_ICON_MIRROR =
  path.join(
    MODULE_DIR,
    "icons",
    "public",
    "assets"
  );

const WEBSITE_ICON_MIRROR =
  path.join(
    WEBSITE_ROOT,
    "docs",
    "registry",
    "icons",
    "public",
    "assets"
  );

const LEGACY_WEBSITE_ICON_MIRROR =
  path.join(
    WEBSITE_ROOT,
    "docs",
    "assets",
    "icons"
  );

const REQUIRED_MANIFESTS = [
  "registry/icons/manifests/IconRegistry.generated.swift",
  "registry/icons/manifests/icon-manifest.json",
  "registry/tokens/manifests/DSCTokens.generated.swift",
  "registry/tokens/manifests/control-center.tokens.css",
  "registry/tokens/manifests/core-tokens.generated.json",
  "registry/tokens/manifests/runtime-tokens.json",
  "registry/tokens/manifests/tokens.css"
];

function walk(root) {
  if (!fs.existsSync(root)) {
    throw new Error(
      `Registry path not found: ${root}`
    );
  }

  const files = [];

  function visit(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      if (entry.name === ".DS_Store") {
        continue;
      }

      const resolved =
        path.join(
          directory,
          entry.name
        );

      if (entry.isDirectory()) {
        visit(resolved);
        continue;
      }

      if (entry.isFile()) {
        files.push(resolved);
      }
    }
  }

  visit(root);

  return files;
}

function fingerprint(file) {
  return crypto
    .createHash("sha256")
    .update(fs.readFileSync(file))
    .digest("hex");
}

function inspect(root, includeFile) {
  return new Map(
    walk(root)
      .filter(includeFile)
      .map(
        (file) => [
          path.relative(root, file).replaceAll("\\", "/"),
          fingerprint(file)
        ]
      )
      .sort(
        ([left], [right]) => left.localeCompare(right)
      )
  );
}

function compare(label, sourceRoot, mirrorRoot, includeFile, requireHardLink = false) {
  const source =
    inspect(
      sourceRoot,
      includeFile
    );

  const mirror =
    inspect(
      mirrorRoot,
      includeFile
    );

  const missing =
    [...source.keys()]
      .filter((file) => !mirror.has(file));

  const extra =
    [...mirror.keys()]
      .filter((file) => !source.has(file));

  const changed =
    [...source.entries()]
      .filter(
        ([file, checksum]) =>
          mirror.has(file) &&
          mirror.get(file) !== checksum
      )
      .map(([file]) => file);

  const detached =
    requireHardLink
      ? [...source.keys()]
        .filter(
          (file) => {
            if (!mirror.has(file)) {
              return false;
            }

            const sourceStat =
              fs.statSync(
                path.join(sourceRoot, file)
              );

            const mirrorStat =
              fs.statSync(
                path.join(mirrorRoot, file)
              );

            return (
              sourceStat.dev !== mirrorStat.dev ||
              sourceStat.ino !== mirrorStat.ino
            );
          }
        )
      : [];

  if (missing.length || extra.length || changed.length || detached.length) {
    throw new Error(
      [
        `${label} mirror is not synchronized.`,
        missing.length ? `Missing: ${missing.join(", ")}` : "",
        extra.length ? `Extra: ${extra.join(", ")}` : "",
        changed.length ? `Changed: ${changed.join(", ")}` : "",
        detached.length ? `Detached: ${detached.join(", ")}` : ""
      ]
        .filter(Boolean)
        .join("\n")
    );
  }

  return source.size;
}

function assertPathRemoved(target, label) {
  if (fs.existsSync(target)) {
    throw new Error(
      `${label} must not exist: ${target}`
    );
  }
}

function assertNoFinderDuplicates(root, label) {
  const duplicates =
    walk(root)
      .filter(
        (file) =>
          / \d+\.[^/]+$/u.test(
            path.basename(file)
          )
      );

  if (duplicates.length) {
    throw new Error(
      `${label} contains Finder-style duplicates:\n${duplicates.join("\n")}`
    );
  }
}

function assertNoFinderDuplicateDirectories(root, label) {
  const duplicates = [];

  function visit(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      if (!entry.isDirectory()) {
        continue;
      }

      const resolved =
        path.join(
          directory,
          entry.name
        );

      if (/ \d+$/u.test(entry.name)) {
        duplicates.push(resolved);
      }

      visit(resolved);
    }
  }

  visit(root);

  if (duplicates.length) {
    throw new Error(
      `${label} contains Finder-style duplicate directories:\n${duplicates.join("\n")}`
    );
  }
}

function assertRequiredManifests() {
  for (const relative of REQUIRED_MANIFESTS) {
    const manifest =
      path.join(
        CONTROL_CENTER_ROOT,
        relative
      );

    if (!fs.existsSync(manifest) || fs.statSync(manifest).size === 0) {
      throw new Error(
        `Required registry manifest is missing or empty: ${manifest}`
      );
    }
  }
}

const tokenFiles =
  inspect(
    WEBSITE_TOKEN_ROOT,
    (file) => file.endsWith(".css")
  ).size;

assertPathRemoved(
  LEGACY_CONTROL_CENTER_TOKEN_MIRROR,
  "Legacy Control Center token mirror"
);

assertPathRemoved(
  LEGACY_WEBSITE_ICON_MIRROR,
  "Legacy website icon mirror"
);

assertNoFinderDuplicates(
  ICON_SOURCE_ROOT,
  "Control Center icon source"
);

assertNoFinderDuplicateDirectories(
  ICON_SOURCE_ROOT,
  "Control Center icon source"
);

assertNoFinderDuplicateDirectories(
  CONTROL_CENTER_ICON_MIRROR,
  "Control Center icon mirror"
);

assertNoFinderDuplicateDirectories(
  WEBSITE_ICON_MIRROR,
  "Website icon mirror"
);

const controlCenterIconFiles =
  compare(
    "Control Center icon",
    ICON_SOURCE_ROOT,
    CONTROL_CENTER_ICON_MIRROR,
    () => true
  );

const websiteIconFiles =
  compare(
    "Website icon",
    ICON_SOURCE_ROOT,
    WEBSITE_ICON_MIRROR,
    () => true
  );

assertRequiredManifests();

console.log(
  "\n[Control Center Registry Integrity Verified]\n"
);

console.log({
  tokens: {
    sourceFiles: tokenFiles
  },
  icons: {
    sourceFiles: controlCenterIconFiles,
    websiteMirrorFiles: websiteIconFiles
  },
  manifests: REQUIRED_MANIFESTS.length
});
