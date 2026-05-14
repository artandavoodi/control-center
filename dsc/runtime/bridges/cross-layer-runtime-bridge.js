import { runtimeEventBus } from "../events/event-bus.js";

function dispatchCrossLayerEvent(name, payload) {
  if (typeof window !== "undefined" && typeof window.dispatchEvent === "function") {
    window.dispatchEvent(
      new CustomEvent(name, { detail: payload })
    );
  }

  globalThis.__CONTROL_CENTER_EVENTS__ =
    globalThis.__CONTROL_CENTER_EVENTS__ || [];

  globalThis.__CONTROL_CENTER_EVENTS__.push({
    name,
    payload,
    timestamp: Date.now()
  });
}

export function initializeCrossLayerBridge() {
  runtimeEventBus.on("TOKEN_UPDATED", (payload) => {
    dispatchCrossLayerEvent("CC_TOKEN_UPDATED", payload);
  });

  runtimeEventBus.on("THEME_CHANGED", (payload) => {
    dispatchCrossLayerEvent("CC_THEME_CHANGED", payload);
  });

  runtimeEventBus.on("ICON_REGISTERED", (payload) => {
    dispatchCrossLayerEvent("CC_ICON_REGISTERED", payload);
  });
}
