/**
 * DSC Runtime Registry Synchronization
 * Registry-to-runtime synchronization authority.
 */

import { runtimeEngine } from "./runtime-engine.js";
import { runtimeEventBus } from "../events/event-bus.js";

export class RuntimeRegistrySync {
  synchronize(nodes = []) {
    for (const node of nodes) {
      const validation =
        runtimeEngine.validate(
          "runtime.node",
          node
        );

      if (!validation.valid) {
        runtimeEventBus.emit(
          "runtime:registry-sync:validation-failed",
          {
            node,
            validation
          }
        );

        continue;
      }

      runtimeEngine.registerNode(
        node.id,
        node
      );

      runtimeEventBus.emit(
        "runtime:registry-sync:node-synchronized",
        {
          id: node.id
        }
      );
    }
  }
}

export const runtimeRegistrySync =
  new RuntimeRegistrySync();
