import { loadControlCenterTokens } from "./load-control-center-tokens.js";
import { initializeTokenApplicationEngine } from "./token-application-engine.js";
/**
 * DSC Runtime Bootstrap
 * Authoritative runtime initialization pipeline.
 */

import { runtimeEngine } from "./runtime-engine.js";
import { runtimeEventBus } from "../events/event-bus.js";
import { bindRuntimeConsumers } from "./consumers/runtime-consumer-bridge.js";
import { initializeCrossLayerBridge } from "../bridges/cross-layer-runtime-bridge.js";

export async function bootstrapRuntime() {
  runtimeEngine.initialize();

  bindRuntimeConsumers(runtimeEventBus, runtimeEngine.state);

  initializeCrossLayerBridge();

  initializeTokenApplicationEngine();

  await loadControlCenterTokens();

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
