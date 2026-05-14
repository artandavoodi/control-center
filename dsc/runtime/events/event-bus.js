/**
 * DSC Runtime Event Bus
 * Authoritative runtime communication layer.
 */

export class EventBus {
  constructor() {
    this.events = new Map();
  }

  on(event, handler) {
    if (!this.events.has(event)) {
      this.events.set(event, new Set());
    }

    this.events.get(event).add(handler);

    return () => this.off(event, handler);
  }

  off(event, handler) {
    if (!this.events.has(event)) return;

    this.events.get(event).delete(handler);

    if (this.events.get(event).size === 0) {
      this.events.delete(event);
    }
  }

  emit(event, payload = {}) {
    if (!this.events.has(event)) return;

    for (const handler of this.events.get(event)) {
      try {
        handler(payload);
      } catch (error) {
        console.error(
          `[DSC Runtime] Event handler failed for "${event}"`,
          error
        );
      }
    }
  }

  clear() {
    this.events.clear();
  }

  inspect() {
    return {
      totalEvents: this.events.size,
      events: [...this.events.keys()]
    };
  }
}

export const runtimeEventBus = new EventBus();
