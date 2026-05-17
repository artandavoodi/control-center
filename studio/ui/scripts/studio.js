/* ==========================================================================
   STUDIO UI RUNTIME
   ========================================================================== */

import "../../system/orchestration/studio-system-orchestrator.js";

async function bootStudio() {
  document.body.dataset.runtime = "active";

  const runtime =
  document.querySelector("[data-runtime-status]");

  if (runtime) {
    runtime.textContent = "Studio Runtime Active";
  }

  console.log("[Studio] UI runtime active.");
}

bootStudio();
