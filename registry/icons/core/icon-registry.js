/**
 * Neuroartan SVG Icon Registry
 * Universal cross-platform icon authority.
 */

import { runtimeEventBus }
from "../../../dsc/runtime/events/event-bus.js";

export class IconRegistry {
  constructor() {
    this.icons = new Map();
  }

  register(name, svg) {
    this.icons.set(name, svg);

    runtimeEventBus.emit(
      "icons:registered",
      {
        name
      }
    );
  }

  get(name) {
    return this.icons.get(name);
  }

  has(name) {
    return this.icons.has(name);
  }

  remove(name) {
    this.icons.delete(name);

    runtimeEventBus.emit(
      "icons:removed",
      {
        name
      }
    );
  }

  export() {
    return Object.fromEntries(
      this.icons.entries()
    );
  }

  inspect() {
    return {
      totalIcons:
        this.icons.size,
      icons:
        [...this.icons.keys()]
    };
  }
}

export const iconRegistry =
  new IconRegistry();
