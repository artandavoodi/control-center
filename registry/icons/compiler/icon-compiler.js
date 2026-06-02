/**
 * Neuroartan SVG Compiler
 * Canonical SVG registry authority.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { iconRegistry }
from "../core/icon-registry.js";

const MODULE_DIR =
  path.dirname(
    fileURLToPath(import.meta.url)
  );

const ICON_ROOT =
  path.resolve(
    MODULE_DIR,
    "..",
    "source"
  );

export class IconCompiler {
  load() {
    this.removeIdenticalFinderDuplicates(
      ICON_ROOT
    );

    const files =
      this.walk(ICON_ROOT);

    for (const file of files) {
      if (!file.endsWith(".svg")) {
        continue;
      }

      const relative =
        path.relative(
          ICON_ROOT,
          file
        );

      const normalized =
        relative
          .replace(/\.svg$/i, "")
          .replaceAll("\\", "/");

      iconRegistry.register(
        normalized,
        {
          id: normalized,
          path: `${normalized}.svg`,
          publicPath: `/registry/icons/public/assets/${normalized}.svg`,
          sourcePath: file
        }
      );
    }

    return iconRegistry.inspect();
  }

  walk(dir) {
    const entries =
      fs.readdirSync(
        dir,
        {
          withFileTypes: true
        }
      );

    return entries.flatMap(
      (entry) => {
        if (entry.name === ".DS_Store") {
          return [];
        }

        const resolved =
          path.join(
            dir,
            entry.name
          );

        if (entry.isDirectory()) {
          return this.walk(
            resolved
          );
        }

        return resolved;
      }
    );
  }

  removeIdenticalFinderDuplicates(dir) {
    const entries =
      fs.readdirSync(
        dir,
        {
          withFileTypes: true
        }
      );

    for (const entry of entries) {
      const resolved =
        path.join(
          dir,
          entry.name
        );

      if (entry.isDirectory()) {
        this.removeIdenticalFinderDuplicates(
          resolved
        );
        continue;
      }

      if (!entry.isFile()) {
        continue;
      }

      const duplicateMatch =
        entry.name.match(
          /^(.*) \d+(\.[^./]+)$/u
        );

      if (!duplicateMatch) {
        continue;
      }

      const canonical =
        path.join(
          dir,
          `${duplicateMatch[1]}${duplicateMatch[2]}`
        );

      if (
        fs.existsSync(canonical) &&
        fs.readFileSync(canonical).equals(
          fs.readFileSync(resolved)
        )
      ) {
        fs.rmSync(
          resolved,
          { force: true }
        );
      }
    }
  }
}

export const iconCompiler =
  new IconCompiler();
