import { runtimeEngine }
from "./dsc/runtime/core/runtime-engine.js";

import { subscriptionManager }
from "./dsc/runtime/subscriptions/subscription-manager.js";

runtimeEngine.initialize();

subscriptionManager.subscribe(
  "runtime:state:updated",
  (payload) => {
    console.log(
      "\n[Runtime State Updated]\n"
    );

    console.table(payload);
  }
);

runtimeEngine.setState(
  "system.theme",
  "neuroartan-dark"
);

runtimeEngine.setState(
  "system.mode",
  "live-runtime"
);
