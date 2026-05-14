/**
 * DSC Runtime Adapter Registry
 * Cross-platform runtime adapter authority.
 */

import { runtimeEventBus } from "../events/event-bus.js";

export class RuntimeAdapterRegistry {
  constructor() {
    this.adapters = new Map();
  }

  register(name, adapter = {}) {
    this.adapters.set(name, adapter);

    runtimeEventBus.emit(
      "runtime:adapter:registered",
      {
        name
      }
    );
  }

  get(name) {
    return this.adapters.get(name);
  }

  has(name) {
    return this.adapters.has(name);
  }

  remove(name) {
    this.adapters.delete(name);

    runtimeEventBus.emit(
      "runtime:adapter:removed",
      {
        name
      }
    );
  }

  inspect() {
    return {
      totalAdapters: this.adapters.size,
      adapters: [...this.adapters.keys()]
    };
  }
}

export const runtimeAdapterRegistry =
  new RuntimeAdapterRegistry();
