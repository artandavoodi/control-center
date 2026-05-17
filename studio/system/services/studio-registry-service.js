/* ==========================================================================
   STUDIO REGISTRY SERVICE
   ========================================================================== */

import fs from "fs";
import path from "path";

const ROOT =
"/Users/artan/Documents/Neuroartan/control-center/registry";

export const studioRegistryService = {

  read(relativePath) {
    return JSON.parse(
      fs.readFileSync(
        path.join(ROOT, relativePath),
        "utf8"
      )
    );
  },

  write(relativePath, payload) {
    fs.writeFileSync(
      path.join(ROOT, relativePath),
      JSON.stringify(payload, null, 2)
    );
  }
};
