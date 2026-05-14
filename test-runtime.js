import { runtimeEngine }
from "./dsc/runtime/core/runtime-engine.js";

import { runtimeDiagnostics }
from "./dsc/runtime/diagnostics/runtime-diagnostics.js";

runtimeEngine.initialize();

runtimeEngine.registerNode(
  "studio.main",
  {
    id: "studio.main",
    type: "studio"
  }
);

runtimeEngine.registerNode(
  "registry.core",
  {
    id: "registry.core",
    type: "registry"
  }
);

runtimeEngine.connectNodes(
  "studio.main",
  "registry.core"
);

runtimeEngine.setState(
  "system.mode",
  "operational"
);

console.log(
  "\n[Runtime Mutation Test]\n"
);

console.table(
  runtimeDiagnostics.report()
);
