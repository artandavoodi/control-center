/**
 * Neuroartan SVG Compiler
 * Canonical SVG registry authority.
 */

import fs from "fs";
import path from "path";

import { iconRegistry }
from "../core/icon-registry.js";

const ICON_ROOT =
"/Users/artan/Documents/Neuroartan/control-center/registry/icons/source";

export class IconCompiler {
  load() {
    const files =
      this.walk(ICON_ROOT);

    for (const file of files) {
      if (!file.endsWith(".svg")) {
        continue;
      }

      const svg =
        fs.readFileSync(
          file,
          "utf-8"
        );

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
        svg
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
