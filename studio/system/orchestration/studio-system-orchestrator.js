/* ==========================================================================
   STUDIO SYSTEM ORCHESTRATOR
   ========================================================================== */

import { workspacePersistence }
from "../persistence/workspace-persistence.js";

export const studioSystemOrchestrator = {

  boot() {

    workspacePersistence.ensure();

    console.log(
      "[Studio] System orchestration active."
    );
  }
};

studioSystemOrchestrator.boot();
