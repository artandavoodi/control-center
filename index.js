/**
 * Neuroartan Control Center
 * Sovereign Runtime Entrypoint
 */

import { bootstrapRuntime }
from "./dsc/runtime/core/runtime-bootstrap.js";

import { runtimeLifecycle }
from "./dsc/runtime/core/runtime-lifecycle.js";

import { runtimeDiagnostics }
from "./dsc/runtime/diagnostics/runtime-diagnostics.js";

import "./bootstrap/00-bootstrap-all.js";

async function startControlCenter() {
  await runtimeLifecycle.start();

  const runtime =
    await bootstrapRuntime();

  console.log(
    "\n[Neuroartan Control Center Initialized]\n"
  );

  console.table(
    runtimeDiagnostics.report()
  );

  return runtime;
}

startControlCenter();
