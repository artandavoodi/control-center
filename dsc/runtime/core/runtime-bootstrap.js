/**
 * DSC Runtime Bootstrap
 * Authoritative runtime initialization pipeline.
 */

import { runtimeEngine } from "./runtime-engine.js";
import { runtimeEventBus } from "../events/event-bus.js";

export async function bootstrapRuntime() {
  runtimeEngine.initialize();

  runtimeEventBus.emit(
    "runtime:bootstrap:started"
  );

  runtimeEngine.registerContract(
    "runtime.node",
    {
      required: ["id", "type"]
    }
  );

  runtimeEngine.registerContract(
    "runtime.adapter",
    {
      required: ["name"]
    }
  );

  runtimeEventBus.emit(
    "runtime:bootstrap:completed"
  );

  return runtimeEngine.inspect();
}
