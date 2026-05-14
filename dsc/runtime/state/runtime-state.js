/**
 * DSC Runtime State Authority
 * Central synchronized runtime state layer.
 */

import { runtimeEventBus } from "../events/event-bus.js";

export class RuntimeState {
  constructor() {
    this.state = new Map();
  }

  set(key, value) {
    const previous = this.state.get(key);

    this.state.set(key, value);

    runtimeEventBus.emit("runtime:state:updated", {
      key,
      previous,
      value
    });
  }

  get(key) {
    return this.state.get(key);
  }

  has(key) {
    return this.state.has(key);
  }

  remove(key) {
    const previous = this.state.get(key);

    this.state.delete(key);

    runtimeEventBus.emit("runtime:state:removed", {
      key,
      previous
    });
  }

  clear() {
    this.state.clear();

    runtimeEventBus.emit("runtime:state:cleared");
  }

  snapshot() {
    return Object.fromEntries(this.state.entries());
  }

  inspect() {
    return {
      totalKeys: this.state.size,
      keys: [...this.state.keys()]
    };
  }
}

export const runtimeState = new RuntimeState();
