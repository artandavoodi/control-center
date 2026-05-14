/**
 * DSC Runtime Adapter Executor
 * Runtime adapter execution orchestration layer.
 */

import { runtimeEventBus } from "../events/event-bus.js";
import { runtimeAdapterRegistry } from "./runtime-adapter-registry.js";

export class RuntimeAdapterExecutor {
  async execute(adapterName, method, payload = {}) {
    const adapter =
      runtimeAdapterRegistry.get(adapterName);

    if (!adapter) {
      throw new Error(
        `Missing adapter: ${adapterName}`
      );
    }

    if (typeof adapter[method] !== "function") {
      throw new Error(
        `Missing adapter method: ${method}`
      );
    }

    runtimeEventBus.emit(
      "runtime:adapter:execution-started",
      {
        adapter: adapterName,
        method
      }
    );

    try {
      const result =
        await adapter[method](payload);

      runtimeEventBus.emit(
        "runtime:adapter:execution-completed",
        {
          adapter: adapterName,
          method
        }
      );

      return result;
    } catch (error) {
      runtimeEventBus.emit(
        "runtime:adapter:execution-failed",
        {
          adapter: adapterName,
          method,
          error
        }
      );

      throw error;
    }
  }
}

export const runtimeAdapterExecutor =
  new RuntimeAdapterExecutor();
