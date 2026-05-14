/**
 * SVG Upload Orchestrator
 * Full ingestion + propagation authority.
 */

import { svgUploadEngine }
from "./svg-upload-engine.js";

import { svgPropagationEngine }
from "./svg-propagation-engine.js";

export class SVGUploadOrchestrator {
  upload(payload) {
    const upload =
      svgUploadEngine.upload(payload);

    const propagation =
      svgPropagationEngine.synchronize();

    return {
      upload,
      propagation
    };
  }
}

export const svgUploadOrchestrator =
  new SVGUploadOrchestrator();
