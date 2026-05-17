/* ==========================================================================
   WORKSPACE PERSISTENCE
   ========================================================================== */

import fs from "fs";

const WORKSPACE =
"/Users/artan/Documents/Neuroartan/control-center/studio/workspace";

export const workspacePersistence = {

  ensure() {
    if (!fs.existsSync(WORKSPACE)) {
      fs.mkdirSync(WORKSPACE, { recursive: true });
    }
  }
};
