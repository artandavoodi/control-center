/**
 * SVG Upload Engine
 * Intelligent SVG ingestion authority.
 */

import fs from "fs";
import path from "path";

import { iconRegistry }
from "../../../registry/icons/core/icon-registry.js";

const ICON_SOURCE =
"/Users/artan/Documents/Neuroartan/control-center/registry/icons/source";

export class SVGUploadEngine {
  upload({
    sourceFile,
    category = "general",
    name
  }) {
    const resolved =
      path.resolve(sourceFile);

    if (!fs.existsSync(resolved)) {
      throw new Error(
        `Missing SVG file: ${resolved}`
      );
    }

    const svg =
      fs.readFileSync(
        resolved,
        "utf-8"
      );

    const normalized =
      name
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-");

    const categoryRoot =
      path.join(
        ICON_SOURCE,
        category
      );

    fs.mkdirSync(
      categoryRoot,
      {
        recursive: true
      }
    );

    const target =
      path.join(
        categoryRoot,
        `${normalized}.svg`
      );

    fs.writeFileSync(
      target,
      svg
    );

    iconRegistry.register(
      `${category}/${normalized}`,
      svg
    );

    return {
      success: true,
      target,
      registry:
        `${category}/${normalized}`
    };
  }
}

export const svgUploadEngine =
  new SVGUploadEngine();
