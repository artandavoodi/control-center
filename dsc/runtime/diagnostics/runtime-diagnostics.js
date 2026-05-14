/**
 * DSC Runtime Diagnostics
 * Runtime inspection and health system.
 */

import { runtimeGraph } from "../graph/runtime-graph.js";
import { runtimeState } from "../state/runtime-state.js";
import { runtimeContracts } from "../contracts/runtime-contracts.js";
import { taskScheduler } from "../scheduler/task-scheduler.js";
import { subscriptionManager } from "../subscriptions/subscription-manager.js";

export class RuntimeDiagnostics {
  report() {
    return {
      graph: runtimeGraph.inspect(),
      state: runtimeState.inspect(),
      contracts: runtimeContracts.inspect(),
      scheduler: taskScheduler.inspect(),
      subscriptions: subscriptionManager.inspect(),
      timestamp: Date.now()
    };
  }

  print() {
    console.table(this.report());
  }
}

export const runtimeDiagnostics =
  new RuntimeDiagnostics();
