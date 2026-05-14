/**
 * DSC Runtime Lifecycle
 * Runtime startup/shutdown/reload authority.
 */

import { runtimeEventBus } from "../events/event-bus.js";
import { runtimeEngine } from "./runtime-engine.js";

export class RuntimeLifecycle {
  async start() {
    runtimeEventBus.emit(
      "runtime:lifecycle:start"
    );

    runtimeEngine.initialize();

    runtimeEventBus.emit(
      "runtime:lifecycle:started"
    );
  }

  async reload() {
    runtimeEventBus.emit(
      "runtime:lifecycle:reload"
    );

    runtimeEventBus.emit(
      "runtime:lifecycle:reloaded"
    );
  }

  async shutdown() {
    runtimeEventBus.emit(
      "runtime:lifecycle:shutdown"
    );

    runtimeEventBus.emit(
      "runtime:lifecycle:shutdown-complete"
    );
  }
}

export const runtimeLifecycle =
  new RuntimeLifecycle();
