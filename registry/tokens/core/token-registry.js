/**
 * Neuroartan DSC Token Registry
 * Universal cross-platform token authority.
 */

import { runtimeEventBus }
from "../../../dsc/runtime/events/event-bus.js";

export class TokenRegistry {
  constructor() {
    this.tokens = new Map();
  }

  register(path, value) {
    this.tokens.set(path, value);

    runtimeEventBus.emit(
      "tokens:registered",
      {
        path,
        value
      }
    );
  }

  get(path) {
    return this.tokens.get(path);
  }

  has(path) {
    return this.tokens.has(path);
  }

  remove(path) {
    this.tokens.delete(path);

    runtimeEventBus.emit(
      "tokens:removed",
      {
        path
      }
    );
  }

  export() {
    return Object.fromEntries(
      this.tokens.entries()
    );
  }

  inspect() {
    return {
      totalTokens:
        this.tokens.size,
      tokens:
        [...this.tokens.keys()]
    };
  }
}

export const tokenRegistry =
  new TokenRegistry();
