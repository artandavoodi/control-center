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
}

export const iconCompiler =
  new IconCompiler();
