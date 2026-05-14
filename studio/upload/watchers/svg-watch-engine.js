/**
 * SVG Watch Engine
 * Automatic ecosystem propagation watcher.
 */

import fs from "fs";

import { svgPropagationEngine }
from "../runtime/svg-propagation-engine.js";

const WATCH_ROOT =
"/Users/artan/Documents/Neuroartan/control-center/registry/icons/source";

export class SVGWatchEngine {
  start() {
    fs.watch(
      WATCH_ROOT,
      {
        recursive: true
      },
      async () => {
        console.log(
          "\n[SVG Change Detected]\n"
        );

        const result =
          svgPropagationEngine.synchronize();

        console.log(
          "\n[Propagation Complete]\n"
        );

        console.table(result);
      }
    );

    console.log(
      "\n[SVG Watch Engine Operational]\n"
    );
  }
}

export const svgWatchEngine =
  new SVGWatchEngine();
