/**
 * Studio Runtime Binding
 * Live synchronization bridge between
 * studio and runtime authority.
 */

import { runtimeEngine }
from "../../../dsc/runtime/core/runtime-engine.js";

import { subscriptionManager }
from "../../../dsc/runtime/subscriptions/subscription-manager.js";

export class RuntimeStudioBinding {
  constructor() {
    this.connected = false;
  }

  connect() {
    if (this.connected) return;

    this.connected = true;

    subscriptionManager.subscribe(
      "runtime:state:updated",
      (payload) => {
        console.log(
          "\n[Studio Runtime Sync]\n"
        );

        console.table(payload);
      }
    );
  }

  inspect() {
    return {
      connected: this.connected,
      runtime:
        runtimeEngine.inspect()
    };
  }
}

export const runtimeStudioBinding =
  new RuntimeStudioBinding();
