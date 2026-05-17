/* ==========================================================================
   STUDIO RUNTIME
   SINGLE CONTROL CENTER AUTHORITY
   ========================================================================== */

import "../system/orchestration/studio-system-orchestrator.js";

export const StudioRuntime = {

  initialized: false,

  boot() {

    if (this.initialized) {
      return;
    }

    this.initialized = true;

    console.log(
      "[StudioRuntime] Active"
    );
  }
};

StudioRuntime.boot();
