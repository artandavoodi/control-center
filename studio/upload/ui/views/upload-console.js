/**
 * Upload Console
 * Visual SVG ingestion interface.
 */

import { svgUploadOrchestrator }
from "../../runtime/svg-upload-orchestrator.js";

export class UploadConsole {
  async upload(payload) {
    const result =
      svgUploadOrchestrator.upload(
        payload
      );

    console.log(
      "\n[SVG Upload Complete]\n"
    );

    console.table(result);

    return result;
  }
}

export const uploadConsole =
  new UploadConsole();
