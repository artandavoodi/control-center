/**
 * Neuroartan Public Icon Exporter
 * Canonical source-to-public asset propagation authority.
 */

import fs from "node:fs";
import path from "node:path";

const ROOT =
  path.resolve(
    path.dirname(new URL(import.meta.url).pathname),
    "../../../.."
  );

const SOURCE_ROOT =
  path.join(ROOT, "registry/icons/source");

const PUBLIC_ROOT =
  path.join(ROOT, "registry/icons/public/assets");

const WEBSITE_PUBLIC_ROOT =
  path.resolve(
    ROOT,
    "..",
    "website",
    "docs",
    "registry/icons/public/assets"
  );

function copyDirectory(source, destination) {
  fs.mkdirSync(destination, { recursive: true });

  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    if (entry.name === ".DS_Store") {
      continue;
    }

    const sourcePath =
      path.join(source, entry.name);

    const destinationPath =
      path.join(destination, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(sourcePath, destinationPath);
      continue;
    }

    if (entry.isFile()) {
      try {
        fs.linkSync(sourcePath, destinationPath);
      } catch {
        fs.copyFileSync(sourcePath, destinationPath);
      }
    }
  }
}

class PublicIconExporter {
  export() {
    fs.rmSync(PUBLIC_ROOT, {
      recursive: true,
      force: true
    });

    fs.rmSync(WEBSITE_PUBLIC_ROOT, {
      recursive: true,
      force: true
    });

    copyDirectory(
      SOURCE_ROOT,
      PUBLIC_ROOT
    );

    copyDirectory(
      SOURCE_ROOT,
      WEBSITE_PUBLIC_ROOT
    );

    return {
      source: SOURCE_ROOT,
      public_assets: PUBLIC_ROOT,
      website_public_assets: WEBSITE_PUBLIC_ROOT
    };
  }
}

export const publicIconExporter =
  new PublicIconExporter();
