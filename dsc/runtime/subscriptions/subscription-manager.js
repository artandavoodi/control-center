/**
 * DSC Runtime Subscription Manager
 * Reactive runtime synchronization layer.
 */

import { runtimeEventBus } from "../events/event-bus.js";

export class SubscriptionManager {
  constructor() {
    this.subscriptions = new Map();
  }

  subscribe(channel, handler) {
    if (!this.subscriptions.has(channel)) {
      this.subscriptions.set(channel, new Set());
    }

    this.subscriptions.get(channel).add(handler);

    const unsubscribeEvent = runtimeEventBus.on(
      channel,
      handler
    );

    return () => {
      unsubscribeEvent();

      this.subscriptions.get(channel)?.delete(handler);

      if (this.subscriptions.get(channel)?.size === 0) {
        this.subscriptions.delete(channel);
      }
    };
  }

  inspect() {
    return {
      totalChannels: this.subscriptions.size,
      channels: [...this.subscriptions.keys()]
    };
  }
}

export const subscriptionManager =
  new SubscriptionManager();
